import React from 'react';
import FileIcon from './../icons/FileIcon';


const FileMessage = (props) => {
  const date = new Date(props.data.date);
  const dateString = (
    <div className="sc-message--date"> {date.toLocaleTimeString([], {timeStyle: 'short'}).replace(/(\r\n|\n|\r)/gm,"")} </div>
  );
  return (
    <a className="sc-message--file" href={props.data.url} download={props.data.fileName}>
      <FileIcon />
      <p>{props.data.fileName}</p>
      {dateString}
    </a>
  );
};

export default FileMessage;
