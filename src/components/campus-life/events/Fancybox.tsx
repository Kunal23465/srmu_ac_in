import { useRef, useEffect, PropsWithChildren } from "react";
import type { OptionsType } from "@fancyapps/ui/dist/fancybox/index";

const FANCYBOX_STYLE_ID = "fancybox-inline-styles";




interface Props {
    options?: Partial<OptionsType>;
    delegate?: string;
}

function Fancybox(props: PropsWithChildren<Props>) {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        let cleanup: (() => void) | undefined;
        let isMounted = true;

        const delegate = props.delegate || '[data-fancybox]';
        const options = props.options || {};

        const loadFancybox = async () => {
            const [{ Fancybox: NativeFancybox }, fancyboxStylesModule] = await Promise.all([
                import("@fancyapps/ui/dist/fancybox/"),
                import("@fancyapps/ui/dist/fancybox/fancybox.css?inline"),
            ]);

            if (!isMounted || !container) {
                return;
            }

            const existingStyle = document.getElementById(FANCYBOX_STYLE_ID);

            if (!existingStyle) {
                const styleElement = document.createElement("style");
                styleElement.id = FANCYBOX_STYLE_ID;
                styleElement.textContent = fancyboxStylesModule.default;
                document.head.appendChild(styleElement);
            }

            NativeFancybox.bind(container, delegate, options);

            cleanup = () => {
                NativeFancybox.unbind(container);
                NativeFancybox.close();
            };
        };

        void loadFancybox();

        return () => {
            isMounted = false;
            cleanup?.();
        };
    }, [props.delegate, props.options]);

    return <div ref={containerRef}>{props.children}</div>;
}

export default Fancybox;
