import React, { Component } from "react";
import Message from "./Messages";

class MessageList extends Component {
  componentDidUpdate(_prevProps, _prevState) {
    this.scrollList.scrollTop = this.scrollList.scrollHeight;
  }

  render() {
    return (
      <div className="sc-message-list" ref={(el) => (this.scrollList = el)}>
        {this.props.messages.map((message, i) => {
          return (
            <Message
              message={message}
              key={i}
              yes={this.props.yes}
              no={this.props.no}
              openUrl={this.props.openUrl}
            />
          );
        })}
      </div>
    );
  }
}

export default MessageList;
