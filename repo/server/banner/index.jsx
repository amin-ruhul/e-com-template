import apiClient from "@/services/api-client";

export const fetchBanner = async (banner_type) => {
  try {
    const res = await apiClient({
      url: `/v4/banners?banner_type=${banner_type}`,
      method: "GET",
    });
    const data = res?.data;
    return data;
  } catch (error) {
    return null;
  }
};
