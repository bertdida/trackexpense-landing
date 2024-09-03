import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import Form from '@/app/components/Form';
import BellIcon from '@/app/components/BellIcon';
import ChartIcon from '@/app/components/ChartIcon';
import WandIcon from '@/app/components/WandIcon';
import CircleCheckIcon from '@/app/components/CircleCheckIcon';
import CategoryIcon from '@/app/components/CategoryIcon';
import HistoryIcon from '@/app/components/HistoryIcon';
import SeedingIcon from '@/app/components/SeedingIcon';
import StarIcon from '@/app/components/StarIcon';
import HeartIcon from '@/app/components/HeartIcon';

const benefitIconProps = {
  width: 50,
  height: 50,
  className: 'mb-4',
};

const benefits: BenefitProps[] = [
  {
    icon: (
      <BellIcon
        {...benefitIconProps}
        className={twMerge('text-pink-500', benefitIconProps.className)}
      />
    ),
    title: 'Never Miss a Bill Again',
    description:
      'Set up automatic reminders and get real-time notifications, so you can pay your bills on time.',
  },
  {
    icon: (
      <ChartIcon
        {...benefitIconProps}
        className={twMerge('text-orange-500', benefitIconProps.className)}
      />
    ),
    title: 'Understand Your Spending',
    description:
      'Categorize your expenses, visualize your budget, and track your progress.',
  },
  {
    icon: (
      <WandIcon
        {...benefitIconProps}
        className={twMerge('text-yellow-500', benefitIconProps.className)}
      />
    ),
    title: 'Achieve Your Financial Goals',
    description:
      'Receive AI-powered insights and personalized recommendations tailored to your unique situation.',
  },
];

const steps: StepProps[] = [
  {
    NumberProps: {
      children: '1',
      className: 'from-pink-300 to-pink-100 text-pink-700',
    },
    title: 'Just like your favorite to-do app',
    description:
      "Effortlessly enter every expense, whether it's a big bill, a small treat, a one-time purchase, or a recurring payment.",
  },
  {
    NumberProps: {
      children: '2',
      className: 'from-orange-300 to-orange-100 text-orange-700',
    },
    title: 'Check off those bills',
    description:
      'Quickly mark expenses as "Paid" with a single tap on the checkmark as soon as they\'re settled.',
  },
  {
    NumberProps: {
      children: '3',
      className: 'from-yellow-300 to-yellow-100 text-yellow-700',
    },
    title: 'See the big picture',
    description:
      'Gain insights into your spending habits with our easy-to-understand charts.',
  },
];

const featureIconProps = {
  width: 35,
  height: 35,
  className: 'text-orange-500',
};

const features: FeatureProps[] = [
  {
    icon: <BellIcon {...featureIconProps} />,
    title: 'Automatic Bill Reminders',
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
    title: 'Customizable Spending Categories',
    description:
      'Choose from predefined categories or create your own for personalized tracking.',
  },
  {
    icon: <ChartIcon {...featureIconProps} />,
    title: 'Visual Budget Tracking',
    description: "See exactly where your money's going with clear and insightful graphs.",
  },
  {
    icon: <HistoryIcon {...featureIconProps} />,
    title: 'Spending History Review',
    description:
      "Review previous months' expenses, spot any unsettled items, and track progress towards your financial goals.",
  },
  {
    icon: <WandIcon {...featureIconProps} />,
    title: 'AI-Powered Insights',
    description:
      'Receive personalized, AI-generated insights and recommendations to optimize your budget.',
  },
];

