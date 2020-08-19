// import React, { useState, useEffect } from "react";
// import TextField from "@material-ui/core/TextField";
// import axios from "axios";
// import apiUrl from "../apiConfig";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// import "./Messages.css";

// function Messages (props) {
//   const [state, setState] = useState({ message: "", name: "" });
//   const [chat, setChat] = useState([]);
//   const [postSender, setPostSender] = useState("");
//   const [postRecipient, setPostRecipient] = useState("");
//   let readSender = "";
//   let readRecipient = "";

//   useEffect(() => {
//     console.log("use effect was called");
//     console.log(props);

//     readSender = document.cookie.split("=")[1];
//     readRecipient = props.match.params.username;
//     setPostSender(document.cookie.split("=")[1]);
//     setPostRecipient(props.match.params.username);

//     const interval = setInterval(() => getNewMessages(), 1000);

//     return function cleanup() {
//       console.log("use effect cleanup was called");
//       clearInterval(interval);
//     };
//   }, []);

//   const getNewMessages = async (e) => {
//     try {
//       console.log("before api call");
//       console.log("readSender: " + readSender);
//       console.log("readRecipient: " + readRecipient);
//       const response = await axios(
//         `${apiUrl}/messages?sender=${readSender}&recipient=${readRecipient}`
//       );
//       console.log("after api call");
//       console.log(response);
//       setChat(response.data.messages.reverse());
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const onTextChange = (e) => {
//     setState({ ...state, [e.target.name]: e.target.value });
//   };

//   const onMessageSubmit = (e) => {
//     e.preventDefault();
//     const { name, message } = state;

//     console.log("postSender: " + postSender);
//     console.log("postRecipient: " + postRecipient);

//     const postMessageAPI = async (message) => {
//       console.log("postSenderPOST: " + postSender);
//       console.log("postRecipientPOST: " + postRecipient);

//       try {
//         console.log("before api call");
//         const jsonBody = {
//           message: message,
//           sender: postSender,
//           recipient: postRecipient,
//         };
//         const response = await axios.post(`${apiUrl}/messages`, jsonBody);
//         console.log("after api call");
//         console.log(response);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     postMessageAPI(message);

//     setState({ message: "", name });
//   };

//   const renderChat = () => {
//     return chat.map(({ sender, message }, index) => (
//       <div key={index}>
//         <h3>
//           {sender}: <span>{message}</span>
//         </h3>
//       </div>
//     ));
//   };
//   const { classes } = props;
//   return (
//     <div className="message-card">
//       <h1 className="chat-log-title">Direct Messenger</h1>
//       <div className="render-chat">{renderChat()}</div>
//       <form onSubmit={onMessageSubmit} className="message-form-ctn">
//         <div className="textfield-ctn">
//           <TextField
//             name="message"
//             onChange={(e) => onTextChange(e)}
//             value={state.message}
//             id="filled-secondary"
//             variant="filled"
//             label="Message"
//             color="secondary"
//             className={classes.root}
//             InputProps={{
//               className: classes.input,
//             }}
//           />
//         </div>
//         <button className="messageButton">Send Message</button>
//       </form>
//     </div>
//   );
// }
// Message.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
// export default Messages;
import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import TextField from '@material-ui/core/TextField'
import './Messages.css'

const socket = io.connect('http://localhost:3000')

function Messages() {
  const [state, setState] = useState({ message: '', name: '' })
  const [chat, setChat] = useState([])

  useEffect(() => {
    socket.on('message', ({ name, message }) => {
      setChat([...chat, { name, message }])
    })
  })

  const onTextChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const onMessageSubmit = e => {
    e.preventDefault()
    const { name, message } = state
    socket.emit('message', { name, message })
    setState({ message: '', name })
  }

  const renderChat = () => {
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ))
  }

  return (
    <div className="card">
      <form onSubmit={onMessageSubmit}>
        <h1>Messanger</h1>
        <div className="name-field">
          <TextField
            name="name"
            onChange={e => onTextChange(e)}
            value={state.name}
            label="Name"
          />
        </div>
        <div classname="message-field">
          <TextField
            name="message"
            onChange={e => onTextChange(e)}
            value={state.message}
            id="outlined-multiline-static"
            variant="filled"
            label="Message"
          />
        </div>
        <button>Send Message</button>
      </form>
      <div className="render-chat">
        <h1>Chat Log</h1>
        {renderChat()}
      </div>
    </div>
  )
}

export default Messages;