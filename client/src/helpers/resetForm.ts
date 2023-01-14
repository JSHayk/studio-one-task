function resetForm(fields: any[]) {
  fields.forEach((item) => {
    item("");
  });
}

export default resetForm;
