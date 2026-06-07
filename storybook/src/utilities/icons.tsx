import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const baseProps = {
    fill: 'none',
    focusable: false,
    viewBox: '0 0 24 24',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true,
} as const;

export const ArrowRightIcon = (props: IconProps) => (
    <svg {...baseProps} {...props}>
        <path
            d="M5 12h14m-5-5 5 5-5 5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
    </svg>
);

export const ArrowLeftIcon = (props: IconProps) => (
    <svg {...baseProps} {...props}>
        <path
            d="M19 12H5m5-5-5 5 5 5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
    </svg>
);

export const CheckIcon = (props: IconProps) => (
    <svg {...baseProps} {...props}>
        <path
            d="m5 12 4 4L19 6"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
    </svg>
);

export const ChevronDownIcon = (props: IconProps) => (
    <svg {...baseProps} {...props}>
        <path
            d="m6 9 6 6 6-6"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
    </svg>
);

export const CloseIcon = (props: IconProps) => (
    <svg {...baseProps} {...props}>
        <path
            d="m6 6 12 12M18 6 6 18"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
        />
    </svg>
);

export const ExternalLinkIcon = (props: IconProps) => (
    <svg {...baseProps} {...props}>
        <path
            d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6v6M12 12l8-8"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
    </svg>
);

export const InfoIcon = (props: IconProps) => (
    <svg {...baseProps} {...props}>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path d="M12 11v5m0-8h.01" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
);

export const WarningIcon = (props: IconProps) => (
    <svg {...baseProps} {...props}>
        <path
            d="M12 4 3 20h18L12 4Z"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
        />
        <path d="M12 10v4m0 3h.01" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
);

export const SearchIcon = (props: IconProps) => (
    <svg {...baseProps} {...props}>
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
        <path d="m16 16 4 4" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
);

export const UploadIcon = (props: IconProps) => (
    <svg {...baseProps} {...props}>
        <path
            d="M12 16V4m0 0 4 4m-4-4-4 4M5 17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
    </svg>
);

export const SpinnerIcon = (props: IconProps) => (
    <svg {...baseProps} {...props}>
        <path
            d="M21 12a9 9 0 0 1-9 9"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
        />
        <path
            d="M12 3a9 9 0 0 1 9 9"
            stroke="currentColor"
            opacity="0.35"
            strokeLinecap="round"
            strokeWidth="2"
        />
    </svg>
);
