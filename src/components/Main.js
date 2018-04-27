import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import AddPostForm from './AddPostForm'
import Post from './Post'
import FilterPosts from './FilterPosts'
import {Button, Col, Container, Row} from 'reactstrap'
import {connect} from 'react-redux'
import {toggleNewPost} from "../actions";

class Main extends Component {
    toggleHandler = () => {
        console.log('>Main.toggleHandler')
        this.props.toggleNewPost()
    }

    render() {
        let postoutput = "Loading..."
        postoutput=this.props.posts.map((p)=>{
            return <Post key={p.id} post={p} />
        })
        return (
            <Container className="mt-4">
                <Row>
                    <Col sm={{size: 8, offset: 1}}>
                        <FilterPosts/>
                    </Col>
                    <Col sm="2">
                        <Button color="secondary" onClick={(e) => {
                            console.log("Main.onClick() for Add Post button...")
                            this.toggleHandler()
                        }}>Add Post</Button>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col sm={{size: 11, offset: 1}}>
                        {this.props.showNewPost && <AddPostForm/>}
                    </Col>
                </Row>
                <Row>
                    <Col className="pr-0" sm={{size: 9, offset: 1}}>
                        {/* Below is the Post component for each post. It is up to you how you would like to iterate over them. */}
                        {postoutput}
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(`Main.mapStateToProps - state.posts.showNewPost: ${state.posts.showNewPost}`)
    return {
        posts: state.posts.postList,
        showNewPost: state.posts.showNewPost
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({
    toggleNewPost: toggleNewPost
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)
