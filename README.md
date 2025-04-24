# Main Chatbot

A robust chatbot implementation using the XAI API with Grok integration.

## Features

- XAI API integration with Grok model
- RESTful API endpoints
- Health check monitoring
- Detailed error handling and logging
- Development tools included

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
# Production
npm start

# Development (with auto-reload)
npm run dev
```

## API Endpoints

### Health Check
```
GET /health
```
Returns server status and timestamp.

### Chat
```
POST /chat
```
Send a message to the chatbot.

Request body:
```json
{
  "message": "Your message here"
}
```

Response:
```json
{
  "id": "chatcmpl-123",
  "object": "chat.completion",
  "created": 1677652288,
  "model": "grok-3-latest",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Response from the chatbot"
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 9,
    "completion_tokens": 12,
    "total_tokens": 21
  }
}
```

## Development

### Available Scripts

- `npm start` - Start the server
- `npm run dev` - Start the server with auto-reload
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Environment Variables

The server can be configured using the following environment variables:

- `PORT` - Server port (default: 3000)

## API Configuration

The chatbot uses the XAI API with the following configuration:
- Model: grok-3-latest
- Temperature: 0
- Stream: false

## Note

This implementation includes the API key directly in the code. In a production environment, it's recommended to use environment variables or a secure key management system. 