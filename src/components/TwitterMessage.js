import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      tweetText: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      tweetText: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          onChange={event => this.handleChange(event)}
          value={this.state.tweetText}/>
        <p>{this.props.maxChars - this.state.tweetText.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
