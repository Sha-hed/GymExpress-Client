import { FaAnglesDown } from "react-icons/fa6";
import equip from '../../../assets/images2/Equi2.png'
import train from '../../../assets/images2/Train.png'
import neutri from '../../../assets/images2/new.png'
import swim from '../../../assets/images2/swim.png'

const WeOffer = () => {
  return (
    <div className="text-white mt-5 md:mt-20 mb-5">
      <h1 className="text-sm md:text-[16px] uppercase text-center font-bold mb-5">What We Offer</h1>
      <h1 className="text-center font-bold md:text-5xl">
        Achieve amazing results <br /> with our services
      </h1>
      <h1 className="flex justify-center mt-5 md:mt-10 mb-10 md:mb-20">
        <FaAnglesDown className="text-xl" />
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center mt-10 md:mt-32 pb-10 md:pb-32">
        <div
          className="relative w-[320px] h-[300px] flex flex-col justify-center items-center p-5 space-y-3
        hover:scale-105 cursor-pointer hover:bg-[#008B8B] hover:rounded-lg
        transition duration-100 group"
        >
          {/* <Image
            className=""
            src="/images/Equi2.png"
            width={100}
            height={100}
            style={{
              objectFit: "cover",
            }}
            alt="Banner Image"
          /> */}
          <img className="w-[100px]" src={equip} alt="" />
          <h1 className="font-bold text-xl group-hover:text-white">
            Best Equipment
          </h1>
          <p className="text-center text-gray-400 group-hover:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            illum!
          </p>
        </div>
        <div
          className="relative w-[320px] h-[300px] flex flex-col justify-center items-center p-5 space-y-3
         hover:bg-[#008B8B] hover:scale-105 hover:rounded-lg cursor-pointer
        transition duration-100 group"
        >
          {/* <Image
            className=""
            src="/images/Train.png"
            width={100}
            height={100}
            style={{
              objectFit: "cover",
            }}
            alt="Banner Image"
          /> */}
          <img className="w-[100px]" src={train} alt="" />
          <h1 className="font-bold text-xl group-hover:text-white">
            Training Plan
          </h1>
          <p className="text-center text-gray-400 group-hover:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            illum!
          </p>
        </div>
        <div
          className="relative w-[320px] h-[300px] flex flex-col justify-center items-center p-5 space-y-3
        hover:bg-[#008B8B] hover:scale-105 hover:rounded-lg cursor-pointer
        transition duration-100 group"
        >
          {/* <Image
            className=""
            src="/images/new.png"
            width={100}
            height={100}
            style={{
              objectFit: "cover",
            }}
            alt="Banner Image"
          /> */}
          <img className="w-[100px]" src={neutri} alt="" />
          <h1 className="font-bold text-xl group-hover:text-white">
            Nutrition Plan
          </h1>
          <p className="text-center text-gray-400 group-hover:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            illum!
          </p>
        </div>
        <div
          className="relative w-[320px] h-[300px] flex flex-col justify-center items-center p-5 space-y-3
         hover:bg-[#008B8B] hover:scale-105 hover:rounded-lg cursor-pointer
        transition duration-100 group"
        >
          {/* <Image
            className=""
            src="/images/swim.png"
            width={100}
            height={100}
            style={{
              objectFit: "cover",
            }}
            alt="Banner Image"
          /> */}
          <img className="w-[100px]" src={swim} alt="" />
          <h1 className="font-bold text-xl group-hover:text-white">
            Swimming Pool
          </h1>
          <p className="text-center text-gray-400 group-hover:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            illum!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
