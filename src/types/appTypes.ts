export interface SelectOption {
  readonly value: any;
  readonly label: string;
}

export interface ICardRadio extends SelectOption {
  readonly icon?: any;
  readonly description?: string;
}
