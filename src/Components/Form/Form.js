import { React, useEffect, useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import { ClassNames } from "@emotion/react";
import FileBase64 from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ setCurrentId, currentId }) => {
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id == currentId) : null
  );
  console.log(post ? post.id : "nothing id");
  console.log(post);
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };
  const clear = () => {
    // setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  const dispatch = useDispatch();
  console.log(postData);

  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);
  return (
    <form>
      <h1>{currentId ? "Editing" : "Creating"} the form</h1>
      <input
        style={{ padding: 20, margin: 10 }}
        placeholder="creator"
        value={postData.creator}
        onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
      />
      <input
        style={{ padding: 20, margin: 10 }}
        placeholder="title"
        value={postData.title}
        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
      />
      <input
        style={{ padding: 20, margin: 10 }}
        placeholder="message"
        value={postData.message}
        onChange={(e) => setPostData({ ...postData, message: e.target.value })}
      />

      <input
        style={{ padding: 20, margin: 10 }}
        placeholder="tags"
        value={postData.tags}
        onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(', ')})}
      />
      <div>
        <FileBase64
          multiple={false}
          onDone={(e) => setPostData({ ...postData, selectedFile: e.base64 })}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>submit</button>
        <button onSubmit={clear}>clear</button>
      </div>
    </form>
  );
};
export default Form;
