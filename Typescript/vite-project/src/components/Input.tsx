import React from "react";

export const Input = (props) => {
  const { size, borderColor, placeholder } = props;

  const defaultClass = "w-100 px-3 py-2 rounded-md";
  const classes={
  sizes: {
    small: "text-sm h-8",
    medium: "text-base h-10",
    large: "text-lg h-12",
  },
  borderColors: {
    primary: "border border-gray-300",
    secondary: "border border-gray-500",
  }
  };
  return (
    <input
      type="text"
      className={`${defaultClass} ${classes.sizes[size]} ${classes.borderColors[borderColor]}`}
      placeholder={placeholder}
    />
  );
};