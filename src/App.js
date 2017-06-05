import React from 'react';
import { Button } from '@react-medellin/components';

class App extends React.Component {
    state = {
        contador: 0
    };

    iniciarConteo() {
        setInterval(() => {
            this.setState({
                contador: this.state.contador + 1
            });
        }, 1000);
    }

    render() {
        return(
            <div>
                <h1>
                    Hola React Medellin, {this.props.nombre}
                </h1>
                <strong>{this.state.contador}</strong>
                <br />
                <Button
                    onClick={this.iniciarConteo.bind(this)}
                    type="primary"
                    size="lg"
                >
                    Iniciar Conteo!
                </Button>
            </div>
        );
    }
}

export default App;
