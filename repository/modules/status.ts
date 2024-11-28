import type { FetchOptions } from "ofetch";
import type { AsyncDataOptions } from "#app";

// locals
import FetchFactory from "../factory";

type IStatus = {
  description: string;
};

class StatusModule extends FetchFactory<IStatus[]> {
  private RESOURCE = "status";

  async getStatus(options?: AsyncDataOptions<IStatus[]>) {
    return useAsyncData(
      () => {
        const fetchOptions: FetchOptions<"json"> = {
          headers: {
            "Accept-Language": "en-us",
          },
        };

        return this.call(
          "GET",
          `${this.RESOURCE}`,
          undefined, // body
          fetchOptions
        );
      },

      options
    );
  }
}

export default StatusModule;
