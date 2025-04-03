const dateFormatter = (dateTime: Date) => {
  const formatter = new Intl.DateTimeFormat("en-us", {
    timeStyle: "short",
    dateStyle: "short",
  });
  return formatter.format(new Date(dateTime));
};

export default dateFormatter;
