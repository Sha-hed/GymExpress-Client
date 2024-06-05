import logo from '../../assets/images/Logo.png'

const Footer = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center space-y-3 border p-2'>
                <div className="w-12 rounded-full">
                    <img src={logo} alt="" />
                </div>
                <p className='text-center'>FitnessClub Ltd.</p>
                <p className='text-center'>Providing reliable fitness solutions since 2022.</p>
                <p className='text-center'>Copyright © 2024 - All right reserved</p>
                <hr />
            </div>
        </>
    )
};

export default Footer;