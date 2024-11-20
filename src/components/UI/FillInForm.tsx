import Heading from '../Typography/Heading.tsx';
import HighlightLetter from '../Typography/HighlightLetter.tsx';
import Input from './Input.tsx';

interface FillInFormType {
  mode: `photography` | `videography` | `success` | `error`;
  // children: ReactNode;
}

// @ts-ignore
function FillInForm({ mode }: FillInFormType) {
  return (
    <div className={`pt-8 px-5`}>
      <Heading heading={(
        <>
          <HighlightLetter text={`L`} />et’s fill in the form!
        </>
      )} />
      <div className={`grid grid-cols-2 mt-12`}>
        <div>
          <Input placeholder={`e.g. Jane Doe`} label={`your initials`} name={`initials`} />
        </div>
      </div>
    </div>
  );
}

export default FillInForm;