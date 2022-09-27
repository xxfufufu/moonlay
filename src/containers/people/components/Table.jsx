import React from "react";
import { useNavigate } from "react-router-dom";

export const Table = ({ data }) => {
  const location = useNavigate();
  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Name
            </th>
            <th scope="col" className="py-3 px-6">
              Gender
            </th>
            <th scope="col" className="py-3 px-6">
              Height
            </th>
            <th scope="col" className="py-3 px-6">
              Weight
            </th>
            <th scope="col" className="py-3 px-6">
              Hair Color
            </th>
            <th scope="col" className="py-3 px-6">
              Skin Color
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
                onClick={() => location(`/people/detail/${i + 1}`)}
              >
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.name}
                </th>
                <td className="py-4 px-6">{item.gender}</td>
                <td className="py-4 px-6">{item.height}</td>
                <td className="py-4 px-6">{item.mass}</td>
                <td className="py-4 px-6">{item.hair_color}</td>
                <td className="py-4 px-6">{item.skin_color}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
