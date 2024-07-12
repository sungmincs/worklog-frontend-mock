import { Box, Button, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useRouter } from "@tanstack/react-router";

export const NotFound = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        minHeight: "100vh"
      }}
    >
      <Typography variant="h1" fontWeight={500} color={grey[800]}>
        404 Error 🥸
      </Typography>
      <Typography variant="body1" color={grey[600]} textAlign="center">
        요청하신 페이지를 찾을 수 없습니다.
        <br />
        입력하신 주소가 정확한지 다시 한번 확인해주세요.
      </Typography>
      <Button onClick={() => router.history.back()}>
        이전 페이지로 돌아가기
      </Button>
    </Box>
  );
};
