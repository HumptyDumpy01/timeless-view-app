interface ArrowIconType {
  style: `small` | `large`;
  // children: ReactNode;
}

function ArrowIcon({ style }: ArrowIconType) {
  const smallArrow = (
    <>
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
    </>
  );

  const largeIcon = (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
        <path d="M4.25031 15.0011L26.1252 15.0011" stroke="white" stroke-width="2.49999" stroke-linecap="round"
              stroke-linejoin="round" />
        <path d="M18 23.7508L26.75 15.0008L18 6.25085" stroke="white" stroke-width="2.49999"
              stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </>
  );

  const content = style === `small` ? smallArrow : largeIcon;

  return (
    <>
      {content}
    </>
  );
}

export default ArrowIcon;