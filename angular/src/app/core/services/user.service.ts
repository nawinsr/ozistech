import { Injectable } from '@angular/core';
import { ApiEndPoint } from '../config/apiEndPoint';
import { HttpService } from './http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpService) { }

  createMember(data: any) {
    return this.http.post_o(ApiEndPoint.member, data)
  }
  getSingleMember(id: any) {
    return this.http.get(ApiEndPoint.member + `/${id}`)

  }
  getAllMember() {
    return this.http.get(ApiEndPoint.member + '/all')
  }
  deleteMember(id: any) {
    return this.http.delete(ApiEndPoint.member + `/${id}`)

  }

  editMember(data: any, id: any) {
    return this.http.put(ApiEndPoint.member + `/${id}`, data)
  }




}
