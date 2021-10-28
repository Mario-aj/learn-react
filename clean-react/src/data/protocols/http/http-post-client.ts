export type HttpPostClientParams = {
  url: string;
  body?: Object;
};

export interface HttpPostClient {
  post(params: HttpPostClientParams): Promise<void>;
}
