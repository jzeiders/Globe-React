//>>built
(function(c,a){"object"===typeof exports&&"undefined"!==typeof module&&"function"===typeof require?a(require("../moment")):"function"===typeof define&&define.amd?define(["../moment"],a):a(c.moment)})(this,function(c){return c.defineLocale("zh-hk",{months:"\u4e00\u6708 \u4e8c\u6708 \u4e09\u6708 \u56db\u6708 \u4e94\u6708 \u516d\u6708 \u4e03\u6708 \u516b\u6708 \u4e5d\u6708 \u5341\u6708 \u5341\u4e00\u6708 \u5341\u4e8c\u6708".split(" "),monthsShort:"1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),
weekdays:"\u661f\u671f\u65e5 \u661f\u671f\u4e00 \u661f\u671f\u4e8c \u661f\u671f\u4e09 \u661f\u671f\u56db \u661f\u671f\u4e94 \u661f\u671f\u516d".split(" "),weekdaysShort:"\u9031\u65e5 \u9031\u4e00 \u9031\u4e8c \u9031\u4e09 \u9031\u56db \u9031\u4e94 \u9031\u516d".split(" "),weekdaysMin:"\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d".split(""),longDateFormat:{LT:"Ah\u9edemm\u5206",LTS:"Ah\u9edem\u5206s\u79d2",L:"YYYY\u5e74MMMD\u65e5",LL:"YYYY\u5e74MMMD\u65e5",LLL:"YYYY\u5e74MMMD\u65e5Ah\u9edemm\u5206",
LLLL:"YYYY\u5e74MMMD\u65e5ddddAh\u9edemm\u5206",l:"YYYY\u5e74MMMD\u65e5",ll:"YYYY\u5e74MMMD\u65e5",lll:"YYYY\u5e74MMMD\u65e5Ah\u9edemm\u5206",llll:"YYYY\u5e74MMMD\u65e5ddddAh\u9edemm\u5206"},meridiemParse:/\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,meridiemHour:function(a,b){12===a&&(a=0);if("\u51cc\u6668"===b||"\u65e9\u4e0a"===b||"\u4e0a\u5348"===b)return a;if("\u4e2d\u5348"===b)return 11<=a?a:a+12;if("\u4e0b\u5348"===b||"\u665a\u4e0a"===b)return a+12},meridiem:function(a,
b,c){a=100*a+b;return 600>a?"\u51cc\u6668":900>a?"\u65e9\u4e0a":1130>a?"\u4e0a\u5348":1230>a?"\u4e2d\u5348":1800>a?"\u4e0b\u5348":"\u665a\u4e0a"},calendar:{sameDay:"[\u4eca\u5929]LT",nextDay:"[\u660e\u5929]LT",nextWeek:"[\u4e0b]ddddLT",lastDay:"[\u6628\u5929]LT",lastWeek:"[\u4e0a]ddddLT",sameElse:"L"},ordinalParse:/\d{1,2}(\u65e5|\u6708|\u9031)/,ordinal:function(a,b){switch(b){case "d":case "D":case "DDD":return a+"\u65e5";case "M":return a+"\u6708";case "w":case "W":return a+"\u9031";default:return a}},
relativeTime:{future:"%s\u5167",past:"%s\u524d",s:"\u5e7e\u79d2",m:"1 \u5206\u9418",mm:"%d \u5206\u9418",h:"1 \u5c0f\u6642",hh:"%d \u5c0f\u6642",d:"1 \u5929",dd:"%d \u5929",M:"1 \u500b\u6708",MM:"%d \u500b\u6708",y:"1 \u5e74",yy:"%d \u5e74"}})});