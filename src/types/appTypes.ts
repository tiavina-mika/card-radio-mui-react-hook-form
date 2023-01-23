export interface SelectOption {
  readonly value: any;
  readonly label: string;
}

export type Mutable<T> = {
  -readonly [k in keyof T]: T[k];
};

export interface ICardRadio extends Mutable<SelectOption> {
  icon?: any;
  description?: string;
}
