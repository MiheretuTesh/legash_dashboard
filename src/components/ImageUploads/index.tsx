import React, { useState } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

const ImageUpload = ({ setImageUrls }: any) => {
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const handleFileInputChange = async (event: any) => {
    const files = event.target.files;
    const newImageUrls: any[] = [];
    const newPreviewUrls: any[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
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
      const imageUrl = data.secure_url;

      newImageUrls.push(imageUrl);
      newPreviewUrls.push(URL.createObjectURL(file));
    }

    setImageUrls((prevImageUrls: any) => [...prevImageUrls, ...newImageUrls]);
    setPreviewUrls((prevPreviewUrls) => [
      ...prevPreviewUrls,
      ...newPreviewUrls,
    ]);
  };

  const myCld = new Cloudinary({
    cloud: {
      cloudName: "your_cloud_name",
    },
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingBottom: 10,
      }}
    >
      {/* {previewUrls.map((previewUrl, index) => (
        <img key={index} src={previewUrl} alt="Preview" width="200" />
      ))} */}
      <input type="file" onChange={handleFileInputChange} multiple />
      {/* {imageUrls.map((imageUrl, index) => (
        <AdvancedImage key={index} cldImg={myCld.image(imageUrl)} />
      ))} */}
    </div>
  );
};

export default ImageUpload;
