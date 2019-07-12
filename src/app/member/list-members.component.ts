import { Component, OnInit } from '@angular/core';
import { MemberService } from './member.service';
import { IMember } from './IMember';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-members',
  templateUrl: './list-members.component.html',
  styleUrls: ['./list-members.component.css']
})
export class ListMembersComponent implements OnInit {
  members: IMember[];

  constructor(private _memberService: MemberService, 
              private _router: Router) { }

  ngOnInit() {
    this._memberService.getMembers().subscribe(
      (listMembers) => this.members = listMembers, 
      (err) => console.log(err)
    );
  }

  editButtonClick(memberId: number) {
    this._router.navigate(['/edit', memberId]);
  }
}
