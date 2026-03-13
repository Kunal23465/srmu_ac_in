import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import * as helmetPkg from "react-helmet-async";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import "./index.css";

const { HelmetProvider } = helmetPkg;

export function render(url: string) {
    const helmetContext: any = {};

    return ReactDOMServer.renderToString(
        <HelmetProvider context={helmetContext}>
            <Provider store={store}>
                <StaticRouter location={url}>
                    <App />
                </StaticRouter>
            </Provider>
        </HelmetProvider>
    );
}