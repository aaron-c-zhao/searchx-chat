import React, { Component } from 'react';
import TextMessage from './TextMessage';
import EmojiMessage from './EmojiMessage';
import FileMessage from './FileMessage';
import Identicon from 'identicon.js';
import md5 from 'md5';
import botIcon from './../../assets/bot-icon.jpg'


class Message extends Component {

  _renderMessageOfType(type) {
    switch(type) {
    case 'text':
      return <TextMessage {...this.props.message} />;
    case 'emoji':
      return <EmojiMessage {...this.props.message} />;
    case 'file':
      return <FileMessage {...this.props.message} />;
    default:
      console.error(`Attempting to load message with unsupported file type '${type}'`);
    }
  }

  render () {
    let options = {
      size : 40
    }
    var data = new Identicon(md5(this.props.message.sender), options).toString();
    let chatIconUrl = "data:image/png;base64," + data; 
    let contentClassList = [
      'sc-message--content',
      (this.props.message.author === 'me' ? 'sent' : 'received')
    ];


    let sentClass = (
      <div className={contentClassList.join(' ')}>  
      {this._renderMessageOfType(this.props.message.type)}     
      <div className="sc-message--avatar" style={{
        backgroundImage: (this.props.message.author === 'bot')? `url(${botIcon})`: `url(${chatIconUrl})`
      }}></div>
      </div>
    )

    let receiveClass = (
      <div className={contentClassList.join(' ')}>     
      <div className="sc-message--avatar" style={{
        backgroundImage: (this.props.message.author === 'bot')? `url(${botIcon})`: `url(${chatIconUrl})` 
      }}></div>
      {this._renderMessageOfType(this.props.message.type)}
      
      </div>
    )

    return (
      <div className="sc-message">
        {this.props.message.author === 'me' ? 
        sentClass : 
        receiveClass}
      </div>
      
    )
  }
}



export default Message;
