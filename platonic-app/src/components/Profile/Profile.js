import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import "./Profile.css";

const Profile = (props) => {
    const [info, setInfo] = useState([]);
    const [id, setId] = useState("");

    useEffect(() => {
        let profile = props.currentProfile
        if(profile === "") {
            profile = "1"
        }
        console.log(profile)
        const getData = async () => {
            try {
                await axios({
                    url: `http://localhost:3000/users/${profile}`,
                    method: "GET",
                }).then((result)=>{
                    console.log(result.data)
                    setInfo(result.data)
                });

            } catch (err) {
                console.error(err);
            }
        };
        getData();
    }, []);


return (
    <div>
        <div className="user-info">
          <div className="img-crop">
       
     <img src={info.img_url}className="user-image" alt="profile-img"></img></div>
      <h2>{info.first_name}</h2> 
      <h2>{info.age}</h2> 
      <h2>{info.location}</h2>
      <h2>{info.interests}</h2>
      </div>
    </div>
)
};
export default Profile;