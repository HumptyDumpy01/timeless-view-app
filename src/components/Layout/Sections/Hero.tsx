/* interface HeroType {
  // children: ReactNode;
} */

import Navigation from '../Navigation.tsx';
import Heading from '../../Typography/Heading.tsx';
import HighlightLetter from '../../Typography/HighlightLetter.tsx';
import Paragraph from '../../Typography/Paragraph.tsx';
import HighlightText from '../../Typography/HighlightText.tsx';
import { OLENAS_INSTAGRAM } from '../../../../utils/variables.ts';
import ArrowIcon from '../../UI/ArrowIcon.tsx';

function Hero(/*{  }: HeroType*/) {
  return (
    <section className={`relative max-w-screen-xl px-7 m-auto pt-12`}>
      <div className={`mb-[76px]`}>
        <Navigation />
      </div>
      <div className={`flex flex-col text-left`}>
        <div className={`mb-14 hidden bp-828:flex`}>
          <Heading heading={(
            <>
              Turning <HighlightLetter text={`L`} />ife’s
              Beauty <br />
              into Timeless <HighlightLetter text={`A`} />rt
            </>
          )} />
        </div>
        <div className={`mb-12 hidden bp-1042:flex`}>
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

        <div className={`text-right bp-828:hidden mt-64 mb-14`}>
          <span className={`uppercase text-sm mb-3 inline-block`}>professional photographer & videographer</span>
          <Heading heading={(
            <div className={`flex flex-col align-end`}>
              <div className={`ml-auto`}>
                <HighlightLetter text={`O`} /><span className={`uppercase inline-block`}>lena</span>
              </div>
              <div className={`ml-auto`}>
                <HighlightLetter text={`V`} /><span className={`uppercase inline-block`}>inytska</span>
              </div>
            </div>
          )} />
        </div>

        <a href={OLENAS_INSTAGRAM} className={`text-4xl bp-828:text-2xl uppercase flex font-semibold items-center gap-4 py-9 bp-828:py-5 px-14 
            border border-zinc-50 bp-828:w-fit w-full justify-center`}>See my portfolio
          <ArrowIcon style={`large`} />
        </a>
      </div>
      <div className={`absolute text-right -bottom-48 bp-1042:bottom-0 right-0 hidden bp-828:block`}>
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
    </section>
  );
}

export default Hero;