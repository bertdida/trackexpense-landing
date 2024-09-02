'use client';

import { useEffect, useId, useState } from 'react';

type FormProps = {
  source?: string;
};

const Form: React.FC<FormProps> = (props) => {
  const id = useId();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | undefined>();

  useEffect(() => {
    if (isSuccess) {
      const forms = document.querySelectorAll('[data-form]');
      forms.forEach((form) => {
        form.innerHTML = `
          <div class="flex w-full flex-col items-center gap-2">
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

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const jsonData: { [key: string]: string } = {};

    // @ts-expect-error - entries() is not yet in the TS types
    for (const [key, value] of formData.entries()) {
      jsonData[key] = value.toString();
    }

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
      className="relative mx-auto !mt-12 w-full md:max-w-[500px]"
      data-form="true"
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
          disabled={isSubmitting}
          type="submit"
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
    </form>
  );
};

export default Form;
