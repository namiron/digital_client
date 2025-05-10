export const errorCatch = (error: any): string => {
  const message = error?.response?.data?.message;

  if (!message) {
    return error?.message || "Unknown error";
  }

  if (Array.isArray(message)) {
    return message[0];
  }

  return typeof message === "string" ? message : JSON.stringify(message);
};
