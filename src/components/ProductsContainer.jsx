import { useContext } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { GlobalContext } from "../context/globalContext";
import { toast } from "react-toastify";

function ProductsContainer() {
  const { addProduct, selectedProducts } = useContext(GlobalContext);
  const { products } = useLoaderData();

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
    <div className="grid gap-5 md:grid-cols-3">
      {products.map((prod) => {
        return (
          <Link
            to={`/singleproduct/${prod.id}`}
            key={prod.id}
            className="card w-full bg-base-100 shadow-xl"
          >
            <figure>
              <img src={prod.thumbnail} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-sm md:text-2xl">{prod.title}</h2>
              <p>${prod.price}</p>
              <div className="card-actions justify-end">
                <button
                  onClick={(e) => buyProduct(e, prod)}
                  className="btn btn-primary btn-sm md:btn-md"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductsContainer;
