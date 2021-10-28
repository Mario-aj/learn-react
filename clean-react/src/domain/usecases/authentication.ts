import { AccountModel } from 'src/domain/models/account-models';

export type AuthenticationParams = {
  email: string;
  password: string;
};

export interface Authentication {
  auth(params: AuthenticationParams): Promise<AccountModel>;
}
