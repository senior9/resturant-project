import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import LunhItem1 from "../../../images/lunch/lunch1.png";
import LunhItem2 from "../../../images/lunch/lunch2.png";
import LunhItem3 from "../../../images/lunch/lunch3.png";
import LunhItem4 from "../../../images/lunch/lunch4.png";
import LunhItem5 from "../../../images/lunch/lunch5.png";
import LunhItem6 from "../../../images/lunch/lunch6.png";
import LunchItem from '../LunchItem/LunchItem';
import "./Lunch.css"

const Lunch = () => {
    const lunch =[
        {id:1,name: 'Meat With Salad',price:'$100',description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',img:LunhItem1},
        {id:2,name: 'Dim with PudinaPata',price:'$219',description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',img:LunhItem2},
        {id:3,name: 'Sandwitch With Bhutta',price:'$85',description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',img:LunhItem3},
        {id:4,name: 'Luchi Bhat mangso',price:'$168',description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',img:LunhItem4},
        {id:5,name: 'French Fry With Meat',price:'$112',description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',img:LunhItem5},
        {id:6,name: 'Aluu Vaja With Ruti',price:'$148',description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',img:LunhItem6}
    ] 

    return (
      <div>
          <div className='container lunch-container'>
            {
                lunch.map(lunchItem =><LunchItem
                key={lunchItem.id}
                lunchItem ={lunchItem}>
                </LunchItem>)
            }
        </div>
        <div className='d-flex justify-content-center mb-3'>
          <Link to='/checkout' className='text-align-center' >
            <Button className=' mt-5' variant="secondary" disabled>Please Check Out</Button>{' '}
            </Link>
          </div>
      </div>
    );
};

export default Lunch;