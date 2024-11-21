import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Photo1 from '../../../assets/photography/photo-1.png';
import Photo2 from '../../../assets/photography/photo-2.png';
import Photo3 from '../../../assets/photography/photo-3.png';
import Photo4 from '../../../assets/photography/photo-4.png';
import Photo5 from '../../../assets/photography/photo-5.png';
import Photo6 from '../../../assets/photography/photo-6.png';
import Photography from '../Photography.tsx';
import { motion } from 'framer-motion';
import AnimatedImage from '../../UI/AnimatedImage.tsx';
import { sliderSettings } from '../../../../utils/variables.ts';


const photos = [Photo1, Photo2, Photo3, Photo4, Photo5, Photo6];

function PhotographySection(/*{  }: PhotographySectionType*/) {

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={`mb-20 pt-4`}>
      <Photography />
      <Slider {...sliderSettings}
              className={`overflow-x-auto scrollbar-hide overflow-y-hidden cursor-grabbing gap-4 sm:gap-7`}>
        {photos.map((photo, index) => (
          <AnimatedImage key={index} src={photo} alt={`Image ${index + 1}`} />
        ))}
      </Slider>
      {/*<Tooltip label={`Scroll to the right to see more`} />*/}
    </motion.section>
  );
}

export default PhotographySection;