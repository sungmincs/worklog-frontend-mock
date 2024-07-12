import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import "react-toastify/dist/ReactToastify.css";
import "../index.css";
import { ToastContainer } from "react-toastify";

import { ThemeProvider } from "@/app/providers/theme";
import { NotFound } from "@/shared/ui/Error/notFound";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootComponent,
  notFoundComponent: NotFound
});

function RootComponent() {
  return (
    <ThemeProvider>
      <ToastContainer />
      <Outlet />
      <ReactQueryDevtools buttonPosition="top-right" />
      <TanStackRouterDevtools position="bottom-right" />
    </ThemeProvider>
  );
}
