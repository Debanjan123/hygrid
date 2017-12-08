import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hfadatabase',
  templateUrl: './HFADataBase.component.html',
  styleUrls: ['./HFADataBase.component.css']
})
export class HFADataBaseComponent implements OnInit {

  public sourceTableMenu = [{ field: 'ravi', header: 'ravi' }, { field: 'deba', header: 'deba' }];
  constructor(
    private router: Router,
    public route: ActivatedRoute
  ) {
  }

  ngOnInit() {
  }

  addNewSource(): void {
    this.router.navigate(['/hfaDatabase/add']);
  }

}
