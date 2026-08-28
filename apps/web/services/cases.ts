import apiClient from "@/lib/api/client";


export interface Case {
  id: number;
  client_name: string;
  cnic?: string;
  fir_number?: string;
  police_station?: string;
  sections?: string;
  court?: string;
  status: string;
  summary?: string;
  created_at: string;
}


export interface CreateCasePayload {
  client_name: string;
  cnic?: string;
  fir_number?: string;
  police_station?: string;
  sections?: string;
  court?: string;
  summary?: string;
}


export async function getCases() {
  const response = await apiClient.get<Case[]>("/cases/");

  return response.data;
}


export async function createCase(
  payload: CreateCasePayload
) {
  const response = await apiClient.post<Case>(
    "/cases/",
    payload
  );

  return response.data;
}


export async function getCase(
  id: number
) {
  const response = await apiClient.get<Case>(
    `/cases/${id}`
  );

  return response.data;
}


export async function deleteCase(
  id: number
) {
  const response = await apiClient.delete(
    `/cases/${id}`
  );

  return response.data;
}
