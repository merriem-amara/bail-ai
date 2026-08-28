import axios from "axios";


const apiClient = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
  },
});


apiClient.interceptors.request.use(
  (config) => {

    if (typeof window !== "undefined") {
      const token = localStorage.getItem("access_token");

      if (token) {
        console.log("JWT attached:", token);

        config.headers.Authorization =
          `Bearer ${token}`;
      } else {
        console.log("NO JWT TOKEN FOUND");
      }
    }

    return config;
  }
);


export default apiClient;
