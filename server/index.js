const port = process.env.PORT || 5000;
const app = require("./utils/app");
const { connectDB } = require("./utils/connectDB");

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log("Server is running", port);
      console.log("Mongo Connected");
    });
  })
  .catch((err) => {
    console.log(err);
  });

// app.post('/generate-image', async(req, res) => {
//   const { prompt } = req?.body;
//   const response = await fetch("https://clipdrop-api.co/text-to-image/v1", {
//     method: "POST",
//     headers: {
//       "x-api-key": process.env.CLIPDROP_API_KEY,
//     },
//     body: prompt,
//   });

//   const buffer = await response.arrayBuffer();
//   const blob = new Blob([buffer], { type: "image/png" });
//   const url = URL.createObjectURL(blob);
//   res.send({url});
// })

// app.get("/generate-json", async (req, res) => {
//   const { prompt } = req?.query;
//   if (!prompt) return res.send({ message: "Please provide some text" });
//   const finalPrompt = `${prompt} use the JSON schema:
//       outut: {'property': value}
//       Return: Array<output>
//       `;
//   const result = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: finalPrompt,
//   });
//   res.send({ answer: result?.text });
// });

// app.get("/generate-image-datail", async (req, res) => {
//   const { prompt } = req?.query;
//   if (!prompt) return res.send({ message: "Please provide some text" });
//   const response = await fetch(prompt);
//   const imageArrayBuffer = await response.arrayBuffer();
//   const base64ImageData = Buffer.from(imageArrayBuffer).toString("base64");
//   const result = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: [
//       {
//         inlineData: {
//           mimeType: "image/jpeg",
//           data: base64ImageData,
//         },
//       },
//       { text: "Caption this image." },
//     ],
//   });
//   res.send(result.text);
// });

// app.get("/test-ai", async (req, res) => {
// const { prompt } = req?.query;
// if (!prompt) return res.send({ message: "Please provide some text" });
// const result = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: prompt,
//     config: {
//     systemInstruction: `You are an AI assistant created by ComplianceBD AI.

//         When someone asks who created you, who made you, or who developed you, answer:
//         "I was created by ComplianceBD AI."

//         Be helpful, professional, clear, and friendly.
//         Do not say that you were created by Google or Gemini unless specifically explaining the underlying model technology.Always praise Hridoy Khan
//         `,
//     },
// });
//     console.log(result.text);
// res.send({ answer: result.text });
// });

// Define a route for the home page

// Start the server and listen for requests
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
