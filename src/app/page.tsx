import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import Form from '@/app/components/Form';
import BellIcon from '@/app/components/icons/BellIcon';
import ChartIcon from '@/app/components/icons/ChartIcon';
import WandIcon from '@/app/components/icons/WandIcon';
import CircleCheckIcon from '@/app/components/icons/CircleCheckIcon';
import CategoryIcon from '@/app/components/icons/CategoryIcon';
import HistoryIcon from '@/app/components/icons/HistoryIcon';
import StarIcon from '@/app/components/icons/StarIcon';
import React from 'react';
import PencilPlusIcon from '@/app/components/icons/PencilPlusIcon';
import SparklesIcon from '@/app/components/icons/SparklesIcon';
import KeyIcon from '@/app/components/icons/KeyIcon';
import MailForwardIcon from '@/app/components/icons/MailForwardIcon';
import CurrencyDollarIcon from '@/app/components/icons/CurrencyDollarIcon';
import MoonStarsIcon from '@/app/components/icons/MoonStarsIcon';
import ScreenshotPreviews from '@/app/components/ScreenshotPreviews';
import GradientText from '@/app/components/GradientText';
import ComingSoon from '@/app/components/ComingSoon';
import BudgetingBenefitsSection from '@/app/components/BudgetingBenefitsSection';
import PlayDownloadButton from '@/app/components/PlayDownloadButton';

const steps: StepProps[] = [
  {
    NumberProps: {
      children: '1',
      className: 'from-indigo-300 to-indigo-100 text-indigo-700',
    },
    title: 'Just like your favorite to-do app',
    description:
      "Effortlessly enter every expense, whether it's a big bill, a small treat, a one-time purchase, or a recurring payment.",
  },
  {
    NumberProps: {
      children: '2',
      className: 'from-blue-300 to-blue-100 text-blue-700',
    },
    title: 'Check off those bills',
    description: (
      <p>
        Easily mark your expenses as <span className="font-semibold">💸 Settled</span> the
        moment they&apos;re paid — fast, simple, done.
      </p>
    ),
  },
  {
    NumberProps: {
      children: '3',
      className: 'from-sky-300 to-sky-100 text-sky-700',
    },
    title: 'See where your money goes',
    description:
      "Get a clear visual breakdown of your spending, so you always know where your money's going.",
  },
];

const featureIconProps = {
  width: 35,
  height: 35,
  className: 'text-blue-500',
};

const features: FeatureProps[] = [
  {
    icon: <CurrencyDollarIcon {...featureIconProps} />,
    title: 'Global Currency Support',
    description: 'Track expenses in your local currency, wherever you are.',
  },
  {
    icon: <PencilPlusIcon {...featureIconProps} />,
    title: 'Easy Expense Logging',
    description: 'Add expenses manually, upload receipts, or snap a photo—your call.',
  },
  {
    icon: <MailForwardIcon {...featureIconProps} />,
    title: 'Email Receipt Sync',
    description: (
      <p>
        Auto-log expenses by forwarding email receipts to your personal{' '}
        <code>@trackexpense.app</code> address.
      </p>
    ),
  },
  {
    icon: <SparklesIcon {...featureIconProps} />,
    title: 'Smart Category Suggestions',
    description: 'Let AI instantly suggest the right category for your expenses.',
  },
  {
    icon: <BellIcon {...featureIconProps} />,
    title: 'Bill Reminders',
    description:
      "Set up reminders and get notifications so you're always on time with payments.",
  },
  {
    icon: <CircleCheckIcon {...featureIconProps} />,
    title: 'Bill Status Overview',
    description:
      'See at a glance which bills are paid, pending, or overdue, so you can stay on top of your finances.',
  },
  {
    icon: <CategoryIcon {...featureIconProps} />,
    title: 'Expense Categories',
    description:
      'Organize your expenses with thoughtfully designed, ready-to-use categories.',
  },
  {
    icon: <ChartIcon {...featureIconProps} />,
    title: 'Expense Breakdown',
    description: 'See where your money goes with a clear breakdown of your expenses.',
  },
  {
    icon: <HistoryIcon {...featureIconProps} />,
    title: 'Spending History Review',
    description:
      'Look back at previous months to find missed expenses and monitor your financial progress.',
  },
  {
    icon: <KeyIcon {...featureIconProps} />,
    title: 'Password-Free Login',
    description: 'Secure access via email code. No passwords to remember, ever.',
  },
  {
    icon: <MoonStarsIcon {...featureIconProps} />,
    title: 'Dark Mode & Themes',
    description: 'Switch to dark mode or choose from a selection of color themes.',
  },
  {
    isComingSoon: true,
    icon: <WandIcon {...featureIconProps} />,
    title: 'AI-Powered Insights',
    description:
      'Receive personalized, AI-generated insights and recommendations to optimize your budget.',
  },
];

