// import React from "react";

// const Rightbar = ({ data }) => {
//   return (
//     <>
//       <div className="right_container">
//         <div className="postImg">
//           <img
//             id="_img"
//             src="https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014618_640.jpg"
//             alt=""
//           />
//           <div className="inside_img">
//             <div className="img">
//               <img
//                 src="https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014618_640.jpg"
//                 alt=""
//               />
//             </div>
//             <div className="text">
//               <h3>Superman</h3>
//               <p>From DC</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Rightbar;
import React from "react";

const Rightbar = ({ data, bgColor, color }) => {
  return (
    <>
      <div
        className="right_container"
        style={{
          backgroundColor: `${bgColor}`,
          color: `${color}`,
        }}
      >
        <div className="postImg">
          <img id="_img" src={data.img} alt="" />
          <div className="inside_img">
            <div className="img">
              <img src={data.authorImg} alt="" />
            </div>
            <div className="text">
              <h3>{data.authorName}</h3>
              <p>{data.authortext}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rightbar;
