import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import "./FriendsList.css";

const FriendsList = (props) => {
    const [list, setList] = useState([]);
    const [friendListName, setFriendListName] = useState("Friends list");
    const [data, setData] = useState("");
    const [user, setUser] = useState([]);

    useEffect(() => {
        const getData = async (data) => {
            try {
                await axios
                    .get(`http://localhost:3000/users`)
                    .then((result) => {
                        const all = Object.entries(result.data).map((user) => {
                            return {
                                img_url: user[0],
                                ...user[1]
                            };
                        });

                        setList(all);
                    });
                // console.log("Users - useEffect - ", response);
                // console.log(data);
            } catch (err) {
                console.error(err);
            }
        };
        getData();
    }, []);

    function handleChange(e) {
        const data = e.target.data
        setData(data)
    }

    function changeFriendListName() {
        const name = data
        axios({
            url: `http://localhost:3000/users`,
            method: "PUT",
            data: name,
        })
        setFriendListName(data)
    }
    // console.log(list);


    return (
        <div>
            {list.map((friend) => {
                const friendProfileId = "/profile?id=" + friend.id
                return (
                    <div>
                        <h1>{friend.first_name}</h1>
                        <img src={friend.img_url}className="user-image" alt="profile-img"></img>
                        <Link to={{
                            pathname: "/profile",
                            search: "?id=" + friend.id,
                        }} onClick={()=>{props.setCurrentProfile(friend.id)}}>Profile</Link>
                    </div>
                )
            })

            }
        </div>
    );
};

export default FriendsList;