import React, { Component ,Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import PaginaInicial from './paginas/PaginaInicial.js'
import $ from 'jquery';
import './recursos/css/style.css';

class App extends Component {
    
  
    render(){
        return (
            <Fragment>
                {/* Pagina inicil do site */}
                <PaginaInicial/>
            </Fragment>
            
        )
    }
}
export default App;