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
import { motion } from 'framer-motion';

function Hero(/*{  }: HeroType*/) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={`relative max-w-screen-xl px-4 sm:px-9 m-auto pt-7 sm:pt-12`}>
      <div className={`mb-[76px]`}>
        <Navigation />
      </div>
      <div className={`flex flex-col text-left`} id={`aboutMe`}>
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

        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          target={`_blank`}
          href={OLENAS_INSTAGRAM} className={`sm:text-4xl text-xl bp-828:text-2xl uppercase flex font-semibold items-center gap-4 py-9 bp-828:py-5 px-14 
            border border-zinc-50 bp-828:w-fit w-full justify-center text-nowrap`}>See my portfolio
          <div className={`hidden sm:flex`}>
            <ArrowIcon style={`large`} />
          </div>
        </motion.a>
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
    </motion.section>
  );
}

export default Hero;