import React from "react";

export const Text = (props) => {
  const { size, color, align, title } = props;

  const defaultClass = "font-sans";
  const classes={ 
    sizes: {
        small: "text-sm",
        medium: "text-base",
        large: "text-lg",
        xlarge: "text-xl",
    },
    colors: {
        primary: "text-blue-900",
        secondary: "text-blue-600"
    },
    aligns: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
    }
  };
  console.log(color, classes.colors[color]);
  
  return (
    <p className={`${defaultClass} ${classes.sizes[size]} ${classes.colors[color]} ${classes.aligns[align]}`}>
      {title}
    </p>
  );
};