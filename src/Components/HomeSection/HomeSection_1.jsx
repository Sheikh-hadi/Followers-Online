import './HomeSection_1.css';
import phoneImg from '../../assets/HomeSection_1_img.png'
import { Col, Row, Button } from "antd"
function HomeSection_1() {
    return (

        <Row align="middle" className="HomeSection_1">
            <Col className="HomeSection_1_col_1" xs={24} sm={12} md={12}>
                <h1 className="HomeSection_1_col_1_h1">Get Instant Fame with Buy Followers Australia</h1>
                <br />
                <p className="HomeSection_1_col_1_p" >Our services are designed to make your social media accounts shine and enhance your business&apos;s credibility, giving it a world-famous appeal. With our 100% real and active followers, likes, and views, you&apos;ll supercharge your reach and build trust with your audience..</p>
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={8} md={8}>
                        <Button shape='round' size='middle' className="btn_home_section_1">
                            BUY IG FOLLOWERS
                        </Button>
                    </Col>
                    <Col xs={24} sm={8} md={8}>
                        <Button shape='round' size='middle' className="btn_home_section_1">
                            BUY INSTAGRAM LIKES
                        </Button>
                    </Col>
                    <Col xs={24} sm={8} md={8}>
                        <Button shape='round' size='middle' className="btn_home_section_1">
                            BUY TIKTOK LIKES
                        </Button>
                    </Col>
                </Row>

            </Col>
            <Col className="HomeSection_1_col_2" xs={24} sm={12} md={12}>
                <img src={phoneImg} alt="Phone Image" /></Col>
        </Row>

    )
}
export default HomeSection_1