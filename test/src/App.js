// import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import Content from './components/Content';

function App() {

    return (
        <div className="App">
            <AppHeader />
            <Content />
            <p>{process.env.DIDYOUSEE}</p>
        </div>
    );
}

export default App;
