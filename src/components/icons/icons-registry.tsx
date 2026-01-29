import type { SVGProps, ReactElement } from "react";

/**
 * Props for all icon components
 */
export type IconProps = SVGProps<SVGSVGElement>;

/**
 * Type for an icon component function
 */
export type IconComponent = (props: IconProps) => ReactElement;

/**
 * Registry of all available icons stored as JSX components
 * Add new icons here as key-value pairs
 */
export const iconsRegistry = {
	shortLogo: (props: IconProps) => (
		<svg
			viewBox="0 0 44 44"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<mask
				id="mask0_6154_39896"
				style={{ maskType: "alpha" }}
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="44"
				height="44"
			>
				<rect width="44" height="44" className="fill-primary" />
			</mask>
			<g mask="url(#mask0_6154_39896)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M14.0647 12.9171L11.6421 11.5174L2.56844 16.7599V27.2467L11.6421 32.4893L20.7158 27.2467V16.0188C20.7158 15.5601 20.9604 15.1363 21.3575 14.9068L31.7154 8.92226C32.1129 8.69258 32.6028 8.69258 33.0004 8.92226L43.3582 14.9068C43.7554 15.1363 44 15.5601 44 16.0188V27.9879C44 28.4466 43.7554 28.8704 43.3582 29.0999L33.0004 35.0844C32.6028 35.3141 32.1129 35.3141 31.7154 35.0844L28.5666 33.2651C28.154 33.5196 27.6679 33.6664 27.1476 33.6664C25.6525 33.6664 24.4404 32.4544 24.4404 30.9593C24.4404 29.4641 25.6525 28.2521 27.1476 28.2521C28.6427 28.2521 29.8547 29.4641 29.8547 30.9593C29.8547 30.987 29.8543 31.0147 29.8534 31.0423L32.3579 32.4893L41.4316 27.2467V16.7599L32.3579 11.5174L23.2842 16.7599V27.9879C23.2842 28.4466 23.0396 28.8704 22.6425 29.0999L12.2846 35.0844C11.8871 35.3141 11.3972 35.3141 10.9997 35.0844L0.641757 29.0999C0.244617 28.8704 0 28.4466 0 27.9879V16.0188C0 15.5601 0.244616 15.1363 0.641756 14.9068L10.9997 8.92226C11.3972 8.69258 11.8871 8.69258 12.2846 8.92226L15.3906 10.7169C15.7943 10.4776 16.2655 10.3403 16.7687 10.3403C18.2638 10.3403 19.4759 11.5523 19.4759 13.0474C19.4759 14.5425 18.2638 15.7545 16.7687 15.7545C15.2736 15.7545 14.0616 14.5425 14.0616 13.0474C14.0616 13.0037 14.0627 12.9603 14.0647 12.9171Z"
					className="fill-primary"
				/>
			</g>
		</svg>
	),

	file: (props: IconProps) => (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-7-7z"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M13 2v7h7"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	),

	globe: (props: IconProps) => (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM3.64506 8.64769C3.22896 9.68376 3 10.8151 3 12C3 12.6299 3.06471 13.2447 3.18786 13.8381C4.15716 14.3465 5.17546 14.7734 6.23385 15.1101C6.08126 14.123 5.99986 13.0788 5.99986 12.0004C5.99986 11.3391 6.03047 10.6911 6.08922 10.0616C5.22511 9.66992 4.40699 9.19519 3.64506 8.64769ZM4.60385 6.87053C5.16606 7.29259 5.76539 7.66765 6.39597 7.98992C6.70469 6.4924 7.18552 5.14026 7.80779 4.03394C6.52548 4.71017 5.42625 5.68694 4.60385 6.87053ZM11.7563 3.00323L11.7588 3.0192C11.1109 3.12072 10.3472 3.67034 9.64267 4.85579C9.05076 5.85176 8.56855 7.19239 8.28301 8.76387C9.455 9.13387 10.7034 9.3337 11.9999 9.3337L12.0013 9.3337C13.2717 9.33553 14.524 9.14041 15.7167 8.76382C15.4311 7.19237 14.9489 5.85175 14.357 4.8558C13.6525 3.67035 12.8888 3.12072 12.2409 3.0192L12.2434 3.00323C12.1625 3.00108 12.0814 3 12 3C11.9185 3 11.8373 3.00108 11.7563 3.00323ZM16.1918 4.03372C16.8142 5.1402 17.2951 6.49258 17.6038 7.99039C18.2298 7.67081 18.8297 7.29674 19.3964 6.87091C18.5739 5.68702 17.4744 4.71002 16.1918 4.03372ZM20.3552 8.64822C19.5858 9.20131 18.7666 9.67413 17.9105 10.0618C17.9692 10.6913 17.9998 11.3392 17.9998 12.0004C17.9998 13.0787 17.9185 14.1228 17.7659 15.1098C18.8132 14.7765 19.8327 14.3515 20.8122 13.8379C20.9353 13.2446 21 12.6298 21 12C21 10.8153 20.7711 9.68415 20.3552 8.64822ZM19.792 16.5068C18.9707 16.835 18.1302 17.1106 17.2758 17.332C16.9917 18.3009 16.6279 19.1915 16.1924 19.966C17.6932 19.1745 18.9431 17.9713 19.792 16.5068ZM12.2833 20.9956L12.2796 20.975C12.8134 20.8778 13.4259 20.4787 14.0266 19.6495C14.3894 19.1486 14.7241 18.5214 15.0109 17.787C14.0167 17.9301 13.0102 18.0019 11.9991 18.0004C10.9772 18.0003 9.97198 17.9273 8.98838 17.786C9.27532 18.5208 9.61008 19.1483 9.97308 19.6494C10.5738 20.4787 11.1863 20.8778 11.7201 20.975L11.7164 20.9956C11.8106 20.9985 11.9051 21 12 21C12.0948 21 12.1892 20.9985 12.2833 20.9956ZM7.8072 19.9657C7.37176 19.1914 7.00799 18.3008 6.72394 17.3319C5.86269 17.1091 5.0229 16.8329 4.20826 16.5073C5.05709 17.9715 6.30679 19.1744 7.8072 19.9657ZM8.36436 15.6532C9.54033 15.881 10.7556 16.0004 11.9999 16.0004L12.0014 16.0004C13.2257 16.0023 14.4425 15.8853 15.6352 15.6537C15.8689 14.5373 15.9998 13.3027 15.9998 12.0004C15.9998 11.586 15.9866 11.1783 15.961 10.7789C14.6826 11.146 13.3496 11.3356 11.9991 11.3337C10.6265 11.3336 9.2975 11.1402 8.03875 10.7789C8.01311 11.1783 7.99986 11.586 7.99986 12.0004C7.99986 13.3025 8.13074 14.5369 8.36436 15.6532Z"
				fill="currentColor"
			/>
		</svg>
	),

	window: (props: IconProps) => (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<rect
				x="3"
				y="3"
				width="18"
				height="18"
				rx="2"
				stroke="currentColor"
				strokeWidth="2"
			/>
			<path d="M3 9h18" stroke="currentColor" strokeWidth="2" />
			<circle cx="6" cy="6" r="1" fill="currentColor" />
			<circle cx="9" cy="6" r="1" fill="currentColor" />
		</svg>
	),

	chevronRight: (props: IconProps) => (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M9 18l6-6-6-6"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	),

	chevronLeft: (props: IconProps) => (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M15 18l-6-6 6-6"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	),

	check: (props: IconProps) => (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M20 6L9 17l-5-5"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	),

	close: (props: IconProps) => (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M18 6L6 18M6 6l12 12"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	),

	menu: (props: IconProps) => (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M2 5H22V7H2V5Z" fill="currentColor" />
			<path d="M2 11H22V13H2V11Z" fill="currentColor" />
			<path d="M2 17H22V19H2V17Z" fill="currentColor" />
		</svg>
	),

	bell: (props: IconProps) => (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M22.2668 17.3607L21.5 19H16C16 21.2091 14.2091 23 12 23C9.79083 23 7.99997 21.2091 7.99997 19H2.50005L1.73321 17.3607C1.73193 17.3597 1.73189 17.3597 1.73186 17.3598L1.73044 17.3615L1.72974 17.3623L1.74072 17.3485C1.75242 17.3335 1.77263 17.3072 1.80018 17.2695C1.85528 17.1941 1.93965 17.0732 2.04376 16.9069C2.252 16.5742 2.53899 16.0603 2.82894 15.3651C3.40784 13.9771 4.0023 11.8579 3.99997 9.00125C3.99997 9.00111 3.99997 9.00139 3.99997 9.00125L3.99992 8.97328C4.01436 4.56725 7.59052 1 11.9999 1C16.4087 1 19.9845 4.56636 19.9998 8.97163L19.9998 8.97333M5.99993 8.97739L5.99997 8.99826C6.00259 12.1414 5.34712 14.523 4.67483 16.1349C4.54189 16.4537 4.40844 16.742 4.2795 17H19.7205C19.5915 16.742 19.4581 16.4537 19.3251 16.1349C18.653 14.5235 17.9977 12.1438 18 9.00203L17.9999 8.98157L17.9999 8.97987C17.989 5.67546 15.3069 3 11.9999 3C8.69371 3 6.01208 5.67412 5.99993 8.97739ZM19.9998 8.97333L20 9.00084C19.9976 11.8577 20.5921 13.977 21.171 15.3651C21.461 16.0603 21.748 16.5742 21.9562 16.9069C22.0604 17.0732 22.1447 17.1941 22.1998 17.2695C22.2274 17.3072 22.2476 17.3335 22.2593 17.3485L22.2696 17.3615L22.2687 17.3604C22.2686 17.3604 22.2681 17.3597 22.2668 17.3607M9.99997 19C9.99997 20.1046 10.8954 21 12 21C13.1045 21 14 20.1046 14 19H9.99997Z"
				fill="currentColor"
			/>
			<path
				d="M22.2707 17.3628C22.2711 17.3634 22.2714 17.3637 22.2707 17.3628V17.3628Z"
				fill="currentColor"
			/>
		</svg>
	),

	arrowUpRight: (props: IconProps) => (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M6.99991 6H17.9999V17H15.9999V9.41421L6.99991 18.4142L5.58569 17L14.5857 8H6.99991V6Z"
				fill="currentColor"
			/>
		</svg>
	),

	refresh: (props: IconProps) => (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M12 3C7.02944 3 3 7.02944 3 12V13H1V12C1 5.92487 5.92487 1 12 1C15.7216 1 19.01 2.84804 21 5.67419V2H23V9H16V7H19.4847C17.8694 4.58695 15.1193 3 12 3Z"
				fill="currentColor"
			/>
			<path
				d="M22.9999 11V12C22.9999 18.0751 18.0751 23 11.9999 23C8.27841 23 4.99001 21.152 3 18.3259V22H1V15H8V17H4.51525C6.1305 19.413 8.88069 21 11.9999 21C16.9705 21 20.9999 16.9706 20.9999 12V11H22.9999Z"
				fill="currentColor"
			/>
		</svg>
	),

	arrowLeftTray: (props: IconProps) => (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M21.9999 2H10.9999V4H19.9999V20H10.9999V22H21.9999V2Z"
				fill="currentColor"
			/>
			<path
				d="M6.99991 6.58579L1.58569 12L6.99991 17.4142L8.41412 16L5.4173 13.0032L17.0002 12.9997L16.9996 10.9997L5.41093 11.0032L8.41412 8L6.99991 6.58579Z"
				fill="currentColor"
			/>
		</svg>
	),

	penLine: (props: IconProps) => (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M19 0.585938L23.4143 5.00019L5.41426 22.9993H1.00085V18.586L19 0.585938ZM15.5002 6.91448L3.00085 19.4144L3.00086 20.9992L4.58586 20.9993L17.0857 8.50005L15.5002 6.91448ZM18.5 7.08588L16.9143 5.50023L19.0001 3.4144L20.5858 5.00015L18.5 7.08588Z"
				fill="currentColor"
			/>
			<path
				d="M22.9998 23.0002L10.9998 23.0002V21.0002L22.9998 21.0002V23.0002Z"
				fill="currentColor"
			/>
		</svg>
	),

	mail: (props: IconProps) => (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M1 3H23V21H1V3ZM3 5V6.47934L12 12.7793L21 6.47934V5H3ZM21 8.92066L12 15.2207L3 8.92066V19H21V8.92066Z"
				fill="currentColor"
			/>
		</svg>
	),

	phone: (props: IconProps) => (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M1 1H7.8198L9.08554 7.32867L6.41389 10.0003C7.44973 13.6627 10.3373 16.5503 13.9997 17.5861L16.6713 14.9145L23 16.1802V23H17C8.16344 23 1 15.8366 1 7V1ZM3 3V7C3 14.732 9.26801 21 17 21H21V17.8198L17.3287 17.0855L14.6198 19.7944L14.0803 19.6706C9.24414 18.5604 5.4396 14.7559 4.32939 9.9197L4.20555 9.38024L6.91446 6.67133L6.1802 3H3Z"
				fill="currentColor"
			/>
		</svg>
	),

	locationPin: (props: IconProps) => (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10ZM12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8Z"
				fill="currentColor"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10C21 12.5262 19.8532 14.7402 18.2923 16.767C16.988 18.4607 15.3185 20.1156 13.6508 21.7689C13.3354 22.0816 13.02 22.3943 12.7071 22.7071L12 23.4142L11.2929 22.7071C10.98 22.3942 10.6646 22.0816 10.3492 21.7689C8.68147 20.1156 7.01205 18.4607 5.70772 16.767C4.14683 14.7402 3 12.5262 3 10ZM12 3C8.13401 3 5 6.13401 5 10C5 11.8921 5.85317 13.678 7.29228 15.5467C8.50741 17.1245 10.0627 18.6673 11.7323 20.3233C11.8212 20.4115 11.9105 20.5 12 20.5889C12.0895 20.5 12.1788 20.4115 12.2677 20.3233C13.9373 18.6673 15.4926 17.1245 16.7077 15.5467C18.1468 13.678 19 11.8921 19 10C19 6.13401 15.866 3 12 3Z"
				fill="currentColor"
			/>
		</svg>
	),

	plus: (props: IconProps) => (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M13 4V11H20V13H13V20H11V13H4V11H11V4H13Z"
				fill="currentColor"
			/>
		</svg>
	),

	x: (props: IconProps) => (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M6.00003 4.58594L12 10.5859L18 4.58594L19.4142 6.00015L13.4142 12.0002L19.4142 18.0002L18 19.4144L12 13.4144L6.00003 19.4144L4.58582 18.0002L10.5858 12.0002L4.58582 6.00015L6.00003 4.58594Z"
				fill="currentColor"
			/>
		</svg>
	),

	search: (props: IconProps) => (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<circle
				cx="11"
				cy="11"
				r="8"
				stroke="currentColor"
				strokeWidth="2"
			/>
			<path
				d="M21 21l-4.35-4.35"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	),

	user: (props: IconProps) => (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6C17 8.76142 14.7614 11 12 11C9.23858 11 7 8.76142 7 6ZM12 3C10.3431 3 9 4.34315 9 6C9 7.65685 10.3431 9 12 9C13.6569 9 15 7.65685 15 6C15 4.34315 13.6569 3 12 3Z"
				fill="currentColor"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2 22C2 16.4772 6.47715 12 12 12C17.5228 12 22 16.4772 22 22V23H2V22ZM4.06189 21H19.9381C19.446 17.0537 16.0796 14 12 14C7.92038 14 4.55399 17.0537 4.06189 21Z"
				fill="currentColor"
			/>
		</svg>
	),

	settings: (props: IconProps) => (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<circle
				cx="12"
				cy="12"
				r="3"
				stroke="currentColor"
				strokeWidth="2"
			/>
			<path
				d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	),

	logout: (props: IconProps) => (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<polyline
				points="16,17 21,12 16,7"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<line
				x1="21"
				y1="12"
				x2="9"
				y2="12"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	),

	warning: (props: IconProps) => (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M14.6523 3.31302C13.5216 1.20381 10.4976 1.20273 9.36529 3.31111L1.702 17.581C0.628702 19.5796 2.07644 22.0004 4.34499 22.0004H19.6583C21.9259 22.0004 23.3738 19.5814 22.3024 17.5829L14.6523 3.31302ZM13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9V13C11 13.5523 11.4477 14 12 14C12.5523 14 13 13.5523 13 13V9ZM12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18H12.01C12.5623 18 13.01 17.5523 13.01 17C13.01 16.4477 12.5623 16 12.01 16H12Z"
				fill="currentColor"
			/>
		</svg>
	),

	key: (props: IconProps) => (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M14.9998 7H17.0098V9H14.9998V7Z" fill="currentColor" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8.99976 8C8.99976 4.13401 12.1338 1 15.9998 1C19.8657 1 22.9998 4.13401 22.9998 8C22.9998 11.866 19.8657 15 15.9998 15C15.5077 15 15.0267 14.9491 14.562 14.852L12.414 17H10.9998V19H8.99976V21H6.99976V23H0.999756V17.5858L9.14776 9.43778C9.05068 8.97307 8.99976 8.49204 8.99976 8ZM8.99976 17V15H11.5855L13.9734 12.6121L14.5469 12.7859C15.0054 12.9249 15.4929 13 15.9998 13C18.7612 13 20.9998 10.7614 20.9998 8C20.9998 5.23858 18.7612 3 15.9998 3C13.2383 3 10.9998 5.23858 10.9998 8C10.9998 8.50683 11.0748 8.99431 11.2138 9.45287L11.3876 10.0263L2.99976 18.4142V21H4.99976V19H6.99976V17H8.99976Z"
				fill="currentColor"
			/>
		</svg>
	),
	clipboardText: (props: IconProps) => (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M7 11H12V13H7V11Z" fill="currentColor" />
			<path d="M7 15H17V17H7V15Z" fill="currentColor" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8.58579 1H15.4142L17 2.58579V3H21V23H3V3H7V2.58579L8.58579 1ZM7 5H5V21H19V5H17V7H7V5ZM15 3.41421L14.5858 3H9.41421L9 3.41421V5H15V3.41421Z"
				fill="currentColor"
			/>
		</svg>
	),
	grid: (props: IconProps) => (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2 2H11V11.2657H2V2ZM4 4V9.26573H9V4H4Z"
				fill="currentColor"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M13 2H22V11H13V2ZM15 4V9H20V4H15Z"
				fill="currentColor"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2 13H11V22H2V13ZM4 15V20H9V15H4Z"
				fill="currentColor"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M13 13H22V22H13V13ZM15 15V20H20V15H15Z"
				fill="currentColor"
			/>
		</svg>
	),
	grublock: (props: IconProps) => (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M6 22C5.45 22 4.97917 21.8042 4.5875 21.4125C4.19583 21.0208 4 20.55 4 20V10C4 9.45 4.19583 8.97917 4.5875 8.5875C4.97917 8.19583 5.45 8 6 8H7V6C7 4.61667 7.4875 3.4375 8.4625 2.4625C9.4375 1.4875 10.6167 1 12 1C13.3833 1 14.5625 1.4875 15.5375 2.4625C16.5125 3.4375 17 4.61667 17 6V8H18C18.55 8 19.0208 8.19583 19.4125 8.5875C19.8042 8.97917 20 9.45 20 10V20C20 20.55 19.8042 21.0208 19.4125 21.4125C19.0208 21.8042 18.55 22 18 22H6ZM12 17C12.55 17 13.0208 16.8042 13.4125 16.4125C13.8042 16.0208 14 15.55 14 15C14 14.45 13.8042 13.9792 13.4125 13.5875C13.0208 13.1958 12.55 13 12 13C11.45 13 10.9792 13.1958 10.5875 13.5875C10.1958 13.9792 10 14.45 10 15C10 15.55 10.1958 16.0208 10.5875 16.4125C10.9792 16.8042 11.45 17 12 17ZM9 8H15V6C15 5.16667 14.7083 4.45833 14.125 3.875C13.5417 3.29167 12.8333 3 12 3C11.1667 3 10.4583 3.29167 9.875 3.875C9.29167 4.45833 9 5.16667 9 6V8Z"
				fill="currentColor"
			/>
		</svg>
	),
	questionCircle: (props: IconProps) => (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M11.9564 8C11.1337 8 10.44 8.56264 10.2436 9.32561L9.99433 10.2941L8.05745 9.79553L8.30671 8.8271C8.725 7.20194 10.1991 6 11.9564 6C14.0377 6 15.7249 7.6872 15.7249 9.76847C15.7249 10.8994 15.1864 11.6577 14.5733 12.2541C14.3129 12.5074 14.0161 12.7535 13.7374 12.9845C13.7055 13.0109 13.6739 13.0371 13.6426 13.0631C13.3253 13.3267 13.0123 13.5915 12.7027 13.8973L11.9912 14.6L10.5858 13.1769L11.2973 12.4742C11.6725 12.1037 12.0425 11.7923 12.3645 11.5248C12.3947 11.4997 12.4243 11.4751 12.4534 11.451C12.7454 11.2087 12.9788 11.015 13.1787 10.8205C13.5857 10.4246 13.7249 10.1505 13.7249 9.76847C13.7249 8.79177 12.9331 8 11.9564 8Z"
				fill="currentColor"
			/>
			<path d="M10.97 16H12.98V18H10.97V16Z" fill="currentColor" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z"
				fill="currentColor"
			/>
		</svg>
	),
	teamMember: (props: IconProps) => (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2.99978 5C2.99978 3.34315 4.34292 2 5.99978 2C7.65663 2 8.99978 3.34315 8.99978 5C8.99978 6.65685 7.65663 8 5.99978 8C4.34292 8 2.99978 6.65685 2.99978 5ZM5.99978 4C5.44749 4 4.99978 4.44772 4.99978 5C4.99978 5.55228 5.44749 6 5.99978 6C6.55206 6 6.99978 5.55228 6.99978 5C6.99978 4.44772 6.55206 4 5.99978 4Z"
				fill="currentColor"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M14.9998 5C14.9998 3.34315 16.3429 2 17.9998 2C19.6566 2 20.9998 3.34315 20.9998 5C20.9998 6.65685 19.6566 8 17.9998 8C16.3429 8 14.9998 6.65685 14.9998 5ZM17.9998 4C17.4475 4 16.9998 4.44772 16.9998 5C16.9998 5.55228 17.4475 6 17.9998 6C18.5521 6 18.9998 5.55228 18.9998 5C18.9998 4.44772 18.5521 4 17.9998 4Z"
				fill="currentColor"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7.99972 12C7.99972 9.79086 9.79058 8 11.9997 8C14.2089 8 15.9997 9.79086 15.9997 12C15.9997 14.2091 14.2089 16 11.9997 16C9.79058 16 7.99972 14.2091 7.99972 12ZM11.9997 10C10.8952 10 9.99972 10.8954 9.99972 12C9.99972 13.1046 10.8952 14 11.9997 14C13.1043 14 13.9997 13.1046 13.9997 12C13.9997 10.8954 13.1043 10 11.9997 10Z"
				fill="currentColor"
			/>
			<path
				d="M1.20028 11.3988C2.29326 9.94409 4.03641 9 5.99978 9H6.99978V11H5.99978C4.69194 11 3.53075 11.6266 2.79927 12.6002L2.1986 13.3997L0.599609 12.1983L1.20028 11.3988Z"
				fill="currentColor"
			/>
			<path
				d="M16.9998 9H17.9998C19.9634 9 21.7068 9.94434 22.7997 11.3994L23.4003 12.199L21.8012 13.4001L21.2006 12.6006C20.4691 11.6268 19.3078 11 17.9998 11H16.9998V9Z"
				fill="currentColor"
			/>
			<path
				d="M5.43344 20.4279C6.87739 18.3578 9.27952 17 11.9989 17C14.7184 17 17.1205 18.3578 18.5644 20.4279L19.1365 21.2481L17.4962 22.3923L16.9241 21.5721C15.8381 20.0152 14.037 19 11.9989 19C9.96086 19 8.15976 20.0152 7.07381 21.5721L6.50171 22.3923L4.86134 21.2481L5.43344 20.4279Z"
				fill="currentColor"
			/>
		</svg>
	),
	box: (props: IconProps) => (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M8 8V5H10V8H8ZM8 17V12H10V17H8ZM6 22C5.45 22 4.97917 21.8042 4.5875 21.4125C4.19583 21.0208 4 20.55 4 20V4C4 3.45 4.19583 2.97917 4.5875 2.5875C4.97917 2.19583 5.45 2 6 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V20C20 20.55 19.8042 21.0208 19.4125 21.4125C19.0208 21.8042 18.55 22 18 22H6ZM6 20H18V11H6V20ZM6 9H18V4H6V9Z"
				fill="currentColor"
			/>
		</svg>
	),
	arrowNarrowLeft: (props: IconProps) => (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M7.9999 6.58594L2.58569 12.0002L7.99991 17.4144L9.41412 16.0001L6.41412 13.0002L20.9999 13.0002V11.0002L6.41412 11.0002L9.41412 8.00015L7.9999 6.58594Z"
				fill="currentColor"
			/>
		</svg>
	),
} as const;

/**
 * Type representing all available icon names
 * This is automatically derived from the iconsRegistry keys
 */
export type IconName = keyof typeof iconsRegistry;

/**
 * Helper to check if a string is a valid icon name
 */
export function isValidIconName(name: string): name is IconName {
	return name in iconsRegistry;
}

/**
 * Get an icon component by name
 * Returns undefined if the icon doesn't exist
 */
export function getIconByName(name: IconName): IconComponent {
	return iconsRegistry[name];
}

/**
 * Get all available icon names
 */
export function getAvailableIconNames(): IconName[] {
	return Object.keys(iconsRegistry) as IconName[];
}