const pricings: PricingProps[] = [
  {
    ContainerProps: {
      className: 'scale-90 bg-gray-100',
    },
    icon: <SeedingIcon width={50} height={50} />,
    title: 'Free',
    description: '₱0/forever',
    features: ['10 expenses', 'All the features'],
  },
  {
    ContainerProps: {
      className: 'bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-xl',
    },
    icon: <StarIcon width={50} height={50} />,
    title: 'Premium',
    description: '₱49/mo',
    features: ['Unlimited expenses', 'All the features'],
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

          <h1 className="text-4xl font-bold leading-tight text-neutral-700 md:text-5xl">
            A to-do list app for your <br className="hidden md:block" />
            monthly expenses
          </h1>
          <h2 className="text-2xl leading-tight text-neutral-500 md:text-3xl">
            Don&apos;t let another month go by without a clear picture of your spending
          </h2>

          <Form source="banner" />
        </div>
      </div>

      <div className="bg-[#fffcf4] py-20">
        <div className="container mx-auto max-w-screen-lg space-y-16 px-8">
          <h2 className="text-center text-2xl text-neutral-700 md:text-3xl">
            Budgeting made
            <br className="md:hidden" />
            <span className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text font-bold text-transparent">
              &nbsp;simple & effective
            </span>
          </h2>
          <div className="grid gap-20 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Benefit key={index} {...benefit} />
            ))}
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto max-w-screen-lg px-8">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <Image
              unoptimized
              src="/young-woman-waving-her-hand.png"
              alt="young woman waving her hand"
              width={368}
              height={309}
              className="mx-auto max-w-[200px] md:max-w-full"
            />

            <div className="space-y-8">
              <h3 className="text-2xl text-neutral-700 md:text-3xl">
                <span className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text font-bold text-transparent">
                  Getting started
                </span>
                <br />
                <span>as easy as 1-2-3</span>
              </h3>

              <ul className="space-y-8">
                {steps.map((step, index) => (
                  <Step key={index} {...step} />
                ))}
              </ul>

              <p className="text-sm text-neutral-500">
                At the start of each month, your expenses are automatically marked as
                &quot;Pending&quot;.
              </p>

              <Form source="getting-started" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[100vh] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-yellow-200 opacity-10 blur-3xl"></div>

        <div className="container relative z-10 mx-auto max-w-screen-lg px-8 py-20">
          <div className="mb-8 space-y-4">
            <h3 className="text-2xl text-neutral-700 md:text-3xl">
              <span className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text font-bold text-transparent">
                Financial clarity
              </span>
              &nbsp;at your fingertips
            </h3>

            <p className="mb-8 text-neutral-500">
              See how our core features can help you achieve financial peace of mind.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <Feature key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="container mx-auto max-w-screen-md gap-8 px-8">
          <div className="grid items-center gap-8 py-20">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold leading-tight text-neutral-700">
                Simple pricing
              </h3>
              <p className="text-base text-neutral-500">
                Free for your first ten expenses or subscribe to our premium for
                unlimited.
              </p>
            </div>

            <div className="flex flex-col-reverse gap-8 md:flex-row">
              {pricings.map((pricing, index) => (
                <Pricing key={index} {...pricing} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container mx-auto flex min-h-[500px] max-w-screen-md items-center px-8">
          <div className="w-full space-y-8">
            <div className="space-y-3">
              <h4 className="text-center text-3xl font-bold leading-tight text-neutral-700">
                Ready to
                <span className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text font-bold text-transparent">
                  &nbsp;take control of your finances
                </span>
                ?
              </h4>

              <p className="text-center text-base text-neutral-500">
                Get early access to Trackexpense and experience the clarity, confidence,
                and control you deserve.
              </p>
            </div>

            <Form source="footer" />
          </div>
        </div>
      </div>

      <footer>
        <div className="container mx-auto flex flex-col items-center justify-center px-8 py-8">
          <p className="text-neutral-700">Trackexpense 2024. All rights reserved.</p>
          <span className="flex gap-1 text-sm text-neutral-500">
            Made with <HeartIcon className="text-red-500" /> by
            <a href="https://bertdida.dev/" target="_blank">
              bertdida
            </a>
          </span>
        </div>
      </footer>
    </main>
  );
}

type BenefitProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Benefit: React.FC<BenefitProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col gap-4">
      {icon}
      <h3 className="text-xl font-bold text-neutral-700">{title}</h3>
      <p className="text-neutral-700">{description}</p>
    </div>
  );
};

type StepProps = {
  NumberProps: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;
  title: string;
  description: string;
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
        <p>{description}</p>
      </div>
    </li>
  );
};

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="card-body flex flex-col gap-4 pl-0">
        <div className="mb-4 flex h-[65px] w-[65px] items-center justify-center rounded-full bg-white text-white shadow-xl">
          {/* <i className="ti ti-history text-4xl text-orange-500"></i> */}
          {icon}
        </div>

        <h4 className="card-title">{title}</h4>
        <p>{description}</p>
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
      <div className="card-body">
        {icon}
        <h4 className="card-title font-bold">{title}</h4>
        <p className="mb-2 text-2xl font-bold">{description}</p>
        <ul>
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <CircleCheckIcon />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
