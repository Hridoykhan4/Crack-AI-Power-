const getImageBuffer = async (type, category, prompt) => {
  const finalPrompt = `Generate Image for the category ${category} & the imageType would be ${type} : ${prompt}`;

  const form = new FormData();
  form.append("prompt", finalPrompt);
  const response = await fetch("https://clipdrop-api.co/text-to-image/v1", {
    method: "POST",
    headers: {
      "x-api-key": process.env.CLIPDROP_API_KEY,
    },
    body: form,
  });
  const buffer = await response.arrayBuffer();
  return buffer;
};

module.exports = getImageBuffer;
