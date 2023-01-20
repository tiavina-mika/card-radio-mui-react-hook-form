import { FC } from "react";

import { Box, FormHelperText, InputLabel, SxProps, Theme } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

import CardRadioInput from "./CardRadioInput";
import { ICardRadio } from "../types/appTypes";

type Props = {
  name: string;
  label?: string;
  helperText?: string;
  sx?: SxProps<Theme>;
  options: ICardRadio[];
};

const CardRadioField: FC<Props> = ({
  name,
  label,
  helperText,
  sx,
  options,
  ...rest
}) => {
  // hooks
  const {
    control,
    formState: { errors }
  } = useFormContext();

  return (
    <Box sx={sx}>
      {/* ----------- label ----------- */}
      {label && <InputLabel sx={{ mb: 1, color: "#000" }}>{label}</InputLabel>}

      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Box>
            <CardRadioInput
              onChange={onChange}
              value={value}
              // error={(errors as any)[name]}
              options={options}
              {...rest}
            />

            {/* ----------- errors ----------- */}
            {errors[name] && (
              <FormHelperText error sx={{ my: 1 }}>
                {(errors as any)[name]?.message}
              </FormHelperText>
            )}

            {/* ----------- helper text ----------- */}
            {helperText && <FormHelperText>{helperText}</FormHelperText>}
          </Box>
        )}
      />
    </Box>
  );
};

export default CardRadioField;
