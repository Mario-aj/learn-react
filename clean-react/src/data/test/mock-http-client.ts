import {
  HttpPostClient,
  HttpPostClientParams,
} from 'data/protocols/http/http-post-client';

export class HttpPostClientSpy implements HttpPostClient {
  url?: string;

  async post(params: HttpPostClientParams): Promise<void> {
    this.url = params.url;
  }
}
