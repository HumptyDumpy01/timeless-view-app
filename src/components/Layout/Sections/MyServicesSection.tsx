/* interface MyServicesSectionType {
  // children: ReactNode;
} */

import Heading from '../../Typography/Heading.tsx';
import HighlightLetter from '../../Typography/HighlightLetter.tsx';
import ServiceContainer from '../ServiceContainer.tsx';

function MyServicesSection(/*{  }: MyServicesSectionType*/) {
  return (
    <section className={`w-full max-w-screen-xl m-auto flex flex-col gap-9 mb-36`}>
      <div className={`uppercase mb-20`}>
        <Heading heading={(
          <>
            <HighlightLetter text={`M`} />y <HighlightLetter text={`S`} />ervices
          </>
        )} />
      </div>
      <div className={`flex flex-col justify-center gap-11 max-w-screen-sm`}>
        <ServiceContainer number={`01`} label={`consultation`} />
        <ServiceContainer number={`02`} label={`photography`} />
        <ServiceContainer number={`03`} label={`videography`} />
      </div>
    </section>
  );
}

export default MyServicesSection;