import React, { Component } from "react";
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import styles from "./Posts.module.css";
import { Route } from "react-router-dom";
import FullPost from "../FullPost/FullPost";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get("/posts").then(response => {
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map(post => {
        return {
          ...post,
          author: "Max"
        };
      });
      this.setState({ posts: updatedPosts });
    });
  }

  postSelectedHandler = id => {
    // this.setState({ selectedPost: id });
    this.props.history.push({ pathname: "/posts/" + id });
  };

  render() {
    let posts = this.state.posts.map(post => {
      return (
        //<Link to={"/posts/"+post.id} key={post.id}>
        <Post
          style={styles.Posts}
          key={post.id}
          title={post["title"]}
          author={post["author"]}
          clicked={() => this.postSelectedHandler(post["id"])}
        />
        //</Link>
      );
    });
    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route path={this.props.match.url+"/:id"} exact component={FullPost}></Route>
      </div>
    );
  }
}
export default Posts;
