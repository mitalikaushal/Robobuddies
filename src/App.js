import React, { Component } from 'react';
import CardList from './CardList';
import {robots} from './Robots';  
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';

class App extends Component {
    constructor() {
        super();
        this.state = {   //STATE describes our app and state can change and usually lives in the parent component
            robots: robots,
            searchFields: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        })
        .then(users => {
            return this.setState({robots: users})
        });
    }

    onSearchChange = (event) => {
        this.setState({ searchFields: event.target.value }); 
    } 

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchFields.toLowerCase());
        })
        if(this.state.robots.length === 0) {
            return <h1>Loading...</h1>
        }
        else {
            return (
                <div className="tc">
                    <h1 className='f1'>RoboBuddies</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                            <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;