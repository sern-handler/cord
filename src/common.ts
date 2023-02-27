export type Snowflake =
  `${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${
    | number
    | ''}`;
    
export interface Item {
  id: Snowflake;
}

export enum TokenType {
  User = 'Bearer',
  Bot = 'Bot',
}
