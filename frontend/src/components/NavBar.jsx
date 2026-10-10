import { Link } from 'react-router-dom'
import { UseUserStore } from '../store/UseStore'

const NavBar = () => {
    const {session} = UseUserStore();
    return (
        <div className="navbar">
            <div className="navbar-container">
                <h2 className="navbar-brand">Feedback</h2>
                <ul className="navbar-nav">
                    <li>
                        <Link to={'/'}>Домой</Link>
                    </li>
                    {!session ? (
                     <li>
                    
                        <Link to={'/signin'}>Войти</Link>
                    </li>
                    ) : (<></>)}
                   
                    <li>
                        <Link to={'/my-messages'}>Мои сообщения</Link>
                    </li>
                    <li>
                        <Link to={'/logout'}>Выйти</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
