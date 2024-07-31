import { List, Avatar, Card, Row, Col, Button, Typography } from 'antd';
import tikImg from '../../assets/tik.png'
import './CardList.css'
const { Title } = Typography;
const CardList = ({ changeText }) => {

    const changeTitle = changeText ? "TikTok" : "Instagram";
    const descriptionListCard = ["Instant Delivery", "Real & Active Followers", "24/7 Customer Support", "No Password Required"];

    const data = [
        {
            key: 1,
            title: `Buy ${changeTitle} Followers`,
            avatar: tikImg,
            description: descriptionListCard,
            price: 1.99,
            link: `https://buyfollowersaustralia.com/buy-${changeTitle}-followers/`
        },
        {
            key: 2,
            title: `Buy ${changeTitle} Auto Likes`,
            avatar: tikImg,
            description: descriptionListCard,
            price: 1.99,
            link: `https://buyfollowersaustralia.com/buy-${changeTitle}-followers/`
        },
        {
            key: 3,
            title: `Buy ${changeTitle} Likes`,
            avatar: tikImg,
            description: descriptionListCard,
            price: 1.99,
            link: `https://buyfollowersaustralia.com/buy-${changeTitle}-followers/`
        },
        {
            key: 4,
            title: `Buy ${changeTitle} Views`,
            avatar: tikImg,
            description: descriptionListCard,
            price: 1.99,
            link: `https://buyfollowersaustralia.com/buy-${changeTitle}-followers/`
        },
    ];

    const handleClick = (link) => {
        window.location.href = link;
    }
    return (
        <Row justify="center" style={{ padding: "5vh 8vw" }} gutter={[30, 24]}>
            {data.map((card, index) => (
                <Col className='card_style' key={index} xs={22} sm={12} md={6}>
                    <Card className='card_inner_style'
                        hoverable={true}
                        size='small'
                        title={<span style={{ color: 'red' }}>{card.title}</span>}
                    >
                        <Title className='ListPrice' >
                            <sup >$</sup>{card.price}
                        </Title>
                        <List
                            bordered={false}
                            itemLayout="horizontal"
                            dataSource={card.description}
                            renderItem={item => (
                                <List.Item style={{ padding: "6px", border: "none" }}>
                                    <List.Item.Meta
                                        avatar={<Avatar src={card.avatar} />}
                                        title={<span className='listColor' >{item}</span>}
                                    />
                                </List.Item>
                            )}
                        />
                        <Button
                            onClick={() => handleClick(card.link)}
                            size='middle'
                            style={{ background: "red", borderRadius: "none", color: "whitesmoke", border: "none" }}
                        >
                            Buy Now
                        </Button>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default CardList;
