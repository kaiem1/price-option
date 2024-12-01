
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOptions = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='bg-blue-900 rounded-md p-4 flex flex-col'>
            <h2 className='text-center text-white'> 
                <span className='text-7xl font-extrabold text-white'>{price}</span>
                <span className='text-2xl text-white'>/mon</span>
            </h2>
            <h4 className="text-3xl text-center my-8 text-white">{name}</h4>
           <div className='pl-6 flex-grow'>
           {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
           </div>
           <button className='mt-12 bg-yellow-200 w-full py-2 font-bold rounded-lg hover:bg-yellow-400'>Buy Now</button>
        </div>
    );
};

PriceOptions.propTypes = {
    option: PropTypes.object
};

export default PriceOptions;