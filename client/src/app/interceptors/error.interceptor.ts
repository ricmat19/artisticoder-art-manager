//Section 7/28
// import {
//   HttpErrorResponse,
//   HttpEvent,
//   HttpHandler,
//   HttpInterceptorFn,
//   HttpRequest,
// } from '@angular/common/http';
// import { NavigationExtras } from '@angular/router';
// import { Observable, catchError } from 'rxjs';

// export const errorInterceptor: HttpInterceptorFn = (
//   req: HttpRequest<unknown>,
//   next: HttpHandler
// ): Observable<HttpEvent<unknown>> => {
//   return next.handle(req).pipe(
//     catchError((error: HttpErrorResponse) => {
//       if (error) {
//         switch (error.status) {
//           case 400:
//             if (error.error.errors) {
//               const modelStateErrors = [];
//               for (const key in error.error.errors) {
//                 if (error.error.errors[key])
//                   modelStateErrors.push(error.error.errors[key]);
//               }
//               throw modelStateErrors.flat();
//             } else {
//               console.log(error.error, error.status);
//             }
//             break;
//           case 401:
//             console.log("Unauthorized", error.status);
//             break;
//           case 404:
//             this.router.navigateByUrl("/not-found");
//             break;
//           case 500:
//             const navigationExtras: NavigationExtras = {
//               state: { error: error.error },
//             };
//             this.router.navigateByUrl('/server-error', NavigationExtras);
//             break;
//           default: {
//             console.log(error);
//             break;
//           }
//         }
//         throw error;
//       }
//     })
//   );
// };
