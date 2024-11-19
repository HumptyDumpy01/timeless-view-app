import { type ReactNode } from 'react';

interface HeadingType {
  heading: ReactNode;
  // children: ReactNode;
}

function Heading({ heading }: HeadingType) {
  return (
    <>
      <h1 className={`text-8xl text-left font-italiana`}>{heading}</h1>
    </>
  );
}

export default Heading;