/* eslint-disable @typescript-eslint/no-explicit-any */ import {
  navigateTo,
  useNuxtApp,
  useFetch,
  type UseFetchOptions,
} from "nuxt/app";
import ROUTES from "../constants/routes.ts";
interface ApiError {
  status: number;
  message: string;
  data?: any;
}
const handleApiError = (response: any) => {
  const error: ApiError = {
    status: response.status,
    message: response.statusText || "Unknown error",
    data: response._data,
  };
  switch (response.status) {
    case 400:
      console.error("❌ Bad Request:", error.data?.message || error.message);
      break;
    case 401:
      navigateTo(ROUTES.LOGIN);
      break;
    case 403:
      console.error("❌ Forbidden: Access denied");
      break;
    case 404:
      navigateTo(ROUTES.NOT_FOUND);
      break;
    case 422:
      console.error(
        "❌ Validation Error:",
        error.data?.errors || error.message
      );
      break;
    case 429:
      console.error("❌ Too Many Requests: Rate limited");
      break;
    case 500:
      console.error("❌ Internal Server Error");
      break;
    case 502:
      console.error("❌ Bad Gateway");
      break;
    case 503:
      console.error("❌ Service Unavailable");
      break;
    default:
      if (response.status >= 500) {
        console.error("❌ Server Error:", error.message);
      }
  }
  return error;
};
export function useAPIP<T>(
  url: string | (() => string),
  options?: UseFetchOptions<T>
) {
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$api as typeof $fetch,
    onResponseError({ response }) {
      handleApiError(response);
    },
  });
}
