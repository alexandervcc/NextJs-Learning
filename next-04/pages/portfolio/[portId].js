import { useRouter } from "next/router";

const portfolioId = () => {
  const router = useRouter();
  return <div>portfolioId {router.query.portId} </div>;
};

export default portfolioId;
