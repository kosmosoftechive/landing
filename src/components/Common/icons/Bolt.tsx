import React, { FC } from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const BoltIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={24} baseHeight={24} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} fill={color} viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="m10.55 18.2l5.175-6.2h-4l.725-5.675L7.825 13H11.3l-.75 5.2Zm-1.396 2.685l1-6.885h-4.25l7.48-10.788h.462L12.866 11h5l-8.25 9.885h-.462Zm2.621-8.635Z"
        />
      </svg>
    )}
  </Icon>
);
