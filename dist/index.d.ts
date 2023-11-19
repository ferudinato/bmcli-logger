declare class Logger {
    private timestamp;
    private formattedMessage;
    private _printToConsole;
    private _getIcon;
    private _getStyle;
    private _setMessage;
    info(message: string): void;
    error(message: string): void;
    warning(message: string): void;
}

declare const logger: Logger;

export { logger as default };
