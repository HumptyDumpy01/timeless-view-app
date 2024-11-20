/* interface TestimonialsSectionType {
  // children: ReactNode;
} */

import Testimonials from '../Testimonials.tsx';
import TestimonialCard from '../../UI/TestimonialCard.tsx';
import UserImg1 from '../../../assets/testimonials/user-icon-1.png';
import UserImg2 from '../../../assets/testimonials/user-icon-2.png';
import { useState } from 'react';
import ArrowIcon from '../../UI/ArrowIcon.tsx';

function TestimonialsSection(/*{  }: TestimonialsSectionType*/) {
  const [paginateComments, setPaginateComments] = useState<boolean>(true);
  return (
    <section className={`mb-24`}>
      <Testimonials />
      <div className={`overflow-x-auto scrollbar-hide ml-4 hidden sm:flex`}>
        <TestimonialCard
          date={`August 14, 2024`}
          title={`very good!`}
          initials={`Jane Doe`}
          imgSrc={UserImg1}
          quote={`Working with Olena was an absolute dream! She has an incredible talent for making everyone feel comfortable, capturing authentic, beautiful moments that we’ll cherish forever!`} />
        <TestimonialCard
          date={`August 14, 2024`}
          title={`very good!`}
          initials={`Jane Doe`}
          imgSrc={UserImg2}
          quote={`Working with Olena was an absolute dream! She has an incredible talent for making everyone feel comfortable, capturing authentic, beautiful moments that we’ll cherish forever!`} />
        <TestimonialCard
          date={`August 14, 2024`}
          title={`very good!`}
          initials={`Jane Doe`}
          imgSrc={UserImg2}
          quote={`Working with Olena was an absolute dream! She has an incredible talent for making everyone feel comfortable, capturing authentic, beautiful moments that we’ll cherish forever!`} />
        <TestimonialCard
          date={`August 14, 2024`}
          title={`very good!`}
          initials={`Jane Doe`}
          imgSrc={UserImg1}
          quote={`Working with Olena was an absolute dream! She has an incredible talent for making everyone feel comfortable, capturing authentic, beautiful moments that we’ll cherish forever!`} />
        <TestimonialCard
          date={`August 14, 2024`}
          title={`very good!`}
          initials={`Jane Doe`}
          imgSrc={UserImg2}
          quote={`Working with Olena was an absolute dream! She has an incredible talent for making everyone feel comfortable, capturing authentic, beautiful moments that we’ll cherish forever!`} />
      </div>

      <div className={`flex flex-col gap-12 sm:hidden`}>
        <TestimonialCard
          date={`August 14, 2024`}
          title={`very good!`}
          initials={`Jane Doe`}
          imgSrc={UserImg2}
          quote={`Working with Olena was an absolute dream! She has an incredible talent for making everyone feel comfortable, capturing authentic, beautiful moments that we’ll cherish forever!`} />
        <TestimonialCard
          date={`August 14, 2024`}
          title={`very good!`}
          initials={`Jane Doe`}
          imgSrc={UserImg2}
          quote={`Working with Olena was an absolute dream! She has an incredible talent for making everyone feel comfortable, capturing authentic, beautiful moments that we’ll cherish forever!`} />
        <TestimonialCard
          date={`August 14, 2024`}
          title={`very good!`}
          initials={`Jane Doe`}
          imgSrc={UserImg2}
          quote={`Working with Olena was an absolute dream! She has an incredible talent for making everyone feel comfortable, capturing authentic, beautiful moments that we’ll cherish forever!`} />
        {!paginateComments && (
          <>
            <TestimonialCard
              date={`August 14, 2024`}
              title={`very good!`}
              initials={`Jane Doe`}
              imgSrc={UserImg2}
              quote={`Working with Olena was an absolute dream! She has an incredible talent for making everyone feel comfortable, capturing authentic, beautiful moments that we’ll cherish forever!`} />
            <TestimonialCard
              date={`August 14, 2024`}
              title={`very good!`}
              initials={`Jane Doe`}
              imgSrc={UserImg2}
              quote={`Working with Olena was an absolute dream! She has an incredible talent for making everyone feel comfortable, capturing authentic, beautiful moments that we’ll cherish forever!`} />
            <TestimonialCard
              date={`August 14, 2024`}
              title={`very good!`}
              initials={`Jane Doe`}
              imgSrc={UserImg2}
              quote={`Working with Olena was an absolute dream! She has an incredible talent for making everyone feel comfortable, capturing authentic, beautiful moments that we’ll cherish forever!`} />
          </>
        )}
      </div>
      <div className={` mx-4 mt-14 sm:hidden`}>
        <button onClick={
          paginateComments ? () => setPaginateComments(false) : () => setPaginateComments(true)
        } className={`sm:text-4xl text-xl bp-828:text-2xl uppercase flex font-semibold items-center gap-4 py-9 bp-828:py-5 px-14 
            border border-zinc-50 bp-828:w-fit w-full justify-center text-nowrap`}>
          {paginateComments ? `See more` : `See less`}
          <div className={paginateComments ? `rotate-90` : `-rotate-90`}>
            <ArrowIcon style={`large`} />
          </div>
        </button>
      </div>
    </section>
  );
}

export default TestimonialsSection;
