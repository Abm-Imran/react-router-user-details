import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const params = useParams();
    const [friend, setFriend] = useState([]);
    console.log(friend);
    useEffect(() => {

        // using fetch 
        // const url = 'https://jsonplaceholder.typicode.com/users/'+params.friendId;
        // // const url = `https://jsonplaceholder.typicode.com/users/${params.friendId}`;
        // fetch(url)
        // .then(res => res.json())
        // .then(data => console.log(data))

        // using axios

        axios.get(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
            .then(data => setFriend(data.data))

    }, [params.friendId])
    return (
        // <div>
        //     <h1>Welcome {friend.name} </h1>
        //     <h2>Email {friend.email}</h2>
        //     <h3>Contact Number {friend.phone}</h3>
        //     <h3>Address-- City:{friend.address?.city} Street: {friend.address?.street} Zipcode: {friend.address?.zipcode}</h3>
        //     <h3>Visit Here for detail info <a href="#">{friend.website}</a></h3>
        // </div>

        <div className="card mx-auto mt-5" style={{width:'50rem'}}>
            <div className="card-body">
                <h2 className="card-title fw-bolder fs-1 ">This is, <span className='text-warning'>{friend.name}</span></h2>
                <h4 className="card-subtitle mb-2 text-muted">{friend.username}</h4>
                <h4 className="card-subtitle mb-2 text-muted">{friend.email}</h4>
                <h4 className="card-subtitle mb-2 text-muted">{friend.phone}</h4>
                <a href="#" className="card-link"> <span className='text-decoration-none'>Please visit for more details:</span> {friend.website}</a>
            </div>
        </div>

    );
};

export default FriendDetails;