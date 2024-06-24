import { HttpInterceptorFn } from '@angular/common/http';
import { StorageEdit } from '../helpers/storage-edit';

export const demoInterceptor: HttpInterceptorFn = (req, next) => {
const se = new StorageEdit()
  const authReq = req.clone({
    setHeaders: {
      Authorization: ""
    }
  });

  return next(authReq);
};