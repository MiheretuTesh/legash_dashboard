import React, { useState } from "react";
import { useStyles } from "./index.style";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const AddNewHospitalForm = () => {
  const styles = useStyles();

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    status: "",
    staffs: "",
    description: "",
  });

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleInputChange = (e: any) => {
  //   if (e.target.name === "image") {
  //     // setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  //     // setPreviewImage(URL.createObjectURL(e.target.files[0]));
  //   } else {
  //     // setFormData({ ...formData, [e.target.name]: e.target.value });
  //   }
  // };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log(formData, "formData");

    // Perform validation
    // const errors = {};
    // if (!formData.name.trim()) {
    //   errors.name = "Name is required";
    // }
    // if (!formData.email.trim()) {
    //   errors.email = "Email is required";
    // }
    // if (!formData.gender) {
    //   errors.gender = "Gender is required";
    // }

    // If there are errors, set them in state
    // if (Object.keys(errors).length > 0) {
    //   setErrors(errors);
    //   return;
    // }

    // Submit the form data
    console.log(formData);

    setFormData({
      name: "",
      location: "",
      status: "",
      description: "",
      staffs: "",
    });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.secondContainer}>
          <div className={styles.fullWidth}>
            <div className={styles.formContainer}>
              <p>Name</p>
              <TextField
                required
                id="outlined-required"
                placeholder="Name"
                className={styles.textField}
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.formContainer}>
              <p>Location</p>
              <TextField
                required
                id="outlined-required"
                placeholder="Location"
                className={styles.textField}
                label="Location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.formContainer}>
              <p>Status</p>
              <FormControl
                variant="outlined"
                // className={classes.formControl}
                className={styles.textField}
              >
                <Select
                  labelId="status-label"
                  id="status"
                  name="status"
                  // value={formData.gender}
                  // onChange={handleInputChange}
                  label="Status"
                  value={formData.status}
                  onChange={handleInputChange}
                  // error={!!errors.gender}
                  // helperText={errors.gender}
                >
                  <MenuItem value="male">Active</MenuItem>
                  <MenuItem value="female">InActive</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className={styles.imageUploadContainer}>
              <input
                accept="image/*"
                id="upload-image"
                type="file"
                name="image"
                onChange={handleInputChange}
                style={{ display: "none" }}
              />
              <label htmlFor="upload-image">
                <Button
                  variant="contained"
                  component="span"
                  startIcon={<CloudUploadIcon />}
                >
                  Upload Image
                </Button>
              </label>
            </div>

            <div className={styles.imageUploadContainer}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ width: "160px", backgroundColor: "#000000" }}
              >
                Submit
              </Button>
            </div>
          </div>

          <div style={{ width: "300px" }}></div>
          <div className={styles.fullWidth}>
            <div className={styles.formContainer}>
              <p>
                Staff <br />
                Member
              </p>
              <TextField
                required
                id="outlined-required"
                placeholder="Staff Members"
                className={styles.textField}
                label="Staff Members"
                name="staffs"
                value={formData.staffs}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.formContainer}>
              <p>Description</p>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
                multiline
                rows={4}
                style={{ width: "80%" }}
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNewHospitalForm;
