export function normalizeState(data, typeId = 'id') {
  const items = {};
  data.map(d => {
    items[d[typeId]] = d;
  });

  return items;
}

export const unNormalizeState = data => Object.keys(data).map(id => data[id]);
