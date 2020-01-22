import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions';


class NewTodo extends Component {

    handleSubmit = (values) => {
        const content = values.content;

        const data = {
            id: new Date(),
            content,
            completed: false
        }

        this.props.dispatch(actions.addTodo(data))
        values.content = '';

        console.log(data);
    }

    render() {
        return (
            <div className="NewTodo">
                <Formik
                initialValues={{ content: ''}}
                validationSchema={Yup.object({
                    content: Yup.string()
                        .max(20, 'must be 20 characters or less')
                        .required('Required')
                })}

                onSubmit={(values) => {
                    console.log(values);
                    this.handleSubmit(values);

                }}
            >
                <Form className="myform">

                    <label htmlFor="content">Content</label>
                    <Field className="field" name="content" type='text' as= 'textarea' />
                    <ErrorMessage className="err" name="content" />

                    <button type="submit">Add a Todo</button>
                </Form>
            </Formik>
            </div>
        )
    }

}

export default connect()(NewTodo);
