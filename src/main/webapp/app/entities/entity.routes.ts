import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'demoJhAngular870App.adminAuthority.home.title' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'country',
    data: { pageTitle: 'demoJhAngular870App.country.home.title' },
    loadChildren: () => import('./country/country.routes'),
  },
  {
    path: 'department',
    data: { pageTitle: 'demoJhAngular870App.department.home.title' },
    loadChildren: () => import('./department/department.routes'),
  },
  {
    path: 'employee',
    data: { pageTitle: 'demoJhAngular870App.employee.home.title' },
    loadChildren: () => import('./employee/employee.routes'),
  },
  {
    path: 'job',
    data: { pageTitle: 'demoJhAngular870App.job.home.title' },
    loadChildren: () => import('./job/job.routes'),
  },
  {
    path: 'job-history',
    data: { pageTitle: 'demoJhAngular870App.jobHistory.home.title' },
    loadChildren: () => import('./job-history/job-history.routes'),
  },
  {
    path: 'location',
    data: { pageTitle: 'demoJhAngular870App.location.home.title' },
    loadChildren: () => import('./location/location.routes'),
  },
  {
    path: 'region',
    data: { pageTitle: 'demoJhAngular870App.region.home.title' },
    loadChildren: () => import('./region/region.routes'),
  },
  {
    path: 'task',
    data: { pageTitle: 'demoJhAngular870App.task.home.title' },
    loadChildren: () => import('./task/task.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
