import { IconButton } from "./IconButton";
import * as React from "react";

export function Input({ type: typeProp, icon, relative, title, setValue }) {
  const [type, setType] = React.useState(typeProp);

  function handleClick() {
    if (type === "password") {
      setType("text");
    }
    if (type === "text") {
      setType("password");
    }
    return;
  }

  return (
    <div
      style={{
        position: relative ? "relative" : undefined,
      }}
    >
      <div style={{ color: "#c9c9c9", fontSize: "10px" }}>{title}</div>
      <input
        onChange={(e) => setValue(e.target.value)}
        type={type}
        style={{
          width: "296px",
          height: "32px",
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
          borderBottom: "2px solid #ececec",
        }}
      ></input>
      {icon ? (
        <IconButton
          icon={icon}
          position="absolute"
          top="20px"
          right="9px"
          onClick={handleClick}
        />
      ) : null}
    </div>
  );
}
