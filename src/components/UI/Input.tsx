interface InputType {
  placeholder: string;
  label: string;
  name: string;
  required?: boolean;
  // children: ReactNode;
}

function Input({ placeholder, label, name, required = true }: InputType) {
  return (
    <div className="group flex flex-col gap-3">
      <input
        required={required}
        name={name}
        id={name}
        className={`text-3xl bg-zinc-950 pb-6 border-b border-zinc-200 w-full
                    transition-all duration-200 focus:border-amber-400 focus:placeholder-amber-400
                    focus:text-amber-400`}
        type="text"
        placeholder={placeholder}
      />
      <label
        htmlFor={name}
        className={`uppercase transition-all text-sm duration-200 group-focus-within:text-amber-400
        group-focus-within:font-semibold`}
      >
        {label}
      </label>
    </div>
  );
}

export default Input;