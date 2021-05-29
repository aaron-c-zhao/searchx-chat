import React from 'react';
import TextMessage from './TextMessage'

const MessageOptions = (props) => {
  const options = [
    {text: "Yes, looks good!", handler: () => {}, id: 1},
    {text: "Nope", handler: () => {}, id: 2}
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className = "message-options-button"
      key = {option.id}
      onClick = {option.handler}>
        {option.text}
      </button>
  ));

  return ( 
      <div 
        className = "message-options-container">
        <TextMessage {...props}/>
        {optionsMarkup}
      </div>
  );

}

export default MessageOptions;
