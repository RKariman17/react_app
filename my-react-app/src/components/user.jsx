import axios from "axios";
import { useState, useEffect } from "react";

const User = (props) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            if (props.match?.params?.id) {
                try {
                    const response = await axios.get(`https://reqres.in/api/users/${props.match.params.id}`);
                    setUser(response.data.data);
                } catch (error) {
                    console.error("Error fetching user:", error);
                }
            }
        };

        fetchUser();
    }, [props]);

    return (
        <>
            {user && (
                <div style={{ textAlign: 'center' }}>
                    <img src={user.avatar} alt="" style={{ borderRadius: '50%', width: '100px' }} />
                    <h4>{user.first_name} {user.last_name}</h4>
                    <h5>{user.email}</h5>
                </div>
            )}
        </>
    );
};

export default User;