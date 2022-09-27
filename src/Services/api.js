import 'dotenv';

const API_KEY = process.env.API_KEY;
const url = 'https://api.core.ac.uk/v3/search/works';

const h = new Headers();
h.append('Authorization', API_KEY);

const request = new Request(url, {
  method: 'GET',
  headers: h,
  mode: 'cors'
});

export const fetchDocuments = async () => {
  try {
    const result = await fetch(request);
    const resultJSON = await result.json();
    return resultJSON
  } catch (error) {
    console.log(error);
  }
}