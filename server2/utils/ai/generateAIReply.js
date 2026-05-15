const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:5000",
    "X-Title": "Peek Seek AI",
  },
});


// const OpenAI = require("openai");

// const openai = new OpenAI({
//   baseURL: "https://openrouter.ai/api/v1",
//   apiKey: process.env.OPENROUTER_API_KEY,
//   defaultHeaders: {
//     "HTTP-Referer": "http://localhost:5000",
//     "X-Title": "Peek Seek AI",
//   },
// });

// const generateAIReply = async (prompt, comment) => {
//   try {
//     const finalPrompt = `
// Image prompt: ${prompt}
// User comment: ${comment}

// Write a short, friendly reply to the user's comment.
// `;

//     const completion = await openai.chat.completions.create({
//       model: "openrouter/free",
//       messages: [
//         {
//           role: "user",
//           content: finalPrompt,
//         },
//       ],
//     });

//     const aiReply = completion.choices?.[0]?.message?.content;

//     console.log("AI Reply:", aiReply);

//     return aiReply || "Thank you for your comment!";
//   } catch (error) {
//     console.error("AI Reply Error:", error?.response?.data || error.message);

//     return "Thank you for your comment!";
//   }
// };

// module.exports = { generateAIReply };
