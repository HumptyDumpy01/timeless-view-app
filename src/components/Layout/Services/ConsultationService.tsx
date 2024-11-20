/* interface ConsultationServiceType {
  // children: ReactNode;
} */

import Input from '../../UI/Input.tsx';
import FormButton from '../../UI/FormButton.tsx';
import { FormEvent, useState } from 'react';
import { consultationFormSchema } from '../../../../utils/schemas.ts';
import scrollTo from '../../../../utils/functions/scrollTo.ts';

function ConsultationService(/*{  }: ConsultationServiceType*/) {
  const [formStage, setFormStage] = useState<1 | 2>(1);
  const [errors, setErrors] = useState<string>(``);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    setErrors(``);
    e.preventDefault();
    const currObject = e.currentTarget;
    const formData = new FormData(currObject);
    const results = Object.fromEntries(formData.entries()) as { name: string, email: string, phone: string };

    const validateForm = consultationFormSchema.safeParse(results);

    if (!validateForm.success) {
      setErrors(validateForm.error.errors[0].message);
      return;
    }
    setErrors(``);
    setFormStage(2);

    scrollTo(`myServices`);

    /* TODO: USE RESEND PLATFORM TO SEND A MESSAGE TO MY CLIENT'S EMAIL */

    console.log(validateForm.data);

  }


  const firstFormStage = (
    <>
      <div className={`flex flex-col gap-12 mb-20 w-full`}>
        <Input name={`name`} label={`your name`} placeholder={`e.g. Jane Doe`} />
        <Input name={`email`} label={`your email`} placeholder={`e.g. jane.doe@gmail.com`} />
        <Input type={`number`} name={`phone`} label={`your phone`} placeholder={`Your Phone`} />
      </div>
      <div className={`mb-28`}>
        <FormButton label={`consult me`} />
      </div>
    </>
  );

  const secondFormStage = (
    <>
      <div className={`text-amber-400 text-lg`}>Thank you for reaching out to me! I will get back to you as soon as
        possible.
      </div>
    </>
  );


  return (
    <>
      {errors && <div className={`text-red-500 text-lg mb-4`}>{errors}</div>}
      <form onSubmit={handleSubmit} className={`pr-4 sm:pr-0`}>
        {formStage === 1 && firstFormStage}
        {formStage === 2 && secondFormStage}
      </form>
    </>
  );
}

export default ConsultationService;