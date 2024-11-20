interface FormButtonType {
  label: string;
  // children: ReactNode;
}

function FormButton({ label }: FormButtonType) {
  return (
    <>
      <button className={`uppercase font-federo text-3xl border border-zinc-50 px-32 py-7`}>{label}</button>
    </>
  );
}

export default FormButton;