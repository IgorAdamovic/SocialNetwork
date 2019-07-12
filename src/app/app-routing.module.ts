import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ListMembersComponent } from './member/list-members.component';
import { EditMemberComponent } from './member/edit-member.component';
import { PageNotFoundComponent } from './page-not-found.component';

const appRoutes: Routes = [
  { path: 'list', component: ListMembersComponent },
  { path: 'edit/:id', component: EditMemberComponent }, 
  { path: '', redirectTo: '/list', pathMatch: 'full' }, 
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ], 
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
