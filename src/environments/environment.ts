export const environment: {
  production: boolean;
  weatherApiUrl: string;
  XRapidAPIHostHeaderName: string;
  XRapidAPIHostHeaderValue: string;
  XRapidAPIKeyHeaderName: string;
  XRapidAPIKeyHeaderValue: string;
} = {
  production: false,
  weatherApiUrl: 'https://open-weather13.p.rapidapi.com/city/%7Bcity%7D',
  XRapidAPIHostHeaderName: 'X-RapidAPI-Host',
  XRapidAPIHostHeaderValue: 'open-weather13.p.rapidapi.com',
  XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
  XRapidAPIKeyHeaderValue: '079cd464f2msh080f52418d0d22fp1d6106jsn70636a5c1241'
};
