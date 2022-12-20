import React from 'react';

const Bitem = ({bItem}) => {
    // console.log(bItem);
    const {id,name,price,description,img} = bItem;
    return (
        <div id='breakfastItem' className='container '>
          <div className='card-body mt-3 g-5 col-lg-12 col-sm-6 col-md-8 '>
          <img style={{height:'200px'}} src={img} alt=""/>
          <div className='card-body'>
            <h1>This is Breakfast Item No:{id}</h1>
            <h3 className=''>{name}</h3>
            <p>{description}</p>
            <h4>{price}</h4>
            </div>
          </div>

        </div>
    );
};

export default Bitem;