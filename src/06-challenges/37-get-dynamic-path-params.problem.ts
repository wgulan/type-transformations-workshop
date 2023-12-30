import { Split } from 'ts-toolbelt/out/String/Split';
import { Equal, Expect } from '../helpers/type-utils';

type UserPath = '/users/:id';

type UserOrganisationPath = '/users/:id/organisations/:organisationId';

type SplittedPath<T extends string> = Split<T, '/'>;

type ExtractPathParams<T extends string> = {
  [TPathPart in SplittedPath<T>[number] as TPathPart extends `:${infer TPathParam}`
    ? TPathParam
    : never]: string;
};

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractPathParams<UserOrganisationPath>,
      { id: string; organisationId: string }
    >
  >
];
