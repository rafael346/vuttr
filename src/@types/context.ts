import { Dispatch, ReactNode, SetStateAction } from "react";

export type DataContextData = {
  tools: Array<Tools>;
  checked: boolean;
  search: string;
  reload: boolean;
  setReload: Dispatch<SetStateAction<boolean>>;
  setChecked: Dispatch<SetStateAction<boolean>>;
  setSearch: Dispatch<SetStateAction<string>>;
  searchTasks: () => Promise<void>;
}

export type Tools = {
  id: number;
  description: string;
  link: string;
  title: string;
  tags: Array<string>;
}



export type DataContextProps = {
  children: ReactNode;

}
