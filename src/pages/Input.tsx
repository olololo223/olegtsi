import React from "react";

export const Input = (props) => {
  const { size, borderColor, placeholder } = props;

  const defaultClass = "w-full px-3 py-2 rounded-md";
  const sizes = {
    small: "text-sm h-8",
    medium: "text-base h-10",
    large: "text-lg h-12",
  };
  const borderColors = {
    primary: "border border-gray-300",
    secondary: "border border-gray-500",
  };

  return (
    <input
      type="text"
      className={`${defaultClass} ${sizes[size]} ${borderColors[borderColor]}`}
      placeholder={placeholder}
    />
  );
};