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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingBottom: 10,
      }}
    >
      {previewUrl && <img src={previewUrl} alt="Preview" width="200" />}
      <input type="file" onChange={handleFileInputChange} />
      {/* {imageUrl && <AdvancedImage cldImg={img} />} */}
    </div>
  );
};

export default ImageUpload;

// import React, { useState } from "react";
// import { Image } from "cloudinary-react";
// export default function ImageUpload() {
//   const [imageUrl, setImageUrl] = useState("");

//   const handleFileInputChange = async (event) => {
//     console.log("first");
//     const file = event.target.files[0];
//     const formData = new FormData();
//     formData.append("file", file);

//     const response = await fetch(
//       "https://api.cloudinary.com/v1_1/dm5fqv2w5/image/upload?upload_preset=hmp7vcmr",
//       {
//         method: "POST",
//         body: formData,
//       }
//     );
//     console.log("here");
//     const data = await response.json();
//     console.log(data.secure_url);
//     setImageUrl(data.secure_url);
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileInputChange} />
//       {imageUrl && <Image cloudName="your_cloud_name" publicId={imageUrl} />}
//     </div>
//   );
// }
