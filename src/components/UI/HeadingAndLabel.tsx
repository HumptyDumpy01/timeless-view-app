import { type ReactNode } from 'react';
import Paragraph from '../Typography/Paragraph.tsx';

interface HeadingAndLabelType {
  heading: ReactNode;
  label: ReactNode;
  // children: ReactNode;
}

function HeadingAndLabel({ heading, label }: HeadingAndLabelType) {
  return (
    <>
      <div className={`pb-6 border-b border-b-zinc-100`}>
        <span className={`uppercase text-4xl font-medium inline-block mb-5 text-zinc-400`}>{heading}</span>
        <Paragraph text={(
          label
        )} />
      </div>
    </>
  );
}

export default HeadingAndLabel;