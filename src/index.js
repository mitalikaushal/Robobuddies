import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import './index.css';
import { robots } from './Robots';
import CardList from './CardList';

ReactDOM.render(<CardList robots = {robots}/>, document.getElementById('root'));