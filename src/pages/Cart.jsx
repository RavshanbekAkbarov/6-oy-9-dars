//hooks
import { GlobalContext } from "../context/globalContext";
import { useContext } from "react";

function Cart() {
  const { selektedProducts } = useContext(GlobalContext);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Prise</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        
        </tbody>
      </table>
    </div>
  );
}
export default Cart;
