import { MyServicesSectionType } from '../Sections/MyServicesSection.tsx';
import ServiceContainer from '../ServiceContainer.tsx';
import VideographyService from './VideographyService.tsx';
import FormButton from '../../UI/FormButton.tsx';
import { useState } from 'react';
import CustomModal from '../../UI/Modal/CustomModal.tsx';
import FillInForm from '../../UI/Form/FillInForm.tsx';

interface VideographyServiceContainerType {
  openedService: MyServicesSectionType | false;
  setOpenedService: (value: MyServicesSectionType | false) => void;
  // children: ReactNode;
}

function VideographyServiceContainer({ openedService, setOpenedService }: VideographyServiceContainerType) {
  const [formOpen, setFormOpen] = useState<boolean>(false);
  return (
    <>
      {formOpen && (
        <>
          <CustomModal content={(
            <>
              <FillInForm onClose={setFormOpen} mode={`videography`} />
            </>
          )} open={formOpen} setOpen={setFormOpen} />
        </>
      )}
      <ServiceContainer
        number={`03`}
        open={openedService === `videography`}
        setActive={setOpenedService}
        label={`videography`}
        content={(
          <>
            <VideographyService />
            <div className={`mt-20 mb-7`}>
              <FormButton onClick={() => setFormOpen(true)} label={`book now!`} />
            </div>
          </>
        )}
      />
    </>
  );
}

export default VideographyServiceContainer;