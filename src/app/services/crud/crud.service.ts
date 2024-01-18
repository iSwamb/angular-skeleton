import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ENVIRONMENT } from 'src/environments/environment';
import { InjectionToken } from '@angular/core';

export interface ServiceConfig {
  resourceEndpoint: string;
}

export const SERVICE_CONFIG = new InjectionToken<ServiceConfig>('ServiceConfig');

@Injectable({
  providedIn: 'root',
})
export class CrudService<TModel> {

  protected readonly baseUrl: string;
  protected readonly resourceEndpoint: string;

  constructor(
    protected httpClient: HttpClient,
    @Inject(SERVICE_CONFIG) config: ServiceConfig
  ) {
    this.baseUrl = ENVIRONMENT.apiBaseUrl;
    this.resourceEndpoint = config.resourceEndpoint;
  }

  getList() {
    return this.httpClient.get<TModel[]>(`${this.baseUrl}${this.resourceEndpoint}`);
  }

  getById(id: number) {
    return this.httpClient.get<TModel>(`${this.baseUrl}${this.resourceEndpoint}/${id}`);
  }

  add(dto: TModel) {
    return this.httpClient.post<TModel>(`${this.baseUrl}${this.resourceEndpoint}`, dto);
  }

  update(dto: TModel) {
    return this.httpClient.put<TModel>(`${this.baseUrl}${this.resourceEndpoint}`, dto);
  }

  remove(id: number) {
    return this.httpClient.delete<number>(`${this.baseUrl}${this.resourceEndpoint}/${id}`);
  }
}
