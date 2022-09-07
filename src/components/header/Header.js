import React from "react";
import { GrBasket } from "react-icons/gr";
import userImage from "../../images/userImage.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {app} from '../../firebase.config'
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { actionType } from "../../context/reducer";
import { useStateValue } from "../../context/StateProvider";


const Header = () => {

  const firebase = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{user}, dispatch] = useStateValue();

  const login = async() => {
    const {user: {refreshToken, providerData}} = await signInWithPopup(firebase, provider);
    dispatch({
      type: actionType.SET_USER,
      user: providerData[0]
    })
  }

  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      {/*desktop & tablet*/}
      <div className="hidden md:flex w-full h-full justify-between">
        <Link to={'/'} className="flex items-center gap-2 text-4xl">Shop</Link>

        <div className="flex">
          <ul className="flex items-center gap-8">
            <motion.li whileTap={{scale: 1.6}} className="text-base text-textColor hover:text-cyan-500 duration-100 transition-all easy-in-out cursor-pointer">
              Home
            </motion.li>
            <motion.li whileTap={{scale: 1.6}} className="text-base text-textColor hover:text-cyan-500 duration-100 transition-all easy-in-out cursor-pointer">
              Menu
            </motion.li>
            <motion.li whileTap={{scale: 1.6}} className="text-base text-textColor hover:text-cyan-500 duration-100 transition-all easy-in-out cursor-pointer">
              About us
            </motion.li>
            <motion.li whileTap={{scale: 1.6}} className="text-base text-textColor hover:text-cyan-500 duration-100 transition-all easy-in-out cursor-pointer">
              Service
            </motion.li>
          </ul>
          <div className="relative flex items-center justify-center">
            <GrBasket className="text-base text-2xl ml-7 cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center ">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>

          <div className="flex items-center justify-center ml-8">
            <motion.img
              whileTap={{scale: 0.6}}
              src={user ? user.photoURL : userImage}
              alt="userImage"
              className="w-8 h-8 text-3xl cursor-pointer rounded-full"
              onClick={login}  
            />
					</div>

        </div>
      </div>

      {/*mobile*/}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
};

export default Header;
