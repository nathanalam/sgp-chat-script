// Example of making a chat completion request using the auto-generated API client with an API key

import { OpenAPI } from "./generated/core/OpenAPI.ts";
import { ChatCompletionsService } from "./generated/services/ChatCompletionsService.ts";
import { CreateChatCompletionRequest } from "./generated/models/CreateChatCompletionRequest.ts";

/**
 * Configure the API client with your API key
 * @param apiKey Your Scale EGP API key
 */
function configureApiClient() {
  // Set the API key as a bearer token in the OpenAPI configuration
  OpenAPI.TOKEN = Deno.env.get("SGP_API_KEY");
  OpenAPI.HEADERS = {
    "x-api-key": Deno.env.get("SGP_API_KEY") ?? "",
  };
}

/**
 * Make a chat completion request to the Scale EGP API
 * @param apiKey Your Scale EGP API key
 * @param model The model to use for the completion
 * @param systemPrompt Optional system prompt to guide the model
 * @param userMessage User message to send to the model
 * @param temperature Optional temperature parameter (0.0 to 1.0)
 * @returns Promise with the chat completion response
 */
async function makeChatCompletionRequest(
  model: CreateChatCompletionRequest.model = CreateChatCompletionRequest.model
    .GPT_4O,
  systemPrompt?: string,
  userMessage: string = "Hello, how are you?",
  temperature: number = 0.2
) {
  // Configure the API client with your API key
  configureApiClient();

  // Create messages array
  const messages = [];

  // Add system message if provided
  if (systemPrompt) {
    messages.push({
      role: "system",
      content: systemPrompt,
    });
  }

  // Add user message
  messages.push({
    role: "user",
    content: userMessage,
  });

  // Create the request body
  const requestBody: CreateChatCompletionRequest = {
    model: model,
    messages: messages,
    model_parameters: {
      temperature: temperature,
      // You can add other parameters here as needed
      // max_tokens: 500,
      // stop_sequences: ["STOP"],
    },
  };

  try {
    // Make the API request
    const response = await ChatCompletionsService.postV2V2ChatCompletions(
      requestBody
    );
    return response;
  } catch (error) {
    console.error("Error making chat completion request:", error);
    throw error;
  }
}

// Example usage
async function example() {
  const systemPrompt = "You are a helpful assistant.";
  const userMessage = "What is the capital of France?";

  try {
    const response = await makeChatCompletionRequest(
      CreateChatCompletionRequest.model.GPT_4O,
      systemPrompt,
      userMessage,
      0.2
    );
    console.log(
      "Assistant response:",
      response.chat_completion.message.content
    );
  } catch (error) {
    console.error("Failed to get chat completion:", error);
  }
}

example();
