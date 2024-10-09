import { useState } from "react";
import MenuList from "./Menu-List";
import { Add,Remove } from "@mui/icons-material";

export default function MenuItem({ item }) {
  const [sub, setsub] = useState({});

  function handleToggleChildren(getCurrentLabel) {
    setsub({
      ...sub,
      [getCurrentLabel]: !sub[getCurrentLabel],
    });
  }
  console.log(sub);
  return (
    <li >
      <div className="flex gap-2">
        <p className="text-gray-700 font-semibold text-md mt-1 ">{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <button onClick={() => handleToggleChildren(item.label)}>
            {sub[item.label] ? <Remove className="text-white" />: <Add className="text-white" />}
          </button>
        ) : null}
      </div>

      {item && item.children && item.children.length > 0 && sub[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
