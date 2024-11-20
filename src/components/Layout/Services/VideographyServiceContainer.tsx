import { MyServicesSectionType } from '../Sections/MyServicesSection.tsx';
import ServiceContainer from '../ServiceContainer.tsx';
import VideographyService from './VideographyService.tsx';
import FormButton from '../../UI/FormButton.tsx';

interface VideographyServiceContainerType {
  openedService: MyServicesSectionType | false;
  setOpenedService: (value: MyServicesSectionType | false) => void;
  // children: ReactNode;
}

function VideographyServiceContainer({ openedService, setOpenedService }: VideographyServiceContainerType) {
  return (
    <>
      <ServiceContainer
        number={`03`}
        open={openedService === `videography`}
        setActive={setOpenedService}
        label={`videography`}
        content={(
          <>
            <VideographyService />
            <div className={`mt-20 mb-7`}>
              <FormButton label={`book now!`} />
            </div>
          </>
        )}
      />
    </>
  );
}

export default VideographyServiceContainer;