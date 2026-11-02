// GROQ queries for when the site moves to Sanity. Field names match /sanity/schemas.

export const eventsQuery = `*[_type == "raceEvent"] | order(coalesce(date, "9999") desc){
  "slug": slug.current, name, venue, city, date, status, divisions,
  "cover": cover.asset->url, "gallery": gallery[].asset->url,
  podiums[]{division, "photo": photo.asset->url}
}`;

export const ambassadorsQuery = `*[_type == "ambassador"] | order(order asc){
  name, sport, bio, instagram, since, "photo": photo.asset->url
}`;

export const crewsQuery = `*[_type == "crew"] | order(order asc){
  name, "logo": logo.asset->url
}`;

export const faqsQuery = `*[_type == "faq"] | order(order asc){ category, question, answer }`;
