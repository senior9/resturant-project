import React from 'react';

const DinnerItem = ({dinnerFood}) => {
    console.log(dinnerFood)
    const {id,name,img,description,price}=dinnerFood;
    return (
        <div id='dinnerItem' className='container '>
        <div className='card-body mt-3 g-5 col-lg-12 col-sm-6 col-md-8'>
        <img style={{height:'200px'}} src={img} alt=""/>
        <div className='card-body'>
          <h1>This is Dinner Item No:{id}</h1>
          <h3 className=''>{name}</h3>
          <p>{description}</p>
          <h4>{price}</h4>
          </div>
        </div>
      </div>
    );
};

export default DinnerItem;