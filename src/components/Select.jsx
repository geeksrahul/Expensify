import React, { forwardRef, useId } from "react";

const Select = forwardRef(
  ({ label, optionList = [], className = "", defaultValue, ...props }, ref) => {
    const id = useId();

    return (
      <div className="w-full flex flex-col gap-1">
        {/* Label */}
        {label && (
          <label className="text-md font-medium" htmlFor={id}>
            {label}
          </label>
        )}

        {/* Select */}
        <select
          id={id}
          ref={ref} // Pass ref for React Hook Form compatibility
          className={`bg-transparent border border-solid border-black outline-none w-full pl-2 h-10 rounded-sm ${className} dark:border-white text-white`}
          {...props} 
        >
          {/* Default Placeholder */}
          <option value="" disabled>
            Select an option
          </option>

          {/* Map through options */}
          {optionList.map((option, idx) => (
            <option key={option + idx} value={option} selected={option === defaultValue} className="dark:text-black">
              {option.charAt(0).toUpperCase() + option.slice(1)} {/* Title Case */}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default Select;
