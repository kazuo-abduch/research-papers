const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchDocuments = async (page) => {
  const url = `https://core.ac.uk/api-v2/search/works?page=${page}&pageSize=10&`;
  try {
    const result = await fetch(`${url}apiKey=${API_KEY}`);
    const resultJSON = await result.json();
    return resultJSON.data;
  } catch (error) {
    console.log(error);
  }
}