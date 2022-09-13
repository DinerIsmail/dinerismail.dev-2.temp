export const SITE = {
  name: "Diner Ismail",

  origin: "https://astrowind.vercel.app",
  basePathname: "/",

  title: "Diner Ismail",
  description:
    "I'm a web developer working on projects that make the world a better place.",
}

export const BLOG = {
  disabled: false,
  slug: "blog",

  postsWithoutBlogSlug: true,
  postsPerPage: 6,

  category: {
    disabled: false,
    slug: "category", // set empty to change from /category/some-slug to /some-slug
  },

  tag: {
    disabled: false,
    slug: "tag",
  },
}
