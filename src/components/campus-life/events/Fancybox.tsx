import { useRef, useEffect, PropsWithChildren } from 'react';

import { OptionsType } from "@fancyapps/ui/dist/fancybox/index"
import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';




interface Props {
    options?: Partial<OptionsType>;
    delegate?: string;
}

function Fancybox(props: PropsWithChildren<Props>) {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        const delegate = props.delegate || '[data-fancybox]';
        const options = props.options || {};
        // @ts-ignore
        NativeFancybox.bind(container, delegate, options);

        return () => {
            NativeFancybox.unbind(container);
            NativeFancybox.close();
        };
    });

    return <div ref={containerRef}>{props.children}</div>;
}

export default Fancybox;
