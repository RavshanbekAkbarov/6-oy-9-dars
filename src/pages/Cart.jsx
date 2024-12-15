//hooks
import { TabelRow } from "../components";
import { GlobalContext } from "../context/globalContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const { selectedProducts, totalPrice, totalAmount } =
    useContext(GlobalContext);
  if (selectedProducts.length == 0) {
    return (
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-center text-3xl font-bold">
          {" "}
          You do'nt have any products !
        </h1>
        <Link className="mb-30 btn btn-success" to="/">
          Buy Something :)
        </Link>
      </div>
    );
  }
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Price</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {selectedProducts.map((product) => {
            return (
              <TabelRow
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                amount={product.amount}
                thumbnail={product.thumbnail}
                brand={product.brand}
              />
            );
          })}
        </tbody>
      </table>
      <div className="mt-10 flex items-center justify-between">
        <h3 className="font-semibold">Total Amount:{totalAmount}</h3>
        <h3 className="font-semibold">Total Price:{totalPrice}</h3>
      </div>
    </div>
  );
}
export default Cart;
