import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface HeadingType {
  heading: ReactNode;
  // children: ReactNode;
}

function Heading({ heading }: HeadingType) {
  return (
    <>
      <motion.h2
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`bp-828:text-8xl text-left font-italiana text-6xl`}>{heading}</motion.h2>
    </>
  );
}

export default Heading;