import { Equal, Expect } from '../helpers/type-utils';

interface Attributes {
  id: string;
  email: string;
  username: string;
}

/**
 * How do we create a type helper that represents a union
 * of all possible combinations of Attributes?
 */
// type MutuallyExclusive<T> = {
//   [K in keyof T]: {
//     [Key in K]: T[Key];
//   };
// }[keyof T];

type MutuallyExclusive<T> = {
  [Key in keyof T]: Record<Key, T[Key]>;
}[keyof T];

type ExclusiveAttributes = MutuallyExclusive<Attributes>;

type tests = [
  Expect<
    Equal<
      ExclusiveAttributes,
      | {
          id: string;
        }
      | {
          email: string;
        }
      | {
          username: string;
        }
    >
  >
];
