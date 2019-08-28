import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Add from './Pages/Add';
import Board from './components/Board/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Board} />
            <Route path="/adicionar" component={Add} />
        </BrowserRouter>
    );
}