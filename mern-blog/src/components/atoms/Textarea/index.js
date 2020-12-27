import React from "react";
import "./textArea.scss";

const Textarea = ({ ...rest }) => {
  return (
    <div>
      <textarea className="text-area" {...rest} />
    </div>
  );
};

export default Textarea;
