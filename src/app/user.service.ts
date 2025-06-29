import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  postUser(data: any) {
    return this.http.post(this.baseUrl, data);
  }

  getUserById(id: any) {
    return this.http.get(this.baseUrl + '/' + id);
  }

  getAllUsers() {
    return this.http.get(this.baseUrl);
  }

  updateUser(id: any, data: any) {
    return this.http.put(this.baseUrl + '/' + id, data);
  }

  deleteUser(id: any) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
