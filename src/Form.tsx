import { Box, Button } from "@mui/material";
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
  );
};

export default Form;
