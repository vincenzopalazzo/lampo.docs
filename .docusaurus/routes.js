import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'c20'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '1fd'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '454'),
    exact: true
  },
  {
    path: '/blog/tags/lampo',
    component: ComponentCreator('/blog/tags/lampo', '0c6'),
    exact: true
  },
  {
    path: '/blog/tags/lightning-network',
    component: ComponentCreator('/blog/tags/lightning-network', 'fc3'),
    exact: true
  },
  {
    path: '/blog/testing',
    component: ComponentCreator('/blog/testing', '332'),
    exact: true
  },
  {
    path: '/blog/v23.12',
    component: ComponentCreator('/blog/v23.12', '4a0'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'e88'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '990'),
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
    component: ComponentCreator('/', '56a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
