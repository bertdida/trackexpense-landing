'use client';

import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import BellIcon from '@/app/components/icons/BellIcon';
import ChartIcon from '@/app/components/icons/ChartIcon';
import WandIcon from '@/app/components/icons/WandIcon';
import GradientText from '@/app/components/GradientText';
import ComingSoon from '@/app/components/ComingSoon';
import PlayDownloadButton from '@/app/components/PlayDownloadButton';

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
        className={twMerge('text-indigo-500', benefitIconProps.className)}
      />
    ),
    title: 'Never Miss a Bill Again',
    description:
      "Set smart reminders and get real-time alerts so you're always on time with payments.",
  },
  {
    icon: (
      <ChartIcon
        {...benefitIconProps}
        className={twMerge('text-blue-500', benefitIconProps.className)}
      />
    ),
    title: 'Understand Your Spending',
    description:
      'See a clear breakdown of your spending by category, and review past months to track your progress.',
  },
  {
    icon: (
      <WandIcon
        {...benefitIconProps}
        className={twMerge('text-sky-500', benefitIconProps.className)}
      />
    ),
    isComingSoon: true,
    title: 'Reach Your Financial Goals',
    description:
      'Get AI-powered insights and personalized tips that help you spend smarter and save better.',
  },
];

const BudgetingBenefitsSection: React.FC = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        aria-labelledby="benefits-heading"
        className={`fixed left-0 right-0 top-0 z-50 bg-white px-4 py-4 shadow-md transition-transform duration-500 ${
          isInView ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="mx-auto flex max-w-screen-lg items-center justify-between">
          <p className="hidden md:block">
            🎉&nbsp;<GradientText>Now available on Android</GradientText>
          </p>
          <PlayDownloadButton className="mx-auto md:mr-0" height={45} />
        </div>
      </header>

      <div className="bg-[#f5fdff] py-20">
        <div className="container mx-auto max-w-screen-lg space-y-16 px-8">
          <div>
            <h3
              id="benefits-heading"
              className="text-center text-2xl text-neutral-700 md:text-3xl"
            >
              Budgeting made
              <br className="md:hidden" />
              <GradientText>&nbsp;simple and effective</GradientText>
            </h3>
            <p className="mt-4 text-center text-base text-neutral-500">
              Ditch the spreadsheets. Track your expenses with ease — no learning curve
              required.
            </p>
          </div>
          <ul className="grid gap-20 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <li key={index}>
                <Benefit {...benefit} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

type BenefitProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  isComingSoon?: boolean;
};

const Benefit: React.FC<BenefitProps> = ({ icon, title, description, isComingSoon }) => {
  return (
    <article className="flex flex-col gap-4">
      {icon}
      <h3 className="text-xl font-bold text-neutral-700">{title}</h3>
      <p className="text-neutral-700">{description}</p>
      {isComingSoon && <ComingSoon />}
    </article>
  );
};

export default BudgetingBenefitsSection;
