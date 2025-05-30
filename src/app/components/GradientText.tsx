'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

type GradientTextProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  as?: React.ElementType;
};

const GradientText: React.FC<GradientTextProps> = (props) => {
  const Tag = props.as || 'span';

  return (
    <Tag
      {...props}
      // @ts-ignore
      className={twMerge(
        'bg-gradient-to-r from-indigo-500 to-sky-500 bg-clip-text font-bold text-transparent',
        props.className,
      )}
    />
  );
};

export default GradientText;
