import { useState } from "react";
import PropTypes from "prop-types";

const Blog = ({ blog, user, incrementLikes, deleteBlog }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };

  let canBeRemoved = user.username === blog.user.username;

  const [visible, setVisibility] = useState(false);

  return (
    <div style={blogStyle} className="blogComp">
      {blog.title} {blog.author}{" "}
      <button
        onClick={() => {
          setVisibility(!visible);
        }}
      >
        {visible ? "hide" : "view"}
      </button>
      {visible && (
        <div className="conditionally-rendered">
          <div>{blog.url}</div>
          <div>
            likes <span className="likes">{blog.likes}</span>{" "}
            <button
              className="like-button"
              onClick={() => {
                incrementLikes(blog.id);
              }}
            >
              like
            </button>
          </div>
          <div>{user.username}</div>
          {canBeRemoved && (
            <button
              onClick={() => {
                deleteBlog(blog.id);
              }}
            >
              remove
            </button>
          )}
        </div>
      )}
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  incrementLikes: PropTypes.func.isRequired,
  deleteBlog: PropTypes.func.isRequired,
};

export default Blog;
