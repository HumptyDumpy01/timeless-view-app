/* interface VideographyServiceType {
  // children: ReactNode;
} */

import HighlightText from '../../Typography/HighlightText.tsx';
import HeadingAndLabel from '../../UI/HeadingAndLabel.tsx';

function VideographyService(/*{  }: VideographyServiceType*/) {
  return (
    <div className={`flex flex-col gap-16`}>
      <div className={`flex flex-col gap-11`}>
        <HeadingAndLabel label={(
          <>
            &minus; <HighlightText text={`1 hour`} /> on location and <HighlightText text={`2 hours`} /> of basic video
            editing (video up to 1 minute)
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
            &minus;  <HighlightText text={`$100 CAD`} /> for each additional 2 hours of editing or for each additional
            30 seconds of video
          </>
        )} heading={`additional photos:`} />

        <HeadingAndLabel label={(
          <>
            &minus;  Book a video shoot and receive <HighlightText text={`5 edited photos`} /> as a gift.
          </>
        )} heading={(
          <>
            <HighlightText highlightColor={`yellow`} text={`"VIDEO SHOOT"`} /> PACKAGE
          </>
        )} />
      </div>
    </div>
  );
}

export default VideographyService;