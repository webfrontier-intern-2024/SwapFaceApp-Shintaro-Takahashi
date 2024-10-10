export const getApiKey = (): string => {
    if (!process.env.API_KEY) {
      throw new Error('API key is missing in the environment variables.');
    }
    return process.env.API_KEY;
  };
  