export interface IpasswordHasher {
  hash(password: string): Promise<string>;
}
