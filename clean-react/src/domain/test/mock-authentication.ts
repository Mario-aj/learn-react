import faker from 'faker';
import { AuthenticationParams } from 'domain/usecases/authentication';

export const mockeAtuhentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});
