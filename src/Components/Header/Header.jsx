
import { Row, Image, Col } from 'antd';
import headerLogo from '../../assets/Logo.png';
import './Header.css';

const Header = () => {
    return (
        <header  className='header'>
            <Row  align={'middle'}>
                <Col  xs={8} sm={10} md={10}>
                    <Image
                        src={headerLogo}
                    />
                </Col>
                <Col xs={16} sm={14} md={14}>
                    {/* <ul  className="nav-bar-ul"> */}
                    <Row gutter={[50, 24]} align={'middle'}>
                        <Col xs={4} sm={4} md={4}>
                            <li  className="nav-bar-li">
                                <a  href="/" className="nav-bar-anchor">Home</a>
                            </li>
                        </Col>
                        <Col xs={4} sm={4} md={4}>
                            <li  className="nav-bar-li">
                                <a  href="/about" className="nav-bar-anchor">About Us</a>
                            </li>
                        </Col>
                        <Col xs={4} sm={4} md={4}>
                            <li  className="nav-bar-li">
                                <a  href="#" className="nav-bar-anchor">Instagram</a>
                            </li>
                        </Col>
                        <Col xs={4} sm={4} md={4}>
                            <li  className="nav-bar-li">
                                <a  href="/" className="nav-bar-anchor">Tiktok</a>
                            </li>
                        </Col >
                        <Col xs={4} sm={4} md={4}>
                            <li  className="nav-bar-li">
                                <a  href="/blog" className="nav-bar-anchor">Blog</a>
                            </li>
                        </Col>
                        <Col >
                            <li  className="nav-bar-li">
                                <a  href="/contact" className="nav-bar-anchor">Contact Us</a>
                            </li>
                        </Col>
                    </Row>
                    {/* </ul> */}
                </Col>
            </Row>
        </header>
    );
}

export default Header;
