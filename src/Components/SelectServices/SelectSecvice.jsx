import { Col, Row, Button } from "antd";
import {
    InstagramOutlined,
    TikTokOutlined
} from '@ant-design/icons';
import './SelectService.css'
function SelectService() {
    return (
        <Row className="Select_service">
            <Col className="Select_service_col" xs={24} sm={24} md={24}>
                <h1 className="Select_service_col_h1">Select Service</h1>
                <p className="Select_service_col_p">Select Your Required Service & Enjoy</p>
                <Row gutter={[16, 16]} className="Select_service_inside_row">
                    <Col xs={12} sm={12} md={12} className="Select_service_inside_col">
                        <Button
                            shape='round'
                            size='large'
                            icon={<InstagramOutlined
                                style={
                                    { color: "white" }
                                }
                            />}
                            style={{
                                background: "#f51636",
                                color: "white",
                                width: "100%",
                                // padding: '10px 20px',
                            }}
                        >
                            Instagram
                        </Button>
                    </Col >
                    <Col xs={12} sm={12} md={12} className="Select_service_inside_col">
                        <Button
                            shape='round'
                            size='large'
                            icon={<TikTokOutlined
                                style={
                                    { color: "black" }
                                }
                            />}
                            style={{
                                background: "#f51636",
                                color: "black",
                                width: "100%",
                                // padding: '10px 20px',
                            }}
                        >
                            Tiktok
                        </Button>
                    </Col>

                </Row>
            </Col>
        </Row>
    )
}
export default SelectService;