import PropTypes from 'prop-types';
import { IoShieldCheckmark } from "react-icons/io5";


const Feature = ({ feature }) => {
    return (
        <div>
            <p className='text-white flex items-center'><IoShieldCheckmark className='text-yellow-300 mr-2'></IoShieldCheckmark> {feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
};

export default Feature;