export const changeInputBorderColor = (status: string | undefined) => {
  switch (status) {
    case "default":
      return "var(--Grey_300)";
    case "writing":
      return "var(--Primary)";
    default:
      return "var(--Red)";
  }
};
