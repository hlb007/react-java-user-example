import React from 'react';

const User = ({ firstName, lastName, age, pinCode, email }) => {
    return (
        <div className="random-user">
            <div><strong>Name:</strong> {lastName} {lastName}</div>
            <div><strong>Age:</strong> {age}</div> 
            <div><strong>Pin Code:</strong> {pinCode}</div> 
            <div><strong>Email:</strong> {email}</div>
        </div>
    );
};

export default User;