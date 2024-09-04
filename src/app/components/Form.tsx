'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';

type FormProps = {
  source?: string;
};

const Form: React.FC<FormProps> = (props) => {
  const id = useId();
  const form = useRef<HTMLFormElement>(null);
  const modal = useRef<HTMLDialogElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | undefined>();

  useEffect(() => {
    if (isSuccess) {
      const forms = document.querySelectorAll('[data-form]');
      forms.forEach((form) => {
        form.innerHTML = `
          <div class="flex w-full flex-col items-center gap-2 text-center">
            <p class="text-2xl font-semibold text-neutral-700">
              🎉 Yay, you&apos;re on the waitlist!
            </p>
            <p class="text-neutral-500">
              We can&apos;t wait to welcome you to Trackexpense
            </p>
          </div>
        `;
      });
    }
  }, [isSuccess]);

  function onClick() {
    if (modal.current && 'showModal' in modal.current) {
      modal.current.showModal();
    }
  }

  function onSubmit() {
    if (!form.current) {
      return;
    }

    const formData = new FormData(form.current);
    const jsonData: { [key: string]: string } = {};

    // @ts-expect-error - entries() is not yet in the TS types
    for (const [key, value] of formData.entries()) {
      jsonData[key] = value.toString();
    }

    setIsSubmitting(true);

    fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jsonData),
    })
      .then((response) => {
        setIsSuccess(response.ok);
      })
      .catch(() => {
        setIsSuccess(false);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <form
      ref={form}
      data-form="true"
      className="relative mx-auto !mt-12 w-full md:max-w-[500px]"
    >
      {props.source && <input type="hidden" name="source" value={props.source} />}

      <label htmlFor={id} className="hidden">
        Email Address
      </label>

      <div className="form relative flex flex-col gap-4 md:flex-row md:items-center">
        <input
          required
          id={id}
          type="email"
          name="email"
          className="min-h-[58px] grow rounded-full pl-6 text-neutral-700 outline-none md:min-h-[68px]"
          placeholder="Your email address"
        />
        <button
          type="button"
          onClick={onClick}
          className="btn right-1 min-h-[60px] rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 px-5 text-base text-white md:absolute"
        >
          {isSubmitting && <span className="loading loading-spinner"></span>}
          Join the Waitlist
        </button>
      </div>

      {isSuccess === false && (
        <p className="absolute -bottom-8 w-full text-center text-sm text-red-500 md:-bottom-10">
          Something went wrong. Please try again later.
        </p>
      )}

      <ConfirmationModal
        ref={modal}
        ConfirmButtonProps={{
          onClick: onSubmit,
          disabled: isSubmitting,
          isLoading: isSubmitting,
        }}
      />
    </form>
  );
};

type ConfirmationModalProps = {
  ConfirmButtonProps: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading?: boolean;
  };
};

const ConfirmationModal = React.forwardRef<HTMLDialogElement, ConfirmationModalProps>(
  (props, ref) => {
    const { isLoading, ...ConfirmButtonProps } = props.ConfirmButtonProps;

    const className = {
      primary:
        'bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-lg font-bold text-transparent mt-8',
      secondary: 'text-base font-semibold mt-4',
      body: 'text-sm leading-relaxed mt-1',
      list: 'list-disc list-outside pl-5 text-sm',
    };

    const onDecline = () => {
      // @ts-ignore
      if (ref.current && typeof ref.current.close === 'function') {
        // @ts-ignore
        ref.current.close();
      }
    };

    return createPortal(
      <dialog ref={ref} className="modal modal-bottom sm:modal-middle">
        <div className="overflow modal-box overflow-y-hidden">
          <div className="h-[80vh] max-h-[500px] overflow-y-auto">
            <h4 className={twMerge(className.primary, 'mt-0')}>Terms and Conditions</h4>

            <h5 className={className.secondary}>1. Acceptance of Terms</h5>
            <p className={className.body}>
              By submitting your email address through this form, you acknowledge that you
              have read, understood, and agree to be bound by these Terms and Conditions,
              as well as our Privacy Policy.
            </p>

            <h5 className={className.secondary}>2. Purpose of Data Collection</h5>
            <p className={className.body}>
              Your email address is collected solely for the purpose of adding you to the
              Trackexpense waitlist and providing you with updates and notifications
              related to the app&apos;s development and release.
            </p>

            <h5 className={className.secondary}>3. Communication</h5>
            <p className={className.body}>
              You consent to receive periodic emails from Trackexpense regarding the
              app&apos;s progress, new features, launch announcements, and other relevant
              information.
            </p>

            <h5 className={className.secondary}>4. Data Usage and Protection</h5>
            <p className={className.body}>
              Your email address will be used exclusively for communication related to
              Trackexpense. We will not share, sell, or rent your information to any third
              parties without your explicit consent. We implement reasonable security
              measures to protect your personal data from unauthorized access, disclosure,
              alteration, or destruction.
            </p>

            <h5 className={className.secondary}>5. Unsubscribing</h5>
            <p className={className.body}>
              You can opt out of receiving further communication from Trackexpense at any
              time by clicking the &quot;Unsubscribe&quot; link included in every email.
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
              <li>Send you updates and notifications related to the Trackexpense app</li>
              <li>Respond to your inquiries or requests</li>
            </ul>

            <h5 className={className.secondary}>3. Data Security</h5>
            <p className={className.body}>
              We take reasonable precautions to safeguard your personal information and
              prevent unauthorized access, use, or disclosure.
            </p>

            <h5 className={className.secondary}>4. Third-Party Sharing</h5>
            <p className={className.body}>
              We do not share your personal information with any third-party services or
              partners.
            </p>

            <h5 className={className.secondary}>5. Data Retention</h5>
            <p className={className.body}>
              We will retain your email address for as long as you remain on the
              Trackexpense waitlist or until you request its deletion.
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
              We may update this Privacy Policy from time to time. Any changes will be
              posted on this page, and the date of the last revision will be indicated at
              the top of the policy.
            </p>

            <br />

            <p className={className.body}>
              Effective Date: <time dateTime="2024-09-04">September 04, 2024</time>
            </p>
          </div>
          <div className="modal-action flex flex-col-reverse gap-2 md:flex-row">
            <button
              onClick={onDecline}
              type="button"
              className="btn rounded-full text-neutral-700"
            >
              Decline
            </button>
            <button
              type="button"
              className="btn !m-0 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 text-white"
              {...ConfirmButtonProps}
            >
              {isLoading && <span className="loading loading-spinner"></span>}
              Accept and Submit
            </button>
          </div>
        </div>
      </dialog>,
      document.body,
    );
  },
);

ConfirmationModal.displayName = 'ConfirmationModal';

export default Form;
