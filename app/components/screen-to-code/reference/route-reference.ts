export const STCV2Routes = {
  routes: {
    global: {
      header: {
        logo: { path: "/" },
        items: [
          { label: "About", path: "/about" },
          { label: "Properties", path: "/properties" },
          { label: "Agents", path: "/agents" },
          { label: "blogs", path: "/blogs" },
        ],
      },
      footer: {
        columns: [
          { items: ["/", "/about", "/agents"] },
          { items: ["/contact", "/faq", "/properties", "/blogs"] },
        ],
      },
    },
    modules: {
      vision: {
        cta_button: { label: "Learn more", path: "/about" },
      },
      properties: {
        cta_button: { label: "All properties",path: "/properties" },
        card_item: { dynamic_path: "/properties/:id" },
      },
      blogs: {
        card_item: { dynamic_path: "/blogs/:post_id" },
      },
    },
  },
};
