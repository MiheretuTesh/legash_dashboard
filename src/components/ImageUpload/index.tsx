import React, { useState } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

const ImageUpload = ({ setImageUrlGenerated, setImagUploadUrl }: any) => {
  const [imageUrl, setImageUrl] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");

  const handleFileInputChange = async (event: any) => {
    console.log("first");
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dm5fqv2w5/image/upload?upload_preset=hmp7vcmr",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    setImageUrl(data.secure_url);
    setImagUploadUrl(data.secure_url);
    setImageUrlGenerated(true);

    // Create a preview URL for the uploaded image
    const previewUrl = URL.createObjectURL(file);
    setPreviewUrl(previewUrl);
  };

  const myCld = new Cloudinary({
    cloud: {
      cloudName: "your_cloud_name",
    },
  });

  let img = myCld.image(imageUrl);

  return (
    <>
      {previewUrl && <img src={previewUrl} alt="Preview" width="200" />}
      <div
        style={{
          display: "flex",
          marginBottom: "20px",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <label
          htmlFor="image-upload"
          style={{
            marginBottom: "10px",
            fontWeight: "bold",
          }}
        >
          Cover Image:
        </label>
        <div className="image-upload-container">
          <input
            id="image-upload"
            type="file"
            onChange={handleFileInputChange}
            style={{ display: "none" }}
          />
          <label
            htmlFor="image-upload"
            className="upload-button"
            style={{ cursor: "pointer", fontWeight: "500" }}
          >
            Choose Images
          </label>
        </div>
        {/* {imageUrls.map((imageUrl, index) => (
      <AdvancedImage key={index} cldImg={myCld.image(imageUrl)} />
    ))} */}
      </div>
    </>
  );
};

export default ImageUpload;
