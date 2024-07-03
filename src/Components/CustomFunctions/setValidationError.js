export function setValidationError(graphQLErrors, setError, useFormName) {
  const vali = graphQLErrors?.[0]?.extensions;
  if (vali?.category === "validation") {
    let validation = [];
    for (const key in vali.validation) {
      validation = [
        ...validation,
        {
          message: vali.validation[key][0],
          name: key,
        },
      ];
    }

    validation.forEach(({ name, message }) => {
      let fieldName = name;
      fieldName = name.includes("input.") ? name.split(".")[1] : name;
      return setError(useFormName ? `${useFormName}${fieldName}` : fieldName, {
        type: "required",
        message: message,
        shouldFocus: true,
      });
    });
  }
}
