import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { createStore } from "./store";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("Root element not found");
}

// Get preloaded state from server
const preloadedState = (window as any).__PRELOADED_STATE__ || {};
delete (window as any).__PRELOADED_STATE__;

const store = createStore(preloadedState);

const revealApp = () => {
    if (typeof document === "undefined") {
        return;
    }

    document.body.classList.add("app-ready");

    const loader = document.getElementById("loader");
    if (loader) {
        loader.parentNode?.removeChild(loader);
    }
};

const AppReady = () => {
    useEffect(() => {
        const finalizeReveal = () => {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    revealApp();
                });
            });
        };

        if (typeof document !== "undefined" && "fonts" in document) {
            (document as Document & {
                fonts?: { ready?: Promise<unknown> };
            }).fonts?.ready?.then(finalizeReveal, finalizeReveal);
            return;
        }

        finalizeReveal();
    }, []);

    return (
        <HelmetProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </HelmetProvider>
    );
};

try {
    hydrateRoot(rootElement, <AppReady />);
} catch (error) {
    // Fallback to createRoot if hydration fails
    import("react-dom/client").then(({ createRoot }) => {
        const root = createRoot(rootElement);
        root.render(<AppReady />);
    });
}
