import React from "react";
import { Switch, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from './components/users';
import User from './components/user';
import Navbar from "./components/Navbar";
import Login from "./components/login";
import Register from "./components/Register";
import Home from "./components/Home";


class App extends React.Component {
    render() {
        return (
                <>
                    <Navbar />
                    <div className="container mt-3">
                        <Routes>
                            <Route path="/users/:id" element={<User />} />
                            <Route path="/users" element={<Users />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/" exact element={<Home />} />
                        </Routes>
                    </div>
                </>
        );
    }
}

export default App;






// import React, { Component } from "react";
// import Users from './components/users';
// import Navbar from "./components/Navbar";
// import {Routes} from 'react-router-dom';
// import Login from "./components/login";
// import Register from "./components/Register";
// import Home from "./components/Home";

// class App extends React.Component{
//     render(){
//         return <>
//         <Navbar/>
//         <div className="container mt-3">
//             <Routes path="/users" Component={Users}/>
//             <Routes path="/login" Component={Login}/>
//             <Routes path="/Register" Component={Register}/>
//             <Routes path="/" Component={Home}/>
//         </div>
//         </>
//     }
// }

// export default App;