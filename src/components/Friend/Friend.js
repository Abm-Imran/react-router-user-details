import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name, id, username} = props.friend;
    const navigate = useNavigate();
    const showFriendDetail = ()=>{
        const rasta = '/friend/'+id;
        navigate(rasta);
    }
    return (
        <div>
            <h1>Name: {name}</h1>
            <button className='btn btn-dark ' onClick={showFriendDetail}>{username}--{id}</button>
        </div>
    );
};

export default Friend;