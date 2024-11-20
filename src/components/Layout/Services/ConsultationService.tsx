/* interface ConsultationServiceType {
  // children: ReactNode;
} */

import Input from '../../UI/Input.tsx';

function ConsultationService(/*{  }: ConsultationServiceType*/) {
  return (
    <form>
      <div className={`flex flex-col gap-12 mb-20`}>
        <Input name={`name`} label={`your name`} placeholder={`e.g. Jane Doe`} />
        <Input name={`email`} label={`your email`} placeholder={`e.g. jane.doe@gmail.com`} />
        <Input name={`phone`} label={`your phone`} placeholder={`Your Phone`} />
      </div>
      <div className={`mb-28`}>
        <button className={`uppercase font-federo text-3xl border border-zinc-50 px-32 py-7`}>consult me</button>
      </div>
    </form>
  );
}

export default ConsultationService;