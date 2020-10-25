import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { SpinnerService } from '../spinner/spinner.service';
import { finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class Interceptor implements HttpInterceptor {
  private totalRequests = 0;

  constructor(private spinner: SpinnerService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log("clickec");
    this.spinner.requestStarted();
    return next.handle(request).pipe(
      finalize(() => {
        this.spinner.requestEnded();
      })
    );
  }
}
