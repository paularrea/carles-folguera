import React from "react";

const FadeIn = ({ children }) => {
  return (
    <div data-sal="slide-up" data-sal-delay="100" data-sal-duration="1000">
      {children}
    </div>
  );
};

export default FadeIn;
