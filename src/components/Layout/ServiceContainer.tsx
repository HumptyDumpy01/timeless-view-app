import { ReactNode } from 'react';
import ServiceLabel from '../UI/ServiceLabel.tsx';
import { MyServicesSectionType } from './Sections/MyServicesSection.tsx';

interface ServiceContainerType {
  label: MyServicesSectionType;
  number: string;
  content: ReactNode;
  open: boolean;
  setActive: (label: MyServicesSectionType | false) => void;
  // children: ReactNode;
}

function ServiceContainer({ label, number, content, open, setActive }: ServiceContainerType) {
  const chosenFillSvg = open ? `#fff` : `#757575`;
  return (
    <>
      <div>
        <div className={`flex items-center justify-between cursor-pointer`}
             onClick={open ?
               () => setActive(false) :
               () => setActive(label)
             }>
          <ServiceLabel active={open} label={label} number={number} />
          <div className={open ? `-rotate-180` : ``}>
            <svg className={`w-[16] h-[8px] sm:w-[20px] sm:h-[12px]`} xmlns="http://www.w3.org/2000/svg" width="20"
                 height="12"
                 viewBox="0 0 20 12" fill="none">
              <path
                d="M17.7168 0.000445166L10.2842 7.41687L2.85154 0.000443867L0.568314 2.28367L10.2842 11.9995L20 2.28367L17.7168 0.000445166Z"
                fill={chosenFillSvg} />
            </svg>
          </div>
        </div>
        {open && (
          <>
            <div className={`ml-4 mt-14`}>
              {content}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ServiceContainer;