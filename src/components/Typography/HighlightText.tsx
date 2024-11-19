interface HighlightTextTextType {
  text: string;
  highlightColor?: `white` | `yellow`;
  // children: ReactNode;
}

function HighlightText({ text, highlightColor = `white` }: HighlightTextTextType) {
  const colorStyles = highlightColor === `white` ? `text-white` : `text-yellow-500`;
  return (
    <>
      <span className={`font-semibold ${colorStyles}`}>{text}</span>
    </>
  );
}

export default HighlightText;