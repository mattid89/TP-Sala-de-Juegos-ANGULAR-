import { log } from 'util';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class MiHttpService {

  constructor( public http: HttpClient ) { }

  public httpGetP ( url: string)
  {
    return this.http
    .get( url )
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  public httpPostP( url: string, objeto: any )
  {
    return this.http
    .get( url )
    .subscribe( data => {
      console.log( data );
      log('ola llaala');
      return data;
    });
  }

  public httpGetO ( url: string) {
    return this.http.get( url )
      .map( ( res ) => res )
      .catch( ( err: any ) => {throw (err.error || 'Server error')});
  }


  private extractData ( res )
  {
    return res || {};
  }

  private handleError ( error )
  {
    return error;
  }
}
