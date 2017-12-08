export class ApiUrl {

  static serverMode = true;

  static localUrl = 'http://localhost';
  static serverUrl = '';

  static baseUrl: string = ApiUrl.serverMode === true ? ApiUrl.serverUrl : ApiUrl.localUrl;




  static prodMode = true; /* this is for production or development url */
  static LOGIN_URI_PORT = ApiUrl.prodMode === true ? ':46001/' : ':3000/';
  static MAIN_URI_PORT = ApiUrl.prodMode === true ? ':46001/' : ':3000/';
  static DOCUMENT_STORE_URI_PORT = ApiUrl.prodMode === true ? ':46001/' : ':3000/';


  static LOGIN_URI = ApiUrl.baseUrl + ApiUrl.LOGIN_URI_PORT;
  static MAIN_URI = ApiUrl.baseUrl + ApiUrl.MAIN_URI_PORT;
  static DOCUMENT_STORE_URI = ApiUrl.baseUrl + ApiUrl.DOCUMENT_STORE_URI_PORT;
}


