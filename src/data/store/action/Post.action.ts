import api from "../../hooks/useAxios";

export const getPosts = async (page: number) => {
  try {
    const response = await api.get(`/all/${page}`);
    return response.data.result;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};
