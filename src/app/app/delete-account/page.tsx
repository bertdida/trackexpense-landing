import { twMerge } from 'tailwind-merge';

import { className } from '@/app/components/LegalText';

export const metadata = {
  title: 'Delete Account | TrackExpense App',
  description:
    'Learn how to delete your TrackExpense account and permanently remove your personal data, including your email address and expense entries.',
};

const Privacy: React.FC = () => {
  const effectiveDate = 'May 02, 2025';

  return (
    <main className={twMerge('container mx-auto max-w-screen-md px-8 py-8')}>
      <h1 className={twMerge(className.primary, 'mb-3 mt-0')}>
        Delete Your TrackExpense Account and Data
      </h1>

      <p className={className.body}>
        You can delete your TrackExpense account and associated data at any time by
        following these steps:
      </p>

      <ol className={className.list}>
        <li>Open the TrackExpense App.</li>
        <li>
          Go to Profile {'>'} Account Settings {'>'} Close Account.
        </li>
        <li>Confirm the deletion.</li>
      </ol>

      <p className={className.body}>This will permanently delete:</p>
      <ul className={className.list}>
        <li>Your email address.</li>
        <li>Your expense entries.</li>
      </ul>

      <p className={className.body}>
        <strong>Please note:</strong> Receipt images are not stored on our servers and do
        not require deletion. Some residual data may temporarily persist in secure backups
        for legitimate purposes such as legal compliance or security before being
        permanently erased.
      </p>

      <p className={className.body}>
        If you are unable to delete your account through the app, you can also email us at{' '}
        <a href="mailto:hello@trackexpense.app">hello@trackexpense.app</a> to request
        deletion.
      </p>
    </main>
  );
};

export default Privacy;
