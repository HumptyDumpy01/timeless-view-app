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
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" fill="none"
             className="group-hover:stroke-yellow-400">
          <g clipPath="url(#clip0_202_2658)">
            <path d="M2.99996 6L14.6664 6" stroke="white" strokeWidth="1.33331" strokeLinecap="round"
                  strokeLinejoin="round" />
            <path d="M10.3332 10.6661L14.9998 5.99958L10.3332 1.33301" stroke="white" strokeWidth="1.33331"
                  strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_202_2658">
              <rect width="12" height="16" fill="white" transform="translate(16.5) rotate(90)" />
            </clipPath>
          </defs>
        </svg>
      )}
    </a>
  );
}