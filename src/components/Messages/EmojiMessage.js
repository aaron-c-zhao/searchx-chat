import React from 'react';


const EmojiMessage = (props) => {
  const date = new Date(props.data.date);
  const dateString = (
    <div className="sc-message--date"> {date.toLocaleTimeString([], {timeStyle: 'short'}).replace(/(\r\n|\n|\r)/gm,"")} </div>
  );
  return <div className="sc-message--emoji">{props.data.emoji} {dateString} </div>;
};

export default EmojiMessage;
