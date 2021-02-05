import React from 'react';
import {Link} from 'react-router-dom';
import { HeaderArea } from './style';
import {isLogged} from '../../../helpers/AuthHandler';

const Header = () => {
    let logged = isLogged();

    return(
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <span className="logo1">O</span>
                        <span className="logo2">L</span>
                        <span className="logo3">X</span>
                    </Link>
                </div>
                <nav>
                    <ul>
                        {logged &&
                            <>
                                <li>
                                <Link to="/my-account">Minha Conta</Link>
                                </li>
                                <li>
                                    <Link to="">Sair</Link>
                                </li>
                                <li>
                                    <Link to="/post-an-ad" className="button">Postar Anúncio</Link>
                                </li>
                            </>
                        }
                        {!logged &&
                            <>
                                <li>
                                <Link to="/signin">Login</Link>
                                </li>
                                <li>
                                    <Link to="/signup">Cadastre-se</Link>
                                </li>
                                <li>
                                    <Link to="/signin" className="button">Postar Anúncio</Link>
                                </li>
                            </>
                        }
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );
}
export default Header;