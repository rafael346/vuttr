export type Card = {
  id: number;
  text: string;
  link: string;
  tags: Array<string>;
  onRemove: () => Promise<void>;
}