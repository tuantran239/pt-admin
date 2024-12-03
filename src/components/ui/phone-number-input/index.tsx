import {
  BaseTextFieldProps,
  FilledInputProps,
  FormControl,
  InputProps,
  OutlinedInputProps,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import { Control, Controller, useForm } from "react-hook-form";
import Select from "../select";

import PhoneCodeData from "../../../common/data/phone-code.json";

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

const PhoneNumberInput: React.FC<InputFieldProps> = ({
  name,
  control,
  InputProps,
  ...props
}) => {
  const { ref, value, onChange, type } = props;

  const { control: controlFormCode } = useForm<{ code: string }>();

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
        <FormControl sx={{ display: "flex", flexDirection: "row" }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            control={controlFormCode}
            items={PhoneCodeData.map((data) => ({
              label: `${data.emoji} ${data.name} ${data.dial_code}`,
              value: data.code,
            }))}
            name={"code"}
            sx={{ flex: 1 }}
          ></Select>
          <TextField
            value={value ?? valueController}
            {...props}
            onChange={(e) => {
              if (onChange) {
                onChange(e);
              } else {
                onChangeController(e);
              }
            }}
            sx={{ flex: 2 }}
            type={"number"}
          />
        </FormControl>
      )}
    />
  );
};

export default PhoneNumberInput;
