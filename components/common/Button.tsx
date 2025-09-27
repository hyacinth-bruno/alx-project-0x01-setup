import React from "react";

type ButtonProps = {
  title: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button
      className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
