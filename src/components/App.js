import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './Hompage'


class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Switch >
                        <Route path='/' component={HomePage} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}


export default  App