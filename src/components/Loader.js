import React from "react";
import ContentLoader from "react-content-loader";

const Loader = ({
  classname,
  key,
  width,
  height,
  customX,
  customY,
  customY2,
}) => (
  <ContentLoader
    key={key}
    speed={2}
    width={width}
    height={height}
    viewBox="0 0 760 460"
    backgroundColor="#d6d6d6"
    foregroundColor="#bab0b0"
    className={classname}
  >
    <rect
      x={customX || "27"}
      y={customY || "360"}
      rx="2"
      ry="2"
      width="211"
      height="15"
    />
    <rect x="24" y="23" rx="0" ry="0" width="324" height="324" />
    <rect
      x={customX || "28"}
      y={customY2 || "385"}
      rx="2"
      ry="2"
      width="182"
      height="13"
    />
  </ContentLoader>
);

export default Loader;
