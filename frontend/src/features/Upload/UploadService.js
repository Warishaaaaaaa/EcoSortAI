import api from "../../services/api";

export async function classifyWaste(image) {
  const formData = new FormData();

  formData.append("image", image);

  const response = await api.post("/predict", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
}
