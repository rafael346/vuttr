export type Card = {
  id: number;
  text: string;
  title: string;
  link: string;
  tags: Array<string>;
  showModal: () => void;
}