import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SidebarData } from '../data/SidebarData';
import { Items } from '../data/Items';
import { Item } from './Item';
import { Context } from '../context/Context';

export default function Main() {
  const location = useLocation();

  const { isMenuActive } = useContext(Context);

  return (
    <div className="max-w-7xl m-auto mt-8">
      <div className="flex justify-center gap-8 relative">
        <div className="absolute left-[-13rem] p-8 bg-[--secondary] rounded-xl shadow">
          <div className="flex flex-col gap-8">
            {SidebarData.map((sbData, index) => (
              <div key={index}>
                <h1 className="mb-4 text-[#7B7D7D]">{sbData.title}</h1>
                <div className="flex flex-col">
                  {sbData.contents.map((content, childIndex) => (
                    <Link
                      to={content.pathname}
                      key={childIndex}
                      className={`py-2 px-4 text-[--accent] rounded-xl ${
                        location.pathname === content.pathname
                          ? 'bg-[--primary]'
                          : 'hover:bg-[--primary]'
                      }`}
                    >
                      {content.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Items.map((item, itemIndex) =>
            location.pathname === item.category || location.pathname === '/' ? (
              <Item itemIndex={itemIndex} itemData={item} />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}
