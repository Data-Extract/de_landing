// [File]: plugins/api.ts

// 3rd's
import { $fetch } from "ofetch";
import type { FetchOptions } from "ofetch";

// locals
import StatusModule from "~/repository/modules/status";

interface IApiInstance {
  status: StatusModule;
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const fetchOptions: FetchOptions = {
    baseURL: config.public.apiBaseUrl as string,
  };

  // Create a new instance of $fecther with custom option
  const apiFetcher = $fetch.create(fetchOptions);

  // An object containing all repositories we need to expose
  const modules: IApiInstance = {
    status: new StatusModule(apiFetcher),
  };

  return {
    provide: {
      api: modules,
    },
  };
});
