'use client';

import React, { useMemo } from 'react';
import GooglePlayIcon from '@/app/components/icons/GooglePlayIcon';
import Link from 'next/link';

type PlayDownloadButtonProps = {
  height?: number;
  className?: string;
};

const originalHeight = 60;
const originalWidth = 202.5;

const PlayDownloadButton: React.FC<PlayDownloadButtonProps> = ({
  height = 60,
  className,
}) => {
  const adjustedWidth = useMemo(
    () => (originalWidth * height) / originalHeight,
    [height],
  );

  return (
    <Link
      href="https://play.google.com/store/apps/details?id=app.trackexpense.mobile"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download on Google Play"
      className={className}
    >
      <GooglePlayIcon width={adjustedWidth} height={height} />
    </Link>
  );
};

export default PlayDownloadButton;
