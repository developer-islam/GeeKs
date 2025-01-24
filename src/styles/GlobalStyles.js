// Libraries.
import { createGlobalStyle } from "styled-components";

// Styles.
const GlobalStyles = createGlobalStyle`
/************************
* Custom property.      *
************************/
:root {
 /* ------------------- Website color. ------------------- */
 /* Indigo. */
 --clr-brand-50: #eef2ff;
 --clr-brand-100: #e0e7ff;
 --clr-brand-200: #c7d2fe;
 --clr-brand-500: #6366f1;
 --clr-brand-600: #4f46e5;
 --clr-brand-700: #4338ca;
 --clr-brand-800: #3730a3;
 --clr-brand-900: #312e81;
 --clr-brand-950: #1e1b4b;
 /* Grey. */
 --clr-grey-0: #fff;
 --clr-grey-50: #f9fafb;
 --clr-grey-100: #f3f4f6;
 --clr-grey-200: #e5e7eb;
 --clr-grey-300: #d1d5db;
 --clr-grey-400: #9ca3af;
 --clr-grey-500: #6b7280;
 --clr-grey-600: #4b5563;
 --clr-grey-700: #374151;
 --clr-grey-800: #1f2937;
 --clr-grey-900: #111827;
 --clr-grey-950: #030712;
 /* Other colors. */
 --clr-blue-100: #e0f2fe;
 --clr-blue-700: #0369a1;
 --clr-green-100: #dcfce7;
 --clr-green-700: #15803d;
 --clr-yellow-100: #fef9c3;
 --clr-yellow-700: #a16207;
 --clr-silver-100: #e5e7eb;
 --clr-silver-700: #374151;
 --clr-indigo-100: #e0e7ff;
 --clr-indigo-700: #4338ca;
 /* Warnings colors. */
 --clr-red-100: #fee2e2;
 --clr-red-700: #b91c1c;
 --clr-red-800: #991b1b;
 /* Backdrop color. */
 --backdrop-clr: rgba(255, 255, 255, 0.1);
 /* ------------------- Website shadow. ------------------- */
 --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
 --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
 --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
 /* ------------------- Website border radius. ------------------- */
 --border-radius-tiny: 3px;
 --border-radius-sm: 5px;
 --border-radius-md: 7px;
 --border-radius-lg: 9px;
 /* ------------------- For dark mode. ------------------- */
 --image-grayscale: 0;
 --image-opacity: 100%;
 /* ------------------- Website font. ------------------- */
 --ff-primary: "Roboto Slab", serif;
 /* ------------------- Body. ------------------- */
 --bg-body: var(--clr-grey-0);
 --clr-body: var(--clr-grey-950);
 --ff-body: var(--ff-primary);
}
/************************
* Global style.         *
************************/
*,
*::before,
*::after {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}
html {
 font-size: 62.5%;
}
body {
 line-height: 1;
 font-weight: 400;
 color: var(--clr-body);
 font-family: var(--ff-body);
 background-color: var(--bg-body);
}
.has-scrollbar::-webkit-scrollbar {
 width: 10px; /* for vertical scroll. */
 height: 10px; /* for horizontal scroll. */
}
.has-scrollbar::-webkit-scrollbar-thumb {
 background: hsl(0, 0%, 90%);
 border: 2px solid #fff;
 -webkit-border-radius: 20px;
 border-radius: 20px;
}
.has-scrollbar::-webkit-scrollbar-track {
 background: hsl(0, 0%, 99%);
}
.has-scrollbar::-webkit-scrollbar-thumb:hover {
 background: hsl(0, 0%, 80%);
}
p {
 hyphens: auto;
 overflow-wrap: break-word;
}
img {
 max-width: 100%;
 /* For dark mode */
 filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}
a {
 color: inherit;
 text-decoration: none;
}
ul {
 list-style: none;
}
*:disabled {
 cursor: not-allowed;
}
input {
 outline: none;
 border: none;
}
input,
textarea,
select ,
::placeholder {
 color: inherit;
 font-family: inherit;
}
select:disabled,
input:disabled {
 color: var(--clr-grey-500);
 background-color: var(--clr-grey-200);
}
::placeholder {
 transition: color 0.4s;
}
input:focus::placeholder {
 color: transparent;
}
.container {
 padding: 0 16px;
 margin: 0 auto;
 max-width: 1300px;
}

/*
FOR DARK MODE

--color-grey-0: #18212f;
--color-grey-50: #111827;
--color-grey-100: #1f2937;
--color-grey-200: #374151;
--color-grey-300: #4b5563;
--color-grey-400: #6b7280;
--color-grey-500: #9ca3af;
--color-grey-600: #d1d5db;
--color-grey-700: #e5e7eb;
--color-grey-800: #f3f4f6;
--color-grey-900: #f9fafb;

--color-blue-100: #075985;
--color-blue-700: #e0f2fe;
--color-green-100: #166534;
--color-green-700: #dcfce7;
--color-yellow-100: #854d0e;
--color-yellow-700: #fef9c3;
--color-silver-100: #374151;
--color-silver-700: #f3f4f6;
--color-indigo-100: #3730a3;
--color-indigo-700: #e0e7ff;

--color-red-100: #fee2e2;
--color-red-700: #b91c1c;
--color-red-800: #991b1b;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;
*/
`;

export default GlobalStyles;
