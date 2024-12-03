import React from "react";

import {
  BaseSelectProps,
  FormControl,
  MenuItem,
  Select as SelectMUI,
} from "@mui/material";
import { Control, Controller } from "react-hook-form";

interface SelectItem {
  label: string;
  value: string | number;
}

export interface SelectProps extends BaseSelectProps {
  name: string;
  control: Control<any, any>;
  onChange?: (input: any) => void;
  items: SelectItem[];
}
 
const Select: React.FC<SelectProps> = (props) => {
  const { name, control, items, defaultValue } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={() => (
        <FormControl>
          <SelectMUI>
            {items.map((item) => {
              return <MenuItem value={item.value}>{item.label}</MenuItem>;
            })}
          </SelectMUI>
        </FormControl>
      )}
    ></Controller>
  );
};

export default Select;
