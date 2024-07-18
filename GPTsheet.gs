function GPT(Input) {
  // Your API key
  const GPT_API = "xxxxxxxxxxxxx"; //your API key
  const BASE_URL = "https://api.openai.com/v1/chat/completions";

  // Set up headers
  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${GPT_API}`
  };

  // Set up options for the fetch request
  const options = {
    headers,
    method: "POST",  // Fixed from GET to POST
    muteHttpExceptions: true,
    payload: JSON.stringify({
      "model": "gpt-4o-mini",
      "messages": [
        {
          "role": "system",
          "content": "You are a helpful assistant. Give me ONLY the answer. No other words."
        },
        {
          "role": "user",
          "content": Input
        }
      ],
      "temperature": 0.5
    })
  };

  // Use caching to reduce API calls
  const cache = CacheService.getScriptCache();
  const cacheKey = "GPT_" + Input;

  // Check if the output is already cached
  const cachedResponse = cache.get(cacheKey);
  if (cachedResponse) {
    // If cached, return the cached response
    return cachedResponse;
  } else {
    // If not cached, make the API call
    try {
      const response = UrlFetchApp.fetch(BASE_URL, options);
      const jsonResponse = JSON.parse(response.getContentText());

      // Check for errors in the response
      if (jsonResponse.error) {
        throw new Error(jsonResponse.error.message);
      }

      const result = jsonResponse.choices[0].message.content;

      // Cache the result for future use (cache for 1 hour)
      cache.put(cacheKey, result, 3600);  // Cache for 1 hour (3600 seconds)

      return result;
    } catch (error) {
      Logger.log("Error: " + error.message);
      return "Error: " + error.message; // Return error message
    }
  }
}
