const LocalStorageService = (function(){
  var _service;
  function _getService() {
      if(!_service) {
          _service = this;
          return _service
      }
      return _service
  }

  function _setToken(token) {
      if(process.browser){
          localStorage.setItem('token', token);
      }
  }
  function _getAccessToken() {
      if(process.browser){
          return localStorage.getItem('token');
      }else{
          return '';
      }
  }

  function _clearToken() {
      if(process.browser){
          localStorage.removeItem('token');
      }
  }

  return {
      getService : _getService,
      setToken : _setToken,
      getAccessToken : _getAccessToken,
      clearToken : _clearToken
  }
})();

export default LocalStorageService;
