import { LoggerLevelType } from "./enums";

export type LoggerType = 'info' | 'error' | 'warning';

export interface LoggerProps {
  message: string;
  type: LoggerLevelType;
}
