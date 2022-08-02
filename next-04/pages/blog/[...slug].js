import { useRouter } from "next/router";

const BlogPage = () => {
  const router = useRouter();
  console.log("r; ", router.query);
  return <div>BlogPage</div>;
};

export default BlogPage;
