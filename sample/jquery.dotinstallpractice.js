;(function($){
  $.fn.dotinstallpractice = function(options){
    let opts = $.extend({},$.fn.dotinstallpractice.defaults,options);
    switch (opts.lesson) {
    case 1:
        console.log("jQueryとはなにか？");

        alert("jQeuryとはなにか\n\n■ 概要\nJavaScriptを便利に扱うためのライブラリである");
        break;
    case 2:
        // セレクタ： 処理対象となるDOM要素を指定
        // メソッド： 処理
        // メソッドチェーン
        console.log("はじめてのjQuery");

        $('p').css('color','red').hide('slow');
        break;
    case 3:
        // セレクタ メソッド
        // $("")
        // html要素 p h1 ul
        // id #main
        // class .item
        console.log("idやclassを指定");

        $("#sub").css('color','red');
        $(".item").css('color','red');
        break;
    case 4:
        // セレクタ メソッド
        // > 直下の要素
        //   それ以下の要素
        // , 複数の要素
        // + 隣接する要素
        console.log("もっとセレクタを使う");

        //$("#main > .item").css('color', 'red');
        //$("#main .item").css('color', 'red');
        //$("p , .item").css('color', 'red');
        $(".item + .item").css('color', 'red');
        break;
    case 5:
        // フィルタ
        // :eq()
        // :gt(), :lt()
        // :even, :odd
        // :contains()
        // :first, :last
        console.log("フィルタを使う");

        //$("#sub > li:eq(2)").css('color','red');
        //$("#sub > li:gt(1)").css('color','red');
        //$("#sub > li:odd").css('color','red');
        $("#sub > li:contains('4')").css('color','red');
        break;
    case 6:
        // メソッドを使ったDOM要素の指定
        // parent(), children()
        // next(), prev()
        // siblings() - 兄弟要素
        console.log("メソッドを使ったDOM要素");

        //$("#sub").parent().css('color','red');
        //$("#sub").children().css('color','red');
        //$("#sub > li:eq(2)").next().css('color','red');
        //$("#sub > li:eq(2)").prev().css('color','red');
        $("#sub > li:eq(2)").siblings().css('color','red');
        break;
    case 7:
        // 属性セレクタ
        // =
        // !=
        // *=
        // ^=
        // $=
        console.log("属性セレクタを使う");

        //$('a[href="#google"]').css('background','red');
        //$('a[href!="#google"]').css('background','red');
        //$('a[href*="#dotinstall"]').css('background','red');
        $('a[href$="jp"]').css('background','red');
        break;
    case 8:
        // .css 設定 取得
        // addClass removeClass
        console.log("css,addClasss/removeClassを使う");

        //$('p').css('color','red').css('background','blue');
        //console.log($('p').css('color','red'));
        $('p').addClass('myStyle');
        break;
    case 9:
        // attr
        // data
        console.log("attr,dataを使う")

        //console.log($('a').attr('href'));
        //$('a').attr('href','#google.jp');
        console.log($('a').data('sitename'));
        break;
    case 10:
        // text
        // html
        // val
        // remove, empty
        console.log("タグの中身を操作");

        //$('p').text('just changed');
        //$('p').html('<a href=#>click me</a>');
        //console.log($('input').val());
        //$('input').val('hello, again!');
        //$('p').empty();
        $('p').remove();
        break;
    case 11:
        // before after -> insertBefore , insertAfter
        // prepend append -> prependTo , appendTo
        console.log("要素を追加する");

        let li = $('<li>').text('just added');
        //$('ul > li:eq(1)').before(li);
        //li.insertBefore($('ul > li:eq(1)'))
        //$('ul').prepend(li);
        //$('ul').append(li);
        li.appendTo($('ul'));
        break;
    case 12:
        // hide, show
        // fadeout, fadeIn
        // toggle
        console.log("エフェクトを使う");

        //$('#box').hide('slow');
        //$('#box').fadeOut(800);
        //$('#box').toggle(800);
        //$('#box').toggle(800); 
        //$('#box').toggle(800);    
        $('#box').fadeOut(800, function(){
            alert("gone!");
        });
        break;
    case 13:
        // click
        // mouseover, mouseout, mousemove 
        console.log("イベントを使う");

        $('#box').click(function(){
            alert("hi");
        });
        $('#box')
            .mouseover(function(){
                $(this).css('background','green');
            })
            .mouseout(function(){
                $(this).css('background','red');
            })
            .mousemove(function(e){
                $(this).text(e.pageX);
            });
        break;
    case 14:
        // focus, blur
        // change
        console.log("focus, blue, changeを使う");

        $('#name')
            .focus(function(){
                $(this).css('background','red');
            })
            .blur(function(){
                $(this).css('background','white');
            });
        $('#members').change(function(){
            alert('changed!');
        });
        break;
    case 15:
        console.log("onメソッドを使う");

        $('button').click(function(){
            let p = $('<p>').text('vanish!').addClass('vanish');
            $(this).before(p);
        });
        $('body').on('click', '.vanish',function(){
            $(this).remove();
        });        
        break;
    case 16:
        // Ajax
        // Asynchronous JavaScript + XML
        // サーバーと通信 + ページの書き換え
        console.log("Ajaxとはなにか");
        break;
    case 17:
        console.log("loadメソッドを使う");

        $('button').click(function(){
            $('#result').load('more.html');
        });
        break;
    case 18:
        // 非同期： 処理が終わる前に次の処理に移る
        console.log("非同期通信とはなにか");

        $('button').click(function(){
            $('#result').load('more.html', function(){
                $('#message').css('color','red');
            });
        });       
        break;
    case 19:
        // $.post
        // $.get
        console.log("$.getを使う");

        $('#greet').click(function(){
            $.get('greet.txt',{
                name: $('#name').val()
            }, function(data){
                $('#result').html(data);
                console.log(data);
            })
        });  
        break;
    case 20:
        console.log("JSONで値を返す");

        $('#greet').click(function(){
            $.get('greet.json',{
                name: $('#name').val()
            }, function(data){
                $('#result').html(data.message+'('+data.length+')');
                console.log(data);
            })
        });  
        break;
    default:
        console.log("設定されていません");
        break;
    }
  };

  $.fn.dotinstallpractice.defaults ={
    lesson: 1
  };

}(jQuery))