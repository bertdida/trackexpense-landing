'use client';
import React from 'react';
import GooglePlayIcon from '@/app/components/icons/GooglePlayIcon';
import Link from 'next/link';

type PlayDownloadButtonProps = {
  height?: number;
  className?: string;
};

const PlayDownloadButton: React.FC<PlayDownloadButtonProps> = ({
  height = 60,
  className,
}) => {
  return (
    <Link
      href="https://play.google.com/store/apps/details?id=app.trackexpense.mobile"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download on Google Play"
      className={className}
    >
      <GooglePlayIcon width="auto" height={height} />
    </Link>
  );
};

export default PlayDownloadButton;
