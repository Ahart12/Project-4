import React, { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../apiConfig";
import { Redirect } from "react-router-dom";

const EditProfile= (props) => {
  const [userInfo, setUserInfo] = useState({
    first_name: "",
    username: "",
    username: "",
    img_url: "",
    location: "",
    age: "",
    gender: "",
    interests: "",
  
  });
  const [isUpdated, setIsUpdated] = useState(false);
  const [id, setId] = useState("");
  const currentUser = document.cookie.split("=")[1];
  useEffect(() => {
    const makeAPICall = async () => {
        try {
            await axios({
                url: `http://localhost:3000/users/${userId}`,
                method: "GET",
            }).then((result)=>{
                console.log(result.data)
                setInfo(result.data)
            });
        // setUserInfo(result.data );
        // setId(response.data.user[0]._id);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  const handleChange = (e) => {
    setUserInfo({...userInfo, [e.target.name]: e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: `http://localhost:3000/users/${profile}`,
      method: "PUT",
      data: userInfo,
    })
      .then(() => setIsUpdated(true))
      .catch(console.error);
    setUserInfo({
        first_name: "",
        username: "",
        username: "",
        img_url: "",
        location: "",
        age: "",
        gender: "",
        interests: "",
    });
  };

  if (isUpdated) {
    return <Redirect to={`/myprofile`} />;
  }

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <label>Edit your first name</label>
      <input
        type="text"
        value={userInfo.firstName}
        name="firstName"
        onChange={handleChange}
      />
      <br />
      <label>Edit your age</label>
      <input
        value={userInfo.age}
        name="age"
        type="number"
        min="18"
        max="120"
        onChange={handleChange}
      />
      <br />
      <label>Where do you live?</label>
      <input
        type="text"
        value={userInfo.location}
        name="location"
        onChange={handleChange}
      />
      <br />
      <label>What's your gender?</label>
      <input
        type="text"
        value={userInfo.gender}
        onChange={handleChange}
        name="gender"
      />
      <br />
      <label>What were your hobbies before COVID-19?</label>
      <input
        type="text"
        value={userInfo.hobbiesBefore}
        name="hobbiesBefore"
        onChange={handleChange}
      />
      <br />
      <label>What were your hobbies after COVID-19?</label>
      <input
        type="text"
        value={userInfo.hobbiesAfter}
        name="hobbiesAfter"
        onChange={handleChange}
      />
      <br />
      <label>Got COVID Antibodies Now?</label>
      <input
        className="radio"
        type="radio"
        value={userInfo.antibodies}
        name="antibodies"
        value="yesAnti"
        id="yes"
        onChange={handleChange}
      />
      <label htmlFor="true" className="radio">
        Yes
      </label>
      <input
        className="radio"
        type="radio"
        value={userInfo.antibodies}
        name="antibodies"
        value="noAnti"
        id="no"
        onChange={handleChange}
      />
      <label htmlFor="false" className="radio">
        No
      </label>
      <br />
      <label>Update your Profile Image URL</label>
      <input
        type="text"
        value={userInfo.image}
        name="image"
        onChange={handleChange}
      />
      <br />
      <label>Edit your username</label>
      <input
        type="text"
        value={userInfo.username}
        name="username"
        onChange={handleChange}
      />
      <br />
      <label>Edit your password</label>
      <input
        type="text"
        value={userInfo.password}
        name="password"
        onChange={handleChange}
      />
      <br />
      <br />
      <button className="create-profile-btn" type="submit">
        Edit Profile
      </button>
    </form>
  );
};

export default EditProfile;