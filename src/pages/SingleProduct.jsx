import { useLoaderData } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";
import { GlobalContext } from "../context/globalContext";
import { useContext } from "react";
import { toast } from "react-toastify";

export const loader = async ({ params }) => {
  const req = await axiosInstance.get("/products/" + params.id);
  const product = req.data;
  return { product };
};

function SingleProduct() {
  const { product } = useLoaderData();
  const { addProduct, selectedProducts } = useContext(GlobalContext);

  const buyProduct = (e, prod) => {
    e.preventDefault();
    const product = selectedProducts.find((p) => p.id == prod.id);
    if (product) {
      toast.warn("  Already, added  !");
      return;
    }
    addProduct({ ...prod, amount: 1 });
  };

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
            <button
              onClick={(e) => buyProduct(e, product)}
              className="btn btn-primary btn-sm md:btn-md"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
