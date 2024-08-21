import React from "react";

interface DateFormatterProps {
  dateStr: string;
}

const DateFormatter: React.FC<DateFormatterProps> = ({ dateStr }) => {
  const date = new Date(dateStr);
  const formatter = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZoneName: "short",
  });

  const formattedDate = formatter.format(date);
  return <>{formattedDate}</>;
};

export default DateFormatter;
