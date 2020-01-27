import React, {Component, Fragment} from 'react';



class Header extends Component{
    render(){
        return(
            <header>
                <div class="jumbotron jumbotron-fluid header-imagem">
                    <div class="container">
                        <h1 class="display-4 rosa-escuro-texto">Para tempos de mudanças</h1>
                        <p class="lead text-white">Veja alguns dos imóveis disponíveis em nosso site!</p>
                    </div>
                </div>
            </header>
        )
    }
}export default Header;
