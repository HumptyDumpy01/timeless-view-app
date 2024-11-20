/* interface MyServicesSectionType {
  // children: ReactNode;
} */

import Heading from '../../Typography/Heading.tsx';
import HighlightLetter from '../../Typography/HighlightLetter.tsx';
import ServiceContainer from '../ServiceContainer.tsx';
import ConsultationService from '../Services/ConsultationService.tsx';
import { useState } from 'react';
import PhotographyServiceContainer from '../Services/PhotographyServiceContainer.tsx';
import VideographyServiceContainer from '../Services/VideographyServiceContainer.tsx';


export type MyServicesSectionType = `consultation` | `photography` | `videography`;

function MyServicesSection(/*{  }: MyServicesSectionType*/) {
  const [openedService, setOpenedService] = useState<MyServicesSectionType | false>(false);
  return (
    <section className={`w-full max-w-screen-xl px-4 bp-828:px-9 m-auto flex flex-col gap-9 mb-36`}>
      <div className={`uppercase sm:mb-20 mb-4`} id={`myServices`}>
        <Heading heading={(
          <>
            <HighlightLetter text={`M`} />y <HighlightLetter text={`S`} />ervices
          </>
        )} />
      </div>
      <div className={`flex flex-col justify-center gap-11 max-w-screen-sm`}>
        <ServiceContainer
          number={`01`}
          open={openedService === `consultation`}
          setActive={setOpenedService}
          label={`consultation`}
          content={(
            <>
              <ConsultationService />
            </>
          )}
        />
        <PhotographyServiceContainer openedService={openedService} setOpenedService={setOpenedService} />
        <VideographyServiceContainer openedService={openedService} setOpenedService={setOpenedService} />
      </div>
    </section>
  );
}

export default MyServicesSection;