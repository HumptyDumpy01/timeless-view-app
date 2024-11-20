// 'use client';

/*type FooterType = {
  // children: ReactNode;
}*/

import InstagramIcon from '../UI/InstagramIcon.tsx';
import { OLENAS_INSTAGRAM } from '../../../utils/variables.ts';

export default function Footer(/*{  }: FooterType*/) {
  const today = new Date();
  return (
    <footer className={`w-full max-w-screen-xl m-auto flex flex-col px-9 lg::px-0`}>
      <div className={`flex items-center md:justify-between flex-col md:flex-row gap-9 bp-828:gap-0`}>
        <p className={`sm:text-left text-center text-sm`}>Contact me at <a href="mailto:timelessview24@gmail.com"
                                                                           className={`underline`}>timelessview24@gmail.com</a>
        </p>
        <a target={`_blank`} href={OLENAS_INSTAGRAM}
           className={`flex items-center bp-828:gap-5 mb-5 bp-828:mb-0 uppercase font-italiana bp-828:text-[44px] text-2xl text-zinc-500`}>
          <InstagramIcon />
          my instagram
        </a>
      </div>
      <h2 className={`bp-828:text-[189px] sm:text-nowrap text-6xl m-auto uppercase font-italiana`}>timeless view</h2>
      <div
        className={`flex items-center justify-between text-center sm:text-left text-zinc-700 mb-11 m-auto bp-828:mr-auto`}>
        <p className={`text-sm bp-828:text-normal mt-4 bp-828:mt-0`}>
          © {today.getFullYear()} Timeless View. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
