import React from 'react';

export const AddIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8V16M8 12H16" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#333333" strokeWidth="1.5"/>
  </svg>
);

export const MinusIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 12H16" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ArrowDownIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6L8 10L12 6" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ArrowRightIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const SendIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.3333 1.66667L9.16667 10.8333M18.3333 1.66667L12.5 18.3333L9.16667 10.8333M18.3333 1.66667L1.66667 7.5L9.16667 10.8333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const AttachmentIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5 9.16667L10.4167 16.25C9.19927 17.4674 7.55039 18.1494 5.83333 18.1494C4.11628 18.1494 2.4674 17.4674 1.25 16.25C0.0326026 15.0326 -0.649414 13.3837 -0.649414 11.6667C-0.649414 9.94961 0.0326026 8.30073 1.25 7.08333L8.33333 0C9.21449 -0.881156 10.4095 -1.38191 11.6567 -1.38191C12.9038 -1.38191 14.0988 -0.881156 14.98 0C15.8611 0.881156 16.3619 2.07616 16.3619 3.32333C16.3619 4.57051 15.8611 5.76551 14.98 6.64667L7.89167 13.735C7.45109 14.1756 6.85359 14.4259 6.23 14.4259C5.60641 14.4259 5.00891 14.1756 4.56833 13.735C4.12776 13.2944 3.87738 12.6969 3.87738 12.0733C3.87738 11.4498 4.12776 10.8523 4.56833 10.4117L11.0833 3.89667" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const UserIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const BooksIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 19V5C3 3.89543 3.89543 3 5 3H9C10.1046 3 11 3.89543 11 5V19M3 19C3 20.1046 3.89543 21 5 21H9C10.1046 21 11 20.1046 11 19M3 19V5M11 19V5M13 5V19C13 20.1046 13.8954 21 15 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H15C13.8954 3 13 3.89543 13 5Z" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const NerdIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#252525" strokeWidth="1.5"/>
    <path d="M8 15C8.5 16.5 10 18 12 18C14 18 15.5 16.5 16 15" stroke="#252525" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="9" cy="10" r="2" stroke="#252525" strokeWidth="1.5"/>
    <circle cx="15" cy="10" r="2" stroke="#252525" strokeWidth="1.5"/>
    <path d="M11 10H13" stroke="#252525" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const BoardIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="14" rx="2" stroke="#252525" strokeWidth="1.5"/>
    <path d="M7 8L10 11L7 14" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 11H17" stroke="#252525" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 21V17" stroke="#252525" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8 21H16" stroke="#252525" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const PeopleIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.16006 10.87C9.06006 10.86 8.94006 10.86 8.83006 10.87C6.45006 10.79 4.56006 8.84 4.56006 6.44C4.56006 3.99 6.54006 2 9.00006 2C11.4501 2 13.4401 3.99 13.4401 6.44C13.4301 8.84 11.5401 10.79 9.16006 10.87Z" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.41 4C18.35 4 19.91 5.57 19.91 7.5C19.91 9.39 18.41 10.93 16.54 11C16.46 10.99 16.37 10.99 16.28 11" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.15997 14.56C1.73997 16.18 1.73997 18.82 4.15997 20.43C6.90997 22.27 11.42 22.27 14.17 20.43C16.59 18.81 16.59 16.17 14.17 14.56C11.43 12.73 6.91997 12.73 4.15997 14.56Z" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.34 20C19.06 19.85 19.74 19.56 20.3 19.13C21.86 17.96 21.86 16.03 20.3 14.86C19.75 14.44 19.08 14.16 18.37 14" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const FacebookIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 16.216C32 7.3796 24.8366 0.216003 16 0.216003C7.16344 0.216003 0 7.3796 0 16.216C0 24.2264 5.85097 30.8674 13.5 32.016V20.841H9.4375V16.216H13.5V12.7035C13.5 8.70101 15.8888 6.49101 19.5434 6.49101C21.294 6.49101 23.125 6.80351 23.125 6.80351V10.7285H21.1075C19.1197 10.7285 18.5 11.9515 18.5 13.206V16.216H22.9375L22.2281 20.841H18.5V32.016C26.149 30.8674 32 24.2264 32 16.216Z" fill="#1D81E2"/>
  </svg>
);

export const LinkedInIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M29.6307 0.216003H2.36016C1.05469 0.216003 0 1.24443 0 2.5178V29.9143C0 31.1877 1.05469 32.216 2.36016 32.216H29.6307C30.9361 32.216 32 31.1877 32 29.9143V2.5178C32 1.24443 30.9361 0.216003 29.6307 0.216003ZM9.50176 27.4432H4.74414V12.2393H9.50176V27.4432ZM7.12295 10.1533C5.59727 10.1533 4.36641 8.92131 4.36641 7.39778C4.36641 5.87424 5.59727 4.64225 7.12295 4.64225C8.64434 4.64225 9.87734 5.87424 9.87734 7.39778C9.87734 8.91918 8.64648 10.1533 7.12295 10.1533ZM27.2746 27.4432H22.5213V20.0522C22.5213 18.2788 22.4891 15.9965 20.0492 15.9965C17.5752 15.9965 17.1955 17.9283 17.1955 19.9256V27.4432H12.4486V12.2393H17.0195V14.3275H17.0838C17.7193 13.1342 19.2664 11.8732 21.5752 11.8732C26.3861 11.8732 27.2746 15.0586 27.2746 19.2168V27.4432Z" fill="#1D81E2"/>
  </svg>
);

