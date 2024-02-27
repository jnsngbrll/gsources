import React from 'react';
import { Link } from 'react-router-dom';
import { IoMenu, IoSunny } from 'react-icons/io5';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex items-center justify-between p-6 bg-[--secondary] rounded-xl">
        <div>
          <IoMenu className="text-xl text-[--accent]" />
        </div>
        <div className="flex items-center gap-4">
          <Link to="/github">
            <FaGithub className="text-xl text-[--accent]" />
          </Link>
          <Link to="/linkedin">
            <FaLinkedin className="text-xl text-[--accent]" />
          </Link>
          <div>
            <IoSunny className="text-xl text-[#FDB813]" />
          </div>
        </div>
      </div>
    </div>
  );
}
