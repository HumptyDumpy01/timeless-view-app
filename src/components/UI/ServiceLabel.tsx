interface ServiceLabelType {
  number: string;
  label: string;
  // children: ReactNode;
}

function ServiceLabel({ number, label }: ServiceLabelType) {
  return (
    <>
      <div className={`flex items-end gap-5 cursor-pointer`}>
        <span className={`font-lavishlyYours text-6xl text-zinc-500`}>{number}</span>
        <h3 className={`font-italiana text-6xl uppercase text-zinc-500`}>{label}</h3>
      </div>
    </>
  );
}

export default ServiceLabel;