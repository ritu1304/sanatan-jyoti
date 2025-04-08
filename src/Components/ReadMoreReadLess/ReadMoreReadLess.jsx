import React, { useState } from "react";

const ReadMoreReadLess = ({ text, charLimit = 150 }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <p>
      {expanded ? text : `${text.slice(0, charLimit)}...`}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          color: "blue",
          border: "none",
          background: "none",
          cursor: "pointer",
        }}
      >
        {expanded ? "Read Less" : "Read More"}
      </button>
    </p>
  );
};

export default ReadMoreReadLess;
