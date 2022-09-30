const docList = require('./apiMock');

export const fecth = () => Promise.resolve({
  status: 200,
  ok: true,
  json: Promise.resolve(docList),
})