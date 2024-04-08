import React, { FC } from 'react';
import { IIconProps } from './types';
import { Icon } from './Icon';

export const LifeRingIcon: FC<IIconProps> = (props) => (
  <Icon baseWidth={36} baseHeight={36} {...props}>
    {(width, height, color) => (
      <svg width={width} height={height} fill={color} viewBox="0 0 1792 1792">
        <path
          fill="currentColor"
          d="M896 0q182 0 348 71t286 191t191 286t71 348t-71 348t-191 286t-286 191t-348 71t-348-71t-286-191t-191-286T0 896t71-348t191-286T548 71T896 0zm0 128q-190 0-361 90l194 194q82-28 167-28t167 28l194-194q-171-90-361-90zM218 1257l194-194q-28-82-28-167t28-167L218 535q-90 171-90 361t90 361zm678 407q190 0 361-90l-194-194q-82 28-167 28t-167-28l-194 194q171 90 361 90zm0-384q159 0 271.5-112.5T1280 896t-112.5-271.5T896 512T624.5 624.5T512 896t112.5 271.5T896 1280zm484-217l194 194q90-171 90-361t-90-361l-194 194q28 82 28 167t-28 167z"
        />
      </svg>
    )}
  </Icon>
);
