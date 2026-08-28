import apiClient from "@/lib/api/client";


export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  bar_number?: string;
}


export interface LoginPayload {
  email: string;
  password: string;
}


export interface TokenResponse {
  access_token: string;
  token_type: string;
}


export async function register(
  payload: RegisterPayload
) {
  const response = await apiClient.post(
    "/auth/register",
    payload
  );

  return response.data;
}


export async function login(
  payload: LoginPayload
) {
  const response = await apiClient.post<TokenResponse>(
    "/auth/login",
    payload
  );


  if (typeof window !== "undefined") {
    localStorage.setItem(
      "access_token",
      response.data.access_token
    );
  }


  return response.data;
}
