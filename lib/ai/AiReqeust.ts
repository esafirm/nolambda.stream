/**
 * Function to request completion from OpenAI API
 *
 * @param text - text to be completed
 * @param apiToken - OpenAI API token
 * @returns the result of the API call
 */
export async function requestCompletion(text: string, apiToken: string) {
  const openAiParameter = {
    model: 'gpt-3.5-turbo',
    temperature: 0.9,
    stream: false,
    messages: [
      {
        role: 'user',
        content: text,
      },
    ],
  }

  return fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiToken}`,
    },
    body: JSON.stringify(openAiParameter),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log('API response', res)
      return res
    })
}

const TOKEN_KEY = 'OPENAI_API_TOKEN'

export function setApiToken(token: string) {
  window.localStorage.setItem(TOKEN_KEY, token)
}

export function clearApiToken() {
  window.localStorage.removeItem(TOKEN_KEY)
}

export function getApiToken() {
  return window.localStorage.getItem(TOKEN_KEY)
}
