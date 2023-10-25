import type { Route } from '@trace/base-app/types/index';

export const onboardRoutes: Route[] = [
    {
        path: 'profile-type',
        name: 'on-board.profile-type',
        component: () => import('./pages/ProfileType.vue'),
        meta: {
            title: 'shared.profileType',
            description: 'Select your preffered profile type'
        },
    },
    {
        path: 'workflow-type',
        name: 'on-board.workflow-type',
        component: () => import('./pages/WorkflowType.vue'),
        meta: {
            title: 'shared.workflowType',
            description: 'Choose organization operation type'
        },
    },
    {
        path: 'organization-details',
        name: 'on-board.organization-details',
        component: () => import('./pages/OrganizationDetails.vue'),
        meta: {
            title: 'shared.organizationDetails',
            description: 'Enter required organization details'
        },
    },
    {
        path: 'registration',
        name: 'on-board.registration',
        component: () => import('./pages/Registration.vue'),
        meta: {
            title: 'shared.registration',
            description: 'Start registration process for account'
        },
    },
    {
        path: 'representative',
        name: 'on-board.representative',
        component: () => import('./pages/Reprensentative.vue'),
        meta: {
            title: 'shared.representative',
            description: 'Required representative details for account'
        },
    },
    {
        path: 'verification',
        name: 'on-board.verification',
        component: () => import('./pages/Verify.vue'),
        meta: {
            title: 'shared.verification',
            description: 'OPT verification for representative'
        },
    },
    {
        path: 'confirmation',
        name: 'on-board.confirmation',
        component: () => import('./pages/Confirmation.vue'),
        meta: {
            title: 'shared.confirmation',
            description: ''
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
