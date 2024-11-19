/* interface PhotographySectionType {
  // children: ReactNode;
} */

import Photo1 from '../../assets/photography/photo-1.png';
import Photo2 from '../../assets/photography/photo-2.png';
import Photo3 from '../../assets/photography/photo-3.png';
import Photo4 from '../../assets/photography/photo-4.png';
import Photo5 from '../../assets/photography/photo-5.png';
import Photo6 from '../../assets/photography/photo-6.png';
import Photography from './Photography.tsx';
import Tooltip from './Tooltip.tsx';

function PhotographySection(/*{  }: PhotographySectionType*/) {
  return (
    <section className={`mb-20`}>
      <Photography />
      <div className={`flex items-center overflow-x-auto scrollbar-hide gap-4`}>
        <img src={Photo1} alt={`Photo 1`} className={`w-full`} />
        <img src={Photo2} alt={`Photo 2`} className={`w-full`} />
        <img src={Photo3} alt={`Photo 3`} className={`w-full`} />
        <img src={Photo4} alt={`Photo 4`} className={`w-full`} />
        <img src={Photo5} alt={`Photo 5`} className={`w-full`} />
        <img src={Photo6} alt={`Photo 6`} className={`w-full`} />
      </div>
      <Tooltip label={`Scroll to the right to see more`} />
    </section>
  );
}

export default PhotographySection;