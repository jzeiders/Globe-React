//>>built
(function(d,c){"object"===typeof exports&&"undefined"!==typeof module&&"function"===typeof require?c(require("../moment")):"function"===typeof define&&define.amd?define(["../moment"],c):c(d.moment)})(this,function(d){function c(a){return 5>a%10&&1<a%10&&1!==~~(a/10)%10}function b(a,b,d){var e=a+" ";switch(d){case "m":return b?"minuta":"minut\u0119";case "mm":return e+(c(a)?"minuty":"minut");case "h":return b?"godzina":"godzin\u0119";case "hh":return e+(c(a)?"godziny":"godzin");case "MM":return e+
(c(a)?"miesi\u0105ce":"miesi\u0119cy");case "yy":return e+(c(a)?"lata":"lat")}}var f="stycze\u0144 luty marzec kwiecie\u0144 maj czerwiec lipiec sierpie\u0144 wrzesie\u0144 pa\u017adziernik listopad grudzie\u0144".split(" "),g="stycznia lutego marca kwietnia maja czerwca lipca sierpnia wrze\u015bnia pa\u017adziernika listopada grudnia".split(" ");return d.defineLocale("pl",{months:function(a,b){return""===b?"("+g[a.month()]+"|"+f[a.month()]+")":/D MMMM/.test(b)?g[a.month()]:f[a.month()]},monthsShort:"sty lut mar kwi maj cze lip sie wrz pa\u017a lis gru".split(" "),
weekdays:"niedziela poniedzia\u0142ek wtorek \u015broda czwartek pi\u0105tek sobota".split(" "),weekdaysShort:"nie pon wt \u015br czw pt sb".split(" "),weekdaysMin:"Nd Pn Wt \u015ar Cz Pt So".split(" "),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dzi\u015b o] LT",nextDay:"[Jutro o] LT",nextWeek:"[W] dddd [o] LT",lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zesz\u0142\u0105 niedziel\u0119 o] LT";
case 3:return"[W zesz\u0142\u0105 \u015brod\u0119 o] LT";case 6:return"[W zesz\u0142\u0105 sobot\u0119 o] LT";default:return"[W zesz\u0142y] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:b,mm:b,h:b,hh:b,d:"1 dzie\u0144",dd:"%d dni",M:"miesi\u0105c",MM:b,y:"rok",yy:b},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})});