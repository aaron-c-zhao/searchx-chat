import React from 'react';
import Linkify from 'react-linkify';


const TextMessage = (props) => {
  const date = new Date(props.data.date);
  const dateString = (
    <div className="sc-message--date"> {date.toLocaleTimeString([], {timeStyle: 'short'}).replace(/(\r\n|\n|\r)/gm,"")} </div>
  );
  return (
    <div className="sc-message--text">{
      <Linkify properties={{ target: '_blank' }}>{props.data.text}</Linkify>
      }
      {dateString}
    </div>
  );
};

export default TextMessage;
