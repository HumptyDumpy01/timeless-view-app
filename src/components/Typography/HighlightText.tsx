interface HighlightTextTextType {
  text: string;
  // children: ReactNode;
}

function HighlightText({ text }: HighlightTextTextType) {
  return (
    <>
      <span className={`inline-block font-semibold`}>{text}</span>
    </>
  );
}

export default HighlightText;