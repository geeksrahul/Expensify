import React from 'react'

function Button({
    type="button",
    children,
    bgColor = "bg-blue-700",
    textColor = "text-white",
    className = "",
    ...props
}) {
  return (
    <button
        type={type}
        className={`w-full p-1 rounded-sm ${bgColor} ${textColor} ${className} `}
        {...props}
    >
        {children}
    </button>
  )
}

export default Button