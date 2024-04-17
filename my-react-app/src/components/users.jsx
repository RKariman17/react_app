import React, { Component } from "react";
import axios from "axios";
import LoadingUsers from "./loading/loadingUsers";
import { Link } from 'react-router-dom';
import './button.css'

class Users extends React.Component {
    state = {
        users: [],
        isLoading: true
    };

    async componentDidMount() {
        const response = await axios.get("https://reqres.in/api/users?page=2");
        this.setState({ users: response.data.data, isLoading: false });
    }

    render() {
        return (
            <>
                <button onClick={this.handleCreate} className="btn btn-lg btn-primary">Create New User</button>
                <div className="row">
                    {
                        this.state.isLoading ? (
                            <LoadingUsers />
                        ) : (
                            this.state.users.map((user) => {
                                return (
                                    <div className="col-4 text-center p-5">
                                        <img src={user.avatar} alt="" style={{ borderRadius: '50%', width: '100px' }} />
                                        <Link to={`/users/${user.id}`}>
                                            <h4>{user.first_name} {user.last_name}</h4>
                                        </Link>
                                        <h5>{user.email}</h5>
                                        <div className="row">
    <div className="col-6 button-container">
        <button onClick={() => { this.handleUpdate(user) }} className="btn btn-info btn-sm update-button">Update</button>
    </div>
    <div className="col-6 button-container">
        <button onClick={() => { this.handleDelete(user) }} className="btn btn-danger btn-sm delete-button">Delete</button>
    </div>
</div>
                                    </div>
                                )
                            })
                        )
                    }
                </div>
            </>
        )
    }

    
    handleCreate = async () => {
        const newUser = {
            first_name: "John",
            last_name: "Doe",
            email: "JohnDoe@gmail.com",
            avatar: <img src="profile.jpg" alt="" style={{ borderRadius: '50%', width: '100px' }}></img>
        }
        const response = await axios.post("https://reqres.in/api/users?page=2", newUser);
        this.setState({ users: [...this.state.users, newUser] });
    }

    handleUpdate = async (user) => {
        user.first_name = "updated";
        const response = await axios.put(`https://reqres.in/api/users/${user.id}?page=2`, user);
        const updatedUsers = [...this.state.users];
        const index = updatedUsers.indexOf(user);
        updatedUsers[index] = { ...user };
        this.setState({ users: updatedUsers });
    }

    handleDelete = async (user) => {
        const response = await axios.delete(`https://reqres.in/api/users/${user.id}?page=2`);
        const newUsers = this.state.users.filter(u => u.id !== user.id);
        this.setState({ users: newUsers });
    }
}



export default Users;