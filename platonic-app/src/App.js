import React,{ useState} from 'react';
import { Route, Link, Switch } from "react-router-dom";
import './App.css';
import Chatroom from "./components/Chatroom/Chatroom";
import Messages from "./components/Messages/Messages";
import FriendsList from "./components/FriendsList/FriendsList";
import UserDetails from "./components/UserDetails/UserDetails";
import Title from "./components/Title/Title";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";
import Login from "./components/Register/Login";


function App() {
  const [currentProfile, setCurrentProfile] = useState("")
  
  return (
    <>    
    <header>
       
       <Nav />
    </header>
    <div className="App">
      <Switch>
        <Route path="/Title" component={Title} />
        
        
      <Route path="/Home" component={Home} />
      <Route path="/Login" component={Login} />
      <Route path="/Chatroom" component={Chatroom} />
      <Route path="/Messages" component={Messages} /> 
      <Route path="/FriendsList" render={() => <FriendsList setCurrentProfile={setCurrentProfile}/>} />
      <Route path="/UserDetails" component={UserDetails} />
 
      <Route path="/Profile" render={() => <Profile currentProfile={currentProfile}/>} />
      </Switch>
    </div>
    </>
  );
}

export default App;


