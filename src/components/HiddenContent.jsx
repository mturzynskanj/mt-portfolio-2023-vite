import React, { useState, useEffect } from "react";

const HiddenContent = ({ children, isChildVisible }) => {
  const [isVisible, setIsChildVisible] = useState(false);

  useEffect(() => {
    setIsChildVisible(isChildVisible);
  }, [isChildVisible]);

  let componentClasses = [];

  if (isVisible) {
    componentClasses.push("show");
  } else {
    componentClasses = [];
  }

  return <div className={componentClasses.join(" ")}>{children}</div>;
};

export default HiddenContent;
