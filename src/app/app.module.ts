import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListMembersComponent } from './member/list-members.component';
import { AppRoutingModule } from './app-routing.module';
import { MemberService } from './member/member.service';
import { EditMemberComponent } from './member/edit-member.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMembersComponent,
    EditMemberComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
