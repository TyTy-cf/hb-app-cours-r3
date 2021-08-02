import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IDepartment} from "../model/api-gouv/iDepartment";
import {HttpClientRegionService} from "./http-client-region.service";

@Injectable({
  providedIn: 'root'
})
export class HttpClientDepartmentServiceService {

  constructor(private httpClient: HttpClient) { }

  getDepartmentsByCodeRegion(codeRegion: string): Observable<Array<IDepartment>> {
    let url = HttpClientRegionService.urlRegions + '/' + codeRegion + '/departements';
    return this.httpClient.get<Array<IDepartment>>(url);
  }
}
