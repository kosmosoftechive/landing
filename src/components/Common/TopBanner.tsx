import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';

interface TopBannerProps {
  title?: string;
  name?: string;
  className?: string;
}

const TopBanner = ({ title, name, className }: TopBannerProps) => {
  return (
    <div
      className={classnames('pt-42 pb-30 bg-cover bg-no-repeat', className)}
      style={{ backgroundImage: 'url(/assets/images/breadcrumb-bg.jpg)' }}
    >
      <div className="container mx-auto text-center">
        {title && <h1 className="text-42 text-white mb-3 uppercase">{title}</h1>}
        {name && (
          <div className="flex items-center text-white gap-1 justify-center">
            <Link href="/">Home</Link> ~ <span className="text-primary">{name}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBanner;
