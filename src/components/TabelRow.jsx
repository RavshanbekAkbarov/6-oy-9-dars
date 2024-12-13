import React from "react";

function TabelRow({id, prise,amount,title,brand,thumbnail}) {
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
                      <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">Brand:</div>
          </div>
        </div>
      </td>
      <td>
        <span className="badge badge-ghost badge-sm">$199</span>
      </td>
      <td>
        <div className="felx items-center gap-2">
          <button className="btn btn-sm">+</button>
          <span className="text-xl">0</span>
          <button className="btn btn-sm">-</button>
        </div>
      </td>
      <th>
        <button className="btn btn-secondary btn-xs">Delete</button>
      </th>
    </tr>
  );
}

export default TabelRow;
