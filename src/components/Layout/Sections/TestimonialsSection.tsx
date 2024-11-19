/* interface TestimonialsSectionType {
  // children: ReactNode;
} */

import Testimonials from '../Testimonials.tsx';
import TestimonialCard from '../../UI/TestimonialCard.tsx';
import UserImg1 from '../../../assets/testimonials/user-icon-1.png';
import UserImg2 from '../../../assets/testimonials/user-icon-2.png';

function TestimonialsSection(/*{  }: TestimonialsSectionType*/) {
  return (
    <section className={`mb-24`}>
      <Testimonials />
      <div className={`flex overflow-x-auto scrollbar-hide ml-4`}>
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
    </section>
  );
}

export default TestimonialsSection;
