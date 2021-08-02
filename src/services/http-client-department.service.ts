import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IDepartment} from "../model/api-gouv/iDepartment";
import {sprintf} from "sprintf-js";

@Injectable({
  providedIn: 'root'
})
export class HttpClientDepartmentService {

  static urlDepartmentsByRegion = 'https://geo.api.gouv.fr/regions/%s/departements';

  constructor(private httpClient: HttpClient) { }

  getDepartmentsByCodeRegion(codeRegion: string): Observable<Array<IDepartment>> {
    return this.httpClient.get<Array<IDepartment>>(
      sprintf(HttpClientDepartmentService.urlDepartmentsByRegion, codeRegion)
    );
  }
}
