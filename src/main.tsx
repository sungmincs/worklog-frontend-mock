import ReactDOM from "react-dom/client";
import { Providers } from "./app/providers";
import { router } from "./app/router";

const rootElement = document.getElementById("root")!;

const prepare = async (): Promise<void> => {
  if (import.meta.env.DEV) {
    const { worker } = await import("@/mocks/browser");
    worker.start({
      onUnhandledRequest: (request) => {
        if (!request.url.includes("src/mocks")) {
          return;
        }
      }
    });
  }
};

prepare().then(() => {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<Providers router={router} />);
});
