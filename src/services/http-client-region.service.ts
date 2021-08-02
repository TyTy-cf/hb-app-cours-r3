import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IRegion} from "../model/api-gouv/IRegion";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpClientRegionService {

  static urlRegions = 'https://geo.api.gouv.fr/regions';

  constructor(private httpClient: HttpClient) { }

  getRegions(): Observable<Array<IRegion>> {
    return this.httpClient.get<Array<IRegion>>(HttpClientRegionService.urlRegions);
  }

}
