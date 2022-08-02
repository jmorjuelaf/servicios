import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ConfigService {
  configUrl = "assets/servicios.json";

  constructor(private http: HttpClient) {}

  getConfig() {
    return this.http.get(this.configUrl);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
