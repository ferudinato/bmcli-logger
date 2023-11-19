import { LoggerType } from "../types";

export const getLoggerStyle = (type: LoggerType) => {
  const loggerTypeMapped = {
    info: {
      style: `color: grey; font-size: 14px;`,
      icon: `✨`,
    },
    error: {
      style: `color: red; font-size: 14px;`,
      icon: `❌`,
    },
    warning: {
      style: `color: yellow; font-size: 14px;`,
      icon: `👀`,
    },
  };
  return loggerTypeMapped[type];
}
