interface FormButtonType {
  label: string;
  // children: ReactNode;
}

function FormButton({ label }: FormButtonType) {
  return (
    <>
      <button
        className={`uppercase font-federo text-nowrap sm:text-3xl text-2xl border border-zinc-50 sm:px-32 py-7 sm:w-fit w-full`}>{label}</button>
    </>
  );
}

export default FormButton;