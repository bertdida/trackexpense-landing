'use client';

import React, { useEffect, useId, useImperativeHandle, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Transition } from 'react-transition-group';
import LegalText from '@/app/components/LegalText';

type FormProps = {
  source?: string;
};

const Form: React.FC<FormProps> = (props) => {
  const id = useId();
  const modal = useRef<ConfirmationModalRef>(null);

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

  function onShowModal() {
    modal.current?.show();
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
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
      onSubmit={onSubmit}
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
          type="submit"
          className="btn right-1 min-h-[60px] rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 px-5 text-base text-white md:absolute"
        >
          {isSubmitting && <span className="loading loading-spinner"></span>}
          Join the Waitlist
        </button>
      </div>

      {isSuccess === false && (
        <p className="absolute -bottom-12 w-full text-center text-sm text-red-500 md:-bottom-10">
          Something went wrong. Please try again later.
        </p>
      )}

      <p className="mx-auto mt-8 max-w-[50ch] text-center text-xs text-neutral-500">
        By submitting your email address through this form, you agree to
        Trackexpense&apos;s&nbsp;
        <button type="button" className="text-orange-500 underline" onClick={onShowModal}>
          Terms & Privacy Policy
        </button>
        .
      </p>

      <ConfirmationModal ref={modal} />
    </form>
  );
};

type ConfirmationModalRef = {
  show: () => void;
  hide: () => void;
};

const ConfirmationModal = React.forwardRef<ConfirmationModalRef>((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!isOpen) {
      dialog.current?.close();
      return;
    }

    dialog.current?.showModal();

    const content = dialog.current?.querySelector('.modal-content');
    if (content) {
      content.scrollTo({ top: 0 });
    }
  }, [isOpen]);

  function onClose() {
    setIsOpen(false);
  }

  useImperativeHandle(ref, () => ({
    hide: onClose,
    show: () => {
      setIsOpen(true);
    },
  }));

  return createPortal(
    <Transition unmountOnExit timeout={300} nodeRef={dialog} in={isOpen}>
      <dialog ref={dialog} className="modal modal-bottom sm:modal-middle">
        <div className="overflow modal-box">
          <div className="modal-content h-[80vh] max-h-[500px] overflow-y-auto">
            <LegalText ContainerProps={{ as: 'div', className: 'p-0' }} />
          </div>
          <div className="modal-action">
            <button onClick={onClose} className="btn w-full max-w-[120px] rounded-full">
              Okay
            </button>
          </div>
        </div>
      </dialog>
    </Transition>,
    document.body,
  );
});

ConfirmationModal.displayName = 'ConfirmationModal';

export default Form;
