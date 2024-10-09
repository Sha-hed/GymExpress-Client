import { MdOutlineForwardToInbox } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import GymLogo from '../../../assets/images2/GymLogo.png'
import { Link } from "react-router-dom";
import useAxiosGeneral from "../../../Hooks/useAxiosGeneral";
import Swal from "sweetalert2";
const Letter = () => {

  const axiosGeneral = useAxiosGeneral();


  const handleSub = async () => {
    const checkbox = document.querySelector('#checkbox')
    const ema = document.querySelector('#ema')
    const nam = document.querySelector('#nam')
    if (checkbox.checked && ema.value && nam.value) {
      const user = { name: nam.value, email: ema.value }
      const { data } = await axiosGeneral.post('/newsletter', user);
      console.log(data)
      if (data.result.insertedId) {
          Swal.fire({
            color: '#008000,',
            position: "top",
            icon: "success",
            title: "Thank You for Subscribing!",
            showConfirmButton: false,
            timer: 1500
          });
      }
    } else {
      console.log('Unauthorized User')
      return;
    }
}
  return (
    <div className="bg-[#1E1E1E] py-5 md:py-16 text-white">
      <div className="flex flex-col md:flex-row justify-between mx-1 md:mx-20 mb-5">
        <div className="w-full md:w-1/2 px-2 md:px-10 space-y-3">
          <div className="mb-10 md:mb-32">
            <img src={GymLogo} alt="" />
          </div>
          <div className="mb-10">
            <h1 className="text-white font-bold text-2xl">NewsLetter SignUp</h1>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex items-center gap-2 mt-5">
              <MdDriveFileRenameOutline />
              <input
                type="text"
                name=""
                id="nam"
                placeholder="Enter Your Name"
                className="bg-transparent outline-none"
              />
            </div>
            <div className="flex items-center gap-2 mt-5">
              <MdOutlineForwardToInbox />
              <input
                type="email"
                name=""
                id="ema"
                placeholder="Enter Your Email"
                className="bg-transparent outline-none"
              />
            </div>
          </div>
          <hr className="mb-5" />
          <div className="my-5">
            <input
              type="checkbox"
              id="checkbox"
              className="bg-transparent mr-2"
            />
            <label className="text-[#808080]" htmlFor="">
              I agree to the <span className="underline">Privacy Policy</span>.
            </label>
          </div>
          <div className="flex justify-center">
            <button onClick={handleSub} type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 my-5 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Subscribe</button>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-5 md:px-10">
          <h1 className="text-xl md:text-5xl font-bold text-center md:text-start">
            Transform your body, transform your life
          </h1>
          <div className="flex justify-between">
            <div>
              <h1 className="font-bold text-white mt-20 mb-5 text-xl">
                Socials
              </h1>
              <div className="flex flex-col space-y-5">
                <Link
                  className="hover:translate-x-3 transition-transform duration-500
                  relative pb-1 hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:h-[2px] hover:after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-500"
                  to="https://www.facebook.com/kazi.m.shahed.3"
                  target="_blank"
                >
                  Facebook
                </Link>
                <Link
                  className="hover:translate-x-3 transition-transform duration-500
                  relative pb-1 hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:h-[2px] hover:after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-500"
                  to="https://x.com/KaziMohamm1908"
                  target="_blank"
                >
                  Twitter
                </Link>
                <Link
                  className="hover:translate-x-3 transition-transform duration-500
                  relative pb-1 hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:h-[2px] hover:after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-500"
                  to="https://www.instagram.com/kazimd.shahed/"
                  target="_blank"
                >
                  Instagram
                </Link>
                <Link
                  className="hover:translate-x-3 transition-transform duration-500
                  relative pb-1 hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:h-[2px] hover:after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-500"
                  to="https://github.com/Sha-hed"
                  target="_blank"
                >
                  Github
                </Link>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-white mt-20 mb-5 text-xl">Menu</h1>
              <div className="flex flex-col space-y-5">
                <h1
                  className="hover:translate-x-3 transition-transform duration-500
                  relative pb-1 hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:h-[2px] hover:after:bg-white after:w-0 hover:after:w-[45px] after:transition-all after:duration-500"
                >
                  Home
                </h1>
                <h1
                  className="hover:translate-x-3 transition-transform duration-500
                  relative pb-1 hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:h-[2px] hover:after:bg-white after:w-0 hover:after:w-[45px] after:transition-all after:duration-500"
                >
                  Pages
                </h1>
                <h1
                  className="hover:translate-x-3 transition-transform duration-500
                  relative pb-1 hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:h-[2px] hover:after:bg-white after:w-0 hover:after:w-[37px] after:transition-all after:duration-500"
                >
                  Blog
                </h1>
                <h1
                  className="hover:translate-x-3 transition-transform duration-500
                  relative pb-1 hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:h-[2px] hover:after:bg-white after:w-0 hover:after:w-[40px] after:transition-all after:duration-500"
                >
                  Shop
                </h1>
                <h1
                  className="hover:translate-x-3 transition-transform duration-500
                  relative pb-1 hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:h-[2px] hover:after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-500"
                >
                  Contacts
                </h1>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-white mt-20 mb-5 text-xl">
                SayHello
              </h1>
              <a to="mailto:info@gmail.com">info@gmail.com</a>
              <h1></h1>
            </div>
          </div>
        </div>
      </div>
      {/* <hr className="w-[90%] mx-auto mt-10 text-gray-500 mb-5" />
      <h1 className="mx-20 text-[#808080] font-bold text-lg px-10">GymExpress &copy; 2024. All rights reserved.</h1> */}
    </div>
  );
};

export default Letter;
