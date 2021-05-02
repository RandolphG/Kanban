import React from "react";

const Form = React.memo(
  ({ list, text = "", onChange, closeForm, children }) => {
    const placeholder = list
      ? "Enter list title..."
      : "Enter a title for this card...";

    const handleFocus = (e) => {
      e.target.select();
    };

    return (
      <div>
        <div>
          <textarea
            placeholder={placeholder}
            autoFocus
            onFocus={handleFocus}
            value={text}
            onChange={(e) => onChange(e)}
            onBlur={closeForm}
          />
        </div>
        <div>
          {children}
          <div onMouseDown={closeForm}>close</div>
        </div>
      </div>
    );
  }
);

export default Form;
