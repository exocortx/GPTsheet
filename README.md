
# GPT Function for Google Sheets

This function allows users to interact with the OpenAI GPT API directly from Google Sheets. You can input text prompts in your spreadsheet, and the function will return responses from the GPT-4 model.

## Prerequisites

1. A Google account.
2. Access to Google Sheets.
3. An OpenAI API key.

## Installation Instructions

1. **Open Google Sheets**:
   - Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet.

2. **Open the Script Editor**:
   - Click on `Extensions` > `Apps Script` from the menu bar.
   
3. **Copy and Paste the Code**:
   - Remove any existing code in the script editor and copy the following code:

4. **Insert Your API Key**:
   - Replace the placeholder API key in the code (`const GPT_API = "your-api-key";`) with your actual OpenAI API key.

5. **Save Your Script**:
   - Click on the disk icon or `File` > `Save`, and give your project a name (e.g., "GPT Function").

6. **Authorize the Script**:
   - You'll need to authorize the script to allow it to fetch data from the OpenAI API. Click on `Run` > `Run function`, and choose `GPT`. Follow the prompts to authorize the script with your Google account.

## Usage Instructions

1. **Return to Google Sheets**.
2. **Using the Function**:
   - In any cell of your Google Sheets, you can now call the function. For example:
     ```
     =GPT("What is the capital of France?")
     =GPT("extract the name in that cell?"&C3)
     ```
   - Press `Enter`, and the cell will display the response from the GPT-4 model.

3. **Troubleshooting**:
   - If you encounter any errors, check the logs by going to `View` > `Logs` in the Apps Script editor.
   - Ensure your API key is correct and that your account has sufficient usage limits.

## Notes

- The function uses caching to minimize API calls for repeated inputs, which helps reduce the likelihood of reaching the API call limit.
- Please follow OpenAI's usage policies and guidelines while using the API.
