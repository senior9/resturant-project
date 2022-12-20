import React from 'react';
import { Link } from 'react-router-dom';

const LinkFoodItem = () => {
    return (
       <div>
         <div className='mt-3 d-flex justify-content-center'>
            <Link  className='text-decoration-none text-danger align-items-center' to='/breakfastItem'><span className=' m-2'>BreakFast</span></Link>
            <Link className='text-decoration-none text-danger' to="/lunchItem"><span className=' m-2'>Lunch</span></Link>
            <Link className='text-decoration-none text-danger' to="/dinnerItem"><span className=' m-2'>Dinner</span></Link>
        </div>
       </div>
    );
};

export default LinkFoodItem;