const validation = new JustValidate("#registration-form");

validation
  .addField("#name", [
    { rule: "required", errorMessage: "Debe escribir su nombre" },
    { rule: "maxLength", value: 20, errorMessage: "Máximo 20 caracteres" },
  ])
  .addField("#password", [
    { rule: "required", errorMessage: "Debe escribir su contraseña" },
    {
      rule: "strongPassword",
      errorMessage:
        "La contraseña debe tener un mínimo de 8 caracteres, al menos una letra mayúscula, una minúscula, un número y un caracter especial",
    },
  ])
  .addField("#confirm-password", [
    {
      validator: (value, fields) => {
        return value === fields["#password"].elem.value;
      },
      errorMessage: "Las contraseñas deben coincidir",
    },
  ])
  .addField("#phone", [
    {
      rule: "customRegexp",
      value: /^\+?\d{10,15}$/,
      errorMessage:
        "Debe ser un número de teléfono válido, sin guiones ni espacios",
    },
  ])
  .onSuccess((e) => {
    alert("Form submitted");
    e.preventDefault();
  });
