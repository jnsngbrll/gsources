import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="max-w-7xl m-auto px-4 py-8">
      <div className="flex items-center justify-center text-sm gap-1">
        <Link className="text-[--accent]">&copy;gabrillojansen</Link>
        <span className="text-[#7B7D7D]">All Rights Reserved.</span>
      </div>
    </div>
  );
};
