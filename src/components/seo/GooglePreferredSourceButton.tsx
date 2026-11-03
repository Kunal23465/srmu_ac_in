import { useEffect } from "react";
import Classes from "../../utils/styles/Global.module.css";

const preferredSourceScriptUrl = "https://news.google.com/swg/js/v1/publisher.js";

export default function GooglePreferredSourceButton() {
    useEffect(() => {
        const alreadyLoaded = Array.from(document.scripts).some((script) => script.src === preferredSourceScriptUrl);
        if (alreadyLoaded) return;

        const script = document.createElement("script");
        script.async = true;
        script.src = preferredSourceScriptUrl;
        document.head.appendChild(script);
    }, []);

    return (
        <div className="border-t border-white/10 bg-[#14284E] py-4 text-white">
            <div className={`${Classes["container"]} flex flex-col items-center justify-center gap-3 px-4 text-center sm:flex-row sm:justify-between sm:text-left`}>
                <p className="m-0 text-sm font-semibold">Add SRMU as a preferred source on Google</p>
                <div google-add-preferred-source-btn="" data-theme="dark" data-lang="en" />
            </div>
        </div>
    );
}
