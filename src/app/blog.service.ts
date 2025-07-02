import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  baseUrl = 'http://localhost:3000/blogs';
  saveForLaterBlogURL = 'http://localhost:3000/saveforlater';

  constructor(private http: HttpClient) {}

  getBlogById(id: any) {
    return this.http.get(this.baseUrl + '/' + id);
  }

  postBlog(data: any) {
    return this.http.post(this.baseUrl, data);
  }

  getAllBlogs() {
    return this.http.get(this.baseUrl);
  }

  updateBlog(id: any, data: any) {
    return this.http.put(this.baseUrl + '/' + id, data);
  }

  deleteBlog(id: any) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  postSaveForLaterBlog(data: any) {
    return this.http.post(this.saveForLaterBlogURL, data);
  }

  getSavedBlogsByUser(userId: any) {
    return this.http.get(`http://localhost:3000/saveforlater/${userId}`);
  }


  getAllSavedBlogs(){
    return this.http.get(this.saveForLaterBlogURL);
  }
}
