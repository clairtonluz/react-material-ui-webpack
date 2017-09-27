import React, {Component} from "react";
import Auth from './Auth';

class Logout extends Component {
    constructor(props) {
        super(props);
        new Auth().logout();
    }

    render() {
        return (
            <div>
                <h3>Saindo...</h3>
            </div>
        );
    }
}

export default Logout;
