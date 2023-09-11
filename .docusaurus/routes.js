import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'fe2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'c0a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'fa8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '335'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '790'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '01f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '7ea'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '48e'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'b73'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '45a'),
    exact: true
  },
  {
    path: '/blog/tags/lampo',
    component: ComponentCreator('/blog/tags/lampo', 'c78'),
    exact: true
  },
  {
    path: '/blog/tags/lightning-network',
    component: ComponentCreator('/blog/tags/lightning-network', '9dd'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'ca2'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'f66'),
    routes: [
      {
        path: '/docs/category/lampo-lightning-node---basics',
        component: ComponentCreator('/docs/category/lampo-lightning-node---basics', '5e6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-lampod-basics/basic-configuration',
        component: ComponentCreator('/docs/tutorial-lampod-basics/basic-configuration', '12e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-lampod-basics/configure-bitcoin-backend',
        component: ComponentCreator('/docs/tutorial-lampod-basics/configure-bitcoin-backend', '8ec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-lampod-basics/how-to-configure',
        component: ComponentCreator('/docs/tutorial-lampod-basics/how-to-configure', '5b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-lampod-basics/how-to-contribute',
        component: ComponentCreator('/docs/tutorial-lampod-basics/how-to-contribute', 'c74'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-lampod-basics/how-to-use',
        component: ComponentCreator('/docs/tutorial-lampod-basics/how-to-use', '19a'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e6d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
