import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
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

try {
    hydrateRoot(
        rootElement,
        <HelmetProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </HelmetProvider>
    );
} catch (error) {
    console.error("Hydration failed, falling back to client-side rendering", error);
    // Fallback to createRoot if hydration fails
    import("react-dom/client").then(({ createRoot }) => {
        const root = createRoot(rootElement);
        root.render(
            <HelmetProvider>
                <Provider store={store}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </Provider>
            </HelmetProvider>
        );
    });
}

// remove loader once hydration is complete
if (typeof document !== "undefined") {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.parentNode?.removeChild(loader);
    }
    // reveal root when hydration finished
    const root = document.getElementById("root");
    if (root) {
        root.style.visibility = "visible";
    }
}