/* interface ConsultationServiceType {
  // children: ReactNode;
} */

import Input from '../../UI/Input.tsx';
import FormButton from '../../UI/FormButton.tsx';

function ConsultationService(/*{  }: ConsultationServiceType*/) {
  return (
    <form>
      <div className={`flex flex-col gap-12 mb-20`}>
        <Input name={`name`} label={`your name`} placeholder={`e.g. Jane Doe`} />
        <Input name={`email`} label={`your email`} placeholder={`e.g. jane.doe@gmail.com`} />
        <Input name={`phone`} label={`your phone`} placeholder={`Your Phone`} />
      </div>
      <div className={`mb-28`}>
        <FormButton label={`consult me`} />
      </div>
    </form>
  );
}

export default ConsultationService;