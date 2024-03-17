export const handleFormReset = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => {
  e.preventDefault();
  const form = (e.currentTarget.closest("form") as HTMLFormElement) || null;
  if (form) {
    form.reset();
  }
};
