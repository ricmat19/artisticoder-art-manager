import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { ProjectCreateComponent } from './projects/project-create/project-create.component';
import { authGuard } from './guards/auth.guard';
import { NotFoundComponent } from './errors/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [authGuard],
    children: [
      {
        path: 'projects',
        component: ProjectListComponent,
      },
      {
        path: 'projects/:id',
        component: ProjectDetailsComponent,
      },
      {
        path: 'projects/create',
        component: ProjectCreateComponent,
      },
    ],
  },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' },
];
