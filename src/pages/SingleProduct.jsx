import { useLoaderData } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";

export const loader = async ({ params }) => {
  const req = await axiosInstance.get("/products/" + params.id);
  const product = req.data;
  return { product };
};

function SingleProduct() {
  const { product } = useLoaderData();
  return (
    <div className="mb-12 grid md:grid-cols-1">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={product.thumbnail} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-sm md:text-3xl">{product.title}</h2>
          <p>${product.price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-sm md:btn-md">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
