import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'c97'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '803'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'c63'),
    exact: true
  },
  {
    path: '/blog/tags/lampo',
    component: ComponentCreator('/blog/tags/lampo', 'f68'),
    exact: true
  },
  {
    path: '/blog/tags/lightning-network',
    component: ComponentCreator('/blog/tags/lightning-network', 'c43'),
    exact: true
  },
  {
    path: '/blog/testing',
    component: ComponentCreator('/blog/testing', '48d'),
    exact: true
  },
  {
    path: '/blog/v23.12',
    component: ComponentCreator('/blog/v23.12', '20b'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '46e'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '224'),
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
    component: ComponentCreator('/', 'e4e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
