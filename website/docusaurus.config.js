// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import path from 'path';
import {themes as prismThemes} from 'prism-react-renderer';

// const titleVal = 'Example of documentation site';
const titleVal = '案件名(仮)';
const descriptionVal = 'Example of documentation site.';
const urlVal = process.env.NODE_ENV !== 'development' ? 'https://xxx' : 'http://localhost:3000';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: titleVal,
  // description: descriptionVal,
  tagline: '',
  favicon: 'img/icooon-mono-book8.svg',

  url: urlVal,
  baseUrl: '/',

  organizationName: 'flatring',
  projectName: 'example-document-site',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
    // locales: ['ja', 'en-US'],
    // localeConfigs: {
    //   'ja': {
    //     label: '日本語',
    //   },
    //   'en-US': {
    //     label: 'English'
    //   }
    // }
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // routeBasePath: '/',
          sidebarPath: './sidebars.js',
          remarkPlugins: [
            require('@akebifiky/remark-simple-plantuml')
          ],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
    [
      'redocusaurus',
      {
        debug: Boolean(process.env.DEBUG || process.env.CI),
        config: path.join(__dirname, 'redocly.yaml'),
        specs: [
          {
            id: 'using-multi-file-yaml',
            spec: 'openapi/openapi.yaml',
            route: '/api/redoc-example/',
          }
        ],
        theme: {
          primaryColor: '#1890ff',
          /**
           * @see https://github.com/redocly/redoc#redoc-options-object
           */
          options: {
            hideHostname: true,
            noAutoAuth: true,
            sortPropsAlphabetically: true,
            jsonSampleExpandLevel: 1,
            scrollYOffset: 100,
          },
          /**
           * @see https://github.com/redocly/redoc#redoc-theme-object
           */
          theme: {},
        }
      }
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/illustrain-book.png',
      hideableSidbar: true,
      metadata: [
        { name: 'description', content: descriptionVal },
        { name: 'og:title', content: titleVal }
      ],
      navbar: {
        title: titleVal,
        logo: {
          alt: 'Example document site.',
          src: 'img/icooon-mono-book8.svg',
          href: '/docs/introduction/',
        },
        items: [
          // {
          //   label: 'Introduction',
          //   type: 'doc',
          //   position: 'left',
          //   docId: 'introduction/index',
          // },
          {
            label: '要件定義',
            type: 'doc',
            position: 'left',
            docId: 'requirement-definition/index',
          },
          {
            label: '外部',
            type: 'doc',
            position: 'left',
            docId: 'external/index',
          },
          {
            label: '内部',
            type: 'doc',
            position: 'left',
            docId: 'internal/index',
          },
          {
            label: 'API',
            position: 'left',
            items: [
              {
                label: 'redoc example',
                to: '/api/redoc-example/',
              },
            ]
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Legal',
            items: [
              {
                label: 'Privacy',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Terms',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Cookie Policy',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ${titleVal}. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      {
        hashed: true,
        language: ['jp', 'en'],
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],
};

export default config;
