import { getFieldsMainEntertainment } from './commons';
export const getSerieCover = series =>
  series.map(serie => getFieldsMainEntertainment(serie));
