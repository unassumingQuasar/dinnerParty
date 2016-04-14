var ajaxPost = (url, callback, context, input) => {
  $.ajax ({
    url: url,
    type: 'POST',
    data: input,
    success: (data) => { callback(data, context); },
    error: (data) => { callback('no dinner party for you!', data); }
  });
};

export default ajaxPost;
