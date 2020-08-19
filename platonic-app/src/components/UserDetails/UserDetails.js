import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserDetails.css";
const UserDetails = ({ username, img_url, location, age, gender, interests, id, handleSubmit }) => {
  // console.log(id);
  const [isDeleted, setIsDeleted] = useState(false);
 const [user, setUser] = useState([]);
  const [isFavorite, setIsFavorite] = useState([]);
  const [notFavorite, setNotFavorite] = useState([]);
  const deleteUser = async (user) => {
    
    
    const response = await axios({
      url: `http://localhost:3000/users/${user.id}`,
      method: "DELETE",
    });
    window.location.reload();
    console.log(response.data);
    // setIsDeleted(true);
    // handleSubmit(id);
  };
  if (isDeleted) {
    console.log("deleted!");
  }
  useEffect(() => {
    const setFavoriteAPICall = async () => {
      try {
        const response = await axios(`http://localhost:3000/faves`);
        // console.log(response);
        // console.log("Users - useEffect - ", response);
        console.log("favorite", response.data);
        setIsFavorite(response.data.favorites);
      } catch (err) {
        console.error(err);
      }
    };
    setFavoriteAPICall();
  }, []);
  useEffect(() => {
    const unfavoriteAPICall = async () => {
      try {
        const response = await axios(`http://localhost:3000/not_faves`);
        console.log("unfavorite", response.data);
        setNotFavorite(response.data.notfavorites);
      } catch (err) {
        console.error(err);
      }
    };
    unfavoriteAPICall();
  }, []);
  console.log(notFavorite);
  const handleFaveToggle = (user) => {
    // console.log(user);
    axios({
      url: `http://localhost:3000/users/${user.id}`,
      method: "PUT",
      data: { is_favorite: true },
    });
    window.location.reload();
  };
  const handleFalseFaveToggle = (users) => {
    axios({
      url: `http://localhost:3000/users/${user.id}`,
      method: "PUT",
      data: { is_favorite: false },
    });
    window.location.reload();
  };

  const favoritesArray = isFavorite.map((element, index) => {
    return (
      <div key={element.id}>
        <h5>{element.img_url}</h5>
        <h5>{element.username}</h5>
        <h5>{element.location}</h5>
        <h5>{element.age}</h5>
        <h5>{element.gender}</h5>
        <h5>{element.interests}</h5>
        <button
          className="deleteButton"
          onClick={() => handleFalseFaveToggle(element)}
        >
          remove from favorites
        </button>
        <button className="deleteButton" onClick={() => deleteUser(element)}>
          DELETE
        </button>
      </div>
    );
  });
  const nonFavoritesArray = notFavorite.map((element, index) => {
    return (
      <div key={element.id}>
        <div className="non-fave-list">
          <h5 className="nonfave-title">{element.username}</h5>
          <h5>{element.img_url}</h5>
          <h5>{element.username}</h5>
        </div>
        <button
          className="deleteButton"
          onClick={() => handleFaveToggle(element)}
        >
          favorite
        </button>
        <button className="deleteButton" onClick={() => deleteUser(element)}>
          DELETE
        </button>
      </div>
    );
  });
  return (
    <>
      <div className="list-Friends">
        <h3 className="yourfriends-list">YOUR Friends</h3>
        {/* <h3>Users</h3> */}
        <span className="nonFaves-array">{nonFavoritesArray}</span>
      </div>
      <div className="favorite-Friends">
        <h3 className="faveFriends-list">FAVORITES</h3>
        {/* <h2>Favorite Friends List</h2> */}
        {favoritesArray}
      </div>
    </>
  );
};
export default UserDetails;