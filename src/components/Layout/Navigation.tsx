// 'use client';

/*type NavigationType = {
  // children: ReactNode;
}*/

import Link from '../UI/Link.tsx';
import { OLENAS_INSTAGRAM } from '../../../utils/variables.ts';

export default function Navigation(/*{  }: NavigationType*/) {
  return (
    <>
      <header className={`items-center m-auto`}>
        <div className={`flex items-center justify-between`}>
          <div className={`flex items-center`}>
            <h2 className={`font-italiana text-2xl mr-24`}>Timeless View</h2>
            <div className={`flex items-center gap-7`}>
              <Link href={`#aboutMe`} label={`About me`} />
              <Link href={`#photoGallery`} label={`Photo Gallery`} />
              <Link href={`#videoGallery`} label={`Video Gallery`} />
              <Link href={`#myServices`} label={`My Services`} />
            </div>
          </div>
          <div className={`flex items-center gap-7`}>
            <Link href={`
            tel:+1-234-567-8901`} label={`Contact me`} />
            <Link shouldOpenNewTab href={OLENAS_INSTAGRAM}
                  showArrowIcon
                  label={`My Instagram`} mode={`highlighted`} />
          </div>
        </div>
      </header>
    </>
  );
}