import React, { Component } from 'react';
import CardList from './CardList';
import {robots} from './Robots';  
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {   //STATE describes our app and state can change and usually lives in the parent component
            robots: robots,
            searchFields: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchFields: event.target.value }); 
    } 

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchFields.toLowerCase());
        })
        console.log(filteredRobots);  
        return (
            <div className="tc">
                <h1 className='f1'>RoboBuddies</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}

export default App;