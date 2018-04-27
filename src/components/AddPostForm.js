import React, {Component} from 'react'
import {Button, Col, Form, FormGroup, Input, Label, Row} from 'reactstrap'
import {addPost} from "../actions";
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class AddPostForm extends Component {
    addHandler = (e) =>{
        console.log('AddPostForm.addHandler()')
        const post = {
            title: e.target.title.value,
            content: e.target.body.value,
            author: e.target.author.value,
            img_url: e.target.image.value
        }
        addPost(post)
        console.log(' .. called addPost(post)')
    }

    render() {
        return (
            <Row>
                <Col sm="10">
                    <Form onSubmit={(e) => { this.addHandler(e) }}>
                        <FormGroup>
                            <Label for="title-field">Title</Label>
                            <Input type="text" name="title" id="title-field"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="body-field">Body</Label>
                            <Input type="text" name="body" id="body-field"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="author-field">Author</Label>
                            <Input type="text" name="author" id="author-field"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="image-field">Image URL</Label>
                            <Input type="text" name="image" id="image-field"/>
                        </FormGroup>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    addPost
}, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(AddPostForm)
