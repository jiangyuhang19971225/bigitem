var article = {
  /**
   *
   * @param {*} param  {key:'abc', type:1,state:'草稿'}
   * @param {*} callBack
   */
  show: function(param, callBack) {
    $.get(URLIST.article_show, param, function(res) {
      callBack(res);
    });
  },
  del: function(id, callBack) {
    $.get(URLIST.article_del, { id: id }, function(res) {
      callBack(res);
    });
  },
  add: function(fd, callBack) {
    $.ajax({
      url: URLIST.article_add,
      type: 'post',
      data: fd,
      processData: false, // 让jquery不要处理数据。它无法处理formData对象
      contentType: false, // 不要额外去设置请求头。它有自己的请求头
      success: function(res) {
        callBack(res);
      }
    });
  }
};
