import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Banner1 from "../../../images/bannerbackground.png";
import LinkFoodItem from '../../Shared/LinkFoodItem/LinkFoodItem';

const Banner = () => {
    return (
        <div>
             <div className='second-section'>
                <img style={{width:"100%"}} src={Banner1} alt="" />
                <div className='serach-bar'>
                    <h1>Best Food waiting for your belly HA HA HA!!</h1>
                    <div>
                        <input type="search" placeholder='Please search your food here!' name="" value="" />
                        <Button className='button' variant='danger'>Search</Button>
                    </div>
                </div>

            </div>
            <LinkFoodItem></LinkFoodItem>
        </div>
    );
};

export default Banner;