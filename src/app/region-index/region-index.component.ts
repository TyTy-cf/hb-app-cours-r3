import { Component, OnInit } from '@angular/core';
import {HttpClientRegionService} from "../../services/http-client-region.service";
import {IRegion} from "../../model/api-gouv/IRegion";

@Component({
  selector: 'app-region-index',
  templateUrl: './region-index.component.html',
  styleUrls: ['./region-index.component.scss']
})
export class RegionIndexComponent implements OnInit {

  regions: Array<IRegion> = [];

  constructor(private httpClientRegionService: HttpClientRegionService) { }

  ngOnInit(): void {
    this.httpClientRegionService.getRegions().subscribe((regions) => {
      this.regions = regions;
    });
  }

}
