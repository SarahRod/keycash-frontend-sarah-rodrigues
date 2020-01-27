import React, { Component, Fragment } from 'react';
import {DOMINIO} from './../link_config';
import $ from 'jquery';
import Localizacao from './../recursos/icones/address24.png';
import Quarto from './../recursos/icones/quarto24.png';
import Banheiro from './../recursos/icones/banheiro24.png';
import Garagem from './../recursos/icones/garagem24.png';
import Area from './../recursos/icones/area24.png';
import Imagem from './../recursos/imagens/background2.png';
import { Button } from 'react-bootstrap';


class ListaImoveis extends Component {
    
    // Construtor
    constructor() {
        super();
        this.state = {
            imoveis: [],
        }

    }

    // Chamando a API para mostrar as informações
    visualizarImovel(){

        this.setState({ produtos: [] });
        
        $.ajax({
            url: `${DOMINIO}`,
            type: 'GET',
            contentType: 'application/json',
            
            success: function (resposta) {

                this.setState({ imoveis: resposta});
                console.log(resposta)

            }.bind(this),
            error: function (data) {

                console.log(data)
            }
        });
    }

    // Mostrando as informações
    componentDidMount() {
       
        this.visualizarImovel();
    }
    
    render(){
        return (
            <Fragment>
                <section>
                    <div class="container">
                        <div class="row">
                            {this.state.imoveis.map(item => (
                                <div class="col-md-6 col-lg-4 col-12 mt-3 ">
                                    {/* Card para cada imovel */}
                                    <div class="card"  key={item.id} value={item.id} >
                                        {/* Imagem do imovel */}
                                        <img class="card-img-top" src={item.images[0]} alt="Foto do Imóvel" style={{height: 200 + 'px'}}/>
                                        {/* Corpo do card */}
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-1 mr-1">
                                                    <img src={Localizacao} alt="Icone de Localização do imóvel"/>
                                                </div>
                                                <div class="col-10">
                                                    <h5 class="card-title ">{item.address.formattedAddress}</h5>
                                                </div>
                                            </div>
                                            {/* Informacoes Básicas */}
                                            <div class="row mt-4 mb-4">
                                                <div class="col-3 col-md-4 col-lg-4">
                                                    <img src={Quarto} alt="Ícone de cama"/>
                                                    <span class="ml-2">{item.bedrooms}</span>
                                                </div>
                                                <div class="col-3 col-md-4 col-lg-4">
                                                    <img src={Banheiro} alt="Ícone de banheira"/>
                                                    <span class="ml-2">{item.bathrooms}</span>
                                                </div>
                                                <div class="col-3 col-md-4 col-lg-4">
                                                    <img src={Garagem} alt="Ícone de carro"/>
                                                    <span class="ml-2">{item.parkingSpaces}</span>
                                                </div>
                                            </div>
                                            <hr/>
                                            {/* Botao para ver mais informacoes */}
                                            <button type="button" class="btn btn-rosa" data-toggle="modal" data-target={'#' + item.id}>
                                                Veja Mais
                                            </button>
                                            
                                            {/* Modal para mostras os detalhes dos imoveis */}
                                            <div class="modal fade" id={item.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                                                <div class="modal-dialog modal-lg" role="document" style={{width:100 + '%' }}>
                                                    <div class="modal-content">
                                                        {/* Bptao para fechar a modal */}
                                                        <div class="modal-header">
                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                                                            <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        {/* Corpo da modal */}
                                                        <div class="modal-body">
                                                            <img src={Imagem} class="img-fluid rounded" alt="Responsive image"/>
                                                            <hr/>
                                                            <h5 class="modal-title" id="exampleModalLabel">{item.address.formattedAddress}</h5>
                                                            <div class="row mb-4">
                                                                <div class="col-4 col-md-4 col-lg-3 mt-4 ">
                                                                    <img src={Quarto} alt="Ícone de cama"/>
                                                                    <span class="ml-2">{item.bedrooms} - Quartos</span>
                                                                </div>
                                                                <div class="col-4 col-md-4 col-lg-3 mt-4 ">
                                                                    <img src={Banheiro} alt="Ícone de banheira"/>
                                                                    <span class="ml-2">{item.bathrooms} - Banheiro</span>
                                                                </div>
                                                                <div class="col-4 col-md-4 col-lg-3 mt-4 ">
                                                                    <img src={Garagem} alt="Ícone de carro"/>
                                                                    <span class="ml-2">{item.parkingSpaces} - Vaga</span>
                                                                </div>
                                                                <div class="col-4 col-md-4 col-lg-3 mt-4 ">
                                                                    <img src={Area} alt="Ícone de carro"/>
                                                                    <span class="ml-2">{item.usableArea} - m²</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            ))}
                        </div>
                    </div>
                </section> 
            </Fragment>
        )
    }
}
export default ListaImoveis;