import './Wrapper.css';
import logo from "../../assets/img/logo.svg";


const Wrapper = () => {
    return(
        <>
            <div className='top__wrapper'>
                <img src={logo} width={800} />
                <h2 className='top__wrapper-subtitle text-white'>Here you can find course and buy it by NEAR!</h2>
            </div>
        </>
    )
};

export default Wrapper;