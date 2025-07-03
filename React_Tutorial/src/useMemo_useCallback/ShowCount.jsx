/* eslint-disable react/prop-types */
import React from "react";

function ShowCount({ title, count }) {
  console.log(`redering ${title}`);

  return (
    <div>
      <p>
        {title} is: {count}
      </p>
    </div>
  );
}

export default React.memo(ShowCount);
