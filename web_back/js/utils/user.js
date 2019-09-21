var user = {
    /**
     * 
     * @param {*} username 用户名
     * @param {*} password 密码
     * @param {*} call 回调函数
     */
    login: function (username, password, call) {
        $.post(URL.user_login, { user_name: username, password: password }, function (res) {
            call(res);
        })
    },
    logout: function (call) {
        $.post(URL.user_logout, function (res) {
            call(res);
        })
    },
    getInfo: function (call) {
        $.get(URL.user_getinfo, function (res) {
            call(res);
        })
    }
}