// 'use client';

/*type FooterType = {
  // children: ReactNode;
}*/

import InstagramIcon from '../UI/InstagramIcon.tsx';
import { OLENAS_INSTAGRAM } from '../../../utils/variables.ts';

export default function Footer(/*{  }: FooterType*/) {
  const today = new Date();
  return (
    <footer className={`w-full max-w-screen-xl m-auto flex flex-col`}>
      <div className={`flex items-center justify-between`}>
        <p>Contact me at <a href="mailto:timelessview24@gmail.com" className={`underline`}>timelessview24@gmail.com</a>
        </p>
        <a target={`_blank`} href={OLENAS_INSTAGRAM}
           className={`flex items-center gap-5 uppercase font-italiana text-[44px] text-zinc-500`}>
          <InstagramIcon />
          my instagram
        </a>
      </div>
      <h2 className={`text-[189px] m-auto uppercase font-italiana`}>timeless view</h2>
      <div className={`flex items-center justify-between text-zinc-700 mb-11`}>
        <p>
          © {today.getFullYear()} Timeless View. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
