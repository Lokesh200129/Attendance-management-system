import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    text="text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 rounded ${bgColor} ${text} ${className}`} type={type} {...props}>
            {children}
        </button>
    );
}