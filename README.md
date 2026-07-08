# AI Chatbot

## Description
A simple AI chatbot application that utilizes the OpenAI API to provide conversational responses. The application supports streaming responses, maintains conversation history, and allows for different AI personalities.

## What's Built
- Backend API to interact with OpenAI's API
- Frontend for user interaction
- Docker support for easy deployment

## How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ai-chatbot.git
   cd ai-chatbot
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```
4. Access the app at `http://localhost:3000`

## API Documentation
- **POST /api/chat**: Send a message to the chatbot and receive a response.
  - Request body: `{ "message": "string", "personality": "string" }`
  - Response: `{ "response": "string" }`

## Environment Variables
- `OPENAI_API_KEY`: Your OpenAI API key.