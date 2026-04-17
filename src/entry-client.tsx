import { hydrateRoot } from "react-dom/client";
import { BrowserRouter, matchRoutes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { createStore } from "./store";
import App from "./App";
import { routes } from "./utils/AllRoutesNew";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("Root element not found");
}

// Get preloaded state from server
const preloadedState = (window as any).__PRELOADED_STATE__ || {};
delete (window as any).__PRELOADED_STATE__;

const store = createStore(preloadedState);

const getRouteElementPreload = (route: { element?: { type?: { preload?: () => Promise<unknown> } } }) => {
    const preload = route.element?.type?.preload;
    return typeof preload === "function" ? preload : null;
};

const preloadMatchedRouteComponents = async () => {
    const normalizedPathname = window.location.pathname.replace(/\/+$/, "") || "/";
    const matches = matchRoutes(routes, normalizedPathname) || [];
    const preloaders = matches
        .map((match) => getRouteElementPreload(match.route as { element?: { type?: { preload?: () => Promise<unknown> } } }))
        .filter((preload): preload is () => Promise<unknown> => Boolean(preload));

    if (preloaders.length === 0) {
        return;
    }

    await Promise.allSettled(preloaders.map((preload) => preload()));
};

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
                <BrowserRouter
                    future={{
                        v7_startTransition: true,
                        v7_relativeSplatPath: true,
                    }}
                >
                    <App />
                </BrowserRouter>
            </Provider>
        </HelmetProvider>
    );
};

const bootstrap = async () => {
    await preloadMatchedRouteComponents();

    try {
        hydrateRoot(rootElement, <AppReady />);
    } catch (error) {
        // Fallback to createRoot if hydration fails
        import("react-dom/client").then(({ createRoot }) => {
            const root = createRoot(rootElement);
            root.render(<AppReady />);
        });
    }
};

bootstrap();
