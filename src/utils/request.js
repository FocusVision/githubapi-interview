const BASE_URL = 'https://api.github.com'

const request = (path, options = {}) =>
  fetch(BASE_URL + path, {
    ...options,
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `Basic ${btoa(
        `${process.env.REACT_APP_GITHUB_USERNAME}:${process.env.REACT_APP_GITHUB_TOKEN}`
      )}`,
    },
  }).then((response) => response.json())

export default request
