import React, {Component} from 'react';
import erro404 from './erro404.jpg'

class NotFound extends Component {
    render() {
        return (
            <div className="center">
                <img src={erro404} alt="Página não encontrada"/>
                <h5>Ops, não foi possível encontrar conteúdo para: <code>{this.props.location.pathname}</code></h5>
            </div>
        );
    }
}

export default NotFound;