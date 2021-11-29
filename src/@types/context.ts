import { Dispatch, ReactNode, SetStateAction } from "react";

export type DataContextData = {
  tools: Array<Tools>;
  setReload: Dispatch<SetStateAction<boolean>>;
  reload: boolean;
}

export type Tools = {
  id: number;
  description: string;
  link: string;
  tags: Array<string>;
}



export type DataContextProps = {
  children: ReactNode;

}
