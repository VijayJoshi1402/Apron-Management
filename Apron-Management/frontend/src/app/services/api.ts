import { Injectable, inject } from '@angular/core';
import {
  HttpClient,
  HttpParams,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Api {

  private readonly http = inject(HttpClient);

  private readonly baseUrl = 'http://localhost:3000';
 
  get<T>(
    url: string,
    params?: Record<string, any>,
  ) {

    let httpParams = new HttpParams();

    if (params) {

      Object.keys(params).forEach((key) => {

        const value = params[key];

        if (
          value !== undefined &&
          value !== null &&
          value !== ''
        ) {
          httpParams = httpParams.set(
            key,
            value,
          );
        }

      });

    }

    return this.http.get<T>(
      `${this.baseUrl}${url}`,
      {
        params: httpParams,
      },
    );

  }

  post<T>(
    url: string,
    body: unknown,
  ) {

    return this.http.post<T>(
      `${this.baseUrl}${url}`,
      body,
    );

  }

  patch<T>(
    url: string,
    body: unknown,
  ) {

    return this.http.patch<T>(
      `${this.baseUrl}${url}`,
      body,
    );

  }

}