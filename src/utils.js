export const baseSiteUrl = "https://news.ycombinator.com";

export function getUserUrl(username) {
  if (!username) return "#";

  return `${baseSiteUrl}/user?id=${username}`;
}
