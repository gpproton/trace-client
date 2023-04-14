export const prefixString = (prefix: string, value: string) =>
  prefix + value.charAt(0).toUpperCase() + value.slice(1);

export const unprefixString = (prefix: string, value: string) =>
  value.charAt(prefix.length).toLowerCase() + value.slice(prefix.length + 1);
