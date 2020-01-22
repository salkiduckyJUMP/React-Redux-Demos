import React, { Component} from 'react';
import { connect } from "react-redux";
import Todo from './Todo';

class AllTodos extends Component {
    render () {
        return (
            <div>
                <h1>All Todos</h1>
            {this.props.todos.map((todo) => (
                <div key={todo.id}>
                    {
                        todo.completed ? <EditPost post={post} /> : <Post post={post} />
                    }
                </div>
            ))}
            </div>
        )
    }
}