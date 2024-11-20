import { MyServicesSectionType } from '../Sections/MyServicesSection.tsx';
import ServiceContainer from '../ServiceContainer.tsx';
import PhotographyService from './PhotographyService.tsx';
import FormButton from '../../UI/FormButton.tsx';

interface PhotographyServiceContainerType {
  openedService: MyServicesSectionType | false;
  setOpenedService: (value: MyServicesSectionType | false) => void;
  // children: ReactNode;
}

function PhotographyServiceContainer({ openedService, setOpenedService }: PhotographyServiceContainerType) {
  return (
    <>
      <ServiceContainer
        number={`02`}
        open={openedService === `photography`}
        setActive={setOpenedService}
        label={`photography`}
        content={(
          <>
            <PhotographyService />
            <div className={`mt-20 mb-7`}>
              <FormButton label={`book now!`} />
            </div>

          </>
        )}
      />
    </>
  );
}

export default PhotographyServiceContainer;