import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RouteService } from '../../shared/';
import { LeftPanelModel } from './left-panel.model';
@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

  private leftPanelMenu: Array<LeftPanelModel> = new Array<LeftPanelModel>();
  constructor(private router: Router,
    public route: ActivatedRoute,
    private routeService: RouteService) { }

  ngOnInit() {
    this.leftPanelMenu = this.routeService.selectTopMenu(this.route.snapshot.url);
  }
  
  public onClickLeftMenuPanel(header): void {
    this.router.navigate([header.href]);
  }

}
