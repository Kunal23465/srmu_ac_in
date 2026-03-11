import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import "./index.css";

hydrateRoot(
    document.getElementById("root")!,
    <HelmetProvider>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </HelmetProvider>
);

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