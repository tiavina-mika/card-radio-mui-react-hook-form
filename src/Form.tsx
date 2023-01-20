import { Box, Button, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { pageSchema } from "./utils/validations/pageValidations";
import CardRadioField from "./components/CardRadioField";
import { pageTypeOptions } from "./utils/pageUtils";

const Form = () => {
  const form = useForm({
    resolver: zodResolver(pageSchema),
    defaultValues: { type: pageTypeOptions[1].value }
  });

  const { handleSubmit } = form;

  const onSubmit = (values): void => console.log("values", values);

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
          {/* -------- radio options -------- */}
          <CardRadioField
            label="Page type"
            name="type"
            options={pageTypeOptions}
          />

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
