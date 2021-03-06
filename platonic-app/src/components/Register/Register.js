// import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// import axios from "axios";
// import apiUrl from "../apiConfig";
// import "./Register.css";

// const Register = (props) => {
//   const history = useHistory();
//   const [input, setInput] = useState({
//     username: "",
//     password: "",
//   });
//   const [user, setUser] = useState(null);
//   const handleRegisterChange = (e) => {
//     setInput({
//       ...input,
//       [e.target.name]: e.target.value,
//     });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios({
//       url: `${apiUrl}/users`,
//       method: "POST",
//       data: input,
//     })
//       .then((res) => {
//         console.log("handlesubmit response is -", res);
//         document.cookie = "username=" + res.data.username;
//         setUser({ newUserProfile: res.data });
//         history.push("/waves");
//       })
//       .catch(console.error);
//   };
//   return (
//     <>
//       <div>
//         <h3 className="create-header">Create An Account</h3>
//       </div>
//       <form onSubmit={handleSubmit} className="registration-form">
//         <label className="username-label">Choose a Username</label>
//         <input
//           className="username-container"
//           type="text"
//           value={input.username}
//           name="username"
//           placeholder="username"
//           onChange={handleRegisterChange}
//         />
//         <label className="password-label"> Create a Password</label>
//         <input
//           className="password-container"
//           type="text"
//           value={input.password}
//           type="password"
//           placeholder="password"
//           onChange={handleRegisterChange}
//         />
//         <br />
//         <br />
//         <br />
//         <button className="profile-create-button" type="submit">
//           Create Account
//         </button>
//       </form>
//     </>
//   );
// };
// export default Register;