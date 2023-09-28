import server from "../apis/server";

let refresh = false;

server.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error?.config;

    if (error.response.status === 401 && !refresh) {
      refresh = true;

      const response = await server.post(
        "/auth/refresh",
        {},
        { withCredentials: true }
      );

      if (response.status === 200) {
        server.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data["token"]}`;

        return server(prevRequest);
      }
    }

    if (error?.response?.status === 403 && !prevRequest?.sent) {
      prevRequest.sent = true;
      const { data } = await server.post(
        "/auth/refresh",
        {},
        { withCredentials: true }
      );
      prevRequest.headers["Authorization"] = `Bearer ${data.token}`;
      return server(prevRequest);
    }
    refresh = false;
    return Promise.reject(error);
  }
);
