import React from "react";

const StyledErrorMessage = ({ children }) => (
  <span className="error-message" aria-live="polite">{children}</span>
);

export default StyledErrorMessage;
