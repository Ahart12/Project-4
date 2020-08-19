import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Favorites.css";
const Favorites= ({ username, img_url, location, age, interests, id, handleSubmit }) => {
  // console.log(id);
  const [isDeleted, setIsDeleted] = useState(false);

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
  const handleFalseFaveToggle = (user) => {
    axios({
      url: `http://localhost:3000/users/${user.id}`,
      method: "PUT",
      data: { is_favorite: false },
    });
    window.location.reload();
  };
  // const handleSubmitDetails = (e) => {
  //   console.log("in handlesubmitdetails");
  //   e.preventDefault();
  //   let favoriteUser= {
  //     img_url: img_url,
  //     username: username,
  //     location: location,
  //      age: age,
  //      interests: interests,
  //   };
  //   handleSubmit(favoriteUser);
  // };
  const favoritesArray = isFavorite.map((element, index) => {
    return (
      <div key={element.id}>
        <h5>{element.Img_url}</h5>
        <h5>{element.username}</h5>
        <h5>{element.location}</h5>
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
          <h5 className="nonfave-title">{element.img_url}</h5>
          <h5>{element.username}</h5>
          <h5>{element.location}</h5>
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
      <div className="list-users">
        <h3 className="yourfriends-list">YOUR BUDDIES</h3>
        {/* <h3>Friends</h3> */}
        <span className="nonFaves-array">{nonFavoritesArray}</span>
      </div>
      <div className="favorite-friends">
        <h3 className="favefriends-list">FAVORITES</h3>
        {/* <h2>Favorite Buds List</h2> */}
        {favoritesArray}
      </div>
    </>
  );
};
export default Favorites;