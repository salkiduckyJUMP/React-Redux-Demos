import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
  constructor(props) {
    super(props);
    this.title = React.createRef();
    this.message = React.createRef();
  }

  handleEdit = (e) => {
    e.preventDefault();
    const newTitle = this.title.current.value;
    const newMessage = this.message.current.value;
    const data = {
      newTitle,
      newMessage
    }
    this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
  }
  render() {
    return (
      <div className="post">
        <form className="form" onSubmit={this.handleEdit}>
          <input required type="text" ref={this.title}
            defaultValue={this.props.post.title} placeholder="Enter Post Title" /><br /><br />
          <textarea required rows="5" ref={this.message}
            defaultValue={this.props.post.message} cols="28" placeholder="Enter Post" /><br /><br />
          <button>Update</button>
        </form>
      </div>
    );
  }
}
export default connect()(EditComponent);