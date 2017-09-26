import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class MyMenu extends Component {

    constructor() {
        super();
        this.state = {open: false};
        this.onMenuClick = this.onMenuClick.bind(this);
        this.onRequestChange = this.onRequestChange.bind(this);
    }

    onMenuClick() {
        this.setState({open: !this.state.open});
    }

    onRequestChange(open) {
        this.setState({open});
    }

    render() {
        return (
            <div>
                <Drawer open={this.state.open} docked={false}
                        onRequestChange={this.onRequestChange}>
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
                <AppBar title="Teste"
                        onLeftIconButtonTouchTap={this.onMenuClick}/>
            </div>
        );
    }
}

export default MyMenu;
