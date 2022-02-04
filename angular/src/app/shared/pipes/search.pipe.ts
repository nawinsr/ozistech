import { Pipe, PipeTransform } from '@angular/core';
export interface Album {
  // [
  //   {
  //       "id": 1,
  //       "clent_id": 3,
  //       "company_name": "Al Rajhi Banking & Investment Corporation",
  //       "logo": "3333333333",
  //       "contact_1": "22222222222",
  //       "contact_2": "11111111111",
  //       "status": 1,
  //       "transid": 8,
  //       "created_at": "2021-09-06T05:44:50.000Z",
  //       "updated_at": "2021-09-13T06:37:00.000Z",
  //       "email": "prakashguna10@gmail.com"
  //   },

  id: Number;
  client_id: number;
  company_name: string;
  contact_1: string;
  contact_2: string;
  email: string;
  status: any;
  logo: any;
}

@Pipe({
  name: 'search'
})



export class SearchPipe implements PipeTransform {



  transform(album: Album[], searchValue: string): Album[] {
    console.log(searchValue);
    console.log(album);

    if (!album || !searchValue) {
      return album
    }

    return  album.filter(album =>{
      console.log(album.company_name);

      album.company_name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      album.contact_1.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      album.contact_2.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      album.email.toString().includes(searchValue.toLocaleLowerCase())
    }  )
  }


}
