import { Col, Row, Button } from "antd";
import {
    InstagramOutlined,
    TikTokOutlined
} from '@ant-design/icons';
import './SelectService.css'
import { useState } from "react";
function SelectService({handleChange}) {

    const [handleColor, SetHandleColor] = useState(false);

    const handleInstagramColor = () => {
        SetHandleColor(false);
        handleChange(false);
    };

    const handletiktokColor = () => {
        SetHandleColor(true);
        handleChange(true);
    }
    return (
        <Row className="Select_service">
            <Col className="Select_service_col" xs={24} sm={24} md={24}>
                <h1 className="Select_service_col_h1">Select Service</h1>
                <p className="Select_service_col_p">Select Your Required Service & Enjoy</p>
                <Row gutter={[16, 16]} className="Select_service_inside_row">
                    <Col xs={12} sm={12} md={12} className="Select_service_inside_col">
                        <Button
                            onClick={handleInstagramColor}
                            shape='round'
                            size='large'
                            icon={<InstagramOutlined
                                style={handleColor ?
                                    { color: "black" }
                                    :
                                    { color: "white" }
                                }
                            />}
                            style={handleColor ?
                                {
                                    background: "#F1F1F1",
                                    color: "black",
                                    width: "100%",
                                    border: "2px solid black",
                                }
                                :
                                {
                                    background: "#f51636",
                                    color: "white",
                                    width: "100%",
                                    border: "none",
                                }
                            }
                        >
                            Instagram
                        </Button>
                    </Col >
                    <Col xs={12} sm={12} md={12} className="Select_service_inside_col">
                        <Button
                            onClick={handletiktokColor}
                            shape='round'
                            size='large'
                            icon={<TikTokOutlined
                                style={handleColor ?
                                    { color: "white" }
                                    :
                                    { color: "black" }
                                }
                            />}
                            style={handleColor ?
                                {
                                    background: "#f51636",
                                    color: "white",
                                    width: "100%",
                                    border: "none",
                                }
                                :
                                {
                                    background: "#F1F1F1",
                                    color: "black",
                                    width: "100%",
                                    border: "2px solid black",
                                }
                            }
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