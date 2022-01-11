import React, { useState } from 'react';
import axios from 'axios';

const UploadImage = () => {
  const [fileData, setFileData] = useState();
  const [imageUrl, setImageUrl] = useState(null);

  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
  };

  const onSubmitHandler = (e) => {
    console.log("file data ====>", fileData);
    e.preventDefault();

    const data = new FormData();
    data.append("image", fileData); // image key to use in Postman

    const server = "http://localhost:5999/upload/setItemImage";

    console.log(`data: ${data}`);

    axios.post(`${server}`, data)
      .then((result) => {
        console.log("File sent successfully", result);
        console.log(`Image URL: ${result.data}`);
        setImageUrl(result.data);
      })
      .catch((err) => {
        console.log("Something Went Wrong", err);
      });
  };

  return (
    <div>
      <h1>Uploading Files using Multer</h1>
      <form onSubmit={onSubmitHandler}>
        <input type="file" onChange={fileChangeHandler} />
        <br />
        <br />
        <button type="submit">Send to backend</button>
      </form>
      {imageUrl &&
        <img src={imageUrl} alt="test image" />
      }
    </div>
  );
}

export default UploadImage
