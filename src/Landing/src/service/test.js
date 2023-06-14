import { register } from "./userService";

const user = {
  firstName: "hospital",
  lastName: "kebede",
  phonenumber: "0100456789",
  email: "patient2@gmail.com",
  password: "password12345!",
  gender: "Female",
  dateOfBirth: "2023:02:02",
};

const retured = await register(user);
console.log(retured);
