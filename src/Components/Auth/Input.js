import React from "react";
import { useState } from "react";

function Input({ name, placeholder, value, type, handleChange }) {
  // const handleChange = (e) => {
  //   setData({ ...data, username: e.target.value });
  //   console.log(data);
  // };
  return (
    <div>
      <input
        style={{ padding: 14, margin: 10, width: "100%" }}
        placeholder={placeholder}
        name={name}
        // onChange={(e) => setData({ ...data, username: e.target.value })}
        onChange={handleChange}
        type={type}
        value={value}
      />
    </div>
  );
}

export default Input;
