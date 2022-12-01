import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {

    const [friends, setFriends] = useState([]);
    // console.log(friends);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(data => setFriends(data.data))
    }, [])


    return (

        <div>
            <h1>This is friends section.. Total Friends: {friends.length}</h1>
            {
                friends.map( friend => <Friend
                key={friend.id}
                friend={friend}></Friend>)
            }
        </div>
    );
};

export default Friends;