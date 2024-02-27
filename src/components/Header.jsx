import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu, IoSunny, IoClose } from 'react-icons/io5';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Context } from '../context/Context';
import { TbCircleLetterG } from 'react-icons/tb';

export default function Header() {
  const { setIsMenuActive, isMenuActive } = useContext(Context);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex items-center justify-between p-6 bg-[--secondary] rounded-xl">
        <div className="text-xl text-[--accent]">
          <div className="hidden lg:block">
            <TbCircleLetterG />
          </div>
          <div
            onClick={() => setIsMenuActive(!isMenuActive)}
            className="block lg:hidden"
          >
            {isMenuActive ? <IoClose /> : <IoMenu />}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/github">
            <FaGithub className="text-[--accent]" />
          </Link>
          <Link to="/linkedin">
            <FaLinkedin className="text-[--accent]" />
          </Link>
          <div>
            <IoSunny className="text-[#FDB813]" />
          </div>
        </div>
      </div>
    </div>
  );
}
