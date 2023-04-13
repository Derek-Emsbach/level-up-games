// import React, { useState, useEffect } from "react";

// const GamePreview = ({ previewImage, previewImages, description }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   console.log(previewImages, description)

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === previewImages.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000);
//     return () => clearInterval(intervalId);
//   }, [previewImages.length]);

//   return (
//     <div className="flex items-center">
//       <div className="flex-1 flex flex-row overflow-x-scroll">
//         {previewImages.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt="game preview"
//             width="200"
//             height="200"
//             style={{ marginRight: "10px", display: currentIndex === index ? "block" : "none", }}
//             className={index === currentIndex ? "" : "hidden"}
//           />
//         ))}
//       </div>
//       <img
// 							className="h-80"
// 							alt={`Cover art`}
// 							src={previewImage}
// 						></img>
//       <div className="flex-1 p-4">{description}</div>
//     </div>
//   );
// };

// export default GamePreview;

import React, { useState, useEffect } from "react";

const GamePreview = ({ previewImage, previewImages, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  // useEffect(() => {
  //   let intervalId;
  //   if (isMouseOver) {
  //     intervalId = setInterval(() => {
  //       setCurrentIndex((prevIndex) =>
  //         prevIndex === previewImages.length - 1 ? 0 : prevIndex + 1
  //       );
  //     }, 3000);
  //   }
  //   return () => clearInterval(intervalId);
  // }, [previewImages.length]);

  useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === previewImages.length - 1 ? 0 : prevIndex + 1
          );
        }, 3000);
        return () => clearInterval(intervalId);
      }, [previewImages.length]);


  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  return (
    <div className="flex items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="flex-1 flex flex-row absolute inset-y-50 left-20 w-1/3 min-w-full md:min-w-0">
        {previewImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="game preview"
            style={{
              display: currentIndex === index ? "block" : "none",
            }}
            className="relative rounded-lg  "
          />
        ))}
      </div>
      <img className="h-80" alt={`Cover art`} src={previewImage}></img>
      <div className="flex-1 p-10 absolute inset-y-50 right-20 w-1/3 min-w-full md:min-w-0 bg-slate-900 text-xl overscroll-auto">{description}</div>
    </div>
  );
};

export default GamePreview;
