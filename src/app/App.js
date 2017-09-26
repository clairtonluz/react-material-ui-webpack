import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyMenu from './commons/ui/components/menu/MyMenu';

const App = () => (
    <MuiThemeProvider>
        <MyMenu/>
    </MuiThemeProvider>
);

export default App;