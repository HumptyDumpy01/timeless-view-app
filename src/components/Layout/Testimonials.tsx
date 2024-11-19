/* interface TestimonialsType {
  // children: ReactNode;
} */

import Heading from '../Typography/Heading.tsx';
import HighlightLetter from '../Typography/HighlightLetter.tsx';
import Paragraph from '../Typography/Paragraph.tsx';
import HighlightText from '../Typography/HighlightText.tsx';
import TestimonialCard from '../UI/TestimonialCard.tsx';
import UserImg1 from '../../assets/testimonials/user-icon-1.png';
import UserImg2 from '../../assets/testimonials/user-icon-2.png';


function Testimonials(/*{  }: TestimonialsType*/) {
  return (
    <section>
      <div className={`w-full max-w-screen-xl m-auto flex flex-col gap-9`}>
        <div className={`ml-auto`}>
          <Heading heading={(
            <div className={`flex justify-end flex-col`}>
              <div>
                <HighlightLetter text={`W`} />hat my clients
              </div>
              <div>
                see <HighlightLetter text={`T`} />hrough the <HighlightLetter text={`L`} />ens
              </div>
            </div>
          )} />
        </div>
        <div className={`ml-auto mb-12`}>
          <Paragraph text={(
            <>
              From captivating brand stories to heartfelt personal narratives, my videos are crafted to <HighlightText
              text={`inspire,
                engage, and leave a lasting impact.`} highlightColor={`yellow`} /></>
          )} />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;