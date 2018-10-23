import React, { Component } from 'react';
// import './Header.css'
import CounterButton from './CounterButton';

class Header extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }
    render() {
        return (
            <div>
                <h1>-=RoboFriends 2.0=-</h1>
                <CounterButton color={'red'} />
            </div>
        )
    }
}

export default Header;