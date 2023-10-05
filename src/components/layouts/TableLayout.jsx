import React from "react";
import Text from "../common/Text";
import Image from "../common/Image";
import { usersArray } from "../../data/data";


const TableLayout = () => {
  const data = usersArray;

  return (
    <div>
      <table>
        <tr>
          <th>name</th>
          <th>age</th>
          <th>image</th>
        </tr>
        {data.map((item) => {
          return (
            <tr key={item.id}>
              <th>
                <Text name={item.name} />
              </th>
              <tr>
                <Text name={item.age} />
              </tr>
              <th>
                <Image
                  url={item.profileImage}
                  style={{ width: 30, height: 30, borderRadius: "50%" }}
                />
              </th>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default TableLayout;
