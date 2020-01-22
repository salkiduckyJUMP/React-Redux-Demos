import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
    render () {
        console.log('You are in post');
        console.log('post ' + this.props.post);
        console.log('title ' + this.props.post.title);
        console.log('content ' + this.props.post.content);
        return (

        <div className="post">
            <h2 className="post_title">{this.props.post.title}</h2>
            <p className="post_content">{this.props.post.content}</p>
            <div className="control-buttons">
                <button className="edit"
                    onClick={() => this.props.dispatch({type: 'EDIT_POST', id: this.props.post.id })
                    }
                >Edit</button>
                <button className="delete"
                    onClick={() => this.props.dispatch({type: 'DELETE_POST', id: this.props.post.id })
                    }
                >Delete</button>
            </div>
        
        </div>

        )
    }

}

export default connect()(Post);