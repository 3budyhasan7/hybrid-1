// Plain schema objects — copy this folder into a Sanity Studio (`npm create sanity@latest`)
// and add `schemaTypes` to the `schema.types` array in sanity.config.ts.

const raceEvent = {
  name: "raceEvent",
  title: "Event",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name" } },
    { name: "venue", title: "Venue", type: "string" },
    { name: "city", title: "City", type: "string" },
    { name: "date", title: "Date", type: "date" },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: { list: ["Sold out", "Registration open", "Coming soon"] },
    },
    { name: "cover", title: "Cover photo", type: "image", options: { hotspot: true } },
    { name: "gallery", title: "Moments", type: "array", of: [{ type: "image" }] },
    { name: "divisions", title: "Divisions", type: "array", of: [{ type: "string" }] },
    {
      name: "podiums",
      title: "Podiums",
      type: "array",
      of: [{ type: "object", fields: [{ name: "division", type: "string" }, { name: "photo", type: "image" }] }],
    },
  ],
};

export default raceEvent;
