import React from 'react';
import Card from './Card';


const CardList = ({robots}) => {
    // throw new Error("NOOOO!!!");
    const CardComponent = robots.map((user, i) => {
        return <Card key={i} robot = {robots[i]}/>
    })
    return (
        <div>
        {CardComponent}
        {/* <Card robot = {robots[0]}/>
        <Card robot = {robots[1]}/>
        <Card robot = {robots[2]}/>
        <Card robot = {robots[3]}/>  */}
    </div>
    );
}

export default CardList;