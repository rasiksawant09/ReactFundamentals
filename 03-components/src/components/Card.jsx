import React from 'react';

const Card = (props) => {
    console.log(props);
    console.log("User Name:", props.user.name);
    console.log("User Age:", props.user.age);
    console.log("Is Employee:", props.employee);
    console.log("Gender:", props.gender);
    return (
        <div className="cardCustom">
            <h2>Card Component</h2>
            <p>User Name: {props.user.name}</p>
            <p>User Age: {props.user.age}</p>
            <p>Is Employee: {props.employee ? "Yes" : "No"}</p>
            <p>Gender: {props.gender}</p>
        </div>
    );
};

export default Card;
