import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyMenu from './commons/ui/components/menu/MyMenu';
import {HashRouter} from 'react-router-dom';
import MyRoutes from "./MyRoutes";

const App = () => (
    <MuiThemeProvider>
        <div>
            <MyMenu/>
            <div align="center">
                <HashRouter>
                    <MyRoutes/>
                </HashRouter>
            </div>
        </div>
    </MuiThemeProvider>
);

export default App;