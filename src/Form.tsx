import { Box, Button, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { uploadSchema } from "./utils/validations/uploadValidations";
import { SelectOption } from "./types/appTypes";
import CardRadioFields from "./components/CardRadioFields";

const options: SelectOption[] = [
  {
    label: "Full page",
    value: "full-page"
  },
  {
    label: "Page content",
    value: "page-content"
  },
  {
    label: "Blog",
    value: "blog"
  }
];
const Form = () => {
  const form = useForm({
    mode: "onChange",
    resolver: zodResolver(uploadSchema)
  });

  const { handleSubmit } = form;

  const onSubmit = (values) => console.log("values", values);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardRadioFields
            label="Page type"
            name="pageType"
            options={options}
          />
          {/* -------- inputs -------- */}

          {/* -------- button -------- */}
          <Box mt={1}>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Box>
        </form>
      </FormProvider>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <a href="https://www.linkedin.com/in/tiavina-michael-ralainirina/">
          <Typography>By Tiavina Michael Ralainirina</Typography>
        </a>
      </Box>
    </Box>
  );
};

export default Form;
