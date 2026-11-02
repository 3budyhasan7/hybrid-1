const order = { name: "order", title: "Order", type: "number" };

export const ambassador = {
  name: "ambassador",
  title: "Ambassador",
  type: "document",
  fields: [
    { name: "name", type: "string" },
    { name: "sport", type: "string" },
    { name: "bio", type: "text", rows: 3 },
    { name: "instagram", type: "string" },
    { name: "since", type: "string" },
    { name: "photo", type: "image", options: { hotspot: true } },
    order,
  ],
};

export const crew = {
  name: "crew",
  title: "Crew",
  type: "document",
  fields: [{ name: "name", type: "string" }, { name: "logo", type: "image" }, order],
};

export const faq = {
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    { name: "category", type: "string" },
    { name: "question", type: "string" },
    { name: "answer", type: "text", rows: 3 },
    order,
  ],
};
