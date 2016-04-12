var ajaxGet = (url, callback, context) => {
  $.ajax ({
    url: url,
    type: 'GET',
    dataType: 'json',
    success: (data) => { callback(data, context); },
    error: (data) => { console.log('no dinner party for you!', data); }
  });
};

export default ajaxGet;
