// const {Configuration , OpenAIApi} = require('openai')

// const configuration = new Configuration({apikey: "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"})
// const openAi = new OpenAIApi(configuration);

// export async function sendMsgToOpenAI(message) {
//     const res = await openAi.createCompletion({
//         model: 'text-davinci-003',
//         prompt: message,
//         temperature: 0.7,
//         max_tokens: 257,
//         top_p: 1,
//         frequency_penalty: 0,
//         presence_penalty: 0,


//     });
//     return res.data.choices[0].text;
// }