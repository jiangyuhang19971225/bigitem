var user = {
    /**
     * 
     * @param {*} username 用户名
     * @param {*} password 密码
     * @param {*} call 回调函数
     */
    login: function (username, password, call) {
        $.post('http://localhost:8000/admin/login', {
            user_name: username,
            password: password
        }, function (res) {
            call(res);




        })
    }
}