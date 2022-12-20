import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import fastDelevery from "../../images/adult-blur-blurred-background-687824.png"
import CheiefCook from "../../images/chef-cook-food-33614.png";
import HomeDelivery from "../../images/architecture-building-city-2047397.png";
import ResponderIco from "../../images/icons/Group 1133.png";
import fastIco from "../../images/icons/Group 204.png";
import HomeIco from "../../images/icons/Group 245.png";
import { Link } from 'react-router-dom';
import { BsFillArrowRightSquareFill } from "react-icons/bs";

const CardItem = () => {
    return (
        <div className='container mt-5 d-flex p-2  justify-content-around'>
            <Card className='border-0'  style={{ width: '25rem', textAlign: 'left', }}>
                <Card.Img variant="top" src={fastDelevery} />
                <Card.Body>
                    <Card.Title style={{ textAlign: 'left' }}>
                        <Card.Img style={{ height: '40px', width: '40px', padding: '5px' }} variant="top" src={fastIco} />
                        Fast Delivery</Card.Title>
                    <Card.Text>
                        <p style={{ marginLeft: '10%' }}>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </p>
                    </Card.Text>
                    <Link to="/" style={{ text: 'none', textDecoration: 'none',marginLeft: '10%' }}> See more < BsFillArrowRightSquareFill /> </Link>
                </Card.Body>
            </Card>
            <Card  className='border-0' style={{ width: '25rem', textAlign: 'left', }}>
                <Card.Img style={{ height: '60%' }} variant="top" src={CheiefCook} />
                <Card.Body>
                    <Card.Title style={{ textAlign: 'left' }}>
                        <Card.Img style={{ height: '40px', width: '40px', padding: '5px' }} variant="top" src={ResponderIco} />
                        A Good Auto Responder</Card.Title>
                    <Card.Text>
                        <p style={{ marginLeft: '10%' }}>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </p>
                    </Card.Text>
                    <Link to="/" style={{ text: 'none', textDecoration: 'none',marginLeft: '10%' }}> See more < BsFillArrowRightSquareFill /> </Link>
                </Card.Body>
            </Card>
            <Card className='border-0'  style={{ width: '25rem', textAlign: 'left', }}>
                <Card.Img variant="top" src={HomeDelivery} />
                <Card.Body>
                    <Card.Title style={{ textAlign: 'left' }}>
                        <Card.Img style={{ height: '40px', width: '40px', padding: '5px' }} variant="top" src={HomeIco} />
                        Fast Delivery</Card.Title>
                    <Card.Text>
                        <p style={{ marginLeft: '10%' }}>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </p>
                    </Card.Text>
                    <Link  to="/" style={{ text: 'none', textDecoration: 'none',marginLeft: '10%' }}> See more < BsFillArrowRightSquareFill /> </Link>
                </Card.Body>
            </Card>


        </div>


    );
};

export default CardItem;