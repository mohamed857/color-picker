import { HttpClient, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  // let httpclient = inject(HttpClient)

  let router = inject(Router)
  const token = localStorage.getItem('token');
  if (token) {
    let decodedToken = jwtDecode(token);
    const isExpired = decodedToken && decodedToken.exp ? (decodedToken.exp < Date.now() / 1000) : false;
    if (isExpired) {
      console.log("token is expired");
      // httpclient.post('http://localhost:3000/refresh',{}).subscribe(
      //   (newToken:any)=>{
      //     localStorage.setItem('token',newToken);
      //     req.clone({
      //       setHeaders:{
      //         Authorization:'Bearer '+newToken
      //       }
      //     })
      //   }
      // )
      localStorage.removeItem(token);
      router.navigateByUrl('/login');
    }
    else
      console.log('token not expired');

  }
  else{
    console.log('helloy');
    router.navigateByUrl('/login');
  }

  return next(req);
};
