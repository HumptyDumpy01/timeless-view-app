/* interface MyServicesSectionType {
  // children: ReactNode;
} */

import Heading from '../../Typography/Heading.tsx';
import HighlightLetter from '../../Typography/HighlightLetter.tsx';
import ServiceContainer from '../ServiceContainer.tsx';
import ConsultationService from '../Services/ConsultationService.tsx';

function MyServicesSection(/*{  }: MyServicesSectionType*/) {
  return (
    <section className={`w-full max-w-screen-xl px-4 bp-828:px-9 m-auto flex flex-col gap-9 mb-36`}>
      <div className={`uppercase sm:mb-20 mb-4`}>
        <Heading heading={(
          <>
            <HighlightLetter text={`M`} />y <HighlightLetter text={`S`} />ervices
          </>
        )} />
      </div>
      <div className={`flex flex-col justify-center gap-11 max-w-screen-sm`}>
        <ServiceContainer
          number={`01`}
          label={`consultation`}
          content={(
            <>
              <ConsultationService />
            </>
          )}
        />
        <ServiceContainer
          number={`02`}
          label={`photography`}
          content={(
            <>
            </>
          )}
        />
        <ServiceContainer
          number={`03`}
          label={`videography`}
          content={(
            <>
            </>
          )}
        />
      </div>
    </section>
  );
}

export default MyServicesSection;