export const InstagramIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.0049 8.01599C11.4674 8.01599 7.80494 11.6785 7.80494 16.216C7.80494 20.7535 11.4674 24.416 16.0049 24.416C20.5424 24.416 24.2049 20.7535 24.2049 16.216C24.2049 11.6785 20.5424 8.01599 16.0049 8.01599ZM16.0049 21.5494C13.0737 21.5494 10.6716 19.1541 10.6716 16.216C10.6716 13.2779 13.0668 10.8826 16.0049 10.8826C18.943 10.8826 21.3383 13.2779 21.3383 16.216C21.3383 19.1541 18.9362 21.5494 16.0049 21.5494ZM26.4581 7.68232C26.4581 8.74536 25.6033 9.59356 24.547 9.59356C23.4839 9.59356 22.6358 8.73877 22.6358 7.68232C22.6358 6.62588 23.4905 5.77109 24.547 5.77109C25.6033 5.77109 26.4581 6.62588 26.4581 7.68232ZM31.8758 9.62002C31.7542 7.09341 31.1787 4.85775 29.3655 3.05109C27.5589 1.24443 25.3233 0.668955 22.7967 0.540658C20.1884 0.39258 11.8146 0.39258 9.20635 0.540658C6.68633 0.662369 4.45068 1.23784 2.63741 3.04451C0.824145 4.85117 0.255244 7.08683 0.127002 9.61345C-0.0210762 12.2216 -0.0210762 20.2036 0.127002 22.8118C0.248658 25.3385 0.824145 27.5741 2.63741 29.3808C4.45068 31.1875 6.67975 31.7629 9.20635 31.8912C11.8146 32.0393 20.1884 32.0393 22.7967 31.8912C25.3233 31.7696 27.5589 31.1941 29.3655 29.3808C31.1722 27.5741 31.7476 25.3385 31.8758 22.8118C32.0239 20.2036 32.0239 12.2282 31.8758 9.62002ZM28.466 25.6385C27.9372 27.0023 26.8873 28.0522 25.517 28.5877C23.4044 29.4094 18.3897 29.2148 16.0049 29.2148C13.6202 29.2148 8.59883 29.4028 6.49287 28.5877C5.12916 28.0588 4.07939 27.009 3.54385 25.6385C2.72221 23.5259 2.91681 18.5112 2.91681 16.1264C2.91681 13.7416 2.72879 8.72026 3.54385 6.61431C4.07272 5.25061 5.12257 4.2008 6.49287 3.66526C8.60541 2.84365 13.6202 3.03818 16.0049 3.03818C18.3897 3.03818 23.411 2.85024 25.517 3.66526C26.8807 4.19419 27.9305 5.24402 28.466 6.61431C29.2877 8.72685 29.0931 13.7416 29.0931 16.1264C29.0931 18.5112 29.2877 23.5325 28.466 25.6385Z" fill="#1D81E2"/>
  </svg>
);

export const TikTokIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.9377 0H17.4877V21.8035C17.4877 24.4191 15.3502 26.5567 12.7345 26.5567C10.1188 26.5567 7.98128 24.4191 7.98128 21.8035C7.98128 19.2366 10.0702 17.1478 12.5884 17.0503V11.5026C7.08128 11.6001 2.58128 16.1487 2.58128 21.8035C2.58128 27.507 7.22878 32 12.7833 32C18.3377 32 22.9852 27.4096 22.9852 21.8035V10.5584C25.0252 12.0191 27.5434 12.8974 30.2077 12.9461V7.39845C26.0202 7.25099 22.9377 4.00519 22.9377 0Z" fill="#1D81E2"/>
  </svg>
);

export const YouTubeIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M31.3311 8.27515C30.9611 6.89115 29.8691 5.79915 28.4851 5.42915C25.9891 4.75195 16.0011 4.75195 16.0011 4.75195C16.0011 4.75195 6.01312 4.75195 3.51712 5.42915C2.13312 5.79915 1.04112 6.89115 0.671123 8.27515C-0.00585938 10.7712 -0.00585938 16.0032 -0.00585938 16.0032C-0.00585938 16.0032 -0.00585938 21.2352 0.671123 23.7312C1.04112 25.1152 2.13312 26.2072 3.51712 26.5772C6.01312 27.2544 16.0011 27.2544 16.0011 27.2544C16.0011 27.2544 25.9891 27.2544 28.4851 26.5772C29.8691 26.2072 30.9611 25.1152 31.3311 23.7312C32.0083 21.2352 32.0083 16.0032 32.0083 16.0032C32.0083 16.0032 32.0083 10.7712 31.3311 8.27515ZM12.8011 20.8032V11.2032L21.1211 16.0032L12.8011 20.8032Z" fill="#1D81E2"/>
  </svg>
);
