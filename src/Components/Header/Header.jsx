
import headerLogo from '../../assets/Logo.png';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <nav className='nav-bar'>
                <img src={headerLogo} alt="Logo" />
                <span>
                    <ul className="nav-bar-ul">
                        <li className="nav-bar-li">
                            <a href="/" className="nav-bar-anchor">Home</a>
                        </li>
                        <li className="nav-bar-li">
                            <a href="/about" className="nav-bar-anchor">About Us</a>
                        </li>
                        <li className="nav-bar-li">
                            <a href="#" className="nav-bar-anchor">Instagram</a>
                        </li>
                        <li className="nav-bar-li">
                            <a href="/tiktok" className="nav-bar-anchor">Tiktok</a>
                        </li>
                        <li className="nav-bar-li">
                            <a href="/blog" className="nav-bar-anchor">Blog</a>
                        </li>
                        <li className="nav-bar-li">
                            <a href="/contact" className="nav-bar-anchor">Contact Us</a>
                        </li>
                    </ul>
                </span>
            </nav>
        </header>
    );
}

export default Header;
