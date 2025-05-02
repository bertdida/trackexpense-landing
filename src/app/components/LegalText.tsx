import { twMerge } from 'tailwind-merge';

type LegalTextProps = {
  ContainerProps?: React.HTMLProps<HTMLDivElement> & {
    as?: React.ElementType;
  };
};

const className = {
  primary:
    'bg-gradient-to-r from-indigo-500 to-sky-500 bg-clip-text text-lg font-bold text-transparent mt-8',
  secondary: 'text-base font-semibold mt-4',
  body: 'text-sm leading-relaxed mt-1',
  list: 'list-disc list-outside pl-5 text-sm',
};

const LegalText: React.FC<LegalTextProps> = ({ ContainerProps }) => {
  const ContainerTag = ContainerProps?.as || 'main';

  return (
    <ContainerTag
      className={twMerge(
        'container mx-auto max-w-screen-md px-8 py-8',
        ContainerProps?.className,
      )}
    >
      <h4 className={twMerge(className.primary, 'mt-0')}>Terms and Conditions</h4>

      <h5 className={className.secondary}>1. Acceptance of Terms</h5>
      <p className={className.body}>
        By submitting your email address, you acknowledge that you have read, understood,
        and agree to be bound by these Terms and Conditions, as well as our Privacy
        Policy.
      </p>

      <h5 className={className.secondary}>2. Purpose of Data Collection</h5>
      <p className={className.body}>
        Your email address is collected solely for the purpose of adding you to the
        TrackExpense waitlist and providing you with updates and notifications related to
        the app&apos;s development and release.
      </p>

      <h5 className={className.secondary}>3. Communication</h5>
      <p className={className.body}>
        You consent to receive periodic emails from TrackExpense regarding the app&apos;s
        progress, new features, launch announcements, and other relevant information.
      </p>

      <h5 className={className.secondary}>4. Data Usage and Protection</h5>
      <p className={className.body}>
        Your email address will be used exclusively for communication related to
        TrackExpense. We will not share, sell, or rent your information to any third
        parties without your explicit consent. We implement reasonable security measures
        to protect your personal data from unauthorized access, disclosure, alteration, or
        destruction.
      </p>

      <h5 className={className.secondary}>5. Unsubscribing</h5>
      <p className={className.body}>
        You can opt out of receiving further communication from TrackExpense at any time
        by clicking the &quot;Unsubscribe&quot; link included in every email.
      </p>

      <h4 className={className.primary}>Privacy Policy</h4>

      <h5 className={className.secondary}>1. Information We Collect</h5>
      <p className={className.body}>
        We collect only the following information through the waitlist form:
      </p>
      <ul className={className.list}>
        <li>Your email address</li>
      </ul>

      <h5 className={className.secondary}>2. How We Use Your Information</h5>
      <p className={className.body}>We use your email address to:</p>
      <ul className={className.list}>
        <li>Send you updates and notifications related to the TrackExpense app</li>
        <li>Respond to your inquiries or requests</li>
      </ul>

      <h5 className={className.secondary}>3. Data Security</h5>
      <p className={className.body}>
        We take reasonable precautions to safeguard your personal information and prevent
        unauthorized access, use, or disclosure.
      </p>

      <h5 className={className.secondary}>4. Third-Party Sharing</h5>
      <p className={className.body}>
        We do not share your personal information with any third-party services or
        partners.
      </p>

      <h5 className={className.secondary}>5. Data Retention</h5>
      <p className={className.body}>
        We will retain your email address for as long as you remain on the TrackExpense
        waitlist or until you request its deletion.
      </p>

      <h5 className={className.secondary}>6. Your Rights</h5>
      <p className={className.body}>You have the right to:</p>
      <ul className={className.list}>
        <li>Request access to your personal data</li>
        <li>Request correction of any inaccuracies in your personal data</li>
        <li>Request deletion of your personal data</li>
      </ul>
      <p className={className.body}>
        To exercise any of these rights, please contact us at&nbsp;
        <a href="mailto:hello@trackexpense.app">hello@trackexpense.app</a>
      </p>

      <h5 className={className.secondary}>7. Changes to this Policy</h5>
      <p className={className.body}>
        We may update this Privacy Policy from time to time. Any changes will be posted on
        this page.
      </p>

      <br />

      <p className={className.body}>
        Effective Date: <time dateTime="2024-09-04">September 04, 2024</time>
      </p>
    </ContainerTag>
  );
};

export default LegalText;
