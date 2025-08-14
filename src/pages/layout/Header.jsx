import { Link, useLocation } from 'react-router-dom';
import React from 'react';

const pages = [
  {
    id: 1,
    title: 'Home',
    link: ['/'],
    icon: null,
  },
  {
    id: 2,
    title: 'Experience',
    link: ['/about'],
    icon: null,
  },
  {
    id: 3,
    title: 'TechTri',
    link: [],
    icon: null,
  },
  {
    id: 4,
    title: 'Projects',
    link: ['/projects'],
    icon: null,
  },
  {
    id: 5,
    title: 'Contact',
    link: ['/contact'],
    icon: null,
  },
];

function Header() {
  const { pathname } = useLocation();

  return (
    <section className="w-full h-[68px] px-[150px]">
      <section className="bg-black mt-3 rounded-[50px] flex items-center text-white justify-between max-w-[1440px] mx-auto border bg-dark-text py-1.5 px-1.5">
        {pages.map((item) => (
          <LinkItem key={item.id} page={item} pathname={pathname} />
        ))}
      </section>
    </section>
  );
}

export default Header;

const LinkItem = ({ page, pathname }) => {
  const isLinkActive = Array.isArray(page.link) && page.link.some((item) => item === pathname);

  if (page.title === 'TechTri') {
    return (
      <div className="flex items-center py-[10px] px-[12px] text-sm">
        {page.icon && React.isValidElement(page.icon) && page.icon}
        <span>{page.title}</span>
      </div>
    );
  }

  return (
    <Link
      to={page?.link[0] || '/'}
      className={`flex rounded-[32px] w-[170px] justify-center items-center py-[10px] px-[12px] text-sm transition-all duration-100 text-nowrap
        ${isLinkActive ? 'bg-primary text-black' : 'text-white hover:text-black hover:bg-primary'}
      `}
    >
      {page?.title}
    </Link>
  );
};
