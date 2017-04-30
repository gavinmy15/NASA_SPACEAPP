//載入MySQL模組
var mysql = require('mysql');
//建立連線
var connection = mysql.createConnection({
    host: 'http://140.112.30.204',
    user: 'yottabyte',
    password: 'Yotta2015Byte',
    database: 'nasa_spaceapps'
});

//開始連接
connection.connect();
/*
//接著就可以開始進行查詢
connection.query('SELECT 1 + 1 AS solution',function(error, rows, fields){
    //檢查是否有錯誤
    if(error){
        throw error;
    }
    console.log(rows[0].solution); //2
});*/
/*// 引用MySQL函式庫
var mysql = require('mysql');
// 資料庫設定
var db_config = {
    user: 'yottabyte',
    password: 'Yotta2015Byte',
    host: 'http://140.112.30.204',
    port: '80'
    database: 'nasa_spaceapps'
};
// 資料庫連線
var connection;
// 處理資料庫斷線
function handleDisconnect() {
    // 與資料庫連線
    connection = mysql.createConnection(db_config);

    // 資料庫連線發生錯誤處理
    connection.connect(function(err) {
        if(err) {
          console.log('error when connecting to db:', err);
          // 2秒後重新連線
          setTimeout(handleDisconnect, 2000);
        }
    });

    // 連線發生錯誤處理
    connection.on('error', function(err) {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            // 連線失效處理
            handleDisconnect();
        } else {
            throw err;
        }
    });
}

// 連線
handleDisconnect();*/