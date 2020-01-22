import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/result';


class NewPost extends Component {

    handleSubmit = (values) => {
        const title = values.title;
        const content = values.content;
        const data = {
            id: new Date(),
            title,
            content,
            editing: false
        }

        this.props.dispatch(actions.addPost(data))
        values.title = '';
        values.content = '';

        console.log(data);

    }
    render () {
    return (
        <div className="NewPost">
            <Formik
                initialValues={{ title: '', content: ''}}
                validationSchema={Yup.object({
                    title: Yup.string()
                        .min(10, "Must be minimum of 10 characters")
                        .max(15, 'Must be 15 characters or else')
                        .required('Required'),
                    content: Yup.string()
                        .min(20, 'must be 20 characters or more')
                        .required('Required')
                })}

                onSubmit={(values, {setSubmitting }) => {
                    console.log(values);
                    this.handleSubmit(values);

                }}
            >
                <Form className="myform">
                    <label htmlFor="title">Title</label>
                    <Field className="field" name="title" type="text" />
                    <ErrorMessage className="err" name="title" />

                    <label htmlFor="content">Content</label>
                    <Field className="field" name="content" type='text' as= 'textarea' />
                    <ErrorMessage className="err" name="content" />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
            }
};

export default connect()(NewPost);

