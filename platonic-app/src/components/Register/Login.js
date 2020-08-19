// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import apiUrl from "../apiConfig";
// import LoginComponents from "./LoginComponents.scss";
// import { Link, useHistory } from "react-router-dom";
// import "./Login.css";

// const Login = (props) => {
//     const [currentUser, setCurrentuser] = useState([]);
//     const [allUsers, setAllUsers] = useState([]);
//     const [Users, setUsers] = useState([]);
//     const [input, setInput] = useState({ name: "" , password: ""});
//     const handleChange = (event) => {
//       setInput({
//         ...input,
//         [event.target.name]: event.target.value,
//       });
//     };
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       setInput({ name:  "",  password:  "" });
//     };
//     useEffect(() => {
//       const getData = async (data) => {
//         try {
//           await axios.get(`http://localhost:3000/users`).then((result) => {
//             const all = Object.entries(result.data).slice();
//             setAllUsers(Object.entries(result.data));
//           });
//         } catch (err) {
//           console.error('Error Getting Users');
//         }
//       };
//       getData();
//     }, []);
//     const createUser = async (name, password) => {
//       try {
//         await axios
//           .post(`http://localhost:3000/users`,{
//              name: name,
//             password: password,
//           })
//           .then((res) => {
//             document.cookie=name = + res.data.name
//             console.log('success');
//           });
//       } catch (err) {
//         console.log('error creating user '+ err);
//       }
//     };
  
//   return (
//     <form onSubmit={handleSubmit}>
//     <label for ="formGroupExample">Name</label>
//     <input
//       type="text"
//       name="name"
//       onChange={handleChange}
//       value={input.name}
//     />
//     <label for="formGroupExampleInput2">Password</label>
//     <input
//       type="text"
//       name="password"
//       onChange={handleChange}
//       value={input.password}
//     />
//     <Link to="/"><button
//       type="submit"
//       onClick={() => {
//         createUser(input.name, input.password);
//       }}
//     >
//       Login
//     </button> </Link>
//   </form>
// );
// };
// export default  Login;


