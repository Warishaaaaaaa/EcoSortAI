import api from "../../services/api";

export async function getHistory() {
  const response = await api.get("/history");

  return response.data;
}

export async function deleteHistory(id) {
  await api.delete(`/history/${id}`);
}

export async function clearHistory() {
  await api.delete("/history");
}