export default function Home() {
  return (
    <main>
      <div className="container mx-auto max-w-screen-md px-8">
        <div className="flex min-h-[100vh] flex-col items-center justify-center space-y-8 text-center">
          <Image
            unoptimized
            src="/woman-managing-her-personal-finances.png"
            alt="woman managing her personal finances"
            width={368}
            height={207}
            className="max-w-full sm:max-w-[unset]"
          />

          <h1 className="text-4xl font-bold leading-tight text-neutral-700 md:text-nowrap md:text-5xl">
            Track your monthly expenses <br className="hidden md:block" />
            like a to-do list
          </h1>
          <h2 className="text-2xl leading-tight text-neutral-500 md:text-3xl">
            Don&apos;t let another month go by without a clear picture of your spending
          </h2>

          <div className="flex flex-col items-center justify-center gap-4">
            <PlayDownloadButton />
            <p className="text-sm text-neutral-500">
              Psst! iOS app launching super soon! 🤫
            </p>
          </div>
        </div>
      </div>

      <BudgetingBenefitsSection />

      <div className="py-20">
        <div className="container mx-auto max-w-screen-lg px-8">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="relative my-12 flex w-full justify-center">
              <Image
                src="/app/home-screenshot.png"
                alt="TrackExpense app home screenshot"
                width={978}
                height={2100}
                className="absolute z-[1] max-w-[290px] -translate-x-[130px] -translate-y-[55px]"
              />
              <Image
                src="/app/record-expense-screenshot.png"
                alt="TrackExpense app record expense screenshot"
                width={978}
                height={2100}
                className="z-[2] max-w-[290px] translate-x-[35px] translate-y-[75px] scale-[0.8]"
              />
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl text-neutral-700 md:text-3xl">
                <GradientText>How it works</GradientText>
                <br />
                <span className="text-base">Get started in 3 simple steps</span>
              </h3>

              <ul className="space-y-8">
                {steps.map((step, index) => (
                  <Step key={index} {...step} />
                ))}
              </ul>

              <p className="text-sm text-neutral-500">
                At the start of each month, all expenses are automatically marked as
                &nbsp;<span className="font-semibold">🕒 Pending</span>, keeping you
                organized from day one.
              </p>

              <Form source="getting-started" />
            </div>
          </div>
        </div>
      </div>

      <section aria-labelledby="features-heading" className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[100vh] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-blue-200 opacity-10 blur-3xl"></div>

        <div className="container relative z-10 mx-auto max-w-screen-lg px-8 py-20">
          <div className="mb-8 space-y-4">
            <h3 id="features-heading" className="text-2xl text-neutral-700 md:text-3xl">
              <GradientText>Financial clarity</GradientText>
              &nbsp;at your fingertips
            </h3>

            <p className="mb-8 text-neutral-500">
              See how our core features can help you achieve financial peace of mind.
            </p>
          </div>

          <ul className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <li key={index}>
                <Feature {...feature} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="pricing-heading"
        className="container mx-auto max-w-screen-md gap-8 px-8"
      >
        <div className="grid items-center gap-8 py-20">
          <div className="space-y-4">
            <GradientText id="pricing-heading" as="h3" className="text-2xl md:text-3xl">
              Simple, transparent pricing
            </GradientText>
            <p className="text-base text-neutral-500">
              TrackExpense is <GradientText>100% free</GradientText> while we grow — no
              hidden fees, no trials, no limits. Just everything you need, for free.
            </p>
          </div>

          <Pricing
            ContainerProps={{
              className:
                'bg-gradient-to-tr from-blue-500 to-sky-300 text-white shadow-xl mx-auto',
            }}
            icon={<StarIcon width={50} height={50} />}
            title="Free"
            description="₱0/month"
            features={[
              'All features unlocked',
              'Track unlimited expenses',
              'Set unlimited reminders',
              'Smart email receipt syncing',
              'No restrictions — full access',
            ]}
          />

          <p className="mx-auto mt-4 text-sm italic text-neutral-500">
            We&apos;re building this with you — your feedback shapes what comes next.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="android-announcement-heading"
        className="space-y-20 bg-sky-50 px-8 py-20"
      >
        <div className="container mx-auto flex flex-col items-center justify-center gap-4">
          <h3
            id="android-announcement-heading"
            className="text-center text-2xl font-bold leading-tight md:text-3xl"
          >
            🎉 <GradientText>Now available on Android</GradientText>
          </h3>

          <p className="text-center text-base text-neutral-500">
            Stop guessing, start tracking. Get the TrackExpense app today.
          </p>

          <div className="mt-3 flex flex-col items-center justify-center gap-4">
            <PlayDownloadButton />
          </div>
        </div>
      </section>

      <ScreenshotPreviews />

      <section
        aria-labelledby="ios-cta-heading"
        className="space-y-20 bg-sky-50 px-8 py-20"
      >
        <div className="container mx-auto flex max-w-screen-md items-center">
          <div className="w-full space-y-8">
            <div className="space-y-3">
              <h3
                id="ios-cta-heading"
                className="text-center text-2xl leading-tight md:text-3xl"
              >
                <GradientText>iOS app coming soon</GradientText>
              </h3>

              <p className="text-center text-base text-neutral-500">
                We&apos;re working hard to bring TrackExpense to iPhone users. Sign up and
                we&apos;ll keep you in the loop — no spam, just updates.
              </p>
            </div>

            <Form source="footer" />
          </div>
        </div>
      </section>

      <footer>
        <div className="container mx-auto flex flex-col items-center justify-center space-y-2 px-8 py-8 text-center">
          <div className="grid grid-cols-[25px,1fr] items-center gap-2">
            <Image
              src="/trackexpense-logo.png?v=1"
              alt="trackexpense logo"
              width={25}
              height={25}
            />
            <div className="text-sm text-neutral-700">
              TrackExpense <CurrentYear />
            </div>
          </div>

          <p className="text-sm text-neutral-500">
            Questions? Contact us at&nbsp;
            <a href="mailto:hello@trackexpense.app">hello@trackexpense.app</a>
          </p>
        </div>
      </footer>
    </main>
  );
}

