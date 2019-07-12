import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from './member.service';
import { IMember } from './IMember';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {
  member: IMember;
  membersFriend: IMember;
  friends: IMember[] = [];
  friendsId: number[] = [];
  friendsOfFriends: IMember[] = [];
  suggestedFriends: IMember[] = [];  
  profilePhoto: string = '';

  constructor(private route: ActivatedRoute, 
              private _memberService: MemberService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const memId = +params.get('id');      
      this._memberService.getMember(memId).subscribe(
        (member) => {
          this.member = member;
          if (this.member.gender === 'male') {
            this.profilePhoto = '../assets/images/male.png';
          } else {
            this.profilePhoto = '../assets/images/female.png';
          }
          for (let i = 0; i < member.friends.length; i++) {
            this._memberService.getMember(member.friends[i]).subscribe(
              (friend) => {
                this.friends.push(friend); 
                this.friendsId.push(friend.id);  
              }                
            );                           
          };                                    
        },
        (error: any) => {
          console.log(error);
        } 
      );             
    });                         
  } 
  
  openFriendsOfFriendsTable(id: number) {    
    this.friendsOfFriends = [];
    this.suggestedFriends = [];
    this._memberService.getMember(id).subscribe(
      (membersFriend) => {
        this.membersFriend = membersFriend;
        for (let i = 0; i < membersFriend.friends.length; i++) {
          if (membersFriend.friends[i] !== this.member.id) {
            this._memberService.getMember(membersFriend.friends[i]).subscribe(
              (fof) => {                                        
                this.friendsOfFriends.push(fof);
                let broj = 0;
                for (let j = 0; j < fof.friends.length; j++) {
                  for (let k = 0; k < this.friendsId.length; k++) { 
                    if (fof.friends[j] === this.friendsId[k]) {
                      broj++;
                      if (broj > 1) {
                        if (this.suggestedFriends.indexOf(fof) === -1) {
                          this.suggestedFriends.push(fof);
                        }
                        broj = 0;
                      }
                    }  
                  }
                  if (j === fof.friends.length - 1) {
                    broj = 0;
                  }
                }                                      
              }
            );              
          }             
        }         
      }, 
      (error: any) => console.log(error)
    );    
  }
}
