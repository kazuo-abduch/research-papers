const API_KEY = process.env.REACT_APP_API_KEY;
const url = 'https://core.ac.uk/api-v2/search/works?page=1&pageSize=10&';

export const fetchDocuments = async () => {
  try {
    const result = await fetch(`${url}&apiKey=${API_KEY}`);
    const resultJSON = await result.json();
    return resultJSON.results;
  } catch (error) {
    console.log(error);
  }
}