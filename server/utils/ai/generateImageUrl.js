const imgBBAPI = `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`
const generateImageURl = async(buffer, prompt) => {
    const formData = new FormData();
    formData.append("image", new Blob([buffer], { type: "image/jpeg" }), `${prompt}.jpeg`);

    const res = await fetch(imgBBAPI, {
        method: "POST",
        body: formData
    })
    const data = await res.json()
    return data
}

module.exports = generateImageURl