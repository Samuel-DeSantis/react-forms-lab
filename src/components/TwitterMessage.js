import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      msg: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      msg: event.target.value,
    })
  }

  render() {
    let charCount = this.props.maxChars - this.state.msg.length
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} value={this.state.msg} type="text" name="message" id="message" />
        <p>{charCount}</p>
      </div>
    );
  }
}

export default TwitterMessage;
