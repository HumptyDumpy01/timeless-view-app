import { type ReactNode } from 'react';

interface HeadingType {
  heading: ReactNode;
  // children: ReactNode;
}

function Heading({ heading }: HeadingType) {
  return (
    <>
      <h2 className={`bp-828:text-8xl text-left font-italiana text-6xl`}>{heading}</h2>
    </>
  );
}

export default Heading;