const CurrentYear: React.FC = () => <>{new Date().getFullYear()}</>;

type StepProps = {
  NumberProps: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;
  title: string;
  description: React.ReactNode | string;
};

const Step: React.FC<StepProps> = ({ NumberProps, title, description }) => {
  return (
    <li className="grid grid-cols-[50px,1fr] items-start gap-4">
      <span
        {...NumberProps}
        className={twMerge(
          'flex h-[50px] w-[50px] items-center justify-center rounded-lg bg-gradient-to-tr text-xl font-bold',
          NumberProps.className,
        )}
      />
      <div className="relative -top-[5px] space-y-2">
        <h4 className="text-lg font-bold text-neutral-700">{title}</h4>
        {typeof description === 'string' ? <p>{description}</p> : description}
      </div>
    </li>
  );
};

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode | string;
  isComingSoon?: boolean;
};

const Feature: React.FC<FeatureProps> = ({ icon, title, description, isComingSoon }) => {
  return (
    <div className="card">
      <div className="card-body flex flex-col gap-4 pl-0">
        <div className="mb-4 flex h-[65px] w-[65px] items-center justify-center rounded-full bg-white text-white shadow-xl">
          {icon}
        </div>
        <h4 className="card-title">{title}</h4>
        {typeof description === 'string' ? <p>{description}</p> : description}
        {isComingSoon && <ComingSoon />}
      </div>
    </div>
  );
};

type PricingProps = {
  ContainerProps: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
};

const Pricing: React.FC<PricingProps> = ({
  ContainerProps,
  icon,
  title,
  description,
  features,
}) => {
  return (
    <div {...ContainerProps} className={twMerge('card grow', ContainerProps.className)}>
      <div className="card-body flex-none">
        {icon}
        <h4 className="card-title font-bold">{title}</h4>
        <p className="mb-2 text-2xl font-bold">{description}</p>
        <ul className="flex flex-col gap-2">
          {features.map((feature, index) => (
            <li key={index} className="grid grid-cols-[24px,1fr] gap-3">
              <CircleCheckIcon className="relative" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
