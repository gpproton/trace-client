import type { Route } from '@trace/base-app/types/index';

export const onboardRoutes: Route[] = [
    {
        path: 'profile-type',
        name: 'on-board.profile-type',
        component: () => import('./pages/ProfileType.vue'),
        meta: {
            title: 'Profile Type',
            description: 'Select your preffered profile type'
        },
    },
    {
        path: 'workflow-type',
        name: 'on-board.workflow-type',
        component: () => import('./pages/WorkflowType.vue'),
        meta: {
            title: 'Workflow Type',
            description: 'Choose organization operation type'
        },
    },
    {
        path: 'organization-details',
        name: 'on-board.organization-details',
        component: () => import('./pages/OrganizationDetails.vue'),
        meta: {
            title: 'Organization Details',
            description: 'Enter required organization details'
        },
    },
];

const routes: Route[] = [
    {
        path: '/on-board',
        name: 'on-board',
        redirect: { name: 'on-board.profile-type' },
        component: () => import('./OnboardLayout.vue'),
        children: onboardRoutes
    },
];

export default routes;
