import React, { useState } from "react";
import { GrBasket, GrAddCircle, GrLogout } from "react-icons/gr";
import userImage from "../../images/userImage.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { app } from "../../firebase.config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { actionType } from "../../context/reducer";
import { useStateValue } from "../../context/StateProvider";

const Header = () => {
  const firebase = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebase, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    setIsMenu(false)
    localStorage.clear()

    dispatch({
      type: actionType.SET_USER,
      user: null
    });
  };

  return (
    <header className="fixed z-50 w-screen p-6 px-10">
      {/*desktop & tablet*/}
      <div className="hidden md:flex w-full h-full justify-between">
        <Link to={"/"} className="flex items-center gap-2 text-4xl">
          Shop
        </Link>

        <div className="flex">
          <ul className="flex items-center gap-8">
            <motion.li
              whileTap={{ scale: 1.6 }}
              className="text-base text-textColor hover:text-cyan-500 duration-100 transition-all easy-in-out cursor-pointer"
            >
              Home
            </motion.li>
            <motion.li
              whileTap={{ scale: 1.6 }}
              className="text-base text-textColor hover:text-cyan-500 duration-100 transition-all easy-in-out cursor-pointer"
            >
              Menu
            </motion.li>
            <motion.li
              whileTap={{ scale: 1.6 }}
              className="text-base text-textColor hover:text-cyan-500 duration-100 transition-all easy-in-out cursor-pointer"
            >
              About us
            </motion.li>
            <motion.li
              whileTap={{ scale: 1.6 }}
              className="text-base text-textColor hover:text-cyan-500 duration-100 transition-all easy-in-out cursor-pointer"
            >
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
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : userImage}
              alt="userImage"
              className="w-8 h-8 text-3xl cursor-pointer rounded-full"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.4 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-16 right-6 px-4 py-2"
              >
                <Link to={"/createItem"}>
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
                    NewItem <GrAddCircle />
                  </p>
                </Link>
                <p
                  onClick={logout}
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
                  Logout <GrLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/*mobile*/}
      <div className="flex justify-between md:hidden w-full h-full">
        <Link to={"/"} className="flex items-center gap-2 text-4xl">
          Shop
        </Link>

        <div className="relative flex items-center justify-center ml-20">
            <GrBasket className="text-base text-2xl ml-7 cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center ">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>

        <div className="flex items-center">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : userImage}
            alt="userImage"
            className="w-8 h-8 text-3xl cursor-pointer rounded-full"
            onClick={login}
          />

            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.4 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-16 right-6 px-4 py-2"
              >
                <Link to={"/createItem"}>
                  <motion.p whileTap={{ scale: 1.6 }} className="px-2 py-2 flex items-center gap-3 cursor-pointer hover:text-cyan-500 transition-all duration-100 ease-in-out text-textColor text-base">
                    NewItem <GrAddCircle />
                  </motion.p>

                    <ul className="flex flex-col">
                      <motion.li
                        whileTap={{ scale: 1.6 }}
                        className="px-2 py-2 text-base text-textColor hover:text-cyan-500 duration-100 transition-all easy-in-out cursor-pointer"
                      >
                        Home
                      </motion.li>
                      <motion.li
                        whileTap={{ scale: 1.6 }}
                        className="px-2 py-2 text-base text-textColor hover:text-cyan-500 duration-100 transition-all easy-in-out cursor-pointer"
                      >
                        Menu
                      </motion.li>
                      <motion.li
                        whileTap={{ scale: 1.6 }}
                        className="px-2 py-2 text-base text-textColor hover:text-cyan-500 duration-100 transition-all easy-in-out cursor-pointer"
                      >
                        About us
                      </motion.li>
                      <motion.li
                        whileTap={{ scale: 1.6 }}
                        className="px-2 py-2 text-base text-textColor hover:text-cyan-500 duration-100 transition-all easy-in-out cursor-pointer"
                      >
                        Service
                      </motion.li>
                    </ul>

                </Link>
                <motion.p
                  onClick={logout}
                  whileTap={{ scale: 1.6 }}
                  className="py-2 flex justify-center items-center rounded-md hover:bg-slate-200 bg-gray-200 gap-3 hover:text-cyan-500 cursor-pointer transition-all duration-100 ease-in-out text-textColor text-base">
                  Logout <GrLogout />
                </motion.p>
              </motion.div>
            )}
        </div>
      </div>
    </header>
  );
};

export default Header;
