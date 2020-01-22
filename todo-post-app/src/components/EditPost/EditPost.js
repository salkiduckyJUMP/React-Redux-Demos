import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';


class EditPost extends Component {

    handleSubmit = (values) => {
        console.log(values);
        const newTitle = values.title;
        const newContent = values.content;
        const data = {
            newTitle,
            newContent
        }

        this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })

        console.log(data);

    }
    render () {

        console.log('EditPost');
    return (
        <div className="EditPost">
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

export default connect()(EditPost);

