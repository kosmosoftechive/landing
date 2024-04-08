import React, { FC } from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const GooglePlusIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={24} baseHeight={24} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} fill={color} viewBox="0 0 16 16">
        <path
          fill="currentColor"
          d="M16 3.9h-2.8V1.3h-.6v2.6H9.9v.8h2.7v2.6h.6V4.7H16zM6.9 9c-.4-.2-1.1-.9-1.1-1.3s.1-.7.8-1.2c.7-.5 1.2-1.2 1.2-2.1c0-1.1-.5-2.1-1.3-2.4h1.3l.9-.7H4.5C2.6 1.3.9 2.7.9 4.4s1.3 3 3.2 3h.4c-.2.2-.2.4-.2.7c0 .5.3.8.6 1.2h-.7c-2.3 0-4.1 1.5-4.1 3s2 2.5 4.3 2.5c2.6 0 4.1-1.5 4.1-3c-.1-1.3-.5-2-1.6-2.8zM4.7 6.9c-1.1 0-2.1-1.2-2.3-2.6S2.9 1.8 4 1.8S6.1 3 6.3 4.4S5.8 7 4.7 6.9zm-.4 7.2c-1.6 0-2.8-1-2.8-2.2s1.4-2.2 3-2.2c.4 0 .7.1 1 .2c.9.6 1.5.9 1.7 1.6c0 .1.1.3.1.4c0 1.2-.8 2.2-3 2.2z"
        />
      </svg>
    )}
  </Icon>
);
