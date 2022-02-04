import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.prod';
import { Injector } from '@angular/core';
import { AuthService } from '../auth.service';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient,
    private injector: Injector,
    ) { }

  //request with headers
  get(url: string): Observable<any | any[]> {
    const auth= {authToken:localStorage.getItem('token')}
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json; charset=utf-8');
    headers = headers.set('Authorization', `Bearer ${auth.authToken}`);
    console.log(environment.apiUrl + url)
    return this.http.get(environment.apiUrl + url, { headers: headers,observe:'response' });
  }

  post(url: string, data: any): Observable<any | any[]> {
    const auth= {authToken:localStorage.getItem('token')}
    console.log(auth.authToken);

    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json; charset=utf-8');
    headers = headers.set('Authorization', `Bearer ${auth.authToken}`);
    return this.http.post(environment.apiUrl + url, data, { headers: headers });
  }
  post_o(url: string, data: any): Observable<any | any[]> {
    const auth= {authToken:localStorage.getItem('token')}
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json; charset=utf-8');
    headers = headers.set('Authorization', `Bearer ${auth.authToken}`);
    return this.http.post(environment.apiUrl + url, data, { headers: headers,observe:'response' });
  }
  put(url: string, data: any): Observable<any | any[]> {
    const auth= {authToken:localStorage.getItem('token')}
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json; charset=utf-8');
    headers = headers.set('Authorization', `Bearer ${auth.authToken}`);
    return this.http.put(environment.apiUrl + url, data, { headers: headers ,observe:'response'});
  }

  delete(url: string): Observable<any | any[]> { //remove data if not needed
    const auth= {authToken:localStorage.getItem('token')}
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json; charset=utf-8');
    headers = headers.set('Authorization', `Bearer ${auth.authToken}`);
    return this.http.delete(environment.apiUrl + url, { headers: headers,observe:'response' });
  }

  //request without headers
  get_wh(url: string): Observable<any | any[]> {
    return this.http.get(environment.apiUrl + url);
  }

  post_wh(url: string, data: any): Observable<any | any[]> {
    return this.http.post(environment.apiUrl + url, data);
  }

  put_wh(url: string, data: any): Observable<any | any[]> {
    return this.http.put(environment.apiUrl + url, data);
  }

  delete_wh(url: string, data: any): Observable<any | any[]> { //remove data if not needed
    return this.http.delete(environment.apiUrl + url, data);
  }

  post_wh_o(url: string, data: any): Observable<any | any[]> {
    return this.http.post(environment.apiUrl + url, data,{observe:'response'});
  }
  postImage(url: string, data = {}): Observable<any | any[]> {
    const auth= {authToken:localStorage.getItem('token')}
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${auth.authToken}`);
    return this.http.post(environment.apiUrl + url, data,{ headers: headers,observe:'response',responseType:'json'});
  }
}
