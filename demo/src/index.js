import React, {Component} from 'react';
import {render} from 'react-dom';
import {Launcher} from '../../src';
import messageHistory from './messageHistory';
import searchxChatImageUrl from './../assets/searchx_chat_logo.png';
import './../assets/styles';



class Demo extends Component {

  constructor() {
    super();
    this.state = {
      messageList: messageHistory,
      newMessagesCount: 0,
      isOpen: false
    };
  }

  _onMessageWasSent(message) {
    message.sender = "1";
    this.setState({
      messageList: [...this.state.messageList, message]
    });
  }

  _onFilesSelected(fileList) {
    const objectURL = window.URL.createObjectURL(fileList[0]);
    this.setState({
      messageList: [...this.state.messageList, {
        type: 'file', author: 'me', sender : "1",
        data: {
          url: objectURL,
          fileName: fileList[0].name
        }
      }]
    });
  }

  _sendMessage(text) {
    if (text.length > 0) {
      const newMessagesCount = this.state.isOpen ? this.state.newMessagesCount : this.state.newMessagesCount + 1;
      this.setState({
        newMessagesCount: newMessagesCount,
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      });
    }
  }

  _handleClick() {
    this.setState({
      isOpen: !this.state.isOpen,
      newMessagesCount: 0
    });
  }

  render() {
    return <div>


      <Launcher
        agentProfile={{
          teamName: '',
          imageUrl: searchxChatImageUrl
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        onFilesSelected={this._onFilesSelected.bind(this)}
        messageList={this.state.messageList}
        newMessagesCount={this.state.newMessagesCount}
        handleClick={this._handleClick.bind(this)}
        isOpen={this.state.isOpen}
        showEmoji
        showFile={false}
      />

    </div>;
  }
}

render(<Demo/>, document.querySelector('#demo'));
