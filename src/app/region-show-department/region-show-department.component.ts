import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {HttpClientDepartmentService} from "../../services/http-client-department.service";
import {IDepartment} from "../../model/api-gouv/iDepartment";

@Component({
  selector: 'app-region-show-department',
  templateUrl: './region-show-department.component.html',
  styleUrls: ['./region-show-department.component.scss']
})
export class RegionShowDepartmentComponent implements OnChanges {

  @Input()
  codeRegion: string = '';

  departments: IDepartment[] = [];

  constructor(private httpClientDepartmentService: HttpClientDepartmentService) { }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    const oldValue = simpleChanges.codeRegion.previousValue;
    const newValue = simpleChanges.codeRegion.currentValue;
    if (oldValue !== newValue) {
      this.codeRegion = newValue;
      this.httpClientDepartmentService.getDepartmentsByCodeRegion(
        this.codeRegion
      ).subscribe((departments) => {
        this.departments = departments;
      });
    }
  }

}
