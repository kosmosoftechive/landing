import React, { useState } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { useRouter } from 'next/router';

import { Drawer } from '@components/Common';
import { CloseIcon, MenuIcon } from '@components/Common/icons';
import styles from './styles.module.css';

const menuList = [
  {
    link: '/',
    label: 'Home',
  },
  {
    link: '/projects',
    label: 'Projects',
  },
  {
    link: '/about',
    label: 'About',
  },
  // {
  //   link: '/pages',
  //   label: 'Pages',
  // },
  {
    link: '/blogs',
    label: 'Blog',
  },
  {
    link: '/contact',
    label: 'Contact',
  },
];

export const Header = () => {
  const router = useRouter();
  const [showLinkDrawer, setShowLinkDrawer] = useState(false);

  const handleClick = () => {
    setShowLinkDrawer((prevState) => !prevState);
  };

  const handleClose = () => setShowLinkDrawer(false);

  return (
    <header
      className={classnames(
        'absolute top-0 w-full py-4',
        'transition-all duration-500 z-[1030]',
        styles.siteHeader
      )}
    >
      <div className="px-4 md:px-10 lg:px-30 mx-auto h-full flex items-center w-full justify-between">
        <div className="z-20 inline-flex justify-center items-center">
          <Link href="/" passHref className="text-primary uppercase w-40">
            <img className="logo" src="/assets/images/logo.svg" alt="Kosmos Softech Hive" />
          </Link>
        </div>
        <div className="hidden md:flex justify-end items-center">
          {menuList.map((menu) => (
            <a
              key={menu.label}
              href={menu.link}
              className="uppercase text-14 transition-all flex items-center py-5 px-5 group flex-col font-bold group text-white"
            >
              {menu.label}
              <span
                className={classnames(
                  'bg-primary h-[2px] w-0 group-hover:w-full mt-0.5 transition-all duration-300',
                  { '!w-full': router.pathname === menu.link }
                )}
              />
            </a>
          ))}
        </div>
        <div className="hidden xl:block">
          <p className="text-gray-200 font-aldrich text-14">Call us for any questions</p>
          <h4 className="text-primary text-22">+6282216866725</h4>
        </div>
        <div className="flex md:hidden justify-end items-center h-16">
          <i
            className={classnames('cursor-pointer hover:text-white z-[60] header-link')}
            onClick={handleClick}
          >
            {showLinkDrawer ? <CloseIcon size={30} /> : <MenuIcon size={30} color="white" />}
          </i>
        </div>
        <Drawer open={showLinkDrawer} isFullWidth handleClose={handleClose} hideCloseButton={true}>
          <div className="section-content">
            <div className="main-menu pt-[120px] sm:pt-[100px] flex flex-col items-start text-primary text-right">
              {menuList.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  className={classnames(
                    'py-2 text-2xl font-bold transition-all duration-300 leading-tight',
                    'hover:text-red'
                  )}
                  onClick={() => setShowLinkDrawer(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </Drawer>
      </div>
    </header>
  );
};
