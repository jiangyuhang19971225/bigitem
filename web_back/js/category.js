var status = '添加'; //是添加还是修改

// 删除
function deleteTr(id) {
  // todos : 使用模态框去实现 删除确认
  if (window.confirm('你确定要删除吗？')) {
    // alert(id);
    category.del(id, function(res) {
      console.log(res);
      if (res.code === 200) {
        doQuery();
      }
    });
  }
}

// 查询，并显示

function doQuery() {
  category.show(function(res) {
    console.log(res);
    // res = { code:200,data:[],msg:"分类获取完毕"}
    // var htmlStr = template('tmp', res);
    // console.log(htmlStr);
    // // 取出数据，拼接表格
    // $('#tableContent').html(htmlStr);
    $('#tableContent').html(template('tmp', res));
  });
}
$(function() {
  doQuery();
});

// 编辑分类
function editTr(obj) {
  $('#addModal').modal('show');
  $('#addModal .modal-title').text('修改类型');
  $('#addModal #model_add').text('保存修改');
  status = '编辑';
  // 给文本框赋值
 console.log( $('#category_id').val(obj.id));  // 隐藏域


  
  
  $('#category_name').val(obj.name);
  $('#category_slug').val(obj.slug);
  $('#divResult').hide();
}

// 新增分类
$('#btnShowAddModal').click(function() {
  $('#category_name').val('');
  $('#category_slug').val('');
  status = '添加';
  $('#addModal .modal-title').text('新增分类');
  $('#addModal #model_add').text('新增');
  $('#divResult').hide();
});

// 新增和编辑共用一个模态框
$('#model_add').click(function() {
  // 用户的数据，进行简单判断
  var name = $('#category_name').val();
  var slug = $('#category_slug').val();
  console.log(name, slug);
  if (name === '' || slug === '') {
    $('#divResult').text('名字和别名不能为空');
  } else {
    if (status === '添加') {
      category.add(name, slug, function(res) {
        // console.log(res);
        if (res.code === 200) {
          $('#divResult').hide();
          $('#addModal').modal('hide');
          doQuery();
        } else {
          $('#divResult')
            .show()
            .text(res.msg);
        }
      });
    } else {
      // 编辑
      var id = $('#category_id').val();
      category.edit(id, name, slug, function(res) {
        // console.log(res);
        if (res.code === 200) {
          $('#divResult').hide();
          $('#addModal').modal('hide');
          doQuery();
        } else {
          $('#divResult')
            .show()
            .text(res.msg);
        }
      });
    }
  }
});