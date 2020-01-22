import React, { Component} from 'react';
import { connect } from "react-redux";
import Post from './Post/Post';
import EditPost from './EditPost/EditPost';

class AllPosts extends Component {
    render() {
        console.log("allposts");
        console.log(this.props);
        console.log("Posts");
        console.log( this.props.posts);
        return (
            // <p>Hello</p>
            <div>
                <h1>All Posts</h1>
                {this.props.posts.map((post) => (
                    <div key={post.id}>
                        {
                            post.editing ? <EditPost post={post} /> : <Post post={post} />
                        }
                    </div>

                ))}
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        posts: state.posts
    }
}


export default connect(mapStatetoProps)(AllPosts);