import { useParams } from "react-router";

const ProductDetail = (props) => {
  const { productId } = useParams();

  return (
    <section>
      <h1>Product Detail</h1>
      <h2>{productId}</h2>
    </section>
  );
};

export default ProductDetail;
