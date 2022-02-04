import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HhtpserverdownInterceptor implements HttpInterceptor {

  constructor(private router: Router, private location: Location) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("srtartyhufi");
    return next.handle(request)
      // .pipe(
      //   catchError((error: HttpErrorResponse) => {
      //     if (error.status == 0) {
      //       this.router.navigateByUrl("/nointernet")
      //     }
      //     return throwError(error.error)
      //   })
      // )
  }
}
