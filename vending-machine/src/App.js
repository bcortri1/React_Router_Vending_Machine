import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import SnackList from './SnackList';
import Snack from './Snack';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<VendingMachine />} />
                    {SnackList.map((props) => {
                        return <Route key={`${props.name}-Route`} path={`/${props.name}`} element={<Snack key={props.name} {...props} />} />
                    })}

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
