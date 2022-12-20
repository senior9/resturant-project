import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import Breakfast1 from "../../../images/breakfast/breakfast1.png";
import Breakfast2 from "../../../images/breakfast/breakfast2.png";
import Breakfast3 from "../../../images/breakfast/breakfast3.png";
import Breakfast4 from "../../../images/breakfast/breakfast4.png";
import Breakfast5 from "../../../images/breakfast/breakfast5.png";
import Breakfast6 from "../../../images/breakfast/breakfast6.png";
import LinkFoodItem from '../../Shared/LinkFoodItem/LinkFoodItem';
import Bitem from '../BItem/Bitem';
import "./Breakfast.css"

const Breakfast = () => {
    const breakfast =[
        {id:1,name: 'Dim Polaou',price:'$25',description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',img:Breakfast1},
        {id:2,name: 'Dim Polaou',price:'$19',description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',img:Breakfast2},
        {id:3,name: 'Dim Polaou',price:'$45',description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',img:Breakfast3},
        {id:4,name: 'Dim Polaou',price:'$68',description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',img:Breakfast4},
        {id:5,name: 'Dim Polaou',price:'$12',description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',img:Breakfast5},
        {id:6,name: 'Dim Polaou',price:'$14',description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',img:Breakfast6}
    ] ;
    const [selected,setSelected]=useState(false);
    const handleCard =()=>{
        setSelected(!selected);
        if (selected){
            console.log('selected');
        }
    }


    return (
        <div>
            <div className='container breakfast-container' onClick={handleCard}>
            {
             breakfast.map(bItem=><Bitem
             key={bItem.id}
             bItem={bItem}>
             </Bitem>)
            }
            
        </div>
        <div className='d-flex justify-content-center m-3'>
          <Link to='/checkout' className='text-align-center' >
            <Button className=' mt-5' variant="secondary" disabled>Please Check Out</Button>{' '}
            </Link>
          </div>
        </div>
    );
};

export default Breakfast;