export const baseSiteUrl = "https://news.ycombinator.com";

export function getUserUrl(username) {
  if (!username) return "#";

  return `${baseSiteUrl}/user?id=${username}`;
}

export function getItemUrl(itemId) {
  if (!itemId) return "#";

  return `${baseSiteUrl}/story?id=${itemId}`;
}

export function getSourceUrl(url) {
  const regex = /(?:https?:\/\/)?(?:www\.)?(.*?)\//;
  let match = regex.exec(url);
  let sourceUrl = match[1] ? match[1] : "#";

  return sourceUrl;
}
