import React from "react";
import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";

const ControlMUItextField = (props) => {
  const {
    name,
    control,
    defaultValue,
    readOnly,
    inputProps,
    rules,
    onChange,
    variant,
    serverValidation,
    ...restProps
  } = props;


  const {
    formState: { errors },
    field: { ref, onChange: fieldChange, ...fieldProps },
  } = useController({
    name,
    control,
    rules: {
      ...rules,
      ...(rules && {
        validate: {
          whiteSpace: (value) => {
            if (value && typeof value === "string") {
              return !!value.trim() || "This field is required";
            }
          },
          ...(rules["validate"] && rules["validate"]),
        },
      }),
    },
    defaultValue: defaultValue ?? "",
  });

  const errorName = name.includes(".") && name.split(".");
  const serverError = errorName ? errorName[1] : name;
  const fieldError = errorName
    ? errors?.[errorName[0]]?.[errorName[1]]
    : errors?.[name];
  return (
    <TextField
      inputRef={ref}
      {...fieldProps}
      {...restProps}
      defaultValue={defaultValue}
      autoComplete="off"
      id={name}
      variant={variant || "filled"}
      fullWidth
      multiline={!!props.rows}
      error={Boolean(fieldError || serverValidation?.[serverError])}
      helperText={
        errors
          ? fieldError?.message
          : Boolean(serverValidation) && serverValidation?.[serverError]
          ? serverValidation?.[serverError][0]
          : null
      }
      inputProps={{
        readOnly: readOnly,
        ...inputProps,
      }}
      onChange={(e) => {
        fieldChange(e);
        onChange && onChange(e);
      }}
      size="small"
    />
  );
};

ControlMUItextField.propTypes = {
  errors: PropTypes.any,
  name: PropTypes.string.isRequired,
  control: PropTypes.any.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.any,
};

export default ControlMUItextField;
