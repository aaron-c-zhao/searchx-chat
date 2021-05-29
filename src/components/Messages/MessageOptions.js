import React from 'react';
import TextMessage from './TextMessage'

const MessageOptions = (props) => {
  const options = [
    {text: "Yep", handler: () => {props.yes()}, id: 1},
    {text: "Nope", handler: () => {props.no()}, id: 2}
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
        <TextMessage {...props.message}/>
        {optionsMarkup}
      </div>
  );

}

export default MessageOptions;
