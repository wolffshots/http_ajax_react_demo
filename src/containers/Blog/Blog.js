import React, { Component } from "react";
// import axios from "../../axios";
// import Post from "../../components/Post/Post";
import Posts from "./Posts/Posts";
// import FullPost from "../../components/FullPost/FullPost";
import NewPost from "./NewPost/NewPost";
import "./Blog.css";
import { Route, NavLink } from "react-router-dom";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/">Home</NavLink>
              </li>
              <li>
                <NavLink exact to={{ pathname: "/new", hash: "#submit" }}>
                  New
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <Route path="/" exact component={Posts} />
        <Route path="/new" exact component={NewPost} />
        {/* <section>
          <FullPost
            id={this.state.selectedPost}
            // title={this.state.posts[this.state.selectedPost].title}
          />
        </section>
        <section>
          
        </section> */}
      </div>
    );
  }
}

export default Blog;
