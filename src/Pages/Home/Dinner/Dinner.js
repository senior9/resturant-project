import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import dinnerImage1 from "../../../images/dinner/dinner1.png" 
import dinnerImage2 from "../../../images/dinner/dinner2.png"
import dinnerImage3 from "../../../images/dinner/dinner3.png"
import dinnerImage4 from "../../../images/dinner/dinner4.png"
import dinnerImage5 from "../../../images/dinner/dinner5.png"
import dinnerImage6 from "../../../images/dinner/dinner6.png"
import DinnerItem from '../DinnerItem/DinnerItem';
import "./Dinner.css";

const Dinner = () => {
    const dinner =[
        {id:1,name: 'Mangsoand Fried Rice',price:'$250',description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',img:dinnerImage1},
        {id:2,name: 'Salmon Fish With Green veg',price:'$999',description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',img:dinnerImage2},
        {id:3,name: 'Dim Tomato With Salad',price:'$150',description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',img:dinnerImage3},
        {id:4,name: 'Sharma  Kuchi Kuchi',price:'$680',description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',img:dinnerImage4},
        {id:5,name: 'Pan Cake with Pepe',price:'$120',description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',img:dinnerImage5},
        {id:6,name: 'Letus Pata and Sea Food ',price:'$540',description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',img:dinnerImage6}
    ] 
    return (
        <div>
            <div className='container dinner-container'>
            {
                dinner.map(dinnerFood =><DinnerItem
                key={dinnerFood.id}
                dinnerFood={dinnerFood}
                >
                </DinnerItem>)
            }
            
        </div>
        <div className='d-flex justify-content-center mb-3'>
          <Link to='/checkout' className=' text-align-center' >
            <Button className=' mt-5' variant="secondary" disabled>Please Check Out</Button>{' '}
            </Link>
          </div>
        </div>
    );
};

export default Dinner;