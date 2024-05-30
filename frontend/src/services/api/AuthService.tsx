import { api } from ".";

export async function loginApi(body: any) {
  const { data }: any = await api.post("/api/user/auth", body);
  return data;
}
