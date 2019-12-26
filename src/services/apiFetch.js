import 'cross-fetch/polyfill';
import config from '../../config.json';

export default
  ({ baseUrl = null, endPoint, method, token = null, body = null, params = null, headers = null }) =>
    new Promise((resolve, reject) => {

      let defaultHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8'
      };

      (token || config.token) && (defaultHeaders['Authorization'] = `Bearer ${token || config.token}`);

      const opts = {
        method,
        headers: {
          ...defaultHeaders,
          ...headers
        },
        body: body ? JSON.stringify(body) : null,
        credentials: 'include'
      };

      const urlParms = params ?
        '?' + Object.keys(params).map(key => key + '=' + params[key]).join('&')
        :
        '';

      const uri = `${baseUrl || config.baseUrl}${endPoint}${urlParms}`;

      console.log("the-movie::apiFetch::request", {
        opts,
        uri,
      });

      fetch(uri, opts)
        .then(response => {
          if (response.ok) {
            response.json().then(jsonResponse => {
              console.log('the-movie::apiFetch::jsonResponse', jsonResponse);
              resolve(jsonResponse)
            }).catch(reject);
          } else {
            response.json()
              .then(errJson => {
                console.log('the-movie::apiFetch::errJson', errJson);
                reject({ status: response.status, error: errJson })
              })
              .catch(reject);
          }
        })
        .catch((error) => {
          console.log('the-movie::apiFetch::error', error);
          reject(error)
        });
    });
