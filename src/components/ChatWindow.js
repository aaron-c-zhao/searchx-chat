import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MessageList from './MessageList';
import UserInput from './UserInput';
import Header from './Header';


class ChatWindow extends Component {
  constructor(props) {
    super(props);
  }

  onUserInputSubmit(message) {
    this.props.onUserInputSubmit(message);
  }

  onFilesSelected(filesList) {
    this.props.onFilesSelected(filesList);
  }

  render() {
    let messageList = this.props.messageList || [];
    let classList = [
      'sc-chat-window',
      (this.props.isOpen ? 'opened' : 'closed')
    ];
    return (
      <div className={classList.join(' ')}>
        <Header
          teamName={this.props.agentProfile.teamName}
          imageUrl={this.props.agentProfile.imageUrl}
          onClose={this.props.onClose}
        />
        <MessageList
          messages={messageList}
          imageUrl={this.props.agentProfile.imageUrl}
          yes={this.props.yes}
          no={this.props.no}
          openUrl={this.props.openUrl}
        />
        <UserInput
          onSubmit={this.onUserInputSubmit.bind(this)}
          onFilesSelected={this.onFilesSelected.bind(this)}
          showEmoji={this.props.showEmoji}
          showFile={this.props.showFile}
        />
      </div>
    );
  }
}

ChatWindow.propTypes = {
  agentProfile: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onFilesSelected: PropTypes.func,
  yes: PropTypes.func.isRequired,
  no: PropTypes.func.isRequired,
  openUrl: PropTypes.func.isRequired,
  onUserInputSubmit: PropTypes.func.isRequired,
  showEmoji: PropTypes.bool,
  showFile: PropTypes.bool
};

export default ChatWindow;
