import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  localbaseUrl = "http://localhost:9000/";
  baseUrl = 'https://blogwithbackendapi.onrender.com/';
  signupUrl = 'api/v1/auth/signup';
  signinUrl = 'api/v1/auth/login';
  blogUrl = 'api/v1/blogs';
  postLikeUrl = 'api/v1/blogs/like';
  usersUrl = 'api/v1/users';
  getUserBlogsByUrl = 'api/v1/blogs/author';
  getBlogByItsIdUrl = 'api/v1/blogs';
  getUserByItsIdUrl = 'api/v1/users';
  updateUserById = 'api/v1/users';
  postUnLikeUrl = 'api/v1/blogs/unlike'

  constructor(private http: HttpClient) {}

  getAllBlogs() {
    let header = new HttpHeaders();
    return this.http.get<any>(this.baseUrl + this.blogUrl, {
      headers: header,
    });
  }

  getAllUsers() {
    let header = new HttpHeaders();
    return this.http.get<any>(this.baseUrl + this.usersUrl, {
      headers: header,
    });
  }

  signIn(data: any) {
    return this.http.post<any>(this.baseUrl + this.signinUrl, data);
  }

  signUp(data: any) {
    return this.http.post<any>(this.baseUrl + this.signupUrl, data);
  }

  postBlog(data: any) {
    return this.http.post<any>(this.baseUrl + this.blogUrl, data);
  }

  updateBlog(blogId: any, data: any) {
    console.log(blogId, data);
    return this.http.put<any>(this.baseUrl + this.blogUrl + '/' + blogId, data);
  }

  postLikeBlog(id: any, userId:any) {
    console.log(id);
    return this.http.put<any>(this.baseUrl + this.postLikeUrl + '/' + id, {userId:userId});
  }

  postUnlikeBlog(id: any, userId:any) {
    console.log(id);
    return this.http.put<any>(this.baseUrl + this.postUnLikeUrl + '/' + id, {userId:userId});
  }


  getBlogsOfUser(authorId: any) {
    console.log(authorId);
    let header = new HttpHeaders();
    return this.http.get<any>(
      this.baseUrl + this.getUserBlogsByUrl + '/' + authorId
    );
  }

  getBlogById(id: any) {
    return this.http.get<any>(this.baseUrl + this.getBlogByItsIdUrl + '/' + id);
  }

  getUserById(id: any) {
    return this.http.get<any>(this.baseUrl + this.getUserByItsIdUrl + '/' + id);
  }

  updateUser(id: any, data: any) {
    console.log(id, data);
    return this.http.put<any>(
      this.baseUrl + this.updateUserById + '/' + id,
      data
    );
  }

  deleteBlog(blogId:any){
    return this.http.delete<any>(this.baseUrl + this.blogUrl + '/' + blogId);
  }

  deleteUser(userId:any){
    return this.http.delete<any>(this.baseUrl + this.usersUrl + '/' + userId);
  }
}
