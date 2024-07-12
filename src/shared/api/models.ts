export interface ValidationError {
  loc: [string, number];
  msg: string;
  type: string;
}

export interface ErrorResponse<T> {
  detail: T;
}
