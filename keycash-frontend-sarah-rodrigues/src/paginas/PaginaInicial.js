import React, { Component, Fragment } from 'react';
import {DOMINIO} from './../link_config';
import $ from 'jquery';
import ListaImoveis from '../componentes/ListaImoveis.js';
import Menu from '../componentes/Menu.js';
import Header from '../componentes/Header.js';

class PaginaInicial extends Component {
    
    constructor() {
        super();
        this.state = {
            produtos: [],
        }

    }
    visualizarRestaurante(){

        this.setState({ produtos: [] });
        
        $.ajax({
            url: `${DOMINIO}`,
            type: 'GET',
            contentType: 'application/json',
            
            success: function (resposta) {

                this.setState({ produtos: resposta});
                console.log(resposta)

            }.bind(this),
            error: function (data) {

                console.log(data)
            }
        });
    }

    componentDidMount() {
       
        this.visualizarRestaurante();
    }
    
    render(){
        return (
            <Fragment>
                {/* Componentes presentes na pagina */}
                <Menu/>
                <Header/>
                <ListaImoveis/>
            </Fragment>
        
        )
    }
}
export default PaginaInicial;