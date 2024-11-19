/* interface HeroType {
  // children: ReactNode;
} */

import Navigation from './Navigation.tsx';
import Heading from '../Typography/Heading.tsx';
import HighlightLetter from '../Typography/HighlightLetter.tsx';
import Paragraph from '../Typography/Paragraph.tsx';
import HighlightText from '../Typography/HighlightText.tsx';
import { OLENAS_INSTAGRAM } from '../../../utils/variables.ts';
import ArrowIcon from '../UI/ArrowIcon.tsx';

function Hero(/*{  }: HeroType*/) {
  return (
    <>
      <div className={`mb-[76px]`}>
        <Navigation />
      </div>
      <div className={`flex flex-col text-left`}>
        <div className={`mb-14`}>
          <Heading heading={(
            <>
              Turning <HighlightLetter text={`L`} />ife’s
              Beauty <br />
              into Timeless <HighlightLetter text={`A`} />rt
            </>
          )} />
        </div>
        <div className={`mb-12`}>
          <Paragraph text={(
            <>
              I am <HighlightText
              text={`a talented visual storyteller`} /> with
              a passion for
              capturing life's most compelling moments through
              video and photography. I transform ordinary scenes into <HighlightText text={`stunning visuals that resonate deeply with
              audiences.`} />
            </>
          )} />
        </div>

        <a href={OLENAS_INSTAGRAM} className={`text-2xl uppercase flex font-semibold items-center gap-4 py-5 px-14 
            border border-zinc-50 w-fit`}>See my portfolio
          <ArrowIcon style={`large`} />
        </a>
      </div>
      <div className={`absolute bottom-0 right-0 text-right`}>
        <span className={`uppercase text-sm mb-3 inline-block`}>professional photographer & videographer</span>
        <Heading heading={(
          <div className={`flex flex-col align-end`}>
            <div className={`ml-auto`}>
              <HighlightLetter text={`O`} /><span className={`uppercase inline-block`}>lena</span>
            </div>
            <div>
              <HighlightLetter text={`V`} /><span className={`uppercase inline-block`}>inytska</span>
            </div>
          </div>
        )} />
      </div>
    </>
  );
}

export default Hero;