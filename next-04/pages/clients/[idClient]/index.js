import React from "react";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const navigateToProject = (e) => {
    //router.push(`/clients/${router.query.idClient}/1`);
    //router.replace(`/clients/${router.query.idClient}/1`)
    router.push({
      pathname: "/clients/[idClient]/[proyId]",
      query: { idClient: "mijotron", proyId: 1 },
    });
  };
  return (
    <div>
      index clients id
      <button onClick={(e) => navigateToProject(e)}>Project A</button>
    </div>
  );
};

export default index;
