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
      header_banner: {
        vision: { path: "/vision" },
        cta_button: { label: "Learn More", path: "/about" },
      },
      properties: {
        cta_button: { path: "/properties" },
        card_item: { dynamic_path: "/properties/:id" },
      },
      blogs: {
        list_page: { path: "/blogs" },
        detail_page: { dynamic_path: "/blogs/:post_id" },
      },
    },
  },
};
