// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Bervianto Leo Pratama",
  tagline: "Bervianto Leo Pratama's Blog",
  url: "https://gh.berviantoleo.my.id",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "berviantoleo", // Usually your GitHub org/user name.
  projectName: "berviantoleo.github.io", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  scripts: ["https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/berviantoleo/berviantoleo.github.io/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/berviantoleo/berviantoleo.github.io/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Bervianto Leo Pratama",
        logo: {
          alt: "My Site Logo",
          src: "img/favicon.png",
        },
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/resume", label: "About", position: "left" },
          {
            href: "https://github.com/berviantoleo/berviantoleo.github.io",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Other Blogs",
            items: [
              {
                label: "Dev.to",
                href: "https://dev.to/berviantoleo",
              },
              {
                label: "Medium",
                href: "https://medium.com/@berviantoleo",
              },
              {
                label: "Hashnode",
                href: "https://hashnode.berviantoleo.my.id/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/users/6948591/bervianto-leo-pratama",
              },
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/in/bervianto-leo-pratama/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/berviantoleo",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/berviantoleo",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bervianto Leo Pratama. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
