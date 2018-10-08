import React from 'react';
import { render } from 'react-dom';


const App = () => <h1>Welcome to React czx session</h1>;

window.onload = () => {
    render(<App />, document.getElementById('root'));
};