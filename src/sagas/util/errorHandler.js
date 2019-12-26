/*eslint indent: ["error", 2, { "SwitchCase": 1 }] no-console: 0 */

import { call } from 'redux-saga/effects'

export function* errorHandler(e) {
  yield call([console, console.log], 'the-movie::errorHandler::e', e)
  const statusCode = e.status || 'default'

  switch (statusCode) {
    case 401:
    case 404:
      yield call([console, console.log], 'e.status_message', (e.error && e.error.status_message));
      break;
    default:
      yield call([console, console.log], 'Error desconocido', e);
      break
  }
}
