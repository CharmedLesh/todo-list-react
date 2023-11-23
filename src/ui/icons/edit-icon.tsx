import * as React from 'react';
import type { SVGProps } from 'react';

const SvgEditIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48" {...props}>
        <path fill="none" d="M0 0h48v48H0z" />
        <path d="m30 9.172 6-6L44.828 12l-6 6z" />
        <path d="M27.172 12 4 35.172V44h8.829l26-26L36 20.828z" />
    </svg>
);

export default SvgEditIcon;
