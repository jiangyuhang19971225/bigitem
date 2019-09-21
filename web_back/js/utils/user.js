var user = {
    /**
     * 
     * @param {*} username 用户名
     * @param {*} password 密码
     * @param {*} call 回调函数
     */
    login: function (username, password, call) {
        $.post('http://localhost:8000/admin/login', { user_name: username, password: password }, function (res) {
            call(res);
        })
    },
    logout: function (call) {
        $.post('http://localhost:8000/admin/logout', function (res) {
            call(res);
        })
    },
    getInfo: function (call) {
        $.get('http://localhost:8000/admin/getuser', function (res) {
            call(res);
        })
    }
}