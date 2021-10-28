import faker from 'faker';
import { RemoteAuthentication } from './remote-authentication';
import { HttpPostClientSpy } from 'src/data/test/mock-http-client';
import { mockeAtuhentication } from 'src/domain/test/mock-authentication';

type SutTypes = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy;
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new RemoteAuthentication(url, httpPostClientSpy);

  return {
    sut,
    httpPostClientSpy,
  };
};

describe('RemoteAuthentication', () => {
  it('should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url();
    const { sut, httpPostClientSpy } = makeSut(url);
    await sut.auth(mockeAtuhentication());

    expect(httpPostClientSpy.url).toBe(url);
  });

  it('should call HttpPostClient with correct body', async () => {
    const { sut, httpPostClientSpy } = makeSut();
    const body = mockeAtuhentication();
    await sut.auth(body);

    expect(httpPostClientSpy.body).toEqual(body);
  });
});
