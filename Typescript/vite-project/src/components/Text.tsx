import React from "react";

export const Text = (props) => {
  const { size, color, align, title } = props;

  const defaultClass = "font-sans";
  const classes={ 
    sizes: {
        small: "text-sm",
        medium: "text-base",
        large: "text-lg",
    },
    colors: {
        primary: "text-blue-500",
        secondary: "text-blue-300"
    },
    aligns: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
    }
  };  
  return (
    <p className=
      {`${defaultClass} ${classes.sizes[size]} ${classes.colors[color]} ${classes.aligns[align]}`
    }>
      {title}
    </p>
  );
};