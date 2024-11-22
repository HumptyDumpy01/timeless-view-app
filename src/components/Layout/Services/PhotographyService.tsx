/* interface PhotographyServiceType {
  // children: ReactNode;
} */

import HighlightText from '../../Typography/HighlightText.tsx';
import HeadingAndLabel from '../../UI/HeadingAndLabel.tsx';

function PhotographyService(/*{  }: PhotographyServiceType*/) {
  return (
    <div className={`flex flex-col gap-16`}>
      <div className={`flex flex-col gap-11`}>
        <HeadingAndLabel label={(
          <div className={`sm:text-lg`}>
            &minus; <HighlightText text={`1 hour`} /> on location and <HighlightText text={`2 hours`} /> of editing (up
            to 20
            photos)
          </div>
        )} heading={`includes:`} />

        <HeadingAndLabel label={(
          <div className={`sm:text-lg`}>
            &minus;  from <HighlightText text={`$50 CAD/hour`} /> (The price will be calculated individually depending
            on
            the
            circumstances and request.)
          </div>
        )} heading={`price:`} />

        <HeadingAndLabel label={(
          <div className={`sm:text-lg`}>
            &minus; <HighlightText text={`$10 CAD`} /> Per edited Image
          </div>
        )} heading={`additional photos:`} />

        <HeadingAndLabel label={(
          <div className={`sm:text-lg`}>
            &minus;  Book a photo session and receive a <HighlightText
            text={`complimentary behind-the-scenes video `} /> (up to 30 seconds).
          </div>
        )} heading={(
          <div>
            <HighlightText highlightColor={`yellow`} text={`"PHOTO SESSION"`} /> PACKAGE
          </div>
        )} />
      </div>
    </div>
  );
}

export default PhotographyService;