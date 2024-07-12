import { Alert, AlertTitle, Box, Button } from "@mui/material";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";
import { useEffect } from "react";

interface Props {
  error: unknown;
  reset: VoidFunction;
}

export const ErrorFallback = ({ error, reset }: Props) => {
  const router = useRouter();
  const queryErrorResetBoundary = useQueryErrorResetBoundary();

  const errorMessage = error instanceof Error ? error.message : "";

  useEffect(() => {
    queryErrorResetBoundary.reset();
  }, [queryErrorResetBoundary]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh"
      }}
    >
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        잠시 문제가 생겼습니다.
        <br />
        새로고침을 통해 다시 시도해주세요.
        {errorMessage && (
          <Box
            sx={{
              marginTop: 2,
              marginBottom: 2
            }}
          >
            <b>에러 세부사항:</b> {errorMessage}
          </Box>
        )}
        <Button
          variant="contained"
          size="small"
          color="error"
          sx={{
            width: "100%",
            boxShadow: "none"
          }}
          onClick={() => {
            reset();
            router.invalidate();
          }}
        >
          새로고침
        </Button>
      </Alert>
    </Box>
  );
};
