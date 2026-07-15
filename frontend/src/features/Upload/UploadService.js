import api from "../../services/api";

export async function uploadImage(imageFile) {
  const formData = new FormData();

  formData.append("image", imageFile);

  const response = await api.post("/predict", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
}
