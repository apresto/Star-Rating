import React from "react";
import { useState } from "react";

const EMPTY_STAR =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1088px-Five-pointed_star.svg.png";
const FULL_STAR =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png";

function App() {
  return <StarRating />;
}

const StarRating = () => {
  const starArr = [1, 2, 3, 4, 5];
  const [hovered, setHovered] = useState(0);
  const [clicked, setClicked] = useState(0);

  const setImg = (id) => {
    return hovered >= id || clicked >= id ? FULL_STAR : EMPTY_STAR;
  }

  return (
    <div
      style={{
        margin: '10',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {starArr.map((id) => (
        <img
          src={setImg(id)}
          onMouseEnter={() => {
            setHovered(id)
            if (id < clicked) setClicked(0);
          }}
          onClick={() => setClicked(id)}
          onMouseOut={() => setHovered(0)}
          width='80'
          height='80'
          alt='stars'
        />
      ))}
    </div>
  )
};

export default App;