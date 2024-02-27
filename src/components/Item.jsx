import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineBookmark } from 'react-icons/hi2';
import { Context } from '../context/Context';
import Aos from 'aos';

export const Item = ({ itemIndex, itemData }) => {
  const { addToFavorites } = useContext(Context);

  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <Link
      data-aos="fade-up"
      onClick={() => addToFavorites(itemIndex)}
      className="w-[290px] flex flex-col gap-2 p-8 bg-[--secondary] rounded-xl"
    >
      <div className="flex justify-between">
        <img
          src={itemData.image}
          alt=""
          className="w-[40px] h-[40px] rounded-xl"
        />
        <div className="text-2xl text-[#FDB813]">
          <HiOutlineBookmark />
        </div>
      </div>
      <h1 className="text-[--accent]">{itemData.title}</h1>
      <p className="text-sm text-[#7B7D7D] line-clamp-2">
        {itemData.description}
      </p>
    </Link>
  );
};
