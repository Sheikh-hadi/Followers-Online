import { useState } from 'react';
import { Row, Image, Col, Dropdown } from 'antd';
import headerLogo from '../../assets/Logo.png';
import './Header.css';
import instagramDropdownModel from '../../Models/InstagramDropdownModel';
import tiktokDropdownModel from '../../Models/TiktokDropdownmodel';
const Header = () => {
    const [item, setItem] = useState(null);

    const handleMouseEnterInstagram = () => {
        setItem(true);
    };

    const handleMouseEnterTiktok = () => {
        setItem(false);
    };
    console.log(item)

    const items = item ? instagramDropdownModel : tiktokDropdownModel;


    return (
        <header className='header'>
            <Row align={'middle'}>
                <Col xs={8} sm={10} md={10}>
                    <Image src={headerLogo} />
                </Col>
                <Col xs={16} sm={14} md={14}>
                    <Row gutter={[50, 24]} align={'middle'}>
                        <Col xs={4} sm={4} md={4}>
                            <li className="nav-bar-li">
                                <a href="/" className="nav-bar-anchor">Home</a>
                            </li>
                        </Col>
                        <Col xs={4} sm={4} md={4}>
                            <li className="nav-bar-li">
                                <a href="/about" className="nav-bar-anchor">About Us</a>
                            </li>
                        </Col>
                        <Col xs={4} sm={4} md={4}>
                            <Dropdown  menu={{ items }} placement="bottomLeft" >
                                <li className="nav-bar-li">
                                    <a onMouseEnter={handleMouseEnterInstagram}
                                        href="#"
                                        className="nav-bar-anchor"
                                    >
                                        Instagram
                                    </a>
                                </li>
                            </Dropdown>
                        </Col>
                        <Col xs={4} sm={4} md={4}>
                            <Dropdown menu={{ items }} placement="bottomLeft">
                                <li className="nav-bar-li">
                                    <a onMouseEnter={handleMouseEnterTiktok}
                                        href="#"
                                        className="nav-bar-anchor"
                                    >
                                        TikTok
                                    </a>
                                </li>
                            </Dropdown>
                        </Col>
                        <Col xs={4} sm={4} md={4}>
                            <li className="nav-bar-li">
                                <a href="/blog" className="nav-bar-anchor">Blog</a>
                            </li>
                        </Col>
                        <Col>
                            <li className="nav-bar-li">
                                <a href="/contact" className="nav-bar-anchor">Contact Us</a>
                            </li>
                        </Col>
                    </Row>
                </Col>
            </Row>
           
        </header>
    );
};

export default Header;
