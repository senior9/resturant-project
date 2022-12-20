
import CardItem from '../CradItem/CardItem';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import Breakfast from './Breakfast/Breakfast';
import "./Home.css"

const Home = () => {
    return (
        <div className='food mt-3 p-2'>
             <Banner></Banner>
            <Breakfast></Breakfast>
            <CardItem></CardItem>
            
        </div>
        
    );
};

export default Home;