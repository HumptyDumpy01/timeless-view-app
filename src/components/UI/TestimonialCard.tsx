interface TestimonialCardType {
  title: string;
  quote: string;
  imgSrc: string;
  initials: string;
  date: string;
  // children: ReactNode;
}

import Paragraph from '../Typography/Paragraph.tsx';

function TestimonialCard({ title, quote, imgSrc, date, initials }: TestimonialCardType) {
  return (
    <>
      <div className={`max-w-screen-sm min-w-[530px]`}>
        <h2 className={`text-5xl font-italiana uppercase mb-8`}>{title}</h2>
        <div className={`mb-9`}>
          <Paragraph text={(
            <>
              "{quote}"
            </>
          )} />
        </div>
        <div className={`flex items-center gap-4`}>
          <div>
            <img src={imgSrc} alt="User Icon 1" />
          </div>
          <div className={`flex flex-col gap-1`}>
            <h3 className={`font-italiana text-2xl`}>{initials}</h3>
            <p className={`text-zinc-600 text-sm`}>{date}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialCard;