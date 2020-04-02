# SearchX Chat

This is [SearchX](https://github.com/felipemoraes/searchx) Chat tool. It is based on [react-chat-window](https://www.npmjs.com/package/react-chat-window) provides an intercom-like chat window that can be included easily in any project. It provides no messaging facilities, only the view component. For message facilities you can use [SearchX](https://github.com/felipemoraes/searchx-backend) backend.

![GitHub license](https://img.shields.io/github/package-json/v/kingofthestack/react-chat-window.svg?style=flat-square) <a href="https://www.npmjs.com/package/react-chat-window" target="\_parent">
  <img alt="" src="https://img.shields.io/npm/dm/react-chat-window.svg" />
</a>
<br/>

## Features

- Customizeable
- Backend agnostic
- Free

## [Demo](https://felipemoraes.github.io/searchx-chat/)

## Table of Contents
- [Installation](#installation)
- [Example](#example)
- [Components](#components)

## Installation

```
$ npm install searchx-chat
```

## Example

``` javascript
import React, {Component} from 'react'
import {Launcher} from 'searchx-chat'

class Demo extends Component {

  constructor() {
    super();
    this.state = {
      messageList: []
    };
  }

  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    })
  }

  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
    }
  }

  render() {
    return (<div>
      <Launcher
        agentProfile={{
          teamName: 'searchx-chat',
          imageUrl: 'searchx-logo'
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
        showEmoji
      />
    </div>)
  }
}
```

For more detailed examples see the demo folder.

## Components

# Launcher

`Launcher` is the only component needed to use react-chat-window. It will react dynamically to changes in messages. All new messages must be added via a change in props as shown in the example.

Launcher props:

|      prop        | type   | required | description |
|------------------|--------|----------|-------------|
| agentProfile     | [object](#agent-profile-objects) | yes | Represents your product or service's customer service agent. Fields: imageUrl (string), teamName (string). |
| handleClick      | function | yes | Intercept the click event on the launcher. No argument sent when function is called. |
| isOpen           | boolean | yes | Force the open/close state of the chat window. If this is not set, it will open and close when clicked. |
| messageList      | [[message](#message-objects)] | yes | An array of message objects to be rendered as a conversation. |
| mute             | boolean | no | Don't play sound for incoming messages. Defaults to `false`. |
| newMessagesCount | number | no | The number of new messages. If greater than 0, this number will be displayed in a badge on the launcher. Defaults to `0`. |
| onFilesSelected  | function([fileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList)) | no | Called after file has been selected from dialogue in chat window. |
| onMessageWasSent | function([message](#message-objects)) | yes | Called when a message is sent, with a message object as an argument. |
| showEmoji        | boolean | no | Whether or not to show the emoji button in the input bar. Defaults to `true`.
| showFile        | boolean | no | Whether or not to show the file button in the input bar. Defaults to `true`.


### Message Objects

Message objects are rendered differently depending on their type. Currently, only text, file, and emoji types are supported. Each message object has an `author` field which can have the value 'me' or 'them'. Each message object has a sender which can be any string. 

``` javascript
{
  author: 'them',
  type: 'text',
  sender: 'sender1',
  data: {
    text: 'some text'
  }
}

{
  author: 'me',
  type: 'emoji',
  sender: 'sender2',
  data: {
    code: 'someCode'
  }
}


{
  author: 'me',
  type: 'file',
  sender: 'sender3',
  data: {
    url: 'somefile.mp3',
    fileName: 'Any old name'
  }
}

```

### Agent Profile Objects

Look like this:

```js
{
  imageUrl: 'https://somewhere.on/the_web.png',
  teamName: 'Da best'
}
```
