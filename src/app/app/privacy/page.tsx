import { twMerge } from 'tailwind-merge';

import { className } from '@/app/components/LegalText';

export const metadata = {
  title: 'Privacy Policy | TrackExpense App',
  description:
    'Read the TrackExpense App Privacy Policy to learn how we collect, use, and protect your information. Your privacy is important to us.',
};

const Privacy: React.FC = () => {
  const effectiveDate = 'May 18, 2025';

  return (
    <main className={twMerge('container mx-auto max-w-screen-md px-8 py-8')}>
      <h1 className={twMerge(className.primary, 'mb-3 mt-0')}>
        Privacy Policy for TrackExpense App
      </h1>

      <p className={className.body}>
        Effective Date: <time dateTime={effectiveDate}>{effectiveDate}</time>
      </p>
      <p className={className.body}>
        Welcome to TrackExpense. This Privacy Policy explains how the TrackExpense team
        (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, stores, and
        protects your information when you use our mobile application, TrackExpense
        (&quot;App&quot;). Your privacy is important to us.
      </p>

      <h5 className={className.secondary}>1. Information We Collect</h5>
      <p className={className.body}>
        We collect the following information when you use the App:
      </p>
      <ul className={className.list}>
        <li>
          <strong>Email address</strong> — collected through the login form for secure
          access and account management.
        </li>
        <li>
          <strong>Expense entries</strong> — data you input manually or extract
          automatically using receipt scanning (OCR) to track your monthly expenses. This
          data is stored to provide the App&apos;s functionality and allow you to view
          your expense history.
        </li>
        <li>
          <strong>Receipt images</strong> — when you capture or upload receipts within the
          App. Receipt images are processed temporarily using optical character
          recognition (OCR) to extract expense data and are not stored on our servers or
          retained after processing.
        </li>
        <li>
          <strong>Country code</strong> — collected in profile settings, used to configure
          timezone and currency display to enhance your experience.
        </li>
        <li>
          <strong>Device identifiers and push tokens</strong> — used to support app
          features like notifications. Push tokens are only collected with your permission
          and are shared with Firebase Cloud Messaging (FCM) to deliver reminders. These
          are not used for tracking or advertising.
        </li>
        <li>
          <strong>Forwarded receipt emails</strong> — when you forward receipt emails to
          your unique <code>@trackexpense.app</code> email address, we process only the
          email body to extract relevant expense details. Attachments are not processed or
          stored. Only the information necessary for expense extraction is used, and the
          email content is not retained after processing.
        </li>
      </ul>

      <h5 className={className.secondary}>2. Permissions</h5>
      <p className={className.body}>
        We may request the following permissions, when necessary, to enable certain
        features. These permissions can be managed through your device settings.
      </p>
      <ul className={className.list}>
        <li>
          <strong>Camera Access (optional)</strong> — to allow you to capture receipt
          images and extract expense data automatically.
        </li>
        <li>
          <strong>Photo Library Access (optional)</strong> — to allow you to upload
          existing receipt images from your device and extract expense data.
        </li>
        <li>
          <strong>Notification Access (optional)</strong> — to send reminders for upcoming
          or scheduled expenses.
        </li>
      </ul>

      <h5 className={className.secondary}>3. How We Use Your Information</h5>
      <p className={className.body}>We use your information to:</p>
      <ul className={className.list}>
        <li>Provide and manage your account, including authentication and security.</li>
        <li>
          Enable key App features, such as expense tracking and reminder notifications.
        </li>
        <li>
          Process receipt images using optical character recognition (OCR) to extract
          expense data.
        </li>
        <li>
          Analyze expense names to suggest or predict appropriate spending categories.
        </li>
        <li>
          Configure timezone and currency display based on your preferred country code,
          including using timezone settings to schedule reminder notifications.
        </li>
        <li>Improve user experience, app performance, and functionality.</li>
        <li>
          Communicate with you regarding your account, inquiries, or important updates.
        </li>
        <li>
          Extract expense data from the body of emails you forward to your unique{' '}
          <code>@trackexpense.app</code> email address. Attachments are ignored and not
          processed.
        </li>
        <li>
          Automatically populate your expense history with the extracted information.
        </li>
      </ul>

      <h5 className={className.secondary}>4. Data Sharing</h5>
      <p className={className.body}>
        We do not sell, trade, or share your personal information with third parties,
        except as required by law or with your explicit consent.
      </p>
      <p className={className.body}>
        We do not share the content of forwarded emails with third parties. Email data is
        processed securely within our system solely for the purpose of extracting expense
        information from the email body. Attachments are ignored and not stored or
        processed.
      </p>
      <p className={className.body}>
        We share push notification tokens with Firebase Cloud Messaging (FCM) to deliver
        reminders, but do not share any other personal data with third parties.
      </p>

      <h5 className={className.secondary}>5. Data Storage and Security</h5>
      <p className={className.body}>
        We take reasonable administrative, technical, and physical measures to protect
        your personal information, including encrypting data transmissions and restricting
        access to authorized personnel only.
      </p>
      <p className={className.body}>
        While we strive to protect your information, no method of transmission over the
        Internet or method of electronic storage is entirely secure.
      </p>

      <h5 className={className.secondary}>6. Data Retention</h5>
      <p className={className.body}>
        We retain your personal data (email address and expense entries) for as long as
        your account remains active. Data is permanently deleted when you initiate account
        deletion via the App (see Section 8) or submit a valid deletion request by
        emailing <a href="mailto:hello@trackexpense.app">hello@trackexpense.app</a>. Some
        data may temporarily persist in secure backups before final deletion.
      </p>

      <h5 className={className.secondary}>7. Your Rights</h5>
      <p className={className.body}>You have the right to:</p>
      <ul className={className.list}>
        <li>Access the personal data we hold about you.</li>
        <li>Request corrections to any inaccurate data.</li>
        <li>Request deletion of your personal data.</li>
      </ul>
      <p className={className.body}>
        To exercise any of these rights, please contact us at{' '}
        <a href="mailto:hello@trackexpense.app">hello@trackexpense.app</a>
      </p>

      <h5 className={className.secondary}>8. Account Deletion</h5>
      <p className={className.body}>
        You may delete your TrackExpense account at any time via the App&apos;s settings
        menu. This will initiate the permanent removal of your personal data (email
        address and expense entries) from our active systems.
      </p>
      <p className={className.body}>
        Receipt images are not stored on our servers and therefore do not require
        deletion.
      </p>

      <h5 className={className.secondary}>9. Children&apos;s Privacy</h5>
      <p className={className.body}>
        TrackExpense is not intended for individuals under the age of 18. We do not
        knowingly collect data from children. If we become aware that we have
        inadvertently collected such information, we will take steps to delete it
        promptly.
      </p>

      <h5 className={className.secondary}>10. Changes to This Privacy Policy</h5>
      <p className={className.body}>
        We may update this Privacy Policy periodically. Significant changes will be
        communicated via email or in-app notifications. Please review this policy
        periodically. The &quot;Effective Date&quot; above reflects the date of the latest
        revision.
      </p>

      <h5 className={className.secondary}>11. Contact Us</h5>
      <p className={className.body}>
        If you have any questions or concerns about this Privacy Policy, please contact us
        at:
      </p>
      <p className={className.body}>
        <a href="mailto:hello@trackexpense.app">hello@trackexpense.app</a>
      </p>
    </main>
  );
};

export default Privacy;
