import { defineConfig } from "vitepress";
import { generateSidebar, } from "vitepress-sidebar";
import wikilinks from "markdown-it-wikilinks";
import { VitePressSidebarOptions } from "vitepress-sidebar/types";

const commonSidebarOptions: VitePressSidebarOptions = {
  documentRootPath: "docs",
  useTitleFromFileHeading: true,
  useFolderTitleFromIndexFile: true,
  useFolderLinkFromIndexFile: true,
  rootGroupLink: "/",
  collapseDepth: 2,
  hyphenToSpace: true,
  underscoreToSpace: true,
  sortFolderTo: "bottom",
  sortMenusOrderNumericallyFromLink: true,
  capitalizeFirst: true,
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "ko-KR",
  title: "nukeguys",
  description: "Record unorganized thoughts. Keep organized notes.",

  markdown: {
    config: (md: any) => {
      md.use(
        wikilinks({
          baseURL: "/",
          relativeBaseURL: "./",
          suffix: "",
          generatePageNameFromLabel: (label: string) => {
            return label;
          },
          postProcessPageName: (pageName: string) => {
            return pageName.trim();
          },
        }),
      );
    },
  },

  head: [["link", { rel: "icon", href: "/favicon.png" }]],

  // _로 시작하는 폴더 제외
  srcExclude: ["**/_*/**", "**/_*.md"],

  // sitemap
  sitemap: {
    hostname: "https://journal.kkick.xyz",
  },

  cleanUrls: true,

  themeConfig: {
    logo: "/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Notes", link: "/notes/" },
      { text: "Learn AI", link: "/ai/" },
      { text: "OOTR", link: "https://ootr.kkick.xyz/" },
      {
        text: "More",
        items: [
          { text: "Brunch", link: "https://brunch.co.kr/@nukeguys" },
          { text: "Dev", link: "https://nukeguys.github.io/dev" },
          { text: "Life", link: "https://nukeguys.github.io/life" },
          { text: "Book", link: "https://nukeguys.github.io/book" },
        ],
      },
    ],

    // 사이드바 자동 생성
    sidebar: generateSidebar([
      {
        ...commonSidebarOptions,
        scanStartPath: "notes",
        basePath: "/notes/",
        resolvePath: "/notes/",
        rootGroupText: "Notes",
      },
      {
        ...commonSidebarOptions,
        scanStartPath: "ai",
        basePath: "/ai/",
        resolvePath: "/ai/",
        rootGroupText: "AI",
      },
      {
        ...commonSidebarOptions,
        scanStartPath: "inbox",
        basePath: "/inbox/",
        resolvePath: "/inbox/",
        rootGroupText: "Inbox",
      },
    ]),

    socialLinks: [
      { icon: "github", link: "https://github.com/nukeguys" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/seungkyu-sung" },
    ],

    search: {
      provider: "local",
    },

    footer: {
      message: "𝙁𝙡𝙪𝙘𝙩𝙪𝙖𝙩 𝙣𝙚𝙘 𝙢𝙚𝙧𝙜𝙞𝙩𝙪𝙧.",
      copyright: "© 2026 nukeguys",
    },

    outline: {
      level: "deep",
    },

    lastUpdated: {
      text: "Last Updated",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "short",
      },
    },
  },
});
