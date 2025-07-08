import axios from 'axios';

interface GetWeatherDataParams {
  endpoint: string;
  place_id: string;
  measurementSystem: string;
}

interface WeatherApiResponse {
  // Define properties based on the expected API response structure
  [key: string]: any;
}

export async function getWeatherData(
  endpoint: GetWeatherDataParams['endpoint'],
  place_id: GetWeatherDataParams['place_id'],
  measurementSystem: GetWeatherDataParams['measurementSystem']
): Promise<WeatherApiResponse | undefined> {

  const options: {
    method: 'GET';
    url: string;
    params: {
      place_id: string;
      timezone: string;
      language: string;
      units: string;
    };
    headers: {
      'x-rapidapi-key': string;
      'x-rapidapi-host': string;
    };
  } = {
    method: 'GET',
    url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
    params: {
      place_id,
      timezone: 'auto',
      language: 'en',
      units: measurementSystem
    },
    headers: {
      'x-rapidapi-key': 'e23c14f907msh0e54766de9c74a2p158334jsnda83d342d8fd',
      'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request<WeatherApiResponse>(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}