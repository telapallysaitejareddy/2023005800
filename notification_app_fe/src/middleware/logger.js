export const Log = (source, level, module, message) => {
  const timestamp = new Date().toISOString();

  console.log(
    JSON.stringify({
      timestamp,
      source,
      level,
      module,
      message,
    }),
  );
};
