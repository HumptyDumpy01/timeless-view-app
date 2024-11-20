/* interface PhotographyType {
  // children: ReactNode;
} */

import Heading from '../Typography/Heading.tsx';
import HighlightLetter from '../Typography/HighlightLetter.tsx';
import Paragraph from '../Typography/Paragraph.tsx';
import HighlightText from '../Typography/HighlightText.tsx';

function Photography(/*{  }: PhotographyType*/) {
  return (
    <>
      <div className={`w-full max-w-screen-xl px-4 m-auto flex flex-col gap-9`} id={`photoGallery`}>
        <div className={`hidden sm:flex justify-end`}>
          <Heading heading={(
            <div className={`flex bp-828:justify-end`}>
              <HighlightLetter text={`T`} />he <HighlightLetter text={`P`} />hotography <br />
              I am proud <HighlightLetter text={`O`} />f
            </div>
          )} />
        </div>

        <div className={`sm:hidden`}>
          <Heading heading={(
            <div className={``}>
              <HighlightLetter text={`T`} />he <br /><HighlightLetter text={`P`} />hotography <br />
              I am proud <HighlightLetter text={`O`} />f
            </div>
          )} />
        </div>
        <div className={`ml-auto mb-12`}>
          <Paragraph text={(
            <>
              A gallery where every photo tells a story. From vibrant portraits to
              breathtaking landscapes, my work
              captures the essence of each moment <HighlightText highlightColor={`yellow`}
                                                                 text={`with stunning clarity and emotion.`} />
            </>
          )} />
        </div>
      </div>
    </>
  );
}

export default Photography;