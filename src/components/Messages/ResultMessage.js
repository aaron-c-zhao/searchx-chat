import React from "react";
import noPhoto from "../../assets/photo-not-available.jpg";

// const ResultMessage = (props) => {
//   const results = props.message.data.text.slice();
//   const resultMarkup = results.map((result) => {
//     <div className="result-message-container">
//       <div
//         className="result-message-image"
//         style={{
//           backgroundImage: `url(${result.image.url})`,
//         }}
//       ></div>
//       <h2 className="result-message-title">{result.name}</h2>
//       <p>
//         <img
//           className="result-message-rating-image"
//           src="../../assets/ratings/4.svg"
//         />
//         <span className="result-message-cuisine">{result.cuisine[0].name}</span>
//       </p>
//     </div>;
//   });
//   return <div className="result-contianer">{resultMarkup}</div>;
// };

const ResultMessage = (props) => {
  const results = props.message.data.text.slice();
  const resultMarkup = results.map((result, index) => (
    <div className="result-message-container" key={result.name}>
      <div
        className="result-message-image"
        style={{
          backgroundImage: (result.image.url)? `url(${result.image.url})`: `url(${noPhoto})`,
        }}
      >
        <img src={result.image.url} />
      </div>
      <h2 
        className="result-message-title"
        onClick={() => props.openUrl(result.website)}>
        {`${index + 1}.${result.name}`}
      </h2>
      <p className="result-message-rating">
        <span className="result-message-rating-image">
          {`${result.rating}/5.0 `}
        </span>
        <span className="result-message-rating-cuisine">
          {(!result.type.length)? '' : result.type[0].name}
          {(result.price_level === '')? '' : ` (${result.price_level})`}
        </span>
      </p>
      <div className="result-message-address">{result.address}</div>
    </div>
  ));

  return <div className="result-container">{resultMarkup}</div>;
};

export default ResultMessage;
