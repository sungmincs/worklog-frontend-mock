import { AddItemForm } from "@/widgets/addItemForm";
import { Layout } from "@/widgets/layout";
import { TodoWithNote } from "@/widgets/todoNoteList";
import { Box } from "@mui/material";

export const Home = () => {
  return (
    <Layout>
      <Layout.Lsb />
      <Layout.Content>
        <Box
          display="flex"
          flexDirection="column"
          gap={4}
          sx={{
            p: 6
          }}
        >
          <TodoWithNote />
          <AddItemForm />
        </Box>
      </Layout.Content>
    </Layout>
  );
};
