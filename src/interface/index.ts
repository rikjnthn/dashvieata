import React from "react";

export type SetStateType<T> = React.Dispatch<React.SetStateAction<T>>;

export interface MessageType {
  content: string;
  image?: string;
  sender: boolean;
}
