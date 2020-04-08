<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="kids_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <link rel="icon" href="/_res/imgfavicon.ico" />

    <title>桃園市立龍潭圖書館兒童館</title>
    <link rel="stylesheet" type="text/css" href="/_res/css/kids.css" />
</head>
<body>
    <div class="navbar">
        <div class="wrapper">
            <a href="/kids/" id="nav-logo"></a>
            <div class="nav">
                <a href="event_list.aspx" id="item_1" class="nav-item">
                    <span>活動資訊</span>
                </a>
                <a href="history.aspx" id="item_2" class="nav-item">
                    <span>黃金年代</span>
                </a>
                <a href="biography.aspx" id="item_3" class="nav-item">
                    <span>鄧雨賢</span>
                </a>
                <a href="/" id="item_4" class="nav-item">
                    <span>大朋友版</span>
                </a>
            </div>
        </div>
    </div>
    <div class="container">
        <div id="on-floor">
            <a href="#" id="people_1" class="people">
                <div id="imagination_1" class="imagination"></div>
            </a>

            <a href="#" id="people_2" class="people"></a>
            <a href="#" id="people_3" class="people">
                <div id="imagination_3" class="imagination"></div>
            </a>
            <a href="#" id="people_4" class="people">
                <div id="imagination_4" class="imagination"></div>
            </a>
            <a href="#" id="people_5" class="people"></a>
            <a href="#" id="people_6" class="people">
                <div id="imagination_6" class="imagination"></div>
            </a>
            <a href="#" id="people_7" class="people">
                <div id="imagination_7" class="imagination"></div>
            </a>
            <a href="#" id="people_8" class="people">
                <div id="imagination_8" class="imagination"></div>
            </a>
        </div>
        <div id="bookshelfe">
            <a href="event_list.aspx" id="board" class="item"></a>
            <a href="biography.aspx" id="biography" class="item">
                <div class="reaction" id="reaction_2"></div>
            </a>
            <a href="history.aspx" id="recorder" class="item">
                <div class="reaction" id="reaction_1"></div>
            </a>
        </div>

        <div id="floor"></div>
        <div id="wall">
            <div class="windows"></div>
            <div id="wall-shadow"></div>
        </div>
    </div>

    <script src="/_res/js/less.js"></script>
    <script src="/_res/js/jquery.js"></script>
    <script>
    $('.people').click(function(){
        $(this).children('.imagination').addClass('show')
    })
    
    </script>
</body>
</html>
