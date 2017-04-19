var http = require('http');
var request = require('request');

http.createServer(function(req, res){
    console.log('Get request!');
    request.post(
        {
            url:'http://ycchen.im.ncnu.edu.tw/join.php',
            form: {name:'Wang Jiun Jie', id:'104213083'}
        }, 
        function(err,httpResponse,body)
            {  
                if (err){
                    return console.error('Post failed:', err);
                }
                console.log('Post successful!');
                res.writeHead(200,
                    {
                        "Content-Type": "text/html;charset=utf-8"
                    }
                );
                res.write(body);
                res.end();
            }
    );
}).listen(8080);//1024以下port 需要sudo權限
