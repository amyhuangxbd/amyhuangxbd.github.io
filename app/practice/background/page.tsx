import Image from 'next/image';
import './style.scss'
const Rotate = () => {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-screen h-screen flex justify-center items-center">
            <div className="gradient"></div>
        </div>
        
    );
};

export default Rotate;