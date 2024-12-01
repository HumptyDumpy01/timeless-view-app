import Heading from '../../Typography/Heading.tsx';
import Select from '../Select.tsx';
import Input from '../Input.tsx';
import HighlightText from '../../Typography/HighlightText.tsx';
import ArrowIcon from '../ArrowIcon.tsx';
import {
  photographyAndVideographyPackages,
  photographyOptions,
  photographyPackageOptions,
  videographyOptions,
  videographyPackageOptions
} from '../../../../utils/variables.ts';
import { Tooltip } from '@mui/material';
import { ChangeEvent, useState } from 'react';

interface FillInFormType {
  mode: `photography` | `videography` | `success` | `error`;
  onClose: (value: boolean) => void;
  // children: ReactNode;
}

function FillInForm({ mode, onClose }: FillInFormType) {
  const [chosenSelectionOptionsService, setChosenSelectionOptionsService] =
    useState(mode === `photography` ? photographyOptions : videographyOptions);
  const [chosenSelectionOptionsPackage, setChosenSelectionOptionsPackage] =
    useState(mode === `photography` ? photographyPackageOptions : videographyPackageOptions);

  // @ts-ignore
  const [selectedService, setSelectedService] = useState<string>('');

  const handleServiceChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(event.target.value);

    switch (event.target.value) {
      case `photography`:
        setChosenSelectionOptionsService(photographyOptions);
        setChosenSelectionOptionsPackage(photographyPackageOptions);
        break;
      case `videography`:
        setChosenSelectionOptionsService(videographyOptions);
        setChosenSelectionOptionsPackage(videographyPackageOptions);
        break;
      case `both`:
        setChosenSelectionOptionsService(photographyOptions);
        setChosenSelectionOptionsPackage(photographyAndVideographyPackages);
        break;
    }
  };

  return (
    <div className={`mt-11 sm:px-8 px-2 relative`}>
      <div onClick={() => onClose(false)} className={`absolute -top-7 right-0 cursor-pointer
      transition-all duration-200 hover:rotate-180 hover:scale-110`}>
        <svg className={`w-20 lg:w-28 h-20 lg:h-28`} xmlns="http://www.w3.org/2000/svg" width="120" height="120"
             viewBox="0 0 125 125"
             fill="none">
          <path
            d="M62.5 7.8125C32.0312 7.8125 7.8125 32.0312 7.8125 62.5C7.8125 92.9688 32.0312 117.188 62.5 117.188C92.9688 117.188 117.188 92.9688 117.188 62.5C117.188 32.0312 92.9688 7.8125 62.5 7.8125ZM83.5938 89.8438L62.5 68.75L41.4062 89.8438L35.1562 83.5938L56.25 62.5L35.1562 41.4062L41.4062 35.1562L62.5 56.25L83.5938 35.1562L89.8438 41.4062L68.75 62.5L89.8438 83.5938L83.5938 89.8438Z"
            fill="#DFDFDF" />
        </svg>
      </div>
      <Heading animation={false} heading={(
        <div className={`font-raleway font-semibold sm:text-7xl text-5xl`}>
          Let’s fill in the form!
        </div>
      )} />
      <form className={`flex flex-col bp-938:grid md:rid-cols-2 mt-[60px] gap-10`}>
        <div className={`flex flex-col gap-8`}>
          <Select
            label={`service chosen`}
            name={`serviceChosen`}
            options={chosenSelectionOptionsService}
            onChange={handleServiceChange}
          />

          <Input label={`your name`} name={`name`} placeholder={`e.g. Jane Doe`} />
          <Input label={`your email`} name={`email`} placeholder={`e.g. jane.doe@gmil.com`} />
        </div>

        <div className={`flex flex-col gap-8 mb-14`}>
          <Input label={`your phone`} name={`phone`} placeholder={`Your Phone`} />
          <Select label={`preferred way of communication`} name={`preferredWayOfCommunication`}
                  options={[
                    {
                      value: `email`,
                      label: `Via Email`
                    },
                    {
                      value: `phone`,
                      label: `Via Phone`
                    },
                    { value: `socialMedia`, label: `Via Social Media` }]} />
          <Select label={`package chosen`} name={`package`}
                  options={chosenSelectionOptionsPackage} />
        </div>
        <div className={`text-left col-span-2`}>
          <p className={`text-sm text-zinc-300 max-w-screen-lg leading-relaxed`}>After paying the deposit, check
            your
            email for a confirmation letter. You also
            need
            to fill in the <a target={`_blank`} href="" className={`underline underline-offset-2`}><HighlightText
              text={`Google
            form`} /></a> after successfully paying the deposit. The link will be attached in the letter and provided
            hereafter,
            following a successful payment.</p>

          <div className={`flex lg:justify-between lg:items-center mt-10 mb-4 flex-col lg:flex-row gap-8 lg:gap-10`}>
            <button
              className={`font-federo uppercase justify-center text-yellow-500 px-16 py-7 border border-amber-500 sm:text-3xl text-xl text-nowrap flex lg:w-fit items-center gap-4 transition-all duration-200 active:text-white active:border-zinc-50
              `}>
              Pay 100$ CAD Deposit
              <div className={`hidden sm:flex`}>
                <ArrowIcon color={`yellow`} style={`large`} />
              </div>
            </button>
            <button
              onClick={() => onClose(false)}
              type={`button`}
              className={`sm:text-3xl text-2xl bg-zinc-900 py-4 px-8 rounded-md text-zinc-500 hover:bg-zinc-950 transition-colors duration-200`}>
              Cancel
            </button>
          </div>
          <div>
            <Tooltip
              title={(
                <ul>
                  <li className={`text-[13px]`}>1. If the shoot takes place as scheduled, the deposit will be
                    deducted from the
                    total service cost.
                  </li>
                  <li className={`text-[13px]`}>2. If the shoot is canceled less than 72 hours before the scheduled
                    time,
                    the
                    $100 CAD deposit will be
                    non-refundable.
                  </li>
                </ul>
              )}
              placement={`top`}>
              <p className={`text-[13px] text-zinc-300 max-w-screen-lg leading-relaxed mt-4`}>By clicking the "Pay 100$
                CAD
                Deposit" button, you agree to the <span
                  className={`underline underline-offset-2 cursor-pointer`}><HighlightText
                  text={`Terms and Conditions.`} />
                </span>
              </p>
            </Tooltip>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FillInForm;