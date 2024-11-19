import ArrowIcon from './ArrowIcon.tsx';

type LinkType = {
  mode?: 'default' | 'highlighted';
  label: string;
  href: string;
  showArrowIcon?: boolean;
  shouldOpenNewTab?: boolean;
}

export default function Link({
                               mode = `default`,
                               label,
                               href,
                               showArrowIcon = false,
                               shouldOpenNewTab = false
                             }: LinkType) {
  const defaultStyles = `flex items-center gap-2`;
  const highlightedStyles = `flex items-center gap-2 border border-zinc-50 py-2 px-5 font-medium group`;

  const chosenStyles = mode === 'highlighted' ? highlightedStyles : defaultStyles;
  // rgb(250, 204, 21)
  return (
    <a target={shouldOpenNewTab ? '_blank' : '_self'} href={href}
       className={`${chosenStyles} transition-all duration-150`}>
      <span className="">{label}</span>
      {showArrowIcon && (
        <ArrowIcon style={`small`} />
      )}
    </a>
  );
}