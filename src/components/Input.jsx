import React, { forwardRef, useId, useState } from "react";

const Input = forwardRef(
  ({ label, type = "text", className = "", onChange, defaultValue, ...props }, ref) => {
    const id = useId();
    return (
      <div className="w-full flex flex-col gap-1">
        {label && (
          <label className="text-md font-medium" htmlFor={id}>
            {label}
          </label>
        )}
        <input
          type={type}
          id={id}
          defaultValue={defaultValue}
          ref={ref} // Forward the ref for external usage
          className={`bg-transparent border border-solid border-black outline-none w-full pl-2 h-10 rounded-sm ${className} dark:border-white text-white`}
          {...props} // Spread any other props (like `...register("field")`)
        />
      </div>
    );
  }
);

export default Input;
