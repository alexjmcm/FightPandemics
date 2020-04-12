import React from "react";
import { useForm } from "react-hook-form";

// dummy data props,context, redux etc
const firstName = "Cees";
const lastName = "Wang";
const selfIntroduction =
  "  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy nibh euismod tincidunt ut laoreet dolore magna";
const facebookURL = "http://facebook.com";
const twitterURL = "http://twitter.com";
const githubURL = "http://github.com";
const linkedinURL = "http://linkedin.com";
const personalURL = "http://personal.com";

const editProfile = true;

function getInitials(firstName, lastName) {
  // function to get the initials given firstname and last name
  return firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
}

export default function EditProfile(props) {
  // dummy data props,context, redux etc
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // make a put/patch request to backend to update users profile information
  };

  return (
    <div>
      <div style={editProfileStyle}>
        <div style={editProfileTitleStyle}>
          {editProfile ? "Edit" : "Complete"} Profile
        </div>
        <div style={initialsStyle}>{getInitials(firstName, lastName)}</div>
        <div style={changeProfilePicStyle}>Change</div>
      </div>
      <form style={editFormStyle} onSubmit={handleSubmit(onSubmit)}>
        <label style={labelStyle}>Self-introduction</label>
        <input
          style={inputFieldStyle}
          name="selfIntroduction"
          defaultValue={selfIntroduction}
          ref={register({ maxLength: 160 })}
        />
        <label style={labelStyle}>Facebook URL</label>
        <input
          style={inputFieldStyle}
          name="facebookURL"
          defaultValue={facebookURL}
          ref={register}
        />
        <label style={labelStyle}>LinkedIn URL</label>
        <input
          style={inputFieldStyle}
          name="linkedinURL"
          defaultValue={linkedinURL}
          ref={register}
        />
        <label style={labelStyle}>Twitter URL</label>
        <input
          style={inputFieldStyle}
          name="twitterURL"
          defaultValue={twitterURL}
          ref={register}
        />
        <label style={labelStyle}>GitHub URL</label>
        <input
          style={inputFieldStyle}
          name="githubURL"
          defaultValue={githubURL}
          ref={register}
        />
        <label style={labelStyle}>Personal Website</label>
        <input
          style={inputFieldStyle}
          name="personalURL"
          defaultValue={personalURL}
          ref={register}
        />
        <input style={submitButtonStyle} type="submit" value="Save Changes" />
      </form>
    </div>
  );
}

//styling
const editProfileStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
const editProfileTitleStyle = {
  fontWeight: "bolder",
  fontSize: "2rem",
  marginBottom: "3rem",
  marginTop: "2rem",
};

const editFormStyle = {
  display: "flex",
  flexDirection: "column",
};

const changeProfilePicStyle = {
  color: "#425AF2",
  marginBottom: "3rem",
};

const inputFieldStyle = {
  borderTopStyle: "hidden",
  borderLeftStyle: "hidden",
  borderRightStyle: "hidden",
  borderColor: "#5970EC",
  borderWidth: "thin",
  marginBottom: "2rem",
  marginTop: "1rem",
  paddingBottom: "0.5rem",
};
const labelStyle = {
  color: "#425AF2",
};
const initialsStyle = {
  margin: "auto",
  marginTop: "0",
  marginBottom: "1rem",
  borderRadius: "50%",
  border: "0.2rem solid #425AF2",
  color: "#425AF2",
  fontSize: "3rem",
  lineHeight: "6rem",
  width: "6rem",
  textAlign: "center",
  backgroundColor: "rgba(66, 90, 245, 0.04)",
};

const submitButtonStyle = {
  border: "none",
  borderRadius: "3rem",
  backgroundColor: "#5970EC",
  color: "#FFFFFF",
  height: "5rem",
  marginTop: "2rem",
  fontSize: "2rem",
  fontWeight: "bold",
};