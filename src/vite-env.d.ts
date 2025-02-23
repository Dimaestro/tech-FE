/// <reference types="vite/client" />
declare module '@/*';

declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}

declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
}

declare module '*.svg' {
    import * as React from 'react';
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const content: string;
    export default content;
}

declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.jpg' {
    const value: string;
    export default value;
}

declare module '*.woff2' {
    const value: string;
    export default value;
}
