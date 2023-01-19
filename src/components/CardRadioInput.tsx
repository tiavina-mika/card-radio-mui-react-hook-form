import { FC, useEffect, useState } from "react";

import { Box, Stack, styled, Typography } from "@mui/material";
import { ICardRadio } from "../types/appTypes";

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
    borderRadius: 1,
    border: "1px solid #e4e5e6",
    backgroundColor: "#fff",
    padding: 20 / 6
  }
};

type HeaderProps = {
  checked: boolean;
};

const StyledCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== "checked"
})<HeaderProps>(({ theme, checked }) => ({
  borderRadius: 6,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: checked ? theme.palette.primary.main : "#e4e5e6",
  backgroundColor: "#fff",
  padding: 20,
  cursor: "pointer",
  transition: "all 0.15s ease-in",
  "&:hover": {
    borderColor: theme.palette.primary.main
  }
}));

type Props = {
  onChange: (...event: any[]) => void;
  value?: string;
  options: ICardRadio[];
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
    <Stack direction="row" spacing={2}>
      {options.map((option: ICardRadio, index: number) => (
        <StyledCard
          key={option.value + index}
          // sx={sx.card}
          onClick={() => onChecked(option.value)}
          checked={options[0].value === option.value}
        >
          <Stack>
            <Typography>{option.label}</Typography>
          </Stack>
          {option.description && (
            <Box>
              <Typography>{option.description}</Typography>
            </Box>
          )}
        </StyledCard>
      ))}
    </Stack>
  );
};

export default CardRadioInput;
