interface ServiceContainerType {
  label: string;
  number: string;
  // children: ReactNode;
}

import ServiceLabel from '../UI/ServiceLabel.tsx';

function ServiceContainer({ label, number }: ServiceContainerType) {
  return (
    <>
      <div>
        <div className={`flex items-center justify-between`}>
          <ServiceLabel label={label} number={number} />
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
              <path
                d="M17.7168 0.000445166L10.2842 7.41687L2.85154 0.000443867L0.568314 2.28367L10.2842 11.9995L20 2.28367L17.7168 0.000445166Z"
                fill="#757575" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceContainer;