const fs = require("fs/promises");
const path = require("path");

const productPage = ({ selectedProduct }) => {
  if (!selectedProduct) {
    return <h3>Loading Page... Try again later</h3>;
  }
  return (
    <>
      <ul>
        <h1>{selectedProduct.title} </h1>
        <h3> {selectedProduct.id} </h3>
      </ul>
    </>
  );
};

export default productPage;

export const getStaticPaths = async () => {
  //array of objets, for dynamic segment ids
  //So next will next for this page to be call getStaticProps n times, for params qty
  //To tell which concrete instances must be pregenerated
  const data = await getDataProducts();
  const ids = data.products.map((prod) => prod.id);
  const params = ids.map((id) => ({ params: { productId: id } }));

  return {
    paths: params,
    fallback: true,
  };
  /*fallback:
    pregenrate millons of paths, will be super long and inefficient
      -true: nextjs even pages not listed can be valid, but not pregenerated but INTIME
        -only generated when needed
      -"blocking": server will wait until it is generated tofetch it
  */
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const id = params.productId;
  const data = await getDataProducts();
  const product = data.products.find((prod) => prod.id === id);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      selectedProduct: product,
    },
  };
};

const getDataProducts = async () => {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
};
