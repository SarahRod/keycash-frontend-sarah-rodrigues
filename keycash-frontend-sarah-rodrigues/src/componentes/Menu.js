import React, {Component, Fragment} from 'react';
import Logo from '../recursos/icones/logo3.png';



class Menu extends Component{
    render(){
        return(
            // Menu do site com logo da empresa
            <nav class="navbar navbar-light bg-white justify-content-between">
                <a class="navbar-brand">
                    <img src={Logo} style={{height: 45 + 'px'}} alt="Ícone da empresa"/>
                </a>
                <form class="login">
                    <button class="btn btn-rosa my-2 my-sm-0" name="login" type="submit">Login</button>
                </form>
            </nav>
        )
    }
}export default Menu;





