import axios from "axios";

export const uploadPanCardOCR = async (file) => {
  const formData = new FormData();

  formData.append("file", file);

  try {
    const response = await axios.post(
      "https://eve.idfy.com/v3/tasks/sync/extract/ind_pan",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("OCR API Error:", error);
    throw error;
  }
};