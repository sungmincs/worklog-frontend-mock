import { AxiosError, AxiosResponse } from "axios";
import { ErrorResponse, ValidationError } from "./models";

export const responseInterceptors = <T>(response: AxiosResponse<T>) =>
  response.data as T;

export const rejectInterceptors = (
  error: AxiosError<ErrorResponse<unknown>>
) => {
  const { data, status } = error.response!;
  switch (status) {
    case 404:
      console.error("Not Found");
      Promise.reject(data.detail as AxiosError<ErrorResponse<string>>);
      break;

    case 422:
      console.error("Validation Error");
      Promise.reject(data.detail as AxiosError<ErrorResponse<ValidationError>>);
      break;

    case 500:
      console.error("/server-error");
      break;
  }
  return Promise.reject(error);
};
