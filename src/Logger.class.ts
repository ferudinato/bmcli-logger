import { LoggerLevelType } from "./enums";
import { getLoggerStyle } from "./helpers/getLoggerStyle";

class Logger {
  private timestamp = new Date().toLocaleTimeString();
  private formattedMessage: string = "";

  private _printToConsole(message: string, style: string): void {
    console.log(`%c${message}`, style);
  }

  private _getIcon(type: LoggerLevelType): string {
    const { icon } = getLoggerStyle(type);
    return icon;
  }

  private _getStyle(type: LoggerLevelType): string {
    const { style } = getLoggerStyle(type);
    return style;
  }

  private _setMessage(message: string, type: LoggerLevelType): void {
    const icon = this._getIcon(type);
    const formattedMessage = `[${this.timestamp}] ${icon} => ${message}\n`;
    this.formattedMessage = formattedMessage;
  }

  public info(message: string): void {
    this._setMessage(message, LoggerLevelType.INFO);
    this._printToConsole(this.formattedMessage, this._getStyle(LoggerLevelType.INFO));
  }

  public error(message: string): void {
    this._setMessage(message, LoggerLevelType.ERROR);
    this._printToConsole(this.formattedMessage, this._getStyle(LoggerLevelType.ERROR));
  }

  public warning(message: string): void {
    this._setMessage(message, LoggerLevelType.WARNING);
    this._printToConsole(this.formattedMessage, this._getStyle(LoggerLevelType.WARNING));
  }
}

export default Logger;
