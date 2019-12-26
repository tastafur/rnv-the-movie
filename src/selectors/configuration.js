import { Api } from 'renative';
export const getSize = configuration => {
  let factor;
  switch (Api.formFactor) {
    case 'mobile':
      factor = 0;
      break;
    case 'tv':
    case 'desktop':
    case 'browser':
      factor = 2;
      break;
    default:
      factor = 0
      break;
  }
  return (configuration && configuration.images) ? configuration.images.backdrop_sizes[factor] : null;
}
export const getBaseUrlImage = configuration => (configuration && configuration.images) ? configuration.images.secure_base_url : null;
