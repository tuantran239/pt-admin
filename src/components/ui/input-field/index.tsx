import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  BaseTextFieldProps,
  FilledInputProps,
  IconButton,
  InputAdornment,
  InputProps,
  OutlinedInputProps
} from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useCallback } from "react";
import { Control, Controller } from "react-hook-form";

interface InputFieldProps extends BaseTextFieldProps {
  name: string;
  control?: Control<any, any>;
  onChange?: (input: any) => void;
  InputProps?:
    | Partial<FilledInputProps>
    | Partial<OutlinedInputProps>
    | Partial<InputProps>
    | undefined;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  control,
  InputProps,
  ...props
}) => {
  const { ref, value, onChange, type } = props;
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleTypeTextField = useCallback(() => {
    if (type === "password") {
      return showPassword ? "text" : "password";
    }

    return type;
  }, [showPassword]);

  const handleInputProps = useCallback(() => {
    if (type === "password") {
      return {
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      };
    }
    return InputProps;
  }, [showPassword]);

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: {
          onChange: onChangeController,
          onBlur,
          value: valueController,
          ref: refController,
        },
      }) => (
        <TextField
          value={value ?? valueController}
          ref={ref ?? refController}
          {...props}
          type={handleTypeTextField()}
          onChange={(e) => {
            if (onChange) {
              onChange(e);
            } else {
              onChangeController(e);
            }
          }}
          InputProps={handleInputProps()}
          
        />
      )}
    />
  );
};

export default InputField;
