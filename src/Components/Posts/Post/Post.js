import React from "react";
import "./styles.css";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  for (let i = 0; i < post.tags.length; i++) {
    console.log(post.tags[i]);
  }
  return (
    <div>
      <div className="cardwrapper">
        <img src={post.selectedFile} className="contentImag" width={200} />
        <div className="Titile">{post.title}</div>
        <div className="creatorwrapper">
          <div className="timeago">{moment(post.createdAt).fromNow()}</div>
          <div className="creator">{post.creator}</div>
        </div>
        <div className="tagwrapper">
          {post.tags.map((x) => <div className="tags">{x}</div>)}
        </div>
        ;
        <div className="actionwrapper">
          <div className="likewrapper">
            <img />

            <div
              className="likecount"
              onClick={() => dispatch(likePost(post._id))}
            >
              Like: {post.likeCount}
            </div>
          </div>
          <div className="editaction" onClick={() => setCurrentId(post._id)}>
            Edit
          </div>
          <div className="deletewrapper">
            <img />
            <div
              className="delete"
              onClick={() => dispatch(deletePost(post._id))}
            >
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
