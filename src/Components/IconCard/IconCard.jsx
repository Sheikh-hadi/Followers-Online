import { Col, Row, Typography } from "antd";
import {
    UserOutlined,
    KeyOutlined,
    CreditCardOutlined,
    CustomerServiceOutlined,
} from '@ant-design/icons';
import './IconCard.css'
const { Title } = Typography;

const IconCard = () => {
    return (
        <Row style={{ margin: "4vh 5vw" }} className="iconCard" gutter={16} justify="center" align="middle">
            <Col xs={24} sm={6} md={6} style={{ textAlign: 'center' }}>
                <UserOutlined style={{
                    padding: "10px",
                    fontSize: "50px",
                    color: "white"
                }} />
                <Title style={{ color: "white" }} level={5}>Active Users</Title>
            </Col>
            <Col xs={24} sm={6} md={6} style={{ textAlign: 'center' }}>
                <CustomerServiceOutlined style={{
                    padding: "10px",
                    fontSize: "50px",
                    color: "white"
                }} />
                <Title style={{ color: "white" }} level={5}>Live Support</Title>
            </Col>
            <Col xs={24} sm={6} md={6} style={{ textAlign: 'center' }}>
                <CreditCardOutlined style={{
                    padding: "10px",
                    fontSize: "50px",
                    color: "white"
                }} />
                <Title style={{ color: "white" }} level={5}>Safe and Secure</Title>
            </Col>
            <Col xs={24} sm={6} md={6} style={{ textAlign: 'center' }}>
                <KeyOutlined style={{
                    padding: "10px",
                    fontSize: "50px",
                    color: "white"
                }} />
                <Title style={{ color: "white" }} level={5}>Secure Payment</Title>
            </Col>
        </Row>
    );
}

export default IconCard;
