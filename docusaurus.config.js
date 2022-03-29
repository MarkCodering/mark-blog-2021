// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mark Chen',
  tagline: 'The Official Website from Mark Chen',
  url: 'https://www.marknext.co.in',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/Logo.png',
  organizationName: 'Mark Chen', // Usually your GitHub org/user name.
  projectName: 'Mark Chen Personal Website', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Logo',
          src: 'img/Logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'About',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/contact', label: 'Contact', position: 'left'}
		,{
            href: 'https://github.com/MarkCodering',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'About',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Contact',
                to: '/contact',
              },
            ],
          },
          {
            title: 'Connect with me',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/mark-chen-next/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/MarkCodering',
              },
              {
                label: 'Microsoft Learn Student Ambassador Profile',
                href: 'https://studentambassadors.microsoft.com/en-US/profile/103340',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'YouTube Channel',
                href: 'https://www.youtube.com/channel/UCkPWNhP80z41tEDvuCMSfGQ',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/mark.chen.sstm',
              },  
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mark Chen. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      googleAdsense: {
      dataAdClient: 'ca-pub-4933498318589101',
    },
    }),
    plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-W39BR9K95E',
        anonymizeIP: true,
      },
    ]
  ],
};

module.exports = config;
