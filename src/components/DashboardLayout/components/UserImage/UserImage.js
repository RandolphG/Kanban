import React, { useRef, useState } from "react";
import image from "./assets/_default_profile_img.png";
import "./styles/_userImage.scss";

/**
 * editable user profile image
 * @returns {JSX.Element}
 * @constructor
 */
const UserImage = () => {
  const [imageFile, setImageFile] = useState(image);
  const fileInputRef = useRef(null);

  function photoUpload(e) {
    const file = e;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (theFile) => {
      const data = {
        blob: theFile?.target?.result,
        name: file.name,
      };
      setImageFile(data.blob);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

  function handleFileInput(e) {
    e.preventDefault();
    photoUpload(e.target.files[0]);
  }

  return (
    <div className="profile">
      <img
        onClick={(e) => {
          fileInputRef.current && fileInputRef.current.click();
        }}
        className="profile__img"
        src={imageFile}
        alt="profile_img"
      />
      <input
        ref={fileInputRef}
        style={{ display: "none" }}
        id="photo-upload"
        type="file"
        accept="image/*"
        onChange={handleFileInput}
      />
    </div>
  );
};

export default UserImage;
