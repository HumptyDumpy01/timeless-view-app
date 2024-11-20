/* interface PhotographyServiceType {
  // children: ReactNode;
} */

import HighlightText from '../../Typography/HighlightText.tsx';
import HeadingAndLabel from '../../UI/HeadingAndLabel.tsx';
import FormButton from '../../UI/FormButton.tsx';

function PhotographyService(/*{  }: PhotographyServiceType*/) {
  return (
    <div className={`flex flex-col gap-16`}>
      <div className={`flex flex-col gap-11`}>
        <HeadingAndLabel label={(
          <>
            &minus; <HighlightText text={`1 hour`} /> on location and <HighlightText text={`2 hours`} /> of editing (up
            to 20
            photos)
          </>
        )} heading={`includes:`} />

        <HeadingAndLabel label={(
          <>
            &minus;  from <HighlightText text={`$50 CAD/hour`} /> (The price will be calculated individually depending
            on
            the
            circumstances and request.) </>
        )} heading={`price:`} />

        <HeadingAndLabel label={(
          <>
            &minus; <HighlightText text={`$10 CAD`} /> Per edited Image
          </>
        )} heading={`additional photos:`} />

        <HeadingAndLabel label={(
          <>
            &minus;  Book a photo session and receive a <HighlightText
            text={`complimentary behind-the-scenes video `} /> (up to 30 seconds).
          </>
        )} heading={(
          <>
            <HighlightText highlightColor={`yellow`} text={`"PHOTO SESSION"`} /> PACKAGE
          </>
        )} />
      </div>
    </div>
  );
}

export default PhotographyService;