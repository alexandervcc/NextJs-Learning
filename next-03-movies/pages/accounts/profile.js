import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";
import Layout from "@/components/Layout";
import { parseCookies } from "@/helpers/index";
import { URL_API } from "@/config/index";
import { AdminDog } from "@/components/AdminDog";
import { useRouter } from "next/router";

const profile = ({ listDogs, token }) => {
  const router = useRouter();

  
  const deleteDog = async (id) => {
    const res = await fetch(`${URL_API}/api/dogs/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    if (!res.ok) {
      toast.error(data.error.message);
    } else {
      router.reload();
    }
  };

  return (
    <Layout title="My Profile">
      <ToastContainer theme="colored" />
      <h1 className="text-center">My Profile</h1>
      <h5>My Dogs</h5>
      {listDogs.dogs.map((dog) => (
        <AdminDog key={dog.id} dog={dog} handleDelete={deleteDog} />
      ))}
    </Layout>
  );
};

export default profile;

export const getServerSideProps = async ({ req }) => {
  const { token } = parseCookies(req);
  if (!token) {
    return {
      notFound: true,
    };
  }

  const resUser = await fetch(`${URL_API}/api/users/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const user = await resUser.json();

  const resDogs = await fetch(`${URL_API}/api/users/${user.id}?populate=*`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const dogs = await resDogs.json();

  return {
    props: {
      listDogs: dogs,
      token,
    },
  };
};
