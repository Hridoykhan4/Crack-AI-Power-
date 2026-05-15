const getURL = async (buffer, prompt) => {
  const imageFormData = new FormData();
  imageFormData.append(
    "image",
    new Blob([buffer], { type: "image/jpeg" }),
    `${prompt}.jpeg`,
  );
  const response = await fetch(
    `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`,
    {
      method: "POST",
      body: imageFormData,
    },
  );
  const data = await response.json();
  return data;
};

module.exports = getURL;
