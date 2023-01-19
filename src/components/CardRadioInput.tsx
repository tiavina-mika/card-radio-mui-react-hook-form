import { FC } from "react";

import {
  Box,
  Stack,
  styled,
  SxProps,
  Theme,
  Typography,
  useTheme
} from "@mui/material";
import { ICardRadio } from "../types/appTypes";

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
  sx?: SxProps<Theme>;
  cardSx?: SxProps<Theme>;
};

const CardRadioInput: FC<Props> = ({
  onChange,
  value,
  sx,
  cardSx,
  options = []
}) => {
  const theme = useTheme();

  const onChecked = (value: string): void => {
    onChange(value);
  };

  const renderIcon = (icon: any, checked: boolean) => {
    const IconComponent = icon;
    const props = checked ? { color: theme.palette.primary.main } : {};
    return <IconComponent {...props} />;
  };

  return (
    <Stack direction="row" spacing={2} sx={sx}>
      {options.map((option: ICardRadio, index: number) => (
        <StyledCard
          key={option.value + index}
          sx={cardSx}
          onClick={() => onChecked(option.value)}
          checked={value === option.value}
        >
          <Stack direction="row" alignItems="center">
            {/* --- icon --- */}
            {option.icon && renderIcon(option.icon, value === option.value)}
            {/* --- label --- */}
            <Typography
              sx={{
                fontSize: 14,
                ml: option.icon ? 1 : 0,
                color: value === option.value ? theme.palette.primary.main : ""
              }}
            >
              {option.label}
            </Typography>
          </Stack>
          {/* ----- description ----- */}
          {option.description && (
            <Box sx={{ mt: 1 }}>
              <Typography sx={{ fontSize: 13, color: "#78777e" }}>
                {option.description}
              </Typography>
            </Box>
          )}
        </StyledCard>
      ))}
    </Stack>
  );
};

export default CardRadioInput;
