import { todoQueryOptions } from "@/entities/todo/api/queries";
import { Home } from "@/pages";
import { ErrorFallback } from "@/shared/ui/Error/fallback";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(todoQueryOptions.todo),
  component: Home,
  errorComponent: ErrorFallback
});
