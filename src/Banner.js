import React, { useEffect, useState } from "react";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      //
    }
    fetchData();
  }, []);
  return (
    <header>
      {/* <<< bgimgage */}
      {/* title */}
      {/* div > 2 buttons */}
      {/* description */}
    </header>
  );
}

export default Banner;
