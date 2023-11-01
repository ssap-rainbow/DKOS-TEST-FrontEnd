import React, { useRef, useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";

const Create = () => {
  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();

  const [value, onChange] = useState(new Date());

  // 이미지 올리기
  const saveImgFile = () => {
    // const file = imgRef.current.files[0];
    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onloadend = () => {
    //   setImgFile(reader.result);
    // };
  };

  // 이미지 파일 서버에 업로드
  const uploadFile = async () => {
    const file = imgRef.current.files[0];
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("File uploaded successfully:", response.data);
      alert("완료!");
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("실패!");
    }
  };

  return (
    <Wapper>
      {imgFile && (
        <img alt="사진" src={imgFile} style={{ maxWidth: "100px" }} />
      )}
      <input
        type="file"
        id="image"
        accept="image/*"
        style={{
          display: "block",
          border: "solid 1px lightgray",
          borderRadius: "5px",
        }}
        onChange={saveImgFile}
        ref={imgRef}
      />
      <button onClick={uploadFile}>업로드</button>
      <Calendar onChange={onChange} value={value} />
    </Wapper>
  );
};

const Wapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Create;
