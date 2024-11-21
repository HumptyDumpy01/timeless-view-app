/* interface VideoGraphySectionType {
  // children: ReactNode;
} */

import Heading from '../../Typography/Heading.tsx';
import HighlightLetter from '../../Typography/HighlightLetter.tsx';
import Paragraph from '../../Typography/Paragraph.tsx';
import HighlightText from '../../Typography/HighlightText.tsx';
import Videography from '../Videography.tsx';
import Tooltip from '../Tooltip.tsx';
import { motion } from 'framer-motion';

function VideoGraphySection(/*{  }: VideoGraphySectionType*/) {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={`mb-14`}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className={`w-full max-w-screen-xl px-4 sm:px-9 m-auto flex flex-col gap-9`} id={`videoGallery`}>
          <Heading heading={(
            <div>
              <HighlightLetter text={`T`} />he <HighlightLetter text={`V`} />ideography <br />
              I am proud to <HighlightLetter text={`S`} />how
            </div>
          )} />
          <div className={`mr-auto mb-12`}>
            <Paragraph text={(
              <>
                From captivating brand stories to heartfelt personal narratives, my videos are crafted to <HighlightText
                text={`inspire,
                engage, and leave a lasting impact.`} highlightColor={`yellow`} /></>
            )} />
          </div>
        </motion.div>
        <Videography />
        <Tooltip label={`Scroll to the right to see more`} />
      </motion.section>
    </>
  );
}

export default VideoGraphySection;