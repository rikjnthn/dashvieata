import React from "react";
import { STATUS, TIMEFRAMEOPTIONS } from "../constant/setting";

export type SetStateType<T> = React.Dispatch<React.SetStateAction<T>>;

export interface MessageType {
  content: string;
  image?: string;
  sender: boolean;
}

export type GetArrayElementType<T extends readonly unknown[]> =
  T extends readonly (infer U)[] ? U : never;

export type TimeFrameType = GetArrayElementType<typeof TIMEFRAMEOPTIONS>;

export type TransactionStatusType = GetArrayElementType<typeof STATUS>;
