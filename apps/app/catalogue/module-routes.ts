/*
 * Copyright (c) 2023 - 2024 drolx Labs
 *
 * Licensed under the Business Source License 1.1 and Trace Source Available License 1.0
 * you may not use this file except in compliance with the License.
 * Change License: Reciprocal Public License 1.5
 *     https://mariadb.com/bsl11
 *     https://trace.ng/licenses/license-1-0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Author: Godwin peter .O (me@godwin.dev)
 * Created At: Sunday, 17th Mar 2024
 * Modified By: Godwin peter .O
 * Modified At: Tue May 21 2024
 */

import type { Route } from '@trace/base/typings';
import type { Workspace } from '@trace/shared';

export default (
  service: Workspace,
  hideChildren: boolean = true,
  moduleString: string | null = null,
): Route | Route[] => {
  const name = 'catalogue';
  const module = moduleString !== null ? moduleString : `${service}-${name}`;
  const mainView = `${module}.catalogue-items`;

  const route: Route = {
    name: module,
    path: name,
    redirect: { name: mainView },
    meta: {
      menu: 'module',
      title: 'shared.catalogue',
      icon: 'bi-boxes',
      hideChildren,
      removeChildren: false,
    },
    children: [],
  };

  const children: Route[] = [
    {
      name: `${module}.catalogue-items`,
      path: 'catalogue-items',
      component: () => import('./pages/CatalogueItemsView.vue'),
      meta: {
        title: 'shared.catalogueItems',
        icon: 'bi-boxes',
        menu: true,
      },
    },
    {
      name: `${module}.catalogue-brands`,
      path: 'brands',
      component: () => import('./pages/CatalogueBrandsView.vue'),
      meta: {
        title: 'shared.catalogueBrands',
        icon: 'bi-textarea',
        menu: true,
      },
    },
    {
      name: `${module}.catalogue-categories`,
      path: 'categories',
      component: () => import('./pages/CatalogueCategoriesView.vue'),
      meta: {
        title: 'shared.catalogueCategories',
        icon: 'bi-box2',
        menu: true,
      },
    },
  ];

  if (hideChildren) {
    route.children = children;
  } else {
    return children;
  }

  return route;
};
