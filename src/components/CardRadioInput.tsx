import { FC, useEffect, useState } from "react";

import { Box, Stack, Typography } from "@mui/material";
import { SelectOption } from "../types/appTypes";

// -------------- styled dropzone -------------- //
// type StyleDropzoneProps = {
//   error: boolean;
// };
// const StyledDropzone = styled("div", {
//   shouldForwardProp: (prop) => prop !== "error"
// })<StyleDropzoneProps>(({ theme, error }) => ({
//   border: "1px solid " + (error ? theme.palette.error.main : grey[300]),
//   borderRadius: 6,
//   height: 266,
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center"
// }));

const sx = {
  card: {
    flex: 1,
    borderRadius: 6,
    border: "1px solid #e4e5e6",
    backgroundColor: "#fff"
  }
};

type Props = {
  onChange: (...event: any[]) => void;
  value?: string;
  options: SelectOption[];
};

const CardRadioInput: FC<Props> = ({ onChange, value, options }) => {
  // const [checked, setChecked] = useState<string>('');

  // useEffect(() => {
  //   if (!value) return;
  //   setChecked(value);
  // }, [value]);

  const onChecked = (value: string) => {
    onChange(value);
  };

  return (
    <Stack direction="row">
      {options.map((option: SelectOption, index: number) => (
        <Box
          key={option.value + index}
          sx={sx.card}
          onClick={() => onChecked(option.value)}
        >
          <Typography>{option.label}</Typography>
        </Box>
      ))}
    </Stack>
  );
};

export default CardRadioInput;
