import { getFieldsMainEntertainment } from './commons';
export const getEntertainmentCover = entertainments =>
  entertainments.map(entertainment => getFieldsMainEntertainment(entertainment));

export const filterForEntertainment = entertainments =>
  entertainments.filter(entertainment => entertainment.media_type !== 'person');
