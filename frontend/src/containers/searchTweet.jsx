import React from 'react';
import render from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { connectToWebsocket, postWebsocketMessage } from '../actions';


function mapStateToProps(state) {
  return {
    messages: state.websockets.message,
    isConnected : state.websockets.status
  };
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators({
          connectToWebsocket,
          postWebsocketMessage
      }, dispatch)
  };
}

class SearchTweet extends React.Component {

  componentWillMount() {
    this.props.actions.connectToWebsocket();
  }

  _sendSearch = (e) => {
    this.props.actions.postWebsocketMessage(e.target.value);
  };

  render() {

    return (
      <div>
        <input onBlur={this._sendSearch} />
        <h1>{this.props.messages}</h1>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(SearchTweet);
