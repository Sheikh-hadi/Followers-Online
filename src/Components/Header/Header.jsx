
import { Row, Image, Col } from 'antd';
import headerLogo from '../../assets/Logo.png';
import './Header.css';

const Header = () => {
    return (
        <header style={{ border: "2px solid black" }} className='header'>
            <Row style={{ border: "2px solid black" }} align={'middle'}>
                <Col style={{ border: "2px solid black" }} xs={12} sm={12} md={12}>
                    <Image
                        src={headerLogo}
                    />
                </Col>
                <Col style={{ border: "2px solid black" }} xs={12} sm={12} md={12}>
                <Row>
                    <ul style={{ border: "2px solid black" }} className="nav-bar-ul">
                        <li style={{ border: "2px solid black" }} className="nav-bar-li">
                            <a style={{ border: "2px solid black" }} href="/" className="nav-bar-anchor">Home</a>
                        </li>
                        <li style={{ border: "2px solid black" }} className="nav-bar-li">
                            <a style={{ border: "2px solid black" }} href="/about" className="nav-bar-anchor">About Us</a>
                        </li>
                        <li style={{ border: "2px solid black" }} className="nav-bar-li">
                            <a style={{ border: "2px solid black" }} href="#" className="nav-bar-anchor">Instagram</a>
                        </li>
                        <li style={{ border: "2px solid black" }} className="nav-bar-li">
                            <a style={{ border: "2px solid black" }} href="/" className="nav-bar-anchor">Tiktok</a>
                        </li>
                        <li style={{ border: "2px solid black" }} className="nav-bar-li">
                            <a style={{ border: "2px solid black" }} href="/blog" className="nav-bar-anchor">Blog</a>
                        </li>
                        <li style={{ border: "2px solid black" }} className="nav-bar-li">
                            <a style={{ border: "2px solid black" }} href="/contact" className="nav-bar-anchor">Contact Us</a>
                        </li>
                    </ul>
                    </Row>
                </Col>
            </Row>
        </header>
    );
}

export default Header;
