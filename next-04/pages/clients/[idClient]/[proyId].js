import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  console.log("r; ", router.query);
  return <div>client indexed static path </div>;
};

export default index;
