(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application":"trxtest.Application","qx.revision":"exported","qx.theme":"trxtest.theme.Theme","qx.version":"1.4"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"qx.application":"trxtest.Application","qx.debug":false,"qx.revision":"exported","qx.theme":"trxtest.theme.Theme","qx.version":"1.4"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"qx":{"resourceUri":"resource","sourceUri":"script","version":"1.4"},"trxtest":{"resourceUri":"resource","sourceUri":"script","version":"trunk"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["__out__:trxtest.js"]],
  urisBefore : [],
  packageHashes : {"0":"aac26cda59c1"},
  boot : "boot",
  closureParts : {},
  bootIsInline : true,
  addNoCacheParam : false,
  
  decodeUris : function(compressedUris)
  {
    var libs = qx.$$libraries;
    var uris = [];
    for (var i=0; i<compressedUris.length; i++)
    {
      var uri = compressedUris[i].split(":");
      var euri;
      if (uri.length==2 && uri[0] in libs) {
        var prefix = libs[uri[0]].sourceUri;
        euri = prefix + "/" + uri[1];
      } else {
        euri = compressedUris[i];
      }
      if (qx.$$loader.addNoCacheParam) {
        euri += "?nocache=" + Math.random();
      }
      
      uris.push(euri);
    }
    return uris;      
  }
};  

function loadScript(uri, callback) {
  var elem = document.createElement("script");
  elem.charset = "utf-8";
  elem.src = uri;
  elem.onreadystatechange = elem.onload = function()
  {
    if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")
    {
      elem.onreadystatechange = elem.onload = null;
      callback();
    }
  };
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }
  loadScript(list.shift(), function() {
    if (isWebkit) {
      // force asynchronous load
      // Safari fails with an "maximum recursion depth exceeded" error if it is
      // called sync.      
      window.setTimeout(function() {
        loadScriptList(list, callback);
      }, 0);
    } else {
      loadScriptList(list, callback);
    }
  });
}

var fireContentLoadedEvent = function() {
  qx.$$domReady = true;
  document.removeEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
};
if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
}

qx.$$loader.importPackageData = function (dataMap, callback) {
  if (dataMap["resources"]){
    var resMap = dataMap["resources"];
    for (var k in resMap) qx.$$resources[k] = resMap[k];
  }
  if (dataMap["locales"]){
    var locMap = dataMap["locales"];
    var qxlocs = qx.$$locales;
    for (var lang in locMap){
      if (!qxlocs[lang]) qxlocs[lang] = locMap[lang];
      else 
        for (var k in locMap[lang]) qxlocs[lang][k] = locMap[lang][k];
    }
  }
  if (dataMap["translations"]){
    var trMap   = dataMap["translations"];
    var qxtrans = qx.$$translations;
    for (var lang in trMap){
      if (!qxtrans[lang]) qxtrans[lang] = trMap[lang];
      else 
        for (var k in trMap[lang]) qxtrans[lang][k] = trMap[lang][k];
    }
  }
  if (callback){
    callback(dataMap);
  }
}

qx.$$loader.signalStartup = function () 
{
  qx.$$loader.scriptLoaded = true;
  if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) {
    qx.event.handler.Application.onScriptLoaded();
    qx.$$loader.applicationHandlerReady = true; 
  } else {
    qx.$$loader.applicationHandlerReady = false;
  }
}

qx.$$loader.init = function(){
  var l=qx.$$loader;
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){
      l.initUris();
    });
  } else {
    l.initUris();
  }
}

qx.$$loader.initUris = function(){
  var l=qx.$$loader;
  var bootPackageHash=l.packageHashes[l.parts[l.boot][0]];
  if (l.bootIsInline){
    l.importPackageData(qx.$$packageData[bootPackageHash]);
    l.signalStartup();
  } else {
    loadScriptList(l.decodeUris(l.uris[l.parts[l.boot]]), function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        l.importPackageData(qx.$$packageData[bootPackageHash] || {});
        l.signalStartup();
      }, 0);
    });
  }
}
})();

qx.$$packageData['aac26cda59c1']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Zone"},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Zone"}},"resources":{"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-checked.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-disabled.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-hovered.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-preselected.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button.png":[80,60,"png","qx"],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox-undetermined-disabled.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-focused-invalid.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-focused.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-hovered-invalid.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-hovered.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-invalid.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/checked-disabled.png":[6,6,"png","qx"],"qx/decoration/Modern/form/checked.png":[6,6,"png","qx"],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error.png":[127,30,"png","qx"],"qx/decoration/Modern/form/undetermined-disabled.png":[6,2,"png","qx"],"qx/decoration/Modern/form/undetermined.png":[6,2,"png","qx"],"qx/decoration/Modern/group-item.png":[110,20,"png","qx"],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox.png":[255,59,"png","qx"],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane.png":[185,250,"png","qx"],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active.png":[49,24,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active.png":[48,22,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-active.png":[69,21,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive.png":[69,21,"png","qx"],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/decoration/Modern/window/statusbar.png":[369,15,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx"],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"],"trxtest/test.png":[32,32,"png","trxtest"]},"translations":{"C":{},"en":{}}};
(function(){var m="toString",k=".",j="default",h="Object",g='"',f="Array",e="()",d="String",c="Function",b=".prototype",L="function",K="Boolean",J="Error",I="constructor",H="warn",G="hasOwnProperty",F="string",E="toLocaleString",D="RegExp",C='\", "',t="info",u="BROKEN_IE",r="isPrototypeOf",s="Date",p="",q="qx.Bootstrap",n="]",o="Class",v="error",w="[Class ",y="valueOf",x="Number",A="count",z="debug",B="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return w+this.classname+n;
},createNamespace:function(name,M){var O=name.split(k);
var parent=window;
var N=O[0];

for(var i=0,P=O.length-1;i<P;i++,N=O[i]){if(!parent[N]){parent=parent[N]={};
}else{parent=parent[N];
}}parent[N]=M;
return N;
},setDisplayName:function(Q,R,name){Q.displayName=R+k+name+e;
},setDisplayNames:function(S,T){for(var name in S){var U=S[name];

if(U instanceof Function){U.displayName=T+k+name+e;
}}},define:function(name,V){if(!V){var V={statics:{}};
}var bb;
var Y=null;
qx.Bootstrap.setDisplayNames(V.statics,name);

if(V.members||V.extend){qx.Bootstrap.setDisplayNames(V.members,name+b);
bb=V.construct||new Function;

if(V.extend){this.extendClass(bb,bb,V.extend,name,ba);
}var W=V.statics||{};
for(var i=0,bc=qx.Bootstrap.getKeys(W),l=bc.length;i<l;i++){var bd=bc[i];
bb[bd]=W[bd];
}Y=bb.prototype;
var X=V.members||{};
for(var i=0,bc=qx.Bootstrap.getKeys(X),l=bc.length;i<l;i++){var bd=bc[i];
Y[bd]=X[bd];
}}else{bb=V.statics||{};
}var ba=this.createNamespace(name,bb);
bb.name=bb.classname=name;
bb.basename=ba;
bb.$$type=o;
if(!bb.hasOwnProperty(m)){bb.toString=this.genericToString;
}if(V.defer){V.defer(bb,Y);
}qx.Bootstrap.$$registry[name]=V.statics;
return bb;
}};
qx.Bootstrap.define(q,{statics:{LOADSTART:qx.$$start||new Date(),DEBUG:(function(){var be=true;

if(qx.$$environment&&qx.$$environment["qx.debug"]===false){be=false;
}
if(qxvariants&&qxvariants["qx.debug"]=="off"){be=false;
}return be;
})(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(bf,bg,bh,name,bi){var bl=bh.prototype;
var bk=new Function;
bk.prototype=bl;
var bj=new bk;
bf.prototype=bj;
bj.name=bj.classname=name;
bj.basename=bi;
bg.base=bf.superclass=bh;
bg.self=bf.constructor=bj.constructor=bf;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(bm){return bm.__count__;
},"default":function(bn){var length=0;

for(var bo in bn){length++;
}return length;
}})[(({}).__count__==0)?A:j],objectMergeWith:function(bp,bq,br){if(br===undefined){br=true;
}
for(var bs in bq){if(br||bp[bs]===undefined){bp[bs]=bq[bs];
}}return bp;
},__a:[r,G,E,m,y,I],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(bt){var bu=[];
var bw=Object.prototype.hasOwnProperty;

for(var bx in bt){if(bw.call(bt,bx)){bu.push(bx);
}}var bv=qx.Bootstrap.__a;

for(var i=0,a=bv,l=a.length;i<l;i++){if(bw.call(bt,a[i])){bu.push(a[i]);
}}return bu;
},"default":function(by){var bz=[];
var bA=Object.prototype.hasOwnProperty;

for(var bB in by){if(bA.call(by,bB)){bz.push(bB);
}}return bz;
}})[typeof (Object.keys)==
L?B:
(function(){for(var bC in {toString:1}){return bC;
}})()!==m?u:j],getKeysAsString:function(bD){var bE=qx.Bootstrap.getKeys(bD);

if(bE.length==0){return p;
}return g+bE.join(C)+g;
},__b:{"[object String]":d,"[object Array]":f,"[object Object]":h,"[object RegExp]":D,"[object Number]":x,"[object Boolean]":K,"[object Date]":s,"[object Function]":c,"[object Error]":J},bind:function(bF,self,bG){var bH=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var bI=Array.prototype.slice.call(arguments,0,arguments.length);
return bF.apply(self,bH.concat(bI));
};
},firstUp:function(bJ){return bJ.charAt(0).toUpperCase()+bJ.substr(1);
},firstLow:function(bK){return bK.charAt(0).toLowerCase()+bK.substr(1);
},getClass:function(bL){var bM=Object.prototype.toString.call(bL);
return (qx.Bootstrap.__b[bM]||bM.slice(8,-1));
},isString:function(bN){return (bN!==null&&(typeof bN===F||qx.Bootstrap.getClass(bN)==d||bN instanceof String||(!!bN&&!!bN.$$isString)));
},isArray:function(bO){return (bO!==null&&(bO instanceof Array||(bO&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(bO.constructor,qx.data.IListData))||qx.Bootstrap.getClass(bO)==f||(!!bO&&!!bO.$$isArray)));
},isObject:function(bP){return (bP!==undefined&&bP!==null&&qx.Bootstrap.getClass(bP)==h);
},isFunction:function(bQ){return qx.Bootstrap.getClass(bQ)==c;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(bR,name){while(bR){if(bR.$$properties&&bR.$$properties[name]){return bR.$$properties[name];
}bR=bR.superclass;
}return null;
},hasProperty:function(bS,name){return !!qx.Bootstrap.getPropertyDefinition(bS,name);
},getEventType:function(bT,name){var bT=bT.constructor;

while(bT.superclass){if(bT.$$events&&bT.$$events[name]!==undefined){return bT.$$events[name];
}bT=bT.superclass;
}return null;
},supportsEvent:function(bU,name){return !!qx.Bootstrap.getEventType(bU,name);
},getByInterface:function(bV,bW){var bX,i,l;

while(bV){if(bV.$$implements){bX=bV.$$flatImplements;

for(i=0,l=bX.length;i<l;i++){if(bX[i]===bW){return bV;
}}}bV=bV.superclass;
}return null;
},hasInterface:function(bY,ca){return !!qx.Bootstrap.getByInterface(bY,ca);
},getMixins:function(cb){var cc=[];

while(cb){if(cb.$$includes){cc.push.apply(cc,cb.$$flatIncludes);
}cb=cb.superclass;
}return cc;
},$$logs:[],debug:function(cd,ce){qx.Bootstrap.$$logs.push([z,arguments]);
},info:function(cf,cg){qx.Bootstrap.$$logs.push([t,arguments]);
},warn:function(ch,ci){qx.Bootstrap.$$logs.push([H,arguments]);
},error:function(cj,ck){qx.Bootstrap.$$logs.push([v,arguments]);
},trace:function(cl){}}});
})();
(function(){var g="qx.Mixin",f=".prototype",e="constructor",d="[Mixin ",c="]",b="destruct",a="Mixin";
qx.Bootstrap.define(g,{statics:{define:function(name,h){if(h){if(h.include&&!(h.include instanceof Array)){h.include=[h.include];
}var k=h.statics?h.statics:{};
qx.Bootstrap.setDisplayNames(k,name);

for(var j in k){if(k[j] instanceof Function){k[j].$$mixin=k;
}}if(h.construct){k.$$constructor=h.construct;
qx.Bootstrap.setDisplayName(h.construct,name,e);
}
if(h.include){k.$$includes=h.include;
}
if(h.properties){k.$$properties=h.properties;
}
if(h.members){k.$$members=h.members;
qx.Bootstrap.setDisplayNames(h.members,name+f);
}
for(var j in k.$$members){if(k.$$members[j] instanceof Function){k.$$members[j].$$mixin=k;
}}
if(h.events){k.$$events=h.events;
}
if(h.destruct){k.$$destructor=h.destruct;
qx.Bootstrap.setDisplayName(h.destruct,name,b);
}}else{var k={};
}k.$$type=a;
k.name=name;
k.toString=this.genericToString;
k.basename=qx.Bootstrap.createNamespace(name,k);
this.$$registry[name]=k;
return k;
},checkCompatibility:function(m){var p=this.flatten(m);
var q=p.length;

if(q<2){return true;
}var t={};
var s={};
var r={};
var o;

for(var i=0;i<q;i++){o=p[i];

for(var n in o.events){if(r[n]){throw new Error('Conflict between mixin "'+o.name+'" and "'+r[n]+'" in member "'+n+'"!');
}r[n]=o.name;
}
for(var n in o.properties){if(t[n]){throw new Error('Conflict between mixin "'+o.name+'" and "'+t[n]+'" in property "'+n+'"!');
}t[n]=o.name;
}
for(var n in o.members){if(s[n]){throw new Error('Conflict between mixin "'+o.name+'" and "'+s[n]+'" in member "'+n+'"!');
}s[n]=o.name;
}}return true;
},isCompatible:function(u,v){var w=qx.Bootstrap.getMixins(v);
w.push(u);
return qx.Mixin.checkCompatibility(w);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(x){if(!x){return [];
}var y=x.concat();

for(var i=0,l=x.length;i<l;i++){if(x[i].$$includes){y.push.apply(y,this.flatten(x[i].$$includes));
}}return y;
},genericToString:function(){return d+this.name+c;
},$$registry:{},__c:null,__d:function(){}}});
})();
(function(){var j="",i="10.1",h="10.3",g="10.7",f="10.5",e="95",d="10.2",c="98",b="2000",a="10.6",T="10.0",S="10.4",R="2003",Q=")",P="iPhone",O="android",N="unix",M="ce",L="7",K="SymbianOS",q="MacPPC",r="iPod",o="\.",p="Win64",m="linux",n="me",k="Macintosh",l="Android",s="Windows",t="ios",A="vista",y="(",E="win",C="Linux",G="BSD",F="iPad",v="X11",J="xp",I="symbian",H="qx.bom.client.OperatingSystem",u="g",w="Win32",x="osx",z="|",B="nt4",D="MacIntel";
qx.Bootstrap.define(H,{statics:{getName:function(){var U=navigator&&navigator.platform;

if(!U){return j;
}
if(U.indexOf(s)!=-1||U.indexOf(w)!=-1||U.indexOf(p)!=-1){return E;
}else if(U.indexOf(k)!=-1||U.indexOf(q)!=-1||U.indexOf(D)!=-1){return x;
}else if(U.indexOf(r)!=-1||U.indexOf(P)!=-1||U.indexOf(F)!=-1){return t;
}else if(U.indexOf(C)!=-1){return m;
}else if(U.indexOf(v)!=-1||U.indexOf(G)!=-1){return N;
}else if(U.indexOf(l)!=-1){return O;
}else if(U.indexOf(K)!=-1){return I;
}return j;
},__e:{"Windows NT 6.1":L,"Windows NT 6.0":A,"Windows NT 5.2":R,"Windows NT 5.1":J,"Windows NT 5.0":b,"Windows 2000":b,"Windows NT 4.0":B,"Win 9x 4.90":n,"Windows CE":M,"Windows 98":c,"Win98":c,"Windows 95":e,"Win95":e,"Mac OS X 10_7":g,"Mac OS X 10.7":g,"Mac OS X 10_6":a,"Mac OS X 10.6":a,"Mac OS X 10_5":f,"Mac OS X 10.5":f,"Mac OS X 10_4":S,"Mac OS X 10.4":S,"Mac OS X 10_3":h,"Mac OS X 10.3":h,"Mac OS X 10_2":d,"Mac OS X 10.2":d,"Mac OS X 10_1":i,"Mac OS X 10.1":i,"Mac OS X 10_0":T,"Mac OS X 10.0":T},getVersion:function(){var X=[];

for(var W in this.__e){X.push(W);
}var Y=new RegExp(y+X.join(z).replace(/\./g,o)+Q,u);
var V=Y.exec(navigator.userAgent);

if(V&&V[1]){return qx.bom.client.OperatingSystem.__e[V[1]];
}return j;
}}});
})();
(function(){var n="-",m="",l="qx.bom.client.Locale",k="LOCALE",j="\n",h="VARIANT",g="Please check the API documentation of qx.core.Environment.",f="android",e="\nTrace:",d="' of '",a="'is deprecated: ",b="The constant '";
qx.Bootstrap.define(l,{statics:{LOCALE:"",VARIANT:"",getLocale:function(){var o=qx.bom.client.Locale.__f();
var p=o.indexOf(n);

if(p!=-1){o=o.substr(0,p);
}return o;
},getVariant:function(){var q=qx.bom.client.Locale.__f();
var s=m;
var r=q.indexOf(n);

if(r!=-1){s=q.substr(r+1);
}return s;
},__f:function(){var t=(navigator.userLanguage||navigator.language||m);
if(qx.bom.client.OperatingSystem.getName()==f){var u=/(\w{2})-(\w{2})/i.exec(navigator.userAgent);

if(u){t=u[0];
}}return t.toLowerCase();
}},defer:function(v){v.LOCALE=v.getLocale();
v.VARIANT=v.getVariant();
if(qx.Bootstrap.DEBUG){var w=[k,h];

for(var i=0;i<w.length;i++){if(v.__defineGetter__){var x=v[w[i]];
v.__defineGetter__(w[i],qx.Bootstrap.bind(function(y,c){var z=b+y+d+v.classname+a+g;

if(qx.dev&&qx.dev.StackTrace){z+=e+qx.dev.StackTrace.getStackTrace().join(j);
}qx.Bootstrap.warn(z);
return c;
},v,w[i],x));
}}}}});
})();
(function(){var l="",k="audio",j="video",i='video/ogg; codecs="theora, vorbis"',h="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",g="http://www.w3.org/TR/SVG11/feature#BasicStructure",f='audio',d='video/mp4; codecs="avc1.42E01E, mp4a.40.2"',c="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",b="audio/mpeg",z="org.w3c.dom.svg",y="DOMTokenList",x="1.1",w="audio/x-wav",u="audio/ogg",t="audio/x-aiff",s="qx.bom.client.Html",r='video',q="mshtml",p="label",n='video/webm; codecs="vp8, vorbis"',o="1.0",m="audio/basic";
qx.Bootstrap.define(s,{statics:{getWebWorker:function(){return window.Worker!=null;
},getGeoLocation:function(){return navigator.geolocation!=null;
},getAudio:function(){return !!document.createElement(f).canPlayType;
},getAudioOgg:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(u);
},getAudioMp3:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(b);
},getAudioWav:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(w);
},getAudioAu:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(m);
},getAudioAif:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(t);
},getVideo:function(){return !!document.createElement(r).canPlayType;
},getVideoOgg:function(){if(!qx.bom.client.Html.getVideo()){return l;
}var v=document.createElement(j);
return v.canPlayType(i);
},getVideoH264:function(){if(!qx.bom.client.Html.getVideo()){return l;
}var v=document.createElement(j);
return v.canPlayType(d);
},getVideoWebm:function(){if(!qx.bom.client.Html.getVideo()){return l;
}var v=document.createElement(j);
return v.canPlayType(n);
},getLocalStorage:function(){try{return window.localStorage!=null;
}catch(A){return false;
}},getSessionStorage:function(){try{return window.sessionStorage!=null;
}catch(B){return false;
}},getClassList:function(){return !!(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)===y);
},getXPath:function(){return !!document.evaluate;
},getXul:function(){try{document.createElementNS(h,p);
return true;
}catch(e){return false;
}},getSvg:function(){return document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature(z,o)||document.implementation.hasFeature(g,x));
},getVml:function(){return qx.bom.client.Engine.getName()==q;
},getCanvas:function(){return !!window.CanvasRenderingContext2D;
},getDataUrl:function(C){var D=new Image();
D.onload=D.onerror=function(){window.setTimeout(function(){C.call(null,(D.width==1&&D.height==1));
},0);
};
D.src=c;
}}});
})();
(function(){var k="xhr",j="Microsoft.XMLHTTP",i="",h="file:",g="https:",f="webkit",e="gecko",d="activex",c="opera",b=".",a="qx.bom.client.Transport";
qx.Bootstrap.define(a,{statics:{getMaxConcurrentRequestCount:function(){var l;
var o=qx.bom.client.Engine.getVersion().split(b);
var m=0;
var p=0;
var n=0;
if(o[0]){m=o[0];
}if(o[1]){p=o[1];
}if(o[2]){n=o[2];
}if(window.maxConnectionsPerServer){l=window.maxConnectionsPerServer;
}else if(qx.bom.client.Engine.getName()==c){l=8;
}else if(qx.bom.client.Engine.getName()==f){l=4;
}else if(qx.bom.client.Engine.getName()==e&&((m>1)||((m==1)&&(p>9))||((m==1)&&(p==9)&&(n>=1)))){l=6;
}else{l=2;
}return l;
},getSsl:function(){return window.location.protocol===g;
},getXmlHttpRequest:function(){var q=window.ActiveXObject?
(function(){if(window.location.protocol!==h){try{new window.XMLHttpRequest();
return k;
}catch(r){}}
try{new window.ActiveXObject(j);
return d;
}catch(s){}})():
(function(){try{new window.XMLHttpRequest();
return k;
}catch(t){}})();
return q||i;
}}});
})();
(function(){var p="",o="silverlight",n="wmv",m="mshtml",l="quicktime",k="divx",j="Windows Media",h="qx.bom.client.Plugin",g="WMPlayer.OCX.7",f="Silverlight",c="QuickTimeCheckObject.QuickTimeCheck.1",e="QuickTime",d="npdivx.DivXBrowserPlugin.1",b="DivX Web Player",a="AgControl.AgControl";
qx.Bootstrap.define(h,{statics:{getGears:function(){return !!(window.google&&window.google.gears);
},__g:{quicktime:{plugin:e,control:c},wmv:{plugin:j,control:g},divx:{plugin:b,control:d},silverlight:{plugin:f,control:a}},getQuicktimeVersion:function(){var q=qx.bom.client.Plugin.__g[l];
return qx.bom.client.Plugin.__h(q.control,q.plugin);
},getWindowsMediaVersion:function(){var r=qx.bom.client.Plugin.__g[n];
return qx.bom.client.Plugin.__h(r.control,r.plugin);
},getDivXVersion:function(){var s=qx.bom.client.Plugin.__g[k];
return qx.bom.client.Plugin.__h(s.control,s.plugin);
},getSilverlightVersion:function(){var t=qx.bom.client.Plugin.__g[o];
return qx.bom.client.Plugin.__h(t.control,t.plugin);
},getQuicktime:function(){var u=qx.bom.client.Plugin.__g[l];
return qx.bom.client.Plugin.__i(u.control,u.plugin);
},getWindowsMedia:function(){var v=qx.bom.client.Plugin.__g[n];
return qx.bom.client.Plugin.__i(v.control,v.plugin);
},getDivX:function(){var w=qx.bom.client.Plugin.__g[k];
return qx.bom.client.Plugin.__i(w.control,w.plugin);
},getSilverlight:function(){var x=qx.bom.client.Plugin.__g[o];
return qx.bom.client.Plugin.__i(x.control,x.plugin);
},__h:function(y,z){var A=qx.bom.client.Plugin.__i(y,z);
if(!A){return p;
}if(qx.bom.client.Engine.getName()==m){var B=new ActiveXObject(y);

try{var E=B.versionInfo;

if(E!=undefined){return E;
}E=B.version;

if(E!=undefined){return E;
}E=B.settings.version;

if(E!=undefined){return E;
}}catch(G){return p;
}return p;
}else{var F=navigator.plugins;
var D=/([0-9]\.[0-9])/g;

for(var i=0;i<F.length;i++){var C=F[i];

if(C.name.indexOf(z)!==-1){if(D.test(C.name)||D.test(C.description)){return RegExp.$1;
}else{return p;
}return p;
}}}},__i:function(H,I){if(qx.bom.client.Engine.getName()==m){var J=window.ActiveXObject;

if(!J){return false;
}
try{new ActiveXObject(H);
}catch(L){return false;
}return true;
}else{var K=navigator.plugins;

if(!K){return false;
}var name;

for(var i=0;i<K.length;i++){name=K[i].name;

if(name.indexOf(I)!==-1){return true;
}}return false;
}}}});
})();
(function(){var l="",k="function",j="gecko",h=".",g="[object Opera]",f="[^\\.0-9]",e="4.0",d="\nTrace:",b="1.9.0.0",a="WEBKIT",I="Please check the API documentation of qx.core.Environment.",H="9.0",G="UNKNOWN_VERSION",F="GECKO",E="8.0",D="FULLVERSION",C="Gecko",B="OPERA",A="AppleWebKit/",z="'is deprecated: ",s="NAME",t="UNKNOWN_ENGINE",q="MSHTML",r="VERSION",o="DOCUMENT_MODE",p="' of '",m="opera",n="mshtml",u="\n",v="The constant '",x="webkit",w="5.0",y="qx.bom.client.Engine";
qx.Bootstrap.define(y,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,getVersion:function(){var M=window.navigator.userAgent;
var K=l;

if(qx.bom.client.Engine.__j()){if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(M)){K=RegExp.$1+h+RegExp.$2;

if(RegExp.$3!=l){K+=h+RegExp.$3;
}}}else if(qx.bom.client.Engine.__k()){if(/AppleWebKit\/([^ ]+)/.test(M)){K=RegExp.$1;
var L=RegExp(f).exec(K);

if(L){K=K.slice(0,L.index);
}}}else if(qx.bom.client.Engine.__l()){if(/rv\:([^\);]+)(\)|;)/.test(M)){K=RegExp.$1;
}}else if(qx.bom.client.Engine.__m()){if(/MSIE\s+([^\);]+)(\)|;)/.test(M)){K=RegExp.$1;
if(K<8&&/Trident\/([^\);]+)(\)|;)/.test(M)){if(RegExp.$1==e){K=E;
}else if(RegExp.$1==w){K=H;
}}}}else{var J=window.qxFail;

if(J&&typeof J===k){K=J().FULLVERSION;
}else{K=b;
qx.Bootstrap.warn("Unsupported client: "+M+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return K;
},getName:function(){var name;

if(qx.bom.client.Engine.__j()){name=m;
}else if(qx.bom.client.Engine.__k()){name=x;
}else if(qx.bom.client.Engine.__l()){name=j;
}else if(qx.bom.client.Engine.__m()){name=n;
}else{var N=window.qxFail;

if(N&&typeof N===k){name=N().NAME;
}else{name=j;
qx.Bootstrap.warn("Unsupported client: "+window.navigator.userAgent+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return name;
},__j:function(){return window.opera&&Object.prototype.toString.call(window.opera)==g;
},__k:function(){return window.navigator.userAgent.indexOf(A)!=-1;
},__l:function(){return window.controllers&&window.navigator.product===C;
},__m:function(){return window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(window.navigator.userAgent);
}},defer:function(O){O.NAME=O.getName();
O.FULLVERSION=O.getVersion();

if(O.FULLVERSION==l){O.UNKNOWN_VERSION=true;
}
if(O.__j()){O.OPERA=true;

if(O.FULLVERSION==l){O.FULLVERSION="9.6.0";
}}else if(O.__k()){O.WEBKIT=true;

if(O.FULLVERSION==l){O.FULLVERSION="525.26";
}}else if(O.__l()){O.GECKO=true;

if(O.FULLVERSION==l){O.FULLVERSION="1.9.0.0";
}}else if(O.__m()){O.MSHTML=true;

if(document.documentMode){O.DOCUMENT_MODE=document.documentMode;
}}else{var P=window.qxFail;

if(P&&typeof P===k){if(P().NAME){O[P().NAME.toUpperCase()]=true;
}}else{O.GECKO=true;
O.UNKNOWN_ENGINE=true;
O.UNKNOWN_VERSION=true;
}}O.VERSION=parseFloat(O.FULLVERSION);
if(qx.Bootstrap.DEBUG){var Q=[s,D,r,B,a,F,q,t,G,o];

for(var i=0;i<Q.length;i++){if(O.__defineGetter__){var R=O[Q[i]];
O.__defineGetter__(Q[i],qx.Bootstrap.bind(function(S,c){var T=v+S+p+O.classname+z+I;

if(qx.dev&&qx.dev.StackTrace){T+=d+qx.dev.StackTrace.getStackTrace().join(u);
}qx.Bootstrap.warn(T);
return c;
},O,Q[i],R));
}}}}});
})();
(function(){var l="",k="mshtml",j="msie",h=")(/| )([0-9]+\.[0-9])",g="(",f="ce",e="CSS1Compat",d="android",b="operamini",a="\nTrace:",M="'is deprecated: ",L="Please check the API documentation of qx.core.Environment.",K="mobile chrome",J="iemobile",I="FULLVERSION",H="opera mobi",G="Mobile Safari",F="UNKNOWN",E="operamobile",D="ie",s="mobile safari",t="IEMobile|Maxthon|MSIE",q="NAME",r="qx.bom.client.Browser",o="opera mini",p="VERSION",m="' of '",n="opera",u="TITLE",v="\n",y="Opera Mini|Opera Mobi|Opera",x="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",A="The constant '",z="webkit",C="5.0",B="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",w="Mobile/";
qx.Bootstrap.define(r,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",getName:function(){var Q=navigator.userAgent;
var P=new RegExp(g+qx.bom.client.Browser.__n+h);
var O=Q.match(P);

if(!O){return l;
}var name=O[1].toLowerCase();
var N=qx.bom.client.Engine.getName();

if(N===z){if(name===d){name=K;
}else if(Q.indexOf(G)!==-1||Q.indexOf(w)!==-1){name=s;
}}else if(N===k){if(name===j){name=D;
if(qx.bom.client.OperatingSystem.getVersion()===f){name=J;
}}}else if(N===n){if(name===H){name=E;
}else if(name===o){name=b;
}}return name;
},getVersion:function(){var U=navigator.userAgent;
var T=new RegExp(g+qx.bom.client.Browser.__n+h);
var S=U.match(T);

if(!S){return l;
}var name=S[1].toLowerCase();
var R=S[3];
if(U.match(/Version(\/| )([0-9]+\.[0-9])/)){R=RegExp.$2;
}
if(qx.bom.client.Engine.getName()==k){R=qx.bom.client.Engine.getVersion();

if(name===j&&qx.bom.client.OperatingSystem.getVersion()==f){R=C;
}}return R;
},getDocumentMode:function(){if(document.documentMode){return document.documentMode;
}return 0;
},getQuirksMode:function(){if(qx.bom.client.Engine.getName()==k&&parseFloat(qx.bom.client.Engine.getVersion())>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==e;
}},__n:{"webkit":x,"gecko":B,"mshtml":t,"opera":y}[qx.bom.client.Engine.getName()]},defer:function(V){V.NAME=V.getName();
V.FULLVERSION=V.getVersion();
V.VERSION=parseFloat(V.FULLVERSION);
V.TITLE=V.NAME+" "+V.VERSION;

if(V.NAME!==l){V.UNKNOWN=false;
}if(qx.Bootstrap.DEBUG){var W=[I,p,q,u,F];

for(var i=0;i<W.length;i++){if(V.__defineGetter__){var X=V[W[i]];
V.__defineGetter__(W[i],qx.Bootstrap.bind(function(Y,c){var ba=A+Y+m+V.classname+M+L;

if(qx.dev&&qx.dev.StackTrace){ba+=a+qx.dev.StackTrace.getStackTrace().join(v);
}qx.Bootstrap.warn(ba);
return c;
},V,W[i],X));
}}}}});
})();
(function(){var k="background",j="linear-gradient(0deg, white 0%, red 100%)",h="placeholder",g="content",f="div",e="OTextOverflow",d="MozBorderRadius",c="qx.bom.client.Css",b='m11',a="input",x="-moz-linear-gradient(0deg, white 0%, red 100%)",w="gradient",v="MozBoxShadow",u="-o-linear-gradient(0deg, white 0%, red 100%)",t="borderRadius",s='WebKitCSSMatrix',r="WebkitBorderRadius",q="-webkit-gradient(linear,0% 0%,100% 100%,from(white), to(red))",p="mshtml",o="WebkitBoxShadow",m="textOverflow",n="boxShadow",l="border";
qx.Bootstrap.define(c,{statics:{getBoxModel:function(){var content=qx.bom.client.Engine.getName()!==p||!qx.bom.client.Browser.getQuirksMode();
return content?g:l;
},getTextOverflow:function(){return m in document.documentElement.style||e in document.documentElement.style;
},getPlaceholder:function(){var i=document.createElement(a);
return h in i;
},getBorderRadius:function(){return t in document.documentElement.style||d in document.documentElement.style||r in document.documentElement.style;
},getBoxShadow:function(){return n in document.documentElement.style||v in document.documentElement.style||o in document.documentElement.style;
},getTranslate3d:function(){return s in window&&b in new WebKitCSSMatrix();
},getGradients:function(){var y;

try{y=document.createElement(f);
}catch(A){y=document.createElement();
}var z=[q,x,u,j];

for(var i=0;i<z.length;i++){try{y.style[k]=z[i];

if(y.style[k].indexOf(w)!=-1){return true;
}}catch(B){}}return false;
}}});
})();
(function(){var c="notification",b="PhoneGap",a="qx.bom.client.PhoneGap";
qx.Bootstrap.define(a,{statics:{getPhoneGap:function(){return b in window;
},getNotification:function(){return c in navigator;
}}});
})();
(function(){var l=".",k="$1",j="",h="object",g="Shockwave Flash",f="undefined",e="REVISION",d="qx.bom.client.Flash",b="\nTrace:",a="ShockwaveFlash.ShockwaveFlash.7",H="STRICT_SECURITY_MODEL",G="osx",F="FULLVERSION",E="10.0.12",D="'is deprecated: ",C="win",B="ShockwaveFlash.ShockwaveFlash.6",A="VERSION",z="$version",y="' of '",s="EXPRESSINSTALL",t="6.0.65",q="mshtml",r="AVAILABLE",o="boolean",p="\n",m="always",n="Please check the API documentation of qx.core.Environment.",u="9.0.151",v="ShockwaveFlash.ShockwaveFlash",x="The constant '",w=",";
qx.Bootstrap.define(d,{statics:{AVAILABLE:false,FULLVERSION:"0.0.0",REVISION:"0",VERSION:0.0,EXPRESSINSTALL:false,STRICT_SECURITY_MODEL:false,isAvailable:function(){return parseFloat(qx.bom.client.Flash.getVersion())>0;
},getVersion:function(){if(qx.bom.client.Engine.getName()==q){if(!window.ActiveXObject){return j;
}var K=[0,0,0];
var J=false;

try{var L=new ActiveXObject(a);
}catch(N){try{var L=new ActiveXObject(B);
K=[6,0,21];
L.AllowScriptAccess=m;
}catch(O){if(K[0]==6){J=true;
}}
if(!J){try{L=new ActiveXObject(v);
}catch(P){}}}
if(!J&&typeof L==h){var I=L.GetVariable(z);

if(typeof I!=f){I=I.split(" ")[1].split(w);
K[0]=parseInt(I[0],10);
K[1]=parseInt(I[1],10);
K[2]=parseInt(I[2],10);
}}return K.join(l);
}else{if(!navigator.plugins||typeof navigator.plugins[g]!==h){return j;
}var K=[0,0,0];
var M=navigator.plugins[g].description;

if(typeof M!=f){M=M.replace(/^.*\s+(\S+\s+\S+$)/,k);
K[0]=parseInt(M.replace(/^(.*)\..*$/,k),10);
K[1]=parseInt(M.replace(/^.*\.(.*)\s.*$/,k),10);
K[2]=/r/.test(M)?parseInt(M.replace(/^.*r(.*)$/,k),10):0;
}return K.join(l);
}},getExpressInstall:function(){var R=qx.bom.client.Flash.getVersion();

if(R==j){return false;
}var Q=qx.bom.client.OperatingSystem.getName();
return (Q==C||Q==G)&&qx.bom.client.Flash.__o(t,R);
},getStrictSecurityModel:function(){var S=qx.bom.client.Flash.getVersion();

if(S==j){return false;
}var T=S.split(l);

if(T[0]<10){return qx.bom.client.Flash.__o(u,S);
}else{return qx.bom.client.Flash.__o(E,S);
}},_cachedSupportsVersion:{},supportsVersion:function(U){if(typeof this._cachedSupportsVersion[U]===o){return this._cachedSupportsVersion[U];
}else{var X=U.split(l);
var W=this.FULLVERSION.split(l);

for(var i=0;i<X.length;i++){var V=parseInt(W[i],10)-parseInt(X[i],10);

if(V>0){return (this._cachedSupportsVersion[U]=true);
}else if(V<0){return (this._cachedSupportsVersion[U]=false);
}}return (this._cachedSupportsVersion[U]=true);
}},__o:function(Y,ba){var bd=Y.split(l);
var bc=ba||qx.bom.client.Flash.getVersion();
bc=bc.split(l);

for(var i=0;i<bd.length;i++){var bb=parseInt(bc[i],10)-parseInt(bd[i],10);

if(bb>0){return true;
}else if(bb<0){return false;
}}return true;
}},defer:function(be){be.FULLVERSION=be.getVersion();
be.VERSION=parseFloat(be.FULLVERSION);
be.AVAILABLE=be.isAvailable();
var bh=be.FULLVERSION.split(l);
be.REVISION=bh[bh.length-1];
be.STRICT_SECURITY_MODEL=be.getStrictSecurityModel();
be.EXPRESSINSTALL=be.getExpressInstall();
if(qx.Bootstrap.DEBUG){var bf=[F,A,r,e,H,s];

for(var i=0;i<bf.length;i++){if(be.__defineGetter__){var bg=be[bf[i]];
be.__defineGetter__(bf[i],qx.Bootstrap.bind(function(bi,c){var bj=x+bi+y+be.classname+D+n;

if(qx.dev&&qx.dev.StackTrace){bj+=b+qx.dev.StackTrace.getStackTrace().join(p);
}qx.Bootstrap.warn(bj);
return c;
},be,bf[i],bg));
}}}}});
})();
(function(){var a="qx.bom.client.EcmaScript";
qx.Bootstrap.define(a,{statics:{getObjectCount:function(){return (({}).__count__==0);
}}});
})();
(function(){var m="ipod",l="g",k="xbox",j="pc",i="\.",h="(",g=")",f="iPhone",e="|",d="qx.bom.client.Device",a="wii",c="ipad",b="ds";
qx.Bootstrap.define(d,{statics:{__p:{"iPod":m,"iPad":c,"iPhone":f,"PSP":"psp","PLAYSTATION 3":"ps3","Nintendo Wii":a,"Nintendo DS":b,"XBOX":"xbox","Xbox":k},getName:function(){var p=[];

for(var o in this.__p){p.push(o);
}var q=new RegExp(h+p.join(e).replace(/\./g,i)+g,l);
var n=q.exec(navigator.userAgent);

if(n&&n[1]){return qx.bom.client.Device.__p[n[1]];
}return j;
}}});
})();
(function(){var e="qx.bom.client.Event",d="ontouchstart",c="mshtml",b="opera",a="pointerEvents";
qx.Bootstrap.define(e,{statics:{getTouch:function(){return (d in window);
},getPointer:function(){if(a in document.documentElement.style){var f=qx.bom.client.Engine.getName();
return f!=b&&f!=c;
}return false;
}}});
})();
(function(){var n="on",m="off",l="os.name",k="html.storage.local",j="plugin.silverlight.version",h="os.version",g="html.xul",f="plugin.windowsmedia.version",e="html.video.ogg",d="default",bF="html.xpath",bE="plugin.flash.express",bD="plugin.windowsmedia",bC="html.webworker",bB="phonegap",bA="browser.quirksmode",bz="browser.name",by="plugin.silverlight",bx="event.pointer",bw="qx.aspects",u="plugin.gears",v="io.ssl",s="css.translate3d",t="html.classlist",q="locale.variant",r="css.textoverflow",o="qx.debug",p="html.video",C="plugin.flash",D="css.boxshadow",W="event.touch",S="html.storage.session",bf="plugin.divx",ba="css.boxmodel",br="plugin.flash.version",bl="qx.allowUrlSettings",L="css.gradients",bv="browser.documentmode",bt="html.vml",bs="html.canvas",J="html.audio",O="html.audio.mp3",Q="css.borderradius",U="ecmascript.objectcount",X="locale",bb="html.audio.au",bh="html.geolocation",bn="qx.mobile.emulatetouch",w="qx.dynlocale",x="plugin.quicktime",N="engine.version",be="io.maxrequests",bd="engine.name",bc="html.audio.aif",bj="html.audio.ogg",bi="qx.mobile.nativescroll",Y="plugin.divx.version",bg="html.video.h264",a="css.placeholder",bm="plugin.quicktime.version",y="|",z="browser.version",T="io.xhr",b="html.audio.wav",c="device.name",I="phonegap.notification",A="html.svg",B="html.dataurl",H="html.video.webm",V="plugin.flash.strictsecurity",bp="qx.core.Environment",bo="qx.debug.databinding",P="true",bq="qxenv",K="qx.propertyDebugLevel",bk="qx.dynamicmousewheel",E=":",G="false",M="&",R="qx.allowUrlVariants",F="qx.bom.htmlarea.HtmlArea.debug",bu="qx.globalErrorHandling";
qx.Bootstrap.define(bp,{statics:{_checks:{},_asyncChecks:{},__q:{},get:function(bG){if(this.__q[bG]!=undefined){return this.__q[bG];
}var bH=this._checks[bG];

if(bH){var bI=bH();
this.__q[bG]=bI;
return bI;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(bG+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},getAsync:function(bJ,bK,self){var bM=this;

if(this.__q[bJ]!=undefined){window.setTimeout(function(){bK.call(self,bM.__q[bJ]);
},0);
return;
}var bL=this._asyncChecks[bJ];

if(bL){bL(function(bN){bM.__q[bJ]=bN;
bK.call(self,bN);
});
return;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(bJ+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},select:function(bO,bP){return this.__r(this.get(bO),bP);
},selectAsync:function(bQ,bR,self){this.getAsync(bQ,function(bS){var bT=this.__r(bQ,bR);
bT.call(self,bS);
},this);
},__r:function(bU,bV){var bX=bV[bU];

if(bV.hasOwnProperty(bU)){return bX;
}for(var bW in bV){if(bW.indexOf(y)!=-1){var bY=bW.split(y);

for(var i=0;i<bY.length;i++){if(bY[i]==bU){return bV[bW];
}}}}if(bX===true&&bV[n]!=undefined){if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn("The check '"+bU+"' is a boolean value. "+"Please change your select map from 'on' to 'true'.");
qx.Bootstrap.trace(this);
}return bV[n];
}if(bX===false&&bV[m]!=undefined){if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn("The check '"+bU+"' is a boolean value. "+"Please change your select map from 'off' to 'false'.");
qx.Bootstrap.trace(this);
}return bV[m];
}
if(bV[d]!==undefined){return bV[d];
}
if(qx.Bootstrap.DEBUG){throw new Error('No match for variant "'+bU+'" ('+(typeof bU)+' type)'+' in variants ['+qx.Bootstrap.getKeysAsString(bV)+'] found, and no default ("default") given');
}},invalidateCacheKey:function(ca){delete this.__q[ca];
},add:function(cb,cc){if(this._checks[cb]==undefined){if(cc instanceof Function){this._checks[cb]=cc;
}else{this._checks[cb]=this.__u(cc);
}}},addAsync:function(cd,ce){if(this._checks[cd]==undefined){this._asyncChecks[cd]=ce;
}},_initDefaultQxValues:function(){this.add(bl,function(){return false;
});
this.add(R,function(){return false;
});
this.add(K,function(){return 0;
});
this.add(o,function(){return true;
});
this.add(bw,function(){return false;
});
this.add(w,function(){return true;
});
this.add(bn,function(){return false;
});
this.add(bi,function(){return false;
});
this.add(bk,function(){return true;
});
this.add(bo,function(){return false;
});
},__s:function(){if(window.qxsettings){for(var cg in window.qxsettings){var cf=window.qxsettings[cg];

if(cg==F||cg==bu){if(cf==n){cf=true;
}else if(cf==m){cf=false;
}}this._checks[cg]=this.__u(cf);
}}if(window.qxvariants){for(var cg in window.qxvariants){var cf=window.qxvariants[cg];

if(cg==bw||cg==o||cg==w||cg==bn||cg==bi){if(cf==n){cf=true;
}else if(cf==m){cf=false;
}}this._checks[cg]=this.__u(cf);
}}if(qx&&qx.$$environment){for(var cg in qx.$$environment){var cf=qx.$$environment[cg];
this._checks[cg]=this.__u(cf);
}}},__t:function(){if(window.document&&window.document.location){var ch=window.document.location.search.slice(1).split(M);

for(var i=0;i<ch.length;i++){var cj=ch[i].split(E);

if(cj.length!=3||cj[0]!=bq){continue;
}var ck=cj[1];
var ci=decodeURIComponent(cj[2]);
if(ci==P){ci=true;
}else if(ci==G){ci=false;
}else if(/^(\d|\.)+$/.test(ci)){ci=parseFloat(ci);
}this._checks[ck]=this.__u(ci);
}}},__u:function(cl){return qx.Bootstrap.bind(function(cm){return cm;
},null,cl);
},useCheck:function(cn){return true;
},_initChecksMap:function(){if(this.useCheck(N)){this._checks[N]=qx.bom.client.Engine.getVersion;
}
if(this.useCheck(bd)){this._checks[bd]=qx.bom.client.Engine.getName;
}if(this.useCheck(bz)){this._checks[bz]=qx.bom.client.Browser.getName;
}
if(this.useCheck(z)){this._checks[z]=qx.bom.client.Browser.getVersion;
}
if(this.useCheck(bv)){this._checks[bv]=qx.bom.client.Browser.getDocumentMode;
}
if(this.useCheck(bA)){this._checks[bA]=qx.bom.client.Browser.getQuirksMode;
}if(this.useCheck(c)){this._checks[c]=qx.bom.client.Device.getName;
}if(this.useCheck(X)){this._checks[X]=qx.bom.client.Locale.getLocale;
}
if(this.useCheck(q)){this._checks[q]=qx.bom.client.Locale.getVariant;
}if(this.useCheck(l)){this._checks[l]=qx.bom.client.OperatingSystem.getName;
}
if(this.useCheck(h)){this._checks[h]=qx.bom.client.OperatingSystem.getVersion;
}if(this.useCheck(u)){this._checks[u]=qx.bom.client.Plugin.getGears;
}
if(this.useCheck(x)){this._checks[x]=qx.bom.client.Plugin.getQuicktime;
}
if(this.useCheck(bm)){this._checks[bm]=qx.bom.client.Plugin.getQuicktimeVersion;
}
if(this.useCheck(bD)){this._checks[bD]=qx.bom.client.Plugin.getWindowsMedia;
}
if(this.useCheck(f)){this._checks[f]=qx.bom.client.Plugin.getWindowsMediaVersion;
}
if(this.useCheck(bf)){this._checks[bf]=qx.bom.client.Plugin.getDivX;
}
if(this.useCheck(Y)){this._checks[Y]=qx.bom.client.Plugin.getDivXVersion;
}
if(this.useCheck(by)){this._checks[by]=qx.bom.client.Plugin.getSilverlight;
}
if(this.useCheck(j)){this._checks[j]=qx.bom.client.Plugin.getSilverlightVersion;
}
if(this.useCheck(C)){this._checks[C]=qx.bom.client.Flash.isAvailable;
}
if(this.useCheck(br)){this._checks[br]=qx.bom.client.Flash.getVersion;
}
if(this.useCheck(bE)){this._checks[bE]=qx.bom.client.Flash.getExpressInstall;
}
if(this.useCheck(V)){this._checks[V]=qx.bom.client.Flash.getStrictSecurityModel;
}if(this.useCheck(be)){this._checks[be]=qx.bom.client.Transport.getMaxConcurrentRequestCount;
}
if(this.useCheck(v)){this._checks[v]=qx.bom.client.Transport.getSsl;
}
if(this.useCheck(T)){this._checks[T]=qx.bom.client.Transport.getXmlHttpRequest;
}if(this.useCheck(W)){this._checks[W]=qx.bom.client.Event.getTouch;
}
if(this.useCheck(bx)){this._checks[bx]=qx.bom.client.Event.getPointer;
}if(this.useCheck(U)){this._checks[U]=qx.bom.client.EcmaScript.getObjectCount;
}if(this.useCheck(bC)){this._checks[bC]=qx.bom.client.Html.getWebWorker;
}
if(this.useCheck(bh)){this._checks[bh]=qx.bom.client.Html.getGeoLocation;
}
if(this.useCheck(J)){this._checks[J]=qx.bom.client.Html.getAudio;
}
if(this.useCheck(bj)){this._checks[bj]=qx.bom.client.Html.getAudioOgg;
}
if(this.useCheck(O)){this._checks[O]=qx.bom.client.Html.getAudioMp3;
}
if(this.useCheck(b)){this._checks[b]=qx.bom.client.Html.getAudioWav;
}
if(this.useCheck(bb)){this._checks[bb]=qx.bom.client.Html.getAudioAu;
}
if(this.useCheck(bc)){this._checks[bc]=qx.bom.client.Html.getAudioAif;
}
if(this.useCheck(p)){this._checks[p]=qx.bom.client.Html.getVideo;
}
if(this.useCheck(e)){this._checks[e]=qx.bom.client.Html.getVideoOgg;
}
if(this.useCheck(bg)){this._checks[bg]=qx.bom.client.Html.getVideoH264;
}
if(this.useCheck(H)){this._checks[H]=qx.bom.client.Html.getVideoWebm;
}
if(this.useCheck(k)){this._checks[k]=qx.bom.client.Html.getLocalStorage;
}
if(this.useCheck(S)){this._checks[S]=qx.bom.client.Html.getSessionStorage;
}
if(this.useCheck(t)){this._checks[t]=qx.bom.client.Html.getClassList;
}
if(this.useCheck(bF)){this._checks[bF]=qx.bom.client.Html.getXPath;
}
if(this.useCheck(g)){this._checks[g]=qx.bom.client.Html.getXul;
}
if(this.useCheck(bs)){this._checks[bs]=qx.bom.client.Html.getCanvas;
}
if(this.useCheck(A)){this._checks[A]=qx.bom.client.Html.getSvg;
}
if(this.useCheck(bt)){this._checks[bt]=qx.bom.client.Html.getVml;
}
if(this.useCheck(B)){this._asyncChecks[B]=qx.bom.client.Html.getDataUrl;
}if(this.useCheck(r)){this._checks[r]=qx.bom.client.Css.getTextOverflow;
}
if(this.useCheck(a)){this._checks[a]=qx.bom.client.Css.getPlaceholder;
}
if(this.useCheck(Q)){this._checks[Q]=qx.bom.client.Css.getBorderRadius;
}
if(this.useCheck(D)){this._checks[D]=qx.bom.client.Css.getBoxShadow;
}
if(this.useCheck(L)){this._checks[L]=qx.bom.client.Css.getGradients;
}
if(this.useCheck(ba)){this._checks[ba]=qx.bom.client.Css.getBoxModel;
}
if(this.useCheck(s)){this._checks[s]=qx.bom.client.Css.getTranslate3d;
}if(this.useCheck(bB)){this._checks[bB]=qx.bom.client.PhoneGap.getPhoneGap;
}
if(this.useCheck(I)){this._checks[I]=qx.bom.client.PhoneGap.getNotification;
}}},defer:function(co){co._initDefaultQxValues();
co._initChecksMap();
co.__s();
if(co.get(bl)!=true){co.__t();
}}});
})();
(function(){var h="qx.allowUrlSettings",g="&",f="qx.core.Setting",e="qx.allowUrlVariants",d="qx.propertyDebugLevel",c="qxsetting",b=":",a=".";
qx.Bootstrap.define(f,{statics:{__v:{},define:function(j,k){this.defineDeprecated(j,k);
},defineDeprecated:function(l,m){if(m===undefined){throw new Error('Default value of setting "'+l+'" must be defined!');
}
if(!this.__v[l]){this.__v[l]={};
}else if(this.__v[l].defaultValue!==undefined){throw new Error('Setting "'+l+'" is already defined!');
}this.__v[l].defaultValue=m;
},get:function(n){var o=this.__v[n];

if(o===undefined){throw new Error('Setting "'+n+'" is not defined.');
}
if(o.value!==undefined){return o.value;
}return o.defaultValue;
},set:function(p,q){this.setDeprecated(p,q);
},setDeprecated:function(r,s){if((r.split(a)).length<2){throw new Error('Malformed settings key "'+r+'". Must be following the schema "namespace.key".');
}
if(!this.__v[r]){this.__v[r]={};
}this.__v[r].value=s;
},__w:function(){if(window.qxsettings){for(var t in window.qxsettings){this.setDeprecated(t,window.qxsettings[t]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(u){}this.__x();
}},__x:function(){if(qx.core.Environment.get(h)!=true){return;
}var w=document.location.search.slice(1).split(g);

for(var i=0;i<w.length;i++){var v=w[i].split(b);

if(v.length!=3||v[0]!=c){continue;
}this.set(v[1],decodeURIComponent(v[2]));
}}},defer:function(x){x.defineDeprecated(h,false);
x.defineDeprecated(e,false);
x.defineDeprecated(d,0);
x.__w();
}});
})();
(function(){var h="function",g="Boolean",f="qx.Interface",e="]",d="toggle",c="Interface",b="is",a="[Interface ";
qx.Bootstrap.define(f,{statics:{define:function(name,j){if(j){if(j.extend&&!(j.extend instanceof Array)){j.extend=[j.extend];
}var k=j.statics?j.statics:{};
if(j.extend){k.$$extends=j.extend;
}
if(j.properties){k.$$properties=j.properties;
}
if(j.members){k.$$members=j.members;
}
if(j.events){k.$$events=j.events;
}}else{var k={};
}k.$$type=c;
k.name=name;
k.toString=this.genericToString;
k.basename=qx.Bootstrap.createNamespace(name,k);
qx.Interface.$$registry[name]=k;
return k;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(m){if(!m){return [];
}var n=m.concat();

for(var i=0,l=m.length;i<l;i++){if(m[i].$$extends){n.push.apply(n,this.flatten(m[i].$$extends));
}}return n;
},__y:function(o,p,q,r){var v=q.$$members;

if(v){for(var u in v){if(qx.Bootstrap.isFunction(v[u])){var t=this.__z(p,u);
var s=t||qx.Bootstrap.isFunction(o[u]);

if(!s){throw new Error('Implementation of method "'+u+'" is missing in class "'+p.classname+'" required by interface "'+q.name+'"');
}var w=r===true&&!t&&!qx.Bootstrap.hasInterface(p,q);

if(w){o[u]=this.__C(q,o[u],u,v[u]);
}}else{if(typeof o[u]===undefined){if(typeof o[u]!==h){throw new Error('Implementation of member "'+u+'" is missing in class "'+p.classname+'" required by interface "'+q.name+'"');
}}}}}},__z:function(x,y){var C=y.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!C){return false;
}var z=qx.Bootstrap.firstLow(C[2]);
var A=qx.Bootstrap.getPropertyDefinition(x,z);

if(!A){return false;
}var B=C[0]==b||C[0]==d;

if(B){return qx.Bootstrap.getPropertyDefinition(x,z).check==g;
}return true;
},__A:function(D,E){if(E.$$properties){for(var F in E.$$properties){if(!qx.Bootstrap.getPropertyDefinition(D,F)){throw new Error('The property "'+F+'" is not supported by Class "'+D.classname+'"!');
}}}},__B:function(G,H){if(H.$$events){for(var I in H.$$events){if(!qx.Bootstrap.supportsEvent(G,I)){throw new Error('The event "'+I+'" is not supported by Class "'+G.classname+'"!');
}}}},assertObject:function(J,K){var M=J.constructor;
this.__y(J,M,K,false);
this.__A(M,K);
this.__B(M,K);
var L=K.$$extends;

if(L){for(var i=0,l=L.length;i<l;i++){this.assertObject(J,L[i]);
}}},assert:function(N,O,P){this.__y(N.prototype,N,O,P);
this.__A(N,O);
this.__B(N,O);
var Q=O.$$extends;

if(Q){for(var i=0,l=Q.length;i<l;i++){this.assert(N,Q[i],P);
}}},genericToString:function(){return a+this.name+e;
},$$registry:{},__C:function(){},__D:null,__E:function(){}}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__F:[],wrap:function(e,f,g){var m=[];
var h=[];
var l=this.__F;
var k;

for(var i=0;i<l.length;i++){k=l[i];

if((k.type==null||g==k.type||k.type==b)&&(k.name==null||e.match(k.name))){k.pos==-1?m.push(k.fcn):h.push(k.fcn);
}}
if(m.length===0&&h.length===0){return f;
}var j=function(){for(var i=0;i<m.length;i++){m[i].call(this,e,f,g,arguments);
}var n=f.apply(this,arguments);

for(var i=0;i<h.length;i++){h[i].call(this,e,f,g,arguments,n);
}return n;
};

if(g!==a){j.self=f.self;
j.base=f.base;
}f.wrapper=j;
j.original=f;
return j;
},addAdvice:function(o,p,q,name){this.__F.push({fcn:o,pos:p===c?-1:1,type:q,name:name});
}}});
})();
(function(){var g="emulated",f="native",e='"',d="qx.lang.Core",c="\\\\",b="\\\"",a="[object Error]";
qx.Bootstrap.define(d,{statics:{errorToString:{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}[(!Error.prototype.toString||Error.prototype.toString()==a)?g:f],arrayIndexOf:{"native":Array.prototype.indexOf,"emulated":function(h,j){if(j==null){j=0;
}else if(j<0){j=Math.max(0,this.length+j);
}
for(var i=j;i<this.length;i++){if(this[i]===h){return i;
}}return -1;
}}[Array.prototype.indexOf?f:g],arrayLastIndexOf:{"native":Array.prototype.lastIndexOf,"emulated":function(k,m){if(m==null){m=this.length-1;
}else if(m<0){m=Math.max(0,this.length+m);
}
for(var i=m;i>=0;i--){if(this[i]===k){return i;
}}return -1;
}}[Array.prototype.lastIndexOf?f:g],arrayForEach:{"native":Array.prototype.forEach,"emulated":function(n,o){var l=this.length;

for(var i=0;i<l;i++){var p=this[i];

if(p!==undefined){n.call(o||window,p,i,this);
}}}}[Array.prototype.forEach?f:g],arrayFilter:{"native":Array.prototype.filter,"emulated":function(q,r){var s=[];
var l=this.length;

for(var i=0;i<l;i++){var t=this[i];

if(t!==undefined){if(q.call(r||window,t,i,this)){s.push(this[i]);
}}}return s;
}}[Array.prototype.filter?f:g],arrayMap:{"native":Array.prototype.map,"emulated":function(u,v){var w=[];
var l=this.length;

for(var i=0;i<l;i++){var x=this[i];

if(x!==undefined){w[i]=u.call(v||window,x,i,this);
}}return w;
}}[Array.prototype.map?f:g],arraySome:{"native":Array.prototype.some,"emulated":function(y,z){var l=this.length;

for(var i=0;i<l;i++){var A=this[i];

if(A!==undefined){if(y.call(z||window,A,i,this)){return true;
}}}return false;
}}[Array.prototype.some?f:g],arrayEvery:{"native":Array.prototype.every,"emulated":function(B,C){var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){if(!B.call(C||window,D,i,this)){return false;
}}}return true;
}}[Array.prototype.every?f:g],stringQuote:{"native":String.prototype.quote,"emulated":function(){return e+this.replace(/\\/g,c).replace(/\"/g,b)+e;
}}[String.prototype.quote?f:g]}});
Error.prototype.toString=qx.lang.Core.errorToString;
Array.prototype.indexOf=qx.lang.Core.arrayIndexOf;
Array.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
Array.prototype.forEach=qx.lang.Core.arrayForEach;
Array.prototype.filter=qx.lang.Core.arrayFilter;
Array.prototype.map=qx.lang.Core.arrayMap;
Array.prototype.some=qx.lang.Core.arraySome;
Array.prototype.every=qx.lang.Core.arrayEvery;
String.prototype.quote=qx.lang.Core.stringQuote;
})();
(function(){var m=';',k='return this.',j="boolean",h="string",g='!==undefined)',f='else if(this.',e="init",d='if(this.',c="set",b='else ',bc=' of an instance of ',bb="setRuntime",ba="setThemed",Y=' is not (yet) ready!");',X="': ",W=" of class ",V='(computed, old, "',U='return value;',T='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',S='return init;',t='var init=this.',u="')){",r="if(reg.hasListener(this, '",s="Error in property ",p='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',q='if(computed===undefined)computed=null;',n='if(init==qx.core.Property.$$inherit)init=null;',o="rv:1.8.1",x='if(a[i].',y="var reg=qx.event.Registration;",G=" in method ",E='throw new Error("Property ',K='(backup);',I='var inherit=prop.$$inherit;',O='return null;',M='this.',A=")}",R=')a[i].',Q='if(old===undefined)old=null;',P='if(old===undefined)old=this.',z='");',C='if(old===computed)return value;',D="inherit",F="MSIE 6.0",H=" with incoming value '",J="', qx.event.type.Data, [computed, old]",L=";",N="object",v='}',w="reg.fireEvent(this, '",B="qx.core.Property";
qx.Bootstrap.define(B,{statics:{__G:{"Boolean":'qx.core.Assert.assertBoolean(value, msg) || true',"String":'qx.core.Assert.assertString(value, msg) || true',"Number":'qx.core.Assert.assertNumber(value, msg) || true',"Integer":'qx.core.Assert.assertInteger(value, msg) || true',"PositiveNumber":'qx.core.Assert.assertPositiveNumber(value, msg) || true',"PositiveInteger":'qx.core.Assert.assertPositiveInteger(value, msg) || true',"Error":'qx.core.Assert.assertInstance(value, Error, msg) || true',"RegExp":'qx.core.Assert.assertInstance(value, RegExp, msg) || true',"Object":'qx.core.Assert.assertObject(value, msg) || true',"Array":'qx.core.Assert.assertArray(value, msg) || true',"Map":'qx.core.Assert.assertMap(value, msg) || true',"Function":'qx.core.Assert.assertFunction(value, msg) || true',"Date":'qx.core.Assert.assertInstance(value, Date, msg) || true',"Node":'value !== null && value.nodeType !== undefined',"Element":'value !== null && value.nodeType === 1 && value.attributes',"Document":'value !== null && value.nodeType === 9 && value.documentElement',"Window":'value !== null && value.document',"Event":'value !== null && value.type !== undefined',"Class":'value !== null && value.$$type === "Class"',"Mixin":'value !== null && value.$$type === "Mixin"',"Interface":'value !== null && value.$$type === "Interface"',"Theme":'value !== null && value.$$type === "Theme"',"Color":'qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',"Decorator":'value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',"Font":'value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)'},__H:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:D,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:h,dereference:j,inheritable:j,nullable:j,themeable:j,refine:j,init:null,apply:h,event:h,check:null,transform:h,deferredInit:j,validate:null},$$allowedGroupKeys:{name:h,group:N,mode:h,themeable:j},$$inheritable:{},__I:function(bd){var be=this.__J(bd);

if(!be.length){var bf=function(){};
}else{bf=this.__K(be);
}bd.prototype.$$refreshInheritables=bf;
},__J:function(bg){var bi=[];

while(bg){var bh=bg.$$properties;

if(bh){for(var name in this.$$inheritable){if(bh[name]&&bh[name].inheritable){bi.push(name);
}}}bg=bg.superclass;
}return bi;
},__K:function(bj){var bn=this.$$store.inherit;
var bm=this.$$store.init;
var bl=this.$$method.refresh;
var bk=["var parent = this.getLayoutParent();","if (!parent) return;"];

for(var i=0,l=bj.length;i<l;i++){var name=bj[i];
bk.push("var value = parent.",bn[name],";","if (value===undefined) value = parent.",bm[name],";","this.",bl[name],"(value);");
}return new Function(bk.join(""));
},attachRefreshInheritables:function(bo){bo.prototype.$$refreshInheritables=function(){qx.core.Property.__I(bo);
return this.$$refreshInheritables();
};
},attachMethods:function(bp,name,bq){bq.group?this.__L(bp,bq,name):this.__M(bp,bq,name);
},__L:function(br,bs,name){var bz=qx.Bootstrap.firstUp(name);
var by=br.prototype;
var bA=bs.themeable===true;
var bB=[];
var bv=[];

if(bA){var bt=[];
var bx=[];
}var bw="var a=arguments[0] instanceof Array?arguments[0]:arguments;";
bB.push(bw);

if(bA){bt.push(bw);
}
if(bs.mode=="shorthand"){var bu="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
bB.push(bu);

if(bA){bt.push(bu);
}}
for(var i=0,a=bs.group,l=a.length;i<l;i++){bB.push("this.",this.$$method.set[a[i]],"(a[",i,"]);");
bv.push("this.",this.$$method.reset[a[i]],"();");

if(bA){bt.push("this.",this.$$method.setThemed[a[i]],"(a[",i,"]);");
bx.push("this.",this.$$method.resetThemed[a[i]],"();");
}}this.$$method.set[name]="set"+bz;
by[this.$$method.set[name]]=new Function(bB.join(""));
this.$$method.reset[name]="reset"+bz;
by[this.$$method.reset[name]]=new Function(bv.join(""));

if(bA){this.$$method.setThemed[name]="setThemed"+bz;
by[this.$$method.setThemed[name]]=new Function(bt.join(""));
this.$$method.resetThemed[name]="resetThemed"+bz;
by[this.$$method.resetThemed[name]]=new Function(bx.join(""));
}},__M:function(bC,bD,name){var bF=qx.Bootstrap.firstUp(name);
var bH=bC.prototype;
if(bD.dereference===undefined&&typeof bD.check==="string"){bD.dereference=this.__N(bD.check);
}var bG=this.$$method;
var bE=this.$$store;
bE.runtime[name]="$$runtime_"+name;
bE.user[name]="$$user_"+name;
bE.theme[name]="$$theme_"+name;
bE.init[name]="$$init_"+name;
bE.inherit[name]="$$inherit_"+name;
bE.useinit[name]="$$useinit_"+name;
bG.get[name]="get"+bF;
bH[bG.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,bC,name,"get");
};
bG.set[name]="set"+bF;
bH[bG.set[name]]=function(bI){return qx.core.Property.executeOptimizedSetter(this,bC,name,"set",arguments);
};
bG.reset[name]="reset"+bF;
bH[bG.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bC,name,"reset");
};

if(bD.inheritable||bD.apply||bD.event||bD.deferredInit){bG.init[name]="init"+bF;
bH[bG.init[name]]=function(bJ){return qx.core.Property.executeOptimizedSetter(this,bC,name,"init",arguments);
};
}
if(bD.inheritable){bG.refresh[name]="refresh"+bF;
bH[bG.refresh[name]]=function(bK){return qx.core.Property.executeOptimizedSetter(this,bC,name,"refresh",arguments);
};
}bG.setRuntime[name]="setRuntime"+bF;
bH[bG.setRuntime[name]]=function(bL){return qx.core.Property.executeOptimizedSetter(this,bC,name,"setRuntime",arguments);
};
bG.resetRuntime[name]="resetRuntime"+bF;
bH[bG.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bC,name,"resetRuntime");
};

if(bD.themeable){bG.setThemed[name]="setThemed"+bF;
bH[bG.setThemed[name]]=function(bM){return qx.core.Property.executeOptimizedSetter(this,bC,name,"setThemed",arguments);
};
bG.resetThemed[name]="resetThemed"+bF;
bH[bG.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bC,name,"resetThemed");
};
}
if(bD.check==="Boolean"){bH["toggle"+bF]=new Function("return this."+bG.set[name]+"(!this."+bG.get[name]+"())");
bH["is"+bF]=new Function("return this."+bG.get[name]+"()");
}},__N:function(bN){return !!this.__H[bN];
},__O:function(bO){return this.__H[bO]||qx.Bootstrap.classIsDefined(bO)||(qx.Interface&&qx.Interface.isDefined(bO));
},__P:{0:'Could not change or apply init value after constructing phase!',1:'Requires exactly one argument!',2:'Undefined value is not allowed!',3:'Does not allow any arguments!',4:'Null value is not allowed!',5:'Is invalid!'},error:function(bP,bQ,bR,bS,bT){var bU=bP.constructor.classname;
var bV=s+bR+W+bU+G+this.$$method[bS][bR]+H+bT+X;
throw new Error(bV+(this.__P[bQ]||"Unknown reason: "+bQ));
},__Q:function(bW,bX,name,bY,ca,cb){var cc=this.$$method[bY][name];
{bX[cc]=new Function("value",ca.join(""));
};
if(qx.core.Environment.get("qx.aspects")){bX[cc]=qx.core.Aspect.wrap(bW.classname+"."+cc,bX[cc],"property");
}qx.Bootstrap.setDisplayName(bX[cc],bW.classname+".prototype",cc);
if(cb===undefined){return bW[cc]();
}else{return bW[cc](cb[0]);
}},executeOptimizedGetter:function(cd,ce,name,cf){var ch=ce.$$properties[name];
var cj=ce.prototype;
var cg=[];
var ci=this.$$store;
cg.push(d,ci.runtime[name],g);
cg.push(k,ci.runtime[name],m);

if(ch.inheritable){cg.push(f,ci.inherit[name],g);
cg.push(k,ci.inherit[name],m);
cg.push(b);
}cg.push(d,ci.user[name],g);
cg.push(k,ci.user[name],m);

if(ch.themeable){cg.push(f,ci.theme[name],g);
cg.push(k,ci.theme[name],m);
}
if(ch.deferredInit&&ch.init===undefined){cg.push(f,ci.init[name],g);
cg.push(k,ci.init[name],m);
}cg.push(b);

if(ch.init!==undefined){if(ch.inheritable){cg.push(t,ci.init[name],m);

if(ch.nullable){cg.push(n);
}else if(ch.init!==undefined){cg.push(k,ci.init[name],m);
}else{cg.push(T,name,bc,ce.classname,Y);
}cg.push(S);
}else{cg.push(k,ci.init[name],m);
}}else if(ch.inheritable||ch.nullable){cg.push(O);
}else{cg.push(E,name,bc,ce.classname,Y);
}return this.__Q(cd,cj,name,cf,cg);
},executeOptimizedSetter:function(ck,cl,name,cm,cn){var cs=cl.$$properties[name];
var cr=cl.prototype;
var cp=[];
var co=cm===c||cm===ba||cm===bb||(cm===e&&cs.init===undefined);
var cq=cs.apply||cs.event||cs.inheritable;
var ct=this.__R(cm,name);
this.__S(cp,cs,name,cm,co);

if(co){this.__T(cp,cl,cs,name);
}
if(cq){this.__U(cp,co,ct,cm);
}
if(cs.inheritable){cp.push(I);
}
if(!cq){this.__W(cp,name,cm,co);
}else{this.__X(cp,cs,name,cm,co);
}
if(cs.inheritable){this.__Y(cp,cs,name,cm);
}else if(cq){this.__ba(cp,cs,name,cm);
}
if(cq){this.__bb(cp,cs,name);
if(cs.inheritable&&cr._getChildren){this.__bc(cp,name);
}}if(co){cp.push(U);
}return this.__Q(ck,cr,name,cm,cp,cn);
},__R:function(cu,name){if(cu==="setRuntime"||cu==="resetRuntime"){var cv=this.$$store.runtime[name];
}else if(cu==="setThemed"||cu==="resetThemed"){cv=this.$$store.theme[name];
}else if(cu==="init"){cv=this.$$store.init[name];
}else{cv=this.$$store.user[name];
}return cv;
},__S:function(cw,cx,name,cy,cz){{if(!cx.nullable||cx.check||cx.inheritable){cw.push('var prop=qx.core.Property;');
}if(cy==="set"){cw.push('if(value===undefined)prop.error(this,2,"',name,'","',cy,'",value);');
}};
},__T:function(cA,cB,cC,name){if(cC.transform){cA.push('value=this.',cC.transform,'(value);');
}if(cC.validate){if(typeof cC.validate==="string"){cA.push('this.',cC.validate,'(value);');
}else if(cC.validate instanceof Function){cA.push(cB.classname,'.$$properties.',name);
cA.push('.validate.call(this, value);');
}}},__U:function(cD,cE,cF,cG){var cH=(cG==="reset"||cG==="resetThemed"||cG==="resetRuntime");

if(cE){cD.push('if(this.',cF,'===value)return value;');
}else if(cH){cD.push('if(this.',cF,'===undefined)return;');
}},__V:undefined,__W:function(cI,name,cJ,cK){if(cJ==="setRuntime"){cI.push('this.',this.$$store.runtime[name],'=value;');
}else if(cJ==="resetRuntime"){cI.push('if(this.',this.$$store.runtime[name],'!==undefined)');
cI.push('delete this.',this.$$store.runtime[name],';');
}else if(cJ==="set"){cI.push('this.',this.$$store.user[name],'=value;');
}else if(cJ==="reset"){cI.push('if(this.',this.$$store.user[name],'!==undefined)');
cI.push('delete this.',this.$$store.user[name],';');
}else if(cJ==="setThemed"){cI.push('this.',this.$$store.theme[name],'=value;');
}else if(cJ==="resetThemed"){cI.push('if(this.',this.$$store.theme[name],'!==undefined)');
cI.push('delete this.',this.$$store.theme[name],';');
}else if(cJ==="init"&&cK){cI.push('this.',this.$$store.init[name],'=value;');
}},__X:function(cL,cM,name,cN,cO){if(cM.inheritable){cL.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{cL.push('var computed, old;');
}cL.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(cN==="setRuntime"){cL.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cN==="resetRuntime"){cL.push('delete this.',this.$$store.runtime[name],';');
cL.push('if(this.',this.$$store.user[name],'!==undefined)');
cL.push('computed=this.',this.$$store.user[name],';');
cL.push('else if(this.',this.$$store.theme[name],'!==undefined)');
cL.push('computed=this.',this.$$store.theme[name],';');
cL.push('else if(this.',this.$$store.init[name],'!==undefined){');
cL.push('computed=this.',this.$$store.init[name],';');
cL.push('this.',this.$$store.useinit[name],'=true;');
cL.push('}');
}else{cL.push('old=computed=this.',this.$$store.runtime[name],';');
if(cN==="set"){cL.push('this.',this.$$store.user[name],'=value;');
}else if(cN==="reset"){cL.push('delete this.',this.$$store.user[name],';');
}else if(cN==="setThemed"){cL.push('this.',this.$$store.theme[name],'=value;');
}else if(cN==="resetThemed"){cL.push('delete this.',this.$$store.theme[name],';');
}else if(cN==="init"&&cO){cL.push('this.',this.$$store.init[name],'=value;');
}}cL.push('}');
cL.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(cN==="set"){if(!cM.inheritable){cL.push('old=this.',this.$$store.user[name],';');
}cL.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cN==="reset"){if(!cM.inheritable){cL.push('old=this.',this.$$store.user[name],';');
}cL.push('delete this.',this.$$store.user[name],';');
cL.push('if(this.',this.$$store.runtime[name],'!==undefined)');
cL.push('computed=this.',this.$$store.runtime[name],';');
cL.push('if(this.',this.$$store.theme[name],'!==undefined)');
cL.push('computed=this.',this.$$store.theme[name],';');
cL.push('else if(this.',this.$$store.init[name],'!==undefined){');
cL.push('computed=this.',this.$$store.init[name],';');
cL.push('this.',this.$$store.useinit[name],'=true;');
cL.push('}');
}else{if(cN==="setRuntime"){cL.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cM.inheritable){cL.push('computed=this.',this.$$store.user[name],';');
}else{cL.push('old=computed=this.',this.$$store.user[name],';');
}if(cN==="setThemed"){cL.push('this.',this.$$store.theme[name],'=value;');
}else if(cN==="resetThemed"){cL.push('delete this.',this.$$store.theme[name],';');
}else if(cN==="init"&&cO){cL.push('this.',this.$$store.init[name],'=value;');
}}cL.push('}');
if(cM.themeable){cL.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!cM.inheritable){cL.push('old=this.',this.$$store.theme[name],';');
}
if(cN==="setRuntime"){cL.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cN==="set"){cL.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cN==="setThemed"){cL.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cN==="resetThemed"){cL.push('delete this.',this.$$store.theme[name],';');
cL.push('if(this.',this.$$store.init[name],'!==undefined){');
cL.push('computed=this.',this.$$store.init[name],';');
cL.push('this.',this.$$store.useinit[name],'=true;');
cL.push('}');
}else if(cN==="init"){if(cO){cL.push('this.',this.$$store.init[name],'=value;');
}cL.push('computed=this.',this.$$store.theme[name],';');
}else if(cN==="refresh"){cL.push('computed=this.',this.$$store.theme[name],';');
}cL.push('}');
}cL.push('else if(this.',this.$$store.useinit[name],'){');

if(!cM.inheritable){cL.push('old=this.',this.$$store.init[name],';');
}
if(cN==="init"){if(cO){cL.push('computed=this.',this.$$store.init[name],'=value;');
}else{cL.push('computed=this.',this.$$store.init[name],';');
}}else if(cN==="set"||cN==="setRuntime"||cN==="setThemed"||cN==="refresh"){cL.push('delete this.',this.$$store.useinit[name],';');

if(cN==="setRuntime"){cL.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cN==="set"){cL.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cN==="setThemed"){cL.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cN==="refresh"){cL.push('computed=this.',this.$$store.init[name],';');
}}cL.push('}');
if(cN==="set"||cN==="setRuntime"||cN==="setThemed"||cN==="init"){cL.push('else{');

if(cN==="setRuntime"){cL.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cN==="set"){cL.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cN==="setThemed"){cL.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cN==="init"){if(cO){cL.push('computed=this.',this.$$store.init[name],'=value;');
}else{cL.push('computed=this.',this.$$store.init[name],';');
}cL.push('this.',this.$$store.useinit[name],'=true;');
}cL.push('}');
}},__Y:function(cP,cQ,name,cR){cP.push('if(computed===undefined||computed===inherit){');

if(cR==="refresh"){cP.push('computed=value;');
}else{cP.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}cP.push('if((computed===undefined||computed===inherit)&&');
cP.push('this.',this.$$store.init[name],'!==undefined&&');
cP.push('this.',this.$$store.init[name],'!==inherit){');
cP.push('computed=this.',this.$$store.init[name],';');
cP.push('this.',this.$$store.useinit[name],'=true;');
cP.push('}else{');
cP.push('delete this.',this.$$store.useinit[name],';}');
cP.push('}');
cP.push('if(old===computed)return value;');
cP.push('if(computed===inherit){');
cP.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
cP.push('}');
cP.push('else if(computed===undefined)');
cP.push('delete this.',this.$$store.inherit[name],';');
cP.push('else this.',this.$$store.inherit[name],'=computed;');
cP.push('var backup=computed;');
if(cQ.init!==undefined&&cR!=="init"){cP.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{cP.push('if(old===undefined)old=null;');
}cP.push('if(computed===undefined||computed==inherit)computed=null;');
},__ba:function(cS,cT,name,cU){if(cU!==c&&cU!==bb&&cU!==ba){cS.push(q);
}cS.push(C);
if(cT.init!==undefined&&cU!==e){cS.push(P,this.$$store.init[name],L);
}else{cS.push(Q);
}},__bb:function(cV,cW,name){if(cW.apply){cV.push(M,cW.apply,V,name,z);
}if(cW.event){cV.push(y,r,cW.event,u,w,cW.event,J,A);
}},__bc:function(cX,name){cX.push(p);
cX.push(x,this.$$method.refresh[name],R,this.$$method.refresh[name],K);
cX.push(v);
}},defer:function(cY){var db=navigator.userAgent.indexOf(F)!=-1;
var da=navigator.userAgent.indexOf(o)!=-1;
if(db||da){cY.__N=cY.__O;
}}});
})();
(function(){var t="qx.aspects",s=".",r="static",q="constructor",p="[Class ",o="]",n="toString",m="singleton",k="$$init_",j=".prototype",d="destructor",h="extend",g="Class",c="destruct",b="qx.Class",f="member",e="qx.event.type.Data";
qx.Bootstrap.define(b,{statics:{define:function(name,u){if(!u){var u={};
}if(u.include&&!(u.include instanceof Array)){u.include=[u.include];
}if(u.implement&&!(u.implement instanceof Array)){u.implement=[u.implement];
}var v=false;

if(!u.hasOwnProperty(h)&&!u.type){u.type=r;
v=true;
}var w=this.__bh(name,u.type,u.extend,u.statics,u.construct,u.destruct,u.include);
if(u.extend){if(u.properties){this.__bj(w,u.properties,true);
}if(u.members){this.__bl(w,u.members,true,true,false);
}if(u.events){this.__bi(w,u.events,true);
}if(u.include){for(var i=0,l=u.include.length;i<l;i++){this.__bp(w,u.include[i],false);
}}}if(u.environment){for(var x in u.environment){qx.core.Environment.add(x,u.environment[x]);
}for(var x in u.environment){qx.core.Setting.defineDeprecated(x,u.environment[x]);
}}if(u.settings){for(var x in u.settings){qx.core.Setting.define(x,u.settings[x]);
}}if(u.variants){for(var x in u.variants){qx.core.Variant.define(x,u.variants[x].allowedValues,u.variants[x].defaultValue);
}}if(u.implement){for(var i=0,l=u.implement.length;i<l;i++){this.__bn(w,u.implement[i]);
}}if(u.defer){u.defer.self=w;
u.defer(w,w.prototype,{add:function(name,y){var z={};
z[name]=y;
qx.Class.__bj(w,z,true);
}});
}return w;
},undefine:function(name){delete this.$$registry[name];
var A=name.split(s);
var C=[window];

for(var i=0;i<A.length;i++){C.push(C[i][A[i]]);
}for(var i=C.length-1;i>=1;i--){var B=C[i];
var parent=C[i-1];

if(qx.Bootstrap.isFunction(B)||qx.Bootstrap.objectGetLength(B)===0){delete parent[A[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(D,E){qx.Class.__bp(D,E,false);
},patch:function(F,G){qx.Class.__bp(F,G,true);
},isSubClassOf:function(H,I){if(!H){return false;
}
if(H==I){return true;
}
if(H.prototype instanceof I){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(J){var K=[];

while(J){if(J.$$properties){K.push.apply(K,qx.Bootstrap.getKeys(J.$$properties));
}J=J.superclass;
}return K;
},getByProperty:function(L,name){while(L){if(L.$$properties&&L.$$properties[name]){return L;
}L=L.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(M,N){return M.$$includes&&M.$$includes.indexOf(N)!==-1;
},getByMixin:function(O,P){var Q,i,l;

while(O){if(O.$$includes){Q=O.$$flatIncludes;

for(i=0,l=Q.length;i<l;i++){if(Q[i]===P){return O;
}}}O=O.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(R,S){return !!this.getByMixin(R,S);
},hasOwnInterface:function(T,U){return T.$$implements&&T.$$implements.indexOf(U)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(V){var W=[];

while(V){if(V.$$implements){W.push.apply(W,V.$$flatImplements);
}V=V.superclass;
}return W;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(X,Y){var ba=X.constructor;

if(this.hasInterface(ba,Y)){return true;
}
try{qx.Interface.assertObject(X,Y);
return true;
}catch(bb){}
try{qx.Interface.assert(ba,Y,false);
return true;
}catch(bc){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return p+this.classname+o;
},$$registry:qx.Bootstrap.$$registry,__bd:null,__be:null,__bf:function(){},__bg:function(){},__bh:function(name,bd,be,bf,bg,bh,bi){var bl;

if(!be&&qx.core.Environment.get(t)==false){bl=bf||{};
qx.Bootstrap.setDisplayNames(bl,name);
}else{var bl={};

if(be){if(!bg){bg=this.__bq();
}
if(this.__bs(be,bi)){bl=this.__bt(bg,name,bd);
}else{bl=bg;
}if(bd===m){bl.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(bg,name,q);
}if(bf){qx.Bootstrap.setDisplayNames(bf,name);
var bm;

for(var i=0,a=qx.Bootstrap.getKeys(bf),l=a.length;i<l;i++){bm=a[i];
var bj=bf[bm];

if(qx.core.Environment.get(t)){if(bj instanceof Function){bj=qx.core.Aspect.wrap(name+s+bm,bj,r);
}bl[bm]=bj;
}else{bl[bm]=bj;
}}}}var bk=qx.Bootstrap.createNamespace(name,bl);
bl.name=bl.classname=name;
bl.basename=bk;
bl.$$type=g;

if(bd){bl.$$classtype=bd;
}if(!bl.hasOwnProperty(n)){bl.toString=this.genericToString;
}
if(be){qx.Bootstrap.extendClass(bl,bg,be,name,bk);
if(bh){if(qx.core.Environment.get(t)){bh=qx.core.Aspect.wrap(name,bh,d);
}bl.$$destructor=bh;
qx.Bootstrap.setDisplayName(bh,name,c);
}}this.$$registry[name]=bl;
return bl;
},__bi:function(bn,bo,bp){var bq,bq;

if(bn.$$events){for(var bq in bo){bn.$$events[bq]=bo[bq];
}}else{bn.$$events=bo;
}},__bj:function(br,bs,bt){var bu;

if(bt===undefined){bt=false;
}var bv=br.prototype;

for(var name in bs){bu=bs[name];
bu.name=name;
if(!bu.refine){if(br.$$properties===undefined){br.$$properties={};
}br.$$properties[name]=bu;
}if(bu.init!==undefined){br.prototype[k+name]=bu.init;
}if(bu.event!==undefined){var event={};
event[bu.event]=e;
this.__bi(br,event,bt);
}if(bu.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!bv.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(br);
}}
if(!bu.refine){qx.core.Property.attachMethods(br,name,bu);
}}},__bk:null,__bl:function(bw,bx,by,bz,bA){var bB=bw.prototype;
var bD,bC;
qx.Bootstrap.setDisplayNames(bx,bw.classname+j);

for(var i=0,a=qx.Bootstrap.getKeys(bx),l=a.length;i<l;i++){bD=a[i];
bC=bx[bD];
if(bz!==false&&bC instanceof Function&&bC.$$type==null){if(bA==true){bC=this.__bm(bC,bB[bD]);
}else{if(bB[bD]){bC.base=bB[bD];
}bC.self=bw;
}
if(qx.core.Environment.get(t)){bC=qx.core.Aspect.wrap(bw.classname+s+bD,bC,f);
}}bB[bD]=bC;
}},__bm:function(bE,bF){if(bF){return function(){var bH=bE.base;
bE.base=bF;
var bG=bE.apply(this,arguments);
bE.base=bH;
return bG;
};
}else{return bE;
}},__bn:function(bI,bJ){var bK=qx.Interface.flatten([bJ]);

if(bI.$$implements){bI.$$implements.push(bJ);
bI.$$flatImplements.push.apply(bI.$$flatImplements,bK);
}else{bI.$$implements=[bJ];
bI.$$flatImplements=bK;
}},__bo:function(bL){var name=bL.classname;
var bM=this.__bt(bL,name,bL.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(bL),l=a.length;i<l;i++){bN=a[i];
bM[bN]=bL[bN];
}bM.prototype=bL.prototype;
var bP=bL.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(bP),l=a.length;i<l;i++){bN=a[i];
var bQ=bP[bN];
if(bQ&&bQ.self==bL){bQ.self=bM;
}}for(var bN in this.$$registry){var bO=this.$$registry[bN];

if(!bO){continue;
}
if(bO.base==bL){bO.base=bM;
}
if(bO.superclass==bL){bO.superclass=bM;
}
if(bO.$$original){if(bO.$$original.base==bL){bO.$$original.base=bM;
}
if(bO.$$original.superclass==bL){bO.$$original.superclass=bM;
}}}qx.Bootstrap.createNamespace(name,bM);
this.$$registry[name]=bM;
return bM;
},__bp:function(bR,bS,bT){if(this.hasMixin(bR,bS)){return;
}var bW=bR.$$original;

if(bS.$$constructor&&!bW){bR=this.__bo(bR);
}var bV=qx.Mixin.flatten([bS]);
var bU;

for(var i=0,l=bV.length;i<l;i++){bU=bV[i];
if(bU.$$events){this.__bi(bR,bU.$$events,bT);
}if(bU.$$properties){this.__bj(bR,bU.$$properties,bT);
}if(bU.$$members){this.__bl(bR,bU.$$members,bT,bT,bT);
}}if(bR.$$includes){bR.$$includes.push(bS);
bR.$$flatIncludes.push.apply(bR.$$flatIncludes,bV);
}else{bR.$$includes=[bS];
bR.$$flatIncludes=bV;
}},__bq:function(){function bX(){bX.base.apply(this,arguments);
}return bX;
},__br:function(){return function(){};
},__bs:function(bY,ca){if(bY&&bY.$$includes){var cb=bY.$$flatIncludes;

for(var i=0,l=cb.length;i<l;i++){if(cb[i].$$constructor){return true;
}}}if(ca){var cc=qx.Mixin.flatten(ca);

for(var i=0,l=cc.length;i<l;i++){if(cc[i].$$constructor){return true;
}}}return false;
},__bt:function(cd,name,ce){var cg=function(){var cj=cg;
var ci=cj.$$original.apply(this,arguments);
if(cj.$$includes){var ch=cj.$$flatIncludes;

for(var i=0,l=ch.length;i<l;i++){if(ch[i].$$constructor){ch[i].$$constructor.apply(this,arguments);
}}}return ci;
};

if(qx.core.Environment.get(t)){var cf=qx.core.Aspect.wrap(name,cg,q);
cg.$$original=cd;
cg.constructor=cf;
cg=cf;
}cg.$$original=cd;
cd.wrapper=cg;
return cg;
}},defer:function(){if(qx.core.Environment.get(t)){for(var ck in qx.Bootstrap.$$registry){var cl=qx.Bootstrap.$$registry[ck];

for(var cm in cl){if(cl[cm] instanceof Function){cl[cm]=qx.core.Aspect.wrap(ck+s+cm,cl[cm],r);
}}}}}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="qx.locale.MTranslation";
qx.Mixin.define(a,{members:{tr:function(b,c){var d=qx.locale.Manager;

if(d){return d.tr.apply(d,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(e,f,g,h){var i=qx.locale.Manager;

if(i){return i.trn.apply(i,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(j,k,l){var m=qx.locale.Manager;

if(m){return m.trc.apply(m,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(n){var o=qx.locale.Manager;

if(o){return o.marktr.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var x="off",w="on",u="|",t="default",s="object",r="&",q="qx.aspects",p="qx.mobile.nativescroll",o="qx.mobile.emulatetouch",n="$",e="qx.allowUrlVariants",m="qx.debug",h="qx.client",c="qx.dynlocale",b="webkit",g="qxvariant",f="opera",j=":",a="qx.core.Variant",k="mshtml",d="gecko";
qx.Bootstrap.define(a,{statics:{__bu:{},__bv:{},compilerIsSet:function(){return true;
},define:function(y,z,A){this.defineDeprecated(y,z,A);
},defineDeprecated:function(B,C,D){if(!this.__bu[B]){this.__bu[B]={};
}else{}this.__bu[B].allowedValues=C;
this.__bu[B].defaultValue=D;
},get:function(E){var F=this.__bu[E];

if(F.value!==undefined){return F.value;
}return F.defaultValue;
},__bw:function(){if(window.qxvariants){for(var G in qxvariants){if(!this.__bu[G]){this.__bu[G]={};
}this.__bu[G].value=qxvariants[G];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(H){}this.__bx(this.__bu);
}},__bx:function(){if(qx.core.Environment.get(e)!=true){return;
}var I=document.location.search.slice(1).split(r);

for(var i=0;i<I.length;i++){var J=I[i].split(j);

if(J.length!=3||J[0]!=g){continue;
}var K=J[1];

if(!this.__bu[K]){this.__bu[K]={};
}this.__bu[K].value=decodeURIComponent(J[2]);
}},select:function(L,M){for(var N in M){if(this.isSet(L,N)){return M[N];
}}
if(M[t]!==undefined){return M[t];
}},isSet:function(O,P){var Q=O+n+P;

if(this.__bv[Q]!==undefined){return this.__bv[Q];
}var S=false;
if(P.indexOf(u)<0){S=this.get(O)===P;
}else{var R=P.split(u);

for(var i=0,l=R.length;i<l;i++){if(this.get(O)===R[i]){S=true;
break;
}}}this.__bv[Q]=S;
return S;
},__by:function(v){return typeof v===s&&v!==null&&v instanceof Array;
},__bz:function(v){return typeof v===s&&v!==null&&!(v instanceof Array);
},__bA:function(T,U){for(var i=0,l=T.length;i<l;i++){if(T[i]==U){return true;
}}return false;
}},defer:function(V){V.defineDeprecated(h,[d,k,f,b],qx.bom.client.Engine.getName());
V.defineDeprecated(m,[w,x],w);
V.defineDeprecated(q,[w,x],x);
V.defineDeprecated(c,[w,x],w);
V.defineDeprecated(o,[w,x],x);
V.defineDeprecated(p,[w,x],x);
V.__bw();
}});
})();
(function(){var e="$$hash",d="",c="qx.core.ObjectRegistry";
qx.Class.define(c,{statics:{inShutDown:false,__bB:{},__bC:0,__bD:[],register:function(f){var j=this.__bB;

if(!j){return;
}var h=f.$$hash;

if(h==null){var g=this.__bD;

if(g.length>0){h=g.pop();
}else{h=(this.__bC++)+d;
}f.$$hash=h;
}j[h]=f;
},unregister:function(k){var m=k.$$hash;

if(m==null){return;
}var n=this.__bB;

if(n&&n[m]){delete n[m];
this.__bD.push(m);
}try{delete k.$$hash;
}catch(o){if(k.removeAttribute){k.removeAttribute(e);
}}},toHashCode:function(p){var r=p.$$hash;

if(r!=null){return r;
}var q=this.__bD;

if(q.length>0){r=q.pop();
}else{r=(this.__bC++)+d;
}return p.$$hash=r;
},clearHashCode:function(s){var t=s.$$hash;

if(t!=null){this.__bD.push(t);
try{delete s.$$hash;
}catch(u){if(s.removeAttribute){s.removeAttribute(e);
}}}},fromHashCode:function(v){return this.__bB[v]||null;
},shutdown:function(){this.inShutDown=true;
var x=this.__bB;
var z=[];

for(var y in x){z.push(y);
}z.sort(function(a,b){return parseInt(b,10)-parseInt(a,10);
});
var w,i=0,l=z.length;

while(true){try{for(;i<l;i++){y=z[i];
w=x[y];

if(w&&w.dispose){w.dispose();
}}}catch(A){qx.Bootstrap.error(this,"Could not dispose object "+w.toString()+": "+A);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__bB;
},getRegistry:function(){return this.__bB;
}}});
})();
(function(){var k="on",j="engine.name",i="gecko",h="engine.version",g="function",f="mousedown",d="qx.bom.Event",c="return;",b="mouseover",a="HTMLEvents";
qx.Class.define(d,{statics:{addNativeListener:function(l,m,n,o){if(l.addEventListener){l.addEventListener(m,n,!!o);
}else if(l.attachEvent){l.attachEvent(k+m,n);
}},removeNativeListener:function(p,q,r,s){if(p.removeEventListener){p.removeEventListener(q,r,!!s);
}else if(p.detachEvent){try{p.detachEvent(k+q,r);
}catch(e){if(e.number!==-2146828218){throw e;
}}}},getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:function(e){if(e.relatedTarget!==undefined){if((qx.core.Environment.get(j)==i)){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}}return e.relatedTarget;
}else if(e.fromElement!==undefined&&e.type===b){return e.fromElement;
}else if(e.toElement!==undefined){return e.toElement;
}else{return null;
}},preventDefault:function(e){if(e.preventDefault){if((qx.core.Environment.get(j)==i)&&parseFloat(qx.core.Environment.get(h))>=1.9&&e.type==f&&e.button==2){return;
}e.preventDefault();
if((qx.core.Environment.get(j)==i)&&parseFloat(qx.core.Environment.get(h))<1.9){try{e.keyCode=0;
}catch(t){}}}else{try{e.keyCode=0;
}catch(u){}e.returnValue=false;
}},stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}else{e.cancelBubble=true;
}},fire:function(v,w){if(document.createEvent){var x=document.createEvent(a);
x.initEvent(w,true,true);
return !v.dispatchEvent(x);
}else{var x=document.createEventObject();
return v.fireEvent(k+w,x);
}},supportsEvent:qx.core.Environment.select(j,{"webkit":function(y,z){return y.hasOwnProperty(k+z);
},"default":function(A,B){var C=k+B;
var D=(C in A);

if(!D){D=typeof A[C]==g;

if(!D&&A.setAttribute){A.setAttribute(C,c);
D=typeof A[C]==g;
A.removeAttribute(C);
}}return D;
}})}});
})();
(function(){var r="|bubble",q="|capture",p="|",o="",n="_",m="unload",k="UNKNOWN_",j="__bJ",h="c",g="DOM_",c="__bI",f="WIN_",e="QX_",b="qx.event.Manager",a="capture",d="DOCUMENT_";
qx.Class.define(b,{extend:Object,construct:function(s,t){this.__bE=s;
this.__bF=qx.core.ObjectRegistry.toHashCode(s);
this.__bG=t;
if(s.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(s,m,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(s,m,arguments.callee);
self.dispose();
}));
}this.__bH={};
this.__bI={};
this.__bJ={};
this.__bK={};
},statics:{__bL:0,getNextUniqueId:function(){return (this.__bL++)+o;
}},members:{__bG:null,__bH:null,__bJ:null,__bM:null,__bI:null,__bK:null,__bE:null,__bF:null,getWindow:function(){return this.__bE;
},getWindowId:function(){return this.__bF;
},getHandler:function(u){var v=this.__bI[u.classname];

if(v){return v;
}return this.__bI[u.classname]=new u(this);
},getDispatcher:function(w){var x=this.__bJ[w.classname];

if(x){return x;
}return this.__bJ[w.classname]=new w(this,this.__bG);
},getListeners:function(y,z,A){var B=y.$$hash||qx.core.ObjectRegistry.toHashCode(y);
var D=this.__bH[B];

if(!D){return null;
}var E=z+(A?q:r);
var C=D[E];
return C?C.concat():null;
},serializeListeners:function(F){var M=F.$$hash||qx.core.ObjectRegistry.toHashCode(F);
var O=this.__bH[M];
var K=[];

if(O){var I,N,G,J,L;

for(var H in O){I=H.indexOf(p);
N=H.substring(0,I);
G=H.charAt(I+1)==h;
J=O[H];

for(var i=0,l=J.length;i<l;i++){L=J[i];
K.push({self:L.context,handler:L.handler,type:N,capture:G});
}}}return K;
},toggleAttachedEvents:function(P,Q){var V=P.$$hash||qx.core.ObjectRegistry.toHashCode(P);
var X=this.__bH[V];

if(X){var S,W,R,T;

for(var U in X){S=U.indexOf(p);
W=U.substring(0,S);
R=U.charCodeAt(S+1)===99;
T=X[U];

if(Q){this.__bN(P,W,R);
}else{this.__bO(P,W,R);
}}}},hasListener:function(Y,ba,bb){var bc=Y.$$hash||qx.core.ObjectRegistry.toHashCode(Y);
var be=this.__bH[bc];

if(!be){return false;
}var bf=ba+(bb?q:r);
var bd=be[bf];
return !!(bd&&bd.length>0);
},importListeners:function(bg,bh){var bn=bg.$$hash||qx.core.ObjectRegistry.toHashCode(bg);
var bo=this.__bH[bn]={};
var bk=qx.event.Manager;

for(var bi in bh){var bl=bh[bi];
var bm=bl.type+(bl.capture?q:r);
var bj=bo[bm];

if(!bj){bj=bo[bm]=[];
this.__bN(bg,bl.type,bl.capture);
}bj.push({handler:bl.listener,context:bl.self,unique:bl.unique||(bk.__bL++)+o});
}},addListener:function(bp,bq,br,self,bs){var bw;
var bx=bp.$$hash||qx.core.ObjectRegistry.toHashCode(bp);
var bz=this.__bH[bx];

if(!bz){bz=this.__bH[bx]={};
}var bv=bq+(bs?q:r);
var bu=bz[bv];

if(!bu){bu=bz[bv]=[];
}if(bu.length===0){this.__bN(bp,bq,bs);
}var by=(qx.event.Manager.__bL++)+o;
var bt={handler:br,context:self,unique:by};
bu.push(bt);
return bv+p+by;
},findHandler:function(bA,bB){var bN=false,bF=false,bO=false,bC=false;
var bL;

if(bA.nodeType===1){bN=true;
bL=g+bA.tagName.toLowerCase()+n+bB;
}else if(bA.nodeType===9){bC=true;
bL=d+bB;
}else if(bA==this.__bE){bF=true;
bL=f+bB;
}else if(bA.classname){bO=true;
bL=e+bA.classname+n+bB;
}else{bL=k+bA+n+bB;
}var bH=this.__bK;

if(bH[bL]){return bH[bL];
}var bK=this.__bG.getHandlers();
var bG=qx.event.IEventHandler;
var bI,bJ,bE,bD;

for(var i=0,l=bK.length;i<l;i++){bI=bK[i];
bE=bI.SUPPORTED_TYPES;

if(bE&&!bE[bB]){continue;
}bD=bI.TARGET_CHECK;

if(bD){var bM=false;

if(bN&&((bD&bG.TARGET_DOMNODE)!=0)){bM=true;
}else if(bF&&((bD&bG.TARGET_WINDOW)!=0)){bM=true;
}else if(bO&&((bD&bG.TARGET_OBJECT)!=0)){bM=true;
}else if(bC&&((bD&bG.TARGET_DOCUMENT)!=0)){bM=true;
}
if(!bM){continue;
}}bJ=this.getHandler(bK[i]);

if(bI.IGNORE_CAN_HANDLE||bJ.canHandleEvent(bA,bB)){bH[bL]=bJ;
return bJ;
}}return null;
},__bN:function(bP,bQ,bR){var bS=this.findHandler(bP,bQ);

if(bS){bS.registerEvent(bP,bQ,bR);
return;
}},removeListener:function(bT,bU,bV,self,bW){var cb;
var cc=bT.$$hash||qx.core.ObjectRegistry.toHashCode(bT);
var cd=this.__bH[cc];

if(!cd){return false;
}var bX=bU+(bW?q:r);
var bY=cd[bX];

if(!bY){return false;
}var ca;

for(var i=0,l=bY.length;i<l;i++){ca=bY[i];

if(ca.handler===bV&&ca.context===self){qx.lang.Array.removeAt(bY,i);

if(bY.length==0){this.__bO(bT,bU,bW);
}return true;
}}return false;
},removeListenerById:function(ce,cf){var cl;
var cj=cf.split(p);
var co=cj[0];
var cg=cj[1].charCodeAt(0)==99;
var cn=cj[2];
var cm=ce.$$hash||qx.core.ObjectRegistry.toHashCode(ce);
var cp=this.__bH[cm];

if(!cp){return false;
}var ck=co+(cg?q:r);
var ci=cp[ck];

if(!ci){return false;
}var ch;

for(var i=0,l=ci.length;i<l;i++){ch=ci[i];

if(ch.unique===cn){qx.lang.Array.removeAt(ci,i);

if(ci.length==0){this.__bO(ce,co,cg);
}return true;
}}return false;
},removeAllListeners:function(cq){var cu=cq.$$hash||qx.core.ObjectRegistry.toHashCode(cq);
var cw=this.__bH[cu];

if(!cw){return false;
}var cs,cv,cr;

for(var ct in cw){if(cw[ct].length>0){cs=ct.split(p);
cv=cs[0];
cr=cs[1]===a;
this.__bO(cq,cv,cr);
}}delete this.__bH[cu];
return true;
},deleteAllListeners:function(cx){delete this.__bH[cx];
},__bO:function(cy,cz,cA){var cB=this.findHandler(cy,cz);

if(cB){cB.unregisterEvent(cy,cz,cA);
return;
}},dispatchEvent:function(cC,event){var cH;
var cI=event.getType();

if(!event.getBubbles()&&!this.hasListener(cC,cI)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(cC);
}var cG=this.__bG.getDispatchers();
var cF;
var cE=false;

for(var i=0,l=cG.length;i<l;i++){cF=this.getDispatcher(cG[i]);
if(cF.canDispatchEvent(cC,event,cI)){cF.dispatchEvent(cC,event,cI);
cE=true;
break;
}}
if(!cE){return true;
}var cD=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !cD;
},dispose:function(){this.__bG.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,c);
qx.util.DisposeUtil.disposeMap(this,j);
this.__bH=this.__bE=this.__bM=null;
this.__bG=this.__bK=null;
}}});
})();
(function(){var d="qx.dom.Node",c="engine.name",b="";
qx.Class.define(d,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(e){return e.nodeType===
this.DOCUMENT?e:
e.ownerDocument||e.document;
},getWindow:qx.core.Environment.select(c,{"mshtml":function(f){if(f.nodeType==null){return f;
}if(f.nodeType!==this.DOCUMENT){f=f.ownerDocument;
}return f.parentWindow;
},"default":function(g){if(g.nodeType==null){return g;
}if(g.nodeType!==this.DOCUMENT){g=g.ownerDocument;
}return g.defaultView;
}}),getDocumentElement:function(h){return this.getDocument(h).documentElement;
},getBodyElement:function(j){return this.getDocument(j).body;
},isNode:function(k){return !!(k&&k.nodeType!=null);
},isElement:function(l){return !!(l&&l.nodeType===this.ELEMENT);
},isDocument:function(m){return !!(m&&m.nodeType===this.DOCUMENT);
},isText:function(n){return !!(n&&n.nodeType===this.TEXT);
},isWindow:function(o){return !!(o&&o.history&&o.location&&o.document);
},isNodeName:function(p,q){if(!q||!p||!p.nodeName){return false;
}return q.toLowerCase()==qx.dom.Node.getName(p);
},getName:function(r){if(!r||!r.nodeName){return null;
}return r.nodeName.toLowerCase();
},getText:function(s){if(!s||!s.nodeType){return null;
}
switch(s.nodeType){case 1:var i,a=[],t=s.childNodes,length=t.length;

for(i=0;i<length;i++){a[i]=this.getText(t[i]);
}return a.join(b);
case 2:case 3:case 4:return s.nodeValue;
}return null;
},isBlockNode:function(u){if(!qx.dom.Node.isElement(u)){return false;
}u=qx.dom.Node.getName(u);
return /^(body|form|textarea|fieldset|ul|ol|dl|dt|dd|li|div|hr|p|h[1-6]|quote|pre|table|thead|tbody|tfoot|tr|td|th|iframe|address|blockquote)$/.test(u);
}}});
})();
(function(){var g="mshtml",f="engine.name",e="[object Array]",d="qx.lang.Array",c="qx",b="number",a="string";
qx.Class.define(d,{statics:{toArray:function(h,j){return this.cast(h,Array,j);
},cast:function(k,m,n){if(k.constructor===m){return k;
}
if(qx.Class.hasInterface(k,qx.data.IListData)){var k=k.toArray();
}var o=new m;
if((qx.core.Environment.get(f)==g)){if(k.item){for(var i=n||0,l=k.length;i<l;i++){o.push(k[i]);
}return o;
}}if(Object.prototype.toString.call(k)===e&&n==null){o.push.apply(o,k);
}else{o.push.apply(o,Array.prototype.slice.call(k,n||0));
}return o;
},fromArguments:function(p,q){return Array.prototype.slice.call(p,q||0);
},fromCollection:function(r){if((qx.core.Environment.get(f)==g)){if(r.item){var s=[];

for(var i=0,l=r.length;i<l;i++){s[i]=r[i];
}return s;
}}return Array.prototype.slice.call(r,0);
},fromShortHand:function(t){var v=t.length;
var u=qx.lang.Array.clone(t);
switch(v){case 1:u[1]=u[2]=u[3]=u[0];
break;
case 2:u[2]=u[0];
case 3:u[3]=u[1];
}return u;
},clone:function(w){return w.concat();
},insertAt:function(x,y,i){x.splice(i,0,y);
return x;
},insertBefore:function(z,A,B){var i=z.indexOf(B);

if(i==-1){z.push(A);
}else{z.splice(i,0,A);
}return z;
},insertAfter:function(C,D,E){var i=C.indexOf(E);

if(i==-1||i==(C.length-1)){C.push(D);
}else{C.splice(i+1,0,D);
}return C;
},removeAt:function(F,i){return F.splice(i,1)[0];
},removeAll:function(G){G.length=0;
return this;
},append:function(H,I){Array.prototype.push.apply(H,I);
return H;
},exclude:function(J,K){for(var i=0,M=K.length,L;i<M;i++){L=J.indexOf(K[i]);

if(L!=-1){J.splice(L,1);
}}return J;
},remove:function(N,O){var i=N.indexOf(O);

if(i!=-1){N.splice(i,1);
return O;
}},contains:function(P,Q){return P.indexOf(Q)!==-1;
},equals:function(R,S){var length=R.length;

if(length!==S.length){return false;
}
for(var i=0;i<length;i++){if(R[i]!==S[i]){return false;
}}return true;
},sum:function(T){var U=0;

for(var i=0,l=T.length;i<l;i++){U+=T[i];
}return U;
},max:function(V){var i,X=V.length,W=V[0];

for(i=1;i<X;i++){if(V[i]>W){W=V[i];
}}return W===undefined?null:W;
},min:function(Y){var i,bb=Y.length,ba=Y[0];

for(i=1;i<bb;i++){if(Y[i]<ba){ba=Y[i];
}}return ba===undefined?null:ba;
},unique:function(bc){var bm=[],be={},bh={},bj={};
var bi,bd=0;
var bn=c+qx.lang.Date.now();
var bf=false,bl=false,bo=false;
for(var i=0,bk=bc.length;i<bk;i++){bi=bc[i];
if(bi===null){if(!bf){bf=true;
bm.push(bi);
}}else if(bi===undefined){}else if(bi===false){if(!bl){bl=true;
bm.push(bi);
}}else if(bi===true){if(!bo){bo=true;
bm.push(bi);
}}else if(typeof bi===a){if(!be[bi]){be[bi]=1;
bm.push(bi);
}}else if(typeof bi===b){if(!bh[bi]){bh[bi]=1;
bm.push(bi);
}}else{bg=bi[bn];

if(bg==null){bg=bi[bn]=bd++;
}
if(!bj[bg]){bj[bg]=bi;
bm.push(bi);
}}}for(var bg in bj){try{delete bj[bg][bn];
}catch(bp){try{bj[bg][bn]=null;
}catch(bq){throw new Error("Cannot clean-up map entry doneObjects["+bg+"]["+bn+"]");
}}}return bm;
}}});
})();
(function(){var f="()",e=".",d=".prototype.",c='anonymous()',b="qx.lang.Function",a=".constructor()";
qx.Class.define(b,{statics:{getCaller:function(g){return g.caller?g.caller.callee:g.callee.caller;
},getName:function(h){if(h.displayName){return h.displayName;
}
if(h.$$original||h.wrapper||h.classname){return h.classname+a;
}
if(h.$$mixin){for(var j in h.$$mixin.$$members){if(h.$$mixin.$$members[j]==h){return h.$$mixin.name+d+j+f;
}}for(var j in h.$$mixin){if(h.$$mixin[j]==h){return h.$$mixin.name+e+j+f;
}}}
if(h.self){var k=h.self.constructor;

if(k){for(var j in k.prototype){if(k.prototype[j]==h){return k.classname+d+j+f;
}}for(var j in k){if(k[j]==h){return k.classname+e+j+f;
}}}}var i=h.toString().match(/function\s*(\w*)\s*\(.*/);

if(i&&i.length>=1&&i[1]){return i[1]+f;
}return c;
},globalEval:function(l){if(window.execScript){return window.execScript(l);
}else{return eval.call(window,l);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(m,n){if(!n){return m;
}if(!(n.self||n.args||n.delay!=null||n.periodical!=null||n.attempt)){return m;
}return function(event){var p=qx.lang.Array.fromArguments(arguments);
if(n.args){p=n.args.concat(p);
}
if(n.delay||n.periodical){var o=qx.event.GlobalError.observeMethod(function(){return m.apply(n.self||this,p);
});

if(n.delay){return window.setTimeout(o,n.delay);
}
if(n.periodical){return window.setInterval(o,n.periodical);
}}else if(n.attempt){var q=false;

try{q=m.apply(n.self||this,p);
}catch(r){}return q;
}else{return m.apply(n.self||this,p);
}};
},bind:function(s,self,t){return this.create(s,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(u,v){return this.create(u,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(w,self,x){if(arguments.length<3){return function(event){return w.call(self||this,event||window.event);
};
}else{var y=qx.lang.Array.fromArguments(arguments,2);
return function(event){var z=[event||window.event];
z.push.apply(z,y);
w.apply(self||this,z);
};
}},attempt:function(A,self,B){return this.create(A,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(C,D,self,E){return this.create(C,{delay:D,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(F,G,self,H){return this.create(F,{periodical:G,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var c="qx.event.Registration";
qx.Class.define(c,{statics:{__bP:{},getManager:function(d){if(d==null){d=window;
}else if(d.nodeType){d=qx.dom.Node.getWindow(d);
}else if(!qx.dom.Node.isWindow(d)){d=window;
}var f=d.$$hash||qx.core.ObjectRegistry.toHashCode(d);
var e=this.__bP[f];

if(!e){e=new qx.event.Manager(d,this);
this.__bP[f]=e;
}return e;
},removeManager:function(g){var h=g.getWindowId();
delete this.__bP[h];
},addListener:function(i,j,k,self,l){return this.getManager(i).addListener(i,j,k,self,l);
},removeListener:function(m,n,o,self,p){return this.getManager(m).removeListener(m,n,o,self,p);
},removeListenerById:function(q,r){return this.getManager(q).removeListenerById(q,r);
},removeAllListeners:function(s){return this.getManager(s).removeAllListeners(s);
},deleteAllListeners:function(t){var u=t.$$hash;

if(u){this.getManager(t).deleteAllListeners(u);
}},hasListener:function(v,w,x){return this.getManager(v).hasListener(v,w,x);
},serializeListeners:function(y){return this.getManager(y).serializeListeners(y);
},createEvent:function(z,A,B){if(A==null){A=qx.event.type.Event;
}var C=qx.event.Pool.getInstance().getObject(A);
B?C.init.apply(C,B):C.init();
if(z){C.setType(z);
}return C;
},dispatchEvent:function(D,event){return this.getManager(D).dispatchEvent(D,event);
},fireEvent:function(E,F,G,H){var I;
var J=this.createEvent(F,G||null,H);
return this.getManager(E).dispatchEvent(E,J);
},fireNonBubblingEvent:function(K,L,M,N){var O=this.getManager(K);

if(!O.hasListener(K,L,false)){return true;
}var P=this.createEvent(L,M||null,N);
return O.dispatchEvent(K,P);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__bQ:[],addHandler:function(Q){this.__bQ.push(Q);
this.__bQ.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__bQ;
},__bR:[],addDispatcher:function(R,S){this.__bR.push(R);
this.__bR.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__bR;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:4,TARGET_DOCUMENT:8},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d){this.__bS=b+(c&&c.message?c.message:c);
Error.call(this,this.__bS);
this.__bT=d;
this.__bU=c;
},members:{__bU:null,__bT:null,__bS:null,toString:function(){return this.__bS;
},getArguments:function(){return this.__bT;
},getSourceException:function(){return this.__bU;
}},destruct:function(){this.__bU=null;
this.__bT=null;
this.__bS=null;
}});
})();
(function(){var c="qx.globalErrorHandling",b="qx.event.GlobalError",a="on";
qx.Bootstrap.define(b,{statics:{setErrorHandler:function(d,e){this.__bV=d||null;
this.__bW=e||window;

if(qx.core.Environment.get(c)){if(d&&window.onerror){var f=qx.Bootstrap.bind(this.__bY,this);

if(this.__bX==null){this.__bX=window.onerror;
}var self=this;
window.onerror=function(g,h,i){self.__bX(g,h,i);
f(g,h,i);
};
}
if(d&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__bY,this);
}if(this.__bV==null){if(this.__bX!=null){window.onerror=this.__bX;
this.__bX=null;
}else{window.onerror=null;
}}}},__bY:function(j,k,l){if(this.__bV){this.handleError(new qx.core.WindowError(j,k,l));
return true;
}},observeMethod:function(m){if(qx.core.Environment.get(c)){var self=this;
return function(){if(!self.__bV){return m.apply(this,arguments);
}
try{return m.apply(this,arguments);
}catch(n){self.handleError(new qx.core.GlobalError(n,arguments));
}};
}else{return m;
}},handleError:function(o){if(this.__bV){this.__bV.call(this.__bW,o);
}}},defer:function(p){qx.core.Environment.add(c,true);
p.setErrorHandler(null,null);
qx.core.Setting.defineDeprecated(c,a);
}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(b,c,d,e){return qx.data.SingleValueBinding.bind(this,b,c,d,e);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var m=":",l="engine.name",k="Error created at",j="...",h="qx.dev.StackTrace",g="",f="\n",e="?",d="/source/class/",c="anonymous",a="of linked script",b=".";
qx.Bootstrap.define(h,{statics:{getStackTrace:qx.core.Environment.select(l,{"gecko":function(){try{throw new Error();
}catch(A){var u=this.getStackTraceFromError(A);
qx.lang.Array.removeAt(u,0);
var s=this.getStackTraceFromCaller(arguments);
var q=s.length>u.length?s:u;

for(var i=0;i<Math.min(s.length,u.length);i++){var r=s[i];

if(r.indexOf(c)>=0){continue;
}var y=r.split(m);

if(y.length!=2){continue;
}var w=y[0];
var p=y[1];
var o=u[i];
var z=o.split(m);
var v=z[0];
var n=z[1];

if(qx.Class.getByName(v)){var t=v;
}else{t=w;
}var x=t+m;

if(p){x+=p+m;
}x+=n;
q[i]=x;
}return q;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var B;

try{B.bar();
}catch(D){var C=this.getStackTraceFromError(D);
qx.lang.Array.removeAt(C,0);
return C;
}return [];
}}),getStackTraceFromCaller:qx.core.Environment.select(l,{"opera":function(E){return [];
},"default":function(F){var K=[];
var J=qx.lang.Function.getCaller(F);
var G={};

while(J){var H=qx.lang.Function.getName(J);
K.push(H);

try{J=J.caller;
}catch(L){break;
}
if(!J){break;
}var I=qx.core.ObjectRegistry.toHashCode(J);

if(G[I]){K.push(j);
break;
}G[I]=J;
}return K;
}}),getStackTraceFromError:qx.core.Environment.select(l,{"gecko":function(M){if(!M.stack){return [];
}var S=/@(.+):(\d+)$/gm;
var N;
var O=[];

while((N=S.exec(M.stack))!=null){var P=N[1];
var R=N[2];
var Q=this.__ca(P);
O.push(Q+m+R);
}return O;
},"webkit":function(T){if(T.stack){var bb=/at (.*)/gm;
var ba=/\((.*?)(:[^\/].*)\)/;
var X=/(.*?)(:[^\/].*)/;
var U;
var V=[];

while((U=bb.exec(T.stack))!=null){var W=ba.exec(U[1]);

if(!W){W=X.exec(U[1]);
}
if(W){var Y=this.__ca(W[1]);
V.push(Y+W[2]);
}else{V.push(U[1]);
}}return V;
}else if(T.sourceURL&&T.line){return [this.__ca(T.sourceURL)+m+T.line];
}else{return [];
}},"opera":function(bc){if(bc.stacktrace){var be=bc.stacktrace;

if(be.indexOf(k)>=0){be=be.split(k)[0];
}if(be.indexOf(a)>=0){var bo=/Line\ (\d+?)\ of\ linked\ script\ (.*?)$/gm;
var bf;
var bg=[];

while((bf=bo.exec(be))!=null){var bn=bf[1];
var bi=bf[2];
var bm=this.__ca(bi);
bg.push(bm+m+bn);
}}else{var bo=/line\ (\d+?),\ column\ (\d+?)\ in\ (?:.*?)\ in\ (.*?):[^\/]/gm;
var bf;
var bg=[];

while((bf=bo.exec(be))!=null){var bn=bf[1];
var bh=bf[2];
var bi=bf[3];
var bm=this.__ca(bi);
bg.push(bm+m+bn+m+bh);
}}return bg;
}else if(bc.message.indexOf("Backtrace:")>=0){var bg=[];
var bj=qx.lang.String.trim(bc.message.split("Backtrace:")[1]);
var bk=bj.split(f);

for(var i=0;i<bk.length;i++){var bd=bk[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(bd&&bd.length>=2){var bn=bd[1];
var bl=this.__ca(bd[2]);
bg.push(bl+m+bn);
}}return bg;
}else{return [];
}},"default":function(){return [];
}}),__ca:function(bp){var bt=d;
var bq=bp.indexOf(bt);
var bs=bp.indexOf(e);

if(bs>=0){bp=bp.substring(0,bs);
}var br=(bq==-1)?bp:bp.substring(bq+bt.length).replace(/\//g,b).replace(/\.js$/,g);
return br;
}}});
})();
(function(){var k="",j="g",h="0",g='\\$1',f="%",e='-',d="qx.lang.String",c=' ',b='\n',a="undefined";
qx.Class.define(d,{statics:{camelCase:function(l){return l.replace(/\-([a-z])/g,function(m,n){return n.toUpperCase();
});
},hyphenate:function(o){return o.replace(/[A-Z]/g,function(p){return (e+p.charAt(0).toLowerCase());
});
},capitalize:function(q){return q.replace(/\b[a-z]/g,function(r){return r.toUpperCase();
});
},clean:function(s){return this.trim(s.replace(/\s+/g,c));
},trimLeft:function(t){return t.replace(/^\s+/,k);
},trimRight:function(u){return u.replace(/\s+$/,k);
},trim:function(v){return v.replace(/^\s+|\s+$/g,k);
},startsWith:function(w,x){return w.indexOf(x)===0;
},endsWith:function(y,z){return y.substring(y.length-z.length,y.length)===z;
},repeat:function(A,B){return A.length>0?new Array(B+1).join(A):k;
},pad:function(C,length,D){var E=length-C.length;

if(E>0){if(typeof D===a){D=h;
}return this.repeat(D,E)+C;
}else{return C;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(F,G){return F.indexOf(G)!=-1;
},format:function(H,I){var J=H;

for(var i=0;i<I.length;i++){J=J.replace(new RegExp(f+(i+1),j),I[i]+k);
}return J;
},escapeRegexpChars:function(K){return K.replace(/([.*+?^${}()|[\]\/\\])/g,g);
},toArray:function(L){return L.split(/\B|\b/g);
},stripTags:function(M){return M.replace(/<\/?[^>]+>/gi,k);
},stripScripts:function(N,O){var Q=k;
var P=N.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){Q+=arguments[1]+b;
return k;
});

if(O===true){qx.lang.Function.globalEval(Q);
}return P;
}}});
})();
(function(){var a="qx.lang.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(b){this.setMaxEntries(b||50);
},members:{__cb:0,__cc:0,__cd:false,__ce:0,__cf:null,__cg:null,setMaxEntries:function(c){this.__cg=c;
this.clear();
},getMaxEntries:function(){return this.__cg;
},addEntry:function(d){this.__cf[this.__cb]=d;
this.__cb=this.__ch(this.__cb,1);
var e=this.getMaxEntries();

if(this.__cc<e){this.__cc++;
}if(this.__cd&&(this.__ce<e)){this.__ce++;
}},mark:function(){this.__cd=true;
this.__ce=0;
},clearMark:function(){this.__cd=false;
},getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);
},getEntries:function(f,g){if(f>this.__cc){f=this.__cc;
}if(g&&this.__cd&&(f>this.__ce)){f=this.__ce;
}
if(f>0){var i=this.__ch(this.__cb,-1);
var h=this.__ch(i,-f+1);
var j;

if(h<=i){j=this.__cf.slice(h,i+1);
}else{j=this.__cf.slice(h,this.__cc).concat(this.__cf.slice(0,i+1));
}}else{j=[];
}return j;
},clear:function(){this.__cf=new Array(this.getMaxEntries());
this.__cc=0;
this.__ce=0;
this.__cb=0;
},__ch:function(k,l){var m=this.getMaxEntries();
var n=(k+l)%m;
if(n<0){n+=m;
}return n;
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:qx.lang.RingBuffer,construct:function(b){this.setMaxMessages(b||50);
},members:{setMaxMessages:function(c){this.setMaxEntries(c);
},getMaxMessages:function(){return this.getMaxEntries();
},process:function(d){this.addEntry(d);
},getAllLogEvents:function(){return this.getAllEntries();
},retrieveLogEvents:function(e,f){return this.getEntries(e,f);
},clearHistory:function(){this.clear();
}}});
})();
(function(){var k="node",j="error",h="...(+",g="array",f=")",e="info",d="instance",c="string",b="null",a="class",H="number",G="stringify",F="]",E="date",D="unknown",C="function",B="boolean",A="debug",z="map",y="undefined",s="qx.log.Logger",t="[",q="#",r="warn",o="document",p="{...(",m="text[",n="[...(",u="\n",v=")}",x=")]",w="object";
qx.Class.define(s,{statics:{__ci:A,setLevel:function(I){this.__ci=I;
},getLevel:function(){return this.__ci;
},setTreshold:function(J){this.__cl.setMaxMessages(J);
},getTreshold:function(){return this.__cl.getMaxMessages();
},__cj:{},__ck:0,register:function(K){if(K.$$id){return;
}var M=this.__ck++;
this.__cj[M]=K;
K.$$id=M;
var L=this.__cm;
var N=this.__cl.getAllLogEvents();

for(var i=0,l=N.length;i<l;i++){if(L[N[i].level]>=L[this.__ci]){K.process(N[i]);
}}},unregister:function(O){var P=O.$$id;

if(P==null){return;
}delete this.__cj[P];
delete O.$$id;
},debug:function(Q,R){qx.log.Logger.__cn(A,arguments);
},info:function(S,T){qx.log.Logger.__cn(e,arguments);
},warn:function(U,V){qx.log.Logger.__cn(r,arguments);
},error:function(W,X){qx.log.Logger.__cn(j,arguments);
},trace:function(Y){qx.log.Logger.__cn(e,[Y,qx.dev.StackTrace.getStackTrace().join(u)]);
},deprecatedMethodWarning:function(ba,bb){var bc;
},deprecatedClassWarning:function(bd,be){var bf;
},deprecatedEventWarning:function(bg,event,bh){var bi;
},deprecatedMixinWarning:function(bj,bk){var bl;
},deprecatedConstantWarning:function(bm,bn,bo){var self,bp;
},deprecateMethodOverriding:function(bq,br,bs,bt){var bu;
},clear:function(){this.__cl.clearHistory();
},__cl:new qx.log.appender.RingBuffer(50),__cm:{debug:0,info:1,warn:2,error:3},__cn:function(bv,bw){var bB=this.__cm;

if(bB[bv]<bB[this.__ci]){return;
}var by=bw.length<2?null:bw[0];
var bA=by?1:0;
var bx=[];

for(var i=bA,l=bw.length;i<l;i++){bx.push(this.__cp(bw[i],true));
}var bC=new Date;
var bD={time:bC,offset:bC-qx.Bootstrap.LOADSTART,level:bv,items:bx,win:window};
if(by){if(by.$$hash!==undefined){bD.object=by.$$hash;
}else if(by.$$type){bD.clazz=by;
}}this.__cl.process(bD);
var bE=this.__cj;

for(var bz in bE){bE[bz].process(bD);
}},__co:function(bF){if(bF===undefined){return y;
}else if(bF===null){return b;
}
if(bF.$$type){return a;
}var bG=typeof bF;

if(bG===C||bG==c||bG===H||bG===B){return bG;
}else if(bG===w){if(bF.nodeType){return k;
}else if(bF.classname){return d;
}else if(bF instanceof Array){return g;
}else if(bF instanceof Error){return j;
}else if(bF instanceof Date){return E;
}else{return z;
}}
if(bF.toString){return G;
}return D;
},__cp:function(bH,bI){var bP=this.__co(bH);
var bL=D;
var bK=[];

switch(bP){case b:case y:bL=bP;
break;
case c:case H:case B:case E:bL=bH;
break;
case k:if(bH.nodeType===9){bL=o;
}else if(bH.nodeType===3){bL=m+bH.nodeValue+F;
}else if(bH.nodeType===1){bL=bH.nodeName.toLowerCase();

if(bH.id){bL+=q+bH.id;
}}else{bL=k;
}break;
case C:bL=qx.lang.Function.getName(bH)||bP;
break;
case d:bL=bH.basename+t+bH.$$hash+F;
break;
case a:case G:bL=bH.toString();
break;
case j:bK=qx.dev.StackTrace.getStackTraceFromError(bH);
bL=bH.toString();
break;
case g:if(bI){bL=[];

for(var i=0,l=bH.length;i<l;i++){if(bL.length>20){bL.push(h+(l-i)+f);
break;
}bL.push(this.__cp(bH[i],false));
}}else{bL=n+bH.length+x;
}break;
case z:if(bI){var bJ;
var bO=[];

for(var bN in bH){bO.push(bN);
}bO.sort();
bL=[];

for(var i=0,l=bO.length;i<l;i++){if(bL.length>20){bL.push(h+(l-i)+f);
break;
}bN=bO[i];
bJ=this.__cp(bH[bN],false);
bJ.key=bN;
bL.push(bJ);
}}else{var bM=0;

for(var bN in bH){bM++;
}bL=p+bM+v;
}break;
}return {type:bP,text:bL,trace:bK};
}},defer:function(bQ){var bR=qx.Bootstrap.$$logs;

for(var i=0;i<bR.length;i++){bQ.__cn(bR[i][0],bR[i][1]);
}qx.Bootstrap.debug=bQ.debug;
qx.Bootstrap.info=bQ.info;
qx.Bootstrap.warn=bQ.warn;
qx.Bootstrap.error=bQ.error;
qx.Bootstrap.trace=bQ.trace;
}});
})();
(function(){var q="set",p="get",o="reset",n="MSIE 6.0",m="info",k="qx.core.Object",j="error",h="warn",g="]",f="debug",b="[",d="$$user_",c="rv:1.8.1",a="Object";
qx.Class.define(k,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:a},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+b+this.$$hash+g;
},base:function(r,s){if(arguments.length===1){return r.callee.base.call(this);
}else{return r.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(t){return t.callee.self;
},clone:function(){var v=this.constructor;
var u=new v;
var x=qx.Class.getProperties(v);
var w=qx.core.Property.$$store.user;
var y=qx.core.Property.$$method.set;
var name;
for(var i=0,l=x.length;i<l;i++){name=x[i];

if(this.hasOwnProperty(w[name])){u[y[name]](this[w[name]]);
}}return u;
},set:function(z,A){var C=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(z)){if(!this[C[z]]){if(this[q+qx.Bootstrap.firstUp(z)]!=undefined){this[q+qx.Bootstrap.firstUp(z)](A);
return this;
}}return this[C[z]](A);
}else{for(var B in z){if(!this[C[B]]){if(this[q+qx.Bootstrap.firstUp(B)]!=undefined){this[q+qx.Bootstrap.firstUp(B)](z[B]);
continue;
}}this[C[B]](z[B]);
}return this;
}},get:function(D){var E=qx.core.Property.$$method.get;

if(!this[E[D]]){if(this[p+qx.Bootstrap.firstUp(D)]!=undefined){return this[p+qx.Bootstrap.firstUp(D)]();
}}return this[E[D]]();
},reset:function(F){var G=qx.core.Property.$$method.reset;

if(!this[G[F]]){if(this[o+qx.Bootstrap.firstUp(F)]!=undefined){this[o+qx.Bootstrap.firstUp(F)]();
return;
}}this[G[F]]();
},__cq:qx.event.Registration,addListener:function(H,I,self,J){if(!this.$$disposed){return this.__cq.addListener(this,H,I,self,J);
}return null;
},addListenerOnce:function(K,L,self,M){var N=function(e){this.removeListener(K,N,this,M);
L.call(self||this,e);
};
return this.addListener(K,N,this,M);
},removeListener:function(O,P,self,Q){if(!this.$$disposed){return this.__cq.removeListener(this,O,P,self,Q);
}return false;
},removeListenerById:function(R){if(!this.$$disposed){return this.__cq.removeListenerById(this,R);
}return false;
},hasListener:function(S,T){return this.__cq.hasListener(this,S,T);
},dispatchEvent:function(U){if(!this.$$disposed){return this.__cq.dispatchEvent(this,U);
}return true;
},fireEvent:function(V,W,X){if(!this.$$disposed){return this.__cq.fireEvent(this,V,W,X);
}return true;
},fireNonBubblingEvent:function(Y,ba,bb){if(!this.$$disposed){return this.__cq.fireNonBubblingEvent(this,Y,ba,bb);
}return true;
},fireDataEvent:function(bc,bd,be,bf){if(!this.$$disposed){if(be===undefined){be=null;
}return this.__cq.fireNonBubblingEvent(this,bc,qx.event.type.Data,[bd,be,!!bf]);
}return true;
},__cr:null,setUserData:function(bg,bh){if(!this.__cr){this.__cr={};
}this.__cr[bg]=bh;
},getUserData:function(bi){if(!this.__cr){return null;
}var bj=this.__cr[bi];
return bj===undefined?null:bj;
},__cs:qx.log.Logger,debug:function(bk){this.__ct(f,arguments);
},info:function(bl){this.__ct(m,arguments);
},warn:function(bm){this.__ct(h,arguments);
},error:function(bn){this.__ct(j,arguments);
},trace:function(){this.__cs.trace(this);
},__ct:function(bo,bp){var bq=qx.lang.Array.fromArguments(bp);
bq.unshift(this);
this.__cs[bo].apply(this.__cs,bq);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var bv,bt,bs,bw;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
var bu=this.constructor;
var br;

while(bu.superclass){if(bu.$$destructor){bu.$$destructor.call(this);
}if(bu.$$includes){br=bu.$$flatIncludes;

for(var i=0,l=br.length;i<l;i++){if(br[i].$$destructor){br[i].$$destructor.call(this);
}}}bu=bu.superclass;
}if(this.__cu){this.__cu();
}},__cu:null,__cv:function(){var bx=qx.Class.getProperties(this.constructor);

for(var i=0,l=bx.length;i<l;i++){delete this[d+bx[i]];
}},_disposeObjects:function(by){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(bz){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(bA){qx.util.DisposeUtil.disposeArray(this,bA);
},_disposeMap:function(bB){qx.util.DisposeUtil.disposeMap(this,bB);
}},environment:{"qx.disposerDebugLevel":0},defer:function(bC,bD){var bF=navigator.userAgent.indexOf(n)!=-1;
var bE=navigator.userAgent.indexOf(c)!=-1;
if(bF||bE){bD.__cu=bD.__cv;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__cr=null;
var bI=this.constructor;
var bM;
var bN=qx.core.Property.$$store;
var bK=bN.user;
var bL=bN.theme;
var bG=bN.inherit;
var bJ=bN.useinit;
var bH=bN.init;

while(bI){bM=bI.$$properties;

if(bM){for(var name in bM){if(bM[name].dereference){this[bK[name]]=this[bL[name]]=this[bG[name]]=this[bJ[name]]=this[bH[name]]=undefined;
}}}bI=bI.superclass;
}}});
})();
(function(){var n="engine.name",m="ready",l="mshtml",k="load",j="unload",i="qx.event.handler.Application",h="complete",g="webkit",f="gecko",d="opera",a="left",c="DOMContentLoaded",b="shutdown";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(o){qx.core.Object.call(this);
this._window=o.getWindow();
this.__cw=false;
this.__cx=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var p=qx.event.handler.Application.$$instance;

if(p){p.__cA();
}}},members:{canHandleEvent:function(q,r){},registerEvent:function(s,t,u){},unregisterEvent:function(v,w,x){},__cy:null,__cw:null,__cx:null,__cz:null,__cA:function(){if(!this.__cy&&this.__cw&&qx.$$loader.scriptLoaded){if((qx.core.Environment.get(n)==l)){if(qx.event.Registration.hasListener(this._window,m)){this.__cy=true;
qx.event.Registration.fireEvent(this._window,m);
}}else{this.__cy=true;
qx.event.Registration.fireEvent(this._window,m);
}}},isApplicationReady:function(){return this.__cy;
},_initObserver:function(){if(qx.$$domReady||document.readyState==h||document.readyState==m){this.__cw=true;
this.__cA();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Environment.get(n)==f||qx.core.Environment.get(n)==d||qx.core.Environment.get(n)==g){qx.bom.Event.addNativeListener(this._window,c,this._onNativeLoadWrapped);
}else if((qx.core.Environment.get(n)==l)){var self=this;
var y=function(){try{document.documentElement.doScroll(a);

if(document.body){self._onNativeLoadWrapped();
}}catch(z){window.setTimeout(y,100);
}};
y();
}qx.bom.Event.addNativeListener(this._window,k,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,j,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,k,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,j,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__cw=true;
this.__cA();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__cz){this.__cz=true;

try{qx.event.Registration.fireEvent(this._window,b);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(A){qx.event.Registration.addHandler(A);
}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(b){this._manager=b;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(c,event,d){return !event.getBubbles();
},dispatchEvent:function(e,event,f){var j,g;
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var k=this._manager.getListeners(e,f,false);

if(k){for(var i=0,l=k.length;i<l;i++){var h=k[i].context||e;
k[i].handler.call(h,event);
}}}},defer:function(m){qx.event.Registration.addDispatcher(m);
}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(c){qx.core.Object.call(this);
this.__cB={};

if(c!=null){this.setSize(c);
}},properties:{size:{check:a,init:Infinity}},members:{__cB:null,getObject:function(d){if(this.$$disposed){return new d;
}
if(!d){throw new Error("Class needs to be defined!");
}var e=null;
var f=this.__cB[d.classname];

if(f){e=f.pop();
}
if(e){e.$$pooled=false;
}else{e=new d;
}return e;
},poolObject:function(g){if(!this.__cB){return;
}var h=g.classname;
var j=this.__cB[h];

if(g.$$pooled){throw new Error("Object is already pooled: "+g);
}
if(!j){this.__cB[h]=j=[];
}if(j.length>this.getSize()){if(g.destroy){g.destroy();
}else{g.dispose();
}return;
}g.$$pooled=true;
j.push(g);
}},destruct:function(){var n=this.__cB;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__cB;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);
}});
})();
(function(){var a="qx.event.type.Event";
qx.Class.define(a,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(b,c){this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!b;
this._cancelable=!!c;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(d){if(d){var e=d;
}else{var e=qx.event.Pool.getInstance().getObject(this.constructor);
}e._type=this._type;
e._target=this._target;
e._currentTarget=this._currentTarget;
e._relatedTarget=this._relatedTarget;
e._originalTarget=this._originalTarget;
e._stopPropagation=this._stopPropagation;
e._bubbles=this._bubbles;
e._preventDefault=this._preventDefault;
e._cancelable=this._cancelable;
return e;
},stop:function(){if(this._bubbles){this.stopPropagation();
}
if(this._cancelable){this.preventDefault();
}},stopPropagation:function(){this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(f){this._type=f;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(g){this._eventPhase=g;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(h){this._target=h;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(i){this._currentTarget=i;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(j){this._relatedTarget=j;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(k){this._originalTarget=k;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(l){this._bubbles=l;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(m){this._cancelable=m;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var a="qx.event.type.Native";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d,e,f){qx.event.type.Event.prototype.init.call(this,e,f);
this._target=c||qx.bom.Event.getTarget(b);
this._relatedTarget=d||qx.bom.Event.getRelatedTarget(b);

if(b.timeStamp){this._timeStamp=b.timeStamp;
}this._native=b;
this._returnValue=null;
return this;
},clone:function(g){var h=qx.event.type.Event.prototype.clone.call(this,g);
var i={};
h._native=this._cloneNativeEvent(this._native,i);
h._returnValue=this._returnValue;
return h;
},_cloneNativeEvent:function(j,k){k.preventDefault=qx.lang.Function.empty;
return k;
},preventDefault:function(){qx.event.type.Event.prototype.preventDefault.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(l){this._returnValue=l;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var a="qx.event.handler.Window";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this._manager=b;
this._window=b.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(c,d){},registerEvent:function(f,g,h){},unregisterEvent:function(i,j,k){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var m=qx.event.handler.Window.SUPPORTED_TYPES;

for(var l in m){qx.bom.Event.addNativeListener(this._window,l,this._onNativeWrapper);
}},_stopWindowObserver:function(){var o=qx.event.handler.Window.SUPPORTED_TYPES;

for(var n in o){qx.bom.Event.removeNativeListener(this._window,n,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var q=this._window;

try{var t=q.document;
}catch(e){return ;
}var r=t.documentElement;
var p=qx.bom.Event.getTarget(e);

if(p==null||p===q||p===t||p===r){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,q]);
qx.event.Registration.dispatchEvent(q,event);
var s=event.getReturnValue();

if(s!=null){e.returnValue=s;
return s;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(u){qx.event.Registration.addHandler(u);
}});
})();
(function(){var j="",i="ready",h="shutdown",g="engine.name",f="qx.application",d="beforeunload",c="qx.core.Init",b="os.name",a="engine.version";
qx.Class.define(c,{statics:{getApplication:function(){return this.__cC||null;
},ready:function(){if(this.__cC){return;
}
if(qx.core.Environment.get(g)==j){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.core.Environment.get(a)==j){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.core.Environment.get(b)==j){qx.log.Logger.warn("Could not detect operating system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var l=qx.core.Environment.get(f);
var m=qx.Class.getByName(l);

if(m){this.__cC=new m;
var k=new Date;
this.__cC.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-k)+"ms");
var k=new Date;
this.__cC.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-k)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+l);
}},__cD:function(e){var n=this.__cC;

if(n){e.setReturnValue(n.close());
}},__cE:function(){var o=this.__cC;

if(o){o.terminate();
}}},defer:function(p){qx.event.Registration.addListener(window,i,p.ready,p);
qx.event.Registration.addListener(window,h,p.__cE,p);
qx.event.Registration.addListener(window,d,p.__cD,p);
}});
})();
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__cF:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__cF;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__cF=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__cF=null;
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var l="Query Hellos from REST/Pg",k="application/json",j="Content",i="icon/16/apps/office-calendar.png",h="Hello World",g="completed",f="GET",d="http://localhost:8080/hellos.json",c="trxtest.Application",b="ID",a="execute";
qx.Class.define(c,{extend:qx.application.Standalone,members:{__nw:null,main:function(){qx.application.Standalone.prototype.main.call(this);
this.__nw=new qx.ui.table.model.Simple();
this.__nw.setColumns([b,j]);
var n=new qx.ui.window.Window(h,i);
n.setLayout(new qx.ui.layout.VBox(10));
n.setModal(true);
n.moveTo(150,150);
this.getRoot().add(n,{left:200,top:50});
var m=new qx.ui.table.Table(this.__nw);
n.add(m);
var o=new qx.ui.form.Button(l);
o.addListener(a,this.queryHellos,this);
n.add(o);
n.open();
},queryHellos:function(){var p=new qx.io.remote.Request(d,f,k);
p.addListener(g,function(e){this.__nw.setData(e.getContent());
},this);
p.send();
}}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__cG:null,__cH:null,init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,false,d);
this.__cG=b;
this.__cH=c;
return this;
},clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);
f.__cG=this.__cG;
f.__cH=this.__cH;
return f;
},getData:function(){return this.__cG;
},getOldData:function(){return this.__cH;
}},destruct:function(){this.__cG=this.__cH=null;
}});
})();
(function(){var m="get",l="",k="[",h="last",g="change",f="]",d=".",c="Number",b="String",a="qx.debug.databinding",G="set",F="deepBinding",E="item",D="reset",C="qx.data.SingleValueBinding",B="' (",A="Boolean",z=") to the object '",y="Integer",x=" of object ",u="Binding property ",v="DEBUG_ON",s="Binding from '",t="PositiveNumber",q="PositiveInteger",r="Binding does not exist!",n=").",p="Date",w=" not possible: No event available. ";
qx.Class.define(C,{statics:{DEBUG_ON:false,__cI:{},bind:function(H,I,J,K,L){var W=this.__cK(H,I,J,K,L);
var R=I.split(d);
var N=this.__cQ(R);
var V=[];
var S=[];
var T=[];
var P=[];
var Q=H;
try{for(var i=0;i<R.length;i++){if(N[i]!==l){P.push(g);
}else{P.push(this.__cL(Q,R[i]));
}V[i]=Q;
if(i==R.length-1){if(N[i]!==l){var bb=N[i]===h?Q.length-1:N[i];
var M=Q.getItem(bb);
this.__cP(M,J,K,L,H);
T[i]=this.__cR(Q,P[i],J,K,L,N[i]);
}else{if(R[i]!=null&&Q[m+qx.lang.String.firstUp(R[i])]!=null){var M=Q[m+qx.lang.String.firstUp(R[i])]();
this.__cP(M,J,K,L,H);
}T[i]=this.__cR(Q,P[i],J,K,L);
}}else{var X={index:i,propertyNames:R,sources:V,listenerIds:T,arrayIndexValues:N,targetObject:J,targetPropertyChain:K,options:L,listeners:S};
var U=qx.lang.Function.bind(this.__cJ,this,X);
S.push(U);
T[i]=Q.addListener(P[i],U);
}if(Q[m+qx.lang.String.firstUp(R[i])]==null){Q=null;
}else if(N[i]!==l){Q=Q[m+qx.lang.String.firstUp(R[i])](N[i]);
}else{Q=Q[m+qx.lang.String.firstUp(R[i])]();
}
if(!Q){break;
}}}catch(bc){for(var i=0;i<V.length;i++){if(V[i]&&T[i]){V[i].removeListenerById(T[i]);
}}var ba=W.targets;
var O=W.listenerIds[i];
for(var i=0;i<ba.length;i++){if(ba[i]&&O[i]){ba[i].removeListenerById(O[i]);
}}throw bc;
}var Y={type:F,listenerIds:T,sources:V,targetListenerIds:W.listenerIds,targets:W.targets};
this.__cS(Y,H,I,J,K);
return Y;
},__cJ:function(bd){if(bd.options&&bd.options.onUpdate){bd.options.onUpdate(bd.sources[bd.index],bd.targetObject);
}for(var j=bd.index+1;j<bd.propertyNames.length;j++){var bh=bd.sources[j];
bd.sources[j]=null;

if(!bh){continue;
}bh.removeListenerById(bd.listenerIds[j]);
}var bh=bd.sources[bd.index];
for(var j=bd.index+1;j<bd.propertyNames.length;j++){if(bd.arrayIndexValues[j-1]!==l){bh=bh[m+qx.lang.String.firstUp(bd.propertyNames[j-1])](bd.arrayIndexValues[j-1]);
}else{bh=bh[m+qx.lang.String.firstUp(bd.propertyNames[j-1])]();
}bd.sources[j]=bh;
if(!bh){this.__cM(bd.targetObject,bd.targetPropertyChain);
break;
}if(j==bd.propertyNames.length-1){if(qx.Class.implementsInterface(bh,qx.data.IListData)){var bi=bd.arrayIndexValues[j]===h?bh.length-1:bd.arrayIndexValues[j];
var bf=bh.getItem(bi);
this.__cP(bf,bd.targetObject,bd.targetPropertyChain,bd.options,bd.sources[bd.index]);
bd.listenerIds[j]=this.__cR(bh,g,bd.targetObject,bd.targetPropertyChain,bd.options,bd.arrayIndexValues[j]);
}else{if(bd.propertyNames[j]!=null&&bh[m+qx.lang.String.firstUp(bd.propertyNames[j])]!=null){var bf=bh[m+qx.lang.String.firstUp(bd.propertyNames[j])]();
this.__cP(bf,bd.targetObject,bd.targetPropertyChain,bd.options,bd.sources[bd.index]);
}var bg=this.__cL(bh,bd.propertyNames[j]);
bd.listenerIds[j]=this.__cR(bh,bg,bd.targetObject,bd.targetPropertyChain,bd.options);
}}else{if(bd.listeners[j]==null){var be=qx.lang.Function.bind(this.__cJ,this,bd);
bd.listeners.push(be);
}if(qx.Class.implementsInterface(bh,qx.data.IListData)){var bg=g;
}else{var bg=this.__cL(bh,bd.propertyNames[j]);
}bd.listenerIds[j]=bh.addListener(bg,bd.listeners[j]);
}}},__cK:function(bj,bk,bl,bm,bn){var br=bm.split(d);
var bp=this.__cQ(br);
var bw=[];
var bv=[];
var bt=[];
var bs=[];
var bq=bl;
for(var i=0;i<br.length-1;i++){if(bp[i]!==l){bs.push(g);
}else{try{bs.push(this.__cL(bq,br[i]));
}catch(e){break;
}}bw[i]=bq;
var bu=function(){for(var j=i+1;j<br.length-1;j++){var bz=bw[j];
bw[j]=null;

if(!bz){continue;
}bz.removeListenerById(bt[j]);
}var bz=bw[i];
for(var j=i+1;j<br.length-1;j++){var bx=qx.lang.String.firstUp(br[j-1]);
if(bp[j-1]!==l){var bA=bp[j-1]===h?bz.getLength()-1:bp[j-1];
bz=bz[m+bx](bA);
}else{bz=bz[m+bx]();
}bw[j]=bz;
if(bv[j]==null){bv.push(bu);
}if(qx.Class.implementsInterface(bz,qx.data.IListData)){var by=g;
}else{try{var by=qx.data.SingleValueBinding.__cL(bz,br[j]);
}catch(e){break;
}}bt[j]=bz.addListener(by,bv[j]);
}qx.data.SingleValueBinding.updateTarget(bj,bk,bl,bm,bn);
};
bv.push(bu);
bt[i]=bq.addListener(bs[i],bu);
var bo=qx.lang.String.firstUp(br[i]);
if(bq[m+bo]==null){bq=null;
}else if(bp[i]!==l){bq=bq[m+bo](bp[i]);
}else{bq=bq[m+bo]();
}
if(!bq){break;
}}return {listenerIds:bt,targets:bw};
},updateTarget:function(bB,bC,bD,bE,bF){var bG=this.getValueFromObject(bB,bC);
bG=qx.data.SingleValueBinding.__cT(bG,bD,bE,bF,bB);
this.__cN(bD,bE,bG);
},getValueFromObject:function(o,bH){var bL=this.__cO(o,bH);
var bJ;

if(bL!=null){var bN=bH.substring(bH.lastIndexOf(d)+1,bH.length);
if(bN.charAt(bN.length-1)==f){var bI=bN.substring(bN.lastIndexOf(k)+1,bN.length-1);
var bK=bN.substring(0,bN.lastIndexOf(k));
var bM=bL[m+qx.lang.String.firstUp(bK)]();

if(bI==h){bI=bM.length-1;
}
if(bM!=null){bJ=bM.getItem(bI);
}}else{bJ=bL[m+qx.lang.String.firstUp(bN)]();
}}return bJ;
},__cL:function(bO,bP){var bQ=this.__cU(bO,bP);
if(bQ==null){if(qx.Class.supportsEvent(bO.constructor,bP)){bQ=bP;
}else if(qx.Class.supportsEvent(bO.constructor,g+qx.lang.String.firstUp(bP))){bQ=g+qx.lang.String.firstUp(bP);
}else{throw new qx.core.AssertionError(u+bP+x+bO+w);
}}return bQ;
},__cM:function(bR,bS){var bT=this.__cO(bR,bS);

if(bT!=null){var bU=bS.substring(bS.lastIndexOf(d)+1,bS.length);
if(bU.charAt(bU.length-1)==f){this.__cN(bR,bS,null);
return;
}if(bT[D+qx.lang.String.firstUp(bU)]!=undefined){bT[D+qx.lang.String.firstUp(bU)]();
}else{bT[G+qx.lang.String.firstUp(bU)](null);
}}},__cN:function(bV,bW,bX){var cc=this.__cO(bV,bW);

if(cc!=null){var cd=bW.substring(bW.lastIndexOf(d)+1,bW.length);
if(cd.charAt(cd.length-1)==f){var bY=cd.substring(cd.lastIndexOf(k)+1,cd.length-1);
var cb=cd.substring(0,cd.lastIndexOf(k));
var ca=bV;

if(!qx.Class.implementsInterface(ca,qx.data.IListData)){ca=cc[m+qx.lang.String.firstUp(cb)]();
}
if(bY==h){bY=ca.length-1;
}
if(ca!=null){ca.setItem(bY,bX);
}}else{cc[G+qx.lang.String.firstUp(cd)](bX);
}}},__cO:function(ce,cf){var ci=cf.split(d);
var cj=ce;
for(var i=0;i<ci.length-1;i++){try{var ch=ci[i];
if(ch.indexOf(f)==ch.length-1){var cg=ch.substring(ch.indexOf(k)+1,ch.length-1);
ch=ch.substring(0,ch.indexOf(k));
}if(ch!=l){cj=cj[m+qx.lang.String.firstUp(ch)]();
}if(cg!=null){if(cg==h){cg=cj.length-1;
}cj=cj.getItem(cg);
cg=null;
}}catch(ck){return null;
}}return cj;
},__cP:function(cl,cm,cn,co,cp){cl=this.__cT(cl,cm,cn,co,cp);
if(cl===undefined){this.__cM(cm,cn);
}if(cl!==undefined){try{this.__cN(cm,cn,cl);
if(co&&co.onUpdate){co.onUpdate(cp,cm,cl);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(co&&co.onSetFail){co.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cl+" on "+cm+". Error message: "+e);
}}}},__cQ:function(cq){var cr=[];
for(var i=0;i<cq.length;i++){var name=cq[i];
if(qx.lang.String.endsWith(name,f)){var cs=name.substring(name.indexOf(k)+1,name.indexOf(f));
if(name.indexOf(f)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(cs!==h){if(cs==l||isNaN(parseInt(cs,10))){throw new Error("No number or 'last' value hast been given"+" in an array binding: "+name+" does not work.");
}}if(name.indexOf(k)!=0){cq[i]=name.substring(0,name.indexOf(k));
cr[i]=l;
cr[i+1]=cs;
cq.splice(i+1,0,E);
i++;
}else{cr[i]=cs;
cq.splice(i,1,E);
}}else{cr[i]=l;
}}return cr;
},__cR:function(ct,cu,cv,cw,cx,cy){var cz;
var cB=function(cC,e){if(cC!==l){if(cC===h){cC=ct.length-1;
}var cF=ct.getItem(cC);
if(cF===undefined){qx.data.SingleValueBinding.__cM(cv,cw);
}var cD=e.getData().start;
var cE=e.getData().end;

if(cC<cD||cC>cE){return;
}}else{var cF=e.getData();
}if(qx.core.Environment.get(a)){qx.log.Logger.debug("Binding executed from "+ct+" by "+cu+" to "+cv+" ("+cw+")");
qx.log.Logger.debug("Data before conversion: "+cF);
}cF=qx.data.SingleValueBinding.__cT(cF,cv,cw,cx,ct);
if(qx.core.Environment.get(a)){qx.log.Logger.debug("Data after conversion: "+cF);
}try{if(cF!==undefined){qx.data.SingleValueBinding.__cN(cv,cw,cF);
}else{qx.data.SingleValueBinding.__cM(cv,cw);
}if(cx&&cx.onUpdate){cx.onUpdate(ct,cv,cF);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cx&&cx.onSetFail){cx.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cF+" on "+cv+". Error message: "+e);
}}};
if(!cy){cy=l;
}cB=qx.lang.Function.bind(cB,ct,cy);
var cA=ct.addListener(cu,cB);
return cA;
},__cS:function(cG,cH,cI,cJ,cK){if(this.__cI[cH.toHashCode()]===undefined){this.__cI[cH.toHashCode()]=[];
}this.__cI[cH.toHashCode()].push([cG,cH,cI,cJ,cK]);
},__cT:function(cL,cM,cN,cO,cP){if(cO&&cO.converter){var cR;

if(cM.getModel){cR=cM.getModel();
}return cO.converter(cL,cR,cP,cM);
}else{var cT=this.__cO(cM,cN);
var cU=cN.substring(cN.lastIndexOf(d)+1,cN.length);
if(cT==null){return cL;
}var cS=qx.Class.getPropertyDefinition(cT.constructor,cU);
var cQ=cS==null?l:cS.check;
return this.__cV(cL,cQ);
}},__cU:function(cV,cW){var cX=qx.Class.getPropertyDefinition(cV.constructor,cW);

if(cX==null){return null;
}return cX.event;
},__cV:function(cY,da){var db=qx.lang.Type.getClass(cY);
if((db==c||db==b)&&(da==y||da==q)){cY=parseInt(cY,10);
}if((db==A||db==c||db==p)&&da==b){cY=cY+l;
}if((db==c||db==b)&&(da==c||da==t)){cY=parseFloat(cY);
}return cY;
},removeBindingFromObject:function(dc,dd){if(dd.type==F){for(var i=0;i<dd.sources.length;i++){if(dd.sources[i]){dd.sources[i].removeListenerById(dd.listenerIds[i]);
}}for(var i=0;i<dd.targets.length;i++){if(dd.targets[i]){dd.targets[i].removeListenerById(dd.targetListenerIds[i]);
}}}else{dc.removeListenerById(dd);
}var de=this.__cI[dc.toHashCode()];
if(de!=undefined){for(var i=0;i<de.length;i++){if(de[i][0]==dd){qx.lang.Array.remove(de,de[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(df){var dg=this.__cI[df.toHashCode()];

if(dg!=undefined){for(var i=dg.length-1;i>=0;i--){this.removeBindingFromObject(df,dg[i][0]);
}}},getAllBindingsForObject:function(dh){if(this.__cI[dh.toHashCode()]===undefined){this.__cI[dh.toHashCode()]=[];
}return this.__cI[dh.toHashCode()];
},removeAllBindings:function(){for(var dj in this.__cI){var di=qx.core.ObjectRegistry.fromHashCode(dj);
if(di==null){delete this.__cI[dj];
continue;
}this.removeAllBindingsForObject(di);
}this.__cI={};
},getAllBindings:function(){return this.__cI;
},showBindingInLog:function(dk,dl){var dn;
for(var i=0;i<this.__cI[dk.toHashCode()].length;i++){if(this.__cI[dk.toHashCode()][i][0]==dl){dn=this.__cI[dk.toHashCode()][i];
break;
}}
if(dn===undefined){var dm=r;
}else{var dm=s+dn[1]+B+dn[2]+z+dn[3]+B+dn[4]+n;
}qx.log.Logger.debug(dm);
},showAllBindingsInLog:function(){for(var dq in this.__cI){var dp=qx.core.ObjectRegistry.fromHashCode(dq);

for(var i=0;i<this.__cI[dq].length;i++){this.showBindingInLog(dp,this.__cI[dq][i][0]);
}}}}});
qx.log.Logger.deprecatedConstantWarning(C,v);
})();
(function(){var b="",a="qx.core.WindowError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__cW=c;
this.__cX=d||b;
this.__cY=e===undefined?-1:e;
},members:{__cW:null,__cX:null,__cY:null,toString:function(){return this.__cW;
},getUri:function(){return this.__cX;
},getLineNumber:function(){return this.__cY;
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(d){},setItem:function(e,f){},splice:function(g,h,i){},contains:function(j){},getLength:function(){},toArray:function(){}}});
})();
(function(){var c="",b=": ",a="qx.type.BaseError";
qx.Class.define(a,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__da=d||c;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__da:null,message:null,getComment:function(){return this.__da;
},toString:function(){return this.__da+(this.message?b+this.message:c);
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__db=qx.dev.StackTrace.getStackTrace();
},members:{__db:null,getStackTrace:function(){return this.__db;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Class.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(g){return this.getClass(g)==d;
},isNumber:function(h){return (h!==null&&(this.getClass(h)==b||h instanceof Number));
},isBoolean:function(i){return (i!==null&&(this.getClass(i)==a||i instanceof Boolean));
},isDate:function(j){return (j!==null&&(this.getClass(j)==c||j instanceof Date));
},isError:function(k){return (k!==null&&(this.getClass(k)==e||k instanceof Error));
}}});
})();
(function(){var a="qx.util.DisposeUtil";
qx.Class.define(a,{statics:{disposeObjects:function(b,c,d){var name;

for(var i=0,l=c.length;i<l;i++){name=c[i];

if(b[name]==null||!b.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(b[name].dispose){if(!d&&b[name].constructor.$$instance){throw new Error("The object stored in key "+name+" is a singleton! Please use disposeSingleton instead.");
}else{b[name].dispose();
}}else{throw new Error("Has no disposable object under key: "+name+"!");
}}b[name]=null;
}},disposeArray:function(e,f){var h=e[f];

if(!h){return;
}if(qx.core.ObjectRegistry.inShutDown){e[f]=null;
return;
}try{var g;

for(var i=h.length-1;i>=0;i--){g=h[i];

if(g){g.dispose();
}}}catch(j){throw new Error("The array field: "+f+" of object: "+e+" has non disposable entries: "+j);
}h.length=0;
e[f]=null;
},disposeMap:function(k,m){var o=k[m];

if(!o){return;
}if(qx.core.ObjectRegistry.inShutDown){k[m]=null;
return;
}try{var n;

for(var p in o){n=o[p];

if(o.hasOwnProperty(p)&&n){n.dispose();
}}}catch(q){throw new Error("The map field: "+m+" of object: "+k+" has non disposable entries: "+q);
}k[m]=null;
},disposeTriggeredBy:function(r,s){var t=s.dispose;
s.dispose=function(){t.call(s);
r.dispose();
};
}}});
})();
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(b,c){return qx.Class.supportsEvent(b.constructor,c);
},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__dc:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__dd:function(J,K){return function(s){return J.prototype[K].apply(s,Array.prototype.slice.call(arguments,1));
};
},__de:function(){var L=qx.lang.Generics.__dc;

for(var P in L){var N=window[P];
var M=L[P];

for(var i=0,l=M.length;i<l;i++){var O=M[i];

if(!N[O]){N[O]=qx.lang.Generics.__dd(N,O);
}}}}},defer:function(Q){Q.__de();
}});
})();
(function(){var f="_applyTheme",e="qx.theme",d="qx.theme.manager.Meta",c="qx.theme.Modern",b="Theme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:b,nullable:true,apply:f}},members:{_applyTheme:function(g,h){var k=null;
var n=null;
var q=null;
var r=null;
var m=null;

if(g){k=g.meta.color||null;
n=g.meta.decoration||null;
q=g.meta.font||null;
r=g.meta.icon||null;
m=g.meta.appearance||null;
}var o=qx.theme.manager.Color.getInstance();
var p=qx.theme.manager.Decoration.getInstance();
var i=qx.theme.manager.Font.getInstance();
var l=qx.theme.manager.Icon.getInstance();
var j=qx.theme.manager.Appearance.getInstance();
o.setTheme(k);
p.setTheme(n);
i.setTheme(q);
l.setTheme(r);
j.setTheme(m);
},initialize:function(){var u=qx.core.Environment;
var s,t;
s=u.get(e);

if(s){t=qx.Theme.getByName(s);

if(!t){throw new Error("The theme to use is not available: "+s);
}this.setTheme(t);
}}},environment:{"qx.theme":c}});
})();
(function(){var b="qx.util.ValueManager",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(c){return this._dynamic[c];
},isDynamic:function(d){return !!this._dynamic[d];
},resolve:function(e){if(e&&this._dynamic[e]){return this._dynamic[e];
}return e;
},_setDynamic:function(f){this._dynamic=f;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var f="_applyTheme",e="qx.theme.manager.Color",d="Theme",c="changeTheme",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:f,event:c}},members:{_applyTheme:function(g){var h={};

if(g){var i=g.colors;
var j=qx.util.ColorUtil;
var k;

for(var l in i){k=i[l];

if(typeof k===b){if(!j.isCssString(k)){throw new Error("Could not parse color: "+k);
}}else if(k instanceof Array){k=j.rgbToRgbString(k);
}else{throw new Error("Could not parse color: "+k);
}h[l]=k;
}}this._setDynamic(h);
},resolve:function(m){var p=this._dynamic;
var n=p[m];

if(n){return n;
}var o=this.getTheme();

if(o!==null&&o.colors[m]){return p[m]=o.colors[m];
}return m;
},isDynamic:function(q){var s=this._dynamic;

if(q&&(s[q]!==undefined)){return true;
}var r=this.getTheme();

if(r!==null&&q&&(r.colors[q]!==undefined)){s[q]=r.colors[q];
return true;
}return false;
}}});
})();
(function(){var h=",",e="rgb(",d=")",c="qx.theme.manager.Color",a="qx.util.ColorUtil";
qx.Class.define(a,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(j){return this.NAMED[j]!==undefined;
},isSystemColor:function(k){return this.SYSTEM[k]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(c);
},isThemedColor:function(l){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(l);
},stringToRgb:function(m){if(this.supportsThemes()&&this.isThemedColor(m)){var m=qx.theme.manager.Color.getInstance().resolveDynamic(m);
}
if(this.isNamedColor(m)){return this.NAMED[m];
}else if(this.isSystemColor(m)){throw new Error("Could not convert system colors to RGB: "+m);
}else if(this.isRgbString(m)){return this.__df();
}else if(this.isHex3String(m)){return this.__dh();
}else if(this.isHex6String(m)){return this.__di();
}throw new Error("Could not parse color: "+m);
},cssStringToRgb:function(n){if(this.isNamedColor(n)){return this.NAMED[n];
}else if(this.isSystemColor(n)){throw new Error("Could not convert system colors to RGB: "+n);
}else if(this.isRgbString(n)){return this.__df();
}else if(this.isRgbaString(n)){return this.__dg();
}else if(this.isHex3String(n)){return this.__dh();
}else if(this.isHex6String(n)){return this.__di();
}throw new Error("Could not parse color: "+n);
},stringToRgbString:function(o){return this.rgbToRgbString(this.stringToRgb(o));
},rgbToRgbString:function(s){return e+s[0]+h+s[1]+h+s[2]+d;
},rgbToHexString:function(u){return (qx.lang.String.pad(u[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(u[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(u[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(v){return this.isThemedColor(v)||this.isNamedColor(v)||this.isHex3String(v)||this.isHex6String(v)||this.isRgbString(v);
},isCssString:function(w){return this.isSystemColor(w)||this.isNamedColor(w)||this.isHex3String(w)||this.isHex6String(w)||this.isRgbString(w);
},isHex3String:function(x){return this.REGEXP.hex3.test(x);
},isHex6String:function(y){return this.REGEXP.hex6.test(y);
},isRgbString:function(z){return this.REGEXP.rgb.test(z);
},isRgbaString:function(A){return this.REGEXP.rgba.test(A);
},__df:function(){var D=parseInt(RegExp.$1,10);
var C=parseInt(RegExp.$2,10);
var B=parseInt(RegExp.$3,10);
return [D,C,B];
},__dg:function(){var G=parseInt(RegExp.$1,10);
var F=parseInt(RegExp.$2,10);
var E=parseInt(RegExp.$3,10);
return [G,F,E];
},__dh:function(){var J=parseInt(RegExp.$1,16)*17;
var I=parseInt(RegExp.$2,16)*17;
var H=parseInt(RegExp.$3,16)*17;
return [J,I,H];
},__di:function(){var M=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var L=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var K=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [M,L,K];
},hex3StringToRgb:function(N){if(this.isHex3String(N)){return this.__dh(N);
}throw new Error("Invalid hex3 value: "+N);
},hex6StringToRgb:function(O){if(this.isHex6String(O)){return this.__di(O);
}throw new Error("Invalid hex6 value: "+O);
},hexStringToRgb:function(P){if(this.isHex3String(P)){return this.__dh(P);
}
if(this.isHex6String(P)){return this.__di(P);
}throw new Error("Invalid hex value: "+P);
},rgbToHsb:function(Q){var S,T,V;
var bc=Q[0];
var Y=Q[1];
var R=Q[2];
var bb=(bc>Y)?bc:Y;

if(R>bb){bb=R;
}var U=(bc<Y)?bc:Y;

if(R<U){U=R;
}V=bb/255.0;

if(bb!=0){T=(bb-U)/bb;
}else{T=0;
}
if(T==0){S=0;
}else{var X=(bb-bc)/(bb-U);
var ba=(bb-Y)/(bb-U);
var W=(bb-R)/(bb-U);

if(bc==bb){S=W-ba;
}else if(Y==bb){S=2.0+X-W;
}else{S=4.0+ba-X;
}S=S/6.0;

if(S<0){S=S+1.0;
}}return [Math.round(S*360),Math.round(T*100),Math.round(V*100)];
},hsbToRgb:function(bd){var i,f,p,q,t;
var be=bd[0]/360;
var bf=bd[1]/100;
var bg=bd[2]/100;

if(be>=1.0){be%=1.0;
}
if(bf>1.0){bf=1.0;
}
if(bg>1.0){bg=1.0;
}var bh=Math.floor(255*bg);
var bi={};

if(bf==0.0){bi.red=bi.green=bi.blue=bh;
}else{be*=6.0;
i=Math.floor(be);
f=be-i;
p=Math.floor(bh*(1.0-bf));
q=Math.floor(bh*(1.0-(bf*f)));
t=Math.floor(bh*(1.0-(bf*(1.0-f))));

switch(i){case 0:bi.red=bh;
bi.green=t;
bi.blue=p;
break;
case 1:bi.red=q;
bi.green=bh;
bi.blue=p;
break;
case 2:bi.red=p;
bi.green=bh;
bi.blue=t;
break;
case 3:bi.red=p;
bi.green=q;
bi.blue=bh;
break;
case 4:bi.red=t;
bi.green=p;
bi.blue=bh;
break;
case 5:bi.red=bh;
bi.green=p;
bi.blue=q;
break;
}}return [bi.red,bi.green,bi.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var m="object",l="__dj",k="_applyTheme",j="",h="_",g="qx.ui.decoration.",f="qx.theme.manager.Decoration",e=".",d="Theme",c="changeTheme",a="string",b="singleton";
qx.Class.define(f,{type:b,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:k,event:c}},members:{__dj:null,resolve:function(n){if(!n){return null;
}
if(typeof n===m){return n;
}var s=this.getTheme();

if(!s){return null;
}var p=this.__dj;

if(!p){p=this.__dj={};
}var o=p[n];

if(o){return o;
}var v=s.decorations[n];

if(!v){return null;
}if(!v.style){v.style={};
}var q=v;

while(q.include){q=s.decorations[q.include];
if(!v.decorator&&q.decorator){v.decorator=q.decorator;
}if(q.style){for(var u in q.style){if(v.style[u]==undefined){v.style[u]=q.style[u];
}}}}var r=v.decorator;

if(r==null){throw new Error("Missing definition of which decorator to use in entry: "+n+"!");
}if(r instanceof Array){var t=r.concat([]);

for(var i=0;i<t.length;i++){t[i]=t[i].basename.replace(e,j);
}var name=g+t.join(h);

if(!qx.Class.getByName(name)){qx.Class.define(name,{extend:qx.ui.decoration.DynamicDecorator,include:r});
}r=qx.Class.getByName(name);
}return p[n]=(new r).set(v.style);
},isValidPropertyValue:function(w){if(typeof w===a){return this.isDynamic(w);
}else if(typeof w===m){var x=w.constructor;
return qx.Class.hasInterface(x,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(y){if(!y){return false;
}var z=this.getTheme();

if(!z){return false;
}return !!z.decorations[y];
},_applyTheme:function(A,B){var D=qx.util.AliasManager.getInstance();

if(B){for(var C in B.aliases){D.remove(C);
}}
if(A){for(var C in A.aliases){D.add(C,A.aliases[C]);
}}
if(!A){this.__dj={};
}}},destruct:function(){this._disposeMap(l);
}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var i="Number",h="_applyInsets",g="abstract",f="insetRight",e="insetTop",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__dk:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__dk=null;
},getInsets:function(){if(this.__dk){return this.__dk;
}var j=this._getDefaultInsets();
return this.__dk={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){this.__dk=null;
}},destruct:function(){this.__dk=null;
}});
})();
(function(){var o="px",n="top",m="_tint",l="abstract",k='<div style="',j="",h="_getDefaultInsetsFor",g="bottom",f="qx.ui.decoration.DynamicDecorator",e="left",b="right",d="_resize",c="_style",a='"></div>';
qx.Class.define(f,{extend:qx.ui.decoration.Abstract,type:l,members:{getMarkup:function(){if(this._markup){return this._markup;
}var p={};

for(var name in this){if(name.indexOf(c)==0&&this[name] instanceof Function){this[name](p);
}}if(!this._generateMarkup){var q=[k];
q.push(qx.bom.element.Style.compile(p));
q.push(a);
q=q.join(j);
}else{var q=this._generateMarkup(p);
}return this._markup=q;
},resize:function(r,s,t){var v={};

for(var name in this){if(name.indexOf(d)==0&&this[name] instanceof Function){var u=this[name](r,s,t);

if(v.left==undefined){v.left=u.left;
v.top=u.top;
}
if(v.width==undefined){v.width=u.width;
v.height=u.height;
}
if(u.elementToApplyDimensions){v.elementToApplyDimensions=u.elementToApplyDimensions;
}v.left=u.left<v.left?u.left:v.left;
v.top=u.top<v.top?u.top:v.top;
v.width=u.width>v.width?u.width:v.width;
v.height=u.height>v.height?u.height:v.height;
}}if(v.left!=undefined){r.style.left=v.left+o;
r.style.top=v.top+o;
}if(v.width!=undefined){if(v.width<0){v.width=0;
}
if(v.height<0){v.height=0;
}
if(v.elementToApplyDimensions){r=v.elementToApplyDimensions;
}r.style.width=v.width+o;
r.style.height=v.height+o;
}},tint:function(w,x){for(var name in this){if(name.indexOf(m)==0&&this[name] instanceof Function){this[name](w,x,w.style);
}}},_isInitialized:function(){return !!this._markup;
},_getDefaultInsets:function(){var B=[n,b,g,e];
var z={};

for(var name in this){if(name.indexOf(h)==0&&this[name] instanceof Function){var A=this[name]();

for(var i=0;i<B.length;i++){var y=B[i];
if(z[y]==undefined){z[y]=A[y];
}if(A[y]<z[y]){z[y]=A[y];
}}}}if(z[n]!=undefined){return z;
}return {top:0,right:0,bottom:0,left:0};
}}});
})();
(function(){var k="engine.version",j="",i="engine.name",h="hidden",g="-moz-scrollbars-none",f="overflow",e=";",d="overflowY",b=":",a="overflowX",z="overflow:",y="none",x="scroll",w="borderLeftStyle",v="borderRightStyle",u="div",r="borderRightWidth",q="overflow-y",p="borderLeftWidth",o="-moz-scrollbars-vertical",m="100px",n="qx.bom.element.Overflow",l="overflow-x";
qx.Class.define(n,{statics:{__dl:null,getScrollbarWidth:function(){if(this.__dl!==null){return this.__dl;
}var A=qx.bom.element.Style;
var C=function(G,H){return parseInt(A.get(G,H),10)||0;
};
var D=function(I){return (A.get(I,v)==y?0:C(I,r));
};
var B=function(J){return (A.get(J,w)==y?0:C(J,p));
};
var F=qx.core.Environment.select(i,{"mshtml":function(K){if(A.get(K,d)==h||K.clientWidth==0){return D(K);
}return Math.max(0,K.offsetWidth-K.clientLeft-K.clientWidth);
},"default":function(L){if(L.clientWidth==0){var M=A.get(L,f);
var N=(M==x||M==o?16:0);
return Math.max(0,D(L)+N);
}return Math.max(0,(L.offsetWidth-L.clientWidth-B(L)));
}});
var E=function(O){return F(O)-D(O);
};
var t=document.createElement(u);
var s=t.style;
s.height=s.width=m;
s.overflow=x;
document.body.appendChild(t);
var c=E(t);
this.__dl=c?c:16;
document.body.removeChild(t);
return this.__dl;
},_compile:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(P,Q){if(Q==h){Q=g;
}return z+Q+e;
}:
function(R,S){return R+b+S+e;
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(T,U){return z+U+e;
}:
function(V,W){return V+b+W+e;
},"default":function(X,Y){return X+b+Y+e;
}}),compileX:function(ba){return this._compile(l,ba);
},compileY:function(bb){return this._compile(q,bb);
},getX:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(bc,bd){var be=qx.bom.element.Style.get(bc,f,bd,false);

if(be===g){be=h;
}return be;
}:
function(bf,bg){return qx.bom.element.Style.get(bf,a,bg,false);
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(bh,bi){return qx.bom.element.Style.get(bh,f,bi,false);
}:
function(bj,bk){return qx.bom.element.Style.get(bj,a,bk,false);
},"default":function(bl,bm){return qx.bom.element.Style.get(bl,a,bm,false);
}}),setX:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(bn,bo){if(bo==h){bo=g;
}bn.style.overflow=bo;
}:
function(bp,bq){bp.style.overflowX=bq;
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(br,bs){br.style.overflow=bs;
}:
function(bt,bu){bt.style.overflowX=bu;
},"default":function(bv,bw){bv.style.overflowX=bw;
}}),resetX:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(bx){bx.style.overflow=j;
}:
function(by){by.style.overflowX=j;
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(bz,bA){bz.style.overflow=j;
}:
function(bB,bC){bB.style.overflowX=j;
},"default":function(bD){bD.style.overflowX=j;
}}),getY:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(bE,bF){var bG=qx.bom.element.Style.get(bE,f,bF,false);

if(bG===g){bG=h;
}return bG;
}:
function(bH,bI){return qx.bom.element.Style.get(bH,d,bI,false);
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(bJ,bK){return qx.bom.element.Style.get(bJ,f,bK,false);
}:
function(bL,bM){return qx.bom.element.Style.get(bL,d,bM,false);
},"default":function(bN,bO){return qx.bom.element.Style.get(bN,d,bO,false);
}}),setY:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(bP,bQ){if(bQ===h){bQ=g;
}bP.style.overflow=bQ;
}:
function(bR,bS){bR.style.overflowY=bS;
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(bT,bU){bT.style.overflow=bU;
}:
function(bV,bW){bV.style.overflowY=bW;
},"default":function(bX,bY){bX.style.overflowY=bY;
}}),resetY:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(ca){ca.style.overflow=j;
}:
function(cb){cb.style.overflowY=j;
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(cc,cd){cc.style.overflow=j;
}:
function(ce,cf){ce.style.overflowY=j;
},"default":function(cg){cg.style.overflowY=j;
}})}});
})();
(function(){var o="auto",n="px",m=",",l="clip:auto;",k="rect(",j=");",i="",h=")",g="qx.bom.element.Clip",f="string",c="clip:rect(",e=" ",d="clip",b="rect(auto,auto,auto,auto)",a="rect(auto, auto, auto, auto)";
qx.Class.define(g,{statics:{compile:function(p){if(!p){return l;
}var u=p.left;
var top=p.top;
var t=p.width;
var s=p.height;
var q,r;

if(u==null){q=(t==null?o:t+n);
u=o;
}else{q=(t==null?o:u+t+n);
u=u+n;
}
if(top==null){r=(s==null?o:s+n);
top=o;
}else{r=(s==null?o:top+s+n);
top=top+n;
}return c+top+m+q+m+r+m+u+j;
},get:function(v,w){var y=qx.bom.element.Style.get(v,d,w,false);
var E,top,C,B;
var x,z;

if(typeof y===f&&y!==o&&y!==i){y=qx.lang.String.trim(y);
if(/\((.*)\)/.test(y)){var D=RegExp.$1;
if(/,/.test(D)){var A=D.split(m);
}else{var A=D.split(e);
}top=qx.lang.String.trim(A[0]);
x=qx.lang.String.trim(A[1]);
z=qx.lang.String.trim(A[2]);
E=qx.lang.String.trim(A[3]);
if(E===o){E=null;
}
if(top===o){top=null;
}
if(x===o){x=null;
}
if(z===o){z=null;
}if(top!=null){top=parseInt(top,10);
}
if(x!=null){x=parseInt(x,10);
}
if(z!=null){z=parseInt(z,10);
}
if(E!=null){E=parseInt(E,10);
}if(x!=null&&E!=null){C=x-E;
}else if(x!=null){C=x;
}
if(z!=null&&top!=null){B=z-top;
}else if(z!=null){B=z;
}}else{throw new Error("Could not parse clip string: "+y);
}}return {left:E||null,top:top||null,width:C||null,height:B||null};
},set:function(F,G){if(!G){F.style.clip=b;
return;
}var L=G.left;
var top=G.top;
var K=G.width;
var J=G.height;
var H,I;

if(L==null){H=(K==null?o:K+n);
L=o;
}else{H=(K==null?o:L+K+n);
L=L+n;
}
if(top==null){I=(J==null?o:J+n);
top=o;
}else{I=(J==null?o:top+J+n);
top=top+n;
}F.style.clip=k+top+m+H+m+I+m+L+h;
},reset:function(M){M.style.clip=a;
}}});
})();
(function(){var m="",l="engine.name",k=";",j="opacity:",i="opacity",h="filter",g="MozOpacity",f=");",e=")",d="zoom:1;filter:alpha(opacity=",a="qx.bom.element.Opacity",c="alpha(opacity=",b="-moz-opacity:";
qx.Class.define(a,{statics:{SUPPORT_CSS3_OPACITY:false,compile:qx.core.Environment.select(l,{"mshtml":function(n){if(n>=1){n=1;
}
if(n<0.00001){n=0;
}
if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){return j+n+k;
}else{return d+(n*100)+f;
}},"gecko":function(o){if(o>=1){o=0.999999;
}
if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){return b+o+k;
}else{return j+o+k;
}},"default":function(p){if(p>=1){return m;
}return j+p+k;
}}),set:qx.core.Environment.select(l,{"mshtml":function(q,r){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){if(r>=1){r=m;
}q.style.opacity=r;
}else{var s=qx.bom.element.Style.get(q,h,qx.bom.element.Style.COMPUTED_MODE,false);

if(r>=1){r=1;
}
if(r<0.00001){r=0;
}if(!q.currentStyle||!q.currentStyle.hasLayout){q.style.zoom=1;
}q.style.filter=s.replace(/alpha\([^\)]*\)/gi,m)+c+r*100+e;
}},"gecko":function(t,u){if(u>=1){u=0.999999;
}
if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){t.style.MozOpacity=u;
}else{t.style.opacity=u;
}},"default":function(v,w){if(w>=1){w=m;
}v.style.opacity=w;
}}),reset:qx.core.Environment.select(l,{"mshtml":function(x){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){x.style.opacity=m;
}else{var y=qx.bom.element.Style.get(x,h,qx.bom.element.Style.COMPUTED_MODE,false);
x.style.filter=y.replace(/alpha\([^\)]*\)/gi,m);
}},"gecko":function(z){if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){z.style.MozOpacity=m;
}else{z.style.opacity=m;
}},"default":function(A){A.style.opacity=m;
}}),get:qx.core.Environment.select(l,{"mshtml":function(B,C){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){var D=qx.bom.element.Style.get(B,i,C,false);

if(D!=null){return parseFloat(D);
}return 1.0;
}else{var E=qx.bom.element.Style.get(B,h,C,false);

if(E){var D=E.match(/alpha\(opacity=(.*)\)/);

if(D&&D[1]){return parseFloat(D[1])/100;
}}return 1.0;
}},"gecko":function(F,G){var H=qx.bom.element.Style.get(F,!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY?g:i,G,false);

if(H==0.999999){H=1.0;
}
if(H!=null){return parseFloat(H);
}return 1.0;
},"default":function(I,J){var K=qx.bom.element.Style.get(I,i,J,false);

if(K!=null){return parseFloat(K);
}return 1.0;
}})},defer:function(L){L.SUPPORT_CSS3_OPACITY=(typeof document.documentElement.style.opacity=="string");
}});
})();
(function(){var k="n-resize",j="e-resize",i="nw-resize",h="ne-resize",g="engine.name",f="",e="cursor:",d=";",c="qx.bom.element.Cursor",b="cursor",a="hand";
qx.Class.define(c,{statics:{__dm:qx.core.Environment.select(g,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(l){return e+(this.__dm[l]||l)+d;
},get:function(m,n){return qx.bom.element.Style.get(m,b,n,false);
},set:function(o,p){o.style.cursor=this.__dm[p]||p;
},reset:function(q){q.style.cursor=f;
}}});
})();
(function(){var q="engine.name",p="",o="boxSizing",n="box-sizing",m="qx.bom.element.BoxSizing",k="KhtmlBoxSizing",j="border-box",h="-moz-box-sizing",g="WebkitBoxSizing",f=":",c=";",e="-khtml-box-sizing",d="content-box",b="-webkit-box-sizing",a="MozBoxSizing";
qx.Class.define(m,{statics:{__dn:qx.core.Environment.select(q,{"mshtml":null,"webkit":[o,k,g],"gecko":[a],"opera":[o]}),__do:qx.core.Environment.select(q,{"mshtml":null,"webkit":[n,e,b],"gecko":[h],"opera":[n]}),__dp:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__dq:function(r){var s=this.__dp;
return s.tags[r.tagName.toLowerCase()]||s.types[r.type];
},compile:qx.core.Environment.select(q,{"mshtml":function(t){},"default":function(u){var w=this.__do;
var v=p;

if(w){for(var i=0,l=w.length;i<l;i++){v+=w[i]+f+u+c;
}}return v;
}}),get:qx.core.Environment.select(q,{"mshtml":function(x){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(x))){if(!this.__dq(x)){return d;
}}return j;
},"default":function(y){var A=this.__dn;
var z;

if(A){for(var i=0,l=A.length;i<l;i++){z=qx.bom.element.Style.get(y,A[i],null,false);

if(z!=null&&z!==p){return z;
}}}return p;
}}),set:qx.core.Environment.select(q,{"mshtml":function(B,C){},"default":function(D,E){var F=this.__dn;

if(F){for(var i=0,l=F.length;i<l;i++){D.style[F[i]]=E;
}}}}),reset:function(G){this.set(G,p);
}}});
})();
(function(){var m="",k="engine.name",h="userSelect",g="style",f="MozUserModify",e="px",d="pixelBottom",c="float",b="borderImage",a="styleFloat",F="appearance",E="pixelHeight",D='Ms',C=":",B="cssFloat",A="pixelTop",z="pixelLeft",y='O',x="qx.bom.element.Style",w='Khtml',t='string',u="pixelRight",r='Moz',s="pixelWidth",p=";",q="textOverflow",n="userModify",o='Webkit',v="WebkitUserModify";
qx.Class.define(x,{statics:{__dr:function(){var G=[F,h,q,b];
var K={};
var H=document.documentElement.style;
var L=[r,o,w,y,D];

for(var i=0,l=G.length;i<l;i++){var M=G[i];
var I=M;

if(H[M]){K[I]=M;
continue;
}M=qx.lang.String.firstUp(M);

for(var j=0,N=L.length;j<N;j++){var J=L[j]+M;

if(typeof H[J]==t){K[I]=J;
break;
}}}this.__ds=K;
this.__ds[n]=qx.core.Environment.select(k,{"gecko":f,"webkit":v,"default":h});
this.__dt={};

for(var I in K){this.__dt[I]=this.__dx(K[I]);
}this.__ds[c]=qx.core.Environment.select(k,{"mshtml":a,"default":B});
},__du:{width:s,height:E,left:z,right:u,top:A,bottom:d},__dv:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(O){var Q=[];
var S=this.__dv;
var R=this.__dt;
var name,P;

for(name in O){P=O[name];

if(P==null){continue;
}name=R[name]||name;
if(S[name]){Q.push(S[name].compile(P));
}else{Q.push(this.__dx(name),C,P,p);
}}return Q.join(m);
},__dw:{},__dx:function(T){var U=this.__dw;
var V=U[T];

if(!V){V=U[T]=qx.lang.String.hyphenate(T);
}return V;
},setCss:qx.core.Environment.select(k,{"mshtml":function(W,X){W.style.cssText=X;
},"default":function(Y,ba){Y.setAttribute(g,ba);
}}),getCss:qx.core.Environment.select(k,{"mshtml":function(bb){return bb.style.cssText.toLowerCase();
},"default":function(bc){return bc.getAttribute(g);
}}),isPropertySupported:function(bd){return (this.__dv[bd]||this.__ds[bd]||bd in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(be,name,bf,bg){name=this.__ds[name]||name;
if(bg!==false&&this.__dv[name]){return this.__dv[name].set(be,bf);
}else{be.style[name]=bf!==null?bf:m;
}},setStyles:function(bh,bi,bj){var bm=this.__ds;
var bo=this.__dv;
var bk=bh.style;

for(var bn in bi){var bl=bi[bn];
var name=bm[bn]||bn;

if(bl===undefined){if(bj!==false&&bo[name]){bo[name].reset(bh);
}else{bk[name]=m;
}}else{if(bj!==false&&bo[name]){bo[name].set(bh,bl);
}else{bk[name]=bl!==null?bl:m;
}}}},reset:function(bp,name,bq){name=this.__ds[name]||name;
if(bq!==false&&this.__dv[name]){return this.__dv[name].reset(bp);
}else{bp.style[name]=m;
}},get:qx.core.Environment.select(k,{"mshtml":function(br,name,bs,bt){name=this.__ds[name]||name;
if(bt!==false&&this.__dv[name]){return this.__dv[name].get(br,bs);
}if(!br.currentStyle){return br.style[name]||m;
}switch(bs){case this.LOCAL_MODE:return br.style[name]||m;
case this.CASCADED_MODE:return br.currentStyle[name]||m;
default:var bx=br.currentStyle[name]||m;
if(/^-?[\.\d]+(px)?$/i.test(bx)){return bx;
}var bw=this.__du[name];

if(bw){var bu=br.style[name];
br.style[name]=bx||0;
var bv=br.style[bw]+e;
br.style[name]=bu;
return bv;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bx)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bx;
}},"default":function(by,name,bz,bA){name=this.__ds[name]||name;
if(bA!==false&&this.__dv[name]){return this.__dv[name].get(by,bz);
}switch(bz){case this.LOCAL_MODE:return by.style[name]||m;
case this.CASCADED_MODE:if(by.currentStyle){return by.currentStyle[name]||m;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bB=qx.dom.Node.getDocument(by);
var bC=bB.defaultView.getComputedStyle(by,null);
return bC?bC[name]:m;
}}})},defer:function(bD){bD.__dr();
}});
})();
(function(){var g="CSS1Compat",f="engine.name",e="position:absolute;width:0;height:0;width:1",d="engine.version",c="qx.bom.Document",b="1px",a="div";
qx.Class.define(c,{statics:{isQuirksMode:qx.core.Environment.select(f,{"mshtml":function(h){if(qx.core.Environment.get(d)>=8){return (h||window).document.documentMode===5;
}else{return (h||window).document.compatMode!==g;
}},"webkit":function(i){if(document.compatMode===undefined){var j=(i||window).document.createElement(a);
j.style.cssText=e;
return j.style.width===b?true:false;
}else{return (i||window).document.compatMode!==g;
}},"default":function(k){return (k||window).document.compatMode!==g;
}}),isStandardMode:function(l){return !this.isQuirksMode(l);
},getWidth:function(m){var n=(m||window).document;
var o=qx.bom.Viewport.getWidth(m);
var scroll=this.isStandardMode(m)?n.documentElement.scrollWidth:n.body.scrollWidth;
return Math.max(scroll,o);
},getHeight:function(p){var q=(p||window).document;
var r=qx.bom.Viewport.getHeight(p);
var scroll=this.isStandardMode(p)?q.documentElement.scrollHeight:q.body.scrollHeight;
return Math.max(scroll,r);
}}});
})();
(function(){var c="engine.version",b="engine.name",a="qx.bom.Viewport";
qx.Class.define(a,{statics:{getWidth:qx.core.Environment.select(b,{"opera":function(d){if(parseFloat(qx.core.Environment.get(c))<9.5){return (d||window).document.body.clientWidth;
}else{var e=(d||window).document;
return qx.bom.Document.isStandardMode(d)?e.documentElement.clientWidth:e.body.clientWidth;
}},"webkit":function(f){if(parseFloat(qx.core.Environment.get(c))<523.15){return (f||window).innerWidth;
}else{var g=(f||window).document;
return qx.bom.Document.isStandardMode(f)?g.documentElement.clientWidth:g.body.clientWidth;
}},"default":function(h){var i=(h||window).document;
return qx.bom.Document.isStandardMode(h)?i.documentElement.clientWidth:i.body.clientWidth;
}}),getHeight:qx.core.Environment.select(b,{"opera":function(j){if(parseFloat(qx.core.Environment.get(c))<9.5){return (j||window).document.body.clientHeight;
}else{var k=(j||window).document;
return qx.bom.Document.isStandardMode(j)?k.documentElement.clientHeight:k.body.clientHeight;
}},"webkit":function(l){if(parseFloat(qx.core.Environment.get(c))<523.15){return (l||window).innerHeight;
}else{var m=(l||window).document;
return qx.bom.Document.isStandardMode(l)?m.documentElement.clientHeight:m.body.clientHeight;
}},"default":function(n){var o=(n||window).document;
return qx.bom.Document.isStandardMode(n)?o.documentElement.clientHeight:o.body.clientHeight;
}}),getScrollLeft:qx.core.Environment.select(b,{"mshtml":function(p){var q=(p||window).document;
return q.documentElement.scrollLeft||q.body.scrollLeft;
},"default":function(r){return (r||window).pageXOffset;
}}),getScrollTop:qx.core.Environment.select(b,{"mshtml":function(s){var t=(s||window).document;
return t.documentElement.scrollTop||t.body.scrollTop;
},"default":function(u){return (u||window).pageYOffset;
}}),getOrientation:function(v){var w=(v||window).orientation;

if(w==null){w=this.getWidth(v)>this.getHeight(v)?90:0;
}return w;
},isLandscape:function(x){return Math.abs(this.getOrientation(x))==90;
},isPortrait:function(y){var z=this.getOrientation(y);
return (z==0||z==180);
}}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__dy={};
this.add(a,h);
},members:{__dy:null,_preprocess:function(k){var n=this._getDynamic();

if(n[k]===false){return k;
}else if(n[k]===undefined){if(k.charAt(0)===j||k.charAt(0)===b||k.indexOf(g)===0||k.indexOf(f)===i||k.indexOf(e)===0){n[k]=false;
return k;
}
if(this.__dy[k]){return this.__dy[k];
}var m=k.substring(0,k.indexOf(j));
var l=this.__dy[m];

if(l!==undefined){n[k]=l+k.substring(m.length);
}}return k;
},add:function(o,p){this.__dy[o]=p;
var r=this._getDynamic();
for(var q in r){if(q.substring(0,q.indexOf(j))===o){r[q]=p+q.substring(o.length);
}}},remove:function(s){delete this.__dy[s];
},resolve:function(t){var u=this._getDynamic();

if(t!=null){t=this._preprocess(t);
}return u[t]||t;
},getAliases:function(){var v={};

for(var w in this.__dy){v[w]=this.__dy[w];
}return v;
}},destruct:function(){this.__dy=null;
}});
})();
(function(){var e="qx.theme.manager.Font",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{resolveDynamic:function(f){var g=this._dynamic;
return f instanceof qx.bom.Font?f:g[f];
},resolve:function(h){var k=this._dynamic;
var i=k[h];

if(i){return i;
}var j=this.getTheme();

if(j!==null&&j.fonts[h]){return k[h]=(new qx.bom.Font).set(j.fonts[h]);
}return h;
},isDynamic:function(l){var n=this._dynamic;

if(l&&(l instanceof qx.bom.Font||n[l]!==undefined)){return true;
}var m=this.getTheme();

if(m!==null&&l&&m.fonts[l]){n[l]=(new qx.bom.Font).set(m.fonts[l]);
return true;
}return false;
},__dz:function(o,p){if(o[p].include){var q=o[o[p].include];
o[p].include=null;
delete o[p].include;
o[p]=qx.lang.Object.mergeWith(o[p],q,false);
this.__dz(o,p);
}},_applyTheme:function(r){var s=this._getDynamic();

for(var v in s){if(s[v].themed){s[v].dispose();
delete s[v];
}}
if(r){var t=r.fonts;
var u=qx.bom.Font;

for(var v in t){if(t[v].include&&t[t[v].include]){this.__dz(t,v);
}s[v]=(new u).set(t[v]);
s[v].themed=true;
}}this._setDynamic(s);
}}});
})();
(function(){var k="",j="underline",h="Boolean",g="px",f='"',e="italic",d="normal",c="bold",b="_applyItalic",a="_applyBold",z="Integer",y="_applyFamily",x="_applyLineHeight",w="Array",v="line-through",u="overline",t="Color",s="qx.bom.Font",r="Number",q="_applyDecoration",o=" ",p="_applySize",m=",",n="_applyColor";
qx.Class.define(s,{extend:qx.core.Object,construct:function(A,B){qx.core.Object.call(this);

if(A!==undefined){this.setSize(A);
}
if(B!==undefined){this.setFamily(B);
}},statics:{fromString:function(C){var G=new qx.bom.Font();
var E=C.split(/\s+/);
var name=[];
var F;

for(var i=0;i<E.length;i++){switch(F=E[i]){case c:G.setBold(true);
break;
case e:G.setItalic(true);
break;
case j:G.setDecoration(j);
break;
default:var D=parseInt(F,10);

if(D==F||qx.lang.String.contains(F,g)){G.setSize(D);
}else{name.push(F);
}break;
}}
if(name.length>0){G.setFamily(name);
}return G;
},fromConfig:function(H){var I=new qx.bom.Font;
I.set(H);
return I;
},__dA:{fontFamily:k,fontSize:k,fontWeight:k,fontStyle:k,textDecoration:k,lineHeight:1.2,textColor:k},getDefaultStyles:function(){return this.__dA;
}},properties:{size:{check:z,nullable:true,apply:p},lineHeight:{check:r,nullable:true,apply:x},family:{check:w,nullable:true,apply:y},bold:{check:h,nullable:true,apply:a},italic:{check:h,nullable:true,apply:b},decoration:{check:[j,v,u],nullable:true,apply:q},color:{check:t,nullable:true,apply:n}},members:{__dB:null,__dC:null,__dD:null,__dE:null,__dF:null,__dG:null,__dH:null,_applySize:function(J,K){this.__dB=J===null?null:J+g;
},_applyLineHeight:function(L,M){this.__dG=L===null?null:L;
},_applyFamily:function(N,O){var P=k;

for(var i=0,l=N.length;i<l;i++){if(N[i].indexOf(o)>0){P+=f+N[i]+f;
}else{P+=N[i];
}
if(i!==l-1){P+=m;
}}this.__dC=P;
},_applyBold:function(Q,R){this.__dD=Q===null?null:Q?c:d;
},_applyItalic:function(S,T){this.__dE=S===null?null:S?e:d;
},_applyDecoration:function(U,V){this.__dF=U===null?null:U;
},_applyColor:function(W,X){this.__dH=W===null?null:W;
},getStyles:function(){return {fontFamily:this.__dC,fontSize:this.__dB,fontWeight:this.__dD,fontStyle:this.__dE,textDecoration:this.__dF,lineHeight:this.__dG,textColor:this.__dH};
}}});
})();
(function(){var e="=",d="ecmascript.objectcount",c="+",b="qx.lang.Object",a="&";
qx.Class.define(b,{statics:{empty:function(f){for(var g in f){if(f.hasOwnProperty(g)){delete f[g];
}}},isEmpty:(qx.core.Environment.get(d))?
function(h){return h.__count__===0;
}:
function(j){for(var k in j){return false;
}return true;
},hasMinLength:(qx.core.Environment.get(d))?
function(m,n){return m.__count__>=n;
}:
function(o,p){if(p<=0){return true;
}var length=0;

for(var q in o){if((++length)>=p){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(r){var t=[];
var s=this.getKeys(r);

for(var i=0,l=s.length;i<l;i++){t.push(r[s[i]]);
}return t;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(u,v){return qx.lang.Object.mergeWith(u,v,false);
},merge:function(w,x){var y=arguments.length;

for(var i=1;i<y;i++){qx.lang.Object.mergeWith(w,arguments[i]);
}return w;
},clone:function(z){var A={};

for(var B in z){A[B]=z[B];
}return A;
},invert:function(C){var D={};

for(var E in C){D[C[E].toString()]=E;
}return D;
},getKeyFromValue:function(F,G){for(var H in F){if(F.hasOwnProperty(H)&&F[H]===G){return H;
}}return null;
},contains:function(I,J){return this.getKeyFromValue(I,J)!==null;
},select:function(K,L){return L[K];
},fromArray:function(M){var N={};

for(var i=0,l=M.length;i<l;i++){N[M[i].toString()]=true;
}return N;
},toUriParameter:function(O,P){var S,R=[],Q=window.encodeURIComponent;

for(S in O){if(O.hasOwnProperty(S)){if(P){R.push(Q(S).replace(/%20/g,c)+e+Q(O[S]).replace(/%20/g,c));
}else{R.push(Q(S)+e+Q(O[S]));
}}}return R.join(a);
}}});
})();
(function(){var e="qx.theme.manager.Icon",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{_applyTheme:function(f,g){var i=qx.util.AliasManager.getInstance();

if(g){for(var h in g.aliases){i.remove(h);
}}
if(f){for(var h in f.aliases){i.add(h,f.aliases[h]);
}}}}});
})();
(function(){var h="string",g="_applyTheme",f="qx.theme.manager.Appearance",e=":",d="Theme",c="changeTheme",b="/",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__dI={};
this.__dJ={};
},properties:{theme:{check:d,nullable:true,event:c,apply:g}},members:{__dK:{},__dI:null,__dJ:null,_applyTheme:function(j,k){this.__dJ={};
this.__dI={};
},__dL:function(l,m,n){var s=m.appearances;
var v=s[l];

if(!v){var w=b;
var p=[];
var u=l.split(w);
var t;

while(!v&&u.length>0){p.unshift(u.pop());
var q=u.join(w);
v=s[q];

if(v){t=v.alias||v;

if(typeof t===h){var r=t+w+p.join(w);
return this.__dL(r,m,n);
}}}for(var i=0;i<p.length-1;i++){p.shift();
var q=p.join(w);
var o=this.__dL(q,m);

if(o){return o;
}}if(n!=null){return this.__dL(n,m);
}return null;
}else if(typeof v===h){return this.__dL(v,m,n);
}else if(v.include&&!v.style){return this.__dL(v.include,m,n);
}return l;
},styleFrom:function(x,y,z,A){if(!z){z=this.getTheme();
}var F=this.__dJ;
var B=F[x];

if(!B){B=F[x]=this.__dL(x,z,A);
}var L=z.appearances[B];

if(!L){this.warn("Missing appearance: "+x);
return null;
}if(!L.style){return null;
}var M=B;

if(y){var N=L.$$bits;

if(!N){N=L.$$bits={};
L.$$length=0;
}var D=0;

for(var H in y){if(!y[H]){continue;
}
if(N[H]==null){N[H]=1<<L.$$length++;
}D+=N[H];
}if(D>0){M+=e+D;
}}var E=this.__dI;

if(E[M]!==undefined){return E[M];
}if(!y){y=this.__dK;
}var J;
if(L.include||L.base){var C;

if(L.include){C=this.styleFrom(L.include,y,z,A);
}var G=L.style(y,C);
J={};
if(L.base){var I=this.styleFrom(B,y,L.base,A);

if(L.include){for(var K in I){if(!C.hasOwnProperty(K)&&!G.hasOwnProperty(K)){J[K]=I[K];
}}}else{for(var K in I){if(!G.hasOwnProperty(K)){J[K]=I[K];
}}}}if(L.include){for(var K in C){if(!G.hasOwnProperty(K)){J[K]=C[K];
}}}for(var K in G){J[K]=G[K];
}}else{J=L.style(y);
}return E[M]=J||null;
}},destruct:function(){this.__dI=this.__dJ=null;
}});
})();
(function(){var p="other",o="widgets",n="fonts",m="appearances",k="qx.Theme",j="]",h="[Theme ",g="colors",f="decorations",e="Theme",b="meta",d="borders",c="icons";
qx.Bootstrap.define(k,{statics:{define:function(name,q){if(!q){var q={};
}q.include=this.__dM(q.include);
q.patch=this.__dM(q.patch);
var r={$$type:e,name:name,title:q.title,toString:this.genericToString};
if(q.extend){r.supertheme=q.extend;
}r.basename=qx.Bootstrap.createNamespace(name,r);
this.__dP(r,q);
this.__dN(r,q);
this.$$registry[name]=r;
for(var i=0,a=q.include,l=a.length;i<l;i++){this.include(r,a[i]);
}
for(var i=0,a=q.patch,l=a.length;i<l;i++){this.patch(r,a[i]);
}},__dM:function(s){if(!s){return [];
}
if(qx.Bootstrap.isArray(s)){return s;
}else{return [s];
}},__dN:function(t,u){var v=u.aliases||{};

if(u.extend&&u.extend.aliases){qx.Bootstrap.objectMergeWith(v,u.extend.aliases,false);
}t.aliases=v;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return h+this.name+j;
},__dO:function(w){for(var i=0,x=this.__dQ,l=x.length;i<l;i++){if(w[x[i]]){return x[i];
}}},__dP:function(y,z){var C=this.__dO(z);
if(z.extend&&!C){C=z.extend.type;
}y.type=C||p;
if(!C){return;
}var E=function(){};
if(z.extend){E.prototype=new z.extend.$$clazz;
}var D=E.prototype;
var B=z[C];
for(var A in B){D[A]=B[A];
if(D[A].base){D[A].base=z.extend;
}}y.$$clazz=E;
y[C]=new E;
},$$registry:{},__dQ:[g,d,f,n,c,o,m,b],__dR:null,__dS:null,__dT:function(){},patch:function(F,G){var I=this.__dO(G);

if(I!==this.__dO(F)){throw new Error("The mixins '"+F.name+"' are not compatible '"+G.name+"'!");
}var H=G[I];
var J=F.$$clazz.prototype;

for(var K in H){J[K]=H[K];
}},include:function(L,M){var O=M.type;

if(O!==L.type){throw new Error("The mixins '"+L.name+"' are not compatible '"+M.name+"'!");
}var N=M[O];
var P=L.$$clazz.prototype;

for(var Q in N){if(P[Q]!==undefined){continue;
}P[Q]=N[Q];
}}}});
})();
(function(){var p="Boolean",o="focusout",n="interval",m="mouseover",l="mouseout",k="mousemove",j="widget",i="qx.ui.tooltip.ToolTip",h="_applyCurrent",g="__dU",c="qx.ui.tooltip.Manager",f="__dV",d="__dX",b="tooltip-error",a="singleton";
qx.Class.define(c,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
qx.event.Registration.addListener(document.body,m,this.__ef,this,true);
this.__dU=new qx.event.Timer();
this.__dU.addListener(n,this.__ec,this);
this.__dV=new qx.event.Timer();
this.__dV.addListener(n,this.__ed,this);
this.__dW={left:0,top:0};
},properties:{current:{check:i,nullable:true,apply:h},showInvalidToolTips:{check:p,init:true},showToolTips:{check:p,init:true}},members:{__dW:null,__dV:null,__dU:null,__dX:null,__dY:null,__ea:function(){if(!this.__dX){this.__dX=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__dX;
},__eb:function(){if(!this.__dY){this.__dY=new qx.ui.tooltip.ToolTip().set({appearance:b});
this.__dY.syncAppearance();
}return this.__dY;
},_applyCurrent:function(q,r){if(r&&qx.ui.core.Widget.contains(r,q)){return;
}if(r){if(!r.isDisposed()){r.exclude();
}this.__dU.stop();
this.__dV.stop();
}var t=qx.event.Registration;
var s=document.body;
if(q){this.__dU.startWith(q.getShowTimeout());
t.addListener(s,l,this.__eg,this,true);
t.addListener(s,o,this.__eh,this,true);
t.addListener(s,k,this.__ee,this,true);
}else{t.removeListener(s,l,this.__eg,this,true);
t.removeListener(s,o,this.__eh,this,true);
t.removeListener(s,k,this.__ee,this,true);
}},__ec:function(e){var u=this.getCurrent();

if(u&&!u.isDisposed()){this.__dV.startWith(u.getHideTimeout());

if(u.getPlaceMethod()==j){u.placeToWidget(u.getOpener());
}else{u.placeToPoint(this.__dW);
}u.show();
}this.__dU.stop();
},__ed:function(e){var v=this.getCurrent();

if(v&&!v.isDisposed()){v.exclude();
}this.__dV.stop();
this.resetCurrent();
},__ee:function(e){var w=this.__dW;
w.left=e.getDocumentLeft();
w.top=e.getDocumentTop();
},__ef:function(e){var z=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!z){return;
}var A,B,y,x;
while(z!=null){A=z.getToolTip();
B=z.getToolTipText()||null;
y=z.getToolTipIcon()||null;

if(qx.Class.hasInterface(z.constructor,qx.ui.form.IForm)&&!z.isValid()){x=z.getInvalidMessage();
}
if(A||B||y||x){break;
}z=z.getLayoutParent();
}if(!z||
!z.getEnabled()||
z.isBlockToolTip()||
(!x&&!this.getShowToolTips())||(x&&!this.getShowInvalidToolTips())){return;
}
if(x){A=this.__eb().set({label:x});
}
if(!A){A=this.__ea().set({label:B,icon:y});
}this.setCurrent(A);
A.setOpener(z);
},__eg:function(e){var C=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!C){return;
}var D=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!D){return;
}var E=this.getCurrent();
if(E&&(D==E||qx.ui.core.Widget.contains(E,D))){return;
}if(D&&C&&qx.ui.core.Widget.contains(C,D)){return;
}if(E&&!D){this.setCurrent(null);
}else{this.resetCurrent();
}},__eh:function(e){var F=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!F){return;
}var G=this.getCurrent();
if(G&&G==F.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,m,this.__ef,this,true);
this._disposeObjects(g,f,d);
this.__dW=null;
}});
})();
(function(){var h="interval",g="qx.event.Timer",f="_applyInterval",d="_applyEnabled",c="Boolean",b="qx.event.type.Event",a="Integer";
qx.Class.define(g,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);
this.setEnabled(false);

if(i!=null){this.setInterval(i);
}var self=this;
this.__ei=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(j,k,l){var m=new qx.event.Timer(l);
m.__ej=j;
m.addListener(h,function(e){m.stop();
j.call(k,e);
m.dispose();
k=null;
},k);
m.start();
return m;
}},properties:{enabled:{init:true,check:c,apply:d},interval:{check:a,init:1000,apply:f}},members:{__ek:null,__ei:null,_applyInterval:function(n,o){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(p,q){if(q){window.clearInterval(this.__ek);
this.__ek=null;
}else if(p){this.__ek=window.setInterval(this.__ei,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(r){this.setInterval(r);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(s){this.stop();
this.startWith(s);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(h);
}})},destruct:function(){if(this.__ek){window.clearInterval(this.__ek);
}this.__ek=this.__ei=null;
}});
})();
(function(){var a="qx.ui.core.MChildrenHandling";
qx.Mixin.define(a,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(b){return this._indexOf(b);
},add:function(c,d){this._add(c,d);
},addAt:function(e,f,g){this._addAt(e,f,g);
},addBefore:function(h,i,j){this._addBefore(h,i,j);
},addAfter:function(k,l,m){this._addAfter(k,l,m);
},remove:function(n){this._remove(n);
},removeAt:function(o){return this._removeAt(o);
},removeAll:function(){return this._removeAll();
}},statics:{remap:function(p){p.getChildren=p._getChildren;
p.hasChildren=p._hasChildren;
p.indexOf=p._indexOf;
p.add=p._add;
p.addAt=p._addAt;
p.addBefore=p._addBefore;
p.addAfter=p._addAfter;
p.remove=p._remove;
p.removeAt=p._removeAt;
p.removeAll=p._removeAll;
}}});
})();
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this._setLayout(b);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
}}});
})();
(function(){var b="qx.ui.core.DecoratorFactory",a="$$nopool$$";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__el={};
},statics:{MAX_SIZE:15,__em:a},members:{__el:null,getDecoratorElement:function(c){var h=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(c)){var f=c;
var e=qx.theme.manager.Decoration.getInstance().resolve(c);
}else{var f=h.__em;
e=c;
}var g=this.__el;

if(g[f]&&g[f].length>0){var d=g[f].pop();
}else{var d=this._createDecoratorElement(e,f);
}d.$$pooled=false;
return d;
},poolDecorator:function(i){if(!i||i.$$pooled||i.isDisposed()){return;
}var l=qx.ui.core.DecoratorFactory;
var j=i.getId();

if(j==l.__em){i.dispose();
return;
}var k=this.__el;

if(!k[j]){k[j]=[];
}
if(k[j].length>l.MAX_SIZE){i.dispose();
}else{i.$$pooled=true;
k[j].push(i);
}},_createDecoratorElement:function(m,n){var o=new qx.html.Decorator(m,n);
return o;
},toString:function(){return qx.core.Object.prototype.toString.call(this);
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var q=this.__el;

for(var p in q){qx.util.DisposeUtil.disposeArray(q,p);
}}this.__el=null;
}});
})();
(function(){var j="Integer",i="_applyDimension",h="Boolean",g="_applyStretching",f="_applyMargin",e="shorthand",d="_applyAlign",c="allowShrinkY",b="bottom",a="baseline",x="marginBottom",w="qx.ui.core.LayoutItem",v="center",u="marginTop",t="allowGrowX",s="middle",r="marginLeft",q="allowShrinkX",p="top",o="right",m="marginRight",n="abstract",k="allowGrowY",l="left";
qx.Class.define(w,{type:n,extend:qx.core.Object,properties:{minWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},width:{check:j,nullable:true,apply:i,init:null,themeable:true},maxWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},minHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},height:{check:j,nullable:true,apply:i,init:null,themeable:true},maxHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},allowGrowX:{check:h,apply:g,init:true,themeable:true},allowShrinkX:{check:h,apply:g,init:true,themeable:true},allowGrowY:{check:h,apply:g,init:true,themeable:true},allowShrinkY:{check:h,apply:g,init:true,themeable:true},allowStretchX:{group:[t,q],mode:e,themeable:true},allowStretchY:{group:[k,c],mode:e,themeable:true},marginTop:{check:j,init:0,apply:f,themeable:true},marginRight:{check:j,init:0,apply:f,themeable:true},marginBottom:{check:j,init:0,apply:f,themeable:true},marginLeft:{check:j,init:0,apply:f,themeable:true},margin:{group:[u,m,x,r],mode:e,themeable:true},alignX:{check:[l,v,o],nullable:true,apply:d,themeable:true},alignY:{check:[p,s,b,a],nullable:true,apply:d,themeable:true}},members:{__en:null,__eo:null,__ep:null,__eq:null,__er:null,__es:null,__et:null,getBounds:function(){return this.__es||this.__eo||null;
},clearSeparators:function(){},renderSeparator:function(y,z){},renderLayout:function(A,top,B,C){var D;
var E=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var E=this._getHeightForWidth(B);
}
if(E!=null&&E!==this.__en){this.__en=E;
qx.ui.core.queue.Layout.add(this);
return null;
}var G=this.__eo;

if(!G){G=this.__eo={};
}var F={};

if(A!==G.left||top!==G.top){F.position=true;
G.left=A;
G.top=top;
}
if(B!==G.width||C!==G.height){F.size=true;
G.width=B;
G.height=C;
}if(this.__ep){F.local=true;
delete this.__ep;
}
if(this.__er){F.margin=true;
delete this.__er;
}return F;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__ep;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__ep=true;
this.__eq=null;
},getSizeHint:function(H){var I=this.__eq;

if(I){return I;
}
if(H===false){return null;
}I=this.__eq=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__en&&this.getHeight()==null){I.height=this.__en;
}if(I.minWidth>I.width){I.width=I.minWidth;
}
if(I.maxWidth<I.width){I.width=I.maxWidth;
}
if(!this.getAllowGrowX()){I.maxWidth=I.width;
}
if(!this.getAllowShrinkX()){I.minWidth=I.width;
}if(I.minHeight>I.height){I.height=I.minHeight;
}
if(I.maxHeight<I.height){I.height=I.maxHeight;
}
if(!this.getAllowGrowY()){I.maxHeight=I.height;
}
if(!this.getAllowShrinkY()){I.minHeight=I.height;
}return I;
},_computeSizeHint:function(){var N=this.getMinWidth()||0;
var K=this.getMinHeight()||0;
var O=this.getWidth()||N;
var M=this.getHeight()||K;
var J=this.getMaxWidth()||Infinity;
var L=this.getMaxHeight()||Infinity;
return {minWidth:N,width:O,maxWidth:J,minHeight:K,height:M,maxHeight:L};
},_hasHeightForWidth:function(){var P=this._getLayout();

if(P){return P.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(Q){var R=this._getLayout();

if(R&&R.hasHeightForWidth()){return R.getHeightForWidth(Q);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__er=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__es;
},setUserBounds:function(S,top,T,U){this.__es={left:S,top:top,width:T,height:U};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__es;
qx.ui.core.queue.Layout.add(this);
},__eu:{},setLayoutProperties:function(V){if(V==null){return;
}var W=this.__et;

if(!W){W=this.__et={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(V);
}for(var X in V){if(V[X]==null){delete W[X];
}else{W[X]=V[X];
}}},getLayoutProperties:function(){return this.__et||this.__eu;
},clearLayoutProperties:function(){delete this.__et;
},updateLayoutProperties:function(Y){var ba=this._getLayout();

if(ba){var bb;
ba.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},getApplicationRoot:function(){return qx.core.Init.getApplication().getRoot();
},getLayoutParent:function(){return this.$$parent||null;
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}this.$$parent=parent||null;
qx.ui.core.queue.Visibility.add(this);
},isRootWidget:function(){return false;
},_getRoot:function(){var parent=this;

while(parent){if(parent.isRootWidget()){return parent;
}parent=parent.$$parent;
}return null;
},clone:function(){var bc=qx.core.Object.prototype.clone.call(this);
var bd=this.__et;

if(bd){bc.__et=qx.lang.Object.clone(bd);
}return bc;
}},destruct:function(){this.$$parent=this.$$subparent=this.__et=this.__eo=this.__es=this.__eq=null;
}});
})();
(function(){var bY="px",bX="Boolean",bW="qx.event.type.Drag",bV="qx.event.type.Mouse",bU="visible",bT="qx.event.type.Focus",bS="Integer",bR="qx.event.type.Touch",bQ="qx.event.type.Data",bP="excluded",bx="_applyPadding",bw="qx.event.type.Event",bv="on",bu="hidden",bt="engine.name",bs="contextmenu",br="String",bq="tabIndex",bp="focused",bo="changeVisibility",cg="mshtml",ch="hovered",ce="qx.event.type.KeySequence",cf="absolute",cc="backgroundColor",cd="drag",ca="div",cb="disabled",ci="move",cj="dragstart",bI="qx.dynlocale",bH="dragchange",bK="dragend",bJ="resize",bM="Decorator",bL="zIndex",bO="opacity",bN="default",bG="Color",bF="changeToolTipText",c="beforeContextmenuOpen",d="_applyNativeContextMenu",f="__ez",g="_applyBackgroundColor",h="event.pointer",j="_applyFocusable",k="changeShadow",m="qx.event.type.KeyInput",n="createChildControl",o="__eG",cn="Font",cm="_applyShadow",cl="_applyEnabled",ck="_applySelectable",cr="Number",cq="_applyKeepActive",cp="_applyVisibility",co="__eI",ct="repeat",cs="qxDraggable",N="syncAppearance",O="paddingLeft",L="_applyDroppable",M="__eA",R="#",S="qx.event.type.MouseWheel",P="_applyCursor",Q="_applyDraggable",J="changeTextColor",K="$$widget",w="changeContextMenu",v="paddingTop",y="changeSelectable",x="hideFocus",s="none",r="outline",u="_applyAppearance",t="_applyOpacity",q="url(",p=")",X="qx.ui.core.Widget",Y="_applyFont",ba="cursor",bb="qxDroppable",T="__ew",U="changeZIndex",V="changeEnabled",W="changeFont",bc="_applyDecorator",bd="_applyZIndex",G="_applyTextColor",F="qx.ui.menu.Menu",E="__ev",D="_applyToolTipText",C="true",B="widget",A="changeDecorator",z="_applyTabIndex",I="changeAppearance",H="__eB",be="shorthand",bf="/",bg="",bh="_applyContextMenu",bi="paddingBottom",bj="changeNativeContextMenu",bk="undefined",bl="qx.ui.tooltip.ToolTip",bm="qxKeepActive",bn="_applyKeepFocus",bB="__eE",bA="paddingRight",bz="changeBackgroundColor",by="changeLocale",bE="qxKeepFocus",bD="opera",bC="qx/static/blank.gif";
qx.Class.define(X,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){qx.ui.core.LayoutItem.call(this);
this.__ev=this._createContainerElement();
this.__ew=this.__eH();
this.__ev.add(this.__ew);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:bw,disappear:bw,createChildControl:bQ,resize:bQ,move:bQ,syncAppearance:bQ,mousemove:bV,mouseover:bV,mouseout:bV,mousedown:bV,mouseup:bV,click:bV,dblclick:bV,contextmenu:bV,beforeContextmenuOpen:bQ,mousewheel:S,touchstart:bR,touchend:bR,touchmove:bR,touchcancel:bR,tap:bR,swipe:bR,keyup:ce,keydown:ce,keypress:ce,keyinput:m,focus:bT,blur:bT,focusin:bT,focusout:bT,activate:bT,deactivate:bT,capture:bw,losecapture:bw,drop:bW,dragleave:bW,dragover:bW,drag:bW,dragstart:bW,dragend:bW,dragchange:bW,droprequest:bW},properties:{paddingTop:{check:bS,init:0,apply:bx,themeable:true},paddingRight:{check:bS,init:0,apply:bx,themeable:true},paddingBottom:{check:bS,init:0,apply:bx,themeable:true},paddingLeft:{check:bS,init:0,apply:bx,themeable:true},padding:{group:[v,bA,bi,O],mode:be,themeable:true},zIndex:{nullable:true,init:null,apply:bd,event:U,check:bS,themeable:true},decorator:{nullable:true,init:null,apply:bc,event:A,check:bM,themeable:true},shadow:{nullable:true,init:null,apply:cm,event:k,check:bM,themeable:true},backgroundColor:{nullable:true,check:bG,apply:g,event:bz,themeable:true},textColor:{nullable:true,check:bG,apply:G,event:J,themeable:true,inheritable:true},font:{nullable:true,apply:Y,check:cn,event:W,themeable:true,inheritable:true,dereference:true},opacity:{check:cr,apply:t,themeable:true,nullable:true,init:null},cursor:{check:br,apply:P,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:bl,nullable:true},toolTipText:{check:br,nullable:true,event:bF,apply:D},toolTipIcon:{check:br,nullable:true,event:bF},blockToolTip:{check:bX,init:false},visibility:{check:[bU,bu,bP],init:bU,apply:cp,event:bo},enabled:{init:true,check:bX,inheritable:true,apply:cl,event:V},anonymous:{init:false,check:bX},tabIndex:{check:bS,nullable:true,apply:z},focusable:{check:bX,init:false,apply:j},keepFocus:{check:bX,init:false,apply:bn},keepActive:{check:bX,init:false,apply:cq},draggable:{check:bX,init:false,apply:Q},droppable:{check:bX,init:false,apply:L},selectable:{check:bX,init:false,event:y,apply:ck},contextMenu:{check:F,apply:bh,nullable:true,event:w},nativeContextMenu:{check:bX,init:false,themeable:true,event:bj,apply:d},appearance:{check:br,init:B,apply:u,event:I}},statics:{DEBUG:false,getWidgetByElement:function(cu,cv){while(cu){var cw=cu.$$widget;
if(cw!=null){var cx=qx.core.ObjectRegistry.fromHashCode(cw);
if(!cv||!cx.getAnonymous()){return cx;
}}try{cu=cu.parentNode;
}catch(e){return null;
}}return null;
},contains:function(parent,cy){while(cy){if(parent==cy){return true;
}cy=cy.getLayoutParent();
}return false;
},__ex:new qx.ui.core.DecoratorFactory(),__ey:new qx.ui.core.DecoratorFactory()},members:{__ev:null,__ew:null,__ez:null,__eA:null,__eB:null,__eC:null,__eD:null,__eE:null,_getLayout:function(){return this.__eE;
},_setLayout:function(cz){if(this.__eE){this.__eE.connectToWidget(null);
}
if(cz){cz.connectToWidget(this);
}this.__eE=cz;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var cA=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(cA);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(cA);
}this.$$refreshInheritables();
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__eF:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var cB=qx.theme.manager.Decoration.getInstance();
var cD=cB.resolve(a).getInsets();
var cC=cB.resolve(b).getInsets();

if(cD.top!=cC.top||cD.right!=cC.right||cD.bottom!=cC.bottom||cD.left!=cC.left){return true;
}return false;
},renderLayout:function(cE,top,cF,cG){var cP=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,cE,top,cF,cG);
if(!cP){return null;
}var cI=this.getContainerElement();
var content=this.getContentElement();
var cM=cP.size||this._updateInsets;
var cQ=bY;
var cN={};
if(cP.position){cN.left=cE+cQ;
cN.top=top+cQ;
}if(cP.size){cN.width=cF+cQ;
cN.height=cG+cQ;
}
if(cP.position||cP.size){cI.setStyles(cN);
}
if(cM||cP.local||cP.margin){var cH=this.getInsets();
var innerWidth=cF-cH.left-cH.right;
var innerHeight=cG-cH.top-cH.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var cK={};

if(this._updateInsets){cK.left=cH.left+cQ;
cK.top=cH.top+cQ;
}
if(cM){cK.width=innerWidth+cQ;
cK.height=innerHeight+cQ;
}
if(cM||this._updateInsets){content.setStyles(cK);
}
if(cP.size){var cO=this.__eB;

if(cO){cO.setStyles({width:cF+bY,height:cG+bY});
}}
if(cP.size||this._updateInsets){if(this.__ez){this.__ez.resize(cF,cG);
}}
if(cP.size){if(this.__eA){var cH=this.__eA.getInsets();
var cL=cF+cH.left+cH.right;
var cJ=cG+cH.top+cH.bottom;
this.__eA.resize(cL,cJ);
}}
if(cM||cP.local||cP.margin){if(this.__eE&&this.hasLayoutChildren()){this.__eE.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(cP.position&&this.hasListener(ci)){this.fireDataEvent(ci,this.getBounds());
}
if(cP.size&&this.hasListener(bJ)){this.fireDataEvent(bJ,this.getBounds());
}delete this._updateInsets;
return cP;
},__eG:null,clearSeparators:function(){var cS=this.__eG;

if(!cS){return;
}var cT=qx.ui.core.Widget.__ex;
var content=this.getContentElement();
var cR;

for(var i=0,l=cS.length;i<l;i++){cR=cS[i];
cT.poolDecorator(cR);
content.remove(cR);
}cS.length=0;
},renderSeparator:function(cU,cV){var cW=qx.ui.core.Widget.__ex.getDecoratorElement(cU);
this.getContentElement().add(cW);
cW.resize(cV.width,cV.height);
cW.setStyles({left:cV.left+bY,top:cV.top+bY});
if(!this.__eG){this.__eG=[cW];
}else{this.__eG.push(cW);
}},_computeSizeHint:function(){var de=this.getWidth();
var dd=this.getMinWidth();
var cY=this.getMaxWidth();
var dc=this.getHeight();
var da=this.getMinHeight();
var db=this.getMaxHeight();
var df=this._getContentHint();
var cX=this.getInsets();
var dh=cX.left+cX.right;
var dg=cX.top+cX.bottom;

if(de==null){de=df.width+dh;
}
if(dc==null){dc=df.height+dg;
}
if(dd==null){dd=dh;

if(df.minWidth!=null){dd+=df.minWidth;
}}
if(da==null){da=dg;

if(df.minHeight!=null){da+=df.minHeight;
}}
if(cY==null){if(df.maxWidth==null){cY=Infinity;
}else{cY=df.maxWidth+dh;
}}
if(db==null){if(df.maxHeight==null){db=Infinity;
}else{db=df.maxHeight+dg;
}}return {width:de,minWidth:dd,maxWidth:cY,height:dc,minHeight:da,maxHeight:db};
},invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);

if(this.__eE){this.__eE.invalidateLayoutCache();
}},_getContentHint:function(){var dj=this.__eE;

if(dj){if(this.hasLayoutChildren()){var di;
var dk=dj.getSizeHint();
return dk;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(dl){var dq=this.getInsets();
var dt=dq.left+dq.right;
var ds=dq.top+dq.bottom;
var dr=dl-dt;
var dn=this._getLayout();

if(dn&&dn.hasHeightForWidth()){var dm=dn.getHeightForWidth(dl);
}else{dm=this._getContentHeightForWidth(dr);
}var dp=dm+ds;
return dp;
},_getContentHeightForWidth:function(du){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var dw=this.getPaddingRight();
var dy=this.getPaddingBottom();
var dx=this.getPaddingLeft();

if(this.__ez){var dv=this.__ez.getInsets();
top+=dv.top;
dw+=dv.right;
dy+=dv.bottom;
dx+=dv.left;
}return {"top":top,"right":dw,"bottom":dy,"left":dx};
},getInnerSize:function(){var dA=this.getBounds();

if(!dA){return null;
}var dz=this.getInsets();
return {width:dA.width-dz.left-dz.right,height:dA.height-dz.top-dz.bottom};
},show:function(){this.setVisibility(bU);
},hide:function(){this.setVisibility(bu);
},exclude:function(){this.setVisibility(bP);
},isVisible:function(){return this.getVisibility()===bU;
},isHidden:function(){return this.getVisibility()!==bU;
},isExcluded:function(){return this.getVisibility()===bP;
},isSeeable:function(){var dC=this.getContainerElement().getDomElement();

if(dC){return dC.offsetWidth>0;
}var dB=this;

do{if(!dB.isVisible()){return false;
}
if(dB.isRootWidget()){return true;
}dB=dB.getLayoutParent();
}while(dB);
return false;
},_createContainerElement:function(){var dE={"$$widget":this.toHashCode()};
var dD={zIndex:0,position:cf};
return new qx.html.Element(ca,dD,dE);
},__eH:function(){var dF=this._createContentElement();
dF.setStyles({"position":cf,"zIndex":10});
return dF;
},_createContentElement:function(){return new qx.html.Element(ca,{overflowX:bu,overflowY:bu});
},getContainerElement:function(){return this.__ev;
},getContentElement:function(){return this.__ew;
},getDecoratorElement:function(){return this.__ez||null;
},getShadowElement:function(){return this.__eA||null;
},__eI:null,getLayoutChildren:function(){var dH=this.__eI;

if(!dH){return this.__eJ;
}var dI;

for(var i=0,l=dH.length;i<l;i++){var dG=dH[i];

if(dG.hasUserBounds()||dG.isExcluded()){if(dI==null){dI=dH.concat();
}qx.lang.Array.remove(dI,dG);
}}return dI||dH;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var dJ=this.__eE;

if(dJ){dJ.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var dK=this.__eI;

if(!dK){return false;
}var dL;

for(var i=0,l=dK.length;i<l;i++){dL=dK[i];

if(!dL.hasUserBounds()&&!dL.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__eJ:[],_getChildren:function(){return this.__eI||this.__eJ;
},_indexOf:function(dM){var dN=this.__eI;

if(!dN){return -1;
}return dN.indexOf(dM);
},_hasChildren:function(){var dO=this.__eI;
return dO!=null&&(!!dO[0]);
},addChildrenToQueue:function(dP){var dQ=this.__eI;

if(!dQ){return;
}var dR;

for(var i=0,l=dQ.length;i<l;i++){dR=dQ[i];
dP.push(dR);
dR.addChildrenToQueue(dP);
}},_add:function(dS,dT){if(dS.getLayoutParent()==this){qx.lang.Array.remove(this.__eI,dS);
}
if(this.__eI){this.__eI.push(dS);
}else{this.__eI=[dS];
}this.__eK(dS,dT);
},_addAt:function(dU,dV,dW){if(!this.__eI){this.__eI=[];
}if(dU.getLayoutParent()==this){qx.lang.Array.remove(this.__eI,dU);
}var dX=this.__eI[dV];

if(dX===dU){dU.setLayoutProperties(dW);
}
if(dX){qx.lang.Array.insertBefore(this.__eI,dU,dX);
}else{this.__eI.push(dU);
}this.__eK(dU,dW);
},_addBefore:function(dY,ea,eb){if(dY==ea){return;
}
if(!this.__eI){this.__eI=[];
}if(dY.getLayoutParent()==this){qx.lang.Array.remove(this.__eI,dY);
}qx.lang.Array.insertBefore(this.__eI,dY,ea);
this.__eK(dY,eb);
},_addAfter:function(ec,ed,ee){if(ec==ed){return;
}
if(!this.__eI){this.__eI=[];
}if(ec.getLayoutParent()==this){qx.lang.Array.remove(this.__eI,ec);
}qx.lang.Array.insertAfter(this.__eI,ec,ed);
this.__eK(ec,ee);
},_remove:function(ef){if(!this.__eI){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__eI,ef);
this.__eL(ef);
},_removeAt:function(eg){if(!this.__eI){throw new Error("This widget has no children!");
}var eh=this.__eI[eg];
qx.lang.Array.removeAt(this.__eI,eg);
this.__eL(eh);
return eh;
},_removeAll:function(){if(!this.__eI){return [];
}var ei=this.__eI.concat();
this.__eI.length=0;

for(var i=ei.length-1;i>=0;i--){this.__eL(ei[i]);
}qx.ui.core.queue.Layout.add(this);
return ei;
},_afterAddChild:null,_afterRemoveChild:null,__eK:function(ej,ek){var parent=ej.getLayoutParent();

if(parent&&parent!=this){parent._remove(ej);
}ej.setLayoutParent(this);
if(ek){ej.setLayoutProperties(ek);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(ej);
}},__eL:function(em){if(em.getLayoutParent()!==this){throw new Error("Remove Error: "+em+" is not a child of this widget!");
}em.setLayoutParent(null);
if(this.__eE){this.__eE.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(em);
}},capture:function(en){this.getContainerElement().capture(en);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(eo,ep,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__eB){return;
}var eq=this.__eB=new qx.html.Element;
eq.setStyles({position:cf,top:0,left:0,zIndex:7});
var er=this.getBounds();

if(er){this.__eB.setStyles({width:er.width+bY,height:er.height+bY});
}if((qx.core.Environment.get(bt)==cg)){eq.setStyles({backgroundImage:q+qx.util.ResourceManager.getInstance().toUri(bC)+p,backgroundRepeat:ct});
}this.getContainerElement().add(eq);
},_applyDecorator:function(es,et){var ew=qx.ui.core.Widget.__ex;
var eu=this.getContainerElement();
if(!this.__eB&&!qx.core.Environment.get(h)){this._createProtectorElement();
}if(et){eu.remove(this.__ez);
ew.poolDecorator(this.__ez);
}if(es){var ev=this.__ez=ew.getDecoratorElement(es);
ev.setStyle(bL,5);
eu.add(ev);
}else{delete this.__ez;
}this._applyBackgroundColor(this.getBackgroundColor());
if(this.__eF(et,es)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(es){var ex=this.getBounds();

if(ex){ev.resize(ex.width,ex.height);
this.__eB&&
this.__eB.setStyles({width:ex.width+bY,height:ex.height+bY});
}}},_applyShadow:function(ey,ez){var eG=qx.ui.core.Widget.__ey;
var eB=this.getContainerElement();
if(ez){eB.remove(this.__eA);
eG.poolDecorator(this.__eA);
}if(ey){var eD=this.__eA=eG.getDecoratorElement(ey);
eB.add(eD);
var eF=eD.getInsets();
eD.setStyles({left:(-eF.left)+bY,top:(-eF.top)+bY});
var eE=this.getBounds();

if(eE){var eC=eE.width+eF.left+eF.right;
var eA=eE.height+eF.top+eF.bottom;
eD.resize(eC,eA);
}eD.tint(null);
}else{delete this.__eA;
}},_applyToolTipText:function(eH,eI){if(qx.core.Environment.get(bI)){if(this.__eD){return;
}var eJ=qx.locale.Manager.getInstance();
this.__eD=eJ.addListener(by,function(){var eK=this.getToolTipText();

if(eK&&eK.translate){this.setToolTipText(eK.translate());
}},this);
}},_applyTextColor:function(eL,eM){},_applyZIndex:function(eN,eO){this.getContainerElement().setStyle(bL,eN==null?0:eN);
},_applyVisibility:function(eP,eQ){var eR=this.getContainerElement();

if(eP===bU){eR.show();
}else{eR.hide();
}var parent=this.$$parent;

if(parent&&(eQ==null||eP==null||eQ===bP||eP===bP)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(eS,eT){this.getContainerElement().setStyle(bO,eS==1?null:eS);
if((qx.core.Environment.get(bt)==cg)&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var eU=(eS==1||eS==null)?null:0.99;
this.getContentElement().setStyle(bO,eU);
}}},_applyCursor:function(eV,eW){if(eV==null&&!this.isSelectable()){eV=bN;
}this.getContainerElement().setStyle(ba,eV,qx.core.Environment.get(bt)==bD);
},_applyBackgroundColor:function(eX,eY){var fa=this.getBackgroundColor();
var fc=this.getContainerElement();

if(this.__ez){this.__ez.tint(fa);
fc.setStyle(cc,null);
}else{var fb=qx.theme.manager.Color.getInstance().resolve(fa);
fc.setStyle(cc,fb);
}},_applyFont:function(fd,fe){},__eM:null,$$stateChanges:null,_forwardStates:null,hasState:function(ff){var fg=this.__eM;
return !!fg&&!!fg[ff];
},addState:function(fh){var fi=this.__eM;

if(!fi){fi=this.__eM={};
}
if(fi[fh]){return;
}this.__eM[fh]=true;
if(fh===ch){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fl=this.__eP;

if(forward&&forward[fh]&&fl){var fj;

for(var fk in fl){fj=fl[fk];

if(fj instanceof qx.ui.core.Widget){fl[fk].addState(fh);
}}}},removeState:function(fm){var fn=this.__eM;

if(!fn||!fn[fm]){return;
}delete this.__eM[fm];
if(fm===ch){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fq=this.__eP;

if(forward&&forward[fm]&&fq){for(var fp in fq){var fo=fq[fp];

if(fo instanceof qx.ui.core.Widget){fo.removeState(fm);
}}}},replaceState:function(fr,fs){var ft=this.__eM;

if(!ft){ft=this.__eM={};
}
if(!ft[fs]){ft[fs]=true;
}
if(ft[fr]){delete ft[fr];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fw=this.__eP;

if(forward&&forward[fs]&&fw){for(var fv in fw){var fu=fw[fv];

if(fu instanceof qx.ui.core.Widget){fu.replaceState(fr,fs);
}}}},__eN:null,__eO:null,syncAppearance:function(){var fB=this.__eM;
var fA=this.__eN;
var fC=qx.theme.manager.Appearance.getInstance();
var fy=qx.core.Property.$$method.setThemed;
var fG=qx.core.Property.$$method.resetThemed;
if(this.__eO){delete this.__eO;
if(fA){var fx=fC.styleFrom(fA,fB,null,this.getAppearance());
fA=null;
}}if(!fA){var fz=this;
var fF=[];

do{fF.push(fz.$$subcontrol||fz.getAppearance());
}while(fz=fz.$$subparent);
fA=fF.reverse().join(bf).replace(/#[0-9]+/g,bg);
this.__eN=fA;
}var fD=fC.styleFrom(fA,fB,null,this.getAppearance());

if(fD){var fE;

if(fx){for(var fE in fx){if(fD[fE]===undefined){this[fG[fE]]();
}}}for(var fE in fD){fD[fE]===undefined?this[fG[fE]]():this[fy[fE]](fD[fE]);
}}else if(fx){for(var fE in fx){this[fG[fE]]();
}}this.fireDataEvent(N,this.__eM);
},_applyAppearance:function(fH,fI){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__eC){qx.ui.core.queue.Appearance.add(this);
this.__eC=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__eO=true;
qx.ui.core.queue.Appearance.add(this);
var fL=this.__eP;

if(fL){var fJ;

for(var fK in fL){fJ=fL[fK];

if(fJ instanceof qx.ui.core.Widget){fJ.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var fM=this;

while(fM.getAnonymous()){fM=fM.getLayoutParent();

if(!fM){return null;
}}return fM;
},getFocusTarget:function(){var fN=this;

if(!fN.getEnabled()){return null;
}
while(fN.getAnonymous()||!fN.getFocusable()){fN=fN.getLayoutParent();

if(!fN||!fN.getEnabled()){return null;
}}return fN;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(fO,fP){var fQ=this.getFocusElement();
if(fO){var fR=this.getTabIndex();

if(fR==null){fR=1;
}fQ.setAttribute(bq,fR);
if((qx.core.Environment.get(bt)==cg)){fQ.setAttribute(x,C);
}else{fQ.setStyle(r,s);
}}else{if(fQ.isNativelyFocusable()){fQ.setAttribute(bq,-1);
}else if(fP){fQ.setAttribute(bq,null);
}}},_applyKeepFocus:function(fS){var fT=this.getFocusElement();
fT.setAttribute(bE,fS?bv:null);
},_applyKeepActive:function(fU){var fV=this.getContainerElement();
fV.setAttribute(bm,fU?bv:null);
},_applyTabIndex:function(fW){if(fW==null){fW=1;
}else if(fW<1||fW>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&fW!=null){this.getFocusElement().setAttribute(bq,fW);
}},_applySelectable:function(fX,fY){if(fY!==null){this._applyCursor(this.getCursor());
}this.getContentElement().setSelectable(fX);
},_applyEnabled:function(ga,gb){if(ga===false){this.addState(cb);
this.removeState(ch);
if(this.isFocusable()){this.removeState(bp);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(cb);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(gc,gd,name){},_applyContextMenu:function(ge,gf){if(gf){gf.removeState(bs);

if(gf.getOpener()==this){gf.resetOpener();
}
if(!ge){this.removeListener(bs,this._onContextMenuOpen);
gf.removeListener(bo,this._onBeforeContextMenuOpen,this);
}}
if(ge){ge.setOpener(this);
ge.addState(bs);

if(!gf){this.addListener(bs,this._onContextMenuOpen);
ge.addListener(bo,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==bU&&this.hasListener(c)){this.fireDataEvent(c,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(gg,gh){if(!this.isEnabled()&&gg===true){gg=false;
}qx.ui.core.DragDropCursor.getInstance();
if(gg){this.addListener(cj,this._onDragStart);
this.addListener(cd,this._onDrag);
this.addListener(bK,this._onDragEnd);
this.addListener(bH,this._onDragChange);
}else{this.removeListener(cj,this._onDragStart);
this.removeListener(cd,this._onDrag);
this.removeListener(bK,this._onDragEnd);
this.removeListener(bH,this._onDragChange);
}this.getContainerElement().setAttribute(cs,gg?bv:null);
},_applyDroppable:function(gi,gj){if(!this.isEnabled()&&gi===true){gi=false;
}this.getContainerElement().setAttribute(bb,gi?bv:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(bN);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var gk=qx.ui.core.DragDropCursor.getInstance();
var gl=e.getCurrentAction();
gl?gk.setAction(gl):gk.resetAction();
},visualizeFocus:function(){this.addState(bp);
},visualizeBlur:function(){this.removeState(bp);
},scrollChildIntoView:function(gm,gn,go,gp){gp=typeof gp==bk?true:gp;
var gq=qx.ui.core.queue.Layout;
var parent;
if(gp){gp=!gq.isScheduled(gm);
parent=gm.getLayoutParent();
if(gp&&parent){gp=!gq.isScheduled(parent);
if(gp){parent.getChildren().forEach(function(gr){gp=gp&&!gq.isScheduled(gr);
});
}}}this.scrollChildIntoViewX(gm,gn,gp);
this.scrollChildIntoViewY(gm,go,gp);
},scrollChildIntoViewX:function(gs,gt,gu){this.getContentElement().scrollChildIntoViewX(gs.getContainerElement(),gt,gu);
},scrollChildIntoViewY:function(gv,gw,gx){this.getContentElement().scrollChildIntoViewY(gv.getContainerElement(),gw,gx);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(gy){if(!this.__eP){return false;
}return !!this.__eP[gy];
},__eP:null,_getCreatedChildControls:function(){return this.__eP;
},getChildControl:function(gz,gA){if(!this.__eP){if(gA){return null;
}this.__eP={};
}var gB=this.__eP[gz];

if(gB){return gB;
}
if(gA===true){return null;
}return this._createChildControl(gz);
},_showChildControl:function(gC){var gD=this.getChildControl(gC);
gD.show();
return gD;
},_excludeChildControl:function(gE){var gF=this.getChildControl(gE,true);

if(gF){gF.exclude();
}},_isChildControlVisible:function(gG){var gH=this.getChildControl(gG,true);

if(gH){return gH.isVisible();
}return false;
},_createChildControl:function(gI){if(!this.__eP){this.__eP={};
}else if(this.__eP[gI]){throw new Error("Child control '"+gI+"' already created!");
}var gM=gI.indexOf(R);

if(gM==-1){var gJ=this._createChildControlImpl(gI);
}else{var gJ=this._createChildControlImpl(gI.substring(0,gM),gI.substring(gM+1,gI.length));
}
if(!gJ){throw new Error("Unsupported control: "+gI);
}gJ.$$subcontrol=gI;
gJ.$$subparent=this;
var gK=this.__eM;
var forward=this._forwardStates;

if(gK&&forward&&gJ instanceof qx.ui.core.Widget){for(var gL in gK){if(forward[gL]){gJ.addState(gL);
}}}this.fireDataEvent(n,gJ);
return this.__eP[gI]=gJ;
},_createChildControlImpl:function(gN,gO){return null;
},_disposeChildControls:function(){var gS=this.__eP;

if(!gS){return;
}var gQ=qx.ui.core.Widget;

for(var gR in gS){var gP=gS[gR];

if(!gQ.contains(this,gP)){gP.destroy();
}else{gP.dispose();
}}delete this.__eP;
},_findTopControl:function(){var gT=this;

while(gT){if(!gT.$$subparent){return gT;
}gT=gT.$$subparent;
}return null;
},getContainerLocation:function(gU){var gV=this.getContainerElement().getDomElement();
return gV?qx.bom.element.Location.get(gV,gU):null;
},getContentLocation:function(gW){var gX=this.getContentElement().getDomElement();
return gX?qx.bom.element.Location.get(gX,gW):null;
},setDomLeft:function(gY){var ha=this.getContainerElement().getDomElement();

if(ha){ha.style.left=gY+bY;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(hb){var hc=this.getContainerElement().getDomElement();

if(hc){hc.style.top=hb+bY;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(hd,top){var he=this.getContainerElement().getDomElement();

if(he){he.style.left=hd+bY;
he.style.top=top+bY;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var hf=qx.ui.core.LayoutItem.prototype.clone.call(this);

if(this.getChildren){var hg=this.getChildren();

for(var i=0,l=hg.length;i<l;i++){hf.add(hg[i].clone());
}}return hf;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Environment.get(bI)){if(this.__eD){qx.locale.Manager.getInstance().removeListenerById(this.__eD);
}}this.getContainerElement().setAttribute(K,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var hi=qx.ui.core.Widget;
var hh=this.getContainerElement();

if(this.__ez){hh.remove(this.__ez);
hi.__ex.poolDecorator(this.__ez);
}
if(this.__eA){hh.remove(this.__eA);
hi.__ey.poolDecorator(this.__eA);
}this.clearSeparators();
this.__ez=this.__eA=this.__eG=null;
}else{this._disposeArray(o);
this._disposeObjects(f,M);
}this._disposeArray(co);
this.__eM=this.__eP=null;
this._disposeObjects(bB,E,T,H);
}});
})();
(function(){var d="qx.event.type.Data",c="qx.ui.container.Composite",b="addChildWidget",a="removeChildWidget";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(e){qx.ui.core.Widget.call(this);

if(e!=null){this._setLayout(e);
}},events:{addChildWidget:d,removeChildWidget:d},members:{_afterAddChild:function(f){this.fireNonBubblingEvent(b,qx.event.type.Data,[f]);
},_afterRemoveChild:function(g){this.fireNonBubblingEvent(a,qx.event.type.Data,[g]);
}},defer:function(h,i){qx.ui.core.MChildrenHandling.remap(i);
qx.ui.core.MLayoutHandling.remap(i);
}});
})();
(function(){var j="Integer",i="interval",h="keep-align",g="disappear",f="best-fit",e="mouse",d="bottom-left",c="direct",b="Boolean",a="bottom-right",x="widget",w="qx.ui.core.MPlacement",v="left-top",u="offsetRight",t="shorthand",s="offsetLeft",r="top-left",q="appear",p="offsetBottom",o="top-right",m="offsetTop",n="right-bottom",k="right-top",l="left-bottom";
qx.Mixin.define(w,{statics:{__eQ:null,setVisibleElement:function(y){this.__eQ=y;
},getVisibleElement:function(){return this.__eQ;
}},properties:{position:{check:[r,o,d,a,v,l,k,n],init:d,themeable:true},placeMethod:{check:[x,e],init:e,themeable:true},domMove:{check:b,init:false},placementModeX:{check:[c,h,f],init:h,themeable:true},placementModeY:{check:[c,h,f],init:h,themeable:true},offsetLeft:{check:j,init:0,themeable:true},offsetTop:{check:j,init:0,themeable:true},offsetRight:{check:j,init:0,themeable:true},offsetBottom:{check:j,init:0,themeable:true},offset:{group:[m,u,p,s],mode:t,themeable:true}},members:{__eR:null,__eS:null,__eT:null,getLayoutLocation:function(z){var C,B,D,top;
B=z.getBounds();
D=B.left;
top=B.top;
var E=B;
z=z.getLayoutParent();

while(z&&!z.isRootWidget()){B=z.getBounds();
D+=B.left;
top+=B.top;
C=z.getInsets();
D+=C.left;
top+=C.top;
z=z.getLayoutParent();
}if(z.isRootWidget()){var A=z.getContainerLocation();

if(A){D+=A.left;
top+=A.top;
}}return {left:D,top:top,right:D+E.width,bottom:top+E.height};
},moveTo:function(F,top){var H=qx.ui.core.MPlacement.getVisibleElement();
if(H){var J=this.getBounds();
var G=H.getContentLocation();
if(J&&G){var K=top+J.height;
var I=F+J.width;
if((I>G.left&&F<G.right)&&(K>G.top&&top<G.bottom)){F=Math.max(G.left-J.width,0);
}}}
if(this.getDomMove()){this.setDomPosition(F,top);
}else{this.setLayoutProperties({left:F,top:top});
}},placeToWidget:function(L,M){if(M){this.__eU();
this.__eR=qx.lang.Function.bind(this.placeToWidget,this,L,false);
qx.event.Idle.getInstance().addListener(i,this.__eR);
this.__eT=function(){this.__eU();
};
this.addListener(g,this.__eT,this);
}var N=L.getContainerLocation()||this.getLayoutLocation(L);
this.__eW(N);
},__eU:function(){if(this.__eR){qx.event.Idle.getInstance().removeListener(i,this.__eR);
this.__eR=null;
}
if(this.__eT){this.removeListener(g,this.__eT,this);
this.__eT=null;
}},placeToMouse:function(event){var P=event.getDocumentLeft();
var top=event.getDocumentTop();
var O={left:P,top:top,right:P,bottom:top};
this.__eW(O);
},placeToElement:function(Q,R){var location=qx.bom.element.Location.get(Q);
var S={left:location.left,top:location.top,right:location.left+Q.offsetWidth,bottom:location.top+Q.offsetHeight};
if(R){this.__eR=qx.lang.Function.bind(this.placeToElement,this,Q,false);
qx.event.Idle.getInstance().addListener(i,this.__eR);
this.addListener(g,function(){if(this.__eR){qx.event.Idle.getInstance().removeListener(i,this.__eR);
this.__eR=null;
}},this);
}this.__eW(S);
},placeToPoint:function(T){var U={left:T.left,top:T.top,right:T.left,bottom:T.top};
this.__eW(U);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__eV:function(V){var W=null;

if(this._computePlacementSize){var W=this._computePlacementSize();
}else if(this.isVisible()){var W=this.getBounds();
}
if(W==null){this.addListenerOnce(q,function(){this.__eV(V);
},this);
}else{V.call(this,W);
}},__eW:function(X){this.__eV(function(Y){var ba=qx.util.placement.Placement.compute(Y,this.getLayoutParent().getBounds(),X,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(ba.left,ba.top);
});
}},destruct:function(){this.__eU();
}});
})();
(function(){var e="qx.ui.popup.Popup",d="visible",c="excluded",b="popup",a="Boolean";
qx.Class.define(e,{extend:qx.ui.container.Composite,include:qx.ui.core.MPlacement,construct:function(f){qx.ui.container.Composite.call(this,f);
this.initVisibility();
},properties:{appearance:{refine:true,init:b},visibility:{refine:true,init:c},autoHide:{check:a,init:true}},members:{show:function(){if(this.getLayoutParent()==null){qx.core.Init.getApplication().getRoot().add(this);
}qx.ui.container.Composite.prototype.show.call(this);
},_applyVisibility:function(g,h){qx.ui.container.Composite.prototype._applyVisibility.call(this,g,h);
var i=qx.ui.popup.Manager.getInstance();
g===d?i.add(this):i.remove(this);
}},destruct:function(){qx.ui.popup.Manager.getInstance().remove(this);
}});
})();
(function(){var l="atom",k="Integer",j="String",i="_applyRich",h="qx.ui.tooltip.ToolTip",g="_applyIcon",f="tooltip",d="qx.ui.core.Widget",c="mouseover",b="Boolean",a="_applyLabel";
qx.Class.define(h,{extend:qx.ui.popup.Popup,construct:function(m,n){qx.ui.popup.Popup.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(l);
if(m!=null){this.setLabel(m);
}
if(n!=null){this.setIcon(n);
}this.addListener(c,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:f},showTimeout:{check:k,init:700,themeable:true},hideTimeout:{check:k,init:4000,themeable:true},label:{check:j,nullable:true,apply:a},icon:{check:j,nullable:true,apply:g,themeable:true},rich:{check:b,init:false,apply:i},opener:{check:d,nullable:true}},members:{_createChildControlImpl:function(o,p){var q;

switch(o){case l:q=new qx.ui.basic.Atom;
this._add(q);
break;
}return q||qx.ui.popup.Popup.prototype._createChildControlImpl.call(this,o);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(r,s){var t=this.getChildControl(l);
r==null?t.resetIcon():t.setIcon(r);
},_applyLabel:function(u,v){var w=this.getChildControl(l);
u==null?w.resetLabel():w.setLabel(u);
},_applyRich:function(x,y){var z=this.getChildControl(l);
z.setRich(x);
}}});
})();
(function(){var b="qx.util.DeferredCallManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__eX={};
this.__eY=qx.lang.Function.bind(this.__fd,this);
this.__fa=false;
},members:{__fb:null,__fc:null,__eX:null,__fa:null,__eY:null,schedule:function(c){if(this.__fb==null){this.__fb=window.setTimeout(this.__eY,0);
}var d=c.toHashCode();
if(this.__fc&&this.__fc[d]){return;
}this.__eX[d]=c;
this.__fa=true;
},cancel:function(e){var f=e.toHashCode();
if(this.__fc&&this.__fc[f]){this.__fc[f]=null;
return;
}delete this.__eX[f];
if(qx.lang.Object.isEmpty(this.__eX)&&this.__fb!=null){window.clearTimeout(this.__fb);
this.__fb=null;
}},__fd:qx.event.GlobalError.observeMethod(function(){this.__fb=null;
while(this.__fa){this.__fc=qx.lang.Object.clone(this.__eX);
this.__eX={};
this.__fa=false;

for(var h in this.__fc){var g=this.__fc[h];

if(g){this.__fc[h]=null;
g.call();
}}}this.__fc=null;
})},destruct:function(){if(this.__fb!=null){window.clearTimeout(this.__fb);
}this.__eY=this.__eX=null;
}});
})();
(function(){var a="qx.util.DeferredCall";
qx.Class.define(a,{extend:qx.core.Object,construct:function(b,c){qx.core.Object.call(this);
this.__fe=b;
this.__ff=c||null;
this.__fg=qx.util.DeferredCallManager.getInstance();
},members:{__fe:null,__ff:null,__fg:null,cancel:function(){this.__fg.cancel(this);
},schedule:function(){this.__fg.schedule(this);
},call:function(){var d;
this.__ff?this.__fe.apply(this.__ff):this.__fe();
}},destruct:function(e,f){this.cancel();
this.__ff=this.__fe=this.__fg=null;
}});
})();
(function(){var m="element",k="qxSelectable",j="off",h="engine.name",g="on",f="text",d="div",c="",b="mshtml",a="none",F="scroll",E="qx.html.Element",D="|capture|",C="activate",B="blur",A="deactivate",z="capture",w="userSelect",v="-moz-none",u="visible",s="releaseCapture",t="|bubble|",q="tabIndex",r="__fD",o="focus",p="MozUserSelect",n="hidden";
qx.Class.define(E,{extend:qx.core.Object,construct:function(G,H,I){qx.core.Object.call(this);
this.__fh=G||d;
this.__fi=H||null;
this.__fj=I||null;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__fk:{},_scheduleFlush:function(J){qx.html.Element.__fO.schedule();
},flush:function(){var U;
var M=this.__fl();
var L=M.getFocus();

if(L&&this.__fp(L)){M.blur(L);
}var bc=M.getActive();

if(bc&&this.__fp(bc)){qx.bom.Element.deactivate(bc);
}var P=this.__fn();

if(P&&this.__fp(P)){qx.bom.Element.releaseCapture(P);
}var V=[];
var W=this._modified;

for(var T in W){U=W[T];
if(U.__fH()){if(U.__fq&&qx.dom.Hierarchy.isRendered(U.__fq)){V.push(U);
}else{U.__fG();
}delete W[T];
}}
for(var i=0,l=V.length;i<l;i++){U=V[i];
U.__fG();
}var R=this._visibility;

for(var T in R){U=R[T];
var X=U.__fq;

if(!X){delete R[T];
continue;
}if(!U.$$disposed){X.style.display=U.__ft?c:a;
if((qx.core.Environment.get(h)==b)){if(!(document.documentMode>=8)){X.style.visibility=U.__ft?u:n;
}}}delete R[T];
}var scroll=this._scroll;

for(var T in scroll){U=scroll[T];
var bd=U.__fq;

if(bd&&bd.offsetWidth){var O=true;
if(U.__fw!=null){U.__fq.scrollLeft=U.__fw;
delete U.__fw;
}if(U.__fx!=null){U.__fq.scrollTop=U.__fx;
delete U.__fx;
}var Y=U.__fu;

if(Y!=null){var S=Y.element.getDomElement();

if(S&&S.offsetWidth){qx.bom.element.Scroll.intoViewX(S,bd,Y.align);
delete U.__fu;
}else{O=false;
}}var ba=U.__fv;

if(ba!=null){var S=ba.element.getDomElement();

if(S&&S.offsetWidth){qx.bom.element.Scroll.intoViewY(S,bd,ba.align);
delete U.__fv;
}else{O=false;
}}if(O){delete scroll[T];
}}}var N={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var bb=this._actions[i];
var X=bb.element.__fq;

if(!X||!N[bb.type]&&!bb.element.__fH()){continue;
}var Q=bb.args;
Q.unshift(X);
qx.bom.Element[bb.type].apply(qx.bom.Element,Q);
}this._actions=[];
for(var T in this.__fk){var K=this.__fk[T];
var bd=K.element.__fq;

if(bd){qx.bom.Selection.set(bd,K.start,K.end);
delete this.__fk[T];
}}qx.event.handler.Appear.refresh();
},__fl:function(){if(!this.__fm){var be=qx.event.Registration.getManager(window);
this.__fm=be.getHandler(qx.event.handler.Focus);
}return this.__fm;
},__fn:function(){if(!this.__fo){var bf=qx.event.Registration.getManager(window);
this.__fo=bf.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__fo.getCaptureElement();
},__fp:function(bg){var bh=qx.core.ObjectRegistry.fromHashCode(bg.$$element);
return bh&&!bh.__fH();
}},members:{__fh:null,__fq:null,__fr:false,__fs:true,__ft:true,__fu:null,__fv:null,__fw:null,__fx:null,__fy:null,__fz:null,__fA:null,__fi:null,__fj:null,__fB:null,__fC:null,__fD:null,__fE:null,__fF:null,_scheduleChildrenUpdate:function(){if(this.__fE){return;
}this.__fE=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
},_createDomElement:function(){return qx.bom.Element.create(this.__fh);
},__fG:function(){var length;
var bi=this.__fD;

if(bi){length=bi.length;
var bj;

for(var i=0;i<length;i++){bj=bi[i];

if(bj.__ft&&bj.__fs&&!bj.__fq){bj.__fG();
}}}
if(!this.__fq){this.__fq=this._createDomElement();
this.__fq.$$element=this.$$hash;
this._copyData(false);

if(bi&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__fE){this._syncChildren();
}}delete this.__fE;
},_insertChildren:function(){var bk=this.__fD;
var length=bk.length;
var bm;

if(length>2){var bl=document.createDocumentFragment();

for(var i=0;i<length;i++){bm=bk[i];

if(bm.__fq&&bm.__fs){bl.appendChild(bm.__fq);
}}this.__fq.appendChild(bl);
}else{var bl=this.__fq;

for(var i=0;i<length;i++){bm=bk[i];

if(bm.__fq&&bm.__fs){bl.appendChild(bm.__fq);
}}}},_syncChildren:function(){var br;
var bw=qx.core.ObjectRegistry;
var bn=this.__fD;
var bu=bn.length;
var bo;
var bs;
var bq=this.__fq;
var bt=bq.childNodes;
var bp=0;
var bv;
for(var i=bt.length-1;i>=0;i--){bv=bt[i];
bs=bw.fromHashCode(bv.$$element);

if(!bs||!bs.__fs||bs.__fF!==this){bq.removeChild(bv);
}}for(var i=0;i<bu;i++){bo=bn[i];
if(bo.__fs){bs=bo.__fq;
bv=bt[bp];

if(!bs){continue;
}if(bs!=bv){if(bv){bq.insertBefore(bs,bv);
}else{bq.appendChild(bs);
}}bp++;
}}},_copyData:function(bx){var bB=this.__fq;
var bA=this.__fj;

if(bA){var by=qx.bom.element.Attribute;

for(var bC in bA){by.set(bB,bC,bA[bC]);
}}var bA=this.__fi;

if(bA){var bz=qx.bom.element.Style;

if(bx){bz.setStyles(bB,bA);
}else{bz.setCss(bB,bz.compile(bA));
}}var bA=this.__fB;

if(bA){for(var bC in bA){this._applyProperty(bC,bA[bC]);
}}var bA=this.__fC;

if(bA){qx.event.Registration.getManager(bB).importListeners(bB,bA);
delete this.__fC;
}},_syncData:function(){var bH=this.__fq;
var bG=qx.bom.element.Attribute;
var bE=qx.bom.element.Style;
var bF=this.__fz;

if(bF){var bK=this.__fj;

if(bK){var bI;

for(var bJ in bF){bI=bK[bJ];

if(bI!==undefined){bG.set(bH,bJ,bI);
}else{bG.reset(bH,bJ);
}}}this.__fz=null;
}var bF=this.__fy;

if(bF){var bK=this.__fi;

if(bK){var bD={};

for(var bJ in bF){bD[bJ]=bK[bJ];
}bE.setStyles(bH,bD);
}this.__fy=null;
}var bF=this.__fA;

if(bF){var bK=this.__fB;

if(bK){var bI;

for(var bJ in bF){this._applyProperty(bJ,bK[bJ]);
}}this.__fA=null;
}},__fH:function(){var bL=this;
while(bL){if(bL.__fr){return true;
}
if(!bL.__fs||!bL.__ft){return false;
}bL=bL.__fF;
}return false;
},__fI:function(bM){if(bM.__fF===this){throw new Error("Child is already in: "+bM);
}
if(bM.__fr){throw new Error("Root elements could not be inserted into other ones.");
}if(bM.__fF){bM.__fF.remove(bM);
}bM.__fF=this;
if(!this.__fD){this.__fD=[];
}if(this.__fq){this._scheduleChildrenUpdate();
}},__fJ:function(bN){if(bN.__fF!==this){throw new Error("Has no child: "+bN);
}if(this.__fq){this._scheduleChildrenUpdate();
}delete bN.__fF;
},__fK:function(bO){if(bO.__fF!==this){throw new Error("Has no child: "+bO);
}if(this.__fq){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__fD||null;
},getChild:function(bP){var bQ=this.__fD;
return bQ&&bQ[bP]||null;
},hasChildren:function(){var bR=this.__fD;
return bR&&bR[0]!==undefined;
},indexOf:function(bS){var bT=this.__fD;
return bT?bT.indexOf(bS):-1;
},hasChild:function(bU){var bV=this.__fD;
return bV&&bV.indexOf(bU)!==-1;
},add:function(bW){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__fI(arguments[i]);
}this.__fD.push.apply(this.__fD,arguments);
}else{this.__fI(bW);
this.__fD.push(bW);
}return this;
},addAt:function(bX,bY){this.__fI(bX);
qx.lang.Array.insertAt(this.__fD,bX,bY);
return this;
},remove:function(ca){var cb=this.__fD;

if(!cb){return;
}
if(arguments[1]){var cc;

for(var i=0,l=arguments.length;i<l;i++){cc=arguments[i];
this.__fJ(cc);
qx.lang.Array.remove(cb,cc);
}}else{this.__fJ(ca);
qx.lang.Array.remove(cb,ca);
}return this;
},removeAt:function(cd){var ce=this.__fD;

if(!ce){throw new Error("Has no children!");
}var cf=ce[cd];

if(!cf){throw new Error("Has no child at this position!");
}this.__fJ(cf);
qx.lang.Array.removeAt(this.__fD,cd);
return this;
},removeAll:function(){var cg=this.__fD;

if(cg){for(var i=0,l=cg.length;i<l;i++){this.__fJ(cg[i]);
}cg.length=0;
}return this;
},getParent:function(){return this.__fF||null;
},insertInto:function(parent,ch){parent.__fI(this);

if(ch==null){parent.__fD.push(this);
}else{qx.lang.Array.insertAt(this.__fD,this,ch);
}return this;
},insertBefore:function(ci){var parent=ci.__fF;
parent.__fI(this);
qx.lang.Array.insertBefore(parent.__fD,this,ci);
return this;
},insertAfter:function(cj){var parent=cj.__fF;
parent.__fI(this);
qx.lang.Array.insertAfter(parent.__fD,this,cj);
return this;
},moveTo:function(ck){var parent=this.__fF;
parent.__fK(this);
var cl=parent.__fD.indexOf(this);

if(cl===ck){throw new Error("Could not move to same index!");
}else if(cl<ck){ck--;
}qx.lang.Array.removeAt(parent.__fD,cl);
qx.lang.Array.insertAt(parent.__fD,this,ck);
return this;
},moveBefore:function(cm){var parent=this.__fF;
return this.moveTo(parent.__fD.indexOf(cm));
},moveAfter:function(cn){var parent=this.__fF;
return this.moveTo(parent.__fD.indexOf(cn)+1);
},free:function(){var parent=this.__fF;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__fD){return;
}parent.__fJ(this);
qx.lang.Array.remove(parent.__fD,this);
return this;
},getDomElement:function(){return this.__fq||null;
},getNodeName:function(){return this.__fh;
},setNodeName:function(name){this.__fh=name;
},setRoot:function(co){this.__fr=co;
},useMarkup:function(cp){if(this.__fq){throw new Error("Could not overwrite existing element!");
}if((qx.core.Environment.get(h)==b)){var cq=document.createElement(d);
}else{var cq=qx.bom.Element.getHelperElement();
}cq.innerHTML=cp;
this.useElement(cq.firstChild);
return this.__fq;
},useElement:function(cr){if(this.__fq){throw new Error("Could not overwrite existing element!");
}this.__fq=cr;
this.__fq.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var ct=this.getAttribute(q);

if(ct>=1){return true;
}var cs=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(ct>=0&&cs[this.__fh]){return true;
}return false;
},setSelectable:qx.core.Environment.select(h,{"webkit":function(cu){this.setAttribute(k,cu?g:j);
this.setStyle(w,cu?f:a);
},"gecko":function(cv){this.setAttribute(k,cv?g:j);
this.setStyle(p,cv?f:v);
},"default":function(cw){this.setAttribute(k,cw?g:j);
}}),isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__fh];
},include:function(){if(this.__fs){return;
}delete this.__fs;

if(this.__fF){this.__fF._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__fs){return;
}this.__fs=false;

if(this.__fF){this.__fF._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__fs===true;
},show:function(){if(this.__ft){return;
}
if(this.__fq){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}if(this.__fF){this.__fF._scheduleChildrenUpdate();
}delete this.__ft;
},hide:function(){if(!this.__ft){return;
}
if(this.__fq){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}this.__ft=false;
},isVisible:function(){return this.__ft===true;
},scrollChildIntoViewX:function(cx,cy,cz){var cA=this.__fq;
var cB=cx.getDomElement();

if(cz!==false&&cA&&cA.offsetWidth&&cB&&cB.offsetWidth){qx.bom.element.Scroll.intoViewX(cB,cA,cy);
}else{this.__fu={element:cx,align:cy};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__fw;
},scrollChildIntoViewY:function(cC,cD,cE){var cF=this.__fq;
var cG=cC.getDomElement();

if(cE!==false&&cF&&cF.offsetWidth&&cG&&cG.offsetWidth){qx.bom.element.Scroll.intoViewY(cG,cF,cD);
}else{this.__fv={element:cC,align:cD};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__fx;
},scrollToX:function(x,cH){var cI=this.__fq;

if(cH!==true&&cI&&cI.offsetWidth){cI.scrollLeft=x;
delete this.__fw;
}else{this.__fw=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__fu;
},getScrollX:function(){var cJ=this.__fq;

if(cJ){return cJ.scrollLeft;
}return this.__fw||0;
},scrollToY:function(y,cK){var cL=this.__fq;

if(cK!==true&&cL&&cL.offsetWidth){cL.scrollTop=y;
delete this.__fx;
}else{this.__fx=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__fv;
},getScrollY:function(){var cM=this.__fq;

if(cM){return cM.scrollTop;
}return this.__fx||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(F,this.__fM,this);
},enableScrolling:function(){this.removeListener(F,this.__fM,this);
},__fL:null,__fM:function(e){if(!this.__fL){this.__fL=true;
this.__fq.scrollTop=0;
this.__fq.scrollLeft=0;
delete this.__fL;
}},getTextSelection:function(){var cN=this.__fq;

if(cN){return qx.bom.Selection.get(cN);
}return null;
},getTextSelectionLength:function(){var cO=this.__fq;

if(cO){return qx.bom.Selection.getLength(cO);
}return null;
},getTextSelectionStart:function(){var cP=this.__fq;

if(cP){return qx.bom.Selection.getStart(cP);
}return null;
},getTextSelectionEnd:function(){var cQ=this.__fq;

if(cQ){return qx.bom.Selection.getEnd(cQ);
}return null;
},setTextSelection:function(cR,cS){var cT=this.__fq;

if(cT){qx.bom.Selection.set(cT,cR,cS);
return;
}qx.html.Element.__fk[this.toHashCode()]={element:this,start:cR,end:cS};
qx.html.Element._scheduleFlush(m);
},clearTextSelection:function(){var cU=this.__fq;

if(cU){qx.bom.Selection.clear(cU);
}delete qx.html.Element.__fk[this.toHashCode()];
},__fN:function(cV,cW){var cX=qx.html.Element._actions;
cX.push({type:cV,element:this,args:cW||[]});
qx.html.Element._scheduleFlush(m);
},focus:function(){this.__fN(o);
},blur:function(){this.__fN(B);
},activate:function(){this.__fN(C);
},deactivate:function(){this.__fN(A);
},capture:function(cY){this.__fN(z,[cY!==false]);
},releaseCapture:function(){this.__fN(s);
},setStyle:function(da,dc,dd){if(!this.__fi){this.__fi={};
}
if(this.__fi[da]==dc){return;
}
if(dc==null){delete this.__fi[da];
}else{this.__fi[da]=dc;
}if(this.__fq){if(dd){qx.bom.element.Style.set(this.__fq,da,dc);
return this;
}if(!this.__fy){this.__fy={};
}this.__fy[da]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},setStyles:function(de,df){var dg=qx.bom.element.Style;

if(!this.__fi){this.__fi={};
}
if(this.__fq){if(!this.__fy){this.__fy={};
}
for(var di in de){var dh=de[di];

if(this.__fi[di]==dh){continue;
}
if(dh==null){delete this.__fi[di];
}else{this.__fi[di]=dh;
}if(df){dg.set(this.__fq,di,dh);
continue;
}this.__fy[di]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}else{for(var di in de){var dh=de[di];

if(this.__fi[di]==dh){continue;
}
if(dh==null){delete this.__fi[di];
}else{this.__fi[di]=dh;
}}}return this;
},removeStyle:function(dj,dk){this.setStyle(dj,null,dk);
},getStyle:function(dl){return this.__fi?this.__fi[dl]:null;
},getAllStyles:function(){return this.__fi||null;
},setAttribute:function(dm,dn,dp){if(!this.__fj){this.__fj={};
}
if(this.__fj[dm]==dn){return;
}
if(dn==null){delete this.__fj[dm];
}else{this.__fj[dm]=dn;
}if(this.__fq){if(dp){qx.bom.element.Attribute.set(this.__fq,dm,dn);
return this;
}if(!this.__fz){this.__fz={};
}this.__fz[dm]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},setAttributes:function(dq,dr){for(var ds in dq){this.setAttribute(ds,dq[ds],dr);
}return this;
},removeAttribute:function(dt,du){this.setAttribute(dt,null,du);
},getAttribute:function(dv){return this.__fj?this.__fj[dv]:null;
},_applyProperty:function(name,dw){},_setProperty:function(dx,dy,dz){if(!this.__fB){this.__fB={};
}
if(this.__fB[dx]==dy){return;
}
if(dy==null){delete this.__fB[dx];
}else{this.__fB[dx]=dy;
}if(this.__fq){if(dz){this._applyProperty(dx,dy);
return this;
}if(!this.__fA){this.__fA={};
}this.__fA[dx]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},_removeProperty:function(dA,dB){this._setProperty(dA,null,dB);
},_getProperty:function(dC){var dD=this.__fB;

if(!dD){return null;
}var dE=dD[dC];
return dE==null?null:dE;
},addListener:function(dF,dG,self,dH){var dI;

if(this.$$disposed){return null;
}
if(this.__fq){return qx.event.Registration.addListener(this.__fq,dF,dG,self,dH);
}
if(!this.__fC){this.__fC={};
}
if(dH==null){dH=false;
}var dJ=qx.event.Manager.getNextUniqueId();
var dK=dF+(dH?D:t)+dJ;
this.__fC[dK]={type:dF,listener:dG,self:self,capture:dH,unique:dJ};
return dK;
},removeListener:function(dL,dM,self,dN){var dO;

if(this.$$disposed){return null;
}
if(this.__fq){qx.event.Registration.removeListener(this.__fq,dL,dM,self,dN);
}else{var dQ=this.__fC;
var dP;

if(dN==null){dN=false;
}
for(var dR in dQ){dP=dQ[dR];
if(dP.listener===dM&&dP.self===self&&dP.capture===dN&&dP.type===dL){delete dQ[dR];
break;
}}}return this;
},removeListenerById:function(dS){if(this.$$disposed){return null;
}
if(this.__fq){qx.event.Registration.removeListenerById(this.__fq,dS);
}else{delete this.__fC[dS];
}return this;
},hasListener:function(dT,dU){if(this.$$disposed){return false;
}
if(this.__fq){return qx.event.Registration.hasListener(this.__fq,dT,dU);
}var dW=this.__fC;
var dV;

if(dU==null){dU=false;
}
for(var dX in dW){dV=dW[dX];
if(dV.capture===dU&&dV.type===dT){return true;
}}return false;
}},defer:function(dY){dY.__fO=new qx.util.DeferredCall(dY.flush,dY);
},destruct:function(){var ea=this.__fq;

if(ea){qx.event.Registration.getManager(ea).removeAllListeners(ea);
ea.$$element=c;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__fF;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(r);
this.__fj=this.__fi=this.__fC=this.__fB=this.__fz=this.__fy=this.__fA=this.__fq=this.__fF=this.__fu=this.__fv=null;
}});
})();
(function(){var d="event.pointer",c="none",b="qx.html.Decorator",a="absolute";
qx.Class.define(b,{extend:qx.html.Element,construct:function(e,f){var g={position:a,top:0,left:0};

if(qx.core.Environment.get(d)){g.pointerEvents=c;
}qx.html.Element.call(this,null,g);
this.__fP=e;
this.__fQ=f||e.toHashCode();
this.useMarkup(e.getMarkup());
},members:{__fQ:null,__fP:null,getId:function(){return this.__fQ;
},getDecorator:function(){return this.__fP;
},resize:function(h,i){this.__fP.resize(this.getDomElement(),h,i);
},tint:function(j){this.__fP.tint(this.getDomElement(),j);
},getInsets:function(){return this.__fP.getInsets();
}},destruct:function(){this.__fP=null;
}});
})();
(function(){var e="orientationchange",d="resize",c="landscape",b="portrait",a="qx.event.handler.Orientation";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(f){qx.core.Object.call(this);
this.__fR=f;
this.__fS=f.getWindow();
this._initObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{orientationchange:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__fR:null,__fS:null,__fT:null,__fU:null,__fV:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){},unregisterEvent:function(l,m,n){},_initObserver:function(){this.__fV=qx.lang.Function.listener(this._onNative,this);
this.__fT=qx.bom.Event.supportsEvent(this.__fS,e)?e:d;
var Event=qx.bom.Event;
Event.addNativeListener(this.__fS,this.__fT,this.__fV);
},_stopObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fS,this.__fT,this.__fV);
},_onNative:qx.event.GlobalError.observeMethod(function(o){var q=qx.bom.Viewport;
var p=q.getOrientation();

if(this.__fU!=p){this.__fU=p;
var r=q.isLandscape()?c:b;
qx.event.Registration.fireEvent(this.__fS,e,qx.event.type.Orientation,[p,r]);
}})},destruct:function(){this._stopObserver();
this.__fR=this.__fS=null;
},defer:function(s){qx.event.Registration.addHandler(s);
}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this.__fW=b;
this.__fX=b.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__fW:null,__fX:null,canHandleEvent:function(c,d){},registerEvent:function(e,f,g){},unregisterEvent:function(h,i,j){}},destruct:function(){this.__fW=this.__fX=null;
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var t="qx.mobile.emulatetouch",s="touchend",r="touchstart",q="touchmove",p="event.touch",o="mousemove",n="engine.name",m="touchcancel",l="mouseup",k="mousedown",d="mshtml",j="qx.event.handler.Touch",h="useraction",c="swipe",b="qx.mobile.nativescroll",g="webkit",f="tap",i="x",a="y";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__fY=u;
this.__ga=u.getWindow();
this.__gb=this.__ga.document;
this._initTouchObserver();
this._initMouseObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{touchstart:1,touchmove:1,touchend:1,touchcancel:1,tap:1,swipe:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,MOUSE_TO_TOUCH_MAPPING:{"mousedown":"touchstart","mousemove":"touchmove","mouseup":"touchend"},SWIPE_DIRECTION:{x:["left","right"],y:["up","down"]},TAP_MAX_DISTANCE:qx.core.Environment.get("os.name")!="android"?10:40,SWIPE_MIN_DISTANCE:qx.core.Environment.get("os.name")!="android"?11:41,SWIPE_MIN_VELOCITY:0},members:{__gc:null,__gd:null,__fY:null,__ga:null,__gb:null,__ge:null,__gf:null,__gg:null,__gh:null,__gi:false,__gj:null,canHandleEvent:function(v,w){},registerEvent:function(x,y,z){},unregisterEvent:function(A,B,C){},__gk:function(D){var E=qx.bom.Event.getTarget(D);
if((qx.core.Environment.get(n)==g)){if(E&&E.nodeType==3){E=E.parentNode;
}}return E;
},__gl:function(F,G,H,I){if(!H){H=this.__gk(F);
}var G=G||F.type;

if(H&&H.nodeType){qx.event.Registration.fireEvent(H,G,I||qx.event.type.Touch,[F,H,null,true,true]);
}qx.event.Registration.fireEvent(this.__ga,h,qx.event.type.Data,[G]);
},__gm:function(J,K,L){if(!L){L=this.__gk(J);
}var K=K||J.type;

if(K==r){this.__gn(J,L);
}else if(K==q){this.__go(J,L);
}else if(K==s){this.__gp(J,L);
}},__gn:function(M,N){var O=M.changedTouches[0];
this.__ge=O.screenX;
this.__gf=O.screenY;
this.__gg=new Date().getTime();
this.__gh=M.changedTouches.length===1;
},__go:function(P,Q){if(this.__gh&&P.changedTouches.length>1){this.__gh=false;
}},__gp:function(R,S){if(this.__gh){var T=R.changedTouches[0];
var V={x:T.screenX-this.__ge,y:T.screenY-this.__gf};
var W=qx.event.handler.Touch;

if(this.__gj==S&&Math.abs(V.x)<=W.TAP_MAX_DISTANCE&&Math.abs(V.y)<=W.TAP_MAX_DISTANCE){this.__gl(R,f,S,qx.event.type.Tap);
}else{var U=this.__gq(R,S,V);

if(U){R.swipe=U;
this.__gl(R,c,S,qx.event.type.Swipe);
}}}},__gq:function(X,Y,ba){var be=qx.event.handler.Touch;
var bf=new Date().getTime()-this.__gg;
var bh=(Math.abs(ba.x)>=Math.abs(ba.y))?i:a;
var bb=ba[bh];
var bc=be.SWIPE_DIRECTION[bh][bb<0?0:1];
var bg=(bf!==0)?bb/bf:0;
var bd=null;

if(Math.abs(bg)>=be.SWIPE_MIN_VELOCITY&&Math.abs(bb)>=be.SWIPE_MIN_DISTANCE){bd={startTime:this.__gg,duration:bf,axis:bh,direction:bc,distance:bb,velocity:bg};
}return bd;
},__gr:qx.core.Environment.select(t,{"true":function(bi){var bj=bi.type;
var bl=qx.event.handler.Touch.MOUSE_TO_TOUCH_MAPPING;

if(bl[bj]){bj=bl[bj];
if(bj==r&&this.__gs(bi)){this.__gi=true;
}else if(bj==s){this.__gi=false;
}var bm=this.__gt(bi);
var bk=(bj==s?[]:[bm]);
bi.touches=bk;
bi.targetTouches=bk;
bi.changedTouches=[bm];
}return bj;
},"default":qx.lang.Function.empty}),__gs:qx.core.Environment.select(t,{"true":function(bn){if((qx.core.Environment.get(n)==d)){var bo=1;
}else{var bo=0;
}return bn.button==bo;
},"default":qx.lang.Function.empty}),__gt:qx.core.Environment.select(t,{"true":function(bp){var bq=this.__gk(bp);
return {clientX:bp.clientX,clientY:bp.clientY,screenX:bp.screenX,screenY:bp.screenY,pageX:bp.pageX,pageY:bp.pageY,identifier:1,target:bq};
},"default":qx.lang.Function.empty}),_initTouchObserver:function(){this.__gc=qx.lang.Function.listener(this._onTouchEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__gb,r,this.__gc);
Event.addNativeListener(this.__gb,q,this.__gc);
Event.addNativeListener(this.__gb,s,this.__gc);
Event.addNativeListener(this.__gb,m,this.__gc);
},_initMouseObserver:qx.core.Environment.select(t,{"true":function(){if(!qx.core.Environment.get(p)){this.__gd=qx.lang.Function.listener(this._onMouseEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__gb,k,this.__gd);
Event.addNativeListener(this.__gb,o,this.__gd);
Event.addNativeListener(this.__gb,l,this.__gd);
}},"default":qx.lang.Function.empty}),_stopTouchObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__gb,r,this.__gc);
Event.removeNativeListener(this.__gb,q,this.__gc);
Event.removeNativeListener(this.__gb,s,this.__gc);
Event.removeNativeListener(this.__gb,m,this.__gc);
},_stopMouseObserver:qx.core.Environment.select(t,{"true":function(){if(!qx.core.Environment.get(p)){var Event=qx.bom.Event;
Event.removeNativeListener(this.__gb,k,this.__gd);
Event.removeNativeListener(this.__gb,o,this.__gd);
Event.removeNativeListener(this.__gb,l,this.__gd);
}},"default":qx.lang.Function.empty}),_onTouchEvent:qx.event.GlobalError.observeMethod(function(br){this._commonTouchEventHandler(br);
}),_onMouseEvent:qx.core.Environment.select(t,{"true":qx.event.GlobalError.observeMethod(function(bs){if(!qx.core.Environment.get(p)){if(bs.type==o&&!this.__gi){return;
}var bt=this.__gr(bs);
this._commonTouchEventHandler(bs,bt);
}}),"default":qx.lang.Function.empty}),_commonTouchEventHandler:function(bu,bv){var bv=bv||bu.type;

if(bv==r){this.__gj=this.__gk(bu);
}this.__gl(bu,bv);
this.__gm(bu,bv);
}},destruct:function(){this._stopTouchObserver();
this._stopMouseObserver();
this.__fY=this.__ga=this.__gb=this.__gj=null;
},defer:function(bw){qx.event.Registration.addHandler(bw);
if(qx.core.Environment.get(p)){if(qx.core.Environment.get(b)==false){document.addEventListener(q,function(e){e.preventDefault();
});
}qx.event.Registration.getManager(document).getHandler(bw);
}}});
})();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this.__gu=d;
this.__gv={};
qx.event.handler.Appear.__gw[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__gw:{},refresh:function(){var e=this.__gw;

for(var f in e){e[f].refresh();
}}},members:{__gu:null,__gv:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){var l=qx.core.ObjectRegistry.toHashCode(i)+j;
var m=this.__gv;

if(m&&!m[l]){m[l]=i;
i.$$displayed=i.offsetWidth>0;
}},unregisterEvent:function(n,o,p){var q=qx.core.ObjectRegistry.toHashCode(n)+o;
var r=this.__gv;

if(!r){return;
}
if(r[q]){delete r[q];
}},refresh:function(){var v=this.__gv;
var w;

for(var u in v){w=v[u];
var s=w.offsetWidth>0;

if((!!w.$$displayed)!==s){w.$$displayed=s;
var t=qx.event.Registration.createEvent(s?a:b);
this.__gu.dispatchEvent(w,t);
}}}},destruct:function(){this.__gu=this.__gv=null;
delete qx.event.handler.Appear.__gw[this.$$hash];
},defer:function(x){qx.event.Registration.addHandler(x);
}});
})();
(function(){var b="abstract",a="qx.event.dispatch.AbstractBubbling";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:b,construct:function(c){this._manager=c;
},members:{_getParent:function(d){throw new Error("Missing implementation");
},canDispatchEvent:function(e,event,f){return event.getBubbles();
},dispatchEvent:function(g,event,h){var parent=g;
var s=this._manager;
var p,w;
var n;
var r,u;
var t;
var v=[];
p=s.getListeners(g,h,true);
w=s.getListeners(g,h,false);

if(p){v.push(p);
}
if(w){v.push(w);
}var parent=this._getParent(g);
var l=[];
var k=[];
var m=[];
var q=[];
while(parent!=null){p=s.getListeners(parent,h,true);

if(p){m.push(p);
q.push(parent);
}w=s.getListeners(parent,h,false);

if(w){l.push(w);
k.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=m.length-1;i>=0;i--){t=q[i];
event.setCurrentTarget(t);
n=m[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||t;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(g);

for(var i=0,x=v.length;i<x;i++){n=v[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||g;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,x=l.length;i<x;i++){t=k[i];
event.setCurrentTarget(t);
n=l[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||t;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(b){return b.parentNode;
},canDispatchEvent:function(c,event,d){return c.nodeType!==undefined&&event.getBubbles();
}},defer:function(e){qx.event.Registration.addDispatcher(e);
}});
})();
(function(){var d="-",c="qx.event.handler.Element",b="load",a="iframe";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(e){qx.core.Object.call(this);
this._manager=e;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,load:true,scroll:true,select:true,reset:true,submit:true},CANCELABLE:{selectstart:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(f,g){if(g===b){return f.tagName.toLowerCase()!==a;
}else{return true;
}},registerEvent:function(h,i,j){var m=qx.core.ObjectRegistry.toHashCode(h);
var k=m+d+i;
var l=qx.lang.Function.listener(this._onNative,this,k);
qx.bom.Event.addNativeListener(h,i,l);
this._registeredEvents[k]={element:h,type:i,listener:l};
},unregisterEvent:function(n,o,p){var s=this._registeredEvents;

if(!s){return;
}var t=qx.core.ObjectRegistry.toHashCode(n);
var q=t+d+o;
var r=this._registeredEvents[q];

if(r){qx.bom.Event.removeNativeListener(n,o,r.listener);
}delete this._registeredEvents[q];
},_onNative:qx.event.GlobalError.observeMethod(function(u,v){var x=this._registeredEvents;

if(!x){return;
}var w=x[v];
var y=this.constructor.CANCELABLE[w.type];
qx.event.Registration.fireNonBubblingEvent(w.element,w.type,qx.event.type.Native,[u,undefined,undefined,undefined,y]);
})},destruct:function(){var z;
var A=this._registeredEvents;

for(var B in A){z=A[B];
qx.bom.Event.removeNativeListener(z.element,z.type,z.listener);
}this._manager=this._registeredEvents=null;
},defer:function(C){qx.event.Registration.addHandler(C);
}});
})();
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var t="mouseup",s="engine.name",r="click",q="mousedown",p="contextmenu",o="mousewheel",n="dblclick",m="os.name",l="mouseover",k="mouseout",d="ios",j="mousemove",g="on",c="engine.version",b="useraction",f="webkit",e="gecko",h="DOMMouseScroll",a="qx.event.handler.Mouse";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__gx=u;
this.__gy=u.getWindow();
this.__gz=this.__gy.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT+qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__gA:null,__gB:null,__gC:null,__gD:null,__gE:null,__gx:null,__gy:null,__gz:null,canHandleEvent:function(v,w){},registerEvent:qx.core.Environment.get(m)===
d?
function(x,y,z){x[g+y]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.core.Environment.get(m)===
d?
function(A,B,C){A[g+B]=undefined;
}:qx.lang.Function.returnNull,__gF:function(D,E,F){if(!F){F=qx.bom.Event.getTarget(D);
}if(F&&F.nodeType){qx.event.Registration.fireEvent(F,E||D.type,E==o?qx.event.type.MouseWheel:qx.event.type.Mouse,[D,F,null,true,true]);
}qx.event.Registration.fireEvent(this.__gy,b,qx.event.type.Data,[E||D.type]);
},__gG:function(){var H=[this.__gy,this.__gz,this.__gz.body];
var I=this.__gy;
var G=h;

for(var i=0;i<H.length;i++){if(qx.bom.Event.supportsEvent(H[i],o)){G=o;
I=H[i];
break;
}}return {type:G,target:I};
},_initButtonObserver:function(){this.__gA=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__gz,q,this.__gA);
Event.addNativeListener(this.__gz,t,this.__gA);
Event.addNativeListener(this.__gz,r,this.__gA);
Event.addNativeListener(this.__gz,n,this.__gA);
Event.addNativeListener(this.__gz,p,this.__gA);
},_initMoveObserver:function(){this.__gB=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__gz,j,this.__gB);
Event.addNativeListener(this.__gz,l,this.__gB);
Event.addNativeListener(this.__gz,k,this.__gB);
},_initWheelObserver:function(){this.__gC=qx.lang.Function.listener(this._onWheelEvent,this);
var J=this.__gG();
qx.bom.Event.addNativeListener(J.target,J.type,this.__gC);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__gz,q,this.__gA);
Event.removeNativeListener(this.__gz,t,this.__gA);
Event.removeNativeListener(this.__gz,r,this.__gA);
Event.removeNativeListener(this.__gz,n,this.__gA);
Event.removeNativeListener(this.__gz,p,this.__gA);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__gz,j,this.__gB);
Event.removeNativeListener(this.__gz,l,this.__gB);
Event.removeNativeListener(this.__gz,k,this.__gB);
},_stopWheelObserver:function(){var K=this.__gG();
qx.bom.Event.removeNativeListener(K.target,K.type,this.__gC);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(L){this.__gF(L);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(M){var N=M.type;
var O=qx.bom.Event.getTarget(M);
if(qx.core.Environment.get(s)==e||qx.core.Environment.get(s)==f){if(O&&O.nodeType==3){O=O.parentNode;
}}
if(this.__gH){this.__gH(M,N,O);
}
if(this.__gJ){this.__gJ(M,N,O);
}this.__gF(M,N,O);

if(this.__gI){this.__gI(M,N,O);
}
if(this.__gK){this.__gK(M,N,O);
}this.__gD=N;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(P){this.__gF(P,o);
}),__gH:qx.core.Environment.select(s,{"webkit":function(Q,R,S){if(parseFloat(qx.core.Environment.get(c))<530){if(R==p){this.__gF(Q,t,S);
}}},"default":null}),__gI:qx.core.Environment.select(s,{"opera":function(T,U,V){if(U==t&&T.button==2){this.__gF(T,p,V);
}},"default":null}),__gJ:qx.core.Environment.select(s,{"mshtml":function(W,X,Y){if(W.target!==undefined){return;
}
if(X==t&&this.__gD==r){this.__gF(W,q,Y);
}else if(X==n){this.__gF(W,r,Y);
}},"default":null}),__gK:qx.core.Environment.select(s,{"mshtml":null,"default":function(ba,bb,bc){switch(bb){case q:this.__gE=bc;
break;
case t:if(bc!==this.__gE){var bd=qx.dom.Hierarchy.getCommonParent(bc,this.__gE);
this.__gF(ba,r,bd);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__gx=this.__gy=this.__gz=this.__gE=null;
},defer:function(be){qx.event.Registration.addHandler(be);
}});
})();
(function(){var m="keydown",l="engine.name",k="keypress",j="NumLock",i="keyup",h="os.name",g="Enter",f="0",e="engine.version",d="9",bx="-",bw="+",bv="PrintScreen",bu="PageUp",bt="gecko",bs="A",br="Space",bq="Left",bp="F5",bo="Down",t="Up",u="F11",r="F6",s="useraction",p="F3",q="keyinput",n="Insert",o="F8",B="End",C="/",Q="Delete",M="*",Y="F1",T="F4",bk="Home",be="F2",H="F12",bn="PageDown",bm="mshtml",bl="F7",F="Win",J="osx",L="F9",O="webkit",R="cmd",U="F10",bb="Right",bg="Z",v="text",w="Escape",I="5",X="3",W="Meta",V="7",bd="Scroll",bc="CapsLock",S="input",ba="Control",a="Tab",bf="Shift",x="Pause",y="Unidentified",N="qx.event.handler.Keyboard",b="1",c="win",E="Apps",z="6",A="off",D="4",P="Alt",bi="2",bh="8",K="Backspace",bj="autoComplete",G=",";
qx.Class.define(N,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(by){qx.core.Object.call(this);
this.__gL=by;
this.__gM=by.getWindow();
if((qx.core.Environment.get(l)==bt)){this.__gN=this.__gM;
}else{this.__gN=this.__gM.document.documentElement;
}this.__gO={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(bz){if(this._identifierToKeyCodeMap[bz]){return true;
}
if(bz.length!=1){return false;
}
if(bz>=f&&bz<=d){return true;
}
if(bz>=bs&&bz<=bg){return true;
}
switch(bz){case bw:case bx:case M:case C:return true;
default:return false;
}},isPrintableKeyIdentifier:function(bA){if(bA===br){return true;
}else{return this._identifierToKeyCodeMap[bA]?false:true;
}}},members:{__gP:null,__gL:null,__gM:null,__gN:null,__gO:null,__gQ:null,__gR:null,__gS:null,canHandleEvent:function(bB,bC){},registerEvent:function(bD,bE,bF){},unregisterEvent:function(bG,bH,bI){},_fireInputEvent:function(bJ,bK){var bL=this.__gT();
if(bL&&bL.offsetWidth!=0){var event=qx.event.Registration.createEvent(q,qx.event.type.KeyInput,[bJ,bL,bK]);
this.__gL.dispatchEvent(bL,event);
}if(this.__gM){qx.event.Registration.fireEvent(this.__gM,s,qx.event.type.Data,[q]);
}},_fireSequenceEvent:function(bM,bN,bO){var bP=this.__gT();
var bQ=bM.keyCode;
var event=qx.event.Registration.createEvent(bN,qx.event.type.KeySequence,[bM,bP,bO]);
this.__gL.dispatchEvent(bP,event);
if(qx.core.Environment.get(l)==bm||qx.core.Environment.get(l)==O){if(bN==m&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(bQ)&&!this._emulateKeyPress[bQ]){this._fireSequenceEvent(bM,k,bO);
}}}if(this.__gM){qx.event.Registration.fireEvent(this.__gM,s,qx.event.type.Data,[bN]);
}},__gT:function(){var bR=this.__gL.getHandler(qx.event.handler.Focus);
var bS=bR.getActive();
if(!bS||bS.offsetWidth==0){bS=bR.getFocus();
}if(!bS||bS.offsetWidth==0){bS=this.__gL.getWindow().document.body;
}return bS;
},_initKeyObserver:function(){this.__gP=qx.lang.Function.listener(this.__gU,this);
this.__gS=qx.lang.Function.listener(this.__gW,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__gN,i,this.__gP);
Event.addNativeListener(this.__gN,m,this.__gP);
Event.addNativeListener(this.__gN,k,this.__gS);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__gN,i,this.__gP);
Event.removeNativeListener(this.__gN,m,this.__gP);
Event.removeNativeListener(this.__gN,k,this.__gS);

for(var bU in (this.__gR||{})){var bT=this.__gR[bU];
Event.removeNativeListener(bT.target,k,bT.callback);
}delete (this.__gR);
},__gU:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(bV){bV=window.event||bV;
var bY=bV.keyCode;
var bW=0;
var bX=bV.type;
if(!(this.__gO[bY]==m&&bX==m)){this._idealKeyHandler(bY,bW,bX,bV);
}if(bX==m){if(this._isNonPrintableKeyCode(bY)||this._emulateKeyPress[bY]){this._idealKeyHandler(bY,bW,k,bV);
}}this.__gO[bY]=bX;
},"gecko":function(ca){var ce=this._keyCodeFix[ca.keyCode]||ca.keyCode;
var cc=0;
var cd=ca.type;
if(qx.core.Environment.get(h)==c){var cb=ce?this._keyCodeToIdentifier(ce):this._charCodeToIdentifier(cc);

if(!(this.__gO[cb]==m&&cd==m)){this._idealKeyHandler(ce,cc,cd,ca);
}this.__gO[cb]=cd;
}else{this._idealKeyHandler(ce,cc,cd,ca);
}this.__gV(ca.target,cd,ce);
},"webkit":function(cf){var ci=0;
var cg=0;
var ch=cf.type;
if(parseFloat(qx.core.Environment.get(e))<525.13){if(ch==i||ch==m){ci=this._charCode2KeyCode[cf.charCode]||cf.keyCode;
}else{if(this._charCode2KeyCode[cf.charCode]){ci=this._charCode2KeyCode[cf.charCode];
}else{cg=cf.charCode;
}}this._idealKeyHandler(ci,cg,ch,cf);
}else{ci=cf.keyCode;
this._idealKeyHandler(ci,cg,ch,cf);
if(ch==m){if(this._isNonPrintableKeyCode(ci)||this._emulateKeyPress[ci]){this._idealKeyHandler(ci,cg,k,cf);
}}this.__gO[ci]=ch;
}},"opera":function(cj){this.__gQ=cj.keyCode;
this._idealKeyHandler(cj.keyCode,0,cj.type,cj);
}})),__gV:qx.core.Environment.select(l,{"gecko":function(ck,cl,cm){if(cl===m&&(cm==33||cm==34||cm==38||cm==40)&&ck.type==v&&ck.tagName.toLowerCase()===S&&ck.getAttribute(bj)!==A){if(!this.__gR){this.__gR={};
}var co=qx.core.ObjectRegistry.toHashCode(ck);

if(this.__gR[co]){return;
}var self=this;
this.__gR[co]={target:ck,callback:function(cp){qx.bom.Event.stopPropagation(cp);
self.__gW(cp);
}};
var cn=qx.event.GlobalError.observeMethod(this.__gR[co].callback);
qx.bom.Event.addNativeListener(ck,k,cn);
}},"default":null}),__gW:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(cq){cq=window.event||cq;

if(this._charCode2KeyCode[cq.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cq.keyCode],0,cq.type,cq);
}else{this._idealKeyHandler(0,cq.keyCode,cq.type,cq);
}},"gecko":function(cr){var cu=this._keyCodeFix[cr.keyCode]||cr.keyCode;
var cs=cr.charCode;
var ct=cr.type;
this._idealKeyHandler(cu,cs,ct,cr);
},"webkit":function(cv){if(parseFloat(qx.core.Environment.get(e))<525.13){var cy=0;
var cw=0;
var cx=cv.type;

if(cx==i||cx==m){cy=this._charCode2KeyCode[cv.charCode]||cv.keyCode;
}else{if(this._charCode2KeyCode[cv.charCode]){cy=this._charCode2KeyCode[cv.charCode];
}else{cw=cv.charCode;
}}this._idealKeyHandler(cy,cw,cx,cv);
}else{if(this._charCode2KeyCode[cv.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cv.keyCode],0,cv.type,cv);
}else{this._idealKeyHandler(0,cv.keyCode,cv.type,cv);
}}},"opera":function(cz){var cB=cz.keyCode;
var cA=cz.type;
if(cB!=this.__gQ){this._idealKeyHandler(0,this.__gQ,cA,cz);
}else{if(this._keyCodeToIdentifierMap[cz.keyCode]){this._idealKeyHandler(cz.keyCode,0,cz.type,cz);
}else{this._idealKeyHandler(0,cz.keyCode,cz.type,cz);
}}}})),_idealKeyHandler:function(cC,cD,cE,cF){var cG;
if(cC||(!cC&&!cD)){cG=this._keyCodeToIdentifier(cC);
this._fireSequenceEvent(cF,cE,cG);
}else{cG=this._charCodeToIdentifier(cD);
this._fireSequenceEvent(cF,k,cG);
this._fireInputEvent(cF,cD);
}},_specialCharCodeMap:{8:K,9:a,13:g,27:w,32:br},_emulateKeyPress:qx.core.Environment.select(l,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bf,17:ba,18:P,20:bc,224:W,37:bq,38:t,39:bb,40:bo,33:bu,34:bn,35:B,36:bk,45:n,46:Q,112:Y,113:be,114:p,115:T,116:bp,117:r,118:bl,119:o,120:L,121:U,122:u,123:H,144:j,44:bv,145:bd,19:x,91:qx.core.Environment.get(h)==J?R:F,92:F,93:qx.core.Environment.get(h)==J?R:E},_numpadToCharCode:{96:f.charCodeAt(0),97:b.charCodeAt(0),98:bi.charCodeAt(0),99:X.charCodeAt(0),100:D.charCodeAt(0),101:I.charCodeAt(0),102:z.charCodeAt(0),103:V.charCodeAt(0),104:bh.charCodeAt(0),105:d.charCodeAt(0),106:M.charCodeAt(0),107:bw.charCodeAt(0),109:bx.charCodeAt(0),110:G.charCodeAt(0),111:C.charCodeAt(0)},_charCodeA:bs.charCodeAt(0),_charCodeZ:bg.charCodeAt(0),_charCode0:f.charCodeAt(0),_charCode9:d.charCodeAt(0),_isNonPrintableKeyCode:function(cH){return this._keyCodeToIdentifierMap[cH]?true:false;
},_isIdentifiableKeyCode:function(cI){if(cI>=this._charCodeA&&cI<=this._charCodeZ){return true;
}if(cI>=this._charCode0&&cI<=this._charCode9){return true;
}if(this._specialCharCodeMap[cI]){return true;
}if(this._numpadToCharCode[cI]){return true;
}if(this._isNonPrintableKeyCode(cI)){return true;
}return false;
},_keyCodeToIdentifier:function(cJ){if(this._isIdentifiableKeyCode(cJ)){var cK=this._numpadToCharCode[cJ];

if(cK){return String.fromCharCode(cK);
}return (this._keyCodeToIdentifierMap[cJ]||this._specialCharCodeMap[cJ]||String.fromCharCode(cJ));
}else{return y;
}},_charCodeToIdentifier:function(cL){return this._specialCharCodeMap[cL]||String.fromCharCode(cL).toUpperCase();
},_identifierToKeyCode:function(cM){return qx.event.handler.Keyboard._identifierToKeyCodeMap[cM]||cM.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__gQ=this.__gL=this.__gM=this.__gN=this.__gO=null;
},defer:function(cN,cO){qx.event.Registration.addHandler(cN);
if(!cN._identifierToKeyCodeMap){cN._identifierToKeyCodeMap={};

for(var cP in cO._keyCodeToIdentifierMap){cN._identifierToKeyCodeMap[cO._keyCodeToIdentifierMap[cP]]=parseInt(cP,10);
}
for(var cP in cO._specialCharCodeMap){cN._identifierToKeyCodeMap[cO._specialCharCodeMap[cP]]=parseInt(cP,10);
}}
if((qx.core.Environment.get(l)==bm)){cO._charCode2KeyCode={13:13,27:27};
}else if((qx.core.Environment.get(l)==bt)){cO._keyCodeFix={12:cO._identifierToKeyCode(j)};
}else if((qx.core.Environment.get(l)==O)){if(parseFloat(qx.core.Environment.get(e))<525.13){cO._charCode2KeyCode={63289:cO._identifierToKeyCode(j),63276:cO._identifierToKeyCode(bu),63277:cO._identifierToKeyCode(bn),63275:cO._identifierToKeyCode(B),63273:cO._identifierToKeyCode(bk),63234:cO._identifierToKeyCode(bq),63232:cO._identifierToKeyCode(t),63235:cO._identifierToKeyCode(bb),63233:cO._identifierToKeyCode(bo),63272:cO._identifierToKeyCode(Q),63302:cO._identifierToKeyCode(n),63236:cO._identifierToKeyCode(Y),63237:cO._identifierToKeyCode(be),63238:cO._identifierToKeyCode(p),63239:cO._identifierToKeyCode(T),63240:cO._identifierToKeyCode(bp),63241:cO._identifierToKeyCode(r),63242:cO._identifierToKeyCode(bl),63243:cO._identifierToKeyCode(o),63244:cO._identifierToKeyCode(L),63245:cO._identifierToKeyCode(U),63246:cO._identifierToKeyCode(u),63247:cO._identifierToKeyCode(H),63248:cO._identifierToKeyCode(bv),3:cO._identifierToKeyCode(g),12:cO._identifierToKeyCode(j),13:cO._identifierToKeyCode(g)};
}else{cO._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var k="alias",j="copy",i="blur",h="mouseout",g="keydown",f="Ctrl",d="Shift",c="mousemove",b="move",a="mouseover",A="Alt",z="keyup",y="mouseup",x="dragend",w="on",v="mousedown",u="qxDraggable",t="drag",s="drop",r="qxDroppable",p="qx.event.handler.DragDrop",q="droprequest",n="dragstart",o="dragchange",l="dragleave",m="dragover";
qx.Class.define(p,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(B){qx.core.Object.call(this);
this.__gX=B;
this.__gY=B.getWindow().document.documentElement;
this.__gX.addListener(this.__gY,v,this._onMouseDown,this);
this.__hl();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__gX:null,__gY:null,__ha:null,__hb:null,__hc:null,__hd:null,__he:null,__hf:null,__hg:null,__hh:null,__hi:false,__hj:0,__hk:0,canHandleEvent:function(C,D){},registerEvent:function(E,F,G){},unregisterEvent:function(H,I,J){},addType:function(K){this.__hc[K]=true;
},addAction:function(L){this.__hd[L]=true;
},supportsType:function(M){return !!this.__hc[M];
},supportsAction:function(N){return !!this.__hd[N];
},getData:function(O){if(!this.__hs||!this.__ha){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__hc[O]){throw new Error("Unsupported data type: "+O+"!");
}
if(!this.__hf[O]){this.__hg=O;
this.__hn(q,this.__hb,this.__ha,false);
}
if(!this.__hf[O]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__hf[O]||null;
},getCurrentAction:function(){return this.__hh;
},addData:function(P,Q){this.__hf[P]=Q;
},getCurrentType:function(){return this.__hg;
},isSessionActive:function(){return this.__hi;
},__hl:function(){this.__hc={};
this.__hd={};
this.__he={};
this.__hf={};
},__hm:function(){if(this.__hb==null){return;
}var T=this.__hd;
var R=this.__he;
var S=null;

if(this.__hs){if(R.Shift&&R.Ctrl&&T.alias){S=k;
}else if(R.Shift&&R.Alt&&T.copy){S=j;
}else if(R.Shift&&T.move){S=b;
}else if(R.Alt&&T.alias){S=k;
}else if(R.Ctrl&&T.copy){S=j;
}else if(T.move){S=b;
}else if(T.copy){S=j;
}else if(T.alias){S=k;
}}
if(S!=this.__hh){this.__hh=S;
this.__hn(o,this.__hb,this.__ha,false);
}},__hn:function(U,V,W,X,Y){var bb=qx.event.Registration;
var ba=bb.createEvent(U,qx.event.type.Drag,[X,Y]);

if(V!==W){ba.setRelatedTarget(W);
}return bb.dispatchEvent(V,ba);
},__ho:function(bc){while(bc&&bc.nodeType==1){if(bc.getAttribute(u)==w){return bc;
}bc=bc.parentNode;
}return null;
},__hp:function(bd){while(bd&&bd.nodeType==1){if(bd.getAttribute(r)==w){return bd;
}bd=bd.parentNode;
}return null;
},__hq:function(){this.__hb=null;
this.__gX.removeListener(this.__gY,c,this._onMouseMove,this,true);
this.__gX.removeListener(this.__gY,y,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,i,this._onWindowBlur,this);
this.__hl();
},__hr:function(){if(this.__hi){this.__gX.removeListener(this.__gY,a,this._onMouseOver,this,true);
this.__gX.removeListener(this.__gY,h,this._onMouseOut,this,true);
this.__gX.removeListener(this.__gY,g,this._onKeyDown,this,true);
this.__gX.removeListener(this.__gY,z,this._onKeyUp,this,true);
this.__hn(x,this.__hb,this.__ha,false);
this.__hi=false;
}this.__hs=false;
this.__ha=null;
this.__hq();
},__hs:false,_onWindowBlur:function(e){this.__hr();
},_onKeyDown:function(e){var be=e.getKeyIdentifier();

switch(be){case A:case f:case d:if(!this.__he[be]){this.__he[be]=true;
this.__hm();
}}},_onKeyUp:function(e){var bf=e.getKeyIdentifier();

switch(bf){case A:case f:case d:if(this.__he[bf]){this.__he[bf]=false;
this.__hm();
}}},_onMouseDown:function(e){if(this.__hi){return;
}var bg=this.__ho(e.getTarget());

if(bg){this.__hj=e.getDocumentLeft();
this.__hk=e.getDocumentTop();
this.__hb=bg;
this.__gX.addListener(this.__gY,c,this._onMouseMove,this,true);
this.__gX.addListener(this.__gY,y,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,i,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__hs){this.__hn(s,this.__ha,this.__hb,false,e);
}if(this.__hi){e.stopPropagation();
}this.__hr();
},_onMouseMove:function(e){if(this.__hi){if(!this.__hn(t,this.__hb,this.__ha,true,e)){this.__hr();
}}else{if(Math.abs(e.getDocumentLeft()-this.__hj)>3||Math.abs(e.getDocumentTop()-this.__hk)>3){if(this.__hn(n,this.__hb,this.__ha,true,e)){this.__hi=true;
this.__gX.addListener(this.__gY,a,this._onMouseOver,this,true);
this.__gX.addListener(this.__gY,h,this._onMouseOut,this,true);
this.__gX.addListener(this.__gY,g,this._onKeyDown,this,true);
this.__gX.addListener(this.__gY,z,this._onKeyUp,this,true);
var bh=this.__he;
bh.Ctrl=e.isCtrlPressed();
bh.Shift=e.isShiftPressed();
bh.Alt=e.isAltPressed();
this.__hm();
}else{this.__hn(x,this.__hb,this.__ha,false);
this.__hq();
}}}},_onMouseOver:function(e){var bi=e.getTarget();
var bj=this.__hp(bi);

if(bj&&bj!=this.__ha){this.__hs=this.__hn(m,bj,this.__hb,true,e);
this.__ha=bj;
this.__hm();
}},_onMouseOut:function(e){var bl=this.__hp(e.getTarget());
var bk=this.__hp(e.getRelatedTarget());

if(bl&&bl!==bk&&bl==this.__ha){this.__hn(l,this.__ha,bk,false,e);
this.__ha=null;
this.__hs=false;
qx.event.Timer.once(this.__hm,this,0);
}}},destruct:function(){this.__hb=this.__ha=this.__gX=this.__gY=this.__hc=this.__hd=this.__he=this.__hf=null;
},defer:function(bm){qx.event.Registration.addHandler(bm);
}});
})();
(function(){var r="engine.name",q="mshtml",p="",o=" ",n=">",m="<",k="='",h="none",g="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",f="qx.bom.Element",b="webkit",d="' ",c="div",a="></";
qx.Class.define(f,{statics:{__ht:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__hu:{},__hv:{},allowCreationWithMarkup:function(s){if(!s){s=window;
}var t=s.location.href;

if(qx.bom.Element.__hv[t]==undefined){try{s.document.createElement(g);
qx.bom.Element.__hv[t]=true;
}catch(e){qx.bom.Element.__hv[t]=false;
}}return qx.bom.Element.__hv[t];
},getHelperElement:function(u){if(!u){u=window;
}var w=u.location.href;

if(!qx.bom.Element.__hu[w]){var v=qx.bom.Element.__hu[w]=u.document.createElement(c);
if(qx.core.Environment.get(r)==b){v.style.display=h;
u.document.body.appendChild(v);
}}return qx.bom.Element.__hu[w];
},create:function(name,x,y){if(!y){y=window;
}
if(!name){throw new Error("The tag name is missing!");
}var A=this.__ht;
var z=p;

for(var C in x){if(A[C]){z+=C+k+x[C]+d;
}}var D;
if(z!=p){if(qx.bom.Element.allowCreationWithMarkup(y)){D=y.document.createElement(m+name+o+z+n);
}else{var B=qx.bom.Element.getHelperElement(y);
B.innerHTML=m+name+o+z+a+name+n;
D=B.firstChild;
}}else{D=y.document.createElement(name);
}
for(var C in x){if(!A[C]){qx.bom.element.Attribute.set(D,C,x[C]);
}}return D;
},empty:function(E){return E.innerHTML=p;
},addListener:function(F,G,H,self,I){return qx.event.Registration.addListener(F,G,H,self,I);
},removeListener:function(J,K,L,self,M){return qx.event.Registration.removeListener(J,K,L,self,M);
},removeListenerById:function(N,O){return qx.event.Registration.removeListenerById(N,O);
},hasListener:function(P,Q,R){return qx.event.Registration.hasListener(P,Q,R);
},focus:function(S){qx.event.Registration.getManager(S).getHandler(qx.event.handler.Focus).focus(S);
},blur:function(T){qx.event.Registration.getManager(T).getHandler(qx.event.handler.Focus).blur(T);
},activate:function(U){qx.event.Registration.getManager(U).getHandler(qx.event.handler.Focus).activate(U);
},deactivate:function(V){qx.event.Registration.getManager(V).getHandler(qx.event.handler.Focus).deactivate(V);
},capture:function(W,X){qx.event.Registration.getManager(W).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(W,X);
},releaseCapture:function(Y){qx.event.Registration.getManager(Y).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(Y);
},matchesSelector:function(ba,bb){if(bb){return qx.bom.Selector.query(bb,ba.parentNode).length>0;
}else{return false;
}},clone:function(bc,bd){var bg;

if(bd||((qx.core.Environment.get(r)==q)&&!qx.xml.Document.isXmlDocument(bc))){var bk=qx.event.Registration.getManager(bc);
var be=qx.dom.Hierarchy.getDescendants(bc);
be.push(bc);
}if((qx.core.Environment.get(r)==q)){for(var i=0,l=be.length;i<l;i++){bk.toggleAttachedEvents(be[i],false);
}}var bg=bc.cloneNode(true);
if((qx.core.Environment.get(r)==q)){for(var i=0,l=be.length;i<l;i++){bk.toggleAttachedEvents(be[i],true);
}}if(bd===true){var bn=qx.dom.Hierarchy.getDescendants(bg);
bn.push(bg);
var bf,bi,bm,bh;

for(var i=0,bl=be.length;i<bl;i++){bm=be[i];
bf=bk.serializeListeners(bm);

if(bf.length>0){bi=bn[i];

for(var j=0,bj=bf.length;j<bj;j++){bh=bf[j];
bk.addListener(bi,bh.type,bh.handler,bh.self,bh.capture);
}}}}return bg;
}}});
})();
(function(){var c="landscape",b="qx.event.type.Orientation",a="portrait";
qx.Class.define(b,{extend:qx.event.type.Event,members:{__hw:null,__hx:null,init:function(d,e){qx.event.type.Event.prototype.init.call(this,false,false);
this.__hw=d;
this.__hx=e;
return this;
},clone:function(f){var g=qx.event.type.Event.prototype.clone.call(this,f);
g.__hw=this.__hw;
g.__hx=this.__hx;
return g;
},getOrientation:function(){return this.__hw;
},isLandscape:function(){return this.__hx==c;
},isPortrait:function(){return this.__hx==a;
}}});
})();
(function(){var c="os.name",b="qx.event.type.Dom",a="osx";
qx.Class.define(b,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(d,e){var e=qx.event.type.Native.prototype._cloneNativeEvent.call(this,d,e);
e.shiftKey=d.shiftKey;
e.ctrlKey=d.ctrlKey;
e.altKey=d.altKey;
e.metaKey=d.metaKey;
return e;
},getModifiers:function(){var g=0;
var f=this._native;

if(f.shiftKey){g|=qx.event.type.Dom.SHIFT_MASK;
}
if(f.ctrlKey){g|=qx.event.type.Dom.CTRL_MASK;
}
if(f.altKey){g|=qx.event.type.Dom.ALT_MASK;
}
if(f.metaKey){g|=qx.event.type.Dom.META_MASK;
}return g;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.core.Environment.get(c)==a){return this._native.metaKey;
}else{return this._native.ctrlKey;
}}}});
})();
(function(){var c="touchcancel",b="qx.event.type.Touch",a="touchend";
qx.Class.define(b,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(d,e){var e=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,d,e);
e.pageX=d.pageX;
e.pageY=d.pageY;
e.layerX=d.layerX;
e.layerY=d.layerY;
e.scale=d.scale;
e.rotation=d.rotation;
e.srcElement=d.srcElement;
e.targetTouches=[];

for(var i=0;i<d.targetTouches.length;i++){e.targetTouches[i]=d.targetTouches[i];
}e.changedTouches=[];

for(var i=0;i<d.changedTouches.length;i++){e.changedTouches[i]=d.changedTouches[i];
}e.touches=[];

for(var i=0;i<d.touches.length;i++){e.touches[i]=d.touches[i];
}return e;
},stop:function(){this.stopPropagation();
},getAllTouches:function(){return this._native.touches;
},getTargetTouches:function(){return this._native.targetTouches;
},getChangedTargetTouches:function(){return this._native.changedTouches;
},isMultiTouch:function(){return this.__hz().length>1;
},getScale:function(){return this._native.scale;
},getRotation:function(){return this._native.rotation;
},getDocumentLeft:function(f){return this.__hy(f).pageX;
},getDocumentTop:function(g){return this.__hy(g).pageY;
},getScreenLeft:function(h){return this.__hy(h).screenX;
},getScreenTop:function(j){return this.__hy(j).screenY;
},getViewportLeft:function(k){return this.__hy(k).clientX;
},getViewportTop:function(l){return this.__hy(l).clientY;
},getIdentifier:function(m){return this.__hy(m).identifier;
},__hy:function(n){n=n==null?0:n;
return this.__hz()[n];
},__hz:function(){var o=(this._isTouchEnd()?this.getChangedTargetTouches():this.getTargetTouches());
return o;
},_isTouchEnd:function(){return (this.getType()==a||this.getType()==c);
}}});
})();
(function(){var a="qx.event.type.Tap";
qx.Class.define(a,{extend:qx.event.type.Touch,members:{_isTouchEnd:function(){return true;
}}});
})();
(function(){var a="qx.event.type.Swipe";
qx.Class.define(a,{extend:qx.event.type.Touch,members:{_cloneNativeEvent:function(b,c){var c=qx.event.type.Touch.prototype._cloneNativeEvent.call(this,b,c);
c.swipe=b.swipe;
return c;
},_isTouchEnd:function(){return true;
},getStartTime:function(){return this._native.swipe.startTime;
},getDuration:function(){return this._native.swipe.duration;
},getAxis:function(){return this._native.swipe.axis;
},getDirection:function(){return this._native.swipe.direction;
},getVelocity:function(){return this._native.swipe.velocity;
},getDistance:function(){return this._native.swipe.distance;
}}});
})();
(function(){var h="left",g="right",f="middle",e="none",d="engine.name",c="click",b="contextmenu",a="qx.event.type.Mouse";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(i,j){var j=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,i,j);
j.button=i.button;
j.clientX=i.clientX;
j.clientY=i.clientY;
j.pageX=i.pageX;
j.pageY=i.pageY;
j.screenX=i.screenX;
j.screenY=i.screenY;
j.wheelDelta=i.wheelDelta;
j.detail=i.detail;
j.srcElement=i.srcElement;
j.target=i.target;
return j;
},__hA:{0:h,2:g,1:f},__hB:{1:h,2:g,4:f},stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case b:return g;
case c:if(this.__hC){return this.__hC();
}default:if(this._native.target!==undefined){return this.__hA[this._native.button]||e;
}else{return this.__hB[this._native.button]||e;
}}},__hC:qx.core.Environment.select(d,{"mshtml":function(){return h;
},"default":null}),isLeftPressed:function(){return this.getButton()===h;
},isMiddlePressed:function(){return this.getButton()===f;
},isRightPressed:function(){return this.getButton()===g;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:function(){if(this._native.pageX!==undefined){return this._native.pageX;
}else{var k=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(k);
}},getDocumentTop:function(){if(this._native.pageY!==undefined){return this._native.pageY;
}else{var l=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(l);
}},getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
}}});
})();
(function(){var i="engine.version",h="os.name",g="osx",f="win",e="engine.name",d="chrome",c="qx.dynamicmousewheel",b="qx.event.type.MouseWheel",a="browser.name";
qx.Class.define(b,{extend:qx.event.type.Mouse,statics:{MAXSCROLL:null,MINSCROLL:null,FACTOR:1},members:{stop:function(){this.stopPropagation();
this.preventDefault();
},__hD:function(j){var k=Math.abs(j);
if(qx.event.type.MouseWheel.MINSCROLL==null||qx.event.type.MouseWheel.MINSCROLL>k){qx.event.type.MouseWheel.MINSCROLL=k;
this.__hE();
}if(qx.event.type.MouseWheel.MAXSCROLL==null||qx.event.type.MouseWheel.MAXSCROLL<k){qx.event.type.MouseWheel.MAXSCROLL=k;
this.__hE();
}if(qx.event.type.MouseWheel.MAXSCROLL===k&&qx.event.type.MouseWheel.MINSCROLL===k){return 2*(j/k);
}var l=qx.event.type.MouseWheel.MAXSCROLL-qx.event.type.MouseWheel.MINSCROLL;
var m=(j/l)*Math.log(l)*qx.event.type.MouseWheel.FACTOR;
return m<0?Math.min(m,-1):Math.max(m,1);
},__hE:function(){var n=qx.event.type.MouseWheel.MAXSCROLL||0;
var q=qx.event.type.MouseWheel.MINSCROLL||n;

if(n<=q){return;
}var o=n-q;
var p=(n/o)*Math.log(o);

if(p==0){p=1;
}qx.event.type.MouseWheel.FACTOR=6/p;
},getWheelDelta:function(){if(qx.core.Environment.get(c)){if(this._native.detail){return this.__hD(this._native.detail);
}return this.__hD(-this._native.wheelDelta);
}else{var r=qx.core.Environment.select(e,{"default":function(){return -(this._native.wheelDelta/40);
},"gecko":function(){return this._native.detail;
},"webkit":function(){if(qx.core.Environment.get(a)==d){if(qx.core.Environment.get(h)==g){return -(this._native.wheelDelta/60);
}else{return -(this._native.wheelDelta/120);
}}else{if(qx.core.Environment.get(h)==f){var s=120;
if(parseFloat(qx.core.Environment.get(i))==533.16){s=1200;
}}else{s=40;
if(parseFloat(qx.core.Environment.get(i))==533.16||parseFloat(qx.core.Environment.get(i))==533.17||parseFloat(qx.core.Environment.get(i))==533.18){s=1200;
}}return -(this._native.wheelDelta/s);
}}});
return r.call(this);
}}}});
})();
(function(){var f="engine.name",e="qx.dom.Hierarchy",d="previousSibling",c="*",b="nextSibling",a="parentNode";
qx.Class.define(e,{statics:{getNodeIndex:function(g){var h=0;

while(g&&(g=g.previousSibling)){h++;
}return h;
},getElementIndex:function(i){var j=0;
var k=qx.dom.Node.ELEMENT;

while(i&&(i=i.previousSibling)){if(i.nodeType==k){j++;
}}return j;
},getNextElementSibling:function(l){while(l&&(l=l.nextSibling)&&!qx.dom.Node.isElement(l)){continue;
}return l||null;
},getPreviousElementSibling:function(m){while(m&&(m=m.previousSibling)&&!qx.dom.Node.isElement(m)){continue;
}return m||null;
},contains:qx.core.Environment.select(f,{"webkit|mshtml|opera":function(n,o){if(qx.dom.Node.isDocument(n)){var p=qx.dom.Node.getDocument(o);
return n&&p==n;
}else if(qx.dom.Node.isDocument(o)){return false;
}else{return n.contains(o);
}},"gecko":function(q,r){return !!(q.compareDocumentPosition(r)&16);
},"default":function(s,t){while(t){if(s==t){return true;
}t=t.parentNode;
}return false;
}}),isRendered:qx.core.Environment.select(f,{"mshtml":function(u){if(!u.parentNode||!u.offsetParent){return false;
}var v=u.ownerDocument||u.document;
return v.body.contains(u);
},"gecko":function(w){var x=w.ownerDocument||w.document;
return !!(x.compareDocumentPosition(w)&16);
},"default":function(y){if(!y.parentNode||!y.offsetParent){return false;
}var z=y.ownerDocument||y.document;
return z.body.contains(y);
}}),isDescendantOf:function(A,B){return this.contains(B,A);
},getCommonParent:qx.core.Environment.select(f,{"mshtml|opera":function(C,D){if(C===D){return C;
}
while(C&&qx.dom.Node.isElement(C)){if(C.contains(D)){return C;
}C=C.parentNode;
}return null;
},"default":function(E,F){if(E===F){return E;
}var G={};
var J=qx.core.ObjectRegistry;
var I,H;

while(E||F){if(E){I=J.toHashCode(E);

if(G[I]){return G[I];
}G[I]=E;
E=E.parentNode;
}
if(F){H=J.toHashCode(F);

if(G[H]){return G[H];
}G[H]=F;
F=F.parentNode;
}}return null;
}}),getAncestors:function(K){return this._recursivelyCollect(K,a);
},getChildElements:function(L){L=L.firstChild;

if(!L){return [];
}var M=this.getNextSiblings(L);

if(L.nodeType===1){M.unshift(L);
}return M;
},getDescendants:function(N){return qx.lang.Array.fromCollection(N.getElementsByTagName(c));
},getFirstDescendant:function(O){O=O.firstChild;

while(O&&O.nodeType!=1){O=O.nextSibling;
}return O;
},getLastDescendant:function(P){P=P.lastChild;

while(P&&P.nodeType!=1){P=P.previousSibling;
}return P;
},getPreviousSiblings:function(Q){return this._recursivelyCollect(Q,d);
},getNextSiblings:function(R){return this._recursivelyCollect(R,b);
},_recursivelyCollect:function(S,T){var U=[];

while(S=S[T]){if(S.nodeType==1){U.push(S);
}}return U;
},getSiblings:function(V){return this.getPreviousSiblings(V).reverse().concat(this.getNextSiblings(V));
},isEmpty:function(W){W=W.firstChild;

while(W){if(W.nodeType===qx.dom.Node.ELEMENT||W.nodeType===qx.dom.Node.TEXT){return false;
}W=W.nextSibling;
}return true;
},cleanWhitespace:function(X){var Y=X.firstChild;

while(Y){var ba=Y.nextSibling;

if(Y.nodeType==3&&!/\S/.test(Y.nodeValue)){X.removeChild(Y);
}Y=ba;
}}}});
})();
(function(){var a="qx.event.type.KeyInput";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);
this._charCode=d;
return this;
},clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);
f._charCode=this._charCode;
return f;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);
this._keyCode=b.keyCode;
this._identifier=d;
return this;
},clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);
f._keyCode=this._keyCode;
f._identifier=this._identifier;
return f;
},getKeyIdentifier:function(){return this._identifier;
},getKeyCode:function(){return this._keyCode;
},isPrintable:function(){return qx.event.handler.Keyboard.isPrintableKeyIdentifier(this._identifier);
}}});
})();
(function(){var j="engine.name",i="mousedown",h="mouseup",g="blur",f="focus",e="on",d="selectstart",c="DOMFocusOut",b="focusin",a="focusout",z="DOMFocusIn",y="draggesture",x="qx.event.handler.Focus",w="_applyFocus",v="deactivate",u="textarea",t="_applyActive",s='character',r="input",q="qxSelectable",o="tabIndex",p="off",m="activate",n="mshtml",k="qxKeepFocus",l="qxKeepActive";
qx.Class.define(x,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(A){qx.core.Object.call(this);
this._manager=A;
this._window=A.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:t,nullable:true},focus:{apply:w,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Environment.select("engine.name",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__hF:null,__hG:null,__hH:null,__hI:null,__hJ:null,__hK:null,__hL:null,__hM:null,__hN:null,__hO:null,canHandleEvent:function(B,C){},registerEvent:function(D,E,F){},unregisterEvent:function(G,H,I){},focus:function(J){if((qx.core.Environment.get(j)==n)){window.setTimeout(function(){try{J.focus();
var K=qx.bom.Selection.get(J);

if(K.length==0){var L=J.createTextRange();
L.moveStart(s,J.value.length);
L.collapse();
L.select();
}}catch(M){}},0);
}else{try{J.focus();
}catch(N){}}this.setFocus(J);
this.setActive(J);
},activate:function(O){this.setActive(O);
},blur:function(P){try{P.blur();
}catch(Q){}
if(this.getActive()===P){this.resetActive();
}
if(this.getFocus()===P){this.resetFocus();
}},deactivate:function(R){if(this.getActive()===R){this.resetActive();
}},tryActivate:function(S){var T=this.__ie(S);

if(T){this.setActive(T);
}},__hP:function(U,V,W,X){var ba=qx.event.Registration;
var Y=ba.createEvent(W,qx.event.type.Focus,[U,V,X]);
ba.dispatchEvent(U,Y);
},_windowFocused:true,__hQ:function(){if(this._windowFocused){this._windowFocused=false;
this.__hP(this._window,null,g,false);
}},__hR:function(){if(!this._windowFocused){this._windowFocused=true;
this.__hP(this._window,null,f,false);
}},_initObserver:qx.core.Environment.select(j,{"gecko":function(){this.__hF=qx.lang.Function.listener(this.__hX,this);
this.__hG=qx.lang.Function.listener(this.__hY,this);
this.__hH=qx.lang.Function.listener(this.__hW,this);
this.__hI=qx.lang.Function.listener(this.__hV,this);
this.__hJ=qx.lang.Function.listener(this.__hS,this);
qx.bom.Event.addNativeListener(this._document,i,this.__hF,true);
qx.bom.Event.addNativeListener(this._document,h,this.__hG,true);
qx.bom.Event.addNativeListener(this._window,f,this.__hH,true);
qx.bom.Event.addNativeListener(this._window,g,this.__hI,true);
qx.bom.Event.addNativeListener(this._window,y,this.__hJ,true);
},"mshtml":function(){this.__hF=qx.lang.Function.listener(this.__hX,this);
this.__hG=qx.lang.Function.listener(this.__hY,this);
this.__hL=qx.lang.Function.listener(this.__hT,this);
this.__hM=qx.lang.Function.listener(this.__hU,this);
this.__hK=qx.lang.Function.listener(this.__ib,this);
qx.bom.Event.addNativeListener(this._document,i,this.__hF);
qx.bom.Event.addNativeListener(this._document,h,this.__hG);
qx.bom.Event.addNativeListener(this._document,b,this.__hL);
qx.bom.Event.addNativeListener(this._document,a,this.__hM);
qx.bom.Event.addNativeListener(this._document,d,this.__hK);
},"webkit":function(){this.__hF=qx.lang.Function.listener(this.__hX,this);
this.__hG=qx.lang.Function.listener(this.__hY,this);
this.__hM=qx.lang.Function.listener(this.__hU,this);
this.__hH=qx.lang.Function.listener(this.__hW,this);
this.__hI=qx.lang.Function.listener(this.__hV,this);
this.__hK=qx.lang.Function.listener(this.__ib,this);
qx.bom.Event.addNativeListener(this._document,i,this.__hF,true);
qx.bom.Event.addNativeListener(this._document,h,this.__hG,true);
qx.bom.Event.addNativeListener(this._document,d,this.__hK,false);
qx.bom.Event.addNativeListener(this._window,c,this.__hM,true);
qx.bom.Event.addNativeListener(this._window,f,this.__hH,true);
qx.bom.Event.addNativeListener(this._window,g,this.__hI,true);
},"opera":function(){this.__hF=qx.lang.Function.listener(this.__hX,this);
this.__hG=qx.lang.Function.listener(this.__hY,this);
this.__hL=qx.lang.Function.listener(this.__hT,this);
this.__hM=qx.lang.Function.listener(this.__hU,this);
qx.bom.Event.addNativeListener(this._document,i,this.__hF,true);
qx.bom.Event.addNativeListener(this._document,h,this.__hG,true);
qx.bom.Event.addNativeListener(this._window,z,this.__hL,true);
qx.bom.Event.addNativeListener(this._window,c,this.__hM,true);
}}),_stopObserver:qx.core.Environment.select(j,{"gecko":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__hF,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__hG,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__hH,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__hI,true);
qx.bom.Event.removeNativeListener(this._window,y,this.__hJ,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__hF);
qx.bom.Event.removeNativeListener(this._document,h,this.__hG);
qx.bom.Event.removeNativeListener(this._document,b,this.__hL);
qx.bom.Event.removeNativeListener(this._document,a,this.__hM);
qx.bom.Event.removeNativeListener(this._document,d,this.__hK);
},"webkit":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__hF,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__hG,true);
qx.bom.Event.removeNativeListener(this._document,d,this.__hK,false);
qx.bom.Event.removeNativeListener(this._window,c,this.__hM,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__hH,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__hI,true);
},"opera":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__hF,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__hG,true);
qx.bom.Event.removeNativeListener(this._window,z,this.__hL,true);
qx.bom.Event.removeNativeListener(this._window,c,this.__hM,true);
}}),__hS:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bb){var bc=qx.bom.Event.getTarget(bb);

if(!this.__if(bc)){qx.bom.Event.preventDefault(bb);
}},"default":null})),__hT:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bd){this.__hR();
var bf=qx.bom.Event.getTarget(bd);
var be=this.__id(bf);

if(be){this.setFocus(be);
}this.tryActivate(bf);
},"opera":function(bg){var bh=qx.bom.Event.getTarget(bg);

if(bh==this._document||bh==this._window){this.__hR();

if(this.__hN){this.setFocus(this.__hN);
delete this.__hN;
}
if(this.__hO){this.setActive(this.__hO);
delete this.__hO;
}}else{this.setFocus(bh);
this.tryActivate(bh);
if(!this.__if(bh)){bh.selectionStart=0;
bh.selectionEnd=0;
}}},"default":null})),__hU:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bi){var bj=qx.bom.Event.getRelatedTarget(bi);
if(bj==null){this.__hQ();
this.resetFocus();
this.resetActive();
}},"webkit":function(bk){var bl=qx.bom.Event.getTarget(bk);

if(bl===this.getFocus()){this.resetFocus();
}
if(bl===this.getActive()){this.resetActive();
}},"opera":function(bm){var bn=qx.bom.Event.getTarget(bm);

if(bn==this._document){this.__hQ();
this.__hN=this.getFocus();
this.__hO=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(bn===this.getFocus()){this.resetFocus();
}
if(bn===this.getActive()){this.resetActive();
}}},"default":null})),__hV:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bo){var bp=qx.bom.Event.getTarget(bo);

if(bp===this._window||bp===this._document){this.__hQ();
this.resetActive();
this.resetFocus();
}},"webkit":function(bq){var br=qx.bom.Event.getTarget(bq);

if(br===this._window||br===this._document){this.__hQ();
this.__hN=this.getFocus();
this.__hO=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__hW:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bs){var bt=qx.bom.Event.getTarget(bs);

if(bt===this._window||bt===this._document){this.__hR();
bt=this._body;
}this.setFocus(bt);
this.tryActivate(bt);
},"webkit":function(bu){var bv=qx.bom.Event.getTarget(bu);

if(bv===this._window||bv===this._document){this.__hR();

if(this.__hN){this.setFocus(this.__hN);
delete this.__hN;
}
if(this.__hO){this.setActive(this.__hO);
delete this.__hO;
}}else{this.setFocus(bv);
this.tryActivate(bv);
}},"default":null})),__hX:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bw){var by=qx.bom.Event.getTarget(bw);
var bx=this.__id(by);

if(!bx){qx.bom.Event.preventDefault(bw);
}else if(bx===this._body){this.setFocus(bx);
}},"mshtml":function(bz){var bB=qx.bom.Event.getTarget(bz);
var bA=this.__id(bB);

if(bA){if(!this.__if(bB)){bB.unselectable=e;
try{document.selection.empty();
}catch(bC){}try{bA.focus();
}catch(bD){}}}else{qx.bom.Event.preventDefault(bz);
if(!this.__if(bB)){bB.unselectable=e;
}}},"webkit":function(bE){var bG=qx.bom.Event.getTarget(bE);
var bF=this.__id(bG);

if(bF){this.setFocus(bF);
}else{qx.bom.Event.preventDefault(bE);
}},"opera":function(bH){var bK=qx.bom.Event.getTarget(bH);
var bI=this.__id(bK);

if(!this.__if(bK)){qx.bom.Event.preventDefault(bH);
if(bI){var bJ=this.getFocus();

if(bJ&&bJ.selectionEnd){bJ.selectionStart=0;
bJ.selectionEnd=0;
bJ.blur();
}if(bI){this.setFocus(bI);
}}}else if(bI){this.setFocus(bI);
}},"default":null})),__hY:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bL){var bM=qx.bom.Event.getTarget(bL);

if(bM.unselectable){bM.unselectable=p;
}this.tryActivate(this.__ia(bM));
},"gecko":function(bN){var bO=qx.bom.Event.getTarget(bN);

while(bO&&bO.offsetWidth===undefined){bO=bO.parentNode;
}
if(bO){this.tryActivate(bO);
}},"webkit|opera":function(bP){var bQ=qx.bom.Event.getTarget(bP);
this.tryActivate(this.__ia(bQ));
},"default":null})),__ia:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bR){var bS=this.getFocus();

if(bS&&bR!=bS&&(bS.nodeName.toLowerCase()===r||bS.nodeName.toLowerCase()===u)){bR=bS;
}return bR;
},"default":function(bT){return bT;
}})),__ib:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bU){var bV=qx.bom.Event.getTarget(bU);

if(!this.__if(bV)){qx.bom.Event.preventDefault(bU);
}},"default":null})),__ic:function(bW){var bX=qx.bom.element.Attribute.get(bW,o);

if(bX>=1){return true;
}var bY=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bX>=0&&bY[bW.tagName]){return true;
}return false;
},__id:function(ca){while(ca&&ca.nodeType===1){if(ca.getAttribute(k)==e){return null;
}
if(this.__ic(ca)){return ca;
}ca=ca.parentNode;
}return this._body;
},__ie:function(cb){var cc=cb;

while(cb&&cb.nodeType===1){if(cb.getAttribute(l)==e){return null;
}cb=cb.parentNode;
}return cc;
},__if:function(cd){while(cd&&cd.nodeType===1){var ce=cd.getAttribute(q);

if(ce!=null){return ce===e;
}cd=cd.parentNode;
}return true;
},_applyActive:function(cf,cg){if(cg){this.__hP(cg,cf,v,true);
}
if(cf){this.__hP(cf,cg,m,true);
}},_applyFocus:function(ch,ci){if(ci){this.__hP(ci,ch,a,true);
}
if(ch){this.__hP(ch,ci,b,true);
}if(ci){this.__hP(ci,ch,g,false);
}
if(ch){this.__hP(ch,ci,f,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__ig=null;
},defer:function(cj){qx.event.Registration.addHandler(cj);
var ck=cj.FOCUSABLE_ELEMENTS;

for(var cl in ck){ck[cl.toUpperCase()]=1;
}}});
})();
(function(){var k="engine.name",j="character",i="EndToEnd",h="input",g="StartToStart",f="textarea",e='character',d="qx.bom.Selection",c="button",b="#text",a="body";
qx.Class.define(d,{statics:{getSelectionObject:qx.core.Environment.select(k,{"mshtml":function(l){return l.selection;
},"default":function(m){return qx.dom.Node.getWindow(m).getSelection();
}}),get:qx.core.Environment.select(k,{"mshtml":function(n){var o=qx.bom.Range.get(qx.dom.Node.getDocument(n));
return o.text;
},"default":function(p){if(this.__ih(p)){return p.value.substring(p.selectionStart,p.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(p)).toString();
}}}),getLength:qx.core.Environment.select(k,{"mshtml":function(q){var s=this.get(q);
var r=qx.util.StringSplit.split(s,/\r\n/);
return s.length-(r.length-1);
},"opera":function(t){var y,w,u;

if(this.__ih(t)){var x=t.selectionStart;
var v=t.selectionEnd;
y=t.value.substring(x,v);
w=v-x;
}else{y=qx.bom.Selection.get(t);
w=y.length;
}u=qx.util.StringSplit.split(y,/\r\n/);
return w-(u.length-1);
},"default":function(z){if(this.__ih(z)){return z.selectionEnd-z.selectionStart;
}else{return this.get(z).length;
}}}),getStart:qx.core.Environment.select(k,{"mshtml":function(A){if(this.__ih(A)){var F=qx.bom.Range.get();
if(!A.contains(F.parentElement())){return -1;
}var G=qx.bom.Range.get(A);
var E=A.value.length;
G.moveToBookmark(F.getBookmark());
G.moveEnd(e,E);
return E-G.text.length;
}else{var G=qx.bom.Range.get(A);
var C=G.parentElement();
var H=qx.bom.Range.get();

try{H.moveToElementText(C);
}catch(J){return 0;
}var B=qx.bom.Range.get(qx.dom.Node.getBodyElement(A));
B.setEndPoint(g,G);
B.setEndPoint(i,H);
if(H.compareEndPoints(g,B)==0){return 0;
}var D;
var I=0;

while(true){D=B.moveStart(j,-1);
if(H.compareEndPoints(g,B)==0){break;
}if(D==0){break;
}else{I++;
}}return ++I;
}},"gecko|webkit":function(K){if(this.__ih(K)){return K.selectionStart;
}else{var M=qx.dom.Node.getDocument(K);
var L=this.getSelectionObject(M);
if(L.anchorOffset<L.focusOffset){return L.anchorOffset;
}else{return L.focusOffset;
}}},"default":function(N){if(this.__ih(N)){return N.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(N)).anchorOffset;
}}}),getEnd:qx.core.Environment.select(k,{"mshtml":function(O){if(this.__ih(O)){var T=qx.bom.Range.get();
if(!O.contains(T.parentElement())){return -1;
}var U=qx.bom.Range.get(O);
var S=O.value.length;
U.moveToBookmark(T.getBookmark());
U.moveStart(e,-S);
return U.text.length;
}else{var U=qx.bom.Range.get(O);
var Q=U.parentElement();
var V=qx.bom.Range.get();

try{V.moveToElementText(Q);
}catch(X){return 0;
}var S=V.text.length;
var P=qx.bom.Range.get(qx.dom.Node.getBodyElement(O));
P.setEndPoint(i,U);
P.setEndPoint(g,V);
if(V.compareEndPoints(i,P)==0){return S-1;
}var R;
var W=0;

while(true){R=P.moveEnd(j,1);
if(V.compareEndPoints(i,P)==0){break;
}if(R==0){break;
}else{W++;
}}return S-(++W);
}},"gecko|webkit":function(Y){if(this.__ih(Y)){return Y.selectionEnd;
}else{var bb=qx.dom.Node.getDocument(Y);
var ba=this.getSelectionObject(bb);
if(ba.focusOffset>ba.anchorOffset){return ba.focusOffset;
}else{return ba.anchorOffset;
}}},"default":function(bc){if(this.__ih(bc)){return bc.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bc)).focusOffset;
}}}),__ih:function(bd){return qx.dom.Node.isElement(bd)&&(bd.nodeName.toLowerCase()==h||bd.nodeName.toLowerCase()==f);
},set:qx.core.Environment.select(k,{"mshtml":function(be,bf,bg){var bh;
if(qx.dom.Node.isDocument(be)){be=be.body;
}
if(qx.dom.Node.isElement(be)||qx.dom.Node.isText(be)){switch(be.nodeName.toLowerCase()){case h:case f:case c:if(bg===undefined){bg=be.value.length;
}
if(bf>=0&&bf<=be.value.length&&bg>=0&&bg<=be.value.length){bh=qx.bom.Range.get(be);
bh.collapse(true);
bh.moveStart(j,bf);
bh.moveEnd(j,bg-bf);
bh.select();
return true;
}break;
case b:if(bg===undefined){bg=be.nodeValue.length;
}
if(bf>=0&&bf<=be.nodeValue.length&&bg>=0&&bg<=be.nodeValue.length){bh=qx.bom.Range.get(qx.dom.Node.getBodyElement(be));
bh.moveToElementText(be.parentNode);
bh.collapse(true);
bh.moveStart(j,bf);
bh.moveEnd(j,bg-bf);
bh.select();
return true;
}break;
default:if(bg===undefined){bg=be.childNodes.length-1;
}if(be.childNodes[bf]&&be.childNodes[bg]){bh=qx.bom.Range.get(qx.dom.Node.getBodyElement(be));
bh.moveToElementText(be.childNodes[bf]);
bh.collapse(true);
var bi=qx.bom.Range.get(qx.dom.Node.getBodyElement(be));
bi.moveToElementText(be.childNodes[bg]);
bh.setEndPoint(i,bi);
bh.select();
return true;
}}}return false;
},"default":function(bj,bk,bl){var bp=bj.nodeName.toLowerCase();

if(qx.dom.Node.isElement(bj)&&(bp==h||bp==f)){if(bl===undefined){bl=bj.value.length;
}if(bk>=0&&bk<=bj.value.length&&bl>=0&&bl<=bj.value.length){bj.focus();
bj.select();
bj.setSelectionRange(bk,bl);
return true;
}}else{var bn=false;
var bo=qx.dom.Node.getWindow(bj).getSelection();
var bm=qx.bom.Range.get(bj);
if(qx.dom.Node.isText(bj)){if(bl===undefined){bl=bj.length;
}
if(bk>=0&&bk<bj.length&&bl>=0&&bl<=bj.length){bn=true;
}}else if(qx.dom.Node.isElement(bj)){if(bl===undefined){bl=bj.childNodes.length-1;
}
if(bk>=0&&bj.childNodes[bk]&&bl>=0&&bj.childNodes[bl]){bn=true;
}}else if(qx.dom.Node.isDocument(bj)){bj=bj.body;

if(bl===undefined){bl=bj.childNodes.length-1;
}
if(bk>=0&&bj.childNodes[bk]&&bl>=0&&bj.childNodes[bl]){bn=true;
}}
if(bn){if(!bo.isCollapsed){bo.collapseToStart();
}bm.setStart(bj,bk);
if(qx.dom.Node.isText(bj)){bm.setEnd(bj,bl);
}else{bm.setEndAfter(bj.childNodes[bl]);
}if(bo.rangeCount>0){bo.removeAllRanges();
}bo.addRange(bm);
return true;
}}return false;
}}),setAll:function(bq){return qx.bom.Selection.set(bq,0);
},clear:qx.core.Environment.select(k,{"mshtml":function(br){var bs=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(br));
var bt=qx.bom.Range.get(br);
var parent=bt.parentElement();
var bu=qx.bom.Range.get(qx.dom.Node.getDocument(br));
if(parent==bu.parentElement()&&parent==br){bs.empty();
}},"default":function(bv){var bx=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bv));
var bz=bv.nodeName.toLowerCase();
if(qx.dom.Node.isElement(bv)&&(bz==h||bz==f)){bv.setSelectionRange(0,0);
qx.bom.Element.blur(bv);
}else if(qx.dom.Node.isDocument(bv)||bz==a){bx.collapse(bv.body?bv.body:bv,0);
}else{var by=qx.bom.Range.get(bv);

if(!by.collapsed){var bA;
var bw=by.commonAncestorContainer;
if(qx.dom.Node.isElement(bv)&&qx.dom.Node.isText(bw)){bA=bw.parentNode;
}else{bA=bw;
}
if(bA==bv){bx.collapse(bv,0);
}}}}})}});
})();
(function(){var l="button",k="qx.bom.Range",j="text",i="engine.name",h="password",g="file",f="submit",e="reset",d="textarea",c="input",a="hidden",b="body";
qx.Class.define(k,{statics:{get:qx.core.Environment.select(i,{"mshtml":function(m){if(qx.dom.Node.isElement(m)){switch(m.nodeName.toLowerCase()){case c:switch(m.type){case j:case h:case a:case l:case e:case g:case f:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}break;
case d:case b:case l:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}}else{if(m==null){m=window;
}return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}},"default":function(n){var o=qx.dom.Node.getDocument(n);
var p=qx.bom.Selection.getSelectionObject(o);

if(p.rangeCount>0){return p.getRangeAt(0);
}else{return o.createRange();
}}})}});
})();
(function(){var j="",h="m",g="g",f="^",e="qx.util.StringSplit",d="i",c="$(?!\\s)",b="[object RegExp]",a="y";
qx.Class.define(e,{statics:{split:function(k,l,m){if(Object.prototype.toString.call(l)!==b){return String.prototype.split.call(k,l,m);
}var t=[],n=0,r=(l.ignoreCase?d:j)+(l.multiline?h:j)+(l.sticky?a:j),l=RegExp(l.source,r+g),q,u,o,p,s=/()??/.exec(j)[1]===undefined;
k=k+j;

if(!s){q=RegExp(f+l.source+c,r);
}if(m===undefined||+m<0){m=Infinity;
}else{m=Math.floor(+m);

if(!m){return [];
}}
while(u=l.exec(k)){o=u.index+u[0].length;

if(o>n){t.push(k.slice(n,u.index));
if(!s&&u.length>1){u[0].replace(q,function(){for(var i=1;i<arguments.length-2;i++){if(arguments[i]===undefined){u[i]=undefined;
}}});
}
if(u.length>1&&u.index<k.length){Array.prototype.push.apply(t,u.slice(1));
}p=u[0].length;
n=o;

if(t.length>=m){break;
}}
if(l.lastIndex===u.index){l.lastIndex++;
}}
if(n===k.length){if(p||!l.test(j)){t.push(j);
}}else{t.push(k.slice(n));
}return t.length>m?t.slice(0,m):t;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var j="",i="undefined",h="engine.name",g="readOnly",f="accessKey",e="qx.bom.element.Attribute",d="rowSpan",c="vAlign",b="className",a="textContent",y="'",x="htmlFor",w="longDesc",v="cellSpacing",u="frameBorder",t="='",s="useMap",r="innerText",q="innerHTML",p="tabIndex",n="dateTime",o="maxLength",l="mshtml",m="cellPadding",k="colSpan";
qx.Class.define(e,{statics:{__ii:{names:{"class":b,"for":x,html:q,text:(qx.core.Environment.get(h)==l)?r:a,colspan:k,rowspan:d,valign:c,datetime:n,accesskey:f,tabindex:p,maxlength:o,readonly:g,longdesc:w,cellpadding:m,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Environment.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(z){var A=[];
var C=this.__ii.runtime;

for(var B in z){if(!C[B]){A.push(B,t,z[B],y);
}}return A.join(j);
},get:qx.core.Environment.select(h,{"mshtml":function(D,name){var F=this.__ii;
var E;
name=F.names[name]||name;
if(F.original[name]){E=D.getAttribute(name,2);
}else if(F.property[name]){E=D[name];

if(typeof F.propertyDefault[name]!==i&&E==F.propertyDefault[name]){if(typeof F.bools[name]===i){return null;
}else{return E;
}}}else{E=D.getAttribute(name);
}if(F.bools[name]){return !!E;
}return E;
},"default":function(G,name){var I=this.__ii;
var H;
name=I.names[name]||name;
if(I.property[name]){H=G[name];

if(typeof I.propertyDefault[name]!==i&&H==I.propertyDefault[name]){if(typeof I.bools[name]===i){return null;
}else{return H;
}}}else{H=G.getAttribute(name);
}if(I.bools[name]){return !!H;
}return H;
}}),set:function(J,name,K){if(typeof K===i){return;
}var L=this.__ii;
name=L.names[name]||name;
if(L.bools[name]){K=!!K;
}if(L.property[name]&&(!(J[name]===undefined)||L.qxProperties[name])){if(K==null){if(L.removeableProperties[name]){J.removeAttribute(name);
return;
}else if(typeof L.propertyDefault[name]!==i){K=L.propertyDefault[name];
}}J[name]=K;
}else{if(K===true){J.setAttribute(name,name);
}else if(K===false||K===null){J.removeAttribute(name);
}else{J.setAttribute(name,K);
}}},reset:function(M,name){this.set(M,name,null);
}}});
})();
(function(){var a="qx.event.type.Drag";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c){qx.event.type.Event.prototype.init.call(this,true,b);

if(c){this._native=c.getNativeEvent()||null;
this._originalTarget=c.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(d){var e=qx.event.type.Event.prototype.clone.call(this,d);
e._native=this._native;
return e;
},getDocumentLeft:function(){if(this._native==null){return 0;
}
if(this._native.pageX!==undefined){return this._native.pageX;
}else{var f=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(f);
}},getDocumentTop:function(){if(this._native==null){return 0;
}
if(this._native.pageY!==undefined){return this._native.pageY;
}else{var g=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(g);
}},getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(h){this.getManager().addType(h);
},addAction:function(i){this.getManager().addAction(i);
},supportsType:function(j){return this.getManager().supportsType(j);
},supportsAction:function(k){return this.getManager().supportsAction(k);
},addData:function(l,m){this.getManager().addData(l,m);
},getData:function(n){return this.getManager().getData(n);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var i="engine.name",h="losecapture",g="mshtml",f="blur",e="focus",d="click",c="qx.event.dispatch.MouseCapture",b="capture",a="scroll";
qx.Class.define(c,{extend:qx.event.dispatch.AbstractBubbling,construct:function(j,k){qx.event.dispatch.AbstractBubbling.call(this,j);
this.__ij=j.getWindow();
this.__ik=k;
j.addListener(this.__ij,f,this.releaseCapture,this);
j.addListener(this.__ij,e,this.releaseCapture,this);
j.addListener(this.__ij,a,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__ik:null,__il:null,__im:true,__ij:null,_getParent:function(l){return l.parentNode;
},canDispatchEvent:function(m,event,n){return !!(this.__il&&this.__in[n]);
},dispatchEvent:function(o,event,p){if(p==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__im||!qx.dom.Hierarchy.contains(this.__il,o)){o=this.__il;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,o,event,p);
},__in:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(q,r){var r=r!==false;

if(this.__il===q&&this.__im==r){return;
}
if(this.__il){this.releaseCapture();
}this.nativeSetCapture(q,r);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(q,h,function(){qx.bom.Event.removeNativeListener(q,h,arguments.callee);
self.releaseCapture();
});
}this.__im=r;
this.__il=q;
this.__ik.fireEvent(q,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__il;
},releaseCapture:function(){var s=this.__il;

if(!s){return;
}this.__il=null;
this.__ik.fireEvent(s,h,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(s);
},hasNativeCapture:qx.core.Environment.get(i)==g,nativeSetCapture:qx.core.Environment.select(i,{"mshtml":function(t,u){t.setCapture(u!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Environment.select(i,{"mshtml":function(v){v.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__il=this.__ij=this.__ik=null;
},defer:function(w){qx.event.Registration.addDispatcher(w);
}});
})();
(function(){var c="qx.bom.Selector";
qx.Class.define(c,{statics:{query:null,matches:null}});
(function(){var o=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,v=0,x=Object.prototype.toString,p=false,z=true,t=/\\/g,g=/\W/;
[0,0].sort(function(){z=false;
return 0;
});
var s=function(B,C,D,E){D=D||[];
C=C||document;
var N=C;

if(C.nodeType!==1&&C.nodeType!==9){return [];
}
if(!B||typeof B!=="string"){return D;
}var m,H,F,J,L,I,O,i,P=true,G=s.isXML(C),K=[],M=B;
do{o.exec("");
m=o.exec(M);

if(m){M=m[3];
K.push(m[1]);

if(m[2]){J=m[3];
break;
}}}while(m);

if(K.length>1&&q.exec(B)){if(K.length===2&&k.relative[K[0]]){H=h(K[0]+K[1],C);
}else{H=k.relative[K[0]]?[C]:s(K.shift(),C);

while(K.length){B=K.shift();

if(k.relative[B]){B+=K.shift();
}H=h(B,H);
}}}else{if(!E&&K.length>1&&C.nodeType===9&&!G&&k.match.ID.test(K[0])&&!k.match.ID.test(K[K.length-1])){L=s.find(K.shift(),C,G);
C=L.expr?s.filter(L.expr,L.set)[0]:L.set[0];
}
if(C){L=E?
{expr:K.pop(),set:f(E)}:s.find(K.pop(),K.length===1&&(K[0]==="~"||K[0]==="+")&&C.parentNode?C.parentNode:C,G);
H=L.expr?s.filter(L.expr,L.set):L.set;

if(K.length>0){F=f(H);
}else{P=false;
}
while(K.length){I=K.pop();
O=I;

if(!k.relative[I]){I="";
}else{O=K.pop();
}
if(O==null){O=C;
}k.relative[I](F,O,G);
}}else{F=K=[];
}}
if(!F){F=H;
}
if(!F){s.error(I||B);
}
if(x.call(F)==="[object Array]"){if(!P){D.push.apply(D,F);
}else if(C&&C.nodeType===1){for(i=0;F[i]!=null;i++){if(F[i]&&(F[i]===true||F[i].nodeType===1&&s.contains(C,F[i]))){D.push(H[i]);
}}}else{for(i=0;F[i]!=null;i++){if(F[i]&&F[i].nodeType===1){D.push(H[i]);
}}}}else{f(F,D);
}
if(J){s(J,N,D,E);
s.uniqueSort(D);
}return D;
};
s.uniqueSort=function(Q){if(u){p=z;
Q.sort(u);

if(p){for(var i=1;i<Q.length;i++){if(Q[i]===Q[i-1]){Q.splice(i--,1);
}}}}return Q;
};
s.matches=function(R,S){return s(R,null,null,S);
};
s.matchesSelector=function(T,U){return s(U,null,null,[T]).length>0;
};
s.find=function(V,W,X){var Y;

if(!V){return [];
}
for(var i=0,l=k.order.length;i<l;i++){var bb,ba=k.order[i];

if((bb=k.leftMatch[ba].exec(V))){var bc=bb[1];
bb.splice(1,1);

if(bc.substr(bc.length-1)!=="\\"){bb[1]=(bb[1]||"").replace(t,"");
Y=k.find[ba](bb,W,X);

if(Y!=null){V=V.replace(k.match[ba],"");
break;
}}}}
if(!Y){Y=typeof W.getElementsByTagName!=="undefined"?W.getElementsByTagName("*"):[];
}return {set:Y,expr:V};
};
s.filter=function(bd,be,bf,bg){var bt,bs,bh=bd,bn=[],bi=be,bj=be&&be[0]&&s.isXML(be[0]);

while(bd&&be.length){for(var br in k.filter){if((bt=k.leftMatch[br].exec(bd))!=null&&bt[2]){var bq,bm,bk=k.filter[br],bu=bt[1];
bs=false;
bt.splice(1,1);

if(bu.substr(bu.length-1)==="\\"){continue;
}
if(bi===bn){bn=[];
}
if(k.preFilter[br]){bt=k.preFilter[br](bt,bi,bf,bn,bg,bj);

if(!bt){bs=bq=true;
}else if(bt===true){continue;
}}
if(bt){for(var i=0;(bm=bi[i])!=null;i++){if(bm){bq=bk(bm,bt,i,bi);
var bo=bg^!!bq;

if(bf&&bq!=null){if(bo){bs=true;
}else{bi[i]=false;
}}else if(bo){bn.push(bm);
bs=true;
}}}}
if(bq!==undefined){if(!bf){bi=bn;
}bd=bd.replace(k.match[br],"");

if(!bs){return [];
}break;
}}}if(bd===bh){if(bs==null){s.error(bd);
}else{break;
}}bh=bd;
}return bi;
};
s.error=function(bv){throw "Syntax error, unrecognized expression: "+bv;
};
var k=s.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(bw){return bw.getAttribute("href");
},type:function(bx){return bx.getAttribute("type");
}},relative:{"+":function(by,bz){var bA=typeof bz==="string",bC=bA&&!g.test(bz),bD=bA&&!bC;

if(bC){bz=bz.toLowerCase();
}
for(var i=0,l=by.length,bB;i<l;i++){if((bB=by[i])){while((bB=bB.previousSibling)&&bB.nodeType!==1){}by[i]=bD||bB&&bB.nodeName.toLowerCase()===bz?bB||false:bB===bz;
}}
if(bD){s.filter(bz,by,true);
}},">":function(bE,bF){var bH,bG=typeof bF==="string",i=0,l=bE.length;

if(bG&&!g.test(bF)){bF=bF.toLowerCase();

for(;i<l;i++){bH=bE[i];

if(bH){var parent=bH.parentNode;
bE[i]=parent.nodeName.toLowerCase()===bF?parent:false;
}}}else{for(;i<l;i++){bH=bE[i];

if(bH){bE[i]=bG?bH.parentNode:bH.parentNode===bF;
}}
if(bG){s.filter(bF,bE,true);
}}},"":function(bI,bJ,bK){var bN,bL=v++,bM=y;

if(typeof bJ==="string"&&!g.test(bJ)){bJ=bJ.toLowerCase();
bN=bJ;
bM=A;
}bM("parentNode",bJ,bL,bI,bN,bK);
},"~":function(bO,bP,bQ){var bT,bR=v++,bS=y;

if(typeof bP==="string"&&!g.test(bP)){bP=bP.toLowerCase();
bT=bP;
bS=A;
}bS("previousSibling",bP,bR,bO,bT,bQ);
}},find:{ID:function(bU,bV,bW){if(typeof bV.getElementById!=="undefined"&&!bW){var m=bV.getElementById(bU[1]);
return m&&m.parentNode?[m]:[];
}},NAME:function(bX,bY){if(typeof bY.getElementsByName!=="undefined"){var cb=[],ca=bY.getElementsByName(bX[1]);

for(var i=0,l=ca.length;i<l;i++){if(ca[i].getAttribute("name")===bX[1]){cb.push(ca[i]);
}}return cb.length===0?null:cb;
}},TAG:function(cc,cd){if(typeof cd.getElementsByTagName!=="undefined"){return cd.getElementsByTagName(cc[1]);
}}},preFilter:{CLASS:function(ce,cf,cg,ch,ci,cj){ce=" "+ce[1].replace(t,"")+" ";

if(cj){return ce;
}
for(var i=0,ck;(ck=cf[i])!=null;i++){if(ck){if(ci^(ck.className&&(" "+ck.className+" ").replace(/[\t\n\r]/g," ").indexOf(ce)>=0)){if(!cg){ch.push(ck);
}}else if(cg){cf[i]=false;
}}}return false;
},ID:function(cl){return cl[1].replace(t,"");
},TAG:function(cm,cn){return cm[1].replace(t,"").toLowerCase();
},CHILD:function(co){if(co[1]==="nth"){if(!co[2]){s.error(co[0]);
}co[2]=co[2].replace(/^\+|\s*/g,'');
var cp=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(co[2]==="even"&&"2n"||co[2]==="odd"&&"2n+1"||!/\D/.test(co[2])&&"0n+"+co[2]||co[2]);
co[2]=(cp[1]+(cp[2]||1))-0;
co[3]=cp[3]-0;
}else if(co[2]){s.error(co[0]);
}co[0]=v++;
return co;
},ATTR:function(cq,cr,cs,ct,cu,cv){var name=cq[1]=cq[1].replace(t,"");

if(!cv&&k.attrMap[name]){cq[1]=k.attrMap[name];
}cq[4]=(cq[4]||cq[5]||"").replace(t,"");

if(cq[2]==="~="){cq[4]=" "+cq[4]+" ";
}return cq;
},PSEUDO:function(cw,cx,cy,cz,cA){if(cw[1]==="not"){if((o.exec(cw[3])||"").length>1||/^\w/.test(cw[3])){cw[3]=s(cw[3],null,null,cx);
}else{var cB=s.filter(cw[3],cx,cy,true^cA);

if(!cy){cz.push.apply(cz,cB);
}return false;
}}else if(k.match.POS.test(cw[0])||k.match.CHILD.test(cw[0])){return true;
}return cw;
},POS:function(cC){cC.unshift(true);
return cC;
}},filters:{enabled:function(cD){return cD.disabled===false&&cD.type!=="hidden";
},disabled:function(cE){return cE.disabled===true;
},checked:function(cF){return cF.checked===true;
},selected:function(cG){if(cG.parentNode){cG.parentNode.selectedIndex;
}return cG.selected===true;
},parent:function(cH){return !!cH.firstChild;
},empty:function(cI){return !cI.firstChild;
},has:function(cJ,i,cK){return !!s(cK[3],cJ).length;
},header:function(cL){return (/h\d/i).test(cL.nodeName);
},text:function(cM){return "text"===cM.getAttribute('type');
},radio:function(cN){return "radio"===cN.type;
},checkbox:function(cO){return "checkbox"===cO.type;
},file:function(cP){return "file"===cP.type;
},password:function(cQ){return "password"===cQ.type;
},submit:function(cR){return "submit"===cR.type;
},image:function(cS){return "image"===cS.type;
},reset:function(cT){return "reset"===cT.type;
},button:function(cU){return "button"===cU.type||cU.nodeName.toLowerCase()==="button";
},input:function(cV){return (/input|select|textarea|button/i).test(cV.nodeName);
}},setFilters:{first:function(cW,i){return i===0;
},last:function(cX,i,cY,da){return i===da.length-1;
},even:function(db,i){return i%2===0;
},odd:function(dc,i){return i%2===1;
},lt:function(dd,i,de){return i<de[3]-0;
},gt:function(df,i,dg){return i>dg[3]-0;
},nth:function(dh,i,di){return di[3]-0===i;
},eq:function(dj,i,dk){return dk[3]-0===i;
}},filter:{PSEUDO:function(dl,dm,i,dn){var name=dm[1],dp=k.filters[name];

if(dp){return dp(dl,i,dm,dn);
}else if(name==="contains"){return (dl.textContent||dl.innerText||s.getText([dl])||"").indexOf(dm[3])>=0;
}else if(name==="not"){var dq=dm[3];

for(var j=0,l=dq.length;j<l;j++){if(dq[j]===dl){return false;
}}return true;
}else{s.error(name);
}},CHILD:function(dr,ds){var dy=ds[1],dt=dr;

switch(dy){case "only":case "first":while((dt=dt.previousSibling)){if(dt.nodeType===1){return false;
}}
if(dy==="first"){return true;
}dt=dr;
case "last":while((dt=dt.nextSibling)){if(dt.nodeType===1){return false;
}}return true;
case "nth":var dz=ds[2],dv=ds[3];

if(dz===1&&dv===0){return true;
}var dx=ds[0],parent=dr.parentNode;

if(parent&&(parent.sizcache!==dx||!dr.nodeIndex)){var du=0;

for(dt=parent.firstChild;dt;dt=dt.nextSibling){if(dt.nodeType===1){dt.nodeIndex=++du;
}}parent.sizcache=dx;
}var dw=dr.nodeIndex-dv;

if(dz===0){return dw===0;
}else{return (dw%dz===0&&dw/dz>=0);
}}},ID:function(dA,dB){return dA.nodeType===1&&dA.getAttribute("id")===dB;
},TAG:function(dC,dD){return (dD==="*"&&dC.nodeType===1)||dC.nodeName.toLowerCase()===dD;
},CLASS:function(dE,dF){return (" "+(dE.className||dE.getAttribute("class"))+" ").indexOf(dF)>-1;
},ATTR:function(dG,dH){var name=dH[1],dL=k.attrHandle[name]?k.attrHandle[name](dG):dG[name]!=null?dG[name]:dG.getAttribute(name),dK=dL+"",dJ=dH[2],dI=dH[4];
return dL==null?dJ==="!=":dJ==="="?dK===dI:dJ==="*="?dK.indexOf(dI)>=0:dJ==="~="?(" "+dK+" ").indexOf(dI)>=0:!dI?dK&&dL!==false:dJ==="!="?dK!==dI:dJ==="^="?dK.indexOf(dI)===0:dJ==="$="?dK.substr(dK.length-dI.length)===dI:dJ==="|="?dK===dI||dK.substr(0,dI.length+1)===dI+"-":false;
},POS:function(dM,dN,i,dO){var name=dN[2],dP=k.setFilters[name];

if(dP){return dP(dM,i,dN,dO);
}}}};
var q=k.match.POS,d=function(dQ,dR){return "\\"+(dR-0+1);
};

for(var w in k.match){k.match[w]=new RegExp(k.match[w].source+(/(?![^\[]*\])(?![^\(]*\))/.source));
k.leftMatch[w]=new RegExp(/(^(?:.|\r|\n)*?)/.source+k.match[w].source.replace(/\\(\d+)/g,d));
}var f=function(dS,dT){dS=Array.prototype.slice.call(dS,0);

if(dT){dT.push.apply(dT,dS);
return dT;
}return dS;
};
try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType;
}catch(e){f=function(dU,dV){var i=0,dW=dV||[];

if(x.call(dU)==="[object Array]"){Array.prototype.push.apply(dW,dU);
}else{if(typeof dU.length==="number"){for(var l=dU.length;i<l;i++){dW.push(dU[i]);
}}else{for(;dU[i];i++){dW.push(dU[i]);
}}}return dW;
};
}var u,n;

if(document.documentElement.compareDocumentPosition){u=function(a,b){if(a===b){p=true;
return 0;
}
if(!a.compareDocumentPosition||!b.compareDocumentPosition){return a.compareDocumentPosition?-1:1;
}return a.compareDocumentPosition(b)&4?-1:1;
};
}else{u=function(a,b){var ec,ea,ed=[],ee=[],dY=a.parentNode,eb=b.parentNode,dX=dY;
if(a===b){p=true;
return 0;
}else if(dY===eb){return n(a,b);
}else if(!dY){return -1;
}else if(!eb){return 1;
}while(dX){ed.unshift(dX);
dX=dX.parentNode;
}dX=eb;

while(dX){ee.unshift(dX);
dX=dX.parentNode;
}ec=ed.length;
ea=ee.length;
for(var i=0;i<ec&&i<ea;i++){if(ed[i]!==ee[i]){return n(ed[i],ee[i]);
}}return i===ec?n(a,ee[i],-1):n(ed[i],b,1);
};
n=function(a,b,ef){if(a===b){return ef;
}var eg=a.nextSibling;

while(eg){if(eg===b){return -1;
}eg=eg.nextSibling;
}return 1;
};
}s.getText=function(eh){var ej="",ei;

for(var i=0;eh[i];i++){ei=eh[i];
if(ei.nodeType===3||ei.nodeType===4){ej+=ei.nodeValue;
}else if(ei.nodeType!==8){ej+=s.getText(ei.childNodes);
}}return ej;
};
(function(){var em=document.createElement("div"),el="script"+(new Date()).getTime(),ek=document.documentElement;
em.innerHTML="<a name='"+el+"'/>";
ek.insertBefore(em,ek.firstChild);
if(document.getElementById(el)){k.find.ID=function(en,eo,ep){if(typeof eo.getElementById!=="undefined"&&!ep){var m=eo.getElementById(en[1]);
return m?m.id===en[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===en[1]?[m]:undefined:[];
}};
k.filter.ID=function(eq,er){var es=typeof eq.getAttributeNode!=="undefined"&&eq.getAttributeNode("id");
return eq.nodeType===1&&es&&es.nodeValue===er;
};
}ek.removeChild(em);
ek=em=null;
})();
(function(){var et=document.createElement("div");
et.appendChild(document.createComment(""));
if(et.getElementsByTagName("*").length>0){k.find.TAG=function(eu,ev){var ex=ev.getElementsByTagName(eu[1]);
if(eu[1]==="*"){var ew=[];

for(var i=0;ex[i];i++){if(ex[i].nodeType===1){ew.push(ex[i]);
}}ex=ew;
}return ex;
};
}et.innerHTML="<a href='#'></a>";

if(et.firstChild&&typeof et.firstChild.getAttribute!=="undefined"&&et.firstChild.getAttribute("href")!=="#"){k.attrHandle.href=function(ey){return ey.getAttribute("href",2);
};
}et=null;
})();

if(document.querySelectorAll){(function(){var eA=s,ez=document.createElement("div"),eB="__sizzle__";
ez.innerHTML="<p class='TEST'></p>";
if(ez.querySelectorAll&&ez.querySelectorAll(".TEST").length===0){return;
}s=function(eD,eE,eF,eG){eE=eE||document;
if(!eG&&!s.isXML(eE)){var eL=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(eD);

if(eL&&(eE.nodeType===1||eE.nodeType===9)){if(eL[1]){return f(eE.getElementsByTagName(eD),eF);
}else if(eL[2]&&k.find.CLASS&&eE.getElementsByClassName){return f(eE.getElementsByClassName(eL[2]),eF);
}}
if(eE.nodeType===9){if(eD==="body"&&eE.body){return f([eE.body],eF);
}else if(eL&&eL[3]){var eJ=eE.getElementById(eL[3]);
if(eJ&&eJ.parentNode){if(eJ.id===eL[3]){return f([eJ],eF);
}}else{return f([],eF);
}}
try{return f(eE.querySelectorAll(eD),eF);
}catch(eO){}}else if(eE.nodeType===1&&eE.nodeName.toLowerCase()!=="object"){var eN=eE,eI=eE.getAttribute("id"),eK=eI||eB,eH=eE.parentNode,eM=/^\s*[+~]/.test(eD);

if(!eI){eE.setAttribute("id",eK);
}else{eK=eK.replace(/'/g,"\\$&");
}
if(eM&&eH){eE=eE.parentNode;
}
try{if(!eM||eH){return f(eE.querySelectorAll("[id='"+eK+"'] "+eD),eF);
}}catch(eP){}finally{if(!eI){eN.removeAttribute("id");
}}}}return eA(eD,eE,eF,eG);
};

for(var eC in eA){s[eC]=eA[eC];
}ez=null;
})();
}(function(){var eS=document.documentElement,eQ=eS.matchesSelector||eS.mozMatchesSelector||eS.webkitMatchesSelector||eS.msMatchesSelector,eR=false;

try{eQ.call(document.documentElement,"[test!='']:sizzle");
}catch(eT){eR=true;
}
if(eQ){s.matchesSelector=function(eU,eV){eV=eV.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");

if(!s.isXML(eU)){try{if(eR||!k.match.PSEUDO.test(eV)&&!/!=/.test(eV)){return eQ.call(eU,eV);
}}catch(e){}}return s(eV,null,null,[eU]).length>0;
};
}})();
(function(){var eW=document.createElement("div");
eW.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!eW.getElementsByClassName||eW.getElementsByClassName("e").length===0){return;
}eW.lastChild.className="e";

if(eW.getElementsByClassName("e").length===1){return;
}k.order.splice(1,0,"CLASS");
k.find.CLASS=function(eX,eY,fa){if(typeof eY.getElementsByClassName!=="undefined"&&!fa){return eY.getElementsByClassName(eX[1]);
}};
eW=null;
})();
function A(fb,fc,fd,fe,ff,fg){for(var i=0,l=fe.length;i<l;i++){var fi=fe[i];

if(fi){var fh=false;
fi=fi[fb];

while(fi){if(fi.sizcache===fd){fh=fe[fi.sizset];
break;
}
if(fi.nodeType===1&&!fg){fi.sizcache=fd;
fi.sizset=i;
}
if(fi.nodeName.toLowerCase()===fc){fh=fi;
break;
}fi=fi[fb];
}fe[i]=fh;
}}}function y(fj,fk,fl,fm,fn,fo){for(var i=0,l=fm.length;i<l;i++){var fq=fm[i];

if(fq){var fp=false;
fq=fq[fj];

while(fq){if(fq.sizcache===fl){fp=fm[fq.sizset];
break;
}
if(fq.nodeType===1){if(!fo){fq.sizcache=fl;
fq.sizset=i;
}
if(typeof fk!=="string"){if(fq===fk){fp=true;
break;
}}else if(s.filter(fk,[fq]).length>0){fp=fq;
break;
}}fq=fq[fj];
}fm[i]=fp;
}}}
if(document.documentElement.contains){s.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):true);
};
}else if(document.documentElement.compareDocumentPosition){s.contains=function(a,b){return !!(a.compareDocumentPosition(b)&16);
};
}else{s.contains=function(){return false;
};
}s.isXML=function(fr){var fs=(fr?fr.ownerDocument||fr:0).documentElement;
return fs?fs.nodeName!=="HTML":false;
};
var h=function(ft,fu){var fy,fw=[],fv="",fx=fu.nodeType?[fu]:fu;
while((fy=k.match.PSEUDO.exec(ft))){fv+=fy[0];
ft=ft.replace(k.match.PSEUDO,"");
}ft=k.relative[ft]?ft+"*":ft;

for(var i=0,l=fx.length;i<l;i++){s(ft,fx[i],fw);
}return s.filter(fv,fw);
};
var r=qx.bom.Selector;
r.query=function(fz,fA){return s(fz,fA);
};
r.matches=function(fB,fC){return s(fB,null,null,fC);
};
})();
})();
(function(){var r="engine.name",q="",p="MSXML2.DOMDocument.3.0",o="mshtml",n="SelectionLanguage",m="qx.xml.Document",k=" />",j="'",h="MSXML2.XMLHTTP.3.0",g="MSXML2.XMLHTTP.6.0",c=" xmlns='",f='<\?xml version="1.0" encoding="utf-8"?>\n<',e="text/xml",b="XPath",a="MSXML2.DOMDocument.6.0",d="HTML";
qx.Class.define(m,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(s){if(s.nodeType===9){return s.documentElement.nodeName!==d;
}else if(s.ownerDocument){return this.isXmlDocument(s.ownerDocument);
}else{return false;
}},create:qx.core.Environment.select(r,{"mshtml":function(t,u){var v=new ActiveXObject(this.DOMDOC);
if(this.DOMDOC==p){v.setProperty(n,b);
}
if(u){var w=f;
w+=u;

if(t){w+=c+t+j;
}w+=k;
v.loadXML(w);
}return v;
},"default":function(x,y){return document.implementation.createDocument(x||q,y||q,null);
}}),fromString:qx.core.Environment.select(r,{"mshtml":function(z){var A=qx.xml.Document.create();
A.loadXML(z);
return A;
},"default":function(B){var C=new DOMParser();
return C.parseFromString(B,e);
}})},defer:function(D){if((qx.core.Environment.get(r)==o)){var E=[a,p];
var F=[g,h];

for(var i=0,l=E.length;i<l;i++){try{new ActiveXObject(E[i]);
new ActiveXObject(F[i]);
}catch(G){continue;
}D.DOMDOC=E[i];
D.XMLHTTP=F[i];
break;
}}}});
})();
(function(){var k="visible",j="scroll",i="borderBottomWidth",h="borderTopWidth",g="left",f="borderLeftWidth",e="bottom",d="top",c="right",b="qx.bom.element.Scroll",a="borderRightWidth";
qx.Class.define(b,{statics:{intoViewX:function(l,stop,m){var parent=l.parentNode;
var r=qx.dom.Node.getDocument(l);
var n=r.body;
var z,x,u;
var B,s,C;
var v,D,G;
var E,p,y,o;
var t,F,w;
var q=m===g;
var A=m===c;
stop=stop?stop.parentNode:r;
while(parent&&parent!=stop){if(parent.scrollWidth>parent.clientWidth&&(parent===n||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===n){x=parent.scrollLeft;
u=x+qx.bom.Viewport.getWidth();
B=qx.bom.Viewport.getWidth();
s=parent.clientWidth;
C=parent.scrollWidth;
v=0;
D=0;
G=0;
}else{z=qx.bom.element.Location.get(parent);
x=z.left;
u=z.right;
B=parent.offsetWidth;
s=parent.clientWidth;
C=parent.scrollWidth;
v=parseInt(qx.bom.element.Style.get(parent,f),10)||0;
D=parseInt(qx.bom.element.Style.get(parent,a),10)||0;
G=B-s-v-D;
}E=qx.bom.element.Location.get(l);
p=E.left;
y=E.right;
o=l.offsetWidth;
t=p-x-v;
F=y-u+D;
w=0;
if(q){w=t;
}else if(A){w=F+G;
}else if(t<0||o>s){w=t;
}else if(F>0){w=F+G;
}parent.scrollLeft+=w;
qx.event.Registration.fireNonBubblingEvent(parent,j);
}
if(parent===n){break;
}parent=parent.parentNode;
}},intoViewY:function(H,stop,I){var parent=H.parentNode;
var O=qx.dom.Node.getDocument(H);
var J=O.body;
var W,K,S;
var Y,V,Q;
var M,N,L;
var bb,bc,X,R;
var U,P,bd;
var ba=I===d;
var T=I===e;
stop=stop?stop.parentNode:O;
while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===J||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===J){K=parent.scrollTop;
S=K+qx.bom.Viewport.getHeight();
Y=qx.bom.Viewport.getHeight();
V=parent.clientHeight;
Q=parent.scrollHeight;
M=0;
N=0;
L=0;
}else{W=qx.bom.element.Location.get(parent);
K=W.top;
S=W.bottom;
Y=parent.offsetHeight;
V=parent.clientHeight;
Q=parent.scrollHeight;
M=parseInt(qx.bom.element.Style.get(parent,h),10)||0;
N=parseInt(qx.bom.element.Style.get(parent,i),10)||0;
L=Y-V-M-N;
}bb=qx.bom.element.Location.get(H);
bc=bb.top;
X=bb.bottom;
R=H.offsetHeight;
U=bc-K-M;
P=X-S+N;
bd=0;
if(ba){bd=U;
}else if(T){bd=P+L;
}else if(U<0||R>V){bd=U;
}else if(P>0){bd=P+L;
}parent.scrollTop+=bd;
qx.event.Registration.fireNonBubblingEvent(parent,j);
}
if(parent===J){break;
}parent=parent.parentNode;
}},intoView:function(be,stop,bf,bg){this.intoViewX(be,stop,bf);
this.intoViewY(be,stop,bg);
}}});
})();
(function(){var j="borderTopWidth",i="borderLeftWidth",h="marginTop",g="marginLeft",f="engine.name",e="scroll",d="engine.version",c="border-box",b="borderBottomWidth",a="borderRightWidth",C="auto",B="padding",A="browser.quirksmode",z="qx.bom.element.Location",y="paddingLeft",x="static",w="marginBottom",v="visible",u="BODY",t="opera",q="paddingBottom",r="paddingTop",o="marginRight",p="position",m="margin",n="overflow",k="paddingRight",l="browser.documentmode",s="border";
qx.Class.define(z,{statics:{__io:function(D,E){return qx.bom.element.Style.get(D,E,qx.bom.element.Style.COMPUTED_MODE,false);
},__ip:function(F,G){return parseInt(qx.bom.element.Style.get(F,G,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__iq:function(H){var K=0,top=0;
if(H.getBoundingClientRect&&qx.core.Environment.get(f)!=t){var J=qx.dom.Node.getWindow(H);
K-=qx.bom.Viewport.getScrollLeft(J);
top-=qx.bom.Viewport.getScrollTop(J);
}else{var I=qx.dom.Node.getDocument(H).body;
H=H.parentNode;
while(H&&H!=I){K+=H.scrollLeft;
top+=H.scrollTop;
H=H.parentNode;
}}return {left:K,top:top};
},__ir:qx.core.Environment.select(f,{"mshtml":function(L){var N=qx.dom.Node.getDocument(L);
var M=N.body;
var O=0;
var top=0;
O-=M.clientLeft+N.documentElement.clientLeft;
top-=M.clientTop+N.documentElement.clientTop;

if(!qx.core.Environment.get(A)){O+=this.__ip(M,i);
top+=this.__ip(M,j);
}return {left:O,top:top};
},"webkit":function(P){var R=qx.dom.Node.getDocument(P);
var Q=R.body;
var S=Q.offsetLeft;
var top=Q.offsetTop;
if(parseFloat(qx.core.Environment.get(d))<530.17){S+=this.__ip(Q,i);
top+=this.__ip(Q,j);
}return {left:S,top:top};
},"gecko":function(T){var U=qx.dom.Node.getDocument(T).body;
var V=U.offsetLeft;
var top=U.offsetTop;
if(parseFloat(qx.core.Environment.get(d))<1.9){V+=this.__ip(U,g);
top+=this.__ip(U,h);
}if(qx.bom.element.BoxSizing.get(U)!==c){V+=this.__ip(U,i);
top+=this.__ip(U,j);
}return {left:V,top:top};
},"default":function(W){var X=qx.dom.Node.getDocument(W).body;
var Y=X.offsetLeft;
var top=X.offsetTop;
return {left:Y,top:top};
}}),__is:qx.core.Environment.select(f,{"mshtml|webkit":function(ba){var bc=qx.dom.Node.getDocument(ba);
if(ba.getBoundingClientRect){var bd=ba.getBoundingClientRect();
var be=bd.left;
var top=bd.top;
}else{var be=ba.offsetLeft;
var top=ba.offsetTop;
ba=ba.offsetParent;
var bb=bc.body;
while(ba&&ba!=bb){be+=ba.offsetLeft;
top+=ba.offsetTop;
be+=this.__ip(ba,i);
top+=this.__ip(ba,j);
ba=ba.offsetParent;
}}return {left:be,top:top};
},"gecko":function(bf){if(bf.getBoundingClientRect){var bi=bf.getBoundingClientRect();
var bj=Math.round(bi.left);
var top=Math.round(bi.top);
}else{var bj=0;
var top=0;
var bg=qx.dom.Node.getDocument(bf).body;
var bh=qx.bom.element.BoxSizing;

if(bh.get(bf)!==c){bj-=this.__ip(bf,i);
top-=this.__ip(bf,j);
}
while(bf&&bf!==bg){bj+=bf.offsetLeft;
top+=bf.offsetTop;
if(bh.get(bf)!==c){bj+=this.__ip(bf,i);
top+=this.__ip(bf,j);
}if(bf.parentNode&&this.__io(bf.parentNode,n)!=v){bj+=this.__ip(bf.parentNode,i);
top+=this.__ip(bf.parentNode,j);
}bf=bf.offsetParent;
}}return {left:bj,top:top};
},"default":function(bk){var bm=0;
var top=0;
var bl=qx.dom.Node.getDocument(bk).body;
while(bk&&bk!==bl){bm+=bk.offsetLeft;
top+=bk.offsetTop;
bk=bk.offsetParent;
}return {left:bm,top:top};
}}),get:function(bn,bo){if(bn.tagName==u){var location=this.__it(bn);
var bv=location.left;
var top=location.top;
}else{var bp=this.__ir(bn);
var bu=this.__is(bn);
var scroll=this.__iq(bn);
var bv=bu.left+bp.left-scroll.left;
var top=bu.top+bp.top-scroll.top;
}var bq=bv+bn.offsetWidth;
var br=top+bn.offsetHeight;

if(bo){if(bo==B||bo==e){var bs=qx.bom.element.Overflow.getX(bn);

if(bs==e||bs==C){bq+=bn.scrollWidth-bn.offsetWidth+this.__ip(bn,i)+this.__ip(bn,a);
}var bt=qx.bom.element.Overflow.getY(bn);

if(bt==e||bt==C){br+=bn.scrollHeight-bn.offsetHeight+this.__ip(bn,j)+this.__ip(bn,b);
}}
switch(bo){case B:bv+=this.__ip(bn,y);
top+=this.__ip(bn,r);
bq-=this.__ip(bn,k);
br-=this.__ip(bn,q);
case e:bv-=bn.scrollLeft;
top-=bn.scrollTop;
bq-=bn.scrollLeft;
br-=bn.scrollTop;
case s:bv+=this.__ip(bn,i);
top+=this.__ip(bn,j);
bq-=this.__ip(bn,a);
br-=this.__ip(bn,b);
break;
case m:bv-=this.__ip(bn,g);
top-=this.__ip(bn,h);
bq+=this.__ip(bn,o);
br+=this.__ip(bn,w);
break;
}}return {left:bv,top:top,right:bq,bottom:br};
},__it:qx.core.Environment.select(f,{"default":function(bw){var top=bw.offsetTop+this.__ip(bw,h);
var bx=bw.offsetLeft+this.__ip(bw,g);
return {left:bx,top:top};
},"mshtml":function(by){var top=by.offsetTop;
var bz=by.offsetLeft;

if(!((parseFloat(qx.core.Environment.get(d))<8||qx.core.Environment.get(l)<8)&&!qx.core.Environment.get(A))){top+=this.__ip(by,h);
bz+=this.__ip(by,g);
}return {left:bz,top:top};
},"gecko":function(bA){var top=bA.offsetTop+this.__ip(bA,h)+this.__ip(bA,i);
var bB=bA.offsetLeft+this.__ip(bA,g)+this.__ip(bA,j);
return {left:bB,top:top};
}}),getLeft:function(bC,bD){return this.get(bC,bD).left;
},getTop:function(bE,bF){return this.get(bE,bF).top;
},getRight:function(bG,bH){return this.get(bG,bH).right;
},getBottom:function(bI,bJ){return this.get(bI,bJ).bottom;
},getRelative:function(bK,bL,bM,bN){var bP=this.get(bK,bM);
var bO=this.get(bL,bN);
return {left:bP.left-bO.left,top:bP.top-bO.top,right:bP.right-bO.right,bottom:bP.bottom-bO.bottom};
},getPosition:function(bQ){return this.getRelative(bQ,this.getOffsetParent(bQ));
},getOffsetParent:function(bR){var bT=bR.offsetParent||document.body;
var bS=qx.bom.element.Style;

while(bT&&(!/^body|html$/i.test(bT.tagName)&&bS.get(bT,p)===x)){bT=bT.offsetParent;
}return bT;
}}});
})();
(function(){var b="qx.ui.core.queue.Layout",a="layout";
qx.Class.define(b,{statics:{__iu:{},remove:function(c){delete this.__iu[c.$$hash];
},add:function(d){this.__iu[d.$$hash]=d;
qx.ui.core.queue.Manager.scheduleFlush(a);
},isScheduled:function(e){return !!this.__iu[e.$$hash];
},flush:function(){var f=this.__ix();
for(var i=f.length-1;i>=0;i--){var g=f[i];
if(g.hasValidLayout()){continue;
}if(g.isRootWidget()&&!g.hasUserBounds()){var j=g.getSizeHint();
g.renderLayout(0,0,j.width,j.height);
}else{var h=g.getBounds();
g.renderLayout(h.left,h.top,h.width,h.height);
}}},getNestingLevel:function(k){var l=this.__iw;
var n=0;
var parent=k;
while(true){if(l[parent.$$hash]!=null){n+=l[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
n+=1;
}var m=n;

while(k&&k!==parent){l[k.$$hash]=m--;
k=k.$$parent;
}return n;
},__iv:function(){var t=qx.ui.core.queue.Visibility;
this.__iw={};
var s=[];
var r=this.__iu;
var o,q;

for(var p in r){o=r[p];

if(t.isVisible(o)){q=this.getNestingLevel(o);
if(!s[q]){s[q]={};
}s[q][p]=o;
delete r[p];
}}return s;
},__ix:function(){var x=[];
var z=this.__iv();

for(var w=z.length-1;w>=0;w--){if(!z[w]){continue;
}
for(var v in z[w]){var u=z[w][v];
if(w==0||u.isRootWidget()||u.hasUserBounds()){x.push(u);
u.invalidateLayoutCache();
continue;
}var B=u.getSizeHint(false);

if(B){u.invalidateLayoutCache();
var y=u.getSizeHint();
var A=(!u.getBounds()||B.minWidth!==y.minWidth||B.width!==y.width||B.maxWidth!==y.maxWidth||B.minHeight!==y.minHeight||B.height!==y.height||B.maxHeight!==y.maxHeight);
}else{A=true;
}
if(A){var parent=u.getLayoutParent();

if(!z[w-1]){z[w-1]={};
}z[w-1][parent.$$hash]=parent;
}else{x.push(u);
}}}return x;
}}});
})();
(function(){var h="useraction",g="touchend",f='ie',d="browser.version",c="event.touch",b="qx.ui.core.queue.Manager",a="browser.name";
qx.Class.define(b,{statics:{__iy:false,__iz:{},__iA:0,MAX_RETRIES:10,scheduleFlush:function(i){var self=qx.ui.core.queue.Manager;
self.__iz[i]=true;

if(!self.__iy){self.__iF.schedule();
self.__iy=true;
}},flush:function(){if(qx.ui.core.queue.Manager.PAUSE){return;
}var self=qx.ui.core.queue.Manager;
if(self.__iB){return;
}self.__iB=true;
self.__iF.cancel();
var j=self.__iz;
self.__iC(function(){while(j.visibility||j.widget||j.appearance||j.layout||j.element){if(j.widget){delete j.widget;
qx.ui.core.queue.Widget.flush();
}
if(j.visibility){delete j.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(j.appearance){delete j.appearance;
qx.ui.core.queue.Appearance.flush();
}if(j.widget||j.visibility||j.appearance){continue;
}
if(j.layout){delete j.layout;
qx.ui.core.queue.Layout.flush();
}if(j.widget||j.visibility||j.appearance||j.layout){continue;
}
if(j.element){delete j.element;
qx.html.Element.flush();
}}},function(){self.__iy=false;
});
self.__iC(function(){if(j.dispose){delete j.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__iB=false;
});
self.__iA=0;
},__iC:function(k,l){var self=qx.ui.core.queue.Manager;

try{k();
}catch(e){self.__iy=false;
self.__iB=false;
self.__iA+=1;
if(qx.core.Environment.get(a)==f&&qx.core.Environment.get(d)<=7){l();
}
if(self.__iA<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__iA-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{l();
}},__iD:function(e){var m=qx.ui.core.queue.Manager;
if(e.getData()==g){m.PAUSE=true;

if(m.__iE){window.clearTimeout(m.__iE);
}m.__iE=window.setTimeout(function(){m.PAUSE=false;
m.__iE=null;
m.flush();
},500);
}else{m.flush();
}}},defer:function(n){n.__iF=new qx.util.DeferredCall(n.flush);
qx.html.Element._scheduleFlush=n.scheduleFlush;
qx.event.Registration.addListener(window,h,qx.core.Environment.get(c)?n.__iD:n.flush);
}});
})();
(function(){var b="qx.ui.core.queue.Widget",a="widget";
qx.Class.define(b,{statics:{__iG:[],remove:function(c){qx.lang.Array.remove(this.__iG,c);
},add:function(d){var e=this.__iG;

if(qx.lang.Array.contains(e,d)){return;
}e.unshift(d);
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var f=this.__iG;
var g;

for(var i=f.length-1;i>=0;i--){g=f[i];
f.splice(i,1);
g.syncWidget();
}if(f.length!=0){return;
}this.__iG=[];
}}});
})();
(function(){var b="qx.ui.core.queue.Visibility",a="visibility";
qx.Class.define(b,{statics:{__iH:[],__iI:{},remove:function(c){delete this.__iI[c.$$hash];
qx.lang.Array.remove(this.__iH,c);
},isVisible:function(d){return this.__iI[d.$$hash]||false;
},__iJ:function(e){var g=this.__iI;
var f=e.$$hash;
var h;
if(e.isExcluded()){h=false;
}else{var parent=e.$$parent;

if(parent){h=this.__iJ(parent);
}else{h=e.isRootWidget();
}}return g[f]=h;
},add:function(j){var k=this.__iH;

if(qx.lang.Array.contains(k,j)){return;
}k.unshift(j);
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var o=this.__iH;
var p=this.__iI;
for(var i=o.length-1;i>=0;i--){var n=o[i].$$hash;

if(p[n]!=null){o[i].addChildrenToQueue(o);
}}var l={};

for(var i=o.length-1;i>=0;i--){var n=o[i].$$hash;
l[n]=p[n];
p[n]=null;
}for(var i=o.length-1;i>=0;i--){var m=o[i];
var n=m.$$hash;
o.splice(i,1);
if(p[n]==null){this.__iJ(m);
}if(p[n]&&p[n]!=l[n]){m.checkAppearanceNeeds();
}}this.__iH=[];
}}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__iK:[],remove:function(c){qx.lang.Array.remove(this.__iK,c);
},add:function(d){var e=this.__iK;

if(qx.lang.Array.contains(e,d)){return;
}e.unshift(d);
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(f){return qx.lang.Array.contains(this.__iK,f);
},flush:function(){var j=qx.ui.core.queue.Visibility;
var g=this.__iK;
var h;

for(var i=g.length-1;i>=0;i--){h=g[i];
g.splice(i,1);
if(j.isVisible(h)){h.syncAppearance();
}else{h.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__iL:[],add:function(c){var d=this.__iL;

if(qx.lang.Array.contains(d,c)){return;
}d.unshift(c);
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var e=this.__iL;

for(var i=e.length-1;i>=0;i--){var f=e[i];
e.splice(i,1);
f.dispose();
}if(e.length!=0){return;
}this.__iL=[];
}}});
})();
(function(){var f="blur",e="focus",d="input",c="load",b="qx.ui.core.EventHandler",a="activate";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this.__iM=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1,touchstart:1,touchend:1,touchmove:1,touchcancel:1,tap:1,swipe:1},IGNORE_CAN_HANDLE:false},members:{__iM:null,__iN:{focusin:1,focusout:1,focus:1,blur:1},__iO:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(g,h){return g instanceof qx.ui.core.Widget;
},_dispatchEvent:function(j){var p=j.getTarget();
var o=qx.ui.core.Widget.getWidgetByElement(p);
var q=false;

while(o&&o.isAnonymous()){var q=true;
o=o.getLayoutParent();
}if(o&&q&&j.getType()==a){o.getContainerElement().activate();
}if(this.__iN[j.getType()]){o=o&&o.getFocusTarget();
if(!o){return;
}}if(j.getRelatedTarget){var x=j.getRelatedTarget();
var w=qx.ui.core.Widget.getWidgetByElement(x);

while(w&&w.isAnonymous()){w=w.getLayoutParent();
}
if(w){if(this.__iN[j.getType()]){w=w.getFocusTarget();
}if(w===o){return;
}}}var s=j.getCurrentTarget();
var u=qx.ui.core.Widget.getWidgetByElement(s);

if(!u||u.isAnonymous()){return;
}if(this.__iN[j.getType()]){u=u.getFocusTarget();
}var v=j.getType();

if(!u||!(u.isEnabled()||this.__iO[v])){return;
}var k=j.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var r=this.__iM.getListeners(u,v,k);

if(!r||r.length===0){return;
}var m=qx.event.Pool.getInstance().getObject(j.constructor);
j.clone(m);
m.setTarget(o);
m.setRelatedTarget(w||null);
m.setCurrentTarget(u);
var y=j.getOriginalTarget();

if(y){var n=qx.ui.core.Widget.getWidgetByElement(y);

while(n&&n.isAnonymous()){n=n.getLayoutParent();
}m.setOriginalTarget(n);
}else{m.setOriginalTarget(p);
}for(var i=0,l=r.length;i<l;i++){var t=r[i].context||u;
r[i].handler.call(t,m);
}if(m.getPropagationStopped()){j.stopPropagation();
}
if(m.getDefaultPrevented()){j.preventDefault();
}qx.event.Pool.getInstance().poolObject(m);
},registerEvent:function(z,A,B){var C;

if(A===e||A===f){C=z.getFocusElement();
}else if(A===c||A===d){C=z.getContentElement();
}else{C=z.getContainerElement();
}
if(C){C.addListener(A,this._dispatchEvent,this,B);
}},unregisterEvent:function(D,E,F){var G;

if(E===e||E===f){G=D.getFocusElement();
}else if(E===c||E===d){G=D.getContentElement();
}else{G=D.getContainerElement();
}
if(G){G.removeListener(E,this._dispatchEvent,this,F);
}}},destruct:function(){this.__iM=null;
},defer:function(H){qx.event.Registration.addHandler(H);
}});
})();
(function(){var q="",p="string",o="/",n="mshtml",m="engine.name",l="io.ssl",k="//",j="?",i="data",h="isClippedImage has been superseded by getCombinedFormat",c="type",g="data:image/",f=";",b="encoding",a="qx.util.ResourceManager",e="singleton",d=",";
qx.Class.define(a,{extend:qx.core.Object,type:e,construct:function(){qx.core.Object.call(this);
},statics:{__iP:qx.$$resources||{},__iQ:{}},members:{has:function(r){return !!this.self(arguments).__iP[r];
},getData:function(s){return this.self(arguments).__iP[s]||null;
},getImageWidth:function(t){var u=this.self(arguments).__iP[t];
return u?u[0]:null;
},getImageHeight:function(v){var w=this.self(arguments).__iP[v];
return w?w[1]:null;
},getImageFormat:function(x){var y=this.self(arguments).__iP[x];
return y?y[2]:null;
},isClippedImage:function(z){qx.log.Logger.deprecatedMethodWarning(arguments.callee,h);
var A=this.self(arguments).__iP[z];
return A&&A.length>4&&typeof (A[4])==p&&this.constructor.__iP[A[4]];
},getCombinedFormat:function(B){var E=q;
var D=this.self(arguments).__iP[B];
var C=D&&D.length>4&&typeof (D[4])==p&&this.constructor.__iP[D[4]];

if(C){var G=D[4];
var F=this.constructor.__iP[G];
E=F[2];
}return E;
},toUri:function(H){if(H==null){return H;
}var I=this.self(arguments).__iP[H];

if(!I){return H;
}
if(typeof I===p){var K=I;
}else{var K=I[3];
if(!K){return H;
}}var J=q;

if((qx.core.Environment.get(m)==n)&&qx.core.Environment.get(l)){J=this.self(arguments).__iQ[K];
}return J+qx.$$libraries[K].resourceUri+o+H;
},toDataUri:function(L){var N=this.constructor.__iP[L];
var O=this.constructor.__iP[N[4]];
var P;

if(O){var M=O[4][L];
P=g+M[c]+f+M[b]+d+M[i];
}else{this.debug("ResourceManager.toDataUri: falling back for",L);
P=this.toUri(L);
}return P;
}},defer:function(Q){if((qx.core.Environment.get(m)==n)){if(qx.core.Environment.get(l)){for(var U in qx.$$libraries){var S;

if(qx.$$libraries[U].resourceUri){S=qx.$$libraries[U].resourceUri;
}else{Q.__iQ[U]=q;
continue;
}if(S.match(/^\/\//)!=null){Q.__iQ[U]=window.location.protocol;
}else if(S.match(/^\//)!=null){Q.__iQ[U]=window.location.protocol+k+window.location.host;
}else if(S.match(/^\.\//)!=null){var R=document.URL;
Q.__iQ[U]=R.substring(0,R.lastIndexOf(o)+1);
}else if(S.match(/^http/)!=null){Q.__iQ[U]=q;
}else{var V=window.location.href.indexOf(j);
var T;

if(V==-1){T=window.location.href;
}else{T=window.location.href.substring(0,V);
}Q.__iQ[U]=T.substring(0,T.lastIndexOf(o)+1);
}}}}}});
})();
(function(){var t="",s='indexOf',r='slice',q='concat',p='toLocaleLowerCase',o="qx.type.BaseString",n='match',m='toLocaleUpperCase',k='search',j='replace',c='toLowerCase',h='charCodeAt',f='split',b='substring',a='lastIndexOf',e='substr',d='toUpperCase',g='charAt';
qx.Class.define(o,{extend:Object,construct:function(u){var u=u||t;
this.__iR=u;
this.length=u.length;
},members:{$$isString:true,length:0,__iR:null,toString:function(){return this.__iR;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(v,w){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(x,y){var z=[g,h,q,s,a,n,j,k,r,f,e,b,c,d,p,m];
y.valueOf=y.toString;

if(new x(t).valueOf()==null){delete y.valueOf;
}
for(var i=0,l=z.length;i<l;i++){y[z[i]]=String.prototype[z[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){qx.type.BaseString.call(this,b);
this.__iS=c;
this.__iT=d;
},members:{__iS:null,__iT:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__iS,this.__iT);
}}});
})();
(function(){var l="_",k="",j="locale",h="_applyLocale",g="changeLocale",f="C",e="locale.variant",d="qx.dynlocale",c="qx.locale.Manager",b="String",a="singleton";
qx.Class.define(c,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__iU=qx.$$translations||{};
this.__iV=qx.$$locales||{};
var m=qx.core.Environment.get(j);
var n=qx.core.Environment.get(e);

if(n!==k){m+=l+n;
}this.__iW=m;
this.setLocale(m||this.__iX);
},statics:{tr:function(o,p){var q=qx.lang.Array.fromArguments(arguments);
q.splice(0,1);
return qx.locale.Manager.getInstance().translate(o,q);
},trn:function(r,s,t,u){var v=qx.lang.Array.fromArguments(arguments);
v.splice(0,3);
if(t!=1){return qx.locale.Manager.getInstance().translate(s,v);
}else{return qx.locale.Manager.getInstance().translate(r,v);
}},trc:function(w,x,y){var z=qx.lang.Array.fromArguments(arguments);
z.splice(0,2);
return qx.locale.Manager.getInstance().translate(x,z);
},marktr:function(A){return A;
}},properties:{locale:{check:b,nullable:true,apply:h,event:g}},members:{__iX:f,__iY:null,__ja:null,__iU:null,__iV:null,__iW:null,getLanguage:function(){return this.__ja;
},getTerritory:function(){return this.getLocale().split(l)[1]||k;
},getAvailableLocales:function(){var C=[];

for(var B in this.__iV){if(B!=this.__iX){C.push(B);
}}return C;
},__jb:function(D){var F;

if(D==null){return null;
}var E=D.indexOf(l);

if(E==-1){F=D;
}else{F=D.substring(0,E);
}return F;
},_applyLocale:function(G,H){this.__iY=G;
this.__ja=this.__jb(G);
},addTranslation:function(I,J){var K=this.__iU;

if(K[I]){for(var L in J){K[I][L]=J[L];
}}else{K[I]=J;
}},addLocale:function(M,N){var O=this.__iV;

if(O[M]){for(var P in N){O[M][P]=N[P];
}}else{O[M]=N;
}},translate:function(Q,R,S){var T=this.__iU;
return this.__jc(T,Q,R,S);
},localize:function(U,V,W){var X=this.__iV;
return this.__jc(X,U,V,W);
},__jc:function(Y,ba,bb,bc){var bd;

if(!Y){return ba;
}
if(bc){var bf=this.__jb(bc);
}else{bc=this.__iY;
bf=this.__ja;
}if(!bd&&Y[bc]){bd=Y[bc][ba];
}if(!bd&&Y[bf]){bd=Y[bf][ba];
}if(!bd&&Y[this.__iX]){bd=Y[this.__iX][ba];
}
if(!bd){bd=ba;
}
if(bb.length>0){var be=[];

for(var i=0;i<bb.length;i++){var bg=bb[i];

if(bg&&bg.translate){be[i]=bg.translate();
}else{be[i]=bg;
}}bd=qx.lang.String.format(bd,be);
}
if(qx.core.Environment.get(d)){bd=new qx.locale.LocalizedString(bd,ba,bb);
}return bd;
}},destruct:function(){this.__iU=this.__iV=null;
}});
})();
(function(){var k="px",j="engine.name",i="div",h="img",g="",f="no-repeat",d="scale-x",c="mshtml",b="scale",a="b64",I="scale-y",H="qx/icon",G="repeat",F=".png",E="crop",D="engine.version",C="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",B='<div style="',A="repeat-y",z='<img src="',r="qx.bom.element.Decoration",s="', sizingMethod='",p='"/>',q="png",n="')",o='"></div>',l='" style="',m="none",t="webkit",u=" ",w="repeat-x",v="DXImageTransform.Microsoft.AlphaImageLoader",y="qx/static/blank.gif",x="absolute";
qx.Class.define(r,{statics:{DEBUG:false,__jd:{},__je:(qx.core.Environment.get(j)==c)&&qx.core.Environment.get(D)<9,__jf:qx.core.Environment.select(j,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__jg:{"scale-x":h,"scale-y":h,"scale":h,"repeat":i,"no-repeat":i,"repeat-x":i,"repeat-y":i},update:function(J,K,L,M){var O=this.getTagName(L,K);

if(O!=J.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var P=this.getAttributes(K,L,M);

if(O===h){J.src=P.src||qx.util.ResourceManager.getInstance().toUri(y);
}if(J.style.backgroundPosition!=g&&P.style.backgroundPosition===undefined){P.style.backgroundPosition=null;
}if(J.style.clip!=g&&P.style.clip===undefined){P.style.clip=null;
}var N=qx.bom.element.Style;
N.setStyles(J,P.style);
if(this.__je){try{J.filters[v].apply();
}catch(e){}}},create:function(Q,R,S){var T=this.getTagName(R,Q);
var V=this.getAttributes(Q,R,S);
var U=qx.bom.element.Style.compile(V.style);

if(T===h){return z+V.src+l+U+p;
}else{return B+U+o;
}},getTagName:function(W,X){if((qx.core.Environment.get(j)==c)){if(X&&this.__je&&this.__jf[W]&&qx.lang.String.endsWith(X,F)){return i;
}}return this.__jg[W];
},getAttributes:function(Y,ba,bb){if(!bb){bb={};
}
if(!bb.position){bb.position=x;
}
if((qx.core.Environment.get(j)==c)){bb.fontSize=0;
bb.lineHeight=0;
}else if((qx.core.Environment.get(j)==t)){bb.WebkitUserDrag=m;
}var bd=qx.util.ResourceManager.getInstance().getImageFormat(Y)||qx.io.ImageLoader.getFormat(Y);
var bc;
if(this.__je&&this.__jf[ba]&&bd===q){bc=this.__jj(bb,ba,Y);
}else{if(ba===b){bc=this.__jk(bb,ba,Y);
}else if(ba===d||ba===I){bc=this.__jl(bb,ba,Y);
}else{bc=this.__jo(bb,ba,Y);
}}return bc;
},__jh:function(be,bf,bh){if(be.width==null&&bf!=null){be.width=bf+k;
}
if(be.height==null&&bh!=null){be.height=bh+k;
}return be;
},__ji:function(bi){var bj=qx.util.ResourceManager.getInstance().getImageWidth(bi)||qx.io.ImageLoader.getWidth(bi);
var bk=qx.util.ResourceManager.getInstance().getImageHeight(bi)||qx.io.ImageLoader.getHeight(bi);
return {width:bj,height:bk};
},__jj:function(bl,bm,bn){var bq=this.__ji(bn);
bl=this.__jh(bl,bq.width,bq.height);
var bp=bm==f?E:b;
var bo=C+qx.util.ResourceManager.getInstance().toUri(bn)+s+bp+n;
bl.filter=bo;
bl.backgroundImage=bl.backgroundRepeat=g;
return {style:bl};
},__jk:function(br,bs,bt){var bu=qx.util.ResourceManager.getInstance().toUri(bt);
var bv=this.__ji(bt);
br=this.__jh(br,bv.width,bv.height);
return {src:bu,style:br};
},__jl:function(bw,bx,by){var bz=qx.util.ResourceManager.getInstance();
var bC=bz.getCombinedFormat(by);
var bE=this.__ji(by);
var bA;

if(bC){var bD=bz.getData(by);
var bB=bD[4];

if(bC==a){bA=bz.toDataUri(by);
}else{bA=bz.toUri(bB);
}
if(bx===d){bw=this.__jm(bw,bD,bE.height);
}else{bw=this.__jn(bw,bD,bE.width);
}return {src:bA,style:bw};
}else{if(bx==d){bw.height=bE.height==null?null:bE.height+k;
}else if(bx==I){bw.width=bE.width==null?null:bE.width+k;
}bA=bz.toUri(by);
return {src:bA,style:bw};
}},__jm:function(bF,bG,bH){var bI=qx.util.ResourceManager.getInstance().getImageHeight(bG[4]);
bF.clip={top:-bG[6],height:bH};
bF.height=bI+k;
if(bF.top!=null){bF.top=(parseInt(bF.top,10)+bG[6])+k;
}else if(bF.bottom!=null){bF.bottom=(parseInt(bF.bottom,10)+bH-bI-bG[6])+k;
}return bF;
},__jn:function(bJ,bK,bL){var bM=qx.util.ResourceManager.getInstance().getImageWidth(bK[4]);
bJ.clip={left:-bK[5],width:bL};
bJ.width=bM+k;
if(bJ.left!=null){bJ.left=(parseInt(bJ.left,10)+bK[5])+k;
}else if(bJ.right!=null){bJ.right=(parseInt(bJ.right,10)+bL-bM-bK[5])+k;
}return bJ;
},__jo:function(bN,bO,bP){var bS=qx.util.ResourceManager.getInstance();
var bX=bS.getCombinedFormat(bP);
var ca=this.__ji(bP);
if(bX&&bO!==G){var bY=bS.getData(bP);
var bW=bY[4];

if(bX==a){var bV=bS.toDataUri(bP);
var bU=bT=0;
}else{var bV=bS.toUri(bW);
var bU=bY[5];
var bT=bY[6];
}var bQ=qx.bom.element.Background.getStyles(bV,bO,bU,bT);

for(var bR in bQ){bN[bR]=bQ[bR];
}
if(ca.width!=null&&bN.width==null&&(bO==A||bO===f)){bN.width=ca.width+k;
}
if(ca.height!=null&&bN.height==null&&(bO==w||bO===f)){bN.height=ca.height+k;
}return {style:bN};
}else{bN=this.__jh(bN,ca.width,ca.height);
bN=this.__jp(bN,bP,bO);
return {style:bN};
}},__jp:function(cb,cc,cd){var top=null;
var ch=null;

if(cb.backgroundPosition){var ce=cb.backgroundPosition.split(u);
ch=parseInt(ce[0],10);

if(isNaN(ch)){ch=ce[0];
}top=parseInt(ce[1],10);

if(isNaN(top)){top=ce[1];
}}var cg=qx.bom.element.Background.getStyles(cc,cd,ch,top);

for(var cf in cg){cb[cf]=cg[cf];
}if(cb.filter){cb.filter=g;
}return cb;
},__jq:function(ci){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(ci)&&ci.indexOf(H)==-1){if(!this.__jd[ci]){qx.log.Logger.debug("Potential clipped image candidate: "+ci);
this.__jd[ci]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Environment.select(j,{"mshtml":function(){return qx.bom.element.Decoration.__je;
},"default":function(){return false;
}})}});
})();
(function(){var c="engine.name",b="load",a="qx.io.ImageLoader";
qx.Bootstrap.define(a,{statics:{__jr:{},__js:{width:null,height:null},__jt:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(d){var e=this.__jr[d];
return !!(e&&e.loaded);
},isFailed:function(f){var g=this.__jr[f];
return !!(g&&g.failed);
},isLoading:function(h){var j=this.__jr[h];
return !!(j&&j.loading);
},getFormat:function(k){var m=this.__jr[k];
return m?m.format:null;
},getSize:function(n){var o=this.__jr[n];
return o?
{width:o.width,height:o.height}:this.__js;
},getWidth:function(p){var q=this.__jr[p];
return q?q.width:null;
},getHeight:function(r){var s=this.__jr[r];
return s?s.height:null;
},load:function(t,u,v){var w=this.__jr[t];

if(!w){w=this.__jr[t]={};
}if(u&&!v){v=window;
}if(w.loaded||w.loading||w.failed){if(u){if(w.loading){w.callbacks.push(u,v);
}else{u.call(v,t,w);
}}}else{w.loading=true;
w.callbacks=[];

if(u){w.callbacks.push(u,v);
}var y=new Image();
var x=qx.lang.Function.listener(this.__ju,this,y,t);
y.onload=x;
y.onerror=x;
y.src=t;
w.element=y;
}},abort:function(z){var A=this.__jr[z];

if(A&&!A.loaded){A.aborted=true;
var C=A.callbacks;
var B=A.element;
B.onload=B.onerror=null;
delete A.callbacks;
delete A.element;
delete A.loading;

for(var i=0,l=C.length;i<l;i+=2){C[i].call(C[i+1],z,A);
}}this.__jr[z]=null;
},__ju:qx.event.GlobalError.observeMethod(function(event,D,E){var F=this.__jr[E];

if(!F){}if(event.type===b){F.loaded=true;
F.width=this.__jv(D);
F.height=this.__jw(D);
var G=this.__jt.exec(E);

if(G!=null){F.format=G[1];
}}else{F.failed=true;
}D.onload=D.onerror=null;
var H=F.callbacks;
delete F.loading;
delete F.callbacks;
delete F.element;
for(var i=0,l=H.length;i<l;i+=2){H[i].call(H[i+1],E,F);
}}),__jv:qx.core.Environment.select(c,{"gecko":function(I){return I.naturalWidth;
},"default":function(J){return J.width;
}}),__jw:qx.core.Environment.select(c,{"gecko":function(K){return K.naturalHeight;
},"default":function(L){return L.height;
}})}});
})();
(function(){var u="number",t="0",s="px",r=";",q="'",p="')",o="gecko",n="background-image:url(",m=");",l="",e=")",k="background-repeat:",h="engine.version",c="data:",b=" ",g="qx.bom.element.Background",f="url(",i="background-position:",a="base64",j="url('",d="engine.name";
qx.Class.define(g,{statics:{__jx:[n,null,m,i,null,r,k,null,r],__jy:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__jz:function(v,top){var w=qx.core.Environment.get(d);
var x=qx.core.Environment.get(h);

if(w==o&&x<1.9&&v==top&&typeof v==u){top+=0.01;
}
if(v){var z=(typeof v==u)?v+s:v;
}else{z=t;
}
if(top){var y=(typeof top==u)?top+s:top;
}else{y=t;
}return z+b+y;
},__jA:function(A){var String=qx.lang.String;
var B=A.substr(0,50);
return String.startsWith(B,c)&&String.contains(B,a);
},compile:function(C,D,E,top){var F=this.__jz(E,top);
var G=qx.util.ResourceManager.getInstance().toUri(C);

if(this.__jA(G)){G=q+G+q;
}var H=this.__jx;
H[1]=G;
H[4]=F;
H[7]=D;
return H.join(l);
},getStyles:function(I,J,K,top){if(!I){return this.__jy;
}var L=this.__jz(K,top);
var N=qx.util.ResourceManager.getInstance().toUri(I);
var O;

if(this.__jA(N)){O=j+N+p;
}else{O=f+N+e;
}var M={backgroundPosition:L,backgroundImage:O};

if(J!=null){M.backgroundRepeat=J;
}return M;
},set:function(P,Q,R,S,top){var T=this.getStyles(Q,R,S,top);

for(var U in T){P.style[U]=T[U];
}}}});
})();
(function(){var k="source",j="scale",i="engine.name",h="no-repeat",g="",f="mshtml",e="backgroundImage",d="webkit",c="div",b="qx.html.Image",a="qx/static/blank.gif";
qx.Class.define(b,{extend:qx.html.Element,members:{tagNameHint:null,_applyProperty:function(name,l){qx.html.Element.prototype._applyProperty.call(this,name,l);

if(name===k){var p=this.getDomElement();
var m=this.getAllStyles();

if(this.getNodeName()==c&&this.getStyle(e)){m.backgroundPosition=null;
m.backgroundRepeat=null;
}var n=this._getProperty(k);
var o=this._getProperty(j);
var q=o?j:h;
if(n!=null){n=n||null;
qx.bom.element.Decoration.update(p,n,q,m);
}}},_removeProperty:function(r,s){if(r==k){this._setProperty(r,g,s);
}else{this._setProperty(r,null,s);
}},_createDomElement:function(){var u=this._getProperty(j);
var v=u?j:h;

if((qx.core.Environment.get(i)==f)){var t=this._getProperty(k);

if(this.tagNameHint!=null){this.setNodeName(this.tagNameHint);
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(v,t));
}}else{this.setNodeName(qx.bom.element.Decoration.getTagName(v));
}return qx.html.Element.prototype._createDomElement.call(this);
},_copyData:function(w){return qx.html.Element.prototype._copyData.call(this,true);
},setSource:function(x){this._setProperty(k,x);
return this;
},getSource:function(){return this._getProperty(k);
},resetSource:function(){if((qx.core.Environment.get(i)==d)){this._setProperty(k,qx.util.ResourceManager.getInstance().toUri(a));
}else{this._removeProperty(k,true);
}return this;
},setScale:function(y){this._setProperty(j,y);
return this;
},getScale:function(){return this._getProperty(j);
}}});
})();
(function(){var j="nonScaled",i="scaled",h="alphaScaled",g=".png",f="div",e="replacement",d="qx.event.type.Event",c="engine.name",b="hidden",a="Boolean",y="px",x="scale",w="changeSource",v="qx.ui.basic.Image",u="loaded",t="-disabled.$1",s="loadingFailed",r="String",q="__jB",p="_applySource",n="img",o="image",l="mshtml",m="_applyScale",k="no-repeat";
qx.Class.define(v,{extend:qx.ui.core.Widget,construct:function(z){this.__jB={};
qx.ui.core.Widget.call(this);

if(z){this.setSource(z);
}},properties:{source:{check:r,init:null,nullable:true,event:w,apply:p,themeable:true},scale:{check:a,init:false,themeable:true,apply:m},appearance:{refine:true,init:o},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},events:{loadingFailed:d,loaded:d},members:{__jC:null,__jD:null,__jE:null,__jB:null,getContentElement:function(){return this.__jI();
},_createContentElement:function(){return this.__jI();
},_getContentHint:function(){return {width:this.__jC||0,height:this.__jD||0};
},_applyEnabled:function(A,B){qx.ui.core.Widget.prototype._applyEnabled.call(this,A,B);

if(this.getSource()){this._styleSource();
}},_applySource:function(C){this._styleSource();
},_applyScale:function(D){this._styleSource();
},__jF:function(E){this.__jE=E;
},__jG:function(){if(this.__jE==null){var G=this.getSource();
var F=false;

if(G!=null){F=qx.lang.String.endsWith(G,g);
}
if(this.getScale()&&F&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__jE=h;
}else if(this.getScale()){this.__jE=i;
}else{this.__jE=j;
}}return this.__jE;
},__jH:function(H){var I;
var J;

if(H==h){I=true;
J=f;
}else if(H==j){I=false;
J=f;
}else{I=true;
J=n;
}var K=new qx.html.Image(J);
K.setScale(I);
K.setStyles({"overflowX":b,"overflowY":b});
return K;
},__jI:function(){var L=this.__jG();

if(this.__jB[L]==null){this.__jB[L]=this.__jH(L);
}return this.__jB[L];
},_styleSource:function(){var M=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!M){this.getContentElement().resetSource();
return;
}this.__jJ(M);

if((qx.core.Environment.get(c)==l)){var N=this.getScale()?x:k;
this.getContentElement().tagNameHint=qx.bom.element.Decoration.getTagName(N,M);
}if(qx.util.ResourceManager.getInstance().has(M)){this.__jL(this.getContentElement(),M);
}else if(qx.io.ImageLoader.isLoaded(M)){this.__jM(this.getContentElement(),M);
}else{this.__jN(this.getContentElement(),M);
}},__jJ:qx.core.Environment.select(c,{"mshtml":function(O){var Q=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var P=qx.lang.String.endsWith(O,g);

if(Q&&P){if(this.getScale()&&this.__jG()!=h){this.__jF(h);
}else if(!this.getScale()&&this.__jG()!=j){this.__jF(j);
}}else{if(this.getScale()&&this.__jG()!=i){this.__jF(i);
}else if(!this.getScale()&&this.__jG()!=j){this.__jF(j);
}}this.__jK(this.__jI());
},"default":function(R){if(this.getScale()&&this.__jG()!=i){this.__jF(i);
}else if(!this.getScale()&&this.__jG(j)){this.__jF(j);
}this.__jK(this.__jI());
}}),__jK:function(S){var V=this.getContainerElement();
var W=V.getChild(0);

if(W!=S){if(W!=null){var Y=y;
var T={};
var U=this.getInnerSize();

if(U!=null){T.width=U.width+Y;
T.height=U.height+Y;
}var X=this.getInsets();
T.left=X.left+Y;
T.top=X.top+Y;
T.zIndex=10;
S.setStyles(T,true);
S.setSelectable(this.getSelectable());
}V.removeAt(0);
V.addAt(S,0);
}},__jL:function(ba,bb){var bd=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var bc=bb.replace(/\.([a-z]+)$/,t);

if(bd.has(bc)){bb=bc;
this.addState(e);
}else{this.removeState(e);
}}if(ba.getSource()===bb){return;
}ba.setSource(bb);
this.__jP(bd.getImageWidth(bb),bd.getImageHeight(bb));
},__jM:function(be,bf){var bh=qx.io.ImageLoader;
be.setSource(bf);
var bg=bh.getWidth(bf);
var bi=bh.getHeight(bf);
this.__jP(bg,bi);
},__jN:function(bj,bk){var self;
var bl=qx.io.ImageLoader;
if(!bl.isFailed(bk)){bl.load(bk,this.__jO,this);
}else{if(bj!=null){bj.resetSource();
}}},__jO:function(bm,bn){if(this.$$disposed===true){return;
}if(bm!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(bn.failed){this.warn("Image could not be loaded: "+bm);
this.fireEvent(s);
}else{this.fireEvent(u);
}this._styleSource();
},__jP:function(bo,bp){if(bo!==this.__jC||bp!==this.__jD){this.__jC=bo;
this.__jD=bp;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(q);
}});
})();
(function(){var g="dragdrop-cursor",f="_applyAction",e="alias",d="qx.ui.core.DragDropCursor",c="move",b="singleton",a="copy";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MPlacement,type:b,construct:function(){qx.ui.basic.Image.call(this);
this.setZIndex(1e8);
this.setDomMove(true);
var h=this.getApplicationRoot();
h.add(this,{left:-1000,top:-1000});
},properties:{appearance:{refine:true,init:g},action:{check:[e,a,c],apply:f,nullable:true}},members:{_applyAction:function(i,j){if(j){this.removeState(j);
}
if(i){this.addState(i);
}}}});
})();
(function(){var f="interval",e="Number",d="_applyTimeoutInterval",c="qx.event.type.Event",b="qx.event.Idle",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){qx.core.Object.call(this);
var g=new qx.event.Timer(this.getTimeoutInterval());
g.addListener(f,this._onInterval,this);
g.start();
this.__jQ=g;
},events:{"interval":c},properties:{timeoutInterval:{check:e,init:100,apply:d}},members:{__jQ:null,_applyTimeoutInterval:function(h){this.__jQ.setInterval(h);
},_onInterval:function(){this.fireEvent(f);
}},destruct:function(){if(this.__jQ){this.__jQ.stop();
}this.__jQ=null;
}});
})();
(function(){var o="top",n="right",m="bottom",l="left",k="align-start",j="qx.util.placement.AbstractAxis",i="edge-start",h="align-end",g="edge-end",f="-",c="best-fit",e="qx.util.placement.Placement",d="keep-align",b="direct",a='__jR';
qx.Class.define(e,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__jR=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:j},axisY:{check:j},edge:{check:[o,n,m,l],init:o},align:{check:[o,n,m,l],init:n}},statics:{__jS:null,compute:function(p,q,r,s,t,u,v){this.__jS=this.__jS||new qx.util.placement.Placement();
var y=t.split(f);
var x=y[0];
var w=y[1];
this.__jS.set({axisX:this.__jW(u),axisY:this.__jW(v),edge:x,align:w});
return this.__jS.compute(p,q,r,s);
},__jT:null,__jU:null,__jV:null,__jW:function(z){switch(z){case b:this.__jT=this.__jT||new qx.util.placement.DirectAxis();
return this.__jT;
case d:this.__jU=this.__jU||new qx.util.placement.KeepAlignAxis();
return this.__jU;
case c:this.__jV=this.__jV||new qx.util.placement.BestFitAxis();
return this.__jV;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__jR:null,compute:function(A,B,C,D){var E=this.getAxisX()||this.__jR;
var G=E.computeStart(A.width,{start:C.left,end:C.right},{start:D.left,end:D.right},B.width,this.__jX());
var F=this.getAxisY()||this.__jR;
var top=F.computeStart(A.height,{start:C.top,end:C.bottom},{start:D.top,end:D.bottom},B.height,this.__jY());
return {left:G,top:top};
},__jX:function(){var I=this.getEdge();
var H=this.getAlign();

if(I==l){return i;
}else if(I==n){return g;
}else if(H==l){return k;
}else if(H==n){return h;
}},__jY:function(){var K=this.getEdge();
var J=this.getAlign();

if(K==o){return i;
}else if(K==m){return g;
}else if(J==o){return k;
}else if(J==m){return h;
}}},destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var e="edge-start",d="align-start",c="align-end",b="edge-end",a="qx.util.placement.AbstractAxis";
qx.Class.define(a,{extend:qx.core.Object,members:{computeStart:function(f,g,h,i,j){throw new Error("abstract method call!");
},_moveToEdgeAndAlign:function(k,l,m,n){switch(n){case e:return l.start-m.end-k;
case b:return l.end+m.start;
case d:return l.start+m.start;
case c:return l.end-m.end-k;
}},_isInRange:function(o,p,q){return o>=0&&o+p<=q;
}}});
})();
(function(){var a="qx.util.placement.DirectAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){return this._moveToEdgeAndAlign(b,c,d,f);
}}});
})();
(function(){var c="qx.util.placement.KeepAlignAxis",b="edge-start",a="edge-end";
qx.Class.define(c,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(d,e,f,g,h){var i=this._moveToEdgeAndAlign(d,e,f,h);
var j,k;

if(this._isInRange(i,d,g)){return i;
}
if(h==b||h==a){j=e.start-f.end;
k=e.end+f.start;
}else{j=e.end-f.end;
k=e.start+f.start;
}
if(j>g-k){i=j-d;
}else{i=k;
}return i;
}}});
})();
(function(){var a="qx.util.placement.BestFitAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){var g=this._moveToEdgeAndAlign(b,c,d,f);

if(this._isInRange(g,b,e)){return g;
}
if(g<0){g=Math.min(0,e-b);
}
if(g+b>e){g=Math.max(0,e-b);
}return g;
}}});
})();
(function(){var f="mousedown",d="__ka",c="blur",b="singleton",a="qx.ui.popup.Manager";
qx.Class.define(a,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__ka=[];
qx.event.Registration.addListener(document.documentElement,f,this.__kc,this,true);
qx.bom.Element.addListener(window,c,this.hideAll,this);
},members:{__ka:null,add:function(g){this.__ka.push(g);
this.__kb();
},remove:function(h){if(this.__ka){qx.lang.Array.remove(this.__ka,h);
this.__kb();
}},hideAll:function(){var j;
var k=this.__ka;

if(k){for(var i=0,l=k.length;i<l;i++){var j=k[i];
j.getAutoHide()&&j.exclude();
}}},__kb:function(){var m=1e7;

for(var i=0;i<this.__ka.length;i++){this.__ka[i].setZIndex(m++);
}},__kc:function(e){var o=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var p=this.__ka;

for(var i=0;i<p.length;i++){var n=p[i];

if(!n.getAutoHide()||o==n||qx.ui.core.Widget.contains(n,o)){continue;
}n.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,f,this.__kc,this,true);
this._disposeArray(d);
}});
})();
(function(){var b="abstract",a="qx.ui.layout.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,members:{__kd:null,_invalidChildrenCache:null,__ke:null,invalidateLayoutCache:function(){this.__kd=null;
},renderLayout:function(c,d){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__kd){return this.__kd;
}return this.__kd=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(e){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var f=this.__ke;

if(f instanceof qx.ui.core.LayoutItem){f.clearSeparators();
}},_renderSeparator:function(g,h){this.__ke.renderSeparator(g,h);
},connectToWidget:function(i){if(i&&this.__ke){throw new Error("It is not possible to manually set the connected widget.");
}this.__ke=i;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__ke;
},_applyLayoutChange:function(){if(this.__ke){this.__ke.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__ke.getLayoutChildren();
}},destruct:function(){this.__ke=this.__kd=null;
}});
})();
(function(){var a="qx.ui.layout.Grow";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(b,c){var g=this._getLayoutChildren();
var f,h,e,d;
for(var i=0,l=g.length;i<l;i++){f=g[i];
h=f.getSizeHint();
e=b;

if(e<h.minWidth){e=h.minWidth;
}else if(e>h.maxWidth){e=h.maxWidth;
}d=c;

if(d<h.minHeight){d=h.minHeight;
}else if(d>h.maxHeight){d=h.maxHeight;
}f.renderLayout(0,0,e,d);
}},_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,s;
var r=0,p=0;
var n=0,k=0;
var j=Infinity,m=Infinity;
for(var i=0,l=q.length;i<l;i++){o=q[i];
s=o.getSizeHint();
r=Math.max(r,s.width);
p=Math.max(p,s.height);
n=Math.max(n,s.minWidth);
k=Math.max(k,s.minHeight);
j=Math.min(j,s.maxWidth);
m=Math.min(m,s.maxHeight);
}return {width:r,height:p,minWidth:n,minHeight:k,maxWidth:j,maxHeight:m};
}}});
})();
(function(){var j="label",i="icon",h="Boolean",g="both",f="String",e="left",d="changeGap",c="changeShow",b="bottom",a="_applyCenter",y="changeIcon",x="qx.ui.basic.Atom",w="changeLabel",v="Integer",u="_applyIconPosition",t="bottom-left",s="top-left",r="top",q="right",p="_applyRich",n="_applyIcon",o="_applyShow",l="_applyLabel",m="_applyGap",k="atom";
qx.Class.define(x,{extend:qx.ui.core.Widget,construct:function(z,A){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(z!=null){this.setLabel(z);
}
if(A!=null){this.setIcon(A);
}},properties:{appearance:{refine:true,init:k},label:{apply:l,nullable:true,check:f,event:w},rich:{check:h,init:false,apply:p},icon:{check:f,apply:n,nullable:true,themeable:true,event:y},gap:{check:v,nullable:false,event:d,apply:m,themeable:true,init:4},show:{init:g,check:[g,j,i],themeable:true,inheritable:true,apply:o,event:c},iconPosition:{init:e,check:[r,q,b,e,s,t],themeable:true,apply:u},center:{init:false,check:h,themeable:true,apply:a}},members:{_createChildControlImpl:function(B,C){var D;

switch(B){case j:D=new qx.ui.basic.Label(this.getLabel());
D.setAnonymous(true);
D.setRich(this.getRich());
this._add(D);

if(this.getLabel()==null||this.getShow()===i){D.exclude();
}break;
case i:D=new qx.ui.basic.Image(this.getIcon());
D.setAnonymous(true);
this._addAt(D,0);

if(this.getIcon()==null||this.getShow()===j){D.exclude();
}break;
}return D||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,B);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===i){this._excludeChildControl(j);
}else{this._showChildControl(j);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===j){this._excludeChildControl(i);
}else{this._showChildControl(i);
}},_applyLabel:function(E,F){var G=this.getChildControl(j,true);

if(G){G.setValue(E);
}this._handleLabel();
},_applyRich:function(H,I){var J=this.getChildControl(j,true);

if(J){J.setRich(H);
}},_applyIcon:function(K,L){var M=this.getChildControl(i,true);

if(M){M.setSource(K);
}this._handleIcon();
},_applyGap:function(N,O){this._getLayout().setGap(N);
},_applyShow:function(P,Q){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(R,S){this._getLayout().setIconPosition(R);
},_applyCenter:function(T,U){this._getLayout().setCenter(T);
},_applySelectable:function(V,W){qx.ui.core.Widget.prototype._applySelectable.call(this,V,W);
var X=this.getChildControl(j,true);

if(X){this.getChildControl(j).setSelectable(V);
}}}});
})();
(function(){var m="bottom",l="top",k="_applyLayoutChange",j="top-left",h="bottom-left",g="left",f="right",e="middle",d="center",c="qx.ui.layout.Atom",a="Integer",b="Boolean";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,properties:{gap:{check:a,init:4,apply:k},iconPosition:{check:[g,l,f,m,j,h],init:g,apply:k},center:{check:b,init:false,apply:k}},members:{verifyLayoutProperty:null,renderLayout:function(n,o){var x=qx.ui.layout.Util;
var q=this.getIconPosition();
var t=this._getLayoutChildren();
var length=t.length;
var I,top,H,r;
var C,w;
var A=this.getGap();
var F=this.getCenter();
if(q===m||q===f){var y=length-1;
var u=-1;
var s=-1;
}else{var y=0;
var u=length;
var s=1;
}if(q==l||q==m){if(F){var B=0;

for(var i=y;i!=u;i+=s){r=t[i].getSizeHint().height;

if(r>0){B+=r;

if(i!=y){B+=A;
}}}top=Math.round((o-B)/2);
}else{top=0;
}
for(var i=y;i!=u;i+=s){C=t[i];
w=C.getSizeHint();
H=Math.min(w.maxWidth,Math.max(n,w.minWidth));
r=w.height;
I=x.computeHorizontalAlignOffset(d,H,n);
C.renderLayout(I,top,H,r);
if(r>0){top+=r+A;
}}}else{var v=n;
var p=null;
var E=0;

for(var i=y;i!=u;i+=s){C=t[i];
H=C.getSizeHint().width;

if(H>0){if(!p&&C instanceof qx.ui.basic.Label){p=C;
}else{v-=H;
}E++;
}}
if(E>1){var D=(E-1)*A;
v-=D;
}
if(p){var w=p.getSizeHint();
var z=Math.max(w.minWidth,Math.min(v,w.maxWidth));
v-=z;
}
if(F&&v>0){I=Math.round(v/2);
}else{I=0;
}
for(var i=y;i!=u;i+=s){C=t[i];
w=C.getSizeHint();
r=Math.min(w.maxHeight,Math.max(o,w.minHeight));

if(C===p){H=z;
}else{H=w.width;
}var G=e;

if(q==j){G=l;
}else if(q==h){G=m;
}top=x.computeVerticalAlignOffset(G,w.height,o);
C.renderLayout(I,top,H,r);
if(H>0){I+=H+A;
}}}},_computeSizeHint:function(){var T=this._getLayoutChildren();
var length=T.length;
var L,R;
if(length===1){var L=T[0].getSizeHint();
R={width:L.width,height:L.height,minWidth:L.minWidth,minHeight:L.minHeight};
}else{var P=0,Q=0;
var M=0,O=0;
var N=this.getIconPosition();
var S=this.getGap();

if(N===l||N===m){var J=0;

for(var i=0;i<length;i++){L=T[i].getSizeHint();
Q=Math.max(Q,L.width);
P=Math.max(P,L.minWidth);
if(L.height>0){O+=L.height;
M+=L.minHeight;
J++;
}}
if(J>1){var K=(J-1)*S;
O+=K;
M+=K;
}}else{var J=0;

for(var i=0;i<length;i++){L=T[i].getSizeHint();
O=Math.max(O,L.height);
M=Math.max(M,L.minHeight);
if(L.width>0){Q+=L.width;
P+=L.minWidth;
J++;
}}
if(J>1){var K=(J-1)*S;
Q+=K;
P+=K;
}}R={minWidth:P,width:Q,minHeight:M,height:O};
}return R;
}}});
})();
(function(){var g="middle",f="qx.ui.layout.Util",e="left",d="center",c="top",b="bottom",a="right";
qx.Class.define(f,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(h,j,k){var n,r,m,s;
var o=j>k;
var t=Math.abs(j-k);
var u,p;
var q={};

for(r in h){n=h[r];
q[r]={potential:o?n.max-n.value:n.value-n.min,flex:o?n.flex:1/n.flex,offset:0};
}while(t!=0){s=Infinity;
m=0;

for(r in q){n=q[r];

if(n.potential>0){m+=n.flex;
s=Math.min(s,n.potential/n.flex);
}}if(m==0){break;
}s=Math.min(t,s*m)/m;
u=0;

for(r in q){n=q[r];

if(n.potential>0){p=Math.min(t,n.potential,Math.ceil(s*n.flex));
u+=p-s*n.flex;

if(u>=1){u-=1;
p-=1;
}n.potential-=p;

if(o){n.offset+=p;
}else{n.offset-=p;
}t-=p;
}}}return q;
},computeHorizontalAlignOffset:function(v,w,x,y,z){if(y==null){y=0;
}
if(z==null){z=0;
}var A=0;

switch(v){case e:A=y;
break;
case a:A=x-w-z;
break;
case d:A=Math.round((x-w)/2);
if(A<y){A=y;
}else if(A<z){A=Math.max(y,x-w-z);
}break;
}return A;
},computeVerticalAlignOffset:function(B,C,D,E,F){if(E==null){E=0;
}
if(F==null){F=0;
}var G=0;

switch(B){case c:G=E;
break;
case b:G=D-C-F;
break;
case g:G=Math.round((D-C)/2);
if(G<E){G=E;
}else if(G<F){G=Math.max(E,D-C-F);
}break;
}return G;
},collapseMargins:function(H){var I=0,K=0;

for(var i=0,l=arguments.length;i<l;i++){var J=arguments[i];

if(J<0){K=Math.min(K,J);
}else if(J>0){I=Math.max(I,J);
}}return I+K;
},computeHorizontalGaps:function(L,M,N){if(M==null){M=0;
}var O=0;

if(N){O+=L[0].getMarginLeft();

for(var i=1,l=L.length;i<l;i+=1){O+=this.collapseMargins(M,L[i-1].getMarginRight(),L[i].getMarginLeft());
}O+=L[l-1].getMarginRight();
}else{for(var i=1,l=L.length;i<l;i+=1){O+=L[i].getMarginLeft()+L[i].getMarginRight();
}O+=(M*(l-1));
}return O;
},computeVerticalGaps:function(P,Q,R){if(Q==null){Q=0;
}var S=0;

if(R){S+=P[0].getMarginTop();

for(var i=1,l=P.length;i<l;i+=1){S+=this.collapseMargins(Q,P[i-1].getMarginBottom(),P[i].getMarginTop());
}S+=P[l-1].getMarginBottom();
}else{for(var i=1,l=P.length;i<l;i+=1){S+=P[i].getMarginTop()+P[i].getMarginBottom();
}S+=(Q*(l-1));
}return S;
},computeHorizontalSeparatorGaps:function(T,U,V){var Y=qx.theme.manager.Decoration.getInstance().resolve(V);
var X=Y.getInsets();
var W=X.left+X.right;
var ba=0;

for(var i=0,l=T.length;i<l;i++){var bb=T[i];
ba+=bb.getMarginLeft()+bb.getMarginRight();
}ba+=(U+W+U)*(l-1);
return ba;
},computeVerticalSeparatorGaps:function(bc,bd,be){var bh=qx.theme.manager.Decoration.getInstance().resolve(be);
var bg=bh.getInsets();
var bf=bg.top+bg.bottom;
var bi=0;

for(var i=0,l=bc.length;i<l;i++){var bj=bc[i];
bi+=bj.getMarginTop()+bj.getMarginBottom();
}bi+=(bd+bf+bd)*(l-1);
return bi;
},arrangeIdeals:function(bk,bl,bm,bn,bo,bp){if(bl<bk||bo<bn){if(bl<bk&&bo<bn){bl=bk;
bo=bn;
}else if(bl<bk){bo-=(bk-bl);
bl=bk;
if(bo<bn){bo=bn;
}}else if(bo<bn){bl-=(bn-bo);
bo=bn;
if(bl<bk){bl=bk;
}}}
if(bl>bm||bo>bp){if(bl>bm&&bo>bp){bl=bm;
bo=bp;
}else if(bl>bm){bo+=(bl-bm);
bl=bm;
if(bo>bp){bo=bp;
}}else if(bo>bp){bl+=(bo-bp);
bo=bp;
if(bl>bm){bl=bm;
}}}return {begin:bl,end:bo};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var k="qx.dynlocale",j="Boolean",i="color",h="enabled",g="changeLocale",f="_applyTextAlign",d="qx.ui.core.Widget",c="nowrap",b="changeTextAlign",a="_applyWrap",D="changeValue",C="changeContent",B="qx.ui.basic.Label",A="whiteSpace",z="css.textoverflow",y="html.xul",x="_applyValue",w="center",v="_applyBuddy",u="String",r="textAlign",s="right",p="changeRich",q="normal",n="_applyRich",o="click",l="label",m="left",t="A";
qx.Class.define(B,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(E){qx.ui.core.Widget.call(this);

if(E!=null){this.setValue(E);
}
if(qx.core.Environment.get(k)){qx.locale.Manager.getInstance().addListener(g,this._onChangeLocale,this);
}},properties:{rich:{check:j,init:false,event:p,apply:n},wrap:{check:j,init:true,apply:a},value:{check:u,apply:x,event:D,nullable:true},buddy:{check:d,apply:v,nullable:true,init:null,dereference:true},textAlign:{check:[m,w,s],nullable:true,themeable:true,apply:f,event:b},appearance:{refine:true,init:l},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__kf:null,__kg:null,__kh:null,__ki:null,_getContentHint:function(){if(this.__kg){this.__kj=this.__kk();
delete this.__kg;
}return {width:this.__kj.width,height:this.__kj.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(F){if(!qx.core.Environment.get(z)&&qx.core.Environment.get(y)){if(F&&!this.isRich()){return;
}}qx.ui.core.Widget.prototype._applySelectable.call(this,F);
},_getContentHeightForWidth:function(G){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__kk(G).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(H,I){this.getContentElement().setStyle(r,H);
},_applyTextColor:function(J,K){if(J){this.getContentElement().setStyle(i,qx.theme.manager.Color.getInstance().resolve(J));
}else{this.getContentElement().removeStyle(i);
}},__kj:{width:0,height:0},_applyFont:function(L,M){var N;

if(L){this.__kf=qx.theme.manager.Font.getInstance().resolve(L);
N=this.__kf.getStyles();
}else{this.__kf=null;
N=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(N);
this.__kg=true;
qx.ui.core.queue.Layout.add(this);
},__kk:function(O){var S=qx.bom.Label;
var Q=this.getFont();
var P=Q?this.__kf.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||t;
var R=this.getRich();
return R?S.getHtmlSize(content,P,O):S.getTextSize(content,P);
},_applyBuddy:function(T,U){if(U!=null){U.removeBinding(this.__kh);
this.__kh=null;
this.removeListenerById(this.__ki);
this.__ki=null;
}
if(T!=null){this.__kh=T.bind(h,this,h);
this.__ki=this.addListener(o,function(){if(T.isFocusable()){T.focus.apply(T);
}},this);
}},_applyRich:function(V){this.getContentElement().setRich(V);
this.__kg=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(W,X){if(W&&!this.isRich()){}
if(this.isRich()){var Y=W?q:c;
this.getContentElement().setStyle(A,Y);
}},_onChangeLocale:qx.core.Environment.select(k,{"true":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"false":null}),_applyValue:function(ba,bb){this.getContentElement().setValue(ba);
this.__kg=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(C,ba,bb);
}},destruct:function(){if(qx.core.Environment.get(k)){qx.locale.Manager.getInstance().removeListener(g,this._onChangeLocale,this);
}if(this.__kh!=null){var bc=this.getBuddy();

if(bc!=null&&!bc.isDisposed()){bc.removeBinding(this.__kh);
}}this.__kf=this.__kh=null;
}});
})();
(function(){var b="value",a="qx.html.Label";
qx.Class.define(a,{extend:qx.html.Element,members:{__kl:null,_applyProperty:function(name,c){qx.html.Element.prototype._applyProperty.call(this,name,c);

if(name==b){var d=this.getDomElement();
qx.bom.Label.setValue(d,c);
}},_createDomElement:function(){var f=this.__kl;
var e=qx.bom.Label.create(this._content,f);
return e;
},_copyData:function(g){return qx.html.Element.prototype._copyData.call(this,true);
},setRich:function(h){var i=this.getDomElement();

if(i){throw new Error("The label mode cannot be modified after initial creation");
}h=!!h;

if(this.__kl==h){return;
}this.__kl=h;
return this;
},setValue:function(j){this._setProperty(b,j);
return this;
},getValue:function(){return this._getProperty(b);
}}});
})();
(function(){var j="css.textoverflow",i="html.xul",h="div",g="inherit",f="text",e="value",d="",c="engine.name",b="hidden",a="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",E="nowrap",D="auto",C="0",B="ellipsis",A="normal",z="label",y="os.name",x="px",w="crop",v="gecko",q="end",r="100%",o="visible",p="qx.bom.Label",m="win",n="opera",k="engine.version",l="mshtml",s="block",t="-1000px",u="absolute";
qx.Class.define(p,{statics:{__km:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__kn:function(){var F=this.__kp(false);
document.body.insertBefore(F,document.body.firstChild);
return this._textElement=F;
},__ko:function(){var G=this.__kp(true);
document.body.insertBefore(G,document.body.firstChild);
return this._htmlElement=G;
},__kp:function(H){var I=qx.bom.Element.create(h);
var J=I.style;
J.width=J.height=D;
J.left=J.top=t;
J.visibility=b;
J.position=u;
J.overflow=o;

if(H){J.whiteSpace=A;
}else{J.whiteSpace=E;

if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){var K=document.createElementNS(a,z);
var J=K.style;
J.padding=C;

for(var L in this.__km){J[L]=g;
}I.appendChild(K);
}}return I;
},__kq:function(M){var N={};

if(M){N.whiteSpace=A;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){N.display=s;
}else{N.overflow=b;
N.whiteSpace=E;
N.textOverflow=B;
if((qx.core.Environment.get(c)==n)){N.OTextOverflow=B;
}}return N;
},create:function(content,O,P){if(!P){P=window;
}
if(O){var Q=P.document.createElement(h);
Q.useHtml=true;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){var Q=P.document.createElement(h);
var S=P.document.createElementNS(a,z);
var R=S.style;
R.cursor=g;
R.color=g;
R.overflow=b;
R.maxWidth=r;
R.padding=C;
for(var T in this.__km){S.style[T]=g;
}S.setAttribute(w,q);
Q.appendChild(S);
}else{var Q=P.document.createElement(h);
qx.bom.element.Style.setStyles(Q,this.__kq(O));
}
if(content){this.setValue(Q,content);
}return Q;
},setValue:function(U,V){V=V||d;

if(U.useHtml){U.innerHTML=V;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){U.firstChild.setAttribute(e,V);
}else{qx.bom.element.Attribute.set(U,f,V);
}},getValue:function(W){if(W.useHtml){return W.innerHTML;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){return W.firstChild.getAttribute(e)||d;
}else{return qx.bom.element.Attribute.get(W,f);
}},getHtmlSize:function(content,X,Y){var ba=this._htmlElement||this.__ko();
ba.style.width=Y!==undefined?Y+x:D;
ba.innerHTML=content;
return this.__kr(ba,X);
},getTextSize:function(bb,bc){var bd=this._textElement||this.__kn();

if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){bd.firstChild.setAttribute(e,bb);
}else{qx.bom.element.Attribute.set(bd,f,bb);
}return this.__kr(bd,bc);
},__kr:function(be,bf){var bg=this.__km;

if(!bf){bf={};
}
for(var bh in bg){be.style[bh]=bf[bh]||d;
}var bi=qx.bom.element.Dimension.getSize(be);

if((qx.core.Environment.get(c)==v)){if(!(qx.core.Environment.get(y)==m)){bi.width++;
}}if((qx.core.Environment.get(c)==l)&&parseFloat(qx.core.Environment.get(k))>=9){bi.width++;
}return bi;
}}});
})();
(function(){var j="engine.name",i="0px",h="mshtml",g="engine.version",f="qx.bom.element.Dimension",e="paddingRight",d="paddingLeft",c="opera",b="paddingBottom",a="paddingTop";
qx.Class.define(f,{statics:{getWidth:qx.core.Environment.select(j,{"gecko":function(k){if(k.getBoundingClientRect){var l=k.getBoundingClientRect();
return Math.round(l.right)-Math.round(l.left);
}else{return k.offsetWidth;
}},"default":function(m){return m.offsetWidth;
}}),getHeight:qx.core.Environment.select(j,{"gecko":function(n){if(n.getBoundingClientRect){var o=n.getBoundingClientRect();
return Math.round(o.bottom)-Math.round(o.top);
}else{return n.offsetHeight;
}},"default":function(p){return p.offsetHeight;
}}),getSize:function(q){return {width:this.getWidth(q),height:this.getHeight(q)};
},__ks:{visible:true,hidden:true},getContentWidth:function(r){var s=qx.bom.element.Style;
var t=qx.bom.element.Overflow.getX(r);
var u=parseInt(s.get(r,d)||i,10);
var x=parseInt(s.get(r,e)||i,10);

if(this.__ks[t]){var w=r.clientWidth;

if((qx.core.Environment.get(j)==c)){w=w-u-x;
}else{if(qx.dom.Node.isBlockNode(r)){w=w-u-x;
}}return w;
}else{if(r.clientWidth>=r.scrollWidth){return Math.max(r.clientWidth,r.scrollWidth)-u-x;
}else{var v=r.scrollWidth-u;
if(qx.core.Environment.get(j)==h&&qx.core.Environment.get(g)>=6){v-=x;
}return v;
}}},getContentHeight:function(y){var z=qx.bom.element.Style;
var C=qx.bom.element.Overflow.getY(y);
var B=parseInt(z.get(y,a)||i,10);
var A=parseInt(z.get(y,b)||i,10);

if(this.__ks[C]){return y.clientHeight-B-A;
}else{if(y.clientHeight>=y.scrollHeight){return Math.max(y.clientHeight,y.scrollHeight)-B-A;
}else{var D=y.scrollHeight-B;
if(qx.core.Environment.get(j)==h&&qx.core.Environment.get(g)==6){D-=A;
}return D;
}}},getContentSize:function(E){return {width:this.getContentWidth(E),height:this.getContentHeight(E)};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IForm";
qx.Interface.define(a,{events:{"changeEnabled":b,"changeValid":b,"changeInvalidMessage":b,"changeRequired":b},members:{setEnabled:function(c){return arguments.length==1;
},getEnabled:function(){},setRequired:function(d){return arguments.length==1;
},getRequired:function(){},setValid:function(e){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(f){return arguments.length==1;
},getInvalidMessage:function(){},setRequiredInvalidMessage:function(g){return arguments.length==1;
},getRequiredInvalidMessage:function(){}}});
})();
(function(){var i="qx.ui.window.Window",h="changeModal",g="changeVisibility",f="changeActive",d="_applyActiveWindow",c="__ku",b="__kt",a="qx.ui.window.MDesktop";
qx.Mixin.define(a,{properties:{activeWindow:{check:i,apply:d,init:null,nullable:true}},members:{__kt:null,__ku:null,getWindowManager:function(){if(!this.__ku){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__ku;
},supportsMaximize:function(){return true;
},setWindowManager:function(j){if(this.__ku){this.__ku.setDesktop(null);
}j.setDesktop(this);
this.__ku=j;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(k,l){this.getWindowManager().changeActiveWindow(k,l);
this.getWindowManager().updateStack();
},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(m){if(qx.Class.isDefined(i)&&m instanceof qx.ui.window.Window){this._addWindow(m);
}},_addWindow:function(n){if(!qx.lang.Array.contains(this.getWindows(),n)){this.getWindows().push(n);
n.addListener(f,this._onChangeActive,this);
n.addListener(h,this._onChangeModal,this);
n.addListener(g,this._onChangeVisibility,this);
}
if(n.getActive()){this.setActiveWindow(n);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(o){if(qx.Class.isDefined(i)&&o instanceof qx.ui.window.Window){this._removeWindow(o);
}},_removeWindow:function(p){qx.lang.Array.remove(this.getWindows(),p);
p.removeListener(f,this._onChangeActive,this);
p.removeListener(h,this._onChangeModal,this);
p.removeListener(g,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__kt){this.__kt=[];
}return this.__kt;
}},destruct:function(){this._disposeArray(b);
this._disposeObjects(c);
}});
})();
(function(){var f="_applyBlockerColor",e="Number",d="qx.ui.core.MBlocker",c="_applyBlockerOpacity",b="Color",a="__kv";
qx.Mixin.define(d,{construct:function(){this.__kv=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:b,init:null,nullable:true,apply:f,themeable:true},blockerOpacity:{check:e,init:1,apply:c,themeable:true}},members:{__kv:null,_applyBlockerColor:function(g,h){this.__kv.setColor(g);
},_applyBlockerOpacity:function(i,j){this.__kv.setOpacity(i);
},block:function(){this.__kv.block();
},isBlocked:function(){return this.__kv.isBlocked();
},unblock:function(){this.__kv.unblock();
},forceUnblock:function(){this.__kv.forceUnblock();
},blockContent:function(k){this.__kv.blockContent(k);
},isContentBlocked:function(){return this.__kv.isContentBlocked();
},unblockContent:function(){this.__kv.unblockContent();
},forceUnblockContent:function(){this.__kv.forceUnblockContent();
},getBlocker:function(){return this.__kv;
}},destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var t="engine.name",s="help",r="contextmenu",q="changeGlobalCursor",p="keypress",o="Boolean",n="root",m="",l=" !important",k="input",d="_applyGlobalCursor",j="Space",h="_applyNativeHelp",c=";",b="qx.ui.root.Abstract",g="abstract",f="textarea",i="String",a="*";
qx.Class.define(b,{type:g,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
this.addListener(p,this.__kx,this);
},properties:{appearance:{refine:true,init:n},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:i,nullable:true,themeable:true,apply:d,event:q},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:o,init:false,apply:h}},members:{__kw:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Environment.select(t,{"mshtml":function(u,v){},"default":function(w,x){var y=qx.bom.Stylesheet;
var z=this.__kw;

if(!z){this.__kw=z=y.createElement();
}y.removeAllRules(z);

if(w){y.addRule(z,a,qx.bom.element.Cursor.compile(w).replace(c,m)+l);
}}}),_applyNativeContextMenu:function(A,B){if(A){this.removeListener(r,this._onNativeContextMenu,this,true);
}else{this.addListener(r,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},__kx:function(e){if(e.getKeyIdentifier()!==j){return;
}var D=e.getTarget();
var C=qx.ui.core.FocusHandler.getInstance();

if(!C.isFocused(D)){return;
}var E=D.getContentElement().getNodeName();

if(E===k||E===f){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Environment.select(t,{"mshtml":function(F,G){if(G===false){qx.bom.Event.removeNativeListener(document,s,qx.lang.Function.returnFalse);
}
if(F===false){qx.bom.Event.addNativeListener(document,s,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__kw=null;
},defer:function(H,I){qx.ui.core.MChildrenHandling.remap(I);
}});
})();
(function(){var n="resize",m="engine.name",l="position",k="0px",j="webkit",i="paddingLeft",h="$$widget",g="qx.ui.root.Application",f="hidden",d="div",a="paddingTop",c="100%",b="absolute";
qx.Class.define(g,{extend:qx.ui.root.Abstract,construct:function(o){this.__ky=qx.dom.Node.getWindow(o);
this.__kz=o;
qx.ui.root.Abstract.call(this);
qx.event.Registration.addListener(this.__ky,n,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__ky:null,__kz:null,_createContainerElement:function(){var p=this.__kz;
if((qx.core.Environment.get(m)==j)){if(!p.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var t=p.documentElement.style;
var q=p.body.style;
t.overflow=q.overflow=f;
t.padding=t.margin=q.padding=q.margin=k;
t.width=t.height=q.width=q.height=c;
var s=p.createElement(d);
p.body.appendChild(s);
var r=new qx.html.Root(s);
r.setStyle(l,b);
r.setAttribute(h,this.toHashCode());
return r;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var u=qx.bom.Viewport.getWidth(this.__ky);
var v=qx.bom.Viewport.getHeight(this.__ky);
return {minWidth:u,width:u,maxWidth:u,minHeight:v,height:v,maxHeight:v};
},_applyPadding:function(w,x,name){if(w&&(name==a||name==i)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}qx.ui.root.Abstract.prototype._applyPadding.call(this,w,x,name);
},_applyDecorator:function(y,z){qx.ui.root.Abstract.prototype._applyDecorator.call(this,y,z);

if(!y){return;
}var A=this.getDecoratorElement().getInsets();

if(A.left||A.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__ky=this.__kz=null;
}});
})();
(function(){var l="zIndex",k="px",j="keydown",h="deactivate",g="resize",f="keyup",d="keypress",c="backgroundColor",b="_applyOpacity",a="Boolean",x="__kH",w="opacity",v="interval",u="Tab",t="Color",s="qx.ui.root.Page",r="__kD",q="__kF",p="Number",o="qx.ui.core.Blocker",m="qx.ui.root.Application",n="_applyColor";
qx.Class.define(o,{extend:qx.core.Object,construct:function(y){qx.core.Object.call(this);
this._widget=y;
this._isPageRoot=(qx.Class.isDefined(s)&&y instanceof qx.ui.root.Page);

if(this._isPageRoot){y.addListener(g,this.__kI,this);
}
if(qx.Class.isDefined(m)&&y instanceof qx.ui.root.Application){this.setKeepBlockerActive(true);
}this.__kA=[];
this.__kB=[];
this.__kC=[];
},properties:{color:{check:t,init:null,nullable:true,apply:n,themeable:true},opacity:{check:p,init:1,apply:b,themeable:true},keepBlockerActive:{check:a,init:false}},members:{__kD:null,__kE:0,__kF:null,__kC:null,__kA:null,__kB:null,__kG:null,__kH:null,_isPageRoot:false,_widget:null,__kI:function(e){var z=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:z.width,height:z.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:z.width,height:z.height});
}},_applyColor:function(A,B){var C=qx.theme.manager.Color.getInstance().resolve(A);
this.__kJ(c,C);
},_applyOpacity:function(D,E){this.__kJ(w,D);
},__kJ:function(F,G){var H=[];
this.__kD&&H.push(this.__kD);
this.__kF&&H.push(this.__kF);

for(var i=0;i<H.length;i++){H[i].setStyle(F,G);
}},_backupActiveWidget:function(){var I=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__kA.push(I.getActive());
this.__kB.push(I.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var L=this.__kA.length;

if(L>0){var K=this.__kA[L-1];

if(K){qx.bom.Element.activate(K);
}this.__kA.pop();
}var J=this.__kB.length;

if(J>0){var K=this.__kB[J-1];

if(K){qx.bom.Element.focus(this.__kB[J-1]);
}this.__kB.pop();
}},__kK:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},getBlockerElement:function(){if(!this.__kD){this.__kD=this.__kK();
this.__kD.setStyle(l,15);
this._widget.getContainerElement().add(this.__kD);
this.__kD.exclude();
}return this.__kD;
},block:function(){this.__kE++;

if(this.__kE<2){this._backupActiveWidget();
var M=this.getBlockerElement();
M.include();
M.activate();
M.addListener(h,this.__kP,this);
M.addListener(d,this.__kO,this);
M.addListener(j,this.__kO,this);
M.addListener(f,this.__kO,this);
}},isBlocked:function(){return this.__kE>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__kE--;

if(this.__kE<1){this.__kL();
this.__kE=0;
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__kE=0;
this.__kL();
},__kL:function(){this._restoreActiveWidget();
var N=this.getBlockerElement();
N.removeListener(h,this.__kP,this);
N.removeListener(d,this.__kO,this);
N.removeListener(j,this.__kO,this);
N.removeListener(f,this.__kO,this);
N.exclude();
},getContentBlockerElement:function(){if(!this.__kF){this.__kF=this.__kK();
this._widget.getContentElement().add(this.__kF);
this.__kF.exclude();
}return this.__kF;
},blockContent:function(O){var P=this.getContentBlockerElement();
P.setStyle(l,O);
this.__kC.push(O);

if(this.__kC.length<2){P.include();

if(this._isPageRoot){if(!this.__kH){this.__kH=new qx.event.Timer(300);
this.__kH.addListener(v,this.__kN,this);
}this.__kH.start();
this.__kN();
}}},isContentBlocked:function(){return this.__kC.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__kC.pop();
var Q=this.__kC[this.__kC.length-1];
var R=this.getContentBlockerElement();
R.setStyle(l,Q);

if(this.__kC.length<1){this.__kM();
this.__kC=[];
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__kC=[];
var S=this.getContentBlockerElement();
S.setStyle(l,null);
this.__kM();
},__kM:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__kH.stop();
}},__kN:function(){var T=this._widget.getContainerElement().getDomElement();
var U=qx.dom.Node.getDocument(T);
this.getContentBlockerElement().setStyles({height:U.documentElement.scrollHeight+k,width:U.documentElement.scrollWidth+k});
},__kO:function(e){if(e.getKeyIdentifier()==u){e.stop();
}},__kP:function(){if(this.getKeepBlockerActive()){this.getBlockerElement().activate();
}}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(g,this.__kI,this);
}this._disposeObjects(q,r,x);
this.__kG=this.__kA=this.__kB=this._widget=this.__kC=null;
}});
})();
(function(){var k="cursor",j="100%",i="repeat",h="mousedown",g="url(",f=")",d="mouseout",c="div",b="dblclick",a="mousewheel",w="qx.html.Blocker",v="mousemove",u="mouseover",t="appear",s="click",r="mshtml",q="engine.name",p="mouseup",o="contextmenu",n="disappear",l="qx/static/blank.gif",m="absolute";
qx.Class.define(w,{extend:qx.html.Element,construct:function(x,y){var x=x?qx.theme.manager.Color.getInstance().resolve(x):null;
var z={position:m,width:j,height:j,opacity:y||0,backgroundColor:x};
if((qx.core.Environment.get(q)==r)){z.backgroundImage=g+qx.util.ResourceManager.getInstance().toUri(l)+f;
z.backgroundRepeat=i;
}qx.html.Element.call(this,c,z);
this.addListener(h,this._stopPropagation,this);
this.addListener(p,this._stopPropagation,this);
this.addListener(s,this._stopPropagation,this);
this.addListener(b,this._stopPropagation,this);
this.addListener(v,this._stopPropagation,this);
this.addListener(u,this._stopPropagation,this);
this.addListener(d,this._stopPropagation,this);
this.addListener(a,this._stopPropagation,this);
this.addListener(o,this._stopPropagation,this);
this.addListener(t,this.__kQ,this);
this.addListener(n,this.__kQ,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__kQ:function(){var A=this.getStyle(k);
this.setStyle(k,null,true);
this.setStyle(k,A,true);
}}});
})();
(function(){var k="__kR",j="keypress",h="focusout",g="activate",f="Tab",d="singleton",c="deactivate",b="focusin",a="qx.ui.core.FocusHandler";
qx.Class.define(a,{extend:qx.core.Object,type:d,construct:function(){qx.core.Object.call(this);
this.__kR={};
},members:{__kR:null,__kS:null,__kT:null,__kU:null,connectTo:function(m){m.addListener(j,this.__kV,this);
m.addListener(b,this._onFocusIn,this,true);
m.addListener(h,this._onFocusOut,this,true);
m.addListener(g,this._onActivate,this,true);
m.addListener(c,this._onDeactivate,this,true);
},addRoot:function(n){this.__kR[n.$$hash]=n;
},removeRoot:function(o){delete this.__kR[o.$$hash];
},getActiveWidget:function(){return this.__kS;
},isActive:function(p){return this.__kS==p;
},getFocusedWidget:function(){return this.__kT;
},isFocused:function(q){return this.__kT==q;
},isFocusRoot:function(r){return !!this.__kR[r.$$hash];
},_onActivate:function(e){var t=e.getTarget();
this.__kS=t;
var s=this.__kW(t);

if(s!=this.__kU){this.__kU=s;
}},_onDeactivate:function(e){var u=e.getTarget();

if(this.__kS==u){this.__kS=null;
}},_onFocusIn:function(e){var v=e.getTarget();

if(v!=this.__kT){this.__kT=v;
v.visualizeFocus();
}},_onFocusOut:function(e){var w=e.getTarget();

if(w==this.__kT){this.__kT=null;
w.visualizeBlur();
}},__kV:function(e){if(e.getKeyIdentifier()!=f){return;
}
if(!this.__kU){return;
}e.stopPropagation();
e.preventDefault();
var x=this.__kT;

if(!e.isShiftPressed()){var y=x?this.__lb(x):this.__kY();
}else{var y=x?this.__lc(x):this.__la();
}if(y){y.tabFocus();
}},__kW:function(z){var A=this.__kR;

while(z){if(A[z.$$hash]){return z;
}z=z.getLayoutParent();
}return null;
},__kX:function(B,C){if(B===C){return 0;
}var E=B.getTabIndex()||0;
var D=C.getTabIndex()||0;

if(E!=D){return E-D;
}var J=B.getContainerElement().getDomElement();
var I=C.getContainerElement().getDomElement();
var H=qx.bom.element.Location;
var G=H.get(J);
var F=H.get(I);
if(G.top!=F.top){return G.top-F.top;
}if(G.left!=F.left){return G.left-F.left;
}var K=B.getZIndex();
var L=C.getZIndex();

if(K!=L){return K-L;
}return 0;
},__kY:function(){return this.__lf(this.__kU,null);
},__la:function(){return this.__lg(this.__kU,null);
},__lb:function(M){var N=this.__kU;

if(N==M){return this.__kY();
}
while(M&&M.getAnonymous()){M=M.getLayoutParent();
}
if(M==null){return [];
}var O=[];
this.__ld(N,M,O);
O.sort(this.__kX);
var P=O.length;
return P>0?O[0]:this.__kY();
},__lc:function(Q){var R=this.__kU;

if(R==Q){return this.__la();
}
while(Q&&Q.getAnonymous()){Q=Q.getLayoutParent();
}
if(Q==null){return [];
}var S=[];
this.__le(R,Q,S);
S.sort(this.__kX);
var T=S.length;
return T>0?S[T-1]:this.__la();
},__ld:function(parent,U,V){var W=parent.getLayoutChildren();
var X;

for(var i=0,l=W.length;i<l;i++){X=W[i];
if(!(X instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(X)&&X.isEnabled()&&X.isVisible()){if(X.isTabable()&&this.__kX(U,X)<0){V.push(X);
}this.__ld(X,U,V);
}}},__le:function(parent,Y,ba){var bb=parent.getLayoutChildren();
var bc;

for(var i=0,l=bb.length;i<l;i++){bc=bb[i];
if(!(bc instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(bc)&&bc.isEnabled()&&bc.isVisible()){if(bc.isTabable()&&this.__kX(Y,bc)>0){ba.push(bc);
}this.__le(bc,Y,ba);
}}},__lf:function(parent,bd){var be=parent.getLayoutChildren();
var bf;

for(var i=0,l=be.length;i<l;i++){bf=be[i];
if(!(bf instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bf)&&bf.isEnabled()&&bf.isVisible()){if(bf.isTabable()){if(bd==null||this.__kX(bf,bd)<0){bd=bf;
}}bd=this.__lf(bf,bd);
}}return bd;
},__lg:function(parent,bg){var bh=parent.getLayoutChildren();
var bi;

for(var i=0,l=bh.length;i<l;i++){bi=bh[i];
if(!(bi instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bi)&&bi.isEnabled()&&bi.isVisible()){if(bi.isTabable()){if(bg==null||this.__kX(bi,bg)>0){bg=bi;
}}bg=this.__lg(bi,bg);
}}return bg;
}},destruct:function(){this._disposeMap(k);
this.__kT=this.__kS=this.__kU=null;
}});
})();
(function(){var l="engine.name",k="head",j="text/css",h="stylesheet",g="}",f='@import "',e="{",d='";',c="qx.bom.Stylesheet",b="link",a="style";
qx.Class.define(c,{statics:{includeFile:function(m,n){if(!n){n=document;
}var o=n.createElement(b);
o.type=j;
o.rel=h;
o.href=qx.util.ResourceManager.getInstance().toUri(m);
var p=n.getElementsByTagName(k)[0];
p.appendChild(o);
},createElement:qx.core.Environment.select(l,{"mshtml":function(q){var r=document.createStyleSheet();

if(q){r.cssText=q;
}return r;
},"default":function(s){var t=document.createElement(a);
t.type=j;

if(s){t.appendChild(document.createTextNode(s));
}document.getElementsByTagName(k)[0].appendChild(t);
return t.sheet;
}}),addRule:qx.core.Environment.select(l,{"mshtml":function(u,v,w){u.addRule(v,w);
},"default":function(x,y,z){x.insertRule(y+e+z+g,x.cssRules.length);
}}),removeRule:qx.core.Environment.select(l,{"mshtml":function(A,B){var C=A.rules;
var D=C.length;

for(var i=D-1;i>=0;--i){if(C[i].selectorText==B){A.removeRule(i);
}}},"default":function(E,F){var G=E.cssRules;
var H=G.length;

for(var i=H-1;i>=0;--i){if(G[i].selectorText==F){E.deleteRule(i);
}}}}),removeAllRules:qx.core.Environment.select(l,{"mshtml":function(I){var J=I.rules;
var K=J.length;

for(var i=K-1;i>=0;i--){I.removeRule(i);
}},"default":function(L){var M=L.cssRules;
var N=M.length;

for(var i=N-1;i>=0;i--){L.deleteRule(i);
}}}),addImport:qx.core.Environment.select(l,{"mshtml":function(O,P){O.addImport(P);
},"default":function(Q,R){Q.insertRule(f+R+d,Q.cssRules.length);
}}),removeImport:qx.core.Environment.select(l,{"mshtml":function(S,T){var U=S.imports;
var V=U.length;

for(var i=V-1;i>=0;i--){if(U[i].href==T){S.removeImport(i);
}}},"default":function(W,X){var Y=W.cssRules;
var ba=Y.length;

for(var i=ba-1;i>=0;i--){if(Y[i].href==X){W.deleteRule(i);
}}}}),removeAllImports:qx.core.Environment.select(l,{"mshtml":function(bb){var bc=bb.imports;
var bd=bc.length;

for(var i=bd-1;i>=0;i--){bb.removeImport(i);
}},"default":function(be){var bf=be.cssRules;
var bg=bf.length;

for(var i=bg-1;i>=0;i--){if(bf[i].type==bf[i].IMPORT_RULE){be.deleteRule(i);
}}}})}});
})();
(function(){var b="number",a="qx.ui.layout.Canvas";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(c,d){var q=this._getLayoutChildren();
var g,p,n;
var s,top,e,f,j,h;
var o,m,r,k;

for(var i=0,l=q.length;i<l;i++){g=q[i];
p=g.getSizeHint();
n=g.getLayoutProperties();
o=g.getMarginTop();
m=g.getMarginRight();
r=g.getMarginBottom();
k=g.getMarginLeft();
s=n.left!=null?n.left:n.edge;

if(qx.lang.Type.isString(s)){s=Math.round(parseFloat(s)*c/100);
}e=n.right!=null?n.right:n.edge;

if(qx.lang.Type.isString(e)){e=Math.round(parseFloat(e)*c/100);
}top=n.top!=null?n.top:n.edge;

if(qx.lang.Type.isString(top)){top=Math.round(parseFloat(top)*d/100);
}f=n.bottom!=null?n.bottom:n.edge;

if(qx.lang.Type.isString(f)){f=Math.round(parseFloat(f)*d/100);
}if(s!=null&&e!=null){j=c-s-e-k-m;
if(j<p.minWidth){j=p.minWidth;
}else if(j>p.maxWidth){j=p.maxWidth;
}s+=k;
}else{j=n.width;

if(j==null){j=p.width;
}else{j=Math.round(parseFloat(j)*c/100);
if(j<p.minWidth){j=p.minWidth;
}else if(j>p.maxWidth){j=p.maxWidth;
}}
if(e!=null){s=c-j-e-m-k;
}else if(s==null){s=k;
}else{s+=k;
}}if(top!=null&&f!=null){h=d-top-f-o-r;
if(h<p.minHeight){h=p.minHeight;
}else if(h>p.maxHeight){h=p.maxHeight;
}top+=o;
}else{h=n.height;

if(h==null){h=p.height;
}else{h=Math.round(parseFloat(h)*d/100);
if(h<p.minHeight){h=p.minHeight;
}else if(h>p.maxHeight){h=p.maxHeight;
}}
if(f!=null){top=d-h-f-r-o;
}else if(top==null){top=o;
}else{top+=o;
}}g.renderLayout(s,top,j,h);
}},_computeSizeHint:function(){var I=0,H=0;
var F=0,D=0;
var B,A;
var z,x;
var t=this._getLayoutChildren();
var w,G,v;
var J,top,u,y;

for(var i=0,l=t.length;i<l;i++){w=t[i];
G=w.getLayoutProperties();
v=w.getSizeHint();
var E=w.getMarginLeft()+w.getMarginRight();
var C=w.getMarginTop()+w.getMarginBottom();
B=v.width+E;
A=v.minWidth+E;
J=G.left!=null?G.left:G.edge;

if(J&&typeof J===b){B+=J;
A+=J;
}u=G.right!=null?G.right:G.edge;

if(u&&typeof u===b){B+=u;
A+=u;
}I=Math.max(I,B);
H=Math.max(H,A);
z=v.height+C;
x=v.minHeight+C;
top=G.top!=null?G.top:G.edge;

if(top&&typeof top===b){z+=top;
x+=top;
}y=G.bottom!=null?G.bottom:G.edge;

if(y&&typeof y===b){z+=y;
x+=y;
}F=Math.max(F,z);
D=Math.max(D,x);
}return {width:I,minWidth:H,height:F,minHeight:D};
}}});
})();
(function(){var a="qx.html.Root";
qx.Class.define(a,{extend:qx.html.Element,construct:function(b){qx.html.Element.call(this);

if(b!=null){this.useElement(b);
}},members:{useElement:function(c){qx.html.Element.prototype.useElement.call(this,c);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.ui.table.ITableModel";
qx.Interface.define(a,{events:{"dataChanged":c,"metaDataChanged":b,"sorted":c},members:{getRowCount:function(){},getRowData:function(d){},getColumnCount:function(){},getColumnId:function(e){},getColumnIndexById:function(f){},getColumnName:function(g){},isColumnEditable:function(h){},isColumnSortable:function(i){},sortByColumn:function(j,k){},getSortColumnIndex:function(){},isSortAscending:function(){},prefetchRows:function(l,m){},getValue:function(n,o){},getValueById:function(p,q){},setValue:function(r,s,t){},setValueById:function(u,v,w){}}});
})();
(function(){var e="metaDataChanged",d="qx.event.type.Data",c="qx.event.type.Event",b="abstract",a="qx.ui.table.model.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:qx.ui.table.ITableModel,events:{"dataChanged":d,"metaDataChanged":c,"sorted":d},construct:function(){qx.core.Object.call(this);
this.__nx=[];
this.__ny=[];
this.__nz={};
},members:{__nx:null,__ny:null,__nz:null,__nA:null,init:function(f){},getRowCount:function(){throw new Error("getRowCount is abstract");
},getRowData:function(g){return null;
},isColumnEditable:function(h){return false;
},isColumnSortable:function(j){return false;
},sortByColumn:function(k,l){},getSortColumnIndex:function(){return -1;
},isSortAscending:function(){return true;
},prefetchRows:function(m,n){},getValue:function(o,p){throw new Error("getValue is abstract");
},getValueById:function(q,r){return this.getValue(this.getColumnIndexById(q),r);
},setValue:function(s,t,u){throw new Error("setValue is abstract");
},setValueById:function(v,w,x){this.setValue(this.getColumnIndexById(v),w,x);
},getColumnCount:function(){return this.__nx.length;
},getColumnIndexById:function(y){return this.__nz[y];
},getColumnId:function(z){return this.__nx[z];
},getColumnName:function(A){return this.__ny[A];
},setColumnIds:function(B){this.__nx=B;
this.__nz={};

for(var i=0;i<B.length;i++){this.__nz[B[i]]=i;
}this.__ny=new Array(B.length);
if(!this.__nA){this.fireEvent(e);
}},setColumnNamesByIndex:function(C){if(this.__nx.length!=C.length){throw new Error("this.__columnIdArr and columnNameArr have different length: "+this.__nx.length+" != "+C.length);
}this.__ny=C;
this.fireEvent(e);
},setColumnNamesById:function(D){this.__ny=new Array(this.__nx.length);

for(var i=0;i<this.__nx.length;++i){this.__ny[i]=D[this.__nx[i]];
}},setColumns:function(E,F){var G=this.__nx.length==0||F;

if(F==null){if(this.__nx.length==0){F=E;
}else{F=this.__nx;
}}
if(F.length!=E.length){throw new Error("columnIdArr and columnNameArr have different length: "+F.length+" != "+E.length);
}
if(G){this.__nA=true;
this.setColumnIds(F);
this.__nA=false;
}this.setColumnNamesByIndex(E);
}},destruct:function(){this.__nx=this.__ny=this.__nz=null;
}});
})();
(function(){var e="dataChanged",d="metaDataChanged",c="qx.ui.table.model.Simple",b="Boolean",a="sorted";
qx.Class.define(c,{extend:qx.ui.table.model.Abstract,construct:function(){qx.ui.table.model.Abstract.call(this);
this.__nB=[];
this.__nC=-1;
this.__nD=[];
this.__nE=null;
},properties:{caseSensitiveSorting:{check:b,init:true}},statics:{_defaultSortComparatorAscending:function(f,g){var h=f[arguments.callee.columnIndex];
var k=g[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(h)&&qx.lang.Type.isNumber(k)){var l=isNaN(h)?isNaN(k)?0:1:isNaN(k)?-1:null;

if(l!=null){return l;
}}return (h>k)?1:((h==k)?0:-1);
},_defaultSortComparatorInsensitiveAscending:function(m,n){var o=(m[arguments.callee.columnIndex].toLowerCase?m[arguments.callee.columnIndex].toLowerCase():m[arguments.callee.columnIndex]);
var p=(n[arguments.callee.columnIndex].toLowerCase?n[arguments.callee.columnIndex].toLowerCase():n[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(o)&&qx.lang.Type.isNumber(p)){var q=isNaN(o)?isNaN(p)?0:1:isNaN(p)?-1:null;

if(q!=null){return q;
}}return (o>p)?1:((o==p)?0:-1);
},_defaultSortComparatorDescending:function(r,s){var t=r[arguments.callee.columnIndex];
var u=s[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(t)&&qx.lang.Type.isNumber(u)){var v=isNaN(t)?isNaN(u)?0:1:isNaN(u)?-1:null;

if(v!=null){return v;
}}return (t<u)?1:((t==u)?0:-1);
},_defaultSortComparatorInsensitiveDescending:function(w,x){var y=(w[arguments.callee.columnIndex].toLowerCase?w[arguments.callee.columnIndex].toLowerCase():w[arguments.callee.columnIndex]);
var z=(x[arguments.callee.columnIndex].toLowerCase?x[arguments.callee.columnIndex].toLowerCase():x[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(y)&&qx.lang.Type.isNumber(z)){var A=isNaN(y)?isNaN(z)?0:1:isNaN(z)?-1:null;

if(A!=null){return A;
}}return (y<z)?1:((y==z)?0:-1);
}},members:{__nB:null,__nE:null,__nF:null,__nD:null,__nC:null,__nG:null,getRowData:function(B){var C=this.__nB[B];

if(C==null||C.originalData==null){return C;
}else{return C.originalData;
}},getRowDataAsMap:function(D){var F=this.__nB[D];

if(F!=null){var E={};
for(var G=0;G<this.getColumnCount();G++){E[this.getColumnId(G)]=F[G];
}
if(F.originalData!=null){for(var H in F.originalData){if(E[H]==undefined){E[H]=F.originalData[H];
}}}return E;
}return (F&&F.originalData)?F.originalData:null;
},getDataAsMapArray:function(){var J=this.getRowCount();
var I=[];

for(var i=0;i<J;i++){I.push(this.getRowDataAsMap(i));
}return I;
},setEditable:function(K){this.__nE=[];

for(var L=0;L<this.getColumnCount();L++){this.__nE[L]=K;
}this.fireEvent(d);
},setColumnEditable:function(M,N){if(N!=this.isColumnEditable(M)){if(this.__nE==null){this.__nE=[];
}this.__nE[M]=N;
this.fireEvent(d);
}},isColumnEditable:function(O){return this.__nE?(this.__nE[O]==true):false;
},setColumnSortable:function(P,Q){if(Q!=this.isColumnSortable(P)){if(this.__nF==null){this.__nF=[];
}this.__nF[P]=Q;
this.fireEvent(d);
}},isColumnSortable:function(R){return (this.__nF?(this.__nF[R]!==false):true);
},sortByColumn:function(S,T){var W;
var V=this.__nD[S];

if(V){W=(T?V.ascending:V.descending);
}else{if(this.getCaseSensitiveSorting()){W=(T?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);
}else{W=(T?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);
}}W.columnIndex=S;
this.__nB.sort(W);
this.__nC=S;
this.__nG=T;
var U={columnIndex:S,ascending:T};
this.fireDataEvent(a,U);
this.fireEvent(d);
},setSortMethods:function(X,Y){var ba;

if(qx.lang.Type.isFunction(Y)){ba={ascending:Y,descending:function(bb,bc){return Y(bc,bb);
}};
}else{ba=Y;
}this.__nD[X]=ba;
},getSortMethods:function(bd){return this.__nD[bd];
},clearSorting:function(){if(this.__nC!=-1){this.__nC=-1;
this.__nG=true;
this.fireEvent(d);
}},getSortColumnIndex:function(){return this.__nC;
},_setSortColumnIndex:function(be){this.__nC=be;
},isSortAscending:function(){return this.__nG;
},_setSortAscending:function(bf){this.__nG=bf;
},getRowCount:function(){return this.__nB.length;
},getValue:function(bg,bh){if(bh<0||bh>=this.__nB.length){throw new Error("this.__rowArr out of bounds: "+bh+" (0.."+this.__nB.length+")");
}return this.__nB[bh][bg];
},setValue:function(bi,bj,bk){if(this.__nB[bj][bi]!=bk){this.__nB[bj][bi]=bk;
if(this.hasListener(e)){var bl={firstRow:bj,lastRow:bj,firstColumn:bi,lastColumn:bi};
this.fireDataEvent(e,bl);
}
if(bi==this.__nC){this.clearSorting();
}}},setData:function(bm,bn){this.__nB=bm;
if(this.hasListener(e)){var bo={firstRow:0,lastRow:bm.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bo);
}
if(bn!==false){this.clearSorting();
}},getData:function(){return this.__nB;
},setDataAsMapArray:function(bp,bq,br){this.setData(this._mapArray2RowArr(bp,bq),br);
},addRows:function(bs,bt,bu){if(bt==null){bt=this.__nB.length;
}bs.splice(0,0,bt,0);
Array.prototype.splice.apply(this.__nB,bs);
var bv={firstRow:bt,lastRow:this.__nB.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bv);

if(bu!==false){this.clearSorting();
}},addRowsAsMapArray:function(bw,bx,by,bz){this.addRows(this._mapArray2RowArr(bw,by),bx,bz);
},setRows:function(bA,bB,bC){if(bB==null){bB=0;
}bA.splice(0,0,bB,bA.length);
Array.prototype.splice.apply(this.__nB,bA);
var bD={firstRow:bB,lastRow:this.__nB.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bD);

if(bC!==false){this.clearSorting();
}},setRowsAsMapArray:function(bE,bF,bG,bH){this.setRows(this._mapArray2RowArr(bE,bG),bF,bH);
},removeRows:function(bI,bJ,bK){this.__nB.splice(bI,bJ);
var bL={firstRow:bI,lastRow:this.__nB.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1,removeStart:bI,removeCount:bJ};
this.fireDataEvent(e,bL);

if(bK!==false){this.clearSorting();
}},_mapArray2RowArr:function(bM,bN){var bR=bM.length;
var bO=this.getColumnCount();
var bQ=new Array(bR);
var bP;

for(var i=0;i<bR;++i){bP=[];

if(bN){bP.originalData=bM[i];
}
for(var j=0;j<bO;++j){bP[j]=bM[i][this.getColumnId(j)];
}bQ[i]=bP;
}return bQ;
}},destruct:function(){this.__nB=this.__nE=this.__nD=this.__nF=null;
}});
})();
(function(){var a="qx.ui.window.IWindowManager";
qx.Interface.define(a,{members:{setDesktop:function(b){this.assertInterface(b,qx.ui.window.IDesktop);
},changeActiveWindow:function(c,d){},updateStack:function(){},bringToFront:function(e){this.assertInstance(e,qx.ui.window.Window);
},sendToBack:function(f){this.assertInstance(f,qx.ui.window.Window);
}}});
})();
(function(){var b="qx.ui.window.Manager",a="__mB";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.ui.window.IWindowManager,members:{__mB:null,setDesktop:function(c){this.__mB=c;
this.updateStack();
},getDesktop:function(){return this.__mB;
},changeActiveWindow:function(d,e){if(d){this.bringToFront(d);
d.setActive(true);
}
if(e){e.resetActive();
}},_minZIndex:1e5,updateStack:function(){qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.__mB.forceUnblockContent();
var f=this.__mB.getWindows();
var h=this._minZIndex;
var m=h+f.length*2;
var j=h+f.length*4;
var k=null;

for(var i=0,l=f.length;i<l;i++){var g=f[i];
if(!g.isVisible()){continue;
}k=k||g;
if(g.isModal()){g.setZIndex(j);
this.__mB.blockContent(j-1);
j+=2;
k=g;
}else if(g.isAlwaysOnTop()){g.setZIndex(m);
m+=2;
}else{g.setZIndex(h);
h+=2;
}if(!k.isModal()&&g.isActive()||g.getZIndex()>k.getZIndex()){k=g;
}}this.__mB.setActiveWindow(k);
},bringToFront:function(n){var o=this.__mB.getWindows();
var p=qx.lang.Array.remove(o,n);

if(p){o.push(n);
this.updateStack();
}},sendToBack:function(q){var r=this.__mB.getWindows();
var s=qx.lang.Array.remove(r,q);

if(s){r.unshift(q);
this.updateStack();
}}},destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var l="indexOf",k="addAfter",j="add",i="addBefore",h="_",g="addAt",f="hasChildren",e="removeAt",d="removeAll",c="getChildren",a="remove",b="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(b,{members:{__mx:function(m,n,o,p){var q=this.getChildrenContainer();

if(q===this){m=h+m;
}return (q[m])(n,o,p);
},getChildren:function(){return this.__mx(c);
},hasChildren:function(){return this.__mx(f);
},add:function(r,s){return this.__mx(j,r,s);
},remove:function(t){return this.__mx(a,t);
},removeAll:function(){return this.__mx(d);
},indexOf:function(u){return this.__mx(l,u);
},addAt:function(v,w,x){this.__mx(g,v,w,x);
},addBefore:function(y,z,A){this.__mx(i,y,z,A);
},addAfter:function(B,C,D){this.__mx(k,B,C,D);
},removeAt:function(E){this.__mx(e,E);
}}});
})();
(function(){var l="move",k="Boolean",j="__mD",i="mouseup",h="mousedown",g="losecapture",f="qx.ui.core.MMovable",d="__mC",c="mousemove",b="maximized",a="move-frame";
qx.Mixin.define(f,{properties:{movable:{check:k,init:true},useMoveFrame:{check:k,init:false}},members:{__mC:null,__mD:null,__mE:null,__mF:null,__mG:null,__mH:null,__mI:null,__mJ:false,__mK:null,__mL:0,_activateMoveHandle:function(m){if(this.__mC){throw new Error("The move handle could not be redefined!");
}this.__mC=m;
m.addListener(h,this._onMoveMouseDown,this);
m.addListener(i,this._onMoveMouseUp,this);
m.addListener(c,this._onMoveMouseMove,this);
m.addListener(g,this.__mP,this);
},__mM:function(){var n=this.__mD;

if(!n){n=this.__mD=new qx.ui.core.Widget();
n.setAppearance(a);
n.exclude();
qx.core.Init.getApplication().getRoot().add(n);
}return n;
},__mN:function(){var location=this.getContainerLocation();
var p=this.getBounds();
var o=this.__mM();
o.setUserBounds(location.left,location.top,p.width,p.height);
o.show();
o.setZIndex(this.getZIndex()+1);
},__mO:function(e){var r=this.__mE;
var u=Math.max(r.left,Math.min(r.right,e.getDocumentLeft()));
var t=Math.max(r.top,Math.min(r.bottom,e.getDocumentTop()));
var q=this.__mF+u;
var s=this.__mG+t;
return {viewportLeft:q,viewportTop:s,parentLeft:q-this.__mH,parentTop:s-this.__mI};
},_onMoveMouseDown:function(e){if(!this.getMovable()||this.hasState(b)){return;
}var parent=this.getLayoutParent();
var w=parent.getContentLocation();
var x=parent.getBounds();
if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(!parent.isContentBlocked()){this.__mK=parent.getBlockerColor();
this.__mL=parent.getBlockerOpacity();
parent.setBlockerColor(null);
parent.setBlockerOpacity(1);
parent.blockContent(this.getZIndex()-1);
this.__mJ=true;
}}this.__mE={left:w.left,top:w.top,right:w.left+x.width,bottom:w.top+x.height};
var v=this.getContainerLocation();
this.__mH=w.left;
this.__mI=w.top;
this.__mF=v.left-e.getDocumentLeft();
this.__mG=v.top-e.getDocumentTop();
this.addState(l);
this.__mC.capture();
if(this.getUseMoveFrame()){this.__mN();
}e.stop();
},_onMoveMouseMove:function(e){if(!this.hasState(l)){return;
}var y=this.__mO(e);

if(this.getUseMoveFrame()){this.__mM().setDomPosition(y.viewportLeft,y.viewportTop);
}else{this.setDomPosition(y.parentLeft,y.parentTop);
}e.stopPropagation();
},_onMoveMouseUp:function(e){if(!this.hasState(l)){return;
}this.removeState(l);
var parent=this.getLayoutParent();

if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(this.__mJ){parent.unblockContent();
parent.setBlockerColor(this.__mK);
parent.setBlockerOpacity(this.__mL);
this.__mK=null;
this.__mL=0;
this.__mJ=false;
}}this.__mC.releaseCapture();
var z=this.__mO(e);
this.setLayoutProperties({left:z.parentLeft,top:z.parentTop});
if(this.getUseMoveFrame()){this.__mM().exclude();
}e.stopPropagation();
},__mP:function(e){if(!this.hasState(l)){return;
}this.removeState(l);
if(this.getUseMoveFrame()){this.__mM().exclude();
}}},destruct:function(){this._disposeObjects(j,d);
this.__mE=null;
}});
})();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__mz:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__mA:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__mA[name];
s[t]();
}else{var u=this.__mz[name];
s[u](q);
}}}});
})();
(function(){var k="Boolean",j="resize",i="mousedown",h="w-resize",g="sw-resize",f="n-resize",d="resizableRight",c="ne-resize",b="se-resize",a="Integer",z="e-resize",y="resizableLeft",x="mousemove",w="move",v="shorthand",u="maximized",t="nw-resize",s="mouseout",r="qx.ui.core.MResizable",q="mouseup",o="losecapture",p="resize-frame",m="resizableBottom",n="s-resize",l="resizableTop";
qx.Mixin.define(r,{construct:function(){var A=this.getContainerElement();
A.addListener(i,this.__nf,this,true);
A.addListener(q,this.__ng,this);
A.addListener(x,this.__ni,this);
A.addListener(s,this.__nj,this);
A.addListener(o,this.__nh,this);
var B=this.getContainerElement().getDomElement();

if(B==null){B=window;
}this.__mQ=qx.event.Registration.getManager(B).getHandler(qx.event.handler.DragDrop);
},properties:{resizableTop:{check:k,init:true},resizableRight:{check:k,init:true},resizableBottom:{check:k,init:true},resizableLeft:{check:k,init:true},resizable:{group:[l,d,m,y],mode:v},resizeSensitivity:{check:a,init:5},useResizeFrame:{check:k,init:true}},members:{__mQ:null,__mR:null,__mS:null,__mT:null,__mU:null,__mV:null,__mW:null,RESIZE_TOP:1,RESIZE_BOTTOM:2,RESIZE_LEFT:4,RESIZE_RIGHT:8,__mX:function(){var C=this.__mR;

if(!C){C=this.__mR=new qx.ui.core.Widget();
C.setAppearance(p);
C.exclude();
qx.core.Init.getApplication().getRoot().add(C);
}return C;
},__mY:function(){var location=this.__nc();
var D=this.__mX();
D.setUserBounds(location.left,location.top,location.right-location.left,location.bottom-location.top);
D.show();
D.setZIndex(this.getZIndex()+1);
},__na:function(e){var F=this.__mS;
var G=this.getSizeHint();
var K=this.__mW;
var J=this.__mV;
var E=J.width;
var I=J.height;
var H=J.containerWidth;
var M=J.containerHeight;
var N=J.left;
var top=J.top;
var L;

if((F&this.RESIZE_TOP)||(F&this.RESIZE_BOTTOM)){L=Math.max(K.top,Math.min(K.bottom,e.getDocumentTop()))-this.__mU;

if(F&this.RESIZE_TOP){I-=L;
M-=L;
}else{I+=L;
M+=L;
}
if(M<G.minHeight){I+=(G.minHeight-M);
M=G.minHeight;
}else if(M>G.maxHeight){I-=(G.maxHeight-M);
M=G.maxHeight;
}
if(F&this.RESIZE_TOP){top+=J.containerHeight-M;
}}
if((F&this.RESIZE_LEFT)||(F&this.RESIZE_RIGHT)){L=Math.max(K.left,Math.min(K.right,e.getDocumentLeft()))-this.__mT;

if(F&this.RESIZE_LEFT){E-=L;
H-=L;
}else{E+=L;
H+=L;
}
if(H<G.minWidth){E+=(G.minWidth-H);
H=G.minWidth;
}else if(E>G.maxWidth){E-=(G.maxWidth-H);
H=G.maxWidth;
}
if(F&this.RESIZE_LEFT){N+=J.containerWidth-H;
}}return {viewportLeft:N,viewportTop:top,parentLeft:J.bounds.left+N-J.left,parentTop:J.bounds.top+top-J.top,containerWidth:H,containerHeight:M,width:E,height:I};
},__nb:{1:f,2:n,4:h,8:z,5:t,6:g,9:c,10:b},__nc:function(){var O=this.getDecoratorElement();
if(O&&O.getDomElement()){return qx.bom.element.Location.get(O.getDomElement());
}else{return this.getContentLocation();
}},__nd:function(e){var location=this.__nc();
var P=this.getResizeSensitivity();
var S=e.getDocumentLeft();
var R=e.getDocumentTop();
var Q=this.__ne(location,S,R,P);
if(Q>0){Q=Q|this.__ne(location,S,R,P*2);
}this.__mS=Q;
},__ne:function(location,T,U,V){var W=0;
if(this.getResizableTop()&&Math.abs(location.top-U)<V&&T>location.left-V&&T<location.right+V){W+=this.RESIZE_TOP;
}else if(this.getResizableBottom()&&Math.abs(location.bottom-U)<V&&T>location.left-V&&T<location.right+V){W+=this.RESIZE_BOTTOM;
}if(this.getResizableLeft()&&Math.abs(location.left-T)<V&&U>location.top-V&&U<location.bottom+V){W+=this.RESIZE_LEFT;
}else if(this.getResizableRight()&&Math.abs(location.right-T)<V&&U>location.top-V&&U<location.bottom+V){W+=this.RESIZE_RIGHT;
}return W;
},__nf:function(e){if(!this.__mS){return;
}this.addState(j);
this.__mT=e.getDocumentLeft();
this.__mU=e.getDocumentTop();
var bb=this.getContainerLocation();
var X=this.__nc();
var ba=this.getBounds();
this.__mV={top:X.top,left:X.left,containerWidth:bb.right-bb.left,containerHeight:bb.bottom-bb.top,width:X.right-X.left,height:X.bottom-X.top,bounds:qx.lang.Object.clone(ba)};
var parent=this.getLayoutParent();
var bc=parent.getContentLocation();
var Y=parent.getBounds();
this.__mW={left:bc.left,top:bc.top,right:bc.left+Y.width,bottom:bc.top+Y.height};
if(this.getUseResizeFrame()){this.__mY();
}this.capture();
e.stop();
},__ng:function(e){if(!this.hasState(j)){return;
}if(this.getUseResizeFrame()){this.__mX().exclude();
}var bd=this.__na(e);
this.setWidth(bd.containerWidth);
this.setHeight(bd.containerHeight);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:bd.parentLeft,top:bd.parentTop});
}this.__mS=0;
this.removeState(j);
this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.releaseCapture();
e.stopPropagation();
},__nh:function(e){if(!this.__mS){return;
}this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.removeState(w);
if(this.getUseResizeFrame()){this.__mX().exclude();
}},__ni:function(e){if(this.hasState(j)){var bh=this.__na(e);
if(this.getUseResizeFrame()){var bf=this.__mX();
bf.setUserBounds(bh.viewportLeft,bh.viewportTop,bh.width,bh.height);
}else{this.setWidth(bh.containerWidth);
this.setHeight(bh.containerHeight);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:bh.parentLeft,top:bh.parentTop});
}}e.stopPropagation();
}else if(!this.hasState(u)&&!this.__mQ.isSessionActive()){this.__nd(e);
var bi=this.__mS;
var bg=this.getApplicationRoot();

if(bi){var be=this.__nb[bi];
this.setCursor(be);
bg.setGlobalCursor(be);
}else if(this.getCursor()){this.resetCursor();
bg.resetGlobalCursor();
}}},__nj:function(e){if(this.getCursor()&&!this.hasState(j)){this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
}}},destruct:function(){if(this.__mR!=null&&!qx.core.ObjectRegistry.inShutDown){this.__mR.destroy();
this.__mR=null;
}this.__mQ=null;
}});
})();
(function(){var k="Boolean",j="qx.event.type.Event",i="captionbar",h="_applyCaptionBarChange",g="maximize-button",f="restore-button",d="minimize-button",c="close-button",b="maximized",a="execute",R="pane",Q="title",P="icon",O="statusbar-text",N="statusbar",M="String",L="showStatusbar",K="normal",J="active",I="beforeClose",r="beforeMinimize",s="mousedown",p="changeStatus",q="changeIcon",n="excluded",o="dblclick",l="_applyActive",m="beforeRestore",t="minimize",u="changeModal",A="changeAlwaysOnTop",z="_applyShowStatusbar",C="_applyStatus",B="qx.ui.window.Window",E="changeCaption",D="focusout",w="beforeMaximize",H="maximize",G="restore",F="window",v="close",x="changeActive",y="minimized";
qx.Class.define(B,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MResizable,qx.ui.core.MMovable,qx.ui.core.MContentPadding],construct:function(S,T){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.VBox());
this._createChildControl(i);
this._createChildControl(R);
if(T!=null){this.setIcon(T);
}
if(S!=null){this.setCaption(S);
}this._updateCaptionBar();
this.addListener(s,this._onWindowMouseDown,this,true);
this.addListener(D,this._onWindowFocusOut,this);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
qx.ui.core.FocusHandler.getInstance().addRoot(this);
},statics:{DEFAULT_MANAGER_CLASS:qx.ui.window.Manager},events:{"beforeClose":j,"close":j,"beforeMinimize":j,"minimize":j,"beforeMaximize":j,"maximize":j,"beforeRestore":j,"restore":j},properties:{appearance:{refine:true,init:F},visibility:{refine:true,init:n},focusable:{refine:true,init:true},active:{check:k,init:false,apply:l,event:x},alwaysOnTop:{check:k,init:false,event:A},modal:{check:k,init:false,event:u},caption:{apply:h,event:E,nullable:true},icon:{check:M,nullable:true,apply:h,event:q,themeable:true},status:{check:M,nullable:true,apply:C,event:p},showClose:{check:k,init:true,apply:h,themeable:true},showMaximize:{check:k,init:true,apply:h,themeable:true},showMinimize:{check:k,init:true,apply:h,themeable:true},allowClose:{check:k,init:true,apply:h},allowMaximize:{check:k,init:true,apply:h},allowMinimize:{check:k,init:true,apply:h},showStatusbar:{check:k,init:false,apply:z}},members:{__nk:null,__nl:null,getChildrenContainer:function(){return this.getChildControl(R);
},_forwardStates:{active:true,maximized:true,showStatusbar:true},setLayoutParent:function(parent){qx.ui.core.Widget.prototype.setLayoutParent.call(this,parent);
},_createChildControlImpl:function(U,V){var W;

switch(U){case N:W=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(W);
W.add(this.getChildControl(O));
break;
case O:W=new qx.ui.basic.Label();
W.setValue(this.getStatus());
break;
case R:W=new qx.ui.container.Composite();
this._add(W,{flex:1});
break;
case i:var Y=new qx.ui.layout.Grid();
Y.setRowFlex(0,1);
Y.setColumnFlex(1,1);
W=new qx.ui.container.Composite(Y);
this._add(W);
W.addListener(o,this._onCaptionMouseDblClick,this);
this._activateMoveHandle(W);
break;
case P:W=new qx.ui.basic.Image(this.getIcon());
this.getChildControl(i).add(W,{row:0,column:0});
break;
case Q:W=new qx.ui.basic.Label(this.getCaption());
W.setWidth(0);
W.setAllowGrowX(true);
var X=this.getChildControl(i);
X.add(W,{row:0,column:1});
break;
case d:W=new qx.ui.form.Button();
W.setFocusable(false);
W.addListener(a,this._onMinimizeButtonClick,this);
this.getChildControl(i).add(W,{row:0,column:2});
break;
case f:W=new qx.ui.form.Button();
W.setFocusable(false);
W.addListener(a,this._onRestoreButtonClick,this);
this.getChildControl(i).add(W,{row:0,column:3});
break;
case g:W=new qx.ui.form.Button();
W.setFocusable(false);
W.addListener(a,this._onMaximizeButtonClick,this);
this.getChildControl(i).add(W,{row:0,column:4});
break;
case c:W=new qx.ui.form.Button();
W.setFocusable(false);
W.addListener(a,this._onCloseButtonClick,this);
this.getChildControl(i).add(W,{row:0,column:6});
break;
}return W||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,U);
},_updateCaptionBar:function(){var bb;
var bc=this.getIcon();

if(bc){this.getChildControl(P).setSource(bc);
this._showChildControl(P);
}else{this._excludeChildControl(P);
}var ba=this.getCaption();

if(ba){this.getChildControl(Q).setValue(ba);
this._showChildControl(Q);
}else{this._excludeChildControl(Q);
}
if(this.getShowMinimize()){this._showChildControl(d);
bb=this.getChildControl(d);
this.getAllowMinimize()?bb.resetEnabled():bb.setEnabled(false);
}else{this._excludeChildControl(d);
}
if(this.getShowMaximize()){if(this.isMaximized()){this._showChildControl(f);
this._excludeChildControl(g);
}else{this._showChildControl(g);
this._excludeChildControl(f);
}bb=this.getChildControl(g);
this.getAllowMaximize()?bb.resetEnabled():bb.setEnabled(false);
}else{this._excludeChildControl(g);
this._excludeChildControl(f);
}
if(this.getShowClose()){this._showChildControl(c);
bb=this.getChildControl(c);
this.getAllowClose()?bb.resetEnabled():bb.setEnabled(false);
}else{this._excludeChildControl(c);
}},close:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(I,qx.event.type.Event,[false,true])){this.hide();
this.fireEvent(v);
}},open:function(){this.show();
this.setActive(true);
this.focus();
},center:function(){var parent=this.getLayoutParent();

if(parent){var be=parent.getBounds();

if(be){var bf=this.getSizeHint();
var bd=Math.round((be.width-bf.width)/2);
var top=Math.round((be.height-bf.height)/2);

if(top<0){top=0;
}this.moveTo(bd,top);
return;
}}},maximize:function(){if(this.isMaximized()){return;
}var parent=this.getLayoutParent();

if(parent!=null&&parent.supportsMaximize()){if(this.fireNonBubblingEvent(w,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var bg=this.getLayoutProperties();
this.__nl=bg.left===undefined?0:bg.left;
this.__nk=bg.top===undefined?0:bg.top;
this.setLayoutProperties({left:null,top:null,edge:0});
this.addState(b);
this._updateCaptionBar();
this.fireEvent(H);
}}},minimize:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(r,qx.event.type.Event,[false,true])){var bh=this.getLayoutProperties();
this.__nl=bh.left===undefined?0:bh.left;
this.__nk=bh.top===undefined?0:bh.top;
this.removeState(b);
this.hide();
this.fireEvent(t);
}},restore:function(){if(this.getMode()===K){return;
}
if(this.fireNonBubblingEvent(m,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var bi=this.__nl;
var top=this.__nk;
this.setLayoutProperties({edge:null,left:bi,top:top});
this.removeState(b);
this._updateCaptionBar();
this.fireEvent(G);
}},moveTo:function(bj,top){if(this.isMaximized()){return;
}this.setLayoutProperties({left:bj,top:top});
},isMaximized:function(){return this.hasState(b);
},getMode:function(){if(!this.isVisible()){return y;
}else{if(this.isMaximized()){return b;
}else{return K;
}}},_applyActive:function(bk,bl){if(bl){this.removeState(J);
}else{this.addState(J);
}},_getContentPaddingTarget:function(){return this.getChildControl(R);
},_applyShowStatusbar:function(bm,bn){bm?this.addState(L):this.removeState(L);

if(bm){this._showChildControl(N);
}else{this._excludeChildControl(N);
}},_applyCaptionBarChange:function(bo,bp){this._updateCaptionBar();
},_applyStatus:function(bq,br){var bs=this.getChildControl(O,true);

if(bs){bs.setValue(bq);
}},_onWindowEventStop:function(e){e.stopPropagation();
},_onWindowMouseDown:function(e){this.setActive(true);
},_onWindowFocusOut:function(e){if(this.getModal()){return;
}var bt=e.getRelatedTarget();

if(bt!=null&&!qx.ui.core.Widget.contains(this,bt)){this.setActive(false);
}},_onCaptionMouseDblClick:function(e){if(this.getAllowMaximize()){this.isMaximized()?this.restore():this.maximize();
}},_onMinimizeButtonClick:function(e){this.minimize();
this.getChildControl(d).reset();
},_onRestoreButtonClick:function(e){this.restore();
this.getChildControl(f).reset();
},_onMaximizeButtonClick:function(e){this.maximize();
this.getChildControl(g).reset();
},_onCloseButtonClick:function(e){this.close();
this.getChildControl(c).reset();
}}});
})();
(function(){var a="qx.ui.window.IDesktop";
qx.Interface.define(a,{members:{setWindowManager:function(b){this.assertInterface(b,qx.ui.window.IWindowManager);
},getWindows:function(){},supportsMaximize:function(){},blockContent:function(c){this.assertInteger(c);
},unblockContent:function(){},isContentBlocked:function(){}}});
})();
(function(){var n="_applyLayoutChange",m="top",k="left",j="middle",h="Decorator",g="center",f="_applyReversed",e="bottom",d="qx.ui.layout.VBox",c="Integer",a="right",b="Boolean";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,construct:function(o,p,q){qx.ui.layout.Abstract.call(this);

if(o){this.setSpacing(o);
}
if(p){this.setAlignY(p);
}
if(q){this.setSeparator(q);
}},properties:{alignY:{check:[m,j,e],init:m,apply:n},alignX:{check:[k,g,a],init:k,apply:n},spacing:{check:c,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:b,init:false,apply:f}},members:{__nm:null,__nn:null,__no:null,__np:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__nq:function(){var w=this._getLayoutChildren();
var length=w.length;
var s=false;
var r=this.__nm&&this.__nm.length!=length&&this.__nn&&this.__nm;
var u;
var t=r?this.__nm:new Array(length);
var v=r?this.__nn:new Array(length);
if(this.getReversed()){w=w.concat().reverse();
}for(var i=0;i<length;i++){u=w[i].getLayoutProperties();

if(u.height!=null){t[i]=parseFloat(u.height)/100;
}
if(u.flex!=null){v[i]=u.flex;
s=true;
}else{v[i]=0;
}}if(!r){this.__nm=t;
this.__nn=v;
}this.__no=s;
this.__np=w;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(x,y){if(this._invalidChildrenCache){this.__nq();
}var F=this.__np;
var length=F.length;
var P=qx.ui.layout.Util;
var O=this.getSpacing();
var S=this.getSeparator();

if(S){var C=P.computeVerticalSeparatorGaps(F,O,S);
}else{var C=P.computeVerticalGaps(F,O,true);
}var i,A,B,J;
var K=[];
var Q=C;

for(i=0;i<length;i+=1){J=this.__nm[i];
B=J!=null?Math.floor((y-C)*J):F[i].getSizeHint().height;
K.push(B);
Q+=B;
}if(this.__no&&Q!=y){var H={};
var N,R;

for(i=0;i<length;i+=1){N=this.__nn[i];

if(N>0){G=F[i].getSizeHint();
H[i]={min:G.minHeight,value:K[i],max:G.maxHeight,flex:N};
}}var D=P.computeFlexOffsets(H,y,Q);

for(i in D){R=D[i].offset;
K[i]+=R;
Q+=R;
}}var top=F[0].getMarginTop();
if(Q<y&&this.getAlignY()!=m){top=y-Q;

if(this.getAlignY()===j){top=Math.round(top/2);
}}var G,U,L,B,I,M,E;
this._clearSeparators();
if(S){var T=qx.theme.manager.Decoration.getInstance().resolve(S).getInsets();
var z=T.top+T.bottom;
}for(i=0;i<length;i+=1){A=F[i];
B=K[i];
G=A.getSizeHint();
M=A.getMarginLeft();
E=A.getMarginRight();
L=Math.max(G.minWidth,Math.min(x-M-E,G.maxWidth));
U=P.computeHorizontalAlignOffset(A.getAlignX()||this.getAlignX(),L,x,M,E);
if(i>0){if(S){top+=I+O;
this._renderSeparator(S,{top:top,left:0,height:z,width:x});
top+=z+O+A.getMarginTop();
}else{top+=P.collapseMargins(O,I,A.getMarginTop());
}}A.renderLayout(U,top,L,B);
top+=B;
I=A.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__nq();
}var bc=qx.ui.layout.Util;
var bk=this.__np;
var X=0,bb=0,ba=0;
var V=0,bd=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bb+=W.height;
var bg=this.__nn[i];
var Y=this.__nm[i];

if(bg){X+=W.minHeight;
}else if(Y){ba=Math.max(ba,Math.round(W.minHeight/Y));
}else{X+=W.height;
}bj=bh.getMarginLeft()+bh.getMarginRight();
if((W.width+bj)>bd){bd=W.width+bj;
}if((W.minWidth+bj)>V){V=W.minWidth+bj;
}}X+=ba;
var bf=this.getSpacing();
var bi=this.getSeparator();

if(bi){var be=bc.computeVerticalSeparatorGaps(bk,bf,bi);
}else{var be=bc.computeVerticalGaps(bk,bf,true);
}return {minHeight:X+be,height:bb+be,minWidth:V,width:bd};
}},destruct:function(){this.__nm=this.__nn=this.__np=null;
}});
})();
(function(){var n="_applyLayoutChange",m="left",k="center",j="top",h="Decorator",g="middle",f="_applyReversed",e="bottom",d="Boolean",c="right",a="Integer",b="qx.ui.layout.HBox";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,construct:function(o,p,q){qx.ui.layout.Abstract.call(this);

if(o){this.setSpacing(o);
}
if(p){this.setAlignX(p);
}
if(q){this.setSeparator(q);
}},properties:{alignX:{check:[m,k,c],init:m,apply:n},alignY:{check:[j,g,e],init:j,apply:n},spacing:{check:a,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:d,init:false,apply:f}},members:{__nr:null,__ns:null,__nt:null,__nu:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__nv:function(){var w=this._getLayoutChildren();
var length=w.length;
var t=false;
var r=this.__nr&&this.__nr.length!=length&&this.__ns&&this.__nr;
var u;
var s=r?this.__nr:new Array(length);
var v=r?this.__ns:new Array(length);
if(this.getReversed()){w=w.concat().reverse();
}for(var i=0;i<length;i++){u=w[i].getLayoutProperties();

if(u.width!=null){s[i]=parseFloat(u.width)/100;
}
if(u.flex!=null){v[i]=u.flex;
t=true;
}else{v[i]=0;
}}if(!r){this.__nr=s;
this.__ns=v;
}this.__nt=t;
this.__nu=w;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(x,y){if(this._invalidChildrenCache){this.__nv();
}var E=this.__nu;
var length=E.length;
var N=qx.ui.layout.Util;
var M=this.getSpacing();
var Q=this.getSeparator();

if(Q){var B=N.computeHorizontalSeparatorGaps(E,M,Q);
}else{var B=N.computeHorizontalGaps(E,M,true);
}var i,z,K,J;
var P=[];
var F=B;

for(i=0;i<length;i+=1){J=this.__nr[i];
K=J!=null?Math.floor((x-B)*J):E[i].getSizeHint().width;
P.push(K);
F+=K;
}if(this.__nt&&F!=x){var H={};
var L,O;

for(i=0;i<length;i+=1){L=this.__ns[i];

if(L>0){G=E[i].getSizeHint();
H[i]={min:G.minWidth,value:P[i],max:G.maxWidth,flex:L};
}}var C=N.computeFlexOffsets(H,x,F);

for(i in C){O=C[i].offset;
P[i]+=O;
F+=O;
}}var U=E[0].getMarginLeft();
if(F<x&&this.getAlignX()!=m){U=x-F;

if(this.getAlignX()===k){U=Math.round(U/2);
}}var G,top,A,K,D,S,I;
var M=this.getSpacing();
this._clearSeparators();
if(Q){var R=qx.theme.manager.Decoration.getInstance().resolve(Q).getInsets();
var T=R.left+R.right;
}for(i=0;i<length;i+=1){z=E[i];
K=P[i];
G=z.getSizeHint();
S=z.getMarginTop();
I=z.getMarginBottom();
A=Math.max(G.minHeight,Math.min(y-S-I,G.maxHeight));
top=N.computeVerticalAlignOffset(z.getAlignY()||this.getAlignY(),A,y,S,I);
if(i>0){if(Q){U+=D+M;
this._renderSeparator(Q,{left:U,top:0,width:T,height:y});
U+=T+M+z.getMarginLeft();
}else{U+=N.collapseMargins(M,D,z.getMarginLeft());
}}z.renderLayout(U,top,K,A);
U+=K;
D=z.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__nv();
}var bc=qx.ui.layout.Util;
var bk=this.__nu;
var V=0,bd=0,ba=0;
var Y=0,bb=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bd+=W.width;
var bg=this.__ns[i];
var X=this.__nr[i];

if(bg){V+=W.minWidth;
}else if(X){ba=Math.max(ba,Math.round(W.minWidth/X));
}else{V+=W.width;
}bj=bh.getMarginTop()+bh.getMarginBottom();
if((W.height+bj)>bb){bb=W.height+bj;
}if((W.minHeight+bj)>Y){Y=W.minHeight+bj;
}}V+=ba;
var bf=this.getSpacing();
var bi=this.getSeparator();

if(bi){var be=bc.computeHorizontalSeparatorGaps(bk,bf,bi);
}else{var be=bc.computeHorizontalGaps(bk,bf,true);
}return {minWidth:V+be,width:bd+be,minHeight:Y,height:bb};
}},destruct:function(){this.__nr=this.__ns=this.__nu=null;
}});
})();
(function(){var r="left",q="top",p="_applyLayoutChange",o="hAlign",n="flex",m="vAlign",h="Integer",g="minWidth",f="width",e="minHeight",b="qx.ui.layout.Grid",d="height",c="maxHeight",a="maxWidth";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,construct:function(s,t){qx.ui.layout.Abstract.call(this);
this.__mm=[];
this.__mn=[];

if(s){this.setSpacingX(s);
}
if(t){this.setSpacingY(t);
}},properties:{spacingX:{check:h,init:0,apply:p},spacingY:{check:h,init:0,apply:p}},members:{__mo:null,__mm:null,__mn:null,__mp:null,__mq:null,__mr:null,__ms:null,__mt:null,__mu:null,verifyLayoutProperty:null,__mv:function(){var B=[];
var A=[];
var C=[];
var w=-1;
var v=-1;
var E=this._getLayoutChildren();

for(var i=0,l=E.length;i<l;i++){var z=E[i];
var D=z.getLayoutProperties();
var F=D.row;
var u=D.column;
D.colSpan=D.colSpan||1;
D.rowSpan=D.rowSpan||1;
if(F==null||u==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+z+"' must be defined!");
}
if(B[F]&&B[F][u]){throw new Error("Cannot add widget '"+z+"'!. "+"There is already a widget '"+B[F][u]+"' in this cell ("+F+", "+u+")");
}
for(var x=u;x<u+D.colSpan;x++){for(var y=F;y<F+D.rowSpan;y++){if(B[y]==undefined){B[y]=[];
}B[y][x]=z;
v=Math.max(v,x);
w=Math.max(w,y);
}}
if(D.rowSpan>1){C.push(z);
}
if(D.colSpan>1){A.push(z);
}}for(var y=0;y<=w;y++){if(B[y]==undefined){B[y]=[];
}}this.__mo=B;
this.__mp=A;
this.__mq=C;
this.__mr=w;
this.__ms=v;
this.__mt=null;
this.__mu=null;
delete this._invalidChildrenCache;
},_setRowData:function(G,H,I){var J=this.__mm[G];

if(!J){this.__mm[G]={};
this.__mm[G][H]=I;
}else{J[H]=I;
}},_setColumnData:function(K,L,M){var N=this.__mn[K];

if(!N){this.__mn[K]={};
this.__mn[K][L]=M;
}else{N[L]=M;
}},setSpacing:function(O){this.setSpacingY(O);
this.setSpacingX(O);
return this;
},setColumnAlign:function(P,Q,R){this._setColumnData(P,o,Q);
this._setColumnData(P,m,R);
this._applyLayoutChange();
return this;
},getColumnAlign:function(S){var T=this.__mn[S]||{};
return {vAlign:T.vAlign||q,hAlign:T.hAlign||r};
},setRowAlign:function(U,V,W){this._setRowData(U,o,V);
this._setRowData(U,m,W);
this._applyLayoutChange();
return this;
},getRowAlign:function(X){var Y=this.__mm[X]||{};
return {vAlign:Y.vAlign||q,hAlign:Y.hAlign||r};
},getCellWidget:function(ba,bb){if(this._invalidChildrenCache){this.__mv();
}var ba=this.__mo[ba]||{};
return ba[bb]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__mv();
}return this.__mr+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__mv();
}return this.__ms+1;
},getCellAlign:function(bc,bd){var bj=q;
var bh=r;
var bi=this.__mm[bc];
var bf=this.__mn[bd];
var be=this.__mo[bc][bd];

if(be){var bg={vAlign:be.getAlignY(),hAlign:be.getAlignX()};
}else{bg={};
}if(bg.vAlign){bj=bg.vAlign;
}else if(bi&&bi.vAlign){bj=bi.vAlign;
}else if(bf&&bf.vAlign){bj=bf.vAlign;
}if(bg.hAlign){bh=bg.hAlign;
}else if(bf&&bf.hAlign){bh=bf.hAlign;
}else if(bi&&bi.hAlign){bh=bi.hAlign;
}return {vAlign:bj,hAlign:bh};
},setColumnFlex:function(bk,bl){this._setColumnData(bk,n,bl);
this._applyLayoutChange();
return this;
},getColumnFlex:function(bm){var bn=this.__mn[bm]||{};
return bn.flex!==undefined?bn.flex:0;
},setRowFlex:function(bo,bp){this._setRowData(bo,n,bp);
this._applyLayoutChange();
return this;
},getRowFlex:function(bq){var br=this.__mm[bq]||{};
var bs=br.flex!==undefined?br.flex:0;
return bs;
},setColumnMaxWidth:function(bt,bu){this._setColumnData(bt,a,bu);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(bv){var bw=this.__mn[bv]||{};
return bw.maxWidth!==undefined?bw.maxWidth:Infinity;
},setColumnWidth:function(bx,by){this._setColumnData(bx,f,by);
this._applyLayoutChange();
return this;
},getColumnWidth:function(bz){var bA=this.__mn[bz]||{};
return bA.width!==undefined?bA.width:null;
},setColumnMinWidth:function(bB,bC){this._setColumnData(bB,g,bC);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(bD){var bE=this.__mn[bD]||{};
return bE.minWidth||0;
},setRowMaxHeight:function(bF,bG){this._setRowData(bF,c,bG);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(bH){var bI=this.__mm[bH]||{};
return bI.maxHeight||Infinity;
},setRowHeight:function(bJ,bK){this._setRowData(bJ,d,bK);
this._applyLayoutChange();
return this;
},getRowHeight:function(bL){var bM=this.__mm[bL]||{};
return bM.height!==undefined?bM.height:null;
},setRowMinHeight:function(bN,bO){this._setRowData(bN,e,bO);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(bP){var bQ=this.__mm[bP]||{};
return bQ.minHeight||0;
},__mw:function(bR){var bV=bR.getSizeHint();
var bU=bR.getMarginLeft()+bR.getMarginRight();
var bT=bR.getMarginTop()+bR.getMarginBottom();
var bS={height:bV.height+bT,width:bV.width+bU,minHeight:bV.minHeight+bT,minWidth:bV.minWidth+bU,maxHeight:bV.maxHeight+bT,maxWidth:bV.maxWidth+bU};
return bS;
},_fixHeightsRowSpan:function(bW){var ce=this.getSpacingY();

for(var i=0,l=this.__mq.length;i<l;i++){var cl=this.__mq[i];
var ch=this.__mw(cl);
var ca=cl.getLayoutProperties();
var cg=ca.row;
var cq=ce*(ca.rowSpan-1);
var bX=cq;
var cb={};

for(var j=0;j<ca.rowSpan;j++){var cf=ca.row+j;
var cp=bW[cf];
var cr=this.getRowFlex(cf);

if(cr>0){cb[cf]={min:cp.minHeight,value:cp.height,max:cp.maxHeight,flex:cr};
}cq+=cp.height;
bX+=cp.minHeight;
}if(cq<ch.height){if(!qx.lang.Object.isEmpty(cb)){var cc=qx.ui.layout.Util.computeFlexOffsets(cb,ch.height,cq);

for(var k=0;k<ca.rowSpan;k++){var cn=cc[cg+k]?cc[cg+k].offset:0;
bW[cg+k].height+=cn;
}}else{var ck=ce*(ca.rowSpan-1);
var ci=ch.height-ck;
var co=Math.floor(ci/ca.rowSpan);
var cm=0;
var bY=0;

for(var k=0;k<ca.rowSpan;k++){var cd=bW[cg+k].height;
cm+=cd;

if(cd<co){bY++;
}}var cj=Math.floor((ci-cm)/bY);
for(var k=0;k<ca.rowSpan;k++){if(bW[cg+k].height<co){bW[cg+k].height+=cj;
}}}}if(bX<ch.minHeight){var cc=qx.ui.layout.Util.computeFlexOffsets(cb,ch.minHeight,bX);

for(var j=0;j<ca.rowSpan;j++){var cn=cc[cg+j]?cc[cg+j].offset:0;
bW[cg+j].minHeight+=cn;
}}}},_fixWidthsColSpan:function(cs){var cw=this.getSpacingX();

for(var i=0,l=this.__mp.length;i<l;i++){var ct=this.__mp[i];
var cv=this.__mw(ct);
var cy=ct.getLayoutProperties();
var cu=cy.column;
var cE=cw*(cy.colSpan-1);
var cx=cE;
var cz={};
var cB;

for(var j=0;j<cy.colSpan;j++){var cF=cy.column+j;
var cD=cs[cF];
var cC=this.getColumnFlex(cF);
if(cC>0){cz[cF]={min:cD.minWidth,value:cD.width,max:cD.maxWidth,flex:cC};
}cE+=cD.width;
cx+=cD.minWidth;
}if(cE<cv.width){var cA=qx.ui.layout.Util.computeFlexOffsets(cz,cv.width,cE);

for(var j=0;j<cy.colSpan;j++){cB=cA[cu+j]?cA[cu+j].offset:0;
cs[cu+j].width+=cB;
}}if(cx<cv.minWidth){var cA=qx.ui.layout.Util.computeFlexOffsets(cz,cv.minWidth,cx);

for(var j=0;j<cy.colSpan;j++){cB=cA[cu+j]?cA[cu+j].offset:0;
cs[cu+j].minWidth+=cB;
}}}},_getRowHeights:function(){if(this.__mt!=null){return this.__mt;
}var cP=[];
var cI=this.__mr;
var cH=this.__ms;

for(var cQ=0;cQ<=cI;cQ++){var cJ=0;
var cL=0;
var cK=0;

for(var cO=0;cO<=cH;cO++){var cG=this.__mo[cQ][cO];

if(!cG){continue;
}var cM=cG.getLayoutProperties().rowSpan||0;

if(cM>1){continue;
}var cN=this.__mw(cG);

if(this.getRowFlex(cQ)>0){cJ=Math.max(cJ,cN.minHeight);
}else{cJ=Math.max(cJ,cN.height);
}cL=Math.max(cL,cN.height);
}var cJ=Math.max(cJ,this.getRowMinHeight(cQ));
var cK=this.getRowMaxHeight(cQ);

if(this.getRowHeight(cQ)!==null){var cL=this.getRowHeight(cQ);
}else{var cL=Math.max(cJ,Math.min(cL,cK));
}cP[cQ]={minHeight:cJ,height:cL,maxHeight:cK};
}
if(this.__mq.length>0){this._fixHeightsRowSpan(cP);
}this.__mt=cP;
return cP;
},_getColWidths:function(){if(this.__mu!=null){return this.__mu;
}var cV=[];
var cS=this.__ms;
var cU=this.__mr;

for(var db=0;db<=cS;db++){var cY=0;
var cX=0;
var cT=Infinity;

for(var dc=0;dc<=cU;dc++){var cR=this.__mo[dc][db];

if(!cR){continue;
}var cW=cR.getLayoutProperties().colSpan||0;

if(cW>1){continue;
}var da=this.__mw(cR);

if(this.getColumnFlex(db)>0){cX=Math.max(cX,da.minWidth);
}else{cX=Math.max(cX,da.width);
}cY=Math.max(cY,da.width);
}var cX=Math.max(cX,this.getColumnMinWidth(db));
var cT=this.getColumnMaxWidth(db);

if(this.getColumnWidth(db)!==null){var cY=this.getColumnWidth(db);
}else{var cY=Math.max(cX,Math.min(cY,cT));
}cV[db]={minWidth:cX,width:cY,maxWidth:cT};
}
if(this.__mp.length>0){this._fixWidthsColSpan(cV);
}this.__mu=cV;
return cV;
},_getColumnFlexOffsets:function(dd){var de=this.getSizeHint();
var di=dd-de.width;

if(di==0){return {};
}var dg=this._getColWidths();
var df={};

for(var i=0,l=dg.length;i<l;i++){var dj=dg[i];
var dh=this.getColumnFlex(i);

if((dh<=0)||(dj.width==dj.maxWidth&&di>0)||(dj.width==dj.minWidth&&di<0)){continue;
}df[i]={min:dj.minWidth,value:dj.width,max:dj.maxWidth,flex:dh};
}return qx.ui.layout.Util.computeFlexOffsets(df,dd,de.width);
},_getRowFlexOffsets:function(dk){var dl=this.getSizeHint();
var dp=dk-dl.height;

if(dp==0){return {};
}var dq=this._getRowHeights();
var dm={};

for(var i=0,l=dq.length;i<l;i++){var dr=dq[i];
var dn=this.getRowFlex(i);

if((dn<=0)||(dr.height==dr.maxHeight&&dp>0)||(dr.height==dr.minHeight&&dp<0)){continue;
}dm[i]={min:dr.minHeight,value:dr.height,max:dr.maxHeight,flex:dn};
}return qx.ui.layout.Util.computeFlexOffsets(dm,dk,dl.height);
},renderLayout:function(ds,dt){if(this._invalidChildrenCache){this.__mv();
}var dH=qx.ui.layout.Util;
var dv=this.getSpacingX();
var dB=this.getSpacingY();
var dM=this._getColWidths();
var dL=this._getColumnFlexOffsets(ds);
var dw=[];
var dO=this.__ms;
var du=this.__mr;
var dN;

for(var dP=0;dP<=dO;dP++){dN=dL[dP]?dL[dP].offset:0;
dw[dP]=dM[dP].width+dN;
}var dE=this._getRowHeights();
var dG=this._getRowFlexOffsets(dt);
var dV=[];

for(var dC=0;dC<=du;dC++){dN=dG[dC]?dG[dC].offset:0;
dV[dC]=dE[dC].height+dN;
}var dW=0;

for(var dP=0;dP<=dO;dP++){var top=0;

for(var dC=0;dC<=du;dC++){var dJ=this.__mo[dC][dP];
if(!dJ){top+=dV[dC]+dB;
continue;
}var dx=dJ.getLayoutProperties();
if(dx.row!==dC||dx.column!==dP){top+=dV[dC]+dB;
continue;
}var dU=dv*(dx.colSpan-1);

for(var i=0;i<dx.colSpan;i++){dU+=dw[dP+i];
}var dK=dB*(dx.rowSpan-1);

for(var i=0;i<dx.rowSpan;i++){dK+=dV[dC+i];
}var dy=dJ.getSizeHint();
var dS=dJ.getMarginTop();
var dI=dJ.getMarginLeft();
var dF=dJ.getMarginBottom();
var dA=dJ.getMarginRight();
var dD=Math.max(dy.minWidth,Math.min(dU-dI-dA,dy.maxWidth));
var dT=Math.max(dy.minHeight,Math.min(dK-dS-dF,dy.maxHeight));
var dQ=this.getCellAlign(dC,dP);
var dR=dW+dH.computeHorizontalAlignOffset(dQ.hAlign,dD,dU,dI,dA);
var dz=top+dH.computeVerticalAlignOffset(dQ.vAlign,dT,dK,dS,dF);
dJ.renderLayout(dR,dz,dD,dT);
top+=dV[dC]+dB;
}dW+=dw[dP]+dv;
}},invalidateLayoutCache:function(){qx.ui.layout.Abstract.prototype.invalidateLayoutCache.call(this);
this.__mu=null;
this.__mt=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__mv();
}var ec=this._getColWidths();
var ee=0,ef=0;

for(var i=0,l=ec.length;i<l;i++){var eg=ec[i];

if(this.getColumnFlex(i)>0){ee+=eg.minWidth;
}else{ee+=eg.width;
}ef+=eg.width;
}var eh=this._getRowHeights();
var ea=0,ed=0;

for(var i=0,l=eh.length;i<l;i++){var ei=eh[i];

if(this.getRowFlex(i)>0){ea+=ei.minHeight;
}else{ea+=ei.height;
}ed+=ei.height;
}var dY=this.getSpacingX()*(ec.length-1);
var dX=this.getSpacingY()*(eh.length-1);
var eb={minWidth:ee+dY,width:ef+dY,minHeight:ea+dX,height:ed+dX};
return eb;
}},destruct:function(){this.__mo=this.__mm=this.__mn=this.__mp=this.__mq=this.__mu=this.__mt=null;
}});
})();
(function(){var n="execute",m="toolTipText",l="icon",k="label",j="qx.ui.core.MExecutable",h="value",g="qx.event.type.Event",f="_applyCommand",d="enabled",c="menu",a="changeCommand",b="qx.ui.core.Command";
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__lh:null,__li:false,__lj:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var o=this.getCommand();

if(o){if(this.__li){this.__li=false;
}else{this.__li=true;
o.execute(this);
}}this.fireEvent(n);
},__lk:function(e){if(this.__li){this.__li=false;
return;
}this.__li=true;
this.execute();
},_applyCommand:function(p,q){if(q!=null){q.removeListenerById(this.__lj);
}
if(p!=null){this.__lj=p.addListener(n,this.__lk,this);
}var t=this.__lh;

if(t==null){this.__lh=t={};
}var u;

for(var i=0;i<this._bindableProperties.length;i++){var s=this._bindableProperties[i];
if(q!=null&&!q.isDisposed()&&t[s]!=null){q.removeBinding(t[s]);
t[s]=null;
}if(p!=null&&qx.Class.hasProperty(this.constructor,s)){var r=p.get(s);

if(r==null){u=this.get(s);
}else{u=null;
}t[s]=p.bind(s,this,s);
if(u){this.set(s,u);
}}}}},destruct:function(){this._applyCommand(null,this.getCommand());
this.__lh=null;
}});
})();
(function(){var b="qx.ui.form.IExecutable",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"execute":a},members:{setCommand:function(c){return arguments.length==1;
},getCommand:function(){},execute:function(){}}});
})();
(function(){var o="pressed",n="abandoned",m="hovered",l="Enter",k="Space",j="dblclick",i="qx.ui.form.Button",h="mouseup",g="mousedown",f="mouseover",b="mouseout",d="keydown",c="button",a="keyup";
qx.Class.define(i,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(p,q,r){qx.ui.basic.Atom.call(this,p,q);

if(r!=null){this.setCommand(r);
}this.addListener(f,this._onMouseOver);
this.addListener(b,this._onMouseOut);
this.addListener(g,this._onMouseDown);
this.addListener(h,this._onMouseUp);
this.addListener(d,this._onKeyDown);
this.addListener(a,this._onKeyUp);
this.addListener(j,this._onStopEvent);
},properties:{appearance:{refine:true,init:c},focusable:{refine:true,init:true}},members:{_forwardStates:{focused:true,hovered:true,pressed:true,disabled:true},press:function(){if(this.hasState(n)){return;
}this.addState(o);
},release:function(){if(this.hasState(o)){this.removeState(o);
}},reset:function(){this.removeState(o);
this.removeState(n);
this.removeState(m);
},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(n)){this.removeState(n);
this.addState(o);
}this.addState(m);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(m);

if(this.hasState(o)){this.removeState(o);
this.addState(n);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}e.stopPropagation();
this.capture();
this.removeState(n);
this.addState(o);
},_onMouseUp:function(e){this.releaseCapture();
var s=this.hasState(o);
var t=this.hasState(n);

if(s){this.removeState(o);
}
if(t){this.removeState(n);
}else{this.addState(m);

if(s){this.execute();
}}e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case l:case k:this.removeState(n);
this.addState(o);
e.stopPropagation();
}},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case l:case k:if(this.hasState(o)){this.removeState(n);
this.removeState(o);
this.execute();
e.stopPropagation();
}}}}});
})();
(function(){var p="Boolean",o="column-button",n="Function",m="qx.event.type.Data",k="statusbar",h="qx.ui.table.pane.CellEvent",g="function",f="PageUp",e="dataChanged",d="changeLocale",bH="changeSelection",bG="appear",bF="qx.dynlocale",bE='"',bD="Enter",bC="metaDataChanged",bB="__nR",bA="_applyStatusBarVisible",bz="columnVisibilityMenuCreateStart",by="blur",w="qx.ui.table.Table",y="columnVisibilityMenuCreateEnd",u="changeVisible",v="_applyResetSelectionOnHeaderClick",s="_applyMetaColumnCounts",t="focus",q="changeDataRowRenderer",r="changeHeaderCellHeight",F="Escape",G="A",ba="changeSelectionModel",V="Left",bi="Down",bd="Integer",bu="__nT",bo="_applyHeaderCellHeight",O="visibilityChanged",bx="qx.ui.table.ITableModel",bw="orderChanged",bv="_applySelectionModel",M="__nQ",R="menu-button",T="menu",X="_applyAdditionalStatusBarText",bb="_applyFocusCellOnMouseMove",be="table",bk="_applyColumnVisibilityButtonVisible",bq="changeTableModel",z="qx.event.type.Event",A="tableWidthChanged",Q="_applyHeaderCellsVisible",bh="Object",bg="_applyShowCellFocusIndicator",bf="resize",bm="verticalScrollBarChanged",bl="changeScrollY",bc="_applyTableModel",bj="__nP",a="End",bp="_applyKeepFirstVisibleRowComplete",B="widthChanged",C="one of one row",W="Home",b="_applyRowHeight",c="F2",L="Up",D="%1 rows",E="qx.ui.table.selection.Model",K="one row",Y="PageDown",bs="%1 of %2 rows",br="keypress",S="changeRowHeight",bt="Number",N="__nI",bn="header",H="_applyContextMenuFromDataCellsOnly",J="qx.ui.table.IRowRenderer",P="Right",U="__nH",I="Space";
qx.Class.define(w,{extend:qx.ui.core.Widget,construct:function(bI,bJ){qx.ui.core.Widget.call(this);
if(!bJ){bJ={};
}
if(bJ.initiallyHiddenColumns){this.setInitiallyHiddenColumns(bJ.initiallyHiddenColumns);
}
if(bJ.selectionManager){this.setNewSelectionManager(bJ.selectionManager);
}
if(bJ.selectionModel){this.setNewSelectionModel(bJ.selectionModel);
}
if(bJ.tableColumnModel){this.setNewTableColumnModel(bJ.tableColumnModel);
}
if(bJ.tablePane){this.setNewTablePane(bJ.tablePane);
}
if(bJ.tablePaneHeader){this.setNewTablePaneHeader(bJ.tablePaneHeader);
}
if(bJ.tablePaneScroller){this.setNewTablePaneScroller(bJ.tablePaneScroller);
}
if(bJ.tablePaneModel){this.setNewTablePaneModel(bJ.tablePaneModel);
}
if(bJ.columnMenu){this.setNewColumnMenu(bJ.columnMenu);
}this._setLayout(new qx.ui.layout.VBox());
this.__nH=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__nH,{flex:1});
this.setDataRowRenderer(new qx.ui.table.rowrenderer.Default(this));
this.__nI=this.getNewSelectionManager()(this);
this.setSelectionModel(this.getNewSelectionModel()(this));
this.setTableModel(bI||this.getEmptyTableModel());
this.setMetaColumnCounts([-1]);
this.setTabIndex(1);
this.addListener(br,this._onKeyPress);
this.addListener(t,this._onFocusChanged);
this.addListener(by,this._onFocusChanged);
var bK=new qx.ui.core.Widget().set({height:0});
this._add(bK);
bK.addListener(bf,this._onResize,this);
this.__nJ=null;
this.__nK=null;
if(qx.core.Environment.get(bF)){qx.locale.Manager.getInstance().addListener(d,this._onChangeLocale,this);
}this.initStatusBarVisible();
bI=this.getTableModel();

if(bI.init&&typeof (bI.init)==g){bI.init(this);
}},events:{"columnVisibilityMenuCreateStart":m,"columnVisibilityMenuCreateEnd":m,"tableWidthChanged":z,"verticalScrollBarChanged":m,"cellClick":h,"cellDblclick":h,"cellContextmenu":h,"dataEdited":m},statics:{__nL:{cellClick:1,cellDblclick:1,cellContextmenu:1}},properties:{appearance:{refine:true,init:be},focusable:{refine:true,init:true},minWidth:{refine:true,init:50},initiallyHiddenColumns:{init:null},selectable:{refine:true,init:false},selectionModel:{check:E,apply:bv,event:ba},tableModel:{check:bx,apply:bc,event:bq},rowHeight:{check:bt,init:20,apply:b,event:S,themeable:true},forceLineHeight:{check:p,init:true},headerCellsVisible:{check:p,init:true,apply:Q,themeable:true},headerCellHeight:{check:bd,init:16,apply:bo,event:r,nullable:true,themeable:true},statusBarVisible:{check:p,init:true,apply:bA},additionalStatusBarText:{nullable:true,init:null,apply:X},columnVisibilityButtonVisible:{check:p,init:true,apply:bk,themeable:true},metaColumnCounts:{check:bh,apply:s},focusCellOnMouseMove:{check:p,init:false,apply:bb},rowFocusChangeModifiesSelection:{check:p,init:true},showCellFocusIndicator:{check:p,init:true,apply:bg},contextMenuFromDataCellsOnly:{check:p,init:true,apply:H},keepFirstVisibleRowComplete:{check:p,init:true,apply:bp},alwaysUpdateCells:{check:p,init:false},resetSelectionOnHeaderClick:{check:p,init:true,apply:v},dataRowRenderer:{check:J,init:null,nullable:true,event:q},modalCellEditorPreOpenFunction:{check:n,init:null,nullable:true},newColumnMenu:{check:n,init:function(){return new qx.ui.table.columnmenu.Button();
}},newSelectionManager:{check:n,init:function(bL){return new qx.ui.table.selection.Manager(bL);
}},newSelectionModel:{check:n,init:function(bM){return new qx.ui.table.selection.Model(bM);
}},newTableColumnModel:{check:n,init:function(bN){return new qx.ui.table.columnmodel.Basic(bN);
}},newTablePane:{check:n,init:function(bO){return new qx.ui.table.pane.Pane(bO);
}},newTablePaneHeader:{check:n,init:function(bP){return new qx.ui.table.pane.Header(bP);
}},newTablePaneScroller:{check:n,init:function(bQ){return new qx.ui.table.pane.Scroller(bQ);
}},newTablePaneModel:{check:n,init:function(bR){return new qx.ui.table.pane.Model(bR);
}}},members:{__nJ:null,__nK:null,__nH:null,__nI:null,__nM:null,__nN:null,__nO:null,__nP:null,__nQ:null,__nR:null,__nS:null,__nT:null,_createChildControlImpl:function(bS,bT){var bU;

switch(bS){case k:bU=new qx.ui.basic.Label();
bU.set({allowGrowX:true});
this._add(bU);
break;
case o:bU=this.getNewColumnMenu()();
bU.set({focusable:false});
var bV=bU.factory(T,{table:this});
bV.addListener(bG,this._initColumnMenu,this);
break;
}return bU||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bS);
},_applySelectionModel:function(bW,bX){this.__nI.setSelectionModel(bW);

if(bX!=null){bX.removeListener(bH,this._onSelectionChanged,this);
}bW.addListener(bH,this._onSelectionChanged,this);
},_applyRowHeight:function(bY,ca){var cb=this._getPaneScrollerArr();

for(var i=0;i<cb.length;i++){cb[i].updateVerScrollBarMaximum();
}},_applyHeaderCellsVisible:function(cc,cd){var ce=this._getPaneScrollerArr();

for(var i=0;i<ce.length;i++){ce[i]._excludeChildControl(bn);
}},_applyHeaderCellHeight:function(cf,cg){var ch=this._getPaneScrollerArr();

for(var i=0;i<ch.length;i++){ch[i].getHeader().setHeight(cf);
}},getEmptyTableModel:function(){if(!this.__nR){this.__nR=new qx.ui.table.model.Simple();
this.__nR.setColumns([]);
this.__nR.setData([]);
}return this.__nR;
},_applyTableModel:function(ci,cj){this.getTableColumnModel().init(ci.getColumnCount(),this);

if(cj!=null){cj.removeListener(bC,this._onTableModelMetaDataChanged,this);
cj.removeListener(e,this._onTableModelDataChanged,this);
}ci.addListener(bC,this._onTableModelMetaDataChanged,this);
ci.addListener(e,this._onTableModelDataChanged,this);
this._updateStatusBar();
this._updateTableData(0,ci.getRowCount(),0,ci.getColumnCount());
this._onTableModelMetaDataChanged();
if(cj&&ci.init&&typeof (ci.init)==g){ci.init(this);
}},getTableColumnModel:function(){if(!this.__nQ){var cn=this.__nQ=this.getNewTableColumnModel()(this);
cn.addListener(O,this._onColVisibilityChanged,this);
cn.addListener(B,this._onColWidthChanged,this);
cn.addListener(bw,this._onColOrderChanged,this);
var cm=this.getTableModel();
cn.init(cm.getColumnCount(),this);
var ck=this._getPaneScrollerArr();

for(var i=0;i<ck.length;i++){var cl=ck[i];
var co=cl.getTablePaneModel();
co.setTableColumnModel(cn);
}}return this.__nQ;
},_applyStatusBarVisible:function(cp,cq){if(cp){this._showChildControl(k);
}else{this._excludeChildControl(k);
}
if(cp){this._updateStatusBar();
}},_applyAdditionalStatusBarText:function(cr,cs){this.__nM=cr;
this._updateStatusBar();
},_applyColumnVisibilityButtonVisible:function(ct,cu){if(ct){this._showChildControl(o);
}else{this._excludeChildControl(o);
}},_applyMetaColumnCounts:function(cv,cw){var cD=cv;
var cx=this._getPaneScrollerArr();
var cB={};

if(cv>cw){var cF=qx.event.Registration.getManager(cx[0]);

for(var cG in qx.ui.table.Table.__nL){cB[cG]={};
cB[cG].capture=cF.getListeners(cx[0],cG,true);
cB[cG].bubble=cF.getListeners(cx[0],cG,false);
}}this._cleanUpMetaColumns(cD.length);
var cC=0;

for(var i=0;i<cx.length;i++){var cH=cx[i];
var cE=cH.getTablePaneModel();
cE.setFirstColumnX(cC);
cE.setMaxColumnCount(cD[i]);
cC+=cD[i];
}if(cD.length>cx.length){var cA=this.getTableColumnModel();

for(var i=cx.length;i<cD.length;i++){var cE=this.getNewTablePaneModel()(cA);
cE.setFirstColumnX(cC);
cE.setMaxColumnCount(cD[i]);
cC+=cD[i];
var cH=this.getNewTablePaneScroller()(this);
cH.setTablePaneModel(cE);
cH.addListener(bl,this._onScrollY,this);
for(cG in qx.ui.table.Table.__nL){if(!cB[cG]){break;
}
if(cB[cG].capture&&cB[cG].capture.length>0){var cy=cB[cG].capture;

for(var j=0;j<cy.length;j++){var cz=cy[j].context;

if(!cz){cz=this;
}else if(cz==cx[0]){cz=cH;
}cH.addListener(cG,cy[j].handler,cz,true);
}}
if(cB[cG].bubble&&cB[cG].bubble.length>0){var cJ=cB[cG].bubble;

for(var j=0;j<cJ.length;j++){var cz=cJ[j].context;

if(!cz){cz=this;
}else if(cz==cx[0]){cz=cH;
}cH.addListener(cG,cJ[j].handler,cz,false);
}}}var cI=(i==cD.length-1)?1:0;
this.__nH.add(cH,{flex:cI});
cx=this._getPaneScrollerArr();
}}for(var i=0;i<cx.length;i++){var cH=cx[i];
var cK=(i==(cx.length-1));
cH.getHeader().setHeight(this.getHeaderCellHeight());
cH.setTopRightWidget(cK?this.getChildControl(o):null);
}
if(!this.isColumnVisibilityButtonVisible()){this._excludeChildControl(o);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_applyFocusCellOnMouseMove:function(cL,cM){var cN=this._getPaneScrollerArr();

for(var i=0;i<cN.length;i++){cN[i].setFocusCellOnMouseMove(cL);
}},_applyShowCellFocusIndicator:function(cO,cP){var cQ=this._getPaneScrollerArr();

for(var i=0;i<cQ.length;i++){cQ[i].setShowCellFocusIndicator(cO);
}},_applyContextMenuFromDataCellsOnly:function(cR,cS){var cT=this._getPaneScrollerArr();

for(var i=0;i<cT.length;i++){cT[i].setContextMenuFromDataCellsOnly(cR);
}},_applyKeepFirstVisibleRowComplete:function(cU,cV){var cW=this._getPaneScrollerArr();

for(var i=0;i<cW.length;i++){cW[i].onKeepFirstVisibleRowCompleteChanged();
}},_applyResetSelectionOnHeaderClick:function(cX,cY){var da=this._getPaneScrollerArr();

for(var i=0;i<da.length;i++){da[i].setResetSelectionOnHeaderClick(cX);
}},getSelectionManager:function(){return this.__nI;
},_getPaneScrollerArr:function(){return this.__nH.getChildren();
},getPaneScroller:function(db){return this._getPaneScrollerArr()[db];
},_cleanUpMetaColumns:function(dc){var dd=this._getPaneScrollerArr();

if(dd!=null){for(var i=dd.length-1;i>=dc;i--){dd[i].destroy();
}}},_onChangeLocale:function(de){this.updateContent();
this._updateStatusBar();
},_onSelectionChanged:function(df){var dg=this._getPaneScrollerArr();

for(var i=0;i<dg.length;i++){dg[i].onSelectionChanged();
}this._updateStatusBar();
},_onTableModelMetaDataChanged:function(dh){var di=this._getPaneScrollerArr();

for(var i=0;i<di.length;i++){di[i].onTableModelMetaDataChanged();
}this._updateStatusBar();
},_onTableModelDataChanged:function(dj){var dk=dj.getData();
this._updateTableData(dk.firstRow,dk.lastRow,dk.firstColumn,dk.lastColumn,dk.removeStart,dk.removeCount);
},_updateTableData:function(dl,dm,dn,dp,dq,dr){var ds=this._getPaneScrollerArr();
if(dr){this.getSelectionModel().removeSelectionInterval(dq,dq+dr);
if(this.__nK>=dq&&this.__nK<(dq+dr)){this.setFocusedCell();
}}
for(var i=0;i<ds.length;i++){ds[i].onTableModelDataChanged(dl,dm,dn,dp);
}var dt=this.getTableModel().getRowCount();

if(dt!=this.__nN){this.__nN=dt;
this._updateScrollBarVisibility();
this._updateStatusBar();
}},_onScrollY:function(du){if(!this.__nO){this.__nO=true;
var dv=this._getPaneScrollerArr();

for(var i=0;i<dv.length;i++){dv[i].setScrollY(du.getData());
}this.__nO=false;
}},_onKeyPress:function(dw){if(!this.getEnabled()){return;
}var dD=this.__nK;
var dA=true;
var dE=dw.getKeyIdentifier();

if(this.isEditing()){if(dw.getModifiers()==0){switch(dE){case bD:this.stopEditing();
var dD=this.__nK;
this.moveFocusedCell(0,1);

if(this.__nK!=dD){dA=this.startEditing();
}break;
case F:this.cancelEditing();
this.focus();
break;
default:dA=false;
break;
}}}else{if(dw.isCtrlPressed()){dA=true;

switch(dE){case G:var dB=this.getTableModel().getRowCount();

if(dB>0){this.getSelectionModel().setSelectionInterval(0,dB-1);
}break;
default:dA=false;
break;
}}else{switch(dE){case I:this.__nI.handleSelectKeyDown(this.__nK,dw);
break;
case c:case bD:this.startEditing();
dA=true;
break;
case W:this.setFocusedCell(this.__nJ,0,true);
break;
case a:var dB=this.getTableModel().getRowCount();
this.setFocusedCell(this.__nJ,dB-1,true);
break;
case V:this.moveFocusedCell(-1,0);
break;
case P:this.moveFocusedCell(1,0);
break;
case L:this.moveFocusedCell(0,-1);
break;
case bi:this.moveFocusedCell(0,1);
break;
case f:case Y:var dz=this.getPaneScroller(0);
var dC=dz.getTablePane();
var dy=this.getRowHeight();
var dx=(dE==f)?-1:1;
dB=dC.getVisibleRowCount()-1;
dz.setScrollY(dz.getScrollY()+dx*dB*dy);
this.moveFocusedCell(0,dx*dB);
break;
default:dA=false;
}}}
if(dD!=this.__nK&&this.getRowFocusChangeModifiesSelection()){this.__nI.handleMoveKeyDown(this.__nK,dw);
}
if(dA){dw.preventDefault();
dw.stopPropagation();
}},_onFocusChanged:function(dF){var dG=this._getPaneScrollerArr();

for(var i=0;i<dG.length;i++){dG[i].onFocusChanged();
}},_onColVisibilityChanged:function(dH){var dI=this._getPaneScrollerArr();

for(var i=0;i<dI.length;i++){dI[i].onColVisibilityChanged();
}var dJ=dH.getData();

if(this.__nP!=null&&dJ.col!=null&&dJ.visible!=null){this.__nP[dJ.col].setVisible(dJ.visible);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColWidthChanged:function(dK){var dL=this._getPaneScrollerArr();

for(var i=0;i<dL.length;i++){var dM=dK.getData();
dL[i].setColumnWidth(dM.col,dM.newWidth);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColOrderChanged:function(dN){var dO=this._getPaneScrollerArr();

for(var i=0;i<dO.length;i++){dO[i].onColOrderChanged();
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},getTablePaneScrollerAtPageX:function(dP){var dQ=this._getMetaColumnAtPageX(dP);
return (dQ!=-1)?this.getPaneScroller(dQ):null;
},setFocusedCell:function(dR,dS,dT){if(!this.isEditing()&&(dR!=this.__nJ||dS!=this.__nK)){if(dR===null){dR=0;
}this.__nJ=dR;
this.__nK=dS;
var dU=this._getPaneScrollerArr();

for(var i=0;i<dU.length;i++){dU[i].setFocusedCell(dR,dS);
}
if(dR!==null&&dT){this.scrollCellVisible(dR,dS);
}}},resetSelection:function(){this.getSelectionModel().resetSelection();
},resetCellFocus:function(){this.setFocusedCell(null,null,false);
},getFocusedColumn:function(){return this.__nJ;
},getFocusedRow:function(){return this.__nK;
},highlightFocusedRow:function(dV){this.getDataRowRenderer().setHighlightFocusRow(dV);
},clearFocusedRowHighlight:function(dW){if(dW){var dY=dW.getRelatedTarget();

if(dY instanceof qx.ui.table.pane.Pane||dY instanceof qx.ui.table.pane.FocusIndicator){return;
}}this.resetCellFocus();
var dX=this._getPaneScrollerArr();

for(var i=0;i<dX.length;i++){dX[i].onFocusChanged();
}},moveFocusedCell:function(ea,eb){var ef=this.__nJ;
var eg=this.__nK;
if(ef==null||eg==null){return;
}
if(ea!=0){var ee=this.getTableColumnModel();
var x=ee.getVisibleX(ef);
var ed=ee.getVisibleColumnCount();
x=qx.lang.Number.limit(x+ea,0,ed-1);
ef=ee.getVisibleColumnAtX(x);
}
if(eb!=0){var ec=this.getTableModel();
eg=qx.lang.Number.limit(eg+eb,0,ec.getRowCount()-1);
}this.setFocusedCell(ef,eg,true);
},scrollCellVisible:function(eh,ei){var ej=this.getContentElement().getDomElement();
if(!ej){this.addListenerOnce(bG,function(){this.scrollCellVisible(eh,ei);
},this);
}var ek=this.getTableColumnModel();
var x=ek.getVisibleX(eh);
var el=this._getMetaColumnAtColumnX(x);

if(el!=-1){this.getPaneScroller(el).scrollCellVisible(eh,ei);
}},isEditing:function(){if(this.__nJ!=null){var x=this.getTableColumnModel().getVisibleX(this.__nJ);
var em=this._getMetaColumnAtColumnX(x);
return this.getPaneScroller(em).isEditing();
}return false;
},startEditing:function(){if(this.__nJ!=null){var x=this.getTableColumnModel().getVisibleX(this.__nJ);
var eo=this._getMetaColumnAtColumnX(x);
var en=this.getPaneScroller(eo).startEditing();
return en;
}return false;
},stopEditing:function(){if(this.__nJ!=null){var x=this.getTableColumnModel().getVisibleX(this.__nJ);
var ep=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(ep).stopEditing();
}},cancelEditing:function(){if(this.__nJ!=null){var x=this.getTableColumnModel().getVisibleX(this.__nJ);
var eq=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(eq).cancelEditing();
}},updateContent:function(){var er=this._getPaneScrollerArr();

for(var i=0;i<er.length;i++){er[i].getTablePane().updateContent(true);
}},blockHeaderElements:function(){var es=this._getPaneScrollerArr();

for(var i=0;i<es.length;i++){es[i].getHeader().getBlocker().blockContent(20);
}this.getChildControl(o).getBlocker().blockContent(20);
},unblockHeaderElements:function(){var et=this._getPaneScrollerArr();

for(var i=0;i<et.length;i++){et[i].getHeader().getBlocker().unblockContent();
}this.getChildControl(o).getBlocker().unblockContent();
},_getMetaColumnAtPageX:function(eu){var ev=this._getPaneScrollerArr();

for(var i=0;i<ev.length;i++){var ew=ev[i].getContainerLocation();

if(eu>=ew.left&&eu<=ew.right){return i;
}}return -1;
},_getMetaColumnAtColumnX:function(ex){var ez=this.getMetaColumnCounts();
var eA=0;

for(var i=0;i<ez.length;i++){var ey=ez[i];
eA+=ey;

if(ey==-1||ex<eA){return i;
}}return -1;
},_updateStatusBar:function(){var eB=this.getTableModel();

if(this.getStatusBarVisible()){var eC=this.getSelectionModel().getSelectedCount();
var eE=eB.getRowCount();
var eD;

if(eE>=0){if(eC==0){eD=this.trn(K,D,eE,eE);
}else{eD=this.trn(C,bs,eE,eC,eE);
}}
if(this.__nM){if(eD){eD+=this.__nM;
}else{eD=this.__nM;
}}
if(eD){this.getChildControl(k).setValue(eD);
}}},_updateScrollerWidths:function(){var eF=this._getPaneScrollerArr();

for(var i=0;i<eF.length;i++){var eH=(i==(eF.length-1));
var eI=eF[i].getTablePaneModel().getTotalWidth();
eF[i].setPaneWidth(eI);
var eG=eH?1:0;
eF[i].setLayoutProperties({flex:eG});
}},_updateScrollBarVisibility:function(){if(!this.getBounds()){return;
}var eM=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var eO=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
var eJ=this._getPaneScrollerArr();
var eL=false;
var eN=false;

for(var i=0;i<eJ.length;i++){var eP=(i==(eJ.length-1));
var eK=eJ[i].getNeededScrollBars(eL,!eP);

if(eK&eM){eL=true;
}
if(eP&&(eK&eO)){eN=true;
}}for(var i=0;i<eJ.length;i++){var eP=(i==(eJ.length-1));
eJ[i].setHorizontalScrollBarVisible(eL);
if(eP){if(this.__nS==null){this.__nS=eJ[i].getVerticalScrollBarVisible();
this.__nT=qx.event.Timer.once(function(){this.__nS=null;
this.__nT=null;
},this,0);
}}eJ[i].setVerticalScrollBarVisible(eP&&eN);
if(eP&&eN!=this.__nS){this.fireDataEvent(bm,eN);
}}},_initColumnMenu:function(){var eS=this.getTableModel();
var eT=this.getTableColumnModel();
var eU=this.getChildControl(o);
eU.empty();
var eR=eU.getMenu();
var eV={table:this,menu:eR,columnButton:eU};
this.fireDataEvent(bz,eV);
this.__nP={};

for(var eW=0,l=eS.getColumnCount();eW<l;eW++){var eQ=eU.factory(R,{text:eS.getColumnName(eW),column:eW,bVisible:eT.isColumnVisible(eW)});
qx.core.Assert.assertInterface(eQ,qx.ui.table.IColumnMenuItem);
eQ.addListener(u,this._createColumnVisibilityCheckBoxHandler(eW),this);
this.__nP[eW]=eQ;
}eV={table:this,menu:eR,columnButton:eU};
this.fireDataEvent(y,eV);
},_createColumnVisibilityCheckBoxHandler:function(eX){return function(eY){var fa=this.getTableColumnModel();
fa.setColumnVisible(eX,eY.getData());
};
},setColumnWidth:function(fb,fc){this.getTableColumnModel().setColumnWidth(fb,fc);
},_onResize:function(){this.fireEvent(A);
this._updateScrollerWidths();
this._updateScrollBarVisibility();
},addListener:function(fd,fe,self,ff){if(this.self(arguments).__nL[fd]){var fh=[fd];

for(var i=0,fg=this._getPaneScrollerArr();i<fg.length;i++){fh.push(fg[i].addListener.apply(fg[i],arguments));
}return fh.join(bE);
}else{return qx.ui.core.Widget.prototype.addListener.call(this,fd,fe,self,ff);
}},removeListener:function(fi,fj,self,fk){if(this.self(arguments).__nL[fi]){for(var i=0,fl=this._getPaneScrollerArr();i<fl.length;i++){fl[i].removeListener.apply(fl[i],arguments);
}}else{qx.ui.core.Widget.prototype.removeListener.call(this,fi,fj,self,fk);
}},removeListenerById:function(fm){var fq=fm.split(bE);
var fp=fq.shift();

if(this.self(arguments).__nL[fp]){var fo=true;

for(var i=0,fn=this._getPaneScrollerArr();i<fn.length;i++){fo=fn[i].removeListenerById.call(fn[i],fq[i])&&fo;
}return fo;
}else{return qx.ui.core.Widget.prototype.removeListenerById.call(this,fm);
}},destroy:function(){this.getChildControl(o).getMenu().destroy();
qx.ui.core.Widget.prototype.destroy.call(this);
}},destruct:function(){if(qx.core.Environment.get(bF)){qx.locale.Manager.getInstance().removeListener(d,this._onChangeLocale,this);
}var fs=this.getSelectionModel();

if(fs){fs.dispose();
}var fr=this.getDataRowRenderer();

if(fr){fr.dispose();
}this._cleanUpMetaColumns(0);
this.getTableColumnModel().dispose();
this._disposeObjects(N,U,bB,bB,M,bu);
this._disposeMap(bj);
}});
})();
(function(){var a="qx.ui.table.IRowRenderer";
qx.Interface.define(a,{members:{updateDataRowElement:function(b,c){},getRowHeightStyle:function(d){},createRowStyle:function(e){},getRowClass:function(f){}}});
})();
(function(){var j="",i="table-row-background-even",h="Boolean",g="content",f="default",e="height:",d="'",c="table-row",b="table-row-background-focused",a="css.boxmodel",v=';color:',u="table-row-background-odd",t="1px solid ",s="table-row-line",r="table-row-background-selected",q="background-color:",p=';border-bottom: 1px solid ',o="table-row-selected",n="table-row-background-focused-selected",m="px;",k="qx.ui.table.rowrenderer.Default",l=";";
qx.Class.define(k,{extend:qx.core.Object,implement:qx.ui.table.IRowRenderer,construct:function(){qx.core.Object.call(this);
this.__nU=j;
this.__nU={};
this._colors={};
this._renderFont(qx.theme.manager.Font.getInstance().resolve(f));
var w=qx.theme.manager.Color.getInstance();
this._colors.bgcolFocusedSelected=w.resolve(n);
this._colors.bgcolFocused=w.resolve(b);
this._colors.bgcolSelected=w.resolve(r);
this._colors.bgcolEven=w.resolve(i);
this._colors.bgcolOdd=w.resolve(u);
this._colors.colSelected=w.resolve(o);
this._colors.colNormal=w.resolve(c);
this._colors.horLine=w.resolve(s);
},properties:{highlightFocusRow:{check:h,init:true}},members:{_colors:null,__nV:null,__nU:null,_insetY:1,_renderFont:function(x){if(x){this.__nV=x.getStyles();
this.__nU=qx.bom.element.Style.compile(this.__nV);
this.__nU=this.__nU.replace(/"/g,d);
}else{this.__nU=j;
this.__nV=qx.bom.Font.getDefaultStyles();
}},updateDataRowElement:function(y,z){var B=this.__nV;
var A=z.style;
qx.bom.element.Style.setStyles(z,B);

if(y.focusedRow&&this.getHighlightFocusRow()){A.backgroundColor=y.selected?this._colors.bgcolFocusedSelected:this._colors.bgcolFocused;
}else{if(y.selected){A.backgroundColor=this._colors.bgcolSelected;
}else{A.backgroundColor=(y.row%2==0)?this._colors.bgcolEven:this._colors.bgcolOdd;
}}A.color=y.selected?this._colors.colSelected:this._colors.colNormal;
A.borderBottom=t+this._colors.horLine;
},getRowHeightStyle:function(C){if(qx.core.Environment.get(a)==g){C-=this._insetY;
}return e+C+m;
},createRowStyle:function(D){var E=[];
E.push(l);
E.push(this.__nU);
E.push(q);

if(D.focusedRow&&this.getHighlightFocusRow()){E.push(D.selected?this._colors.bgcolFocusedSelected:this._colors.bgcolFocused);
}else{if(D.selected){E.push(this._colors.bgcolSelected);
}else{E.push((D.row%2==0)?this._colors.bgcolEven:this._colors.bgcolOdd);
}}E.push(v);
E.push(D.selected?this._colors.colSelected:this._colors.colNormal);
E.push(p,this._colors.horLine);
return E.join(j);
},getRowClass:function(F){return j;
},getRowAttributes:function(G){return j;
}},destruct:function(){this._colors=this.__nV=this.__nU=null;
}});
})();
(function(){var a="qx.ui.table.IColumnMenuButton";
qx.Interface.define(a,{properties:{menu:{}},members:{factory:function(b,c){return true;
},empty:function(){return true;
}}});
})();
(function(){var l="pressed",k="hovered",j="changeVisibility",i="qx.ui.menu.Menu",h="submenu",g="Enter",f="contextmenu",d="changeMenu",c="qx.ui.form.MenuButton",b="abandoned",a="_applyMenu";
qx.Class.define(c,{extend:qx.ui.form.Button,construct:function(m,n,o){qx.ui.form.Button.call(this,m,n);
if(o!=null){this.setMenu(o);
}},properties:{menu:{check:i,nullable:true,apply:a,event:d}},members:{_applyMenu:function(p,q){if(q){q.removeListener(j,this._onMenuChange,this);
q.resetOpener();
}
if(p){p.addListener(j,this._onMenuChange,this);
p.setOpener(this);
p.removeState(h);
p.removeState(f);
}},open:function(r){var s=this.getMenu();

if(s){qx.ui.menu.Manager.getInstance().hideAll();
s.setOpener(this);
s.open();
if(r){var t=s.getSelectables()[0];

if(t){s.setSelectedButton(t);
}}}},_onMenuChange:function(e){var u=this.getMenu();

if(u.isVisible()){this.addState(l);
}else{this.removeState(l);
}},_onMouseDown:function(e){qx.ui.form.Button.prototype._onMouseDown.call(this,e);
var v=this.getMenu();

if(v){if(!v.isVisible()){this.open();
}else{v.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){qx.ui.form.Button.prototype._onMouseUp.call(this,e);
e.stopPropagation();
},_onMouseOver:function(e){this.addState(k);
},_onMouseOut:function(e){this.removeState(k);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case g:this.removeState(b);
this.addState(l);
var w=this.getMenu();

if(w){if(!w.isVisible()){this.open();
}else{w.exclude();
}}e.stopPropagation();
}},_onKeyUp:function(e){}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var f="menu-button",e="table-column-reset-button",d="separator",c="user-button",b="qx.ui.table.columnmenu.Button",a="menu";
qx.Class.define(b,{extend:qx.ui.form.MenuButton,implement:qx.ui.table.IColumnMenuButton,construct:function(){qx.ui.form.MenuButton.call(this);
this.__nW=new qx.ui.core.Blocker(this);
},members:{__nX:null,__nW:null,factory:function(g,h){switch(g){case a:var j=new qx.ui.menu.Menu();
this.setMenu(j);
return j;
case f:var m=new qx.ui.table.columnmenu.MenuItem(h.text);
m.setVisible(h.bVisible);
this.getMenu().add(m);
return m;
case c:var k=new qx.ui.menu.Button(h.text);
k.set({appearance:e});
return k;
case d:return new qx.ui.menu.Separator();
default:throw new Error("Unrecognized factory request: "+g);
}},getBlocker:function(){return this.__nW;
},empty:function(){var n=this.getMenu();
var o=n.getChildren();

for(var i=0,l=o.length;i<l;i++){o[0].destroy();
}}},destruct:function(){this.__nW.dispose();
}});
})();
(function(){var u="keypress",t="interval",s="keydown",r="mousedown",q="keyup",p="blur",o="Enter",n="__nY",m="__oa",l="Up",d="__ob",k="Escape",h="event.touch",c="qx.ui.menu.Manager",b="Left",g="Down",f="Right",j="singleton",a="Space";
qx.Class.define(c,{type:j,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__nY=[];
var v=document.body;
var w=qx.event.Registration;
w.addListener(window.document.documentElement,r,this._onMouseDown,this,true);
w.addListener(v,s,this._onKeyUpDown,this,true);
w.addListener(v,q,this._onKeyUpDown,this,true);
w.addListener(v,u,this._onKeyPress,this,true);
if(!qx.core.Environment.get(h)){qx.bom.Element.addListener(window,p,this.hideAll,this);
}this.__oa=new qx.event.Timer;
this.__oa.addListener(t,this._onOpenInterval,this);
this.__ob=new qx.event.Timer;
this.__ob.addListener(t,this._onCloseInterval,this);
},members:{__oc:null,__od:null,__oa:null,__ob:null,__nY:null,_getChild:function(x,y,z,A){var B=x.getChildren();
var length=B.length;
var C;

for(var i=y;i<length&&i>=0;i+=z){C=B[i];

if(C.isEnabled()&&!C.isAnonymous()){return C;
}}
if(A){i=i==length?0:length-1;

for(;i!=y;i+=z){C=B[i];

if(C.isEnabled()&&!C.isAnonymous()){return C;
}}}return null;
},_isInMenu:function(D){while(D){if(D instanceof qx.ui.menu.Menu){return true;
}D=D.getLayoutParent();
}return false;
},_getMenuButton:function(E){while(E){if(E instanceof qx.ui.menu.AbstractButton){return E;
}E=E.getLayoutParent();
}return null;
},add:function(F){var G=this.__nY;
G.push(F);
F.setZIndex(1e6+G.length);
},remove:function(H){var I=this.__nY;

if(I){qx.lang.Array.remove(I,H);
}},hideAll:function(){var J=this.__nY;

if(J){for(var i=J.length-1;i>=0;i--){J[i].exclude();
}}},getActiveMenu:function(){var K=this.__nY;
return K.length>0?K[K.length-1]:null;
},scheduleOpen:function(L){this.cancelClose(L);
if(L.isVisible()){if(this.__oc){this.cancelOpen(this.__oc);
}}else if(this.__oc!=L){this.__oc=L;
this.__oa.restartWith(L.getOpenInterval());
}},scheduleClose:function(M){this.cancelOpen(M);
if(!M.isVisible()){if(this.__od){this.cancelClose(this.__od);
}}else if(this.__od!=M){this.__od=M;
this.__ob.restartWith(M.getCloseInterval());
}},cancelOpen:function(N){if(this.__oc==N){this.__oa.stop();
this.__oc=null;
}},cancelClose:function(O){if(this.__od==O){this.__ob.stop();
this.__od=null;
}},_onOpenInterval:function(e){this.__oa.stop();
this.__oc.open();
this.__oc=null;
},_onCloseInterval:function(e){this.__ob.stop();
this.__od.exclude();
this.__od=null;
},_onMouseDown:function(e){var P=e.getTarget();
P=qx.ui.core.Widget.getWidgetByElement(P,true);
if(P==null){this.hideAll();
return;
}if(P.getMenu&&P.getMenu()&&P.getMenu().isVisible()){return;
}if(this.__nY.length>0&&!this._isInMenu(P)){this.hideAll();
}},__oe:{"Enter":1,"Space":1},__of:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var Q=this.getActiveMenu();

if(!Q){return;
}var R=e.getKeyIdentifier();

if(this.__of[R]||(this.__oe[R]&&Q.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var S=this.getActiveMenu();

if(!S){return;
}var T=e.getKeyIdentifier();
var V=this.__of[T];
var U=this.__oe[T];

if(V){switch(T){case l:this._onKeyPressUp(S);
break;
case g:this._onKeyPressDown(S);
break;
case b:this._onKeyPressLeft(S);
break;
case f:this._onKeyPressRight(S);
break;
case k:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(U){var W=S.getSelectedButton();

if(W){switch(T){case o:this._onKeyPressEnter(S,W,e);
break;
case a:this._onKeyPressSpace(S,W,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(X){var Y=X.getSelectedButton();
var ba=X.getChildren();
var bc=Y?X.indexOf(Y)-1:ba.length-1;
var bb=this._getChild(X,bc,-1,true);
if(bb){X.setSelectedButton(bb);
}else{X.resetSelectedButton();
}},_onKeyPressDown:function(bd){var be=bd.getSelectedButton();
var bg=be?bd.indexOf(be)+1:0;
var bf=this._getChild(bd,bg,1,true);
if(bf){bd.setSelectedButton(bf);
}else{bd.resetSelectedButton();
}},_onKeyPressLeft:function(bh){var bm=bh.getOpener();

if(!bm){return;
}if(bm instanceof qx.ui.menu.AbstractButton){var bj=bm.getLayoutParent();
bj.resetOpenedButton();
bj.setSelectedButton(bm);
}else if(bm instanceof qx.ui.menubar.Button){var bl=bm.getMenuBar().getMenuButtons();
var bi=bl.indexOf(bm);
if(bi===-1){return;
}var bn=null;
var length=bl.length;

for(var i=1;i<=length;i++){var bk=bl[(bi-i+length)%length];

if(bk.isEnabled()){bn=bk;
break;
}}
if(bn&&bn!=bm){bn.open(true);
}}},_onKeyPressRight:function(bo){var bq=bo.getSelectedButton();
if(bq){var bp=bq.getMenu();

if(bp){bo.setOpenedButton(bq);
var bw=this._getChild(bp,0,1);

if(bw){bp.setSelectedButton(bw);
}return;
}}else if(!bo.getOpenedButton()){var bw=this._getChild(bo,0,1);

if(bw){bo.setSelectedButton(bw);

if(bw.getMenu()){bo.setOpenedButton(bw);
}return;
}}var bu=bo.getOpener();
if(bu instanceof qx.ui.menu.Button&&bq){while(bu){bu=bu.getLayoutParent();

if(bu instanceof qx.ui.menu.Menu){bu=bu.getOpener();

if(bu instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!bu){return;
}}if(bu instanceof qx.ui.menubar.Button){var bt=bu.getMenuBar().getMenuButtons();
var br=bt.indexOf(bu);
if(br===-1){return;
}var bv=null;
var length=bt.length;

for(var i=1;i<=length;i++){var bs=bt[(br+i)%length];

if(bs.isEnabled()){bv=bs;
break;
}}
if(bv&&bv!=bu){bv.open(true);
}}},_onKeyPressEnter:function(bx,by,e){if(by.hasListener(u)){var bz=e.clone();
bz.setBubbles(false);
bz.setTarget(by);
by.dispatchEvent(bz);
}this.hideAll();
},_onKeyPressSpace:function(bA,bB,e){if(bB.hasListener(u)){var bC=e.clone();
bC.setBubbles(false);
bC.setTarget(bB);
bB.dispatchEvent(bC);
}}},destruct:function(){var bE=qx.event.Registration;
var bD=document.body;
bE.removeListener(window.document.documentElement,r,this._onMouseDown,this,true);
bE.removeListener(bD,s,this._onKeyUpDown,this,true);
bE.removeListener(bD,q,this._onKeyUpDown,this,true);
bE.removeListener(bD,u,this._onKeyPress,this,true);
this._disposeObjects(m,d);
this._disposeArray(n);
}});
})();
(function(){var l="slidebar",k="Integer",j="resize",h="qx.ui.core.Widget",g="selected",f="visible",d="Boolean",c="mouseout",b="excluded",a="menu",A="_applySelectedButton",z="_applySpacingY",y="_blocker",x="_applyCloseInterval",w="_applyBlockerColor",v="_applyIconColumnWidth",u="mouseover",t="_applyArrowColumnWidth",s="qx.ui.menu.Menu",r="Color",p="Number",q="_applyOpenInterval",n="_applySpacingX",o="_applyBlockerOpacity",m="_applyOpenedButton";
qx.Class.define(s,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.Layout);
var B=this.getApplicationRoot();
B.add(this);
this.addListener(u,this._onMouseOver);
this.addListener(c,this._onMouseOut);
this.addListener(j,this._onResize,this);
B.addListener(j,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(B);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:a},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:b},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:k,apply:n,init:0,themeable:true},spacingY:{check:k,apply:z,init:0,themeable:true},iconColumnWidth:{check:k,init:0,themeable:true,apply:v},arrowColumnWidth:{check:k,init:0,themeable:true,apply:t},blockerColor:{check:r,init:null,nullable:true,apply:w,themeable:true},blockerOpacity:{check:p,init:1,apply:o,themeable:true},selectedButton:{check:h,nullable:true,apply:A},openedButton:{check:h,nullable:true,apply:m},opener:{check:h,nullable:true},openInterval:{check:k,themeable:true,init:250,apply:q},closeInterval:{check:k,themeable:true,init:250,apply:x},blockBackground:{check:d,themeable:true,init:false}},members:{__og:null,__oh:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__oj();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__oj();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(C){this.placeToPoint(C);
this.__oj();
this.show();
this._placementTarget=C;
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getMenuLayout().getColumnSizes();
},getSelectables:function(){var D=[];
var E=this.getChildren();

for(var i=0;i<E.length;i++){if(E[i].isEnabled()){D.push(E[i]);
}}return D;
},_applyIconColumnWidth:function(F,G){this._getMenuLayout().setIconColumnWidth(F);
},_applyArrowColumnWidth:function(H,I){this._getMenuLayout().setArrowColumnWidth(H);
},_applySpacingX:function(J,K){this._getMenuLayout().setColumnSpacing(J);
},_applySpacingY:function(L,M){this._getMenuLayout().setSpacing(L);
},_applyVisibility:function(N,O){qx.ui.core.Widget.prototype._applyVisibility.call(this,N,O);
var P=qx.ui.menu.Manager.getInstance();

if(N===f){P.add(this);
var Q=this.getParentMenu();

if(Q){Q.setOpenedButton(this.getOpener());
}}else if(O===f){P.remove(this);
var Q=this.getParentMenu();

if(Q&&Q.getOpenedButton()==this.getOpener()){Q.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}this.__oi();
},__oi:function(){if(this.isVisible()){if(this.getBlockBackground()){var R=this.getZIndex();
this._blocker.blockContent(R-1);
}}else{if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}}},getParentMenu:function(){var S=this.getOpener();

if(!S||!(S instanceof qx.ui.menu.AbstractButton)){return null;
}
if(S&&S.getContextMenu()===this){return null;
}
while(S&&!(S instanceof qx.ui.menu.Menu)){S=S.getLayoutParent();
}return S;
},_applySelectedButton:function(T,U){if(U){U.removeState(g);
}
if(T){T.addState(g);
}},_applyOpenedButton:function(V,W){if(W){W.getMenu().exclude();
}
if(V){V.getMenu().open();
}},_applyBlockerColor:function(X,Y){this._blocker.setColor(X);
},_applyBlockerOpacity:function(ba,bb){this._blocker.setOpacity(ba);
},getChildrenContainer:function(){return this.getChildControl(l,true)||this;
},_createChildControlImpl:function(bc,bd){var be;

switch(bc){case l:var be=new qx.ui.menu.MenuSlideBar();
var bg=this._getLayout();
this._setLayout(new qx.ui.layout.Grow());
var bf=be.getLayout();
be.setLayout(bg);
bf.dispose();
var bh=qx.lang.Array.clone(this.getChildren());

for(var i=0;i<bh.length;i++){be.add(bh[i]);
}this.removeListener(j,this._onResize,this);
be.getChildrenContainer().addListener(j,this._onResize,this);
this._add(be);
break;
}return be||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bc);
},_getMenuLayout:function(){if(this.hasChildControl(l)){return this.getChildControl(l).getChildrenContainer().getLayout();
}else{return this._getLayout();
}},_getMenuBounds:function(){if(this.hasChildControl(l)){return this.getChildControl(l).getChildrenContainer().getBounds();
}else{return this.getBounds();
}},_computePlacementSize:function(){return this._getMenuBounds();
},__oj:function(){var bj=this._getMenuBounds();

if(!bj){this.addListenerOnce(j,this.__oj,this);
return;
}var bi=this.getLayoutParent().getBounds().height;
var top=this.getLayoutProperties().top;
var bk=this.getLayoutProperties().left;
if(top<0){this._assertSlideBar(function(){this.setHeight(bj.height+top);
this.moveTo(bk,0);
});
}else if(top+bj.height>bi){this._assertSlideBar(function(){this.setHeight(bi-top);
});
}else{this.setHeight(null);
}},_assertSlideBar:function(bl){if(this.hasChildControl(l)){return bl.call(this);
}this.__oh=bl;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(l);

if(this.__oh){this.__oh.call(this);
delete this.__oh;
}},_onResize:function(){if(this.isVisible()){var bm=this._placementTarget;

if(!bm){return;
}else if(bm instanceof qx.ui.core.Widget){this.placeToWidget(bm);
}else if(bm.top!==undefined){this.placeToPoint(bm);
}else{throw new Error("Unknown target: "+bm);
}this.__oj();
}},_onMouseOver:function(e){var bo=qx.ui.menu.Manager.getInstance();
bo.cancelClose(this);
var bp=e.getTarget();

if(bp.isEnabled()&&bp instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(bp);
var bn=bp.getMenu&&bp.getMenu();

if(bn){bn.setOpener(bp);
bo.scheduleOpen(bn);
this.__og=bn;
}else{var bq=this.getOpenedButton();

if(bq){bo.scheduleClose(bq.getMenu());
}
if(this.__og){bo.cancelOpen(this.__og);
this.__og=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var br=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var bs=this.getOpenedButton();
bs?this.setSelectedButton(bs):this.resetSelectedButton();
if(bs){br.cancelClose(bs.getMenu());
}if(this.__og){br.cancelOpen(this.__og);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(j,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(y);
}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__ok:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__ok=[0,0,0,0];
var m=this.getColumnSpacing();
var k=0;
var f=0;
for(var i=0,l=q.length;i<l;i++){o=q[i];

if(o.isAnonymous()){continue;
}g=o.getChildrenSizes();

for(var n=0;n<g.length;n++){if(e!=null&&n==e&&g[e+1]==0){k=Math.max(k,g[n]);
}else{h[n]=Math.max(h[n],g[n]);
}}var d=q[i].getInsets();
f=Math.max(f,d.left+d.right);
}if(e!=null&&h[e]+m+h[e+1]<k){h[e]=k-h[e+1]-m;
}if(k==0){j=m*2;
}else{j=m*3;
}if(h[0]==0){h[0]=this.getIconColumnWidth();
}if(h[3]==0){h[3]=this.getArrowColumnWidth();
}var p=qx.ui.layout.VBox.prototype._computeSizeHint.call(this).height;
return {minHeight:p,height:p,width:qx.lang.Array.sum(h)+f+j};
},getColumnSizes:function(){return this.__ok||null;
}},destruct:function(){this.__ok=null;
}});
})();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});
})();
(function(){var s="icon",r="label",q="arrow",p="shortcut",o="changeLocale",n="qx.dynlocale",m="submenu",l="String",k="changeCommand",j="qx.ui.menu.Menu",c="qx.ui.menu.AbstractButton",i="keypress",g="",b="_applyIcon",a="mouseup",f="abstract",d="_applyLabel",h="_applyMenu";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],type:f,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(a,this._onMouseUp);
this.addListener(i,this._onKeyPress);
this.addListener(k,this._onChangeCommand,this);
},properties:{blockToolTip:{refine:true,init:true},label:{check:l,apply:d,nullable:true},menu:{check:j,apply:h,nullable:true,dereference:true},icon:{check:l,apply:b,themeable:true,nullable:true}},members:{_createChildControlImpl:function(t,u){var v;

switch(t){case s:v=new qx.ui.basic.Image;
v.setAnonymous(true);
this._add(v,{column:0});
break;
case r:v=new qx.ui.basic.Label;
v.setAnonymous(true);
this._add(v,{column:1});
break;
case p:v=new qx.ui.basic.Label;
v.setAnonymous(true);
this._add(v,{column:2});
break;
case q:v=new qx.ui.basic.Image;
v.setAnonymous(true);
this._add(v,{column:3});
break;
}return v||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,t);
},_forwardStates:{selected:1},getChildrenSizes:function(){var w=0,x=0,y=0,C=0;

if(this._isChildControlVisible(s)){var D=this.getChildControl(s);
w=D.getMarginLeft()+D.getSizeHint().width+D.getMarginRight();
}
if(this._isChildControlVisible(r)){var A=this.getChildControl(r);
x=A.getMarginLeft()+A.getSizeHint().width+A.getMarginRight();
}
if(this._isChildControlVisible(p)){var z=this.getChildControl(p);
y=z.getMarginLeft()+z.getSizeHint().width+z.getMarginRight();
}
if(this._isChildControlVisible(q)){var B=this.getChildControl(q);
C=B.getMarginLeft()+B.getSizeHint().width+B.getMarginRight();
}return [w,x,y,C];
},_onMouseUp:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var G=e.getData();
if(G==null){return;
}
if(qx.core.Environment.get(n)){var E=e.getOldData();

if(!E){qx.locale.Manager.getInstance().addListener(o,this._onChangeLocale,this);
}
if(!G){qx.locale.Manager.getInstance().removeListener(o,this._onChangeLocale,this);
}}var F=G!=null?G.toString():g;
this.getChildControl(p).setValue(F);
},_onChangeLocale:qx.core.Environment.select(n,{"true":function(e){var H=this.getCommand();

if(H!=null){this.getChildControl(p).setValue(H.toString());
}},"false":null}),_applyIcon:function(I,J){if(I){this._showChildControl(s).setSource(I);
}else{this._excludeChildControl(s);
}},_applyLabel:function(K,L){if(K){this._showChildControl(r).setValue(K);
}else{this._excludeChildControl(r);
}},_applyMenu:function(M,N){if(N){N.resetOpener();
N.removeState(m);
}
if(M){this._showChildControl(q);
M.setOpener(this);
M.addState(m);
}else{this._excludeChildControl(q);
}}},destruct:function(){this.removeListener(k,this._onChangeCommand,this);

if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}
if(qx.core.Environment.get(n)){qx.locale.Manager.getInstance().removeListener(o,this._onChangeLocale,this);
}}});
})();
(function(){var c="middle",b="qx.ui.menu.ButtonLayout",a="left";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(d,e){var q=this._getLayoutChildren();
var p;
var g;
var h=[];

for(var i=0,l=q.length;i<l;i++){p=q[i];
g=p.getLayoutProperties().column;
h[g]=p;
}var o=this.__ol(q[0]);
var r=o.getColumnSizes();
var k=o.getSpacingX();
var j=qx.lang.Array.sum(r)+k*(r.length-1);

if(j<d){r[1]+=d-j;
}var s=0,top=0;
var m=qx.ui.layout.Util;

for(var i=0,l=r.length;i<l;i++){p=h[i];

if(p){var f=p.getSizeHint();
var top=m.computeVerticalAlignOffset(p.getAlignY()||c,f.height,e,0,0);
var n=m.computeHorizontalAlignOffset(p.getAlignX()||a,f.width,r[i],p.getMarginLeft(),p.getMarginRight());
p.renderLayout(s+n,top,f.width,f.height);
}s+=r[i]+k;
}},__ol:function(t){while(!(t instanceof qx.ui.menu.Menu)){t=t.getLayoutParent();
}return t;
},_computeSizeHint:function(){var w=this._getLayoutChildren();
var v=0;
var x=0;

for(var i=0,l=w.length;i<l;i++){var u=w[i].getSizeHint();
x+=u.width;
v=Math.max(v,u.height);
}return {width:x,height:v};
}}});
})();
(function(){var s="horizontal",r="scrollpane",q="vertical",p="button-backward",o="button-forward",n="content",m="execute",l="qx.ui.container.SlideBar",k="scrollY",j="engine.name",c="removeChildWidget",i="scrollX",g="_applyOrientation",b="mousewheel",a="gecko",f="Integer",d="slidebar",h="update";
qx.Class.define(l,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(t){qx.ui.core.Widget.call(this);
var u=this.getChildControl(r);
this._add(u,{flex:1});

if(t!=null){this.setOrientation(t);
}else{this.initOrientation();
}this.addListener(b,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:d},orientation:{check:[s,q],init:s,apply:g},scrollStep:{check:f,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(n);
},_createChildControlImpl:function(v,w){var x;

switch(v){case o:x=new qx.ui.form.RepeatButton;
x.addListener(m,this._onExecuteForward,this);
x.setFocusable(false);
this._addAt(x,2);
break;
case p:x=new qx.ui.form.RepeatButton;
x.addListener(m,this._onExecuteBackward,this);
x.setFocusable(false);
this._addAt(x,0);
break;
case n:x=new qx.ui.container.Composite();
if(qx.core.Environment.get(j)==a){x.addListener(c,this._onRemoveChild,this);
}this.getChildControl(r).add(x);
break;
case r:x=new qx.ui.core.scroll.ScrollPane();
x.addListener(h,this._onResize,this);
x.addListener(i,this._onScroll,this);
x.addListener(k,this._onScroll,this);
break;
}return x||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,v);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(y){var z=this.getChildControl(r);

if(this.getOrientation()===s){z.scrollByX(y);
}else{z.scrollByY(y);
}},scrollTo:function(A){var B=this.getChildControl(r);

if(this.getOrientation()===s){B.scrollToX(A);
}else{B.scrollToY(A);
}},_applyOrientation:function(C,D){var G=[this.getLayout(),this._getLayout()];
var F=this.getChildControl(o);
var E=this.getChildControl(p);
if(D==q){F.removeState(q);
E.removeState(q);
F.addState(s);
E.addState(s);
}else if(D==s){F.removeState(s);
E.removeState(s);
F.addState(q);
E.addState(q);
}
if(C==s){this._setLayout(new qx.ui.layout.HBox());
this.setLayout(new qx.ui.layout.HBox());
}else{this._setLayout(new qx.ui.layout.VBox());
this.setLayout(new qx.ui.layout.VBox());
}
if(G[0]){G[0].dispose();
}
if(G[1]){G[1].dispose();
}},_onMouseWheel:function(e){this.scrollBy(e.getWheelDelta()*this.getScrollStep());
e.stop();
},_onScroll:function(){this._updateArrowsEnabled();
},_onResize:function(e){var content=this.getChildControl(r).getChildren()[0];

if(!content){return;
}var H=this.getInnerSize();
var J=content.getBounds();
var I=(this.getOrientation()===s)?J.width>H.width:J.height>H.height;

if(I){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){this.scrollBy(this.getChildControl(r).getScrollX());
},this,50);
},_updateArrowsEnabled:function(){var L=this.getChildControl(r);

if(this.getOrientation()===s){var K=L.getScrollX();
var M=L.getScrollMaxX();
}else{var K=L.getScrollY();
var M=L.getScrollMaxY();
}this.getChildControl(p).setEnabled(K>0);
this.getChildControl(o).setEnabled(K<M);
},_showArrows:function(){this._showChildControl(o);
this._showChildControl(p);
},_hideArrows:function(){this._excludeChildControl(o);
this._excludeChildControl(p);
this.scrollTo(0);
}}});
})();
(function(){var f="execute",e="button-backward",d="vertical",c="button-forward",b="menu-slidebar",a="qx.ui.menu.MenuSlideBar";
qx.Class.define(a,{extend:qx.ui.container.SlideBar,construct:function(){qx.ui.container.SlideBar.call(this,d);
},properties:{appearance:{refine:true,init:b}},members:{_createChildControlImpl:function(g,h){var i;

switch(g){case c:i=new qx.ui.form.HoverButton();
i.addListener(f,this._onExecuteForward,this);
this._addAt(i,2);
break;
case e:i=new qx.ui.form.HoverButton();
i.addListener(f,this._onExecuteBackward,this);
this._addAt(i,0);
break;
}return i||qx.ui.container.SlideBar.prototype._createChildControlImpl.call(this,g);
}}});
})();
(function(){var n="pressed",m="abandoned",l="Integer",k="hovered",j="qx.event.type.Event",i="Enter",h="Space",g="press",f="qx.ui.form.RepeatButton",d="release",a="interval",c="__om",b="execute";
qx.Class.define(f,{extend:qx.ui.form.Button,construct:function(o,p){qx.ui.form.Button.call(this,o,p);
this.__om=new qx.event.AcceleratingTimer();
this.__om.addListener(a,this._onInterval,this);
},events:{"execute":j,"press":j,"release":j},properties:{interval:{check:l,init:100},firstInterval:{check:l,init:500},minTimer:{check:l,init:20},timerDecrease:{check:l,init:2}},members:{__on:null,__om:null,press:function(){if(this.isEnabled()){if(!this.hasState(n)){this.__oo();
}this.removeState(m);
this.addState(n);
}},release:function(q){if(!this.isEnabled()){return;
}if(this.hasState(n)){if(!this.__on){this.execute();
}}this.removeState(n);
this.removeState(m);
this.__op();
},_applyEnabled:function(r,s){qx.ui.form.Button.prototype._applyEnabled.call(this,r,s);

if(!r){this.removeState(n);
this.removeState(m);
this.__op();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
this.__om.start();
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
this.__om.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__oo();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(m)){this.addState(k);

if(this.hasState(n)&&!this.__on){this.execute();
}}this.__op();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case i:case h:if(this.hasState(n)){if(!this.__on){this.execute();
}this.removeState(n);
this.removeState(m);
e.stopPropagation();
this.__op();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.addState(n);
e.stopPropagation();
this.__oo();
}},_onInterval:function(e){this.__on=true;
this.fireEvent(b);
},__oo:function(){this.fireEvent(g);
this.__on=false;
this.__om.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(m);
this.addState(n);
},__op:function(){this.fireEvent(d);
this.__om.stop();
this.removeState(m);
this.removeState(n);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var e="Integer",d="interval",c="__oq",b="qx.event.type.Event",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__oq=new qx.event.Timer(this.getInterval());
this.__oq.addListener(d,this._onInterval,this);
},events:{"interval":b},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__oq:null,__or:null,start:function(){this.__oq.setInterval(this.getFirstInterval());
this.__oq.start();
},stop:function(){this.__oq.stop();
this.__or=null;
},_onInterval:function(){this.__oq.stop();

if(this.__or==null){this.__or=this.getInterval();
}this.__or=Math.max(this.getMinimum(),this.__or-this.getDecrease());
this.__oq.setInterval(this.__or);
this.__oq.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var m="resize",l="scrollY",k="update",j="scrollX",i="_applyScrollX",h="_applyScrollY",g="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",f="appear",d="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",c="qx.event.type.Event",a="qx.ui.core.scroll.ScrollPane",b="scroll";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(m,this._onUpdate);
var n=this.getContentElement();
n.addListener(b,this._onScroll,this);
n.addListener(f,this._onAppear,this);
},events:{update:c},properties:{scrollX:{check:g,apply:i,event:j,init:0},scrollY:{check:d,apply:h,event:l,init:0}},members:{add:function(o){var p=this._getChildren()[0];

if(p){this._remove(p);
p.removeListener(m,this._onUpdate,this);
}
if(o){this._add(o);
o.addListener(m,this._onUpdate,this);
}},remove:function(q){if(q){this._remove(q);
q.removeListener(m,this._onUpdate,this);
}},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(k);
},_onScroll:function(e){var r=this.getContentElement();
this.setScrollX(r.getScrollX());
this.setScrollY(r.getScrollY());
},_onAppear:function(e){var v=this.getContentElement();
var s=this.getScrollX();
var t=v.getScrollX();

if(s!=t){v.scrollToX(s);
}var w=this.getScrollY();
var u=v.getScrollY();

if(w!=u){v.scrollToY(w);
}},getItemTop:function(z){var top=0;

do{top+=z.getBounds().top;
z=z.getLayoutParent();
}while(z&&z!==this);
return top;
},getItemBottom:function(A){return this.getItemTop(A)+A.getBounds().height;
},getItemLeft:function(B){var C=0;
var parent;

do{C+=B.getBounds().left;
parent=B.getLayoutParent();

if(parent){C+=parent.getInsets().left;
}B=parent;
}while(B&&B!==this);
return C;
},getItemRight:function(D){return this.getItemLeft(D)+D.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var F=this.getInnerSize();
var E=this.getScrollSize();

if(F&&E){return Math.max(0,E.width-F.width);
}return 0;
},getScrollMaxY:function(){var H=this.getInnerSize();
var G=this.getScrollSize();

if(H&&G){return Math.max(0,G.height-H.height);
}return 0;
},scrollToX:function(I){var J=this.getScrollMaxX();

if(I<0){I=0;
}else if(I>J){I=J;
}this.setScrollX(I);
},scrollToY:function(K){var L=this.getScrollMaxY();

if(K<0){K=0;
}else if(K>L){K=L;
}this.setScrollY(K);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(M){this.getContentElement().scrollToX(M);
},_applyScrollY:function(N){this.getContentElement().scrollToY(N);
}}});
})();
(function(){var i="Integer",h="hovered",g="hover-button",f="interval",d="mouseover",c="mouseout",b="qx.ui.form.HoverButton",a="__os";
qx.Class.define(b,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(j,k){qx.ui.basic.Atom.call(this,j,k);
this.addListener(d,this._onMouseOver,this);
this.addListener(c,this._onMouseOut,this);
this.__os=new qx.event.AcceleratingTimer();
this.__os.addListener(f,this._onInterval,this);
},properties:{appearance:{refine:true,init:g},interval:{check:i,init:80},firstInterval:{check:i,init:200},minTimer:{check:i,init:20},timerDecrease:{check:i,init:2}},members:{__os:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__os.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(h);
},_onMouseOut:function(e){this.__os.stop();
this.removeState(h);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__os.stop();
}}},destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var h="pressed",g="hovered",f="inherit",d="qx.ui.menubar.Button",c="keydown",b="menubar-button",a="keyup";
qx.Class.define(d,{extend:qx.ui.form.MenuButton,construct:function(i,j,k){qx.ui.form.MenuButton.call(this,i,j,k);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:b},show:{refine:true,init:f},focusable:{refine:true,init:false}},members:{getMenuBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},open:function(l){qx.ui.form.MenuButton.prototype.open.call(this,l);
var menubar=this.getMenuBar();
menubar._setAllowMenuOpenHover(true);
},_onMenuChange:function(e){var m=this.getMenu();
var menubar=this.getMenuBar();

if(m.isVisible()){this.addState(h);
if(menubar){menubar.setOpenMenu(m);
}}else{this.removeState(h);
if(menubar&&menubar.getOpenMenu()==m){menubar.resetOpenMenu();
menubar._setAllowMenuOpenHover(false);
}}},_onMouseUp:function(e){qx.ui.form.MenuButton.prototype._onMouseUp.call(this,e);
var n=this.getMenu();

if(n&&n.isVisible()&&!this.hasState(h)){this.addState(h);
}},_onMouseOver:function(e){this.addState(g);
if(this.getMenu()){var menubar=this.getMenuBar();

if(menubar._isAllowMenuOpenHover()){qx.ui.menu.Manager.getInstance().hideAll();
menubar._setAllowMenuOpenHover(true);
if(this.isEnabled()){this.open();
}}}}}});
})();
(function(){var w="visible",v="excluded",u="resize",t="qx.event.type.Data",s="both",r="qx.ui.menu.Menu",q="_applySpacing",p="showItem",o="Boolean",n="icon",d="label",m="qx.ui.core.Widget",h="_applyOverflowIndicator",c="_applyOverflowHandling",b="changeShow",g="Integer",f="qx.ui.toolbar.ToolBar",j="hideItem",a="toolbar",k="changeOpenMenu";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__ot=[];
this.__ou=[];
},properties:{appearance:{refine:true,init:a},openMenu:{check:r,event:k,nullable:true},show:{init:s,check:[s,d,n],inheritable:true,event:b},spacing:{nullable:true,check:g,themeable:true,apply:q},overflowIndicator:{check:m,nullable:true,apply:h},overflowHandling:{init:false,check:o,apply:c}},events:{"hideItem":t,"showItem":t},members:{__ot:null,__ou:null,_computeSizeHint:function(){var z=qx.ui.core.Widget.prototype._computeSizeHint.call(this);

if(true&&this.getOverflowHandling()){var x=0;
var y=this.getOverflowIndicator();

if(y){x=y.getSizeHint().width+this.getSpacing();
}z.minWidth=x;
}return z;
},_onResize:function(e){this._recalculateOverflow(e.getData().width);
},_recalculateOverflow:function(A,B){if(!this.getOverflowHandling()){return;
}B=B||this.getSizeHint().width;
var C=this.getOverflowIndicator();
var I=0;

if(C){I=C.getSizeHint().width;
}
if(A==undefined&&this.getBounds()!=null){A=this.getBounds().width;
}if(A==undefined){return ;
}if(A<B){do{var J=this._getNextToHide();
if(!J){return;
}var L=J.getMarginLeft()+J.getMarginRight();
L=Math.max(L,this.getSpacing());
var G=J.getSizeHint().width+L;
this.__ow(J);
B-=G;
if(C&&C.getVisibility()!=w){C.setVisibility(w);
B+=I;
var E=C.getMarginLeft()+C.getMarginRight();
B+=Math.max(E,this.getSpacing());
}}while(B>A);
}else if(this.__ot.length>0){do{var M=this.__ot[0];
if(M){var L=M.getMarginLeft()+M.getMarginRight();
L=Math.max(L,this.getSpacing());
if(M.getDecoratorElement()==null){M.syncAppearance();
M.invalidateLayoutCache();
}var F=M.getSizeHint().width;
var K=false;
if(this.__ot.length==1&&I>0){var D=L-this.getSpacing();
var H=B-I+F+D;
K=A>H;
}if(A>B+F+L||K){this.__ov(M);
B+=F;
if(C&&this.__ot.length==0){C.setVisibility(v);
}}else{return;
}}}while(A>=B&&this.__ot.length>0);
}},__ov:function(N){N.setVisibility(w);
this.__ot.shift();
this.fireDataEvent(p,N);
},__ow:function(O){if(!O){return;
}this.__ot.unshift(O);
O.setVisibility(v);
this.fireDataEvent(j,O);
},_getNextToHide:function(){for(var i=this.__ou.length-1;i>=0;i--){var P=this.__ou[i];
if(P&&P.getVisibility&&P.getVisibility()==w){return P;
}}var Q=this._getChildren();

for(var i=Q.length-1;i>=0;i--){var R=Q[i];
if(R==this.getOverflowIndicator()){continue;
}if(R.getVisibility&&R.getVisibility()==w){return R;
}}},setRemovePriority:function(S,T,U){if(!U&&this.__ou[T]!=undefined){throw new Error("Priority already in use!");
}this.__ou[T]=S;
},_applyOverflowHandling:function(V,W){this.invalidateLayoutCache();
var parent=this.getLayoutParent();

if(parent){parent.invalidateLayoutCache();
}var Y=this.getBounds();

if(Y&&Y.width){this._recalculateOverflow(Y.width);
}if(V){this.addListener(u,this._onResize,this);
}else{this.removeListener(u,this._onResize,this);
var X=this.getOverflowIndicator();

if(X){X.setVisibility(v);
}for(var i=0;i<this.__ot.length;i++){this.__ot[i].setVisibility(w);
}this.__ot=[];
}},_applyOverflowIndicator:function(ba,bb){if(bb){this._remove(bb);
}
if(ba){if(this._indexOf(ba)==-1){throw new Error("Widget must be child of the toolbar.");
}ba.setVisibility(v);
}},__ox:false,_setAllowMenuOpenHover:function(bc){this.__ox=bc;
},_isAllowMenuOpenHover:function(){return this.__ox;
},_applySpacing:function(bd,be){var bf=this._getLayout();
bd==null?bf.resetSpacing():bf.setSpacing(bd);
},_add:function(bg,bh){qx.ui.core.Widget.prototype._add.call(this,bg,bh);
var bi=this.getSizeHint().width+bg.getSizeHint().width+2*this.getSpacing();
this._recalculateOverflow(null,bi);
},_addAt:function(bj,bk,bl){qx.ui.core.Widget.prototype._addAt.call(this,bj,bk,bl);
var bm=this.getSizeHint().width+bj.getSizeHint().width+2*this.getSpacing();
this._recalculateOverflow(null,bm);
},_addBefore:function(bn,bo,bp){qx.ui.core.Widget.prototype._addBefore.call(this,bn,bo,bp);
var bq=this.getSizeHint().width+bn.getSizeHint().width+2*this.getSpacing();
this._recalculateOverflow(null,bq);
},_addAfter:function(br,bs,bt){qx.ui.core.Widget.prototype._addAfter.call(this,br,bs,bt);
var bu=this.getSizeHint().width+br.getSizeHint().width+2*this.getSpacing();
this._recalculateOverflow(null,bu);
},_remove:function(bv){qx.ui.core.Widget.prototype._remove.call(this,bv);
var bw=this.getSizeHint().width-bv.getSizeHint().width-2*this.getSpacing();
this._recalculateOverflow(null,bw);
},_removeAt:function(bx){var bz=this._getChildren()[bx];
qx.ui.core.Widget.prototype._removeAt.call(this,bx);
var by=this.getSizeHint().width-bz.getSizeHint().width-2*this.getSpacing();
this._recalculateOverflow(null,by);
},_removeAll:function(){qx.ui.core.Widget.prototype._removeAll.call(this);
this._recalculateOverflow(null,0);
},addSpacer:function(){var bA=new qx.ui.core.Spacer;
this._add(bA,{flex:1});
return bA;
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var bC=this.getChildren();
var bB=[];
var bD;

for(var i=0,l=bC.length;i<l;i++){bD=bC[i];

if(bD instanceof qx.ui.menubar.Button){bB.push(bD);
}else if(bD instanceof qx.ui.toolbar.Part){bB.push.apply(bB,bD.getMenuButtons());
}}return bB;
}},destruct:function(){if(this.hasListener(u)){this.removeListener(u,this._onResize,this);
}}});
})();
(function(){var a="qx.ui.core.Spacer";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(b,c){qx.ui.core.LayoutItem.call(this);
this.setWidth(b!=null?b:0);
this.setHeight(c!=null?c:0);
},members:{checkAppearanceNeeds:function(){},addChildrenToQueue:function(d){},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
}}});
})();
(function(){var b="toolbar-separator",a="qx.ui.toolbar.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true},width:{refine:true,init:0},height:{refine:true,init:0}}});
})();
(function(){var p="middle",o="left",n="right",m="container",k="handle",j="both",h="Integer",g="qx.ui.toolbar.Part",f="icon",e="label",b="syncAppearance",d="changeShow",c="_applySpacing",a="toolbar/part";
qx.Class.define(g,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(k);
},properties:{appearance:{refine:true,init:a},show:{init:j,check:[j,e,f],inheritable:true,event:d},spacing:{nullable:true,check:h,themeable:true,apply:c}},members:{_createChildControlImpl:function(q,r){var s;

switch(q){case k:s=new qx.ui.basic.Image();
s.setAlignY(p);
this._add(s);
break;
case m:s=new qx.ui.toolbar.PartContainer();
s.addListener(b,this.__oy,this);
this._add(s);
break;
}return s||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,q);
},getChildrenContainer:function(){return this.getChildControl(m);
},_applySpacing:function(t,u){var v=this.getChildControl(m).getLayout();
t==null?v.resetSpacing():v.setSpacing(t);
},__oy:function(){var w=this.getChildrenContainer().getChildren();

for(var i=0;i<w.length;i++){if(i==0&&i!=w.length-1){w[i].addState(o);
w[i].removeState(n);
w[i].removeState(p);
}else if(i==w.length-1&&i!=0){w[i].addState(n);
w[i].removeState(o);
w[i].removeState(p);
}else if(i==0&&i==w.length-1){w[i].removeState(o);
w[i].removeState(p);
w[i].removeState(n);
}else{w[i].addState(p);
w[i].removeState(n);
w[i].removeState(o);
}}},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var y=this.getChildren();
var x=[];
var z;

for(var i=0,l=y.length;i<l;i++){z=y[i];

if(z instanceof qx.ui.menubar.Button){x.push(z);
}}return x;
}}});
})();
(function(){var f="both",e="toolbar/part/container",d="icon",c="changeShow",b="qx.ui.toolbar.PartContainer",a="label";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
this._setLayout(new qx.ui.layout.HBox);
},properties:{appearance:{refine:true,init:e},show:{init:f,check:[f,a,d],inheritable:true,event:c}}});
})();
(function(){var b="qx.ui.menu.Button",a="menu-button";
qx.Class.define(b,{extend:qx.ui.menu.AbstractButton,construct:function(c,d,f,g){qx.ui.menu.AbstractButton.call(this);
if(c!=null){this.setLabel(c);
}
if(d!=null){this.setIcon(d);
}
if(f!=null){this.setCommand(f);
}
if(g!=null){this.setMenu(g);
}},properties:{appearance:{refine:true,init:a}},members:{_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
if(this.getMenu()){return;
}}else{if(this.getContextMenu()){return;
}}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var h="checked",g="menu-checkbox",f="Boolean",d="_applyValue",c="changeValue",b="qx.ui.menu.CheckBox",a="execute";
qx.Class.define(b,{extend:qx.ui.menu.AbstractButton,implement:[qx.ui.form.IBooleanForm],construct:function(i,j){qx.ui.menu.AbstractButton.call(this);
if(i!=null){if(i.translate){this.setLabel(i.translate());
}else{this.setLabel(i);
}}
if(j!=null){this.setMenu(j);
}this.addListener(a,this._onExecute,this);
},properties:{appearance:{refine:true,init:g},value:{check:f,init:false,apply:d,event:c,nullable:true}},members:{_applyValue:function(k,l){k?this.addState(h):this.removeState(h);
},_onExecute:function(e){this.toggleValue();
},_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
}else{if(this.getContextMenu()){return;
}}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var b="qx.ui.table.IColumnMenuItem",a="qx.event.type.Data";
qx.Interface.define(b,{properties:{visible:{}},events:{changeVisible:a}});
})();
(function(){var f="changeVisible",d="qx.ui.table.columnmenu.MenuItem",c="_applyVisible",b="Boolean",a="changeValue";
qx.Class.define(d,{extend:qx.ui.menu.CheckBox,implement:qx.ui.table.IColumnMenuItem,properties:{visible:{check:b,init:true,apply:c,event:f}},construct:function(g){qx.ui.menu.CheckBox.call(this,g);
this.addListener(a,function(e){this.bInListener=true;
this.setVisible(e.getData());
this.bInListener=false;
});
},members:{__oz:false,_applyVisible:function(h,i){if(!this.bInListener){this.setValue(h);
}}}});
})();
(function(){var b="qx.ui.table.selection.Model",a="qx.ui.table.selection.Manager";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
},properties:{selectionModel:{check:b}},members:{__oA:null,handleMouseDown:function(c,d){if(d.isLeftPressed()){var e=this.getSelectionModel();

if(!e.isSelectedIndex(c)){this._handleSelectEvent(c,d);
this.__oA=true;
}else{this.__oA=false;
}}else if(d.isRightPressed()&&d.getModifiers()==0){var e=this.getSelectionModel();

if(!e.isSelectedIndex(c)){e.setSelectionInterval(c,c);
}}},handleMouseUp:function(f,g){if(g.isLeftPressed()&&!this.__oA){this._handleSelectEvent(f,g);
}},handleClick:function(h,i){},handleSelectKeyDown:function(j,k){this._handleSelectEvent(j,k);
},handleMoveKeyDown:function(l,m){var o=this.getSelectionModel();

switch(m.getModifiers()){case 0:o.setSelectionInterval(l,l);
break;
case qx.event.type.Dom.SHIFT_MASK:var n=o.getAnchorSelectionIndex();

if(n==-1){o.setSelectionInterval(l,l);
}else{o.setSelectionInterval(n,l);
}break;
}},_handleSelectEvent:function(p,q){var t=this.getSelectionModel();
var r=t.getLeadSelectionIndex();
var s=t.getAnchorSelectionIndex();

if(q.isShiftPressed()){if(p!=r||t.isSelectionEmpty()){if(s==-1){s=p;
}
if(q.isCtrlOrCommandPressed()){t.addSelectionInterval(s,p);
}else{t.setSelectionInterval(s,p);
}}}else if(q.isCtrlOrCommandPressed()){if(t.isSelectedIndex(p)){t.removeSelectionInterval(p,p);
}else{t.addSelectionInterval(p,p);
}}else{t.setSelectionInterval(p,p);
}}}});
})();
(function(){var n="]",m="..",l="changeSelection",k=" [",h='ie',g="browser.version",f="qx.event.type.Event",d="Ranges:",c="qx.ui.table.selection.Model",b="browser.name",a="_applySelectionMode";
qx.Class.define(c,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__oB=[];
this.__oC=-1;
this.__oD=-1;
this.hasBatchModeRefCount=0;
this.__oE=false;
},events:{"changeSelection":f},statics:{NO_SELECTION:1,SINGLE_SELECTION:2,SINGLE_INTERVAL_SELECTION:3,MULTIPLE_INTERVAL_SELECTION:4,MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},properties:{selectionMode:{init:2,check:[1,2,3,4,5],apply:a}},members:{__oE:null,__oC:null,__oD:null,__oB:null,_applySelectionMode:function(o){this.resetSelection();
},setBatchMode:function(p){if(p){this.hasBatchModeRefCount+=1;
}else{if(this.hasBatchModeRefCount==0){throw new Error("Try to turn off batch mode althoug it was not turned on.");
}this.hasBatchModeRefCount-=1;

if(this.__oE){this.__oE=false;
this._fireChangeSelection();
}}return this.hasBatchMode();
},hasBatchMode:function(){return this.hasBatchModeRefCount>0;
},getAnchorSelectionIndex:function(){return this.__oC;
},_setAnchorSelectionIndex:function(q){this.__oC=q;
},getLeadSelectionIndex:function(){return this.__oD;
},_setLeadSelectionIndex:function(r){this.__oD=r;
},_getSelectedRangeArr:function(){return this.__oB;
},resetSelection:function(){if(!this.isSelectionEmpty()){this._resetSelection();
this._fireChangeSelection();
}},isSelectionEmpty:function(){return this.__oB.length==0;
},getSelectedCount:function(){var t=0;

for(var i=0;i<this.__oB.length;i++){var s=this.__oB[i];
t+=s.maxIndex-s.minIndex+1;
}return t;
},isSelectedIndex:function(u){for(var i=0;i<this.__oB.length;i++){var v=this.__oB[i];

if(u>=v.minIndex&&u<=v.maxIndex){return true;
}}return false;
},getSelectedRanges:function(){var w=[];

for(var i=0;i<this.__oB.length;i++){w.push({minIndex:this.__oB[i].minIndex,maxIndex:this.__oB[i].maxIndex});
}return w;
},iterateSelection:function(x,y){for(var i=0;i<this.__oB.length;i++){for(var j=this.__oB[i].minIndex;j<=this.__oB[i].maxIndex;j++){x.call(y,j);
}}},setSelectionInterval:function(z,A){var B=this.self(arguments);

switch(this.getSelectionMode()){case B.NO_SELECTION:return;
case B.SINGLE_SELECTION:if(this.isSelectedIndex(A)){return;
}z=A;
break;
case B.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this.setBatchMode(true);

try{for(var i=z;i<=A;i++){if(!this.isSelectedIndex(i)){this._addSelectionInterval(i,i);
}else{this.removeSelectionInterval(i,i);
}}}catch(e){if(qx.core.Environment.get(b)==h&&qx.core.Environment.get(g)<=7){this.setBatchMode(false);
}throw e;
}finally{this.setBatchMode(false);
}this._fireChangeSelection();
return;
}this._resetSelection();
this._addSelectionInterval(z,A);
this._fireChangeSelection();
},addSelectionInterval:function(C,D){var E=qx.ui.table.selection.Model;

switch(this.getSelectionMode()){case E.NO_SELECTION:return;
case E.MULTIPLE_INTERVAL_SELECTION:case E.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this._addSelectionInterval(C,D);
this._fireChangeSelection();
break;
default:this.setSelectionInterval(C,D);
break;
}},removeSelectionInterval:function(F,G){this.__oC=F;
this.__oD=G;
var H=Math.min(F,G);
var J=Math.max(F,G);
for(var i=0;i<this.__oB.length;i++){var L=this.__oB[i];

if(L.minIndex>J){break;
}else if(L.maxIndex>=H){var M=(L.minIndex>=H)&&(L.minIndex<=J);
var K=(L.maxIndex>=H)&&(L.maxIndex<=J);

if(M&&K){this.__oB.splice(i,1);
i--;
}else if(M){L.minIndex=J+1;
}else if(K){L.maxIndex=H-1;
}else{var I={minIndex:J+1,maxIndex:L.maxIndex};
this.__oB.splice(i+1,0,I);
L.maxIndex=H-1;
break;
}}}this._fireChangeSelection();
},_resetSelection:function(){this.__oB=[];
this.__oC=-1;
this.__oD=-1;
},_addSelectionInterval:function(N,O){this.__oC=N;
this.__oD=O;
var P=Math.min(N,O);
var R=Math.max(N,O);
var Q=0;

for(;Q<this.__oB.length;Q++){var S=this.__oB[Q];

if(S.minIndex>P){break;
}}this.__oB.splice(Q,0,{minIndex:P,maxIndex:R});
var T=this.__oB[0];

for(var i=1;i<this.__oB.length;i++){var S=this.__oB[i];

if(T.maxIndex+1>=S.minIndex){T.maxIndex=Math.max(T.maxIndex,S.maxIndex);
this.__oB.splice(i,1);
i--;
}else{T=S;
}}},_dumpRanges:function(){var U=d;

for(var i=0;i<this.__oB.length;i++){var V=this.__oB[i];
U+=k+V.minIndex+m+V.maxIndex+n;
}this.debug(U);
},_fireChangeSelection:function(){if(this.hasBatchMode()){this.__oE=true;
}else{this.fireEvent(l);
}}},destruct:function(){this.__oB=null;
}});
})();
(function(){var a="qx.ui.table.ICellRenderer";
qx.Interface.define(a,{members:{createDataCellHtml:function(b,c){return true;
}}});
})();
(function(){var j="",i="px;",h=".qooxdoo-table-cell {",g="qooxdoo-table-cell",f="content",e='</div>',d="nowrap",c="default",b="}",a="width:",J=".qooxdoo-table-cell-right { text-align:right } ",I="css.boxmodel",H="0px 6px",G='<div class="',F="0px",E="height:",D="1px solid ",C=".qooxdoo-table-cell-bold { font-weight:bold } ",B="String",A="} ",q='>',r="mshtml",o='" ',p="ellipsis",m="content-box",n='left:',k="qx.ui.table.cellrenderer.Abstract",l="engine.name",s='" style="',t="abstract",v="none",u="hidden",x="table-column-line",w='px;',z=".qooxdoo-table-cell-italic { font-style:italic} ",y="absolute";
qx.Class.define(k,{type:t,implement:qx.ui.table.ICellRenderer,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
var K=qx.ui.table.cellrenderer.Abstract;

if(!K.__oF){var M=qx.theme.manager.Color.getInstance();
K.__oF=this.self(arguments);
var L=h+
qx.bom.element.Style.compile({position:y,top:F,overflow:u,whiteSpace:d,borderRight:D+M.resolve(x),padding:H,cursor:c,textOverflow:p,userSelect:v})+A+J+z+C;

if(!(qx.core.Environment.get(l)==r)){L+=h+qx.bom.element.BoxSizing.compile(m)+b;
}K.__oF.stylesheet=qx.bom.Stylesheet.createElement(L);
}},properties:{defaultCellStyle:{init:null,check:B,nullable:true}},members:{_insetX:6+6+1,_insetY:0,_getCellClass:function(N){return g;
},_getCellStyle:function(O){return O.style||j;
},_getCellAttributes:function(P){return j;
},_getContentHtml:function(Q){return Q.value||j;
},_getCellSizeStyle:function(R,S,T,U){var V=j;

if(qx.core.Environment.get(I)==f){R-=T;
S-=U;
}V+=a+Math.max(R,0)+i;
V+=E+Math.max(S,0)+i;
return V;
},createDataCellHtml:function(W,X){X.push(G,this._getCellClass(W),s,n,W.styleLeft,w,this._getCellSizeStyle(W.styleWidth,W.styleHeight,this._insetX,this._insetY),this._getCellStyle(W),o,this._getCellAttributes(W),q+this._getContentHtml(W),e);
}}});
})();
(function(){var h="",g="number",f="Boolean",e="qx.ui.table.cellrenderer.Default",d=" qooxdoo-table-cell-bold",c=" qooxdoo-table-cell-right",b=" qooxdoo-table-cell-italic",a="string";
qx.Class.define(e,{extend:qx.ui.table.cellrenderer.Abstract,statics:{STYLEFLAG_ALIGN_RIGHT:1,STYLEFLAG_BOLD:2,STYLEFLAG_ITALIC:4,_numberFormat:null},properties:{useAutoAlign:{check:f,init:true}},members:{_getStyleFlags:function(i){if(this.getUseAutoAlign()){if(typeof i.value==g){return qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT;
}}return 0;
},_getCellClass:function(j){var k=qx.ui.table.cellrenderer.Abstract.prototype._getCellClass.call(this,j);

if(!k){return h;
}var l=this._getStyleFlags(j);

if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT){k+=c;
}
if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_BOLD){k+=d;
}
if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_ITALIC){k+=b;
}return k;
},_getContentHtml:function(m){return qx.bom.String.escape(this._formatValue(m));
},_formatValue:function(n){var p=n.value;
var o;

if(p==null){return h;
}
if(typeof p==a){return p;
}else if(typeof p==g){if(!qx.ui.table.cellrenderer.Default._numberFormat){qx.ui.table.cellrenderer.Default._numberFormat=new qx.util.format.NumberFormat();
qx.ui.table.cellrenderer.Default._numberFormat.setMaximumFractionDigits(2);
}var o=qx.ui.table.cellrenderer.Default._numberFormat.format(p);
}else if(p instanceof Date){o=qx.util.format.DateFormat.getDateInstance().format(p);
}else{o=p;
}return o;
}}});
})();
(function(){var a="qx.ui.table.ICellEditorFactory";
qx.Interface.define(a,{members:{createCellEditor:function(b){return true;
},getCellEditorValue:function(c){return true;
}}});
})();
(function(){var f="",e="Function",d="abstract",c="number",b="appear",a="qx.ui.table.celleditor.AbstractField";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.ui.table.ICellEditorFactory,type:d,properties:{validationFunction:{check:e,nullable:true,init:null}},members:{_createEditor:function(){throw new Error("Abstract method call!");
},createCellEditor:function(g){var h=this._createEditor();
h.originalValue=g.value;

if(g.value===null||g.value===undefined){g.value=f;
}h.setValue(f+g.value);
h.addListener(b,function(){h.selectAllText();
});
return h;
},getCellEditorValue:function(i){var k=i.getValue();
var j=this.getValidationFunction();

if(j){k=j(k,i.originalValue);
}
if(typeof i.originalValue==c){k=parseFloat(k);
}return k;
}}});
})();
(function(){var c="number",b="qx.ui.table.celleditor.TextField",a="table-editor-textfield";
qx.Class.define(b,{extend:qx.ui.table.celleditor.AbstractField,members:{getCellEditorValue:function(d){var f=d.getValue();
var e=this.getValidationFunction();

if(e){f=e(f,d.originalValue);
}
if(typeof d.originalValue==c){if(f!=null){f=parseFloat(f);
}}return f;
},_createEditor:function(){var g=new qx.ui.form.TextField();
g.setAppearance(a);
return g;
}}});
})();
(function(){var a="qx.ui.table.IHeaderRenderer";
qx.Interface.define(a,{members:{createHeaderCell:function(b){return true;
},updateHeaderCell:function(c,d){return true;
}}});
})();
(function(){var b="qx.ui.table.headerrenderer.Default",a="String";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.ui.table.IHeaderRenderer,statics:{STATE_SORTED:"sorted",STATE_SORTED_ASCENDING:"sortedAscending"},properties:{toolTip:{check:a,init:null,nullable:true}},members:{createHeaderCell:function(c){var d=new qx.ui.table.headerrenderer.HeaderCell();
this.updateHeaderCell(c,d);
return d;
},updateHeaderCell:function(e,f){var g=qx.ui.table.headerrenderer.Default;
if(e.name&&e.name.translate){f.setLabel(e.name.translate());
}else{f.setLabel(e.name);
}var h=f.getToolTip();

if(this.getToolTip()!=null){if(h==null){h=new qx.ui.tooltip.ToolTip(this.getToolTip());
f.setToolTip(h);
qx.util.DisposeUtil.disposeTriggeredBy(h,f);
}else{h.setLabel(this.getToolTip());
}}e.sorted?f.addState(g.STATE_SORTED):f.removeState(g.STATE_SORTED);
e.sortedAscending?f.addState(g.STATE_SORTED_ASCENDING):f.removeState(g.STATE_SORTED_ASCENDING);
}}});
})();
(function(){var k="qx.event.type.Data",j="visibilityChanged",h="orderChanged",g="visibilityChangedPre",f="__oN",e="widthChanged",d="qx.ui.table.columnmodel.Basic",c="__oL",b="__oM",a="headerCellRendererChanged";
qx.Class.define(d,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__oG=[];
this.__oH=[];
},events:{"widthChanged":k,"visibilityChangedPre":k,"visibilityChanged":k,"orderChanged":k,"headerCellRendererChanged":k},statics:{DEFAULT_WIDTH:100,DEFAULT_HEADER_RENDERER:qx.ui.table.headerrenderer.Default,DEFAULT_DATA_RENDERER:qx.ui.table.cellrenderer.Default,DEFAULT_EDITOR_FACTORY:qx.ui.table.celleditor.TextField},members:{__oI:null,__oJ:null,__oH:null,__oG:null,__oK:null,__oL:null,__oM:null,__oN:null,init:function(l,m){this.__oK=[];
var q=qx.ui.table.columnmodel.Basic.DEFAULT_WIDTH;
var r=this.__oL||(this.__oL=new qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER());
var o=this.__oM||(this.__oM=new qx.ui.table.columnmodel.Basic.DEFAULT_DATA_RENDERER());
var n=this.__oN||(this.__oN=new qx.ui.table.columnmodel.Basic.DEFAULT_EDITOR_FACTORY());
this.__oG=[];
this.__oH=[];
var t;
if(m){t=m.getInitiallyHiddenColumns();
}t=t||[];

for(var u=0;u<l;u++){this.__oK[u]={width:q,headerRenderer:r,dataRenderer:o,editorFactory:n};
this.__oG[u]=u;
this.__oH[u]=u;
}this.__oJ=null;
this.__oI=true;

for(var s=0;s<t.length;s++){this.setColumnVisible(t[s],false);
}this.__oI=false;

for(u=0;u<l;u++){var p={col:u,visible:this.isColumnVisible(u)};
this.fireDataEvent(g,p);
this.fireDataEvent(j,p);
}},getVisibleColumns:function(){return this.__oH!=null?this.__oH:[];
},setColumnWidth:function(v,w,y){var A=this.__oK[v].width;

if(A!=w){this.__oK[v].width=w;
var z={col:v,newWidth:w,oldWidth:A,isMouseAction:y||false};
this.fireDataEvent(e,z);
}},getColumnWidth:function(B){return this.__oK[B].width;
},setHeaderCellRenderer:function(C,D){var E=this.__oK[C].headerRenderer;

if(E!==this.__oL){E.dispose();
}this.__oK[C].headerRenderer=D;
this.fireDataEvent(a,{col:C});
},getHeaderCellRenderer:function(F){return this.__oK[F].headerRenderer;
},setDataCellRenderer:function(G,H){this.__oK[G].dataRenderer=H;
var I=this.__oK[G].dataRenderer;

if(I!==this.__oM){return I;
}return null;
},getDataCellRenderer:function(J){return this.__oK[J].dataRenderer;
},setCellEditorFactory:function(K,L){var M=this.__oK[K].headerRenderer;

if(M!==this.__oN){M.dispose();
}this.__oK[K].editorFactory=L;
},getCellEditorFactory:function(N){return this.__oK[N].editorFactory;
},_getColToXPosMap:function(){if(this.__oJ==null){this.__oJ={};

for(var Q=0;Q<this.__oG.length;Q++){var P=this.__oG[Q];
this.__oJ[P]={overX:Q};
}
for(var O=0;O<this.__oH.length;O++){var P=this.__oH[O];
this.__oJ[P].visX=O;
}}return this.__oJ;
},getVisibleColumnCount:function(){return this.__oH!=null?this.__oH.length:0;
},getVisibleColumnAtX:function(R){return this.__oH[R];
},getVisibleX:function(S){return this._getColToXPosMap()[S].visX;
},getOverallColumnCount:function(){return this.__oG.length;
},getOverallColumnAtX:function(T){return this.__oG[T];
},getOverallX:function(U){return this._getColToXPosMap()[U].overX;
},isColumnVisible:function(V){return (this._getColToXPosMap()[V].visX!=null);
},setColumnVisible:function(W,X){if(X!=this.isColumnVisible(W)){if(X){var be=this._getColToXPosMap();
var bb=be[W].overX;

if(bb==null){throw new Error("Showing column failed: "+W+". The column is not added to this TablePaneModel.");
}var bc;

for(var x=bb+1;x<this.__oG.length;x++){var bd=this.__oG[x];
var Y=be[bd].visX;

if(Y!=null){bc=Y;
break;
}}if(bc==null){bc=this.__oH.length;
}this.__oH.splice(bc,0,W);
}else{var ba=this.getVisibleX(W);
this.__oH.splice(ba,1);
}this.__oJ=null;
if(!this.__oI){var bf={col:W,visible:X};
this.fireDataEvent(g,bf);
this.fireDataEvent(j,bf);
}}},moveColumn:function(bg,bh){this.__oI=true;
var bk=this.__oG[bg];
var bi=this.isColumnVisible(bk);

if(bi){this.setColumnVisible(bk,false);
}this.__oG.splice(bg,1);
this.__oG.splice(bh,0,bk);
this.__oJ=null;

if(bi){this.setColumnVisible(bk,true);
}this.__oI=false;
var bj={col:bk,fromOverXPos:bg,toOverXPos:bh};
this.fireDataEvent(h,bj);
},setColumnsOrder:function(bl){if(bl.length==this.__oG.length){this.__oI=true;
var bo=new Array(bl.length);

for(var bm=0;bm<this.__oG.length;bm++){var bn=this.isColumnVisible(bm);
bo[bm]=bn;

if(bn){this.setColumnVisible(bm,false);
}}this.__oG=qx.lang.Array.clone(bl);
this.__oJ=null;
for(var bm=0;bm<this.__oG.length;bm++){if(bo[bm]){this.setColumnVisible(bm,true);
}}this.__oI=false;
this.fireDataEvent(h);
}else{throw new Error("setColumnsOrder: Invalid number of column positions given, expected "+this.__oG.length+", got "+bl.length);
}}},destruct:function(){for(var i=0;i<this.__oK.length;i++){this.__oK[i].headerRenderer.dispose();
this.__oK[i].dataRenderer.dispose();
this.__oK[i].editorFactory.dispose();
}this.__oG=this.__oH=this.__oK=this.__oJ=null;
this._disposeObjects(c,b,f);
}});
})();
(function(){var p='',o='"',m=':',l=']',h='null',g=': ',f='object',e='function',d=',',b='\n',ba='\\u',Y=',\n',X='0000',W='string',V="Cannot stringify a recursive object.",U='0',T='-',S='}',R='String',Q='Boolean',x='\\\\',y='\\f',u='\\t',w='{\n',s='[]',t="qx.lang.JsonImpl",q='Z',r='\\n',z='Object',A='{}',H='@',F='.',K='(',J='Array',M='T',L='\\r',C='{',P='JSON.parse',O=' ',N='[',B='Number',D=')',E='[\n',G='\\"',I='\\b';
qx.Class.define(t,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__oO:null,__oP:null,__oQ:null,__oR:null,stringify:function(bb,bc,bd){this.__oO=p;
this.__oP=p;
this.__oR=[];

if(qx.lang.Type.isNumber(bd)){var bd=Math.min(10,Math.floor(bd));

for(var i=0;i<bd;i+=1){this.__oP+=O;
}}else if(qx.lang.Type.isString(bd)){if(bd.length>10){bd=bd.slice(0,10);
}this.__oP=bd;
}if(bc&&(qx.lang.Type.isFunction(bc)||qx.lang.Type.isArray(bc))){this.__oQ=bc;
}else{this.__oQ=null;
}return this.__oS(p,{'':bb});
},__oS:function(be,bf){var bi=this.__oO,bg,bj=bf[be];
if(bj&&qx.lang.Type.isFunction(bj.toJSON)){bj=bj.toJSON(be);
}else if(qx.lang.Type.isDate(bj)){bj=this.dateToJSON(bj);
}if(typeof this.__oQ===e){bj=this.__oQ.call(bf,be,bj);
}
if(bj===null){return h;
}
if(bj===undefined){return undefined;
}switch(qx.lang.Type.getClass(bj)){case R:return this.__oT(bj);
case B:return isFinite(bj)?String(bj):h;
case Q:return String(bj);
case J:this.__oO+=this.__oP;
bg=[];

if(this.__oR.indexOf(bj)!==-1){throw new TypeError(V);
}this.__oR.push(bj);
var length=bj.length;

for(var i=0;i<length;i+=1){bg[i]=this.__oS(i,bj)||h;
}this.__oR.pop();
if(bg.length===0){var bh=s;
}else if(this.__oO){bh=E+this.__oO+bg.join(Y+this.__oO)+b+bi+l;
}else{bh=N+bg.join(d)+l;
}this.__oO=bi;
return bh;
case z:this.__oO+=this.__oP;
bg=[];

if(this.__oR.indexOf(bj)!==-1){throw new TypeError(V);
}this.__oR.push(bj);
if(this.__oQ&&typeof this.__oQ===f){var length=this.__oQ.length;

for(var i=0;i<length;i+=1){var k=this.__oQ[i];

if(typeof k===W){var v=this.__oS(k,bj);

if(v){bg.push(this.__oT(k)+(this.__oO?g:m)+v);
}}}}else{for(var k in bj){if(Object.hasOwnProperty.call(bj,k)){var v=this.__oS(k,bj);

if(v){bg.push(this.__oT(k)+(this.__oO?g:m)+v);
}}}}this.__oR.pop();
if(bg.length===0){var bh=A;
}else if(this.__oO){bh=w+this.__oO+bg.join(Y+this.__oO)+b+bi+S;
}else{bh=C+bg.join(d)+S;
}this.__oO=bi;
return bh;
}},dateToJSON:function(bk){var bl=function(n){return n<10?U+n:n;
};
var bm=function(n){var bn=bl(n);
return n<100?U+bn:bn;
};
return isFinite(bk.valueOf())?bk.getUTCFullYear()+T+bl(bk.getUTCMonth()+1)+T+bl(bk.getUTCDate())+M+bl(bk.getUTCHours())+m+bl(bk.getUTCMinutes())+m+bl(bk.getUTCSeconds())+F+bm(bk.getUTCMilliseconds())+q:null;
},__oT:function(bo){var bp={'\b':I,'\t':u,'\n':r,'\f':y,'\r':L,'"':G,'\\':x};
var bq=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bq.lastIndex=0;

if(bq.test(bo)){return o+
bo.replace(bq,function(a){var c=bp[a];
return typeof c===W?c:ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
})+o;
}else{return o+bo+o;
}},parse:function(br,bs){var bt=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bt.lastIndex=0;
if(bt.test(br)){br=br.replace(bt,function(a){return ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
});
}if(/^[\],:{}\s]*$/.test(br.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,H).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,l).replace(/(?:^|:|,)(?:\s*\[)+/g,p))){var j=eval(K+br+D);
return typeof bs===e?this.__oU({'':j},p,bs):j;
}throw new SyntaxError(P);
},__oU:function(bu,bv,bw){var bx=bu[bv];

if(bx&&typeof bx===f){for(var k in bx){if(Object.hasOwnProperty.call(bx,k)){var v=this.__oU(bx,k,bw);

if(v!==undefined){bx[k]=v;
}else{delete bx[k];
}}}}return bw.call(bu,bv,bx);
}}});
})();
(function(){var p="",o="!",n="'!",m="'",k="Expected '",j="' (rgb(",h=",",g=")), but found value '",f="Event (",d="Expected value to be the CSS color '",bz="' but found ",by="]",bx=", ",bw="The value '",bv=" != ",bu="qx.core.Object",bt="Expected value to be an array but found ",bs=") was fired.",br="Expected value to be an integer >= 0 but found ",bq="' to be not equal with '",w="' to '",x="Expected object '",u="Called assertTrue with '",v="Expected value to be a map but found ",s="The function did not raise an exception!",t="Expected value to be undefined but found ",q="Expected value to be a DOM element but found  '",r="Expected value to be a regular expression but found ",E="' to implement the interface '",F="Expected value to be null but found ",S="Invalid argument 'type'",O="Called assert with 'false'",bb="Assertion error! ",V="null",bm="' but found '",bg="' must must be a key of the map '",J="The String '",bp="Expected value to be a string but found ",bo="Expected value not to be undefined but found undefined!",bn="qx.util.ColorUtil",I=": ",L="The raised exception does not have the expected type! ",N=") not fired.",Q="qx.core.Assert",T="Expected value to be typeof object but found ",W="' (identical) but found '",bd="' must have any of the values defined in the array '",bi="Expected value to be a number but found ",y="Called assertFalse with '",z="qx.ui.core.Widget",K="Expected value to be a qooxdoo object but found ",ba="' arguments.",Y="Expected value '%1' to be in the range '%2'..'%3'!",X="Array[",bf="' does not match the regular expression '",be="' to be not identical with '",U="Expected [",bc="' arguments but found '",a="', which cannot be converted to a CSS color!",bh="qx.core.AssertionError",A="Expected value to be a boolean but found ",B="Expected value not to be null but found null!",P="))!",b="Expected value to be a qooxdoo widget but found ",c="Expected value to be typeof '",H="Expected value to be typeof function but found ",C="Expected value to be an integer but found ",D="Called fail().",G="The parameter 're' must be a string or a regular expression.",R="Expected value to be a number >= 0 but found ",bk="Expected value to be instanceof '",bj="], but found [",M="Wrong number of arguments given. Expected '",bl="object";
qx.Class.define(Q,{statics:{__oV:true,__oW:function(bA,bB){var bF=p;

for(var i=1,l=arguments.length;i<l;i++){bF=bF+this.__oX(arguments[i]);
}var bE=p;

if(bF){bE=bA+I+bF;
}else{bE=bA;
}var bD=bb+bE;

if(this.__oV){qx.Bootstrap.error(bD);
}
if(qx.Class.isDefined(bh)){var bC=new qx.core.AssertionError(bA,bF);

if(this.__oV){qx.Bootstrap.error("Stack trace: \n"+bC.getStackTrace());
}throw bC;
}else{throw new Error(bD);
}},__oX:function(bG){var bH;

if(bG===null){bH=V;
}else if(qx.lang.Type.isArray(bG)&&bG.length>10){bH=X+bG.length+by;
}else if((bG instanceof Object)&&(bG.toString==null)){bH=qx.lang.Json.stringify(bG,null,2);
}else{try{bH=bG.toString();
}catch(e){bH=p;
}}return bH;
},assert:function(bI,bJ){bI==true||this.__oW(bJ||p,O);
},fail:function(bK,bL){var bM=bL?p:D;
this.__oW(bK||p,bM);
},assertTrue:function(bN,bO){(bN===true)||this.__oW(bO||p,u,bN,m);
},assertFalse:function(bP,bQ){(bP===false)||this.__oW(bQ||p,y,bP,m);
},assertEquals:function(bR,bS,bT){bR==bS||this.__oW(bT||p,k,bR,bm,bS,n);
},assertNotEquals:function(bU,bV,bW){bU!=bV||this.__oW(bW||p,k,bU,bq,bV,n);
},assertIdentical:function(bX,bY,ca){bX===bY||this.__oW(ca||p,k,bX,W,bY,n);
},assertNotIdentical:function(cb,cc,cd){cb!==cc||this.__oW(cd||p,k,cb,be,cc,n);
},assertNotUndefined:function(ce,cf){ce!==undefined||this.__oW(cf||p,bo);
},assertUndefined:function(cg,ch){cg===undefined||this.__oW(ch||p,t,cg,o);
},assertNotNull:function(ci,cj){ci!==null||this.__oW(cj||p,B);
},assertNull:function(ck,cl){ck===null||this.__oW(cl||p,F,ck,o);
},assertJsonEquals:function(cm,cn,co){this.assertEquals(qx.lang.Json.stringify(cm),qx.lang.Json.stringify(cn),co);
},assertMatch:function(cp,cq,cr){this.assertString(cp);
this.assert(qx.lang.Type.isRegExp(cq)||qx.lang.Type.isString(cq),G);
cp.search(cq)>=0||this.__oW(cr||p,J,cp,bf,cq.toString(),n);
},assertArgumentsCount:function(cs,ct,cu,cv){var cw=cs.length;
(cw>=ct&&cw<=cu)||this.__oW(cv||p,M,ct,w,cu,bc,arguments.length,ba);
},assertEventFired:function(cx,event,cy,cz,cA){var cC=false;
var cB=function(e){if(cz){cz.call(cx,e);
}cC=true;
};
var cD;

try{cD=cx.addListener(event,cB,cx);
cy.call();
}catch(cE){throw cE;
}finally{try{cx.removeListenerById(cD);
}catch(cF){}}cC===true||this.__oW(cA||p,f,event,N);
},assertEventNotFired:function(cG,event,cH,cI){var cK=false;
var cJ=function(e){cK=true;
};
var cL=cG.addListener(event,cJ,cG);
cH.call();
cK===false||this.__oW(cI||p,f,event,bs);
cG.removeListenerById(cL);
},assertException:function(cM,cN,cO,cP){var cN=cN||Error;
var cQ;

try{this.__oV=false;
cM();
}catch(cR){cQ=cR;
}finally{this.__oV=true;
}
if(cQ==null){this.__oW(cP||p,s);
}cQ instanceof cN||this.__oW(cP||p,L,cN,bv,cQ);

if(cO){this.assertMatch(cQ.toString(),cO,cP);
}},assertInArray:function(cS,cT,cU){cT.indexOf(cS)!==-1||this.__oW(cU||p,bw,cS,bd,cT,m);
},assertArrayEquals:function(cV,cW,cX){this.assertArray(cV,cX);
this.assertArray(cW,cX);
cX=cX||U+cV.join(bx)+bj+cW.join(bx)+by;

if(cV.length!==cW.length){this.fail(cX,true);
}
for(var i=0;i<cV.length;i++){if(cV[i]!==cW[i]){this.fail(cX,true);
}}},assertKeyInMap:function(cY,da,db){da[cY]!==undefined||this.__oW(db||p,bw,cY,bg,da,m);
},assertFunction:function(dc,dd){qx.lang.Type.isFunction(dc)||this.__oW(dd||p,H,dc,o);
},assertString:function(de,df){qx.lang.Type.isString(de)||this.__oW(df||p,bp,de,o);
},assertBoolean:function(dg,dh){qx.lang.Type.isBoolean(dg)||this.__oW(dh||p,A,dg,o);
},assertNumber:function(di,dj){(qx.lang.Type.isNumber(di)&&isFinite(di))||this.__oW(dj||p,bi,di,o);
},assertPositiveNumber:function(dk,dl){(qx.lang.Type.isNumber(dk)&&isFinite(dk)&&dk>=0)||this.__oW(dl||p,R,dk,o);
},assertInteger:function(dm,dn){(qx.lang.Type.isNumber(dm)&&isFinite(dm)&&dm%1===0)||this.__oW(dn||p,C,dm,o);
},assertPositiveInteger:function(dp,dq){var dr=(qx.lang.Type.isNumber(dp)&&isFinite(dp)&&dp%1===0&&dp>=0);
dr||this.__oW(dq||p,br,dp,o);
},assertInRange:function(ds,dt,du,dv){(ds>=dt&&ds<=du)||this.__oW(dv||p,qx.lang.String.format(Y,[ds,dt,du]));
},assertObject:function(dw,dx){var dy=dw!==null&&(qx.lang.Type.isObject(dw)||typeof dw===bl);
dy||this.__oW(dx||p,T,(dw),o);
},assertArray:function(dz,dA){qx.lang.Type.isArray(dz)||this.__oW(dA||p,bt,dz,o);
},assertMap:function(dB,dC){qx.lang.Type.isObject(dB)||this.__oW(dC||p,v,dB,o);
},assertRegExp:function(dD,dE){qx.lang.Type.isRegExp(dD)||this.__oW(dE||p,r,dD,o);
},assertType:function(dF,dG,dH){this.assertString(dG,S);
typeof (dF)===dG||this.__oW(dH||p,c,dG,bz,dF,o);
},assertInstance:function(dI,dJ,dK){var dL=dJ.classname||dJ+p;
dI instanceof dJ||this.__oW(dK||p,bk,dL,bz,dI,o);
},assertInterface:function(dM,dN,dO){qx.Class.implementsInterface(dM,dN)||this.__oW(dO||p,x,dM,E,dN,n);
},assertCssColor:function(dP,dQ,dR){var dS=qx.Class.getByName(bn);

if(!dS){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var dU=dS.stringToRgb(dP);

try{var dT=dS.stringToRgb(dQ);
}catch(dW){this.__oW(dR||p,d,dP,j,dU.join(h),g,dQ,a);
}var dV=dU[0]==dT[0]&&dU[1]==dT[1]&&dU[2]==dT[2];
dV||this.__oW(dR||p,d,dU,j,dU.join(h),g,dQ,j,dT.join(h),P);
},assertElement:function(dX,dY){!!(dX&&dX.nodeType===1)||this.__oW(dY||p,q,dX,n);
},assertQxObject:function(ea,eb){this.__oY(ea,bu)||this.__oW(eb||p,K,ea,o);
},assertQxWidget:function(ec,ed){this.__oY(ec,z)||this.__oW(ed||p,b,ec,o);
},__oY:function(ee,ef){if(!ee){return false;
}var eg=ee.constructor;

while(eg){if(eg.classname===ef){return true;
}eg=eg.superclass;
}return false;
}}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:(qx.lang.Type.getClass(window.JSON)=="JSON"&&JSON.parse('{"x":1}').x===1)?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var g="",f="<br",e=" &nbsp;",d="<br>",c=" ",b="\n",a="qx.bom.String";
qx.Class.define(a,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(h){return qx.util.StringEscape.escape(h,qx.bom.String.FROM_CHARCODE);
},unescape:function(i){return qx.util.StringEscape.unescape(i,qx.bom.String.TO_CHARCODE);
},fromText:function(j){return qx.bom.String.escape(j).replace(/(  |\n)/g,function(k){var l={"  ":e,"\n":d};
return l[k]||k;
});
},toText:function(m){return qx.bom.String.unescape(m.replace(/\s+|<([^>])+>/gi,function(n){if(n.indexOf(f)===0){return b;
}else if(n.length>0&&n.replace(/^\s*/,g).replace(/\s*$/,g)==g){return c;
}else{return g;
}}));
}},defer:function(o){o.FROM_CHARCODE=qx.lang.Object.invert(o.TO_CHARCODE);
}});
})();
(function(){var g=";",f="&",e='X',d="",c='#',b="&#",a="qx.util.StringEscape";
qx.Class.define(a,{statics:{escape:function(h,j){var m,o=d;

for(var i=0,l=h.length;i<l;i++){var n=h.charAt(i);
var k=n.charCodeAt(0);

if(j[k]){m=f+j[k]+g;
}else{if(k>0x7F){m=b+k+g;
}else{m=n;
}}o+=m;
}return o;
},unescape:function(p,q){return p.replace(/&[#\w]+;/gi,function(r){var s=r;
var r=r.substring(1,r.length-1);
var t=q[r];

if(t){s=String.fromCharCode(t);
}else{if(r.charAt(0)==c){if(r.charAt(1).toUpperCase()==e){t=r.substring(2);
if(t.match(/^[0-9A-Fa-f]+$/gi)){s=String.fromCharCode(parseInt(t,16));
}}else{t=r.substring(1);
if(t.match(/^\d+$/gi)){s=String.fromCharCode(parseInt(t,10));
}}}}return s;
});
}}});
})();
(function(){var a="qx.util.format.IFormat";
qx.Interface.define(a,{members:{format:function(b){},parse:function(c){}}});
})();
(function(){var t="",s="Number",r="-",q="0",p="String",o="changeNumberFormat",n='(',m="g",l="Boolean",k="$",d="NaN",j='([0-9]{1,3}(?:',g='{0,1}[0-9]{3}){0,})',c='\\d+){0,1}',b="qx.util.format.NumberFormat",f="Infinity",e="^",h=".",a="-Infinity",i='([-+]){0,1}';
qx.Class.define(b,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(u){qx.core.Object.call(this);
this.__pa=u;
},statics:{getIntegerInstance:function(){var v=qx.util.format.NumberFormat;

if(v._integerInstance==null){v._integerInstance=new v();
v._integerInstance.setMaximumFractionDigits(0);
}return v._integerInstance;
},getInstance:function(){if(!this._instance){this._instance=new this;
}return this._instance;
}},properties:{minimumIntegerDigits:{check:s,init:0},maximumIntegerDigits:{check:s,nullable:true},minimumFractionDigits:{check:s,init:0},maximumFractionDigits:{check:s,nullable:true},groupingUsed:{check:l,init:true},prefix:{check:p,init:t,event:o},postfix:{check:p,init:t,event:o}},members:{__pa:null,format:function(w){switch(w){case Infinity:return f;
case -Infinity:return a;
case NaN:return d;
}var A=(w<0);

if(A){w=-w;
}
if(this.getMaximumFractionDigits()!=null){var H=Math.pow(10,this.getMaximumFractionDigits());
w=Math.round(w*H)/H;
}var G=String(Math.floor(w)).length;
var x=t+w;
var D=x.substring(0,G);

while(D.length<this.getMinimumIntegerDigits()){D=q+D;
}
if(this.getMaximumIntegerDigits()!=null&&D.length>this.getMaximumIntegerDigits()){D=D.substring(D.length-this.getMaximumIntegerDigits());
}var C=x.substring(G+1);

while(C.length<this.getMinimumFractionDigits()){C+=q;
}
if(this.getMaximumFractionDigits()!=null&&C.length>this.getMaximumFractionDigits()){C=C.substring(0,this.getMaximumFractionDigits());
}if(this.getGroupingUsed()){var z=D;
D=t;
var F;

for(F=z.length;F>3;F-=3){D=t+qx.locale.Number.getGroupSeparator(this.__pa)+z.substring(F-3,F)+D;
}D=z.substring(0,F)+D;
}var B=this.getPrefix()?this.getPrefix():t;
var y=this.getPostfix()?this.getPostfix():t;
var E=B+(A?r:t)+D;

if(C.length>0){E+=t+qx.locale.Number.getDecimalSeparator(this.__pa)+C;
}E+=y;
return E;
},parse:function(I){var N=qx.lang.String.escapeRegexpChars(qx.locale.Number.getGroupSeparator(this.__pa)+t);
var L=qx.lang.String.escapeRegexpChars(qx.locale.Number.getDecimalSeparator(this.__pa)+t);
var J=new RegExp(e+qx.lang.String.escapeRegexpChars(this.getPrefix())+i+j+N+g+n+L+c+qx.lang.String.escapeRegexpChars(this.getPostfix())+k);
var M=J.exec(I);

if(M==null){throw new Error("Number string '"+I+"' does not match the number format");
}var O=(M[1]==r);
var Q=M[2];
var P=M[3];
Q=Q.replace(new RegExp(N,m),t);
var K=(O?r:t)+Q;

if(P!=null&&P.length!=0){P=P.replace(new RegExp(L),t);
K+=h+P;
}return parseFloat(K);
}}});
})();
(function(){var d="cldr_number_decimal_separator",c="cldr_number_percent_format",b="qx.locale.Number",a="cldr_number_group_separator";
qx.Class.define(b,{statics:{getDecimalSeparator:function(e){return qx.locale.Manager.getInstance().localize(d,[],e);
},getGroupSeparator:function(f){return qx.locale.Manager.getInstance().localize(a,[],f);
},getPercentFormat:function(g){return qx.locale.Manager.getInstance().localize(c,[],g);
}}});
})();
(function(){var cB=")",cA="(",cz="|",cy="(\\d\\d?)",cx="format",cw="",cv="-",cu="abbreviated",ct="wide",cs="stand-alone",bC="narrow",bB="(\\d\\d*?)",bA="quarter",bz='A',by="default",bx="0",bw="literal",bv="wildcard",bu="'",bt="(\\d?)",cI="hour",cJ='Anno Domini',cG="+",cH='Q',cE="ms",cF="(\\d\\d?\\d?)",cC="dayOfYear",cD='AD',cK="(-*",cL="Y+",cb=":",ca='y',cd="quoted_literal",cc="weekOfYear",cf='a',ce="day",ch="GMT",cg="HH:mm:ss",bY='y+',bX="HHmmss",h="long",l='Y',m='z',n='BC',o="d",p="D",q='B',r='',s='Before Christ',t='Z',da=" ",cY="min",cX="sec",cW="\\d",de="+?",dd="eeeee",dc='W',db="qqqq",dg="h",df="KK",S='L',T="Z",Q="LL",R="EEEE",W="^",X='4th quarter',U="SSS",V="GGGGG",O="qqq",P='3rd quarter',B="K",A='q',D='G',C="a",x='2nd quarter',w="dd",z="qx.util.format.DateFormat",y="eee",v="ee",u="q",bd="QQQQ",be="ww",bf="H",bg='Y+',Y="(\\d\\d\\d?)",ba="(GMT[\\+\\-]\\d\\d:\\d\\d)",bb="Q",bc="c",bh="weekOfMonth",bi="ccc",L="EEEEE",K="EE",J="GGG",I='-',H="w",G="mm",F='h',E="S",N='s',M="QQQ",bj="G",bk="GG",bl="kk",bm="ss",bn="([\\+\\-]\\d\\d\\d\\d)",bo='H',bp='S',bq='1st quarter',br="MMMM",bs='c',bG='Q1',bF="eeee",bE="QQ",bD="LLLLL",bK="HH",bJ='k',bI="m",bH="DDD",bM='D',bL="LLLL",bT='e',bU='K',bR="L",bS="hh",bP="cccc",bQ="e",bN="W",bO="GGGG",bV='Q2',bW="MM",cl="y+",ck="ccccc",cn="E",cm="yyyy-MM-dd HH:mm:ss",cp="short",co='d',cr="unkown",cq="\\d?",cj="k",ci='m',cS='Q3',cT="DD",cU='M',cV="SS",cO="MMM",cP="s",cQ="M",cR='w',cM="EEE",cN="$",g="?",f='Q4',e="MMMMM",d='E',c="z",b="LLL",a="qq";
qx.Class.define(z,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(dh,di){qx.core.Object.call(this);

if(!di){this.__pb=qx.locale.Manager.getInstance().getLocale();
}else{this.__pb=di;
}
if(dh!=null){this.__pc=dh.toString();
}else{this.__pc=qx.locale.Date.getDateFormat(h,this.__pb)+da+qx.locale.Date.getDateTimeFormat(bX,cg,this.__pb);
}},statics:{getDateTimeInstance:function(){var dk=qx.util.format.DateFormat;
var dj=qx.locale.Date.getDateFormat(h)+da+qx.locale.Date.getDateTimeFormat(bX,cg);

if(dk._dateInstance==null||dk._dateInstance.__pc!=dj){dk._dateTimeInstance=new dk();
}return dk._dateTimeInstance;
},getDateInstance:function(){var dm=qx.util.format.DateFormat;
var dl=qx.locale.Date.getDateFormat(cp)+cw;

if(dm._dateInstance==null||dm._dateInstance.__pc!=dl){dm._dateInstance=new dm(dl);
}return dm._dateInstance;
},ASSUME_YEAR_2000_THRESHOLD:30,LOGGING_DATE_TIME__format:cm,AM_MARKER:"am",PM_MARKER:"pm"},members:{__pb:null,__pc:null,__pd:null,__pe:null,__pf:null,__pg:function(dn,dp){var dq=cw+(dn<0?((-1)*dn):dn);

while(dq.length<dp){dq=bx+dq;
}return dn<0?cv+dq:dq;
},__ph:function(dr){var ds=new Date(dr.getTime());
var dt=ds.getDate();

while(ds.getMonth()!=0){ds.setDate(-1);
dt+=ds.getDate()+1;
}return dt;
},__pi:function(du){return new Date(du.getTime()+(3-((du.getDay()+6)%7))*86400000);
},__pj:function(dv){var dx=this.__pi(dv);
var dy=dx.getFullYear();
var dw=this.__pi(new Date(dy,0,4));
return Math.floor(1.5+(dx.getTime()-dw.getTime())/86400000/7);
},__pk:function(dz){var dB=this.__pi(dz);
var dA=this.__pi(new Date(dz.getFullYear(),dz.getMonth(),4));
return Math.floor(1.5+(dB.getTime()-dA.getTime())/86400000/7);
},__pl:function(dC){var dD=this.__pi(dC);
return dD.getFullYear();
},__pm:function(dE){var dF=new Date(dE,2,1);
dF.setDate(-1);
return dF.getDate()+1===29;
},__pn:function(dG,dH){var dL=0;
var dM=0;
if(!dH){dH=1971;
}var dI=0;

for(var i=1;i<=12;i++){var dK=new Date(dH,i,1);
dK.setDate(-1);
var dJ=dK.getDate()+1;
dI+=dJ;

if(dI<dG){dL++;
dM+=dJ;
}else{dM=dG-(dI-dJ);
break;
}}return {month:dL,day:dM};
},__po:function(dN,dO,dP){var dQ;

switch(dO){case 11:dQ=dN-1;

if(dN!=this.__pl(new Date(dQ,dO,dP))){dQ=dN;
}break;
case 0:dQ=dN+1;

if(dN!=this.__pl(new Date(dQ,dO,dP))){dQ=dN;
}break;
default:dQ=dN;
}return dQ;
},format:function(dR){if(dR==null){return null;
}var dU=this.__pb;
var ea=dR.getFullYear();
var dV=dR.getMonth();
var dY=dR.getDate();
var ed=dR.getDay();
var eg=dR.getHours();
var em=dR.getMinutes();
var ee=dR.getSeconds();
var ek=dR.getMilliseconds();
var ec=dR.getTimezoneOffset();
var eh=ec>0?1:-1;
var dS=Math.floor(Math.abs(ec)/60);
var ej=Math.abs(ec)%60;
this.__pp();
var el=cw;

for(var i=0;i<this.__pf.length;i++){var eb=this.__pf[i];

if(eb.type==bw){el+=eb.text;
}else{var dT=eb.character;
var ef=eb.size;
var en=g;

switch(dT){case ca:if(ef==2){en=this.__pg(ea%100,2);
}else{var dW=Math.abs(ea);
en=dW+cw;

if(ef>en.length){for(var j=en.length;j<ef;j++){en=bx+en;
}}
if(ea<0){en=cv+en;
}}break;
case l:en=this.__pl(dR)+cw;
var dW=en.replace(I,r);

if(ef>en.length){for(var j=dW.length;j<ef;j++){dW=bx+dW;
}}en=en.indexOf(cv)!=-1?cv+dW:dW;
break;
case D:if(ef>=1&&ef<=3){en=ea>0?cD:n;
}else if(ef==4){en=ea>0?cJ:s;
}else if(ef==5){en=ea>0?bz:q;
}break;
case cH:if(ef==1||ef==2){en=this.__pg(parseInt(dV/4)+1,ef);
}
if(ef==3){en=cH+(parseInt(dV/4)+1);
}break;
case A:if(ef==1||ef==2){en=this.__pg(parseInt(dV/4)+1,ef);
}
if(ef==3){en=cH+(parseInt(dV/4)+1);
}break;
case bM:en=this.__pg(this.__ph(dR),ef);
break;
case co:en=this.__pg(dY,ef);
break;
case cR:en=this.__pg(this.__pj(dR),ef);
break;
case dc:en=this.__pk(dR);
break;
case d:if(ef>=1&&ef<=3){en=qx.locale.Date.getDayName(cu,ed,dU,cx);
}else if(ef==4){en=qx.locale.Date.getDayName(ct,ed,dU,cx);
}else if(ef==5){en=qx.locale.Date.getDayName(bC,ed,dU,cs);
}break;
case bT:var dX=qx.locale.Date.getWeekStart(dU);
var ei=ed+(1-dX>=0?1-dX:7+(1-dX));

if(ef>=1&&ef<=2){en=this.__pg(ei,ef);
}else if(ef==3){en=qx.locale.Date.getDayName(cu,ei,dU,cx);
}else if(ef==4){en=qx.locale.Date.getDayName(ct,ei,dU,cx);
}else if(ef==5){en=qx.locale.Date.getDayName(bC,ei,dU,cs);
}break;
case bs:var dX=qx.locale.Date.getWeekStart(dU);
var ei=ed+(1-dX>=0?1-dX:7+(1-dX));

if(ef==1){en=r+ei;
}else if(ef==3){en=qx.locale.Date.getDayName(cu,ei,dU,cx);
}else if(ef==4){en=qx.locale.Date.getDayName(ct,ei,dU,cx);
}else if(ef==5){en=qx.locale.Date.getDayName(bC,ei,dU,cs);
}break;
case cU:if(ef==1||ef==2){en=this.__pg(dV+1,ef);
}else if(ef==3){en=qx.locale.Date.getMonthName(cu,dV,dU,cx);
}else if(ef==4){en=qx.locale.Date.getMonthName(ct,dV,dU,cx);
}else if(ef==5){en=qx.locale.Date.getMonthName(bC,dV,dU,cs);
}break;
case S:if(ef==1||ef==2){en=this.__pg(dV+1,ef);
}else if(ef==3){en=qx.locale.Date.getMonthName(cu,dV,dU,cx);
}else if(ef==4){en=qx.locale.Date.getMonthName(ct,dV,dU,cx);
}else if(ef==5){en=qx.locale.Date.getMonthName(bC,dV,dU,cs);
}break;
case cf:en=(eg<12)?qx.locale.Date.getAmMarker(dU):qx.locale.Date.getPmMarker(dU);
break;
case bo:en=this.__pg(eg,ef);
break;
case bJ:en=this.__pg((eg==0)?24:eg,ef);
break;
case bU:en=this.__pg(eg%12,ef);
break;
case F:en=this.__pg(((eg%12)==0)?12:(eg%12),ef);
break;
case ci:en=this.__pg(em,ef);
break;
case N:en=this.__pg(ee,ef);
break;
case bp:en=ek+cw;

if(ef<=en.length){en=en.substr(0,ef);
}else{for(var j=en.length;j<ef;j++){en=en+bx;
}}break;
case m:if(ef>=1&&ef<=4){en=ch+((eh>0)?cv:cG)+this.__pg(Math.abs(dS),2)+cb+this.__pg(ej,2);
}break;
case t:if(ef>=1&&ef<=3){en=((eh>0)?cv:cG)+this.__pg(Math.abs(dS),2)+this.__pg(ej,2);
}else{en=ch+((eh>0)?cv:cG)+this.__pg(Math.abs(dS),2)+cb+this.__pg(ej,2);
}break;
}el+=en;
}}return el;
},parse:function(eo){this.__pq();
var ex=this.__pd.regex.exec(eo);

if(ex==null){throw new Error("Date string '"+eo+"' does not match the date format: "+this.__pc);
}var ep={era:1,year:1970,quarter:1,month:0,day:1,dayOfYear:1,hour:0,ispm:false,weekDay:4,weekYear:1970,weekOfMonth:1,weekOfYear:1,min:0,sec:0,ms:0};
var er=1;
var eq=false;
var es=false;

for(var i=0;i<this.__pd.usedRules.length;i++){var et=this.__pd.usedRules[i];
var eu=ex[er];

if(et.field!=null){ep[et.field]=parseInt(eu,10);
}else{et.manipulator(ep,eu);
}
if(et.pattern==cL){var ev=false;

for(var k=0;k<this.__pd.usedRules.length;k++){if(this.__pd.usedRules[k].pattern==bY){ev=true;
break;
}}
if(!ev){eq=true;
}}
if(et.pattern.indexOf(p)!=-1){var ez=false;

for(var k=0;k<this.__pd.usedRules.length;k++){if(this.__pd.usedRules[k].pattern.indexOf(o)!=-1){ez=true;
break;
}}
if(!ez){es=true;
}}er+=(et.groups==null)?1:et.groups;
}
if(eq){ep.year=this.__po(ep.weekYear,ep.month,ep.day);
}
if(es){var ey=this.__pn(ep.dayOfYear,ep.year);
ep.month=ey.month;
ep.day=ey.day;
}
if(ep.era<0&&(ep.year*ep.era<0)){ep.year=ep.year*ep.era;
}var ew=new Date(ep.year,ep.month,ep.day,(ep.ispm)?(ep.hour+12):ep.hour,ep.min,ep.sec,ep.ms);

if(ep.month!=ew.getMonth()||ep.year!=ew.getFullYear()){throw new Error("Error parsing date '"+eo+"': the value for day or month is too large");
}return ew;
},__pp:function(){if(this.__pf!=null){return;
}this.__pf=[];
var eE;
var eC=0;
var eG=cw;
var eA=this.__pc;
var eD=by;
var i=0;

while(i<eA.length){var eF=eA.charAt(i);

switch(eD){case cd:if(eF==bu){if(i+1>=eA.length){i++;
break;
}var eB=eA.charAt(i+1);

if(eB==bu){eG+=eF;
i++;
}else{i++;
eD=cr;
}}else{eG+=eF;
i++;
}break;
case bv:if(eF==eE){eC++;
i++;
}else{this.__pf.push({type:bv,character:eE,size:eC});
eE=null;
eC=0;
eD=by;
}break;
default:if((eF>=cf&&eF<=m)||(eF>=bz&&eF<=t)){eE=eF;
eD=bv;
}else if(eF==bu){if(i+1>=eA.length){eG+=eF;
i++;
break;
}var eB=eA.charAt(i+1);

if(eB==bu){eG+=eF;
i++;
}i++;
eD=cd;
}else{eD=by;
}
if(eD!=by){if(eG.length>0){this.__pf.push({type:bw,text:eG});
eG=cw;
}}else{eG+=eF;
i++;
}break;
}}if(eE!=null){this.__pf.push({type:bv,character:eE,size:eC});
}else if(eG.length>0){this.__pf.push({type:bw,text:eG});
}},__pq:function(){if(this.__pd!=null){return ;
}var eK=this.__pc;
this.__ps();
this.__pp();
var eQ=[];
var eM=W;

for(var eI=0;eI<this.__pf.length;eI++){var eR=this.__pf[eI];

if(eR.type==bw){eM+=qx.lang.String.escapeRegexpChars(eR.text);
}else{var eJ=eR.character;
var eN=eR.size;
var eL;

for(var eS=0;eS<this.__pe.length;eS++){var eO=this.__pe[eS];

if(this.__pr(eO,eJ,eN)){eL=eO;
break;
}}if(eL==null){var eP=cw;

for(var i=0;i<eN;i++){eP+=eJ;
}throw new Error("Malformed date format: "+eK+". Wildcard "+eP+" is not supported");
}else{eQ.push(eL);
eM+=eL.regex;
}}}eM+=cN;
var eH;

try{eH=new RegExp(eM);
}catch(eT){throw new Error("Malformed date format: "+eK);
}this.__pd={regex:eH,"usedRules":eQ,pattern:eM};
},__pr:function(eU,eV,eW){if(eV===ca&&eU.pattern===bY){eU.regex=eU.regexFunc(eW);
return true;
}else if(eV===l&&eU.pattern===bg){eU.regex=eU.regexFunc(eW);
return true;
}else{return eV==eU.pattern.charAt(0)&&eW==eU.pattern.length;
}},__ps:function(){var fo=qx.util.format.DateFormat;
var fr=qx.lang.String;

if(this.__pe!=null){return ;
}var fp=this.__pe=[];
var fj=qx.locale.Date.getAmMarker(this.__pb).toString()||fo.AM_MARKER;
var fB=qx.locale.Date.getPmMarker(this.__pb).toString()||fo.PM_MARKER;
var fa=this.__pb;
var fg=function(fI,fJ){fJ=parseInt(fJ,10);

if(fJ>0){if(fJ<fo.ASSUME_YEAR_2000_THRESHOLD){fJ+=2000;
}else if(fJ<100){fJ+=1900;
}}fI.year=fJ;
};
var fF=function(fK,fL){fL=parseInt(fL,10);

if(fL>0){if(fL<fo.ASSUME_YEAR_2000_THRESHOLD){fL+=2000;
}else if(fL<100){fL+=1900;
}}fK.weekYear=fL;
};
var fH=function(fM,fN){fM.month=parseInt(fN,10)-1;
};
var fe=function(fO,fP){var fR=qx.locale.Date.getWeekStart(fa);
var fQ=(1-fR>=0?1-fR:7+(1-fR))-fP;
fO.weekDay=fQ;
};
var fc=function(fS,fT){var fU=qx.locale.Date.getPmMarker(fa).toString()||fo.PM_MARKER;
fS.ispm=(fT==fU);
};
var fi=function(fV,fW){fV.hour=parseInt(fW,10)%24;
};
var fb=function(fX,fY){fX.hour=parseInt(fY,10)%12;
};
var fu=function(ga,gb){return;
};
var fv=[bz,q];
var fy=function(gc,gd){gc.era=gd==bz?1:-1;
};
var fm=[cD,n];
var fl=function(ge,gf){ge.era=gf==cD?1:-1;
};
var fA=[cJ,s];
var fk=function(gg,gh){gg.era=gh==cJ?1:-1;
};
var fD=[bG,bV,cS,f];
var eX=function(gi,gj){gi.quarter=fD.indexOf(gj);
};
var fz=[bq,x,P,X];
var ft=function(gk,gl){gk.quarter=fz.indexOf(gl);
};
var fE=qx.locale.Date.getMonthNames(cu,fa,cx);

for(var i=0;i<fE.length;i++){fE[i]=fr.escapeRegexpChars(fE[i].toString());
}var ff=function(gm,gn){gn=fr.escapeRegexpChars(gn);
gm.month=fE.indexOf(gn);
};
var fq=qx.locale.Date.getMonthNames(ct,fa,cx);

for(var i=0;i<fq.length;i++){fq[i]=fr.escapeRegexpChars(fq[i].toString());
}var fw=function(go,gp){gp=fr.escapeRegexpChars(gp);
go.month=fq.indexOf(gp);
};
var fG=qx.locale.Date.getMonthNames(bC,fa,cs);

for(var i=0;i<fG.length;i++){fG[i]=fr.escapeRegexpChars(fG[i].toString());
}var fd=function(gq,gr){gr=fr.escapeRegexpChars(gr);
gq.month=fG.indexOf(gr);
};
var eY=qx.locale.Date.getDayNames(bC,fa,cs);

for(var i=0;i<eY.length;i++){eY[i]=fr.escapeRegexpChars(eY[i].toString());
}var fC=function(gs,gt){gt=fr.escapeRegexpChars(gt);
gs.weekDay=eY.indexOf(gt);
};
var fx=qx.locale.Date.getDayNames(cu,fa,cx);

for(var i=0;i<fx.length;i++){fx[i]=fr.escapeRegexpChars(fx[i].toString());
}var fh=function(gu,gv){gv=fr.escapeRegexpChars(gv);
gu.weekDay=fx.indexOf(gv);
};
var fs=qx.locale.Date.getDayNames(ct,fa,cx);

for(var i=0;i<fs.length;i++){fs[i]=fr.escapeRegexpChars(fs[i].toString());
}var fn=function(gw,gx){gx=fr.escapeRegexpChars(gx);
gw.weekDay=fs.indexOf(gx);
};
fp.push({pattern:cl,regexFunc:function(gy){var gz=cK;

for(var i=0;i<gy;i++){gz+=cW;

if(i===gy-1&&i!==1){gz+=de;
}}gz+=cB;
return gz;
},manipulator:fg});
fp.push({pattern:cL,regexFunc:function(gA){var gB=cK;

for(var i=0;i<gA;i++){gB+=cW;

if(i===gA-1){gB+=de;
}}gB+=cB;
return gB;
},manipulator:fF});
fp.push({pattern:bj,regex:cA+fm.join(cz)+cB,manipulator:fl});
fp.push({pattern:bk,regex:cA+fm.join(cz)+cB,manipulator:fl});
fp.push({pattern:J,regex:cA+fm.join(cz)+cB,manipulator:fl});
fp.push({pattern:bO,regex:cA+fA.join(cz)+cB,manipulator:fk});
fp.push({pattern:V,regex:cA+fv.join(cz)+cB,manipulator:fy});
fp.push({pattern:bb,regex:bB,field:bA});
fp.push({pattern:bE,regex:cy,field:bA});
fp.push({pattern:M,regex:cA+fD.join(cz)+cB,manipulator:eX});
fp.push({pattern:bd,regex:cA+fz.join(cz)+cB,manipulator:ft});
fp.push({pattern:u,regex:bB,field:bA});
fp.push({pattern:a,regex:cy,field:bA});
fp.push({pattern:O,regex:cA+fD.join(cz)+cB,manipulator:eX});
fp.push({pattern:db,regex:cA+fz.join(cz)+cB,manipulator:ft});
fp.push({pattern:cQ,regex:bB,manipulator:fH});
fp.push({pattern:bW,regex:cy,manipulator:fH});
fp.push({pattern:cO,regex:cA+fE.join(cz)+cB,manipulator:ff});
fp.push({pattern:br,regex:cA+fq.join(cz)+cB,manipulator:fw});
fp.push({pattern:e,regex:cA+fG.join(cz)+cB,manipulator:fd});
fp.push({pattern:bR,regex:bB,manipulator:fH});
fp.push({pattern:Q,regex:cy,manipulator:fH});
fp.push({pattern:b,regex:cA+fE.join(cz)+cB,manipulator:ff});
fp.push({pattern:bL,regex:cA+fq.join(cz)+cB,manipulator:fw});
fp.push({pattern:bD,regex:cA+fG.join(cz)+cB,manipulator:fd});
fp.push({pattern:w,regex:cy,field:ce});
fp.push({pattern:o,regex:bB,field:ce});
fp.push({pattern:p,regex:bt,field:cC});
fp.push({pattern:cT,regex:cy,field:cC});
fp.push({pattern:bH,regex:Y,field:cC});
fp.push({pattern:cn,regex:cA+fx.join(cz)+cB,manipulator:fh});
fp.push({pattern:K,regex:cA+fx.join(cz)+cB,manipulator:fh});
fp.push({pattern:cM,regex:cA+fx.join(cz)+cB,manipulator:fh});
fp.push({pattern:R,regex:cA+fs.join(cz)+cB,manipulator:fn});
fp.push({pattern:L,regex:cA+eY.join(cz)+cB,manipulator:fC});
fp.push({pattern:bQ,regex:bt,manipulator:fe});
fp.push({pattern:v,regex:cy,manipulator:fe});
fp.push({pattern:y,regex:cA+fx.join(cz)+cB,manipulator:fh});
fp.push({pattern:bF,regex:cA+fs.join(cz)+cB,manipulator:fn});
fp.push({pattern:dd,regex:cA+eY.join(cz)+cB,manipulator:fC});
fp.push({pattern:bc,regex:cq,manipulator:fe});
fp.push({pattern:bi,regex:cA+fx.join(cz)+cB,manipulator:fh});
fp.push({pattern:bP,regex:cA+fs.join(cz)+cB,manipulator:fn});
fp.push({pattern:ck,regex:cA+eY.join(cz)+cB,manipulator:fC});
fp.push({pattern:C,regex:cA+fj+cz+fB+cB,manipulator:fc});
fp.push({pattern:bN,regex:bt,field:bh});
fp.push({pattern:H,regex:bt,field:cc});
fp.push({pattern:be,regex:cy,field:cc});
fp.push({pattern:bK,regex:cy,field:cI});
fp.push({pattern:bf,regex:cy,field:cI});
fp.push({pattern:bl,regex:cy,manipulator:fi});
fp.push({pattern:cj,regex:cy,manipulator:fi});
fp.push({pattern:df,regex:cy,field:cI});
fp.push({pattern:B,regex:cy,field:cI});
fp.push({pattern:bS,regex:cy,manipulator:fb});
fp.push({pattern:dg,regex:cy,manipulator:fb});
fp.push({pattern:G,regex:cy,field:cY});
fp.push({pattern:bI,regex:cy,field:cY});
fp.push({pattern:bm,regex:cy,field:cX});
fp.push({pattern:cP,regex:cy,field:cX});
fp.push({pattern:U,regex:cF,field:cE});
fp.push({pattern:cV,regex:cF,field:cE});
fp.push({pattern:E,regex:cF,field:cE});
fp.push({pattern:T,regex:bn,manipulator:fu});
fp.push({pattern:c,regex:ba,manipulator:fu});
}},destruct:function(){this.__pf=this.__pd=this.__pe=null;
}});
})();
(function(){var k="_",j="format",h="thu",g="sat",f="cldr_day_",e="cldr_month_",d="wed",c="fri",b="tue",a="mon",B="sun",A="short",z="HH:mm",y="HHmmsszz",x="HHmm",w="HHmmss",v="cldr_date_format_",u="HH:mm:ss zz",t="full",s="cldr_pm",q="long",r="medium",o="cldr_am",p="qx.locale.Date",m="cldr_date_time_format_",n="cldr_time_format_",l="HH:mm:ss";
qx.Class.define(p,{statics:{__pt:qx.locale.Manager.getInstance(),getAmMarker:function(C){return this.__pt.localize(o,[],C);
},getPmMarker:function(D){return this.__pt.localize(s,[],D);
},getDayNames:function(length,E,F){var F=F?F:j;
var H=[B,a,b,d,h,c,g];
var I=[];

for(var i=0;i<H.length;i++){var G=f+F+k+length+k+H[i];
I.push(this.__pt.localize(G,[],E));
}return I;
},getDayName:function(length,J,K,L){var L=L?L:j;
var N=[B,a,b,d,h,c,g];
var M=f+L+k+length+k+N[J];
return this.__pt.localize(M,[],K);
},getMonthNames:function(length,O,P){var P=P?P:j;
var R=[];

for(var i=0;i<12;i++){var Q=e+P+k+length+k+(i+1);
R.push(this.__pt.localize(Q,[],O));
}return R;
},getMonthName:function(length,S,T,U){var U=U?U:j;
var V=e+U+k+length+k+(S+1);
return this.__pt.localize(V,[],T);
},getDateFormat:function(W,X){var Y=v+W;
return this.__pt.localize(Y,[],X);
},getDateTimeFormat:function(ba,bb,bc){var be=m+ba;
var bd=this.__pt.localize(be,[],bc);

if(bd==be){bd=bb;
}return bd;
},getTimeFormat:function(bf,bg){var bi=n+bf;
var bh=this.__pt.localize(bi,[],bg);

if(bh!=bi){return bh;
}
switch(bf){case A:case r:return qx.locale.Date.getDateTimeFormat(x,z);
case q:return qx.locale.Date.getDateTimeFormat(w,l);
case t:return qx.locale.Date.getDateTimeFormat(y,u);
default:throw new Error("This case should never happen.");
}},getWeekStart:function(bj){var bk={"MV":5,"AE":6,"AF":6,"BH":6,"DJ":6,"DZ":6,"EG":6,"ER":6,"ET":6,"IQ":6,"IR":6,"JO":6,"KE":6,"KW":6,"LB":6,"LY":6,"MA":6,"OM":6,"QA":6,"SA":6,"SD":6,"SO":6,"TN":6,"YE":6,"AS":0,"AU":0,"AZ":0,"BW":0,"CA":0,"CN":0,"FO":0,"GE":0,"GL":0,"GU":0,"HK":0,"IE":0,"IL":0,"IS":0,"JM":0,"JP":0,"KG":0,"KR":0,"LA":0,"MH":0,"MN":0,"MO":0,"MP":0,"MT":0,"NZ":0,"PH":0,"PK":0,"SG":0,"TH":0,"TT":0,"TW":0,"UM":0,"US":0,"UZ":0,"VI":0,"ZA":0,"ZW":0,"MW":0,"NG":0,"TJ":0};
var bl=qx.locale.Date._getTerritory(bj);
return bk[bl]!=null?bk[bl]:1;
},getWeekendStart:function(bm){var bo={"EG":5,"IL":5,"SY":5,"IN":0,"AE":4,"BH":4,"DZ":4,"IQ":4,"JO":4,"KW":4,"LB":4,"LY":4,"MA":4,"OM":4,"QA":4,"SA":4,"SD":4,"TN":4,"YE":4};
var bn=qx.locale.Date._getTerritory(bm);
return bo[bn]!=null?bo[bn]:6;
},getWeekendEnd:function(bp){var bq={"AE":5,"BH":5,"DZ":5,"IQ":5,"JO":5,"KW":5,"LB":5,"LY":5,"MA":5,"OM":5,"QA":5,"SA":5,"SD":5,"TN":5,"YE":5,"AF":5,"IR":5,"EG":6,"IL":6,"SY":6};
var br=qx.locale.Date._getTerritory(bp);
return bq[br]!=null?bq[br]:0;
},isWeekend:function(bs,bt){var bv=qx.locale.Date.getWeekendStart(bt);
var bu=qx.locale.Date.getWeekendEnd(bt);

if(bu>bv){return ((bs>=bv)&&(bs<=bu));
}else{return ((bs>=bv)||(bs<=bu));
}},_getTerritory:function(bw){if(bw){var bx=bw.split(k)[1]||bw;
}else{bx=this.__pt.getTerritory()||this.__pt.getLanguage();
}return bx.toUpperCase();
}}});
})();
(function(){var l="qx.dynlocale",k="Boolean",j="changeLocale",i="changeInvalidMessage",h="String",g="invalid",f="",d="qx.ui.form.MForm",c="_applyValid",b="changeRequired",a="changeValid";
qx.Mixin.define(d,{construct:function(){if(qx.core.Environment.get(l)){qx.locale.Manager.getInstance().addListener(j,this.__my,this);
}},properties:{valid:{check:k,init:true,apply:c,event:a},required:{check:k,init:false,event:b},invalidMessage:{check:h,init:f,event:i},requiredInvalidMessage:{check:h,nullable:true,event:i}},members:{_applyValid:function(m,n){m?this.removeState(g):this.addState(g);
},__my:qx.core.Environment.select(l,{"true":function(e){var o=this.getInvalidMessage();

if(o&&o.translate){this.setInvalidMessage(o.translate());
}var p=this.getRequiredInvalidMessage();

if(p&&p.translate){this.setRequiredInvalidMessage(p.translate());
}},"false":null})},destruct:function(){if(qx.core.Environment.get(l)){qx.locale.Manager.getInstance().removeListener(j,this.__my,this);
}}});
})();
(function(){var k="showingPlaceholder",j="",i="engine.name",h="none",g="qx.dynlocale",f="Boolean",d="color",c="qx.event.type.Data",b="readonly",a="placeholder",be="input",bd="focusin",bc="visibility",bb="gecko",ba="focusout",Y="changeLocale",X="hidden",W="absolute",V="readOnly",U="text",r="_applyTextAlign",s="px",p="RegExp",q=")",n="syncAppearance",o="changeValue",l="engine.version",m="A",v="change",w="textAlign",E="focused",C="center",L="visible",G="disabled",Q="url(",O="String",y="resize",T="qx.ui.form.AbstractField",S="transparent",R="spellcheck",x="false",A="right",B="PositiveInteger",D="abstract",F="block",H="css.placeholder",M="webkit",P="_applyReadOnly",t="_applyPlaceholder",u="left",z="off",K="mshtml",J="qx/static/blank.gif",I="text-placeholder",N="changeReadOnly";
qx.Class.define(T,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:D,construct:function(bf){qx.ui.core.Widget.call(this);
this.__pu=!qx.core.Environment.get(H)||(qx.core.Environment.get(i)==bb&&parseFloat(qx.core.Environment.get(l))>=2);

if(bf!=null){this.setValue(bf);
}this.getContentElement().addListener(v,this._onChangeContent,this);
if(this.__pu){this.addListener(n,this._syncPlaceholder,this);
}if(qx.core.Environment.get(g)){qx.locale.Manager.getInstance().addListener(Y,this._onChangeLocale,this);
}},events:{"input":c,"changeValue":c},properties:{textAlign:{check:[u,C,A],nullable:true,themeable:true,apply:r},readOnly:{check:f,apply:P,event:N,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:B,init:Infinity},liveUpdate:{check:f,init:false},placeholder:{check:O,nullable:true,apply:t},filter:{check:p,nullable:true,init:null}},members:{__pv:true,__pw:null,__px:null,__py:null,__pu:true,getFocusElement:function(){var bg=this.getContentElement();

if(bg){return bg;
}},_createInputElement:function(){return new qx.html.Input(U);
},renderLayout:function(bh,top,bi,bj){var bk=this._updateInsets;
var bo=qx.ui.core.Widget.prototype.renderLayout.call(this,bh,top,bi,bj);
if(!bo){return;
}var bm=bo.size||bk;
var bp=s;

if(bm||bo.local||bo.margin){var bl=this.getInsets();
var innerWidth=bi-bl.left-bl.right;
var innerHeight=bj-bl.top-bl.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bn=this.getContentElement();
if(bk&&this.__pu){this.__pB().setStyles({"left":bl.left+bp,"top":bl.top+bp});
}
if(bm){if(this.__pu){this.__pB().setStyles({"width":innerWidth+bp,"height":innerHeight+bp});
}bn.setStyles({"width":innerWidth+bp,"height":innerHeight+bp});
this._renderContentElement(innerHeight,bn);
}},_renderContentElement:function(innerHeight,bq){},_createContentElement:function(){var br=this._createInputElement();
br.setStyles({"border":h,"padding":0,"margin":0,"display":F,"background":S,"outline":h,"appearance":h,"position":W,"autoComplete":z});
br.setSelectable(this.getSelectable());
br.setEnabled(this.getEnabled());
br.addListener(be,this._onHtmlInput,this);
br.setAttribute(R,x);
if(qx.core.Environment.get(i)==M||qx.core.Environment.get(i)==bb){br.setStyle(y,h);
}if((qx.core.Environment.get(i)==K)){br.setStyles({backgroundImage:Q+qx.util.ResourceManager.getInstance().toUri(J)+q});
}return br;
},_applyEnabled:function(bs,bt){qx.ui.core.Widget.prototype._applyEnabled.call(this,bs,bt);
this.getContentElement().setEnabled(bs);

if(this.__pu){if(bs){this._showPlaceholder();
}else{this._removePlaceholder();
}}else{var bu=this.getContentElement();
bu.setAttribute(a,bs?this.getPlaceholder():j);
}},__pz:{width:16,height:16},_getContentHint:function(){return {width:this.__pz.width*10,height:this.__pz.height||16};
},_applyFont:function(bv,bw){var bx;

if(bv){var by=qx.theme.manager.Font.getInstance().resolve(bv);
bx=by.getStyles();
}else{bx=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(bx);
if(this.__pu){this.__pB().setStyles(bx);
}if(bv){this.__pz=qx.bom.Label.getTextSize(m,bx);
}else{delete this.__pz;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(bz,bA){if(bz){this.getContentElement().setStyle(d,qx.theme.manager.Color.getInstance().resolve(bz));
}else{this.getContentElement().removeStyle(d);
}},tabFocus:function(){qx.ui.core.Widget.prototype.tabFocus.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__pz;
},_onHtmlInput:function(e){var bE=e.getData();
var bD=true;
this.__pv=false;
if(this.getFilter()!=null){var bF=j;
var bB=bE.search(this.getFilter());
var bC=bE;

while(bB>=0){bF=bF+(bC.charAt(bB));
bC=bC.substring(bB+1,bC.length);
bB=bC.search(this.getFilter());
}
if(bF!=bE){bD=false;
bE=bF;
this.getContentElement().setValue(bE);
}}if(bE.length>this.getMaxLength()){bD=false;
this.getContentElement().setValue(bE.substr(0,this.getMaxLength()));
}if(bD){this.fireDataEvent(be,bE,this.__py);
this.__py=bE;
if(this.getLiveUpdate()){this.__pA(bE);
}}},__pA:function(bG){var bH=this.__px;
this.__px=bG;

if(bH!=bG){this.fireNonBubblingEvent(o,qx.event.type.Data,[bG,bH]);
}},setValue:function(bI){if(bI===null){if(this.__pv){return bI;
}bI=j;
this.__pv=true;
}else{this.__pv=false;
if(this.__pu){this._removePlaceholder();
}}
if(qx.lang.Type.isString(bI)){var bK=this.getContentElement();

if(bI.length>this.getMaxLength()){bI=bI.substr(0,this.getMaxLength());
}
if(bK.getValue()!=bI){var bL=bK.getValue();
bK.setValue(bI);
var bJ=this.__pv?null:bI;
this.__px=bL;
this.__pA(bJ);
}if(this.__pu){this._showPlaceholder();
}return bI;
}throw new Error("Invalid value type: "+bI);
},getValue:function(){var bM=this.getContentElement().getValue();
return this.__pv?null:bM;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__pv=e.getData()===null;
this.__pA(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(bN,bO){this.getContentElement().setTextSelection(bN,bO);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bQ=this.getValue()||j;
var bP=this.getPlaceholder();

if(bP!=null&&bQ==j&&!this.hasState(E)&&!this.hasState(G)){if(this.hasState(k)){this._syncPlaceholder();
}else{this.addState(k);
}}},_removePlaceholder:function(){if(this.hasState(k)){this.__pB().setStyle(bc,X);
this.removeState(k);
}},_syncPlaceholder:function(){if(this.hasState(k)){this.__pB().setStyle(bc,L);
}},__pB:function(){if(this.__pw==null){this.__pw=new qx.html.Label();
var bR=qx.theme.manager.Color.getInstance();
this.__pw.setStyles({"visibility":X,"zIndex":6,"position":W,"color":bR.resolve(I)});
this.getContainerElement().add(this.__pw);
}return this.__pw;
},_onChangeLocale:qx.core.Environment.select(g,{"true":function(e){var content=this.getPlaceholder();

if(content&&content.translate){this.setPlaceholder(content.translate());
}},"false":null}),_applyPlaceholder:function(bS,bT){if(this.__pu){this.__pB().setValue(bS);

if(bS!=null){this.addListener(bd,this._removePlaceholder,this);
this.addListener(ba,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(bd,this._removePlaceholder,this);
this.removeListener(ba,this._showPlaceholder,this);
this._removePlaceholder();
}}else{if(this.getEnabled()){this.getContentElement().setAttribute(a,bS);
}}},_applyTextAlign:function(bU,bV){this.getContentElement().setStyle(w,bU);
},_applyReadOnly:function(bW,bX){var bY=this.getContentElement();
bY.setAttribute(V,bW);

if(bW){this.addState(b);
this.setFocusable(false);
}else{this.removeState(b);
this.setFocusable(true);
}}},destruct:function(){this.__pw=null;

if(qx.core.Environment.get(g)){qx.locale.Manager.getInstance().removeListener(Y,this._onChangeLocale,this);
}}});
})();
(function(){var f="mshtml",e="engine.name",d="qx.ui.form.TextField",c='px',b="textfield",a="engine.version";
qx.Class.define(d,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:b},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_renderContentElement:function(innerHeight,g){if((qx.core.Environment.get(e)==f)&&qx.core.Environment.get(a)<9){g.setStyles({"line-height":innerHeight+c});
}}}});
})();
(function(){var n="wrap",m="value",l="textarea",k="engine.name",j="none",i="",h="overflow",g="input",f="qx.html.Input",e="select",b="disabled",d="read-only",c="overflowX",a="overflowY";
qx.Class.define(f,{extend:qx.html.Element,construct:function(o,p,q){if(o===e||o===l){var r=o;
}else{r=g;
}qx.html.Element.call(this,r,p,q);
this.__pC=o;
},members:{__pC:null,__pD:null,__pE:null,_createDomElement:function(){return qx.bom.Input.create(this.__pC);
},_applyProperty:function(name,s){qx.html.Element.prototype._applyProperty.call(this,name,s);
var t=this.getDomElement();

if(name===m){qx.bom.Input.setValue(t,s);
}else if(name===n){qx.bom.Input.setWrap(t,s);
this.setStyle(h,t.style.overflow,true);
this.setStyle(c,t.style.overflowX,true);
this.setStyle(a,t.style.overflowY,true);
}},setEnabled:qx.core.Environment.select(k,{"webkit":function(u){this.__pE=u;

if(!u){this.setStyles({"userModify":d,"userSelect":j});
}else{this.setStyles({"userModify":null,"userSelect":this.__pD?null:j});
}},"default":function(v){this.setAttribute(b,v===false);
}}),setSelectable:qx.core.Environment.select(k,{"webkit":function(w){this.__pD=w;
qx.html.Element.prototype.setSelectable.call(this,this.__pE&&w);
},"default":function(x){qx.html.Element.prototype.setSelectable.call(this,x);
}}),setValue:function(y){var z=this.getDomElement();

if(z){if(z.value!=y){qx.bom.Input.setValue(z,y);
}}else{this._setProperty(m,y);
}return this;
},getValue:function(){var A=this.getDomElement();

if(A){return qx.bom.Input.getValue(A);
}return this._getProperty(m)||i;
},setWrap:function(B,C){if(this.__pC===l){this._setProperty(n,B,C);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__pC===l){return this._getProperty(n);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var m="input",k="engine.name",j="change",h="text",g="password",f="radio",d="textarea",c="checkbox",b="engine.version",a="keypress",A="browser.documentmode",z="opera",y="keyup",x="mshtml",w="blur",v="keydown",u="propertychange",t="browser.version",s="select-multiple",r="value",p="select",q="qx.event.handler.Input",n="checked";
qx.Class.define(q,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if((qx.core.Environment.get(k)==z)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__pF:false,__pG:null,__pH:null,__pI:null,canHandleEvent:function(B,C){var D=B.tagName.toLowerCase();

if(C===m&&(D===m||D===d)){return true;
}
if(C===j&&(D===m||D===d||D===p)){return true;
}return false;
},registerEvent:function(E,F,G){if(qx.core.Environment.get(k)==x&&qx.core.Environment.get(b)<9&&qx.core.Environment.get(A)<9){if(!E.__pJ){var H=E.tagName.toLowerCase();
var I=E.type;

if(I===h||I===g||H===d||I===c||I===f){qx.bom.Event.addNativeListener(E,u,this._onPropertyWrapper);
}
if(I!==c&&I!==f){qx.bom.Event.addNativeListener(E,j,this._onChangeValueWrapper);
}
if(I===h||I===g){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,E);
qx.bom.Event.addNativeListener(E,a,this._onKeyPressWrapped);
}E.__pJ=true;
}}else{if(F===m){this.__pK(E);
}else if(F===j){if(E.type===f||E.type===c){qx.bom.Event.addNativeListener(E,j,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(E,j,this._onChangeValueWrapper);
}if((qx.core.Environment.get(k)==z)||(qx.core.Environment.get(k)==x)){if(E.type===h||E.type===g){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,E);
qx.bom.Event.addNativeListener(E,a,this._onKeyPressWrapped);
}}}}},__pK:qx.core.Environment.select(k,{"mshtml":function(J){if(qx.core.Environment.get(b)>=9&&qx.core.Environment.get(A)>=9){qx.bom.Event.addNativeListener(J,m,this._onInputWrapper);

if(J.type===h||J.type===g){this._inputFixWrapper=qx.lang.Function.listener(this._inputFix,this,J);
qx.bom.Event.addNativeListener(J,y,this._inputFixWrapper);
}}},"webkit":function(K){var L=K.tagName.toLowerCase();
if(parseFloat(qx.core.Environment.get(b))<532&&L==d){qx.bom.Event.addNativeListener(K,a,this._onInputWrapper);
}qx.bom.Event.addNativeListener(K,m,this._onInputWrapper);
},"opera":function(M){qx.bom.Event.addNativeListener(M,y,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(M,v,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(M,w,this._onBlurWrapper);
qx.bom.Event.addNativeListener(M,m,this._onInputWrapper);
},"default":function(N){qx.bom.Event.addNativeListener(N,m,this._onInputWrapper);
}}),unregisterEvent:function(O,P){if(qx.core.Environment.get(k)==x&&qx.core.Environment.get(b)<9&&qx.core.Environment.get(A)<9){if(O.__pJ){var Q=O.tagName.toLowerCase();
var R=O.type;

if(R===h||R===g||Q===d||R===c||R===f){qx.bom.Event.removeNativeListener(O,u,this._onPropertyWrapper);
}
if(R!==c&&R!==f){qx.bom.Event.removeNativeListener(O,j,this._onChangeValueWrapper);
}
if(R===h||R===g){qx.bom.Event.removeNativeListener(O,a,this._onKeyPressWrapped);
}
try{delete O.__pJ;
}catch(S){O.__pJ=null;
}}}else{if(P===m){this.__pL(O);
}else if(P===j){if(O.type===f||O.type===c){qx.bom.Event.removeNativeListener(O,j,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(O,j,this._onChangeValueWrapper);
}}
if((qx.core.Environment.get(k)==z)||(qx.core.Environment.get(k)==x)){if(O.type===h||O.type===g){qx.bom.Event.removeNativeListener(O,a,this._onKeyPressWrapped);
}}}},__pL:qx.core.Environment.select(k,{"mshtml":function(T){if(qx.core.Environment.get(b)>=9&&qx.core.Environment.get(A)>=9){qx.bom.Event.removeNativeListener(T,m,this._onInputWrapper);

if(T.type===h||T.type===g){qx.bom.Event.removeNativeListener(T,y,this._inputFixWrapper);
}}},"webkit":function(U){var V=U.tagName.toLowerCase();
if(parseFloat(qx.core.Environment.get(b))<532&&V==d){qx.bom.Event.removeNativeListener(U,a,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(U,m,this._onInputWrapper);
},"opera":function(W){qx.bom.Event.removeNativeListener(W,y,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(W,v,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(W,w,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(W,m,this._onInputWrapper);
},"default":function(X){qx.bom.Event.removeNativeListener(X,m,this._onInputWrapper);
}}),_onKeyPress:qx.core.Environment.select(k,{"mshtml|opera":function(e,Y){if(e.keyCode===13){if(Y.value!==this.__pH){this.__pH=Y.value;
qx.event.Registration.fireEvent(Y,j,qx.event.type.Data,[Y.value]);
}}},"default":null}),_inputFix:qx.core.Environment.select(k,{"mshtml":function(e,ba){if(e.keyCode===46||e.keyCode===8){if(ba.value!==this.__pI){this.__pI=ba.value;
qx.event.Registration.fireEvent(ba,m,qx.event.type.Data,[ba.value]);
}}},"default":null}),_onKeyDown:qx.core.Environment.select(k,{"opera":function(e){if(e.keyCode===13){this.__pF=true;
}},"default":null}),_onKeyUp:qx.core.Environment.select(k,{"opera":function(e){if(e.keyCode===13){this.__pF=false;
}},"default":null}),_onBlur:qx.core.Environment.select(k,{"opera":function(e){if(this.__pG&&qx.core.Environment.get(t)<10.6){window.clearTimeout(this.__pG);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var bc=qx.bom.Event.getTarget(e);
var bb=bc.tagName.toLowerCase();
if(!this.__pF||bb!==m){if((qx.core.Environment.get(k)==z)&&qx.core.Environment.get(t)<10.6){this.__pG=window.setTimeout(function(){qx.event.Registration.fireEvent(bc,m,qx.event.type.Data,[bc.value]);
},0);
}else{qx.event.Registration.fireEvent(bc,m,qx.event.type.Data,[bc.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var be=qx.bom.Event.getTarget(e);
var bd=be.value;

if(be.type===s){var bd=[];

for(var i=0,o=be.options,l=o.length;i<l;i++){if(o[i].selected){bd.push(o[i].value);
}}}qx.event.Registration.fireEvent(be,j,qx.event.type.Data,[bd]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var bf=qx.bom.Event.getTarget(e);

if(bf.type===f){if(bf.checked){qx.event.Registration.fireEvent(bf,j,qx.event.type.Data,[bf.value]);
}}else{qx.event.Registration.fireEvent(bf,j,qx.event.type.Data,[bf.checked]);
}}),_onProperty:qx.core.Environment.select(k,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var bg=qx.bom.Event.getTarget(e);
var bh=e.propertyName;

if(bh===r&&(bg.type===h||bg.type===g||bg.tagName.toLowerCase()===d)){if(!bg.$$inValueSet){qx.event.Registration.fireEvent(bg,m,qx.event.type.Data,[bg.value]);
}}else if(bh===n){if(bg.type===c){qx.event.Registration.fireEvent(bg,j,qx.event.type.Data,[bg.checked]);
}else if(bg.checked){qx.event.Registration.fireEvent(bg,j,qx.event.type.Data,[bg.value]);
}}}),"default":function(){}})},defer:function(bi){qx.event.Registration.addHandler(bi);
}});
})();
(function(){var v="",u="select",t="engine.name",s="soft",r="off",q="textarea",p="auto",o="wrap",n="text",m="mshtml",d="number",k="checkbox",g="select-one",c="input",b="option",f="value",e="radio",h="qx.bom.Input",a="nowrap",j="normal";
qx.Class.define(h,{statics:{__pM:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(w,x,y){var x=x?qx.lang.Object.clone(x):{};
var z;

if(w===q||w===u){z=w;
}else{z=c;
x.type=w;
}return qx.bom.Element.create(z,x,y);
},setValue:function(A,B){var G=A.nodeName.toLowerCase();
var D=A.type;
var Array=qx.lang.Array;
var H=qx.lang.Type;

if(typeof B===d){B+=v;
}
if((D===k||D===e)){if(H.isArray(B)){A.checked=Array.contains(B,A.value);
}else{A.checked=A.value==B;
}}else if(G===u){var C=H.isArray(B);
var I=A.options;
var E,F;

for(var i=0,l=I.length;i<l;i++){E=I[i];
F=E.getAttribute(f);

if(F==null){F=E.text;
}E.selected=C?Array.contains(B,F):B==F;
}
if(C&&B.length==0){A.selectedIndex=-1;
}}else if((D===n||D===q)&&(qx.core.Environment.get(t)==m)){A.$$inValueSet=true;
A.value=B;
A.$$inValueSet=null;
}else{A.value=B;
}},getValue:function(J){var P=J.nodeName.toLowerCase();

if(P===b){return (J.attributes.value||{}).specified?J.value:J.text;
}
if(P===u){var K=J.selectedIndex;
if(K<0){return null;
}var Q=[];
var S=J.options;
var R=J.type==g;
var O=qx.bom.Input;
var N;
for(var i=R?K:0,M=R?K+1:S.length;i<M;i++){var L=S[i];

if(L.selected){N=O.getValue(L);
if(R){return N;
}Q.push(N);
}}return Q;
}else{return (J.value||v).replace(/\r/g,v);
}},setWrap:qx.core.Environment.select(t,{"mshtml":function(T,U){var W=U?s:r;
var V=U?p:v;
T.wrap=W;
T.style.overflowY=V;
},"gecko|webkit":function(X,Y){var bb=Y?s:r;
var ba=Y?v:p;
X.setAttribute(o,bb);
X.style.overflow=ba;
},"default":function(bc,bd){bc.style.whiteSpace=bd?j:a;
}})}});
})();
(function(){var i="icon",h="label",g="String",f="sort-icon",e="_applySortIcon",d="_applyIcon",c="table-header-cell",b="qx.ui.table.headerrenderer.HeaderCell",a="_applyLabel";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
var j=new qx.ui.layout.Grid();
j.setRowFlex(0,1);
j.setColumnFlex(1,1);
j.setColumnFlex(2,1);
this.setLayout(j);
},properties:{appearance:{refine:true,init:c},label:{check:g,init:null,nullable:true,apply:a},sortIcon:{check:g,init:null,nullable:true,apply:e,themeable:true},icon:{check:g,init:null,nullable:true,apply:d}},members:{_applyLabel:function(k,l){if(k){this._showChildControl(h).setValue(k);
}else{this._excludeChildControl(h);
}},_applySortIcon:function(m,n){if(m){this._showChildControl(f).setSource(m);
}else{this._excludeChildControl(f);
}},_applyIcon:function(o,p){if(o){this._showChildControl(i).setSource(o);
}else{this._excludeChildControl(i);
}},_createChildControlImpl:function(q,r){var s;

switch(q){case h:s=new qx.ui.basic.Label(this.getLabel()).set({anonymous:true,allowShrinkX:true});
this._add(s,{row:0,column:1});
break;
case f:s=new qx.ui.basic.Image(this.getSortIcon());
s.setAnonymous(true);
this._add(s,{row:0,column:2});
break;
case i:s=new qx.ui.basic.Image(this.getIcon()).set({anonymous:true,allowShrinkX:true});
this._add(s,{row:0,column:0});
break;
}return s||qx.ui.container.Composite.prototype._createChildControlImpl.call(this,q);
}}});
})();
(function(){var k="",j="Number",h='</div>',g='" ',f="paneUpdated",e='<div>',d="</div>",c="overflow: hidden;",b="qx.event.type.Data",a="paneReloadsData",E="div",D='style="',C="_applyMaxCacheLines",B="qx.ui.table.pane.Pane",A="width: 100%;",z="qx.event.type.Event",w="_applyVisibleRowCount",v='>',u="line-height: ",t="appear",r='class="',s="width:100%;",p="px;",q='<div ',n="'>",o="_applyFirstVisibleRow",l="<div style='",m=";position:relative;";
qx.Class.define(B,{extend:qx.ui.core.Widget,construct:function(F){qx.ui.core.Widget.call(this);
this.__pN=F;
this.__pO=0;
this.__pP=0;
this.__pQ=[];
},events:{"paneReloadsData":b,"paneUpdated":z},properties:{firstVisibleRow:{check:j,init:0,apply:o},visibleRowCount:{check:j,init:0,apply:w},maxCacheLines:{check:j,init:1000,apply:C},allowShrinkX:{refine:true,init:false}},members:{__pP:null,__pO:null,__pN:null,__pR:null,__pS:null,__pT:null,__pQ:null,__pU:0,_applyFirstVisibleRow:function(G,H){this.updateContent(false,G-H);
},_applyVisibleRowCount:function(I,J){this.updateContent(true);
},_getContentHint:function(){return {width:this.getPaneScroller().getTablePaneModel().getTotalWidth(),height:400};
},getPaneScroller:function(){return this.__pN;
},getTable:function(){return this.__pN.getTable();
},setFocusedCell:function(K,L,M){if(K!=this.__pT||L!=this.__pS){var N=this.__pS;
this.__pT=K;
this.__pS=L;
if(L!=N&&!M){if(N!==null){this.updateContent(false,null,N,true);
}
if(L!==null){this.updateContent(false,null,L,true);
}}}},onSelectionChanged:function(){this.updateContent(false,null,null,true);
},onFocusChanged:function(){this.updateContent(false,null,null,true);
},setColumnWidth:function(O,P){this.updateContent(true);
},onColOrderChanged:function(){this.updateContent(true);
},onPaneModelChanged:function(){this.updateContent(true);
},onTableModelDataChanged:function(Q,R,S,T){this.__pV();
var V=this.getFirstVisibleRow();
var U=this.getVisibleRowCount();

if(R==-1||R>=V&&Q<V+U){this.updateContent();
}},onTableModelMetaDataChanged:function(){this.updateContent(true);
},_applyMaxCacheLines:function(W,X){if(this.__pU>=W&&W!==-1){this.__pV();
}},__pV:function(){this.__pQ=[];
this.__pU=0;
},__pW:function(Y,ba,bb){if(!ba&&!bb&&this.__pQ[Y]){return this.__pQ[Y];
}else{return null;
}},__pX:function(bc,bd,be,bf){var bg=this.getMaxCacheLines();

if(!be&&!bf&&!this.__pQ[bc]&&bg>0){this._applyMaxCacheLines(bg);
this.__pQ[bc]=bd;
this.__pU+=1;
}},updateContent:function(bh,bi,bj,bk){if(bh){this.__pV();
}if(bi&&Math.abs(bi)<=Math.min(10,this.getVisibleRowCount())){this._scrollContent(bi);
}else if(bk&&!this.getTable().getAlwaysUpdateCells()){this._updateRowStyles(bj);
}else{this._updateAllRows();
}},_updateRowStyles:function(bl){var bp=this.getContentElement().getDomElement();

if(!bp||!bp.firstChild){this._updateAllRows();
return;
}var bt=this.getTable();
var bn=bt.getSelectionModel();
var bq=bt.getTableModel();
var bu=bt.getDataRowRenderer();
var bo=bp.firstChild.childNodes;
var bs={table:bt};
var bv=this.getFirstVisibleRow();
var y=0;
var bm=bo.length;

if(bl!=null){var br=bl-bv;

if(br>=0&&br<bm){bv=bl;
y=br;
bm=br+1;
}else{return;
}}
for(;y<bm;y++,bv++){bs.row=bv;
bs.selected=bn.isSelectedIndex(bv);
bs.focusedRow=(this.__pS==bv);
bs.rowData=bq.getRowData(bv);
bu.updateDataRowElement(bs,bo[y]);
}},_getRowsHtml:function(bw,bx){var bD=this.getTable();
var bG=bD.getSelectionModel();
var bA=bD.getTableModel();
var bB=bD.getTableColumnModel();
var bV=this.getPaneScroller().getTablePaneModel();
var bL=bD.getDataRowRenderer();
bA.prefetchRows(bw,bw+bx-1);
var bS=bD.getRowHeight();
var bU=bV.getColumnCount();
var bC=0;
var bz=[];
for(var x=0;x<bU;x++){var bY=bV.getColumnAtX(x);
var bF=bB.getColumnWidth(bY);
bz.push({col:bY,xPos:x,editable:bA.isColumnEditable(bY),focusedCol:this.__pT==bY,styleLeft:bC,styleWidth:bF});
bC+=bF;
}var bX=[];
var ca=false;

for(var bE=bw;bE<bw+bx;bE++){var bH=bG.isSelectedIndex(bE);
var bK=(this.__pS==bE);
var bP=this.__pW(bE,bH,bK);

if(bP){bX.push(bP);
continue;
}var by=[];
var bR={table:bD};
bR.styleHeight=bS;
bR.row=bE;
bR.selected=bH;
bR.focusedRow=bK;
bR.rowData=bA.getRowData(bE);

if(!bR.rowData){ca=true;
}by.push(q);
var bO=bL.getRowAttributes(bR);

if(bO){by.push(bO);
}var bN=bL.getRowClass(bR);

if(bN){by.push(r,bN,g);
}var bM=bL.createRowStyle(bR);
bM+=m+bL.getRowHeightStyle(bS)+s;

if(bM){by.push(D,bM,g);
}by.push(v);
var bW=false;

for(x=0;x<bU&&!bW;x++){var bI=bz[x];

for(var bT in bI){bR[bT]=bI[bT];
}var bY=bR.col;
bR.value=bA.getValue(bY,bE);
var bJ=bB.getDataCellRenderer(bY);
bR.style=bJ.getDefaultCellStyle();
bW=bJ.createDataCellHtml(bR,by)||false;
}by.push(h);
var bQ=by.join(k);
this.__pX(bE,bQ,bH,bK);
bX.push(bQ);
}this.fireDataEvent(a,ca);
return bX.join(k);
},_scrollContent:function(cb){var cc=this.getContentElement().getDomElement();

if(!(cc&&cc.firstChild)){this._updateAllRows();
return;
}var cl=cc.firstChild;
var cd=cl.childNodes;
var cj=this.getVisibleRowCount();
var ci=this.getFirstVisibleRow();
var cg=this.getTable().getTableModel();
var cm=0;
cm=cg.getRowCount();
if(ci+cj>cm){this._updateAllRows();
return;
}var cn=cb<0?cj+cb:0;
var ce=cb<0?0:cj-cb;

for(i=Math.abs(cb)-1;i>=0;i--){var ch=cd[cn];

try{cl.removeChild(ch);
}catch(co){break;
}}if(!this.__pR){this.__pR=document.createElement(E);
}var ck=e;
ck+=this._getRowsHtml(ci+ce,Math.abs(cb));
ck+=h;
this.__pR.innerHTML=ck;
var cf=this.__pR.firstChild.childNodes;
if(cb>0){for(var i=cf.length-1;i>=0;i--){var ch=cf[0];
cl.appendChild(ch);
}}else{for(var i=cf.length-1;i>=0;i--){var ch=cf[cf.length-1];
cl.insertBefore(ch,cl.firstChild);
}}if(this.__pS!==null){this._updateRowStyles(this.__pS-cb);
this._updateRowStyles(this.__pS);
}this.fireEvent(f);
},_updateAllRows:function(){var cs=this.getContentElement().getDomElement();

if(!cs){this.addListenerOnce(t,arguments.callee,this);
return;
}var cy=this.getTable();
var cv=cy.getTableModel();
var cx=this.getPaneScroller().getTablePaneModel();
var cw=cx.getColumnCount();
var cp=cy.getRowHeight();
var ct=this.getFirstVisibleRow();
var cq=this.getVisibleRowCount();
var cz=cv.getRowCount();

if(ct+cq>cz){cq=Math.max(0,cz-ct);
}var cr=cx.getTotalWidth();
var cu;
if(cq>0){cu=[l,A,(cy.getForceLineHeight()?u+cp+p:k),c,n,this._getRowsHtml(ct,cq),d];
}else{cu=[];
}var cA=cu.join(k);
cs.innerHTML=cA;
this.setWidth(cr);
this.__pO=cw;
this.__pP=cq;
this.fireEvent(f);
}},destruct:function(){this.__pR=this.__pN=this.__pQ=null;
}});
})();
(function(){var e="first",d="last",c="hovered",b="__qa",a="qx.ui.table.pane.Header";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(f){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__pY=new qx.ui.core.Blocker(this);
this.__qa=f;
},members:{__qa:null,__qb:null,__qc:null,__pY:null,getPaneScroller:function(){return this.__qa;
},getTable:function(){return this.__qa.getTable();
},getBlocker:function(){return this.__pY;
},onColOrderChanged:function(){this._updateContent(true);
},onPaneModelChanged:function(){this._updateContent(true);
},onTableModelMetaDataChanged:function(){this._updateContent();
},setColumnWidth:function(g,h,i){var j=this.getHeaderWidgetAtColumn(g);

if(j!=null){j.setWidth(h);
}},setMouseOverColumn:function(k){if(k!=this.__qc){if(this.__qc!=null){var l=this.getHeaderWidgetAtColumn(this.__qc);

if(l!=null){l.removeState(c);
}}
if(k!=null){this.getHeaderWidgetAtColumn(k).addState(c);
}this.__qc=k;
}},getHeaderWidgetAtColumn:function(m){var n=this.getPaneScroller().getTablePaneModel().getX(m);
return this._getChildren()[n];
},showColumnMoveFeedback:function(o,x){var s=this.getContainerLocation();

if(this.__qb==null){var y=this.getTable();
var p=this.getPaneScroller().getTablePaneModel().getX(o);
var r=this._getChildren()[p];
var t=y.getTableModel();
var v=y.getTableColumnModel();
var w={xPos:p,col:o,name:t.getColumnName(o),table:y};
var u=v.getHeaderCellRenderer(o);
var q=u.createHeaderCell(w);
var z=r.getBounds();
q.setWidth(z.width);
q.setHeight(z.height);
q.setZIndex(1000000);
q.setOpacity(0.8);
q.setLayoutProperties({top:s.top});
this.getApplicationRoot().add(q);
this.__qb=q;
}this.__qb.setLayoutProperties({left:s.left+x});
this.__qb.show();
},hideColumnMoveFeedback:function(){if(this.__qb!=null){this.__qb.destroy();
this.__qb=null;
}},isShowingColumnMoveFeedback:function(){return this.__qb!=null;
},_updateContent:function(A){var K=this.getTable();
var E=K.getTableModel();
var H=K.getTableColumnModel();
var J=this.getPaneScroller().getTablePaneModel();
var M=this._getChildren();
var F=J.getColumnCount();
var I=E.getSortColumnIndex();
if(A){this._cleanUpCells();
}var B={};
B.sortedAscending=E.isSortAscending();

for(var x=0;x<F;x++){var D=J.getColumnAtX(x);

if(D===undefined){continue;
}var L=H.getColumnWidth(D);
var G=H.getHeaderCellRenderer(D);
B.xPos=x;
B.col=D;
B.name=E.getColumnName(D);
B.editable=E.isColumnEditable(D);
B.sorted=(D==I);
B.table=K;
var C=M[x];
if(C==null){C=G.createHeaderCell(B);
C.set({width:L});
this._add(C);
}else{G.updateHeaderCell(B,C);
}if(x===0){C.addState(e);
C.removeState(d);
}else if(x===F-1){C.removeState(e);
C.addState(d);
}else{C.removeState(e);
C.removeState(d);
}}},_cleanUpCells:function(){var O=this._getChildren();

for(var x=O.length-1;x>=0;x--){var N=O[x];
N.destroy();
}}},destruct:function(){this.__pY.dispose();
this._disposeObjects(b);
}});
})();
(function(){var b="qx.nativeScrollBars",a="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Environment.add(b,false);
qx.core.Setting.defineDeprecated(b,false);
qx.Mixin.define(a,{members:{_createScrollBar:function(c){if(qx.core.Environment.get(b)){return new qx.ui.core.scroll.NativeScrollBar(c);
}else{return new qx.ui.core.scroll.ScrollBar(c);
}}}});
})();
(function(){var m="Boolean",l="resize-line",k="mousedown",j="qx.event.type.Data",i="mouseup",h="qx.ui.table.pane.CellEvent",g="scroll",d="focus-indicator",c="excluded",b="scrollbar-y",bm="table-scroller-focus-indicator",bl="visible",bk="mousemove",bj="header",bi="editing",bh="click",bg="modelChanged",bf="scrollbar-x",be="cellClick",bd="pane",t="__qe",u="__qm",r="mouseout",s="changeHorizontalScrollBarVisible",p="__qi",q="bottom",n="_applyScrollTimeout",o="changeScrollX",z="_applyTablePaneModel",A="Integer",I="dblclick",G="__qj",Q="dataEdited",L="__qh",Y="mousewheel",V="interval",C="qx.ui.table.pane.Scroller",bc="_applyShowCellFocusIndicator",bb="resize",ba="vertical",B="__qg",E="__qf",F="changeScrollY",H="appear",J="table-scroller",M="beforeSort",S="cellDblclick",X="__ql",v="__qk",w="horizontal",D="losecapture",P="contextmenu",O="col-resize",N="disappear",U="_applyVerticalScrollBarVisible",T="_applyHorizontalScrollBarVisible",K="cellContextmenu",R="close",a="changeTablePaneModel",W="qx.ui.table.pane.Model",y="changeVerticalScrollBarVisible";
qx.Class.define(C,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,construct:function(bn){qx.ui.core.Widget.call(this);
this.__qd=bn;
var bo=new qx.ui.layout.Grid();
bo.setColumnFlex(0,1);
bo.setRowFlex(1,1);
this._setLayout(bo);
this.__qe=this._showChildControl(bf);
this.__qf=this._showChildControl(b);
this.__qg=this._showChildControl(bj);
this.__qh=this._showChildControl(bd);
this.__qi=new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({minWidth:0});
this._add(this.__qi,{row:0,column:0,colSpan:2});
this.__qj=new qx.ui.table.pane.Clipper();
this.__qj.add(this.__qg);
this.__qj.addListener(D,this._onChangeCaptureHeader,this);
this.__qj.addListener(bk,this._onMousemoveHeader,this);
this.__qj.addListener(k,this._onMousedownHeader,this);
this.__qj.addListener(i,this._onMouseupHeader,this);
this.__qj.addListener(bh,this._onClickHeader,this);
this.__qi.add(this.__qj,{flex:1});
this.__qk=new qx.ui.table.pane.Clipper();
this.__qk.add(this.__qh);
this.__qk.addListener(Y,this._onMousewheel,this);
this.__qk.addListener(bk,this._onMousemovePane,this);
this.__qk.addListener(k,this._onMousedownPane,this);
this.__qk.addListener(i,this._onMouseupPane,this);
this.__qk.addListener(bh,this._onClickPane,this);
this.__qk.addListener(P,this._onContextMenu,this);
this.__qk.addListener(I,this._onDblclickPane,this);
this.__qk.addListener(bb,this._onResizePane,this);
this._add(this.__qk,{row:1,column:0});
this.__ql=this.getChildControl(d);
this.initShowCellFocusIndicator();
this.getChildControl(l).hide();
this.addListener(r,this._onMouseout,this);
this.addListener(H,this._onAppear,this);
this.addListener(N,this._onDisappear,this);
this.__qm=new qx.event.Timer();
this.__qm.addListener(V,this._oninterval,this);
this.initScrollTimeout();
},statics:{MIN_COLUMN_WIDTH:10,RESIZE_REGION_RADIUS:5,CLICK_TOLERANCE:5,HORIZONTAL_SCROLLBAR:1,VERTICAL_SCROLLBAR:2},events:{"changeScrollY":j,"changeScrollX":j,"cellClick":h,"cellDblclick":h,"cellContextmenu":h,"beforeSort":j},properties:{horizontalScrollBarVisible:{check:m,init:false,apply:T,event:s},verticalScrollBarVisible:{check:m,init:false,apply:U,event:y},tablePaneModel:{check:W,apply:z,event:a},liveResize:{check:m,init:false},focusCellOnMouseMove:{check:m,init:false},selectBeforeFocus:{check:m,init:false},showCellFocusIndicator:{check:m,init:true,apply:bc},contextMenuFromDataCellsOnly:{check:m,init:true},resetSelectionOnHeaderClick:{check:m,init:true},scrollTimeout:{check:A,init:100,apply:n},appearance:{refine:true,init:J}},members:{__qn:null,__qd:null,__qo:null,__qp:null,__qq:null,__qr:null,__qs:null,__qt:null,__qu:null,__qv:null,__qw:null,__qx:null,__qy:null,__qz:null,__qA:false,__qB:null,__qC:null,__qD:null,__qE:null,__qF:null,__qG:null,__qH:null,__qI:null,__qe:null,__qf:null,__qg:null,__qj:null,__qh:null,__qk:null,__ql:null,__qi:null,__qm:null,getPaneInsetRight:function(){var br=this.getTopRightWidget();
var bs=br&&br.isVisible()&&br.getBounds()?br.getBounds().width+br.getMarginLeft()+br.getMarginRight():0;
var bq=this.__qf;
var bp=this.getVerticalScrollBarVisible()?this.getVerticalScrollBarWidth()+bq.getMarginLeft()+bq.getMarginRight():0;
return Math.max(bs,bp);
},setPaneWidth:function(bt){if(this.isVerticalScrollBarVisible()){bt+=this.getPaneInsetRight();
}this.setWidth(bt);
},_createChildControlImpl:function(bu,bv){var bw;

switch(bu){case bj:bw=(this.getTable().getNewTablePaneHeader())(this);
break;
case bd:bw=(this.getTable().getNewTablePane())(this);
break;
case d:bw=new qx.ui.table.pane.FocusIndicator(this);
bw.setUserBounds(0,0,0,0);
bw.setZIndex(1000);
bw.addListener(i,this._onMouseupFocusIndicator,this);
this.__qk.add(bw);
bw.show();
bw.setDecorator(null);
break;
case l:bw=new qx.ui.core.Widget();
bw.setUserBounds(0,0,0,0);
bw.setZIndex(1000);
this.__qk.add(bw);
break;
case bf:bw=this._createScrollBar(w).set({minWidth:0,alignY:q});
bw.addListener(g,this._onScrollX,this);
this._add(bw,{row:2,column:0});
break;
case b:bw=this._createScrollBar(ba);
bw.addListener(g,this._onScrollY,this);
this._add(bw,{row:1,column:1});
break;
}return bw||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bu);
},_applyHorizontalScrollBarVisible:function(bx,by){this.__qe.setVisibility(bx?bl:c);
},_applyVerticalScrollBarVisible:function(bz,bA){this.__qf.setVisibility(bz?bl:c);
},_applyTablePaneModel:function(bB,bC){if(bC!=null){bC.removeListener(bg,this._onPaneModelChanged,this);
}bB.addListener(bg,this._onPaneModelChanged,this);
},_applyShowCellFocusIndicator:function(bD,bE){if(bD){this.__ql.setDecorator(bm);
this._updateFocusIndicator();
}else{if(this.__ql){this.__ql.setDecorator(null);
}}},getScrollY:function(){return this.__qf.getPosition();
},setScrollY:function(scrollY,bF){this.__qf.scrollTo(scrollY);

if(bF){this._updateContent();
}},getScrollX:function(){return this.__qe.getPosition();
},setScrollX:function(scrollX){this.__qe.scrollTo(scrollX);
},getTable:function(){return this.__qd;
},onColVisibilityChanged:function(){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
},setColumnWidth:function(bG,bH){this.__qg.setColumnWidth(bG,bH);
this.__qh.setColumnWidth(bG,bH);
var bI=this.getTablePaneModel();
var x=bI.getX(bG);

if(x!=-1){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
}},onColOrderChanged:function(){this.__qg.onColOrderChanged();
this.__qh.onColOrderChanged();
this.updateHorScrollBarMaximum();
},onTableModelDataChanged:function(bJ,bK,bL,bM){this.__qh.onTableModelDataChanged(bJ,bK,bL,bM);
var bN=this.getTable().getTableModel().getRowCount();

if(bN!=this.__qn){this.updateVerScrollBarMaximum();

if(this.getFocusedRow()>=bN){if(bN==0){this.setFocusedCell(null,null);
}else{this.setFocusedCell(this.getFocusedColumn(),bN-1);
}}this.__qn=bN;
}},onSelectionChanged:function(){this.__qh.onSelectionChanged();
},onFocusChanged:function(){this.__qh.onFocusChanged();
},onTableModelMetaDataChanged:function(){this.__qg.onTableModelMetaDataChanged();
this.__qh.onTableModelMetaDataChanged();
},_onPaneModelChanged:function(){this.__qg.onPaneModelChanged();
this.__qh.onPaneModelChanged();
},_onResizePane:function(){this.updateHorScrollBarMaximum();
this.updateVerScrollBarMaximum();
this._updateContent();
this.__qg._updateContent();
this.__qd._updateScrollBarVisibility();
},updateHorScrollBarMaximum:function(){var bR=this.__qk.getInnerSize();

if(!bR){return ;
}var bP=this.getTablePaneModel().getTotalWidth();
var bQ=this.__qe;

if(bR.width<bP){var bO=Math.max(0,bP-bR.width);
bQ.setMaximum(bO);
bQ.setKnobFactor(bR.width/bP);
var bS=bQ.getPosition();
bQ.setPosition(Math.min(bS,bO));
}else{bQ.setMaximum(0);
bQ.setKnobFactor(1);
bQ.setPosition(0);
}},updateVerScrollBarMaximum:function(){var cb=this.__qk.getInnerSize();

if(!cb){return ;
}var bY=this.getTable().getTableModel();
var bU=bY.getRowCount();

if(this.getTable().getKeepFirstVisibleRowComplete()){bU+=1;
}var bT=this.getTable().getRowHeight();
var bW=bU*bT;
var ca=this.__qf;

if(cb.height<bW){var bV=Math.max(0,bW-cb.height);
ca.setMaximum(bV);
ca.setKnobFactor(cb.height/bW);
var bX=ca.getPosition();
ca.setPosition(Math.min(bX,bV));
}else{ca.setMaximum(0);
ca.setKnobFactor(1);
ca.setPosition(0);
}},onKeepFirstVisibleRowCompleteChanged:function(){this.updateVerScrollBarMaximum();
this._updateContent();
},_onAppear:function(){this._startInterval(this.getScrollTimeout());
},_onDisappear:function(){this._stopInterval();
},_onScrollX:function(e){var cc=e.getData();
this.fireDataEvent(o,cc,e.getOldData());
this.__qj.scrollToX(cc);
this.__qk.scrollToX(cc);
},_onScrollY:function(e){this.fireDataEvent(F,e.getData(),e.getOldData());
this._postponedUpdateContent();
},_onMousewheel:function(e){var cd=this.getTable();

if(!cd.getEnabled()){return;
}var cg=e.getWheelDelta();
if(cg>0&&cg<1){cg=1;
}else if(cg<0&&cg>-1){cg=-1;
}this.__qf.scrollBySteps(cg);
if(this.__qC&&this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(this.__qC,this.__qD);
}var cf=this.__qf.getPosition();
var ce=this.__qf.getMaximum();
if(cg<0&&cf<=0||cg>0&&cf>=ce){return;
}e.stop();
},__qJ:function(ch){var cm=this.getTable();
var cn=this.__qg.getHeaderWidgetAtColumn(this.__qw);
var ci=cn.getSizeHint().minWidth;
var ck=Math.max(ci,this.__qy+ch-this.__qx);

if(this.getLiveResize()){var cj=cm.getTableColumnModel();
cj.setColumnWidth(this.__qw,ck,true);
}else{this.__qg.setColumnWidth(this.__qw,ck,true);
var cl=this.getTablePaneModel();
this._showResizeLine(cl.getColumnLeft(this.__qw)+ck);
}this.__qx+=ck-this.__qy;
this.__qy=ck;
},__qK:function(co){var cp=qx.ui.table.pane.Scroller.CLICK_TOLERANCE;

if(this.__qg.isShowingColumnMoveFeedback()||co>this.__qv+cp||co<this.__qv-cp){this.__qs+=co-this.__qv;
this.__qg.showColumnMoveFeedback(this.__qr,this.__qs);
var cq=this.__qd.getTablePaneScrollerAtPageX(co);

if(this.__qu&&this.__qu!=cq){this.__qu.hideColumnMoveFeedback();
}
if(cq!=null){this.__qt=cq.showColumnMoveFeedback(co);
}else{this.__qt=null;
}this.__qu=cq;
this.__qv=co;
}},_onMousemoveHeader:function(e){var cx=this.getTable();

if(!cx.getEnabled()){return;
}var cy=false;
var cr=null;
var cv=e.getDocumentLeft();
var cw=e.getDocumentTop();
this.__qC=cv;
this.__qD=cw;

if(this.__qw!=null){this.__qJ(cv);
cy=true;
e.stopPropagation();
}else if(this.__qr!=null){this.__qK(cv);
e.stopPropagation();
}else{var cs=this._getResizeColumnForPageX(cv);

if(cs!=-1){cy=true;
}else{var cu=cx.getTableModel();
var cz=this._getColumnForPageX(cv);

if(cz!=null&&cu.isColumnSortable(cz)){cr=cz;
}}}var ct=cy?O:null;
this.getApplicationRoot().setGlobalCursor(ct);
this.setCursor(ct);
this.__qg.setMouseOverColumn(cr);
},_onMousemovePane:function(e){var cA=this.getTable();

if(!cA.getEnabled()){return;
}var cC=e.getDocumentLeft();
var cD=e.getDocumentTop();
this.__qC=cC;
this.__qD=cD;
var cB=this._getRowForPagePos(cC,cD);

if(cB!=null&&this._getColumnForPageX(cC)!=null){if(this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(cC,cD);
}}this.__qg.setMouseOverColumn(null);
},_onMousedownHeader:function(e){if(!this.getTable().getEnabled()){return;
}var cF=e.getDocumentLeft();
var cG=this._getResizeColumnForPageX(cF);

if(cG!=-1){this._startResizeHeader(cG,cF);
e.stop();
}else{var cE=this._getColumnForPageX(cF);

if(cE!=null){this._startMoveHeader(cE,cF);
e.stop();
}}},_startResizeHeader:function(cH,cI){var cJ=this.getTable().getTableColumnModel();
this.__qw=cH;
this.__qx=cI;
this.__qy=cJ.getColumnWidth(this.__qw);
this.__qj.capture();
},_startMoveHeader:function(cK,cL){this.__qr=cK;
this.__qv=cL;
this.__qs=this.getTablePaneModel().getColumnLeft(cK);
this.__qj.capture();
},_onMousedownPane:function(e){var cP=this.getTable();

if(!cP.getEnabled()){return;
}
if(cP.isEditing()){cP.stopEditing();
}var cM=e.getDocumentLeft();
var cO=e.getDocumentTop();
var cR=this._getRowForPagePos(cM,cO);
var cQ=this._getColumnForPageX(cM);

if(cR!==null){this.__qz={row:cR,col:cQ};
this.__qA=false;
var cN=this.getSelectBeforeFocus();

if(cN){cP.getSelectionManager().handleMouseDown(cR,e);
}if(!this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(cM,cO);
}
if(!cN){cP.getSelectionManager().handleMouseDown(cR,e);
}}},_onMouseupFocusIndicator:function(e){if(this.__qz&&!this.__qA&&!this.isEditing()&&this.__ql.getRow()==this.__qz.row&&this.__ql.getColumn()==this.__qz.col){this.fireEvent(be,qx.ui.table.pane.CellEvent,[this,e,this.__qz.row,this.__qz.col],true);
this.__qA=true;
}else if(!this.isEditing()){this._onMousedownPane(e);
}},_onChangeCaptureHeader:function(e){if(this.__qw!=null){this._stopResizeHeader();
}
if(this.__qr!=null){this._stopMoveHeader();
}},_stopResizeHeader:function(){var cS=this.getTable().getTableColumnModel();
if(!this.getLiveResize()){this._hideResizeLine();
cS.setColumnWidth(this.__qw,this.__qy,true);
}this.__qw=null;
this.__qj.releaseCapture();
this.getApplicationRoot().setGlobalCursor(null);
this.setCursor(null);
if(this.isEditing()){var cT=this.__qG.getBounds().height;
this.__qG.setUserBounds(0,0,this.__qy,cT);
}},_stopMoveHeader:function(){var cY=this.getTable().getTableColumnModel();
var da=this.getTablePaneModel();
this.__qg.hideColumnMoveFeedback();

if(this.__qu){this.__qu.hideColumnMoveFeedback();
}
if(this.__qt!=null){var dc=da.getFirstColumnX()+da.getX(this.__qr);
var cX=this.__qt;

if(cX!=dc&&cX!=dc+1){var db=cY.getVisibleColumnAtX(dc);
var cW=cY.getVisibleColumnAtX(cX);
var cV=cY.getOverallX(db);
var cU=(cW!=null)?cY.getOverallX(cW):cY.getOverallColumnCount();

if(cU>cV){cU--;
}cY.moveColumn(cV,cU);
this._updateFocusIndicator();
}}this.__qr=null;
this.__qt=null;
this.__qj.releaseCapture();
},_onMouseupPane:function(e){var dd=this.getTable();

if(!dd.getEnabled()){return;
}var de=this._getRowForPagePos(e.getDocumentLeft(),e.getDocumentTop());

if(de!=-1&&de!=null&&this._getColumnForPageX(e.getDocumentLeft())!=null){dd.getSelectionManager().handleMouseUp(de,e);
}},_onMouseupHeader:function(e){var df=this.getTable();

if(!df.getEnabled()){return;
}
if(this.__qw!=null){this._stopResizeHeader();
this.__qB=true;
e.stop();
}else if(this.__qr!=null){this._stopMoveHeader();
e.stop();
}},_onClickHeader:function(e){if(this.__qB){this.__qB=false;
return;
}var dk=this.getTable();

if(!dk.getEnabled()){return;
}var di=dk.getTableModel();
var dj=e.getDocumentLeft();
var dh=this._getResizeColumnForPageX(dj);

if(dh==-1){var dn=this._getColumnForPageX(dj);

if(dn!=null&&di.isColumnSortable(dn)){var dg=di.getSortColumnIndex();
var dl=(dn!=dg)?true:!di.isSortAscending();
var dm={column:dn,ascending:dl,clickEvent:e};

if(this.fireDataEvent(M,dm,null,true)){di.sortByColumn(dn,dl);

if(this.getResetSelectionOnHeaderClick()){dk.getSelectionModel().resetSelection();
}}}}e.stop();
},_onClickPane:function(e){var dp=this.getTable();

if(!dp.getEnabled()){return;
}var ds=e.getDocumentLeft();
var dt=e.getDocumentTop();
var dq=this._getRowForPagePos(ds,dt);
var dr=this._getColumnForPageX(ds);

if(dq!=null&&dr!=null){dp.getSelectionManager().handleClick(dq,e);

if(this.__ql.isHidden()||(this.__qz&&!this.__qA&&!this.isEditing()&&dq==this.__qz.row&&dr==this.__qz.col)){this.fireEvent(be,qx.ui.table.pane.CellEvent,[this,e,dq,dr],true);
this.__qA=true;
}}},_onContextMenu:function(e){var dx=e.getDocumentLeft();
var dy=e.getDocumentTop();
var dv=this._getRowForPagePos(dx,dy);
var dw=this._getColumnForPageX(dx);
if(dv===null&&this.getContextMenuFromDataCellsOnly()){return;
}
if(!this.getShowCellFocusIndicator()||dv===null||(this.__qz&&dv==this.__qz.row&&dw==this.__qz.col)){this.fireEvent(K,qx.ui.table.pane.CellEvent,[this,e,dv,dw],true);
var du=this.getTable().getContextMenu();

if(du){if(du.getChildren().length>0){du.openAtMouse(e);
}else{du.exclude();
}e.preventDefault();
}}},_onContextMenuOpen:function(e){},_onDblclickPane:function(e){var dA=e.getDocumentLeft();
var dB=e.getDocumentTop();
this._focusCellAtPagePos(dA,dB);
this.startEditing();
var dz=this._getRowForPagePos(dA,dB);

if(dz!=-1&&dz!=null){this.fireEvent(S,qx.ui.table.pane.CellEvent,[this,e,dz],true);
}},_onMouseout:function(e){var dC=this.getTable();

if(!dC.getEnabled()){return;
}if(this.__qw==null){this.setCursor(null);
this.getApplicationRoot().setGlobalCursor(null);
}this.__qg.setMouseOverColumn(null);
},_showResizeLine:function(x){var dE=this._showChildControl(l);
var dD=dE.getWidth();
var dF=this.__qk.getBounds();
dE.setUserBounds(x-Math.round(dD/2),0,dD,dF.height);
},_hideResizeLine:function(){this._excludeChildControl(l);
},showColumnMoveFeedback:function(dG){var dP=this.getTablePaneModel();
var dO=this.getTable().getTableColumnModel();
var dJ=this.__qh.getContainerLocation().left;
var dN=dP.getColumnCount();
var dK=0;
var dI=0;
var dS=dJ;

for(var dH=0;dH<dN;dH++){var dL=dP.getColumnAtX(dH);
var dQ=dO.getColumnWidth(dL);

if(dG<dS+dQ/2){break;
}dS+=dQ;
dK=dH+1;
dI=dS-dJ;
}var dM=this.__qk.getContainerLocation().left;
var dR=this.__qk.getBounds().width;
var scrollX=dM-dJ;
dI=qx.lang.Number.limit(dI,scrollX+2,scrollX+dR-1);
this._showResizeLine(dI);
return dP.getFirstColumnX()+dK;
},hideColumnMoveFeedback:function(){this._hideResizeLine();
},_focusCellAtPagePos:function(dT,dU){var dW=this._getRowForPagePos(dT,dU);

if(dW!=-1&&dW!=null){var dV=this._getColumnForPageX(dT);
this.__qd.setFocusedCell(dV,dW);
}},setFocusedCell:function(dX,dY){if(!this.isEditing()){this.__qh.setFocusedCell(dX,dY,this.__qp);
this.__qE=dX;
this.__qF=dY;
this._updateFocusIndicator();
}},getFocusedColumn:function(){return this.__qE;
},getFocusedRow:function(){return this.__qF;
},scrollCellVisible:function(ea,eb){var el=this.getTablePaneModel();
var ec=el.getX(ea);

if(ec!=-1){var ei=this.__qk.getInnerSize();

if(!ei){return;
}var ej=this.getTable().getTableColumnModel();
var ef=el.getColumnLeft(ea);
var em=ej.getColumnWidth(ea);
var ed=this.getTable().getRowHeight();
var en=eb*ed;
var scrollX=this.getScrollX();
var scrollY=this.getScrollY();
var ek=Math.min(ef,ef+em-ei.width);
var eh=ef;
this.setScrollX(Math.max(ek,Math.min(eh,scrollX)));
var ee=en+ed-ei.height;

if(this.getTable().getKeepFirstVisibleRowComplete()){ee+=ed;
}var eg=en;
this.setScrollY(Math.max(ee,Math.min(eg,scrollY)),true);
}},isEditing:function(){return this.__qG!=null;
},startEditing:function(){var es=this.getTable();
var eq=es.getTableModel();
var eu=this.__qE;

if(!this.isEditing()&&(eu!=null)&&eq.isColumnEditable(eu)){var ev=this.__qF;
var eo=this.getTablePaneModel().getX(eu);
var ep=eq.getValue(eu,ev);
this.scrollCellVisible(eo,ev);
this.__qH=es.getTableColumnModel().getCellEditorFactory(eu);
var er={col:eu,row:ev,xPos:eo,value:ep,table:es};
this.__qG=this.__qH.createCellEditor(er);
if(this.__qG===null){return false;
}else if(this.__qG instanceof qx.ui.window.Window){this.__qG.setModal(true);
this.__qG.setShowClose(false);
this.__qG.addListener(R,this._onCellEditorModalWindowClose,this);
var f=es.getModalCellEditorPreOpenFunction();

if(f!=null){f(this.__qG,er);
}this.__qG.open();
}else{var et=this.__ql.getInnerSize();
this.__qG.setUserBounds(0,0,et.width,et.height);
this.__ql.addListener(k,function(e){this.__qz={row:this.__qF,col:this.__qE};
e.stopPropagation();
},this);
this.__ql.add(this.__qG);
this.__ql.addState(bi);
this.__ql.setKeepActive(false);
this.__ql.setDecorator(bm);
this.__qG.focus();
this.__qG.activate();
}return true;
}return false;
},stopEditing:function(){if(!this.getShowCellFocusIndicator()){this.__ql.setDecorator(null);
}this.flushEditor();
this.cancelEditing();
},flushEditor:function(){if(this.isEditing()){var ex=this.__qH.getCellEditorValue(this.__qG);
var ew=this.getTable().getTableModel().getValue(this.__qE,this.__qF);
this.getTable().getTableModel().setValue(this.__qE,this.__qF,ex);
this.__qd.focus();
this.__qd.fireDataEvent(Q,{row:this.__qF,col:this.__qE,oldValue:ew,value:ex});
}},cancelEditing:function(){if(this.isEditing()&&!this.__qG.pendingDispose){if(this._cellEditorIsModalWindow){this.__qG.destroy();
this.__qG=null;
this.__qH=null;
this.__qG.pendingDispose=true;
}else{this.__ql.removeState(bi);
this.__ql.setKeepActive(true);
this.__qG.destroy();
this.__qG=null;
this.__qH=null;
}}},_onCellEditorModalWindowClose:function(e){this.stopEditing();
},_getColumnForPageX:function(ey){var eB=this.getTable().getTableColumnModel();
var eC=this.getTablePaneModel();
var eA=eC.getColumnCount();
var eE=this.__qg.getContainerLocation().left;

for(var x=0;x<eA;x++){var ez=eC.getColumnAtX(x);
var eD=eB.getColumnWidth(ez);
eE+=eD;

if(ey<eE){return ez;
}}return null;
},_getResizeColumnForPageX:function(eF){var eJ=this.getTable().getTableColumnModel();
var eK=this.getTablePaneModel();
var eI=eK.getColumnCount();
var eM=this.__qg.getContainerLocation().left;
var eG=qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;

for(var x=0;x<eI;x++){var eH=eK.getColumnAtX(x);
var eL=eJ.getColumnWidth(eH);
eM+=eL;

if(eF>=(eM-eG)&&eF<=(eM+eG)){return eH;
}}return -1;
},_getRowForPagePos:function(eN,eO){var eP=this.__qh.getContentLocation();

if(eN<eP.left||eN>eP.right){return null;
}
if(eO>=eP.top&&eO<=eP.bottom){var eQ=this.getTable().getRowHeight();
var scrollY=this.__qf.getPosition();

if(this.getTable().getKeepFirstVisibleRowComplete()){scrollY=Math.floor(scrollY/eQ)*eQ;
}var eT=scrollY+eO-eP.top;
var eV=Math.floor(eT/eQ);
var eU=this.getTable().getTableModel();
var eR=eU.getRowCount();
return (eV<eR)?eV:null;
}var eS=this.__qg.getContainerLocation();

if(eO>=eS.top&&eO<=eS.bottom&&eN<=eS.right){return -1;
}return null;
},setTopRightWidget:function(eW){var eX=this.__qI;

if(eX!=null){this.__qi.remove(eX);
}
if(eW!=null){this.__qi.add(eW);
}this.__qI=eW;
},getTopRightWidget:function(){return this.__qI;
},getHeader:function(){return this.__qg;
},getTablePane:function(){return this.__qh;
},getVerticalScrollBarWidth:function(){var eY=this.__qf;
return eY.isVisible()?(eY.getSizeHint().width||0):0;
},getNeededScrollBars:function(fa,fb){var fk=this.__qf;
var fo=fk.getSizeHint().width+fk.getMarginLeft()+fk.getMarginRight();
var fq=this.__qe;
var fp=fq.getSizeHint().height+fq.getMarginTop()+fq.getMarginBottom();
var fi=this.__qk.getInnerSize();
var fc=fi?fi.width:0;

if(this.getVerticalScrollBarVisible()){fc+=fo;
}var fn=fi?fi.height:0;

if(this.getHorizontalScrollBarVisible()){fn+=fp;
}var fj=this.getTable().getTableModel();
var fg=fj.getRowCount();
var fd=this.getTablePaneModel().getTotalWidth();
var fl=this.getTable().getRowHeight()*fg;
var ff=false;
var fm=false;

if(fd>fc){ff=true;

if(fl>fn-fp){fm=true;
}}else if(fl>fn){fm=true;

if(!fb&&(fd>fc-fo)){ff=true;
}}var fh=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var fe=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
return ((fa||ff)?fh:0)|((fb||!fm)?0:fe);
},getPaneClipper:function(){return this.__qk;
},_applyScrollTimeout:function(fr,fs){this._startInterval(fr);
},_startInterval:function(ft){this.__qm.setInterval(ft);
this.__qm.start();
},_stopInterval:function(){this.__qm.stop();
},_postponedUpdateContent:function(){this._updateContent();
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.__qp&&!this.__qh._layoutPending){this.__qp=false;
this._updateContent();
}}),_updateContent:function(){var fy=this.__qk.getInnerSize();

if(!fy){return;
}var fB=fy.height;
var scrollX=this.__qe.getPosition();
var scrollY=this.__qf.getPosition();
var fv=this.getTable().getRowHeight();
var fw=Math.floor(scrollY/fv);
var fA=this.__qh.getFirstVisibleRow();
this.__qh.setFirstVisibleRow(fw);
var fx=Math.ceil(fB/fv);
var fu=0;
var fz=this.getTable().getKeepFirstVisibleRowComplete();

if(!fz){fx++;
fu=scrollY%fv;
}this.__qh.setVisibleRowCount(fx);

if(fw!=fA){this._updateFocusIndicator();
}this.__qk.scrollToX(scrollX);
if(!fz){this.__qk.scrollToY(fu);
}},_updateFocusIndicator:function(){var fC=this.getTable();

if(!fC.getEnabled()){return;
}this.__ql.moveToCell(this.__qE,this.__qF);
}},destruct:function(){this._stopInterval();
var fD=this.getTablePaneModel();

if(fD){fD.dispose();
}this.__qz=this.__qI=this.__qd=null;
this._disposeObjects(t,E,G,v,X,B,L,p,u);
}});
})();
(function(){var b="qx.ui.core.scroll.IScrollBar",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"scroll":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(c){this.assertNumber(c);
},scrollBy:function(d){this.assertNumber(d);
},scrollBySteps:function(e){this.assertNumber(e);
}}});
})();
(function(){var k="horizontal",j="px",i="scroll",h="vertical",g="-1px",f="0",d="engine.name",c="hidden",b="mousedown",a="qx.ui.core.scroll.NativeScrollBar",z="PositiveNumber",y="Integer",x="mousemove",w="_applyMaximum",v="_applyOrientation",u="appear",t="opera",s="PositiveInteger",r="mshtml",q="mouseup",o="Number",p="_applyPosition",m="scrollbar",n="__qM",l="native";
qx.Class.define(a,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(A){qx.ui.core.Widget.call(this);
this.addState(l);
this.getContentElement().addListener(i,this._onScroll,this);
this.addListener(b,this._stopPropagation,this);
this.addListener(q,this._stopPropagation,this);
this.addListener(x,this._stopPropagation,this);

if((qx.core.Environment.get(d)==t)){this.addListener(u,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(A!=null){this.setOrientation(A);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:m},orientation:{check:[k,h],init:k,apply:v},maximum:{check:s,apply:w,init:100},position:{check:o,init:0,apply:p,event:i},singleStep:{check:y,init:20},knobFactor:{check:z,nullable:true}},members:{__qL:null,__qM:null,_getScrollPaneElement:function(){if(!this.__qM){this.__qM=new qx.html.Element();
}return this.__qM;
},renderLayout:function(B,top,C,D){var E=qx.ui.core.Widget.prototype.renderLayout.call(this,B,top,C,D);
this._updateScrollBar();
return E;
},_getContentHint:function(){var F=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__qL?100:F,maxWidth:this.__qL?null:F,minWidth:this.__qL?null:F,height:this.__qL?F:100,maxHeight:this.__qL?F:null,minHeight:this.__qL?F:null};
},_applyEnabled:function(G,H){qx.ui.core.Widget.prototype._applyEnabled.call(this,G,H);
this._updateScrollBar();
},_applyMaximum:function(I){this._updateScrollBar();
},_applyPosition:function(J){var content=this.getContentElement();

if(this.__qL){content.scrollToX(J);
}else{content.scrollToY(J);
}},_applyOrientation:function(K,L){var M=this.__qL=K===k;
this.set({allowGrowX:M,allowShrinkX:M,allowGrowY:!M,allowShrinkY:!M});

if(M){this.replaceState(h,k);
}else{this.replaceState(k,h);
}this.getContentElement().setStyles({overflowX:M?i:c,overflowY:M?c:i});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var O=this.__qL;
var P=this.getBounds();

if(!P){return;
}
if(this.isEnabled()){var Q=O?P.width:P.height;
var N=this.getMaximum()+Q;
}else{N=0;
}if((qx.core.Environment.get(d)==r)){var P=this.getBounds();
this.getContentElement().setStyles({left:O?f:g,top:O?g:f,width:(O?P.width:P.width+1)+j,height:(O?P.height+1:P.height)+j});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(O?N:1)+j,height:(O?1:N)+j});
this.scrollTo(this.getPosition());
},scrollTo:function(R){this.setPosition(Math.max(0,Math.min(this.getMaximum(),R)));
},scrollBy:function(S){this.scrollTo(this.getPosition()+S);
},scrollBySteps:function(T){var U=this.getSingleStep();
this.scrollBy(T*U);
},_onScroll:function(e){var W=this.getContentElement();
var V=this.__qL?W.getScrollX():W.getScrollY();
this.setPosition(V);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(n);
}});
})();
(function(){var k="slider",j="horizontal",i="button-begin",h="vertical",g="button-end",f="Integer",d="execute",c="right",b="left",a="down",z="up",y="PositiveNumber",x="changeValue",w="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",v="_applyKnobFactor",u="knob",t="qx.ui.core.scroll.ScrollBar",s="resize",r="_applyOrientation",q="_applyPageStep",o="PositiveInteger",p="scroll",m="_applyPosition",n="scrollbar",l="_applyMaximum";
qx.Class.define(t,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(A){qx.ui.core.Widget.call(this);
this._createChildControl(i);
this._createChildControl(k).addListener(s,this._onResizeSlider,this);
this._createChildControl(g);
if(A!=null){this.setOrientation(A);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:n},orientation:{check:[j,h],init:j,apply:r},maximum:{check:o,apply:l,init:100},position:{check:w,init:0,apply:m,event:p},singleStep:{check:f,init:20},pageStep:{check:f,init:10,apply:q},knobFactor:{check:y,apply:v,nullable:true}},members:{__qN:2,_createChildControlImpl:function(B,C){var D;

switch(B){case k:D=new qx.ui.core.scroll.ScrollSlider();
D.setPageStep(100);
D.setFocusable(false);
D.addListener(x,this._onChangeSliderValue,this);
this._add(D,{flex:1});
break;
case i:D=new qx.ui.form.RepeatButton();
D.setFocusable(false);
D.addListener(d,this._onExecuteBegin,this);
this._add(D);
break;
case g:D=new qx.ui.form.RepeatButton();
D.setFocusable(false);
D.addListener(d,this._onExecuteEnd,this);
this._add(D);
break;
}return D||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,B);
},_applyMaximum:function(E){this.getChildControl(k).setMaximum(E);
},_applyPosition:function(F){this.getChildControl(k).setValue(F);
},_applyKnobFactor:function(G){this.getChildControl(k).setKnobFactor(G);
},_applyPageStep:function(H){this.getChildControl(k).setPageStep(H);
},_applyOrientation:function(I,J){var K=this._getLayout();

if(K){K.dispose();
}if(I===j){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(h,j);
this.getChildControl(i).replaceState(z,b);
this.getChildControl(g).replaceState(a,c);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(j,h);
this.getChildControl(i).replaceState(b,z);
this.getChildControl(g).replaceState(c,a);
}this.getChildControl(k).setOrientation(I);
},scrollTo:function(L){this.getChildControl(k).slideTo(L);
},scrollBy:function(M){this.getChildControl(k).slideBy(M);
},scrollBySteps:function(N){var O=this.getSingleStep();
this.getChildControl(k).slideBy(N*O);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var P=this.getChildControl(k).getChildControl(u);
var S=P.getSizeHint();
var Q=false;
var R=this.getChildControl(k).getInnerSize();

if(this.getOrientation()==h){if(R.height<S.minHeight+this.__qN){Q=true;
}}else{if(R.width<S.minWidth+this.__qN){Q=true;
}}
if(Q){P.exclude();
}else{P.show();
}}}});
})();
(function(){var a="qx.ui.form.IRange";
qx.Interface.define(a,{members:{setMinimum:function(b){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(c){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(d){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(e){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var k="knob",j="horizontal",i="vertical",h="Integer",g="hovered",f="left",d="top",c="mouseup",b="pressed",a="px",V="changeValue",U="interval",T="mousemove",S="resize",R="slider",Q="mousedown",P="PageUp",O="mouseout",N='qx.event.type.Data',M="Left",r="Down",s="Up",p="dblclick",q="qx.ui.form.Slider",n="PageDown",o="mousewheel",l="_applyValue",m="_applyKnobFactor",t="End",u="height",B="Right",z="width",F="_applyOrientation",D="Home",I="mouseover",H="floor",w="_applyMinimum",L="click",K="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()",J="keypress",v="ceil",x="losecapture",y="contextmenu",A="_applyMaximum",C="Number",E="changeMaximum",G="changeMinimum";
qx.Class.define(q,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(W){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(J,this._onKeyPress);
this.addListener(o,this._onMouseWheel);
this.addListener(Q,this._onMouseDown);
this.addListener(c,this._onMouseUp);
this.addListener(x,this._onMouseUp);
this.addListener(S,this._onUpdate);
this.addListener(y,this._onStopEvent);
this.addListener(L,this._onStopEvent);
this.addListener(p,this._onStopEvent);
if(W!=null){this.setOrientation(W);
}else{this.initOrientation();
}},events:{changeValue:N},properties:{appearance:{refine:true,init:R},focusable:{refine:true,init:true},orientation:{check:[j,i],init:j,apply:F},value:{check:K,init:0,apply:l,nullable:true},minimum:{check:h,init:0,apply:w,event:G},maximum:{check:h,init:100,apply:A,event:E},singleStep:{check:h,init:1},pageStep:{check:h,init:10},knobFactor:{check:C,apply:m,nullable:true}},members:{__qO:null,__qP:null,__qQ:null,__qR:null,__qS:null,__qT:null,__qU:null,__qV:null,__qW:null,__qX:null,__qY:null,__ra:null,_forwardStates:{invalid:true},_createChildControlImpl:function(X,Y){var ba;

switch(X){case k:ba=new qx.ui.core.Widget();
ba.addListener(S,this._onUpdate,this);
ba.addListener(I,this._onMouseOver);
ba.addListener(O,this._onMouseOut);
this._add(ba);
break;
}return ba||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,X);
},_onMouseOver:function(e){this.addState(g);
},_onMouseOut:function(e){this.removeState(g);
},_onMouseWheel:function(e){var bb=e.getWheelDelta()>0?1:-1;
this.slideBy(bb*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var bd=this.getOrientation()===j;
var bc=bd?M:s;
var forward=bd?B:r;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case bc:this.slideBack();
break;
case n:this.slidePageForward();
break;
case P:this.slidePageBack();
break;
case D:this.slideToBegin();
break;
case t:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__qR){return;
}var bg=this.__rc;
var be=this.getChildControl(k);
var bf=bg?f:d;
var bi=bg?e.getDocumentLeft():e.getDocumentTop();
var bj=this.__qO=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bf];
var bh=this.__qP=qx.bom.element.Location.get(be.getContainerElement().getDomElement())[bf];

if(e.getTarget()===be){this.__qR=true;

if(!this.__qX){this.__qX=new qx.event.Timer(100);
this.__qX.addListener(U,this._fireValue,this);
}this.__qX.start();
this.__qS=bi+bj-bh;
be.addState(b);
}else{this.__qT=true;
this.__qU=bi<=bh?-1:1;
this.__rd(e);
this._onInterval();
if(!this.__qW){this.__qW=new qx.event.Timer(100);
this.__qW.addListener(U,this._onInterval,this);
}this.__qW.start();
}this.addListener(T,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__qR){this.releaseCapture();
delete this.__qR;
this.__qX.stop();
this._fireValue();
delete this.__qS;
this.getChildControl(k).removeState(b);
if(e.getType()===c){var bl;
var bm;
var bk;

if(this.__rc){bl=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__qO);
bk=qx.bom.element.Location.get(this.getContentElement().getDomElement())[d];
bm=e.getDocumentTop()-(bk+this.getChildControl(k).getBounds().top);
}else{bl=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__qO);
bk=qx.bom.element.Location.get(this.getContentElement().getDomElement())[f];
bm=e.getDocumentLeft()-(bk+this.getChildControl(k).getBounds().left);
}
if(bm<0||bm>this.__qQ||bl<0||bl>this.__qQ){this.getChildControl(k).removeState(g);
}}}else if(this.__qT){this.__qW.stop();
this.releaseCapture();
delete this.__qT;
delete this.__qU;
delete this.__qV;
}this.removeListener(T,this._onMouseMove);
if(e.getType()===c){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__qR){var bo=this.__rc?e.getDocumentLeft():e.getDocumentTop();
var bn=bo-this.__qS;
this.slideTo(this._positionToValue(bn));
}else if(this.__qT){this.__rd(e);
}e.stopPropagation();
},_onInterval:function(e){var bp=this.getValue()+(this.__qU*this.getPageStep());
if(bp<this.getMinimum()){bp=this.getMinimum();
}else if(bp>this.getMaximum()){bp=this.getMaximum();
}var bq=this.__qU==-1;

if((bq&&bp<=this.__qV)||(!bq&&bp>=this.__qV)){bp=this.__qV;
}this.slideTo(bp);
},_onUpdate:function(e){var bs=this.getInnerSize();
var bt=this.getChildControl(k).getBounds();
var br=this.__rc?z:u;
this._updateKnobSize();
this.__rb=bs[br]-bt[br];
this.__qQ=bt[br];
this._updateKnobPosition();
},__rc:false,__rb:0,__rd:function(e){var bu=this.__rc;
var bB=bu?e.getDocumentLeft():e.getDocumentTop();
var bD=this.__qO;
var bv=this.__qP;
var bF=this.__qQ;
var bC=bB-bD;

if(bB>=bv){bC-=bF;
}var bz=this._positionToValue(bC);
var bw=this.getMinimum();
var bx=this.getMaximum();

if(bz<bw){bz=bw;
}else if(bz>bx){bz=bx;
}else{var bA=this.getValue();
var by=this.getPageStep();
var bE=this.__qU<0?H:v;
bz=bA+(Math[bE]((bz-bA)/by)*by);
}if(this.__qV==null||(this.__qU==-1&&bz<=this.__qV)||(this.__qU==1&&bz>=this.__qV)){this.__qV=bz;
}},_positionToValue:function(bG){var bH=this.__rb;
if(bH==null||bH==0){return 0;
}var bJ=bG/bH;

if(bJ<0){bJ=0;
}else if(bJ>1){bJ=1;
}var bI=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(bI*bJ);
},_valueToPosition:function(bK){var bL=this.__rb;

if(bL==null){return 0;
}var bM=this.getMaximum()-this.getMinimum();
if(bM==0){return 0;
}var bK=bK-this.getMinimum();
var bN=bK/bM;

if(bN<0){bN=0;
}else if(bN>1){bN=1;
}return Math.round(bL*bN);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(bO){var bP=this.getChildControl(k).getContainerElement();

if(this.__rc){bP.setStyle(f,bO+a,true);
}else{bP.setStyle(d,bO+a,true);
}},_updateKnobSize:function(){var bR=this.getKnobFactor();

if(bR==null){return;
}var bQ=this.getInnerSize();

if(bQ==null){return;
}if(this.__rc){this.getChildControl(k).setWidth(Math.round(bR*bQ.width));
}else{this.getChildControl(k).setHeight(Math.round(bR*bQ.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(bS){this.slideTo(this.getValue()+bS);
},slideTo:function(bT){if(bT<this.getMinimum()){bT=this.getMinimum();
}else if(bT>this.getMaximum()){bT=this.getMaximum();
}else{bT=this.getMinimum()+Math.round((bT-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(bT);
},_applyOrientation:function(bU,bV){var bW=this.getChildControl(k);
this.__rc=bU===j;
if(this.__rc){this.removeState(i);
bW.removeState(i);
this.addState(j);
bW.addState(j);
bW.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(j);
bW.removeState(j);
this.addState(i);
bW.addState(i);
bW.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(bX,bY){if(bX!=null){this._updateKnobSize();
}else{if(this.__rc){this.getChildControl(k).resetWidth();
}else{this.getChildControl(k).resetHeight();
}}},_applyValue:function(ca,cb){if(ca!=null){this._updateKnobPosition();

if(this.__qR){this.__ra=[ca,cb];
}else{this.fireEvent(V,qx.event.type.Data,[ca,cb]);
}}else{this.resetValue();
}},_fireValue:function(){if(!this.__ra){return;
}var cc=this.__ra;
this.__ra=null;
this.fireEvent(V,qx.event.type.Data,cc);
},_applyMinimum:function(cd,ce){if(this.getValue()<cd){this.setValue(cd);
}this._updateKnobPosition();
},_applyMaximum:function(cf,cg){if(this.getValue()>cf){this.setValue(cf);
}this._updateKnobPosition();
}}});
})();
(function(){var d="horizontal",c="mousewheel",b="qx.ui.core.scroll.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(e){qx.ui.form.Slider.call(this,e);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
},members:{getSizeHint:function(f){var g=qx.ui.form.Slider.prototype.getSizeHint.call(this);
if(this.getOrientation()===d){g.width=0;
}else{g.height=0;
}return g;
}}});
})();
(function(){var a="qx.ui.table.pane.Clipper";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this,new qx.ui.layout.Grow());
this.setMinWidth(0);
},members:{scrollToX:function(b){this.getContentElement().scrollToX(b,false);
},scrollToY:function(c){this.getContentElement().scrollToY(c,true);
}}});
})();
(function(){var g="Integer",f="Escape",d="keypress",c="Enter",b="excluded",a="qx.ui.table.pane.FocusIndicator";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(h){qx.ui.container.Composite.call(this);
this.__re=h;
this.setKeepActive(true);
this.addListener(d,this._onKeyPress,this);
},properties:{visibility:{refine:true,init:b},row:{check:g,nullable:true},column:{check:g,nullable:true}},members:{__re:null,_onKeyPress:function(e){var i=e.getKeyIdentifier();

if(i!==f&&i!==c){e.stopPropagation();
}},moveToCell:function(j,k){if(!this.__re.getShowCellFocusIndicator()&&!this.__re.getTable().getTableModel().isColumnEditable(j)){this.exclude();
return;
}else{this.show();
}
if(j==null){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var l=this.__re.getTablePaneModel().getX(j);

if(l==-1){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var q=this.__re.getTable();
var o=q.getTableColumnModel();
var p=this.__re.getTablePaneModel();
var n=this.__re.getTablePane().getFirstVisibleRow();
var m=q.getRowHeight();
this.setUserBounds(p.getColumnLeft(j)-2,(k-n)*m-2,o.getColumnWidth(j)+3,m+3);
this.show();
this.setRow(k);
this.setColumn(j);
}}}},destruct:function(){this.__re=null;
}});
})();
(function(){var b="Integer",a="qx.ui.table.pane.CellEvent";
qx.Class.define(a,{extend:qx.event.type.Mouse,properties:{row:{check:b,nullable:true},column:{check:b,nullable:true}},members:{init:function(c,d,e,f){d.clone(this);
this.setBubbles(false);

if(e!=null){this.setRow(e);
}else{this.setRow(c._getRowForPagePos(this.getDocumentLeft(),this.getDocumentTop()));
}
if(f!=null){this.setColumn(f);
}else{this.setColumn(c._getColumnForPageX(this.getDocumentLeft()));
}},clone:function(g){var h=qx.event.type.Mouse.prototype.clone.call(this,g);
h.set({row:this.getRow(),column:this.getColumn()});
return h;
}}});
})();
(function(){var a="qx.lang.Number";
qx.Class.define(a,{statics:{isInRange:function(b,c,d){return b>=c&&b<=d;
},isBetweenRange:function(e,f,g){return e>f&&e<g;
},limit:function(h,i,j){if(j!=null&&h>j){return j;
}else if(i!=null&&h<i){return i;
}else{return h;
}}}});
})();
(function(){var h="headerCellRendererChanged",g="visibilityChangedPre",f="Number",e="qx.event.type.Event",d="_applyFirstColumnX",c="Integer",b="qx.ui.table.pane.Model",a="_applyMaxColumnCount";
qx.Class.define(b,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);
this.setTableColumnModel(i);
},events:{"modelChanged":e},statics:{EVENT_TYPE_MODEL_CHANGED:"modelChanged"},properties:{firstColumnX:{check:c,init:0,apply:d},maxColumnCount:{check:f,init:-1,apply:a}},members:{__rf:null,__rg:null,_applyFirstColumnX:function(j,k){this.__rf=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_applyMaxColumnCount:function(l,m){this.__rf=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},setTableColumnModel:function(n){if(this.__rg){this.__rg.removeListener(g,this._onColVisibilityChanged,this);
this.__rg.removeListener(h,this._onColVisibilityChanged,this);
}this.__rg=n;
this.__rg.addListener(g,this._onColVisibilityChanged,this);
this.__rg.addListener(h,this._onHeaderCellRendererChanged,this);
this.__rf=null;
},_onColVisibilityChanged:function(o){this.__rf=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_onHeaderCellRendererChanged:function(p){this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},getColumnCount:function(){if(this.__rf==null){var q=this.getFirstColumnX();
var s=this.getMaxColumnCount();
var r=this.__rg.getVisibleColumnCount();

if(s==-1||(q+s)>r){this.__rf=r-q;
}else{this.__rf=s;
}}return this.__rf;
},getColumnAtX:function(t){var u=this.getFirstColumnX();
return this.__rg.getVisibleColumnAtX(u+t);
},getX:function(v){var w=this.getFirstColumnX();
var y=this.getMaxColumnCount();
var x=this.__rg.getVisibleX(v)-w;

if(x>=0&&(y==-1||x<y)){return x;
}else{return -1;
}},getColumnLeft:function(z){var C=0;
var B=this.getColumnCount();

for(var x=0;x<B;x++){var A=this.getColumnAtX(x);

if(A==z){return C;
}C+=this.__rg.getColumnWidth(A);
}return -1;
},getTotalWidth:function(){var D=0;
var E=this.getColumnCount();

for(var x=0;x<E;x++){var F=this.getColumnAtX(x);
D+=this.__rg.getColumnWidth(F);
}return D;
}},destruct:function(){if(this.__rg){this.__rg.removeListener(g,this._onColVisibilityChanged,this);
this.__rg.removeListener(h,this._onColVisibilityChanged,this);
}this.__rg=null;
}});
})();
(function(){var k="Boolean",j="qx.event.type.Event",i="queued",h="String",g="sending",f="receiving",d="aborted",c="failed",b="nocache",a="completed",P="qx.io.remote.Response",O="POST",N="configured",M="timeout",L="GET",K="Pragma",J="no-url-params-on-post",I="PUT",H="no-cache",G="Cache-Control",r="Content-Type",s="text/plain",p="application/xml",q="application/json",n="text/html",o="application/x-www-form-urlencoded",l="qx.io.remote.Exchange",m="Integer",t="X-Qooxdoo-Response-Type",u="HEAD",y="qx.io.remote.Request",x="_applyResponseType",A="_applyState",z="text/javascript",C="changeState",B="_applyProhibitCaching",w="",F="_applyMethod",E="DELETE",D="boolean";
qx.Class.define(y,{extend:qx.core.Object,construct:function(Q,R,S){qx.core.Object.call(this);
this.__rh={};
this.__ri={};
this.__rj={};
this.__rk={};

if(Q!==undefined){this.setUrl(Q);
}
if(R!==undefined){this.setMethod(R);
}
if(S!==undefined){this.setResponseType(S);
}this.setProhibitCaching(true);
this.__rl=++qx.io.remote.Request.__rl;
},events:{"created":j,"configured":j,"sending":j,"receiving":j,"completed":P,"aborted":j,"failed":P,"timeout":P},statics:{__rl:0,methodAllowsRequestBody:function(T){return (T==O)||(T==I);
}},properties:{url:{check:h,init:w},method:{check:[L,O,I,u,E],apply:F,init:L},asynchronous:{check:k,init:true},data:{check:h,nullable:true},username:{check:h,nullable:true},password:{check:h,nullable:true},state:{check:[N,i,g,f,a,d,M,c],init:N,apply:A,event:C},responseType:{check:[s,z,q,p,n],init:s,apply:x},timeout:{check:m,nullable:true},prohibitCaching:{check:function(v){return typeof v==D||v===J;
},init:true,apply:B},crossDomain:{check:k,init:false},fileUpload:{check:k,init:false},transport:{check:l,nullable:true},useBasicHttpAuth:{check:k,init:false},parseJson:{check:k,init:true}},members:{__rh:null,__ri:null,__rj:null,__rk:null,__rl:null,send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
},abort:function(){qx.io.remote.RequestQueue.getInstance().abort(this);
},reset:function(){switch(this.getState()){case g:case f:this.error("Aborting already sent request!");
case i:this.abort();
break;
}},isConfigured:function(){return this.getState()===N;
},isQueued:function(){return this.getState()===i;
},isSending:function(){return this.getState()===g;
},isReceiving:function(){return this.getState()===f;
},isCompleted:function(){return this.getState()===a;
},isAborted:function(){return this.getState()===d;
},isTimeout:function(){return this.getState()===M;
},isFailed:function(){return this.getState()===c;
},__rm:qx.event.GlobalError.observeMethod(function(e){var U=e.clone();
U.setTarget(this);
this.dispatchEvent(U);
}),_onqueued:function(e){this.setState(i);
this.__rm(e);
},_onsending:function(e){this.setState(g);
this.__rm(e);
},_onreceiving:function(e){this.setState(f);
this.__rm(e);
},_oncompleted:function(e){this.setState(a);
this.__rm(e);
this.dispose();
},_onaborted:function(e){this.setState(d);
this.__rm(e);
this.dispose();
},_ontimeout:function(e){this.setState(M);
this.__rm(e);
this.dispose();
},_onfailed:function(e){this.setState(c);
this.__rm(e);
this.dispose();
},_applyState:function(V,W){},_applyProhibitCaching:function(X,Y){if(!X){this.removeParameter(b);
this.removeRequestHeader(K);
this.removeRequestHeader(G);
return;
}if(X!==J||this.getMethod()!=O){this.setParameter(b,new Date().valueOf());
}else{this.removeParameter(b);
}this.setRequestHeader(K,H);
this.setRequestHeader(G,H);
},_applyMethod:function(ba,bb){if(qx.io.remote.Request.methodAllowsRequestBody(ba)){this.setRequestHeader(r,o);
}else{this.removeRequestHeader(r);
}var bc=this.getProhibitCaching();
this._applyProhibitCaching(bc,bc);
},_applyResponseType:function(bd,be){this.setRequestHeader(t,bd);
},setRequestHeader:function(bf,bg){this.__rh[bf]=bg;
},removeRequestHeader:function(bh){delete this.__rh[bh];
},getRequestHeader:function(bi){return this.__rh[bi]||null;
},getRequestHeaders:function(){return this.__rh;
},setParameter:function(bj,bk,bl){if(bl){this.__rj[bj]=bk;
}else{this.__ri[bj]=bk;
}},removeParameter:function(bm,bn){if(bn){delete this.__rj[bm];
}else{delete this.__ri[bm];
}},getParameter:function(bo,bp){if(bp){return this.__rj[bo]||null;
}else{return this.__ri[bo]||null;
}},getParameters:function(bq){return (bq?this.__rj:this.__ri);
},setFormField:function(br,bs){this.__rk[br]=bs;
},removeFormField:function(bt){delete this.__rk[bt];
},getFormField:function(bu){return this.__rk[bu]||null;
},getFormFields:function(){return this.__rk;
},getSequenceNumber:function(){return this.__rl;
}},destruct:function(){this.setTransport(null);
this.__rh=this.__ri=this.__rj=this.__rk=null;
}});
})();
(function(){var t="Integer",s="aborted",r="_onaborted",q="_on",p="_applyEnabled",o="Boolean",n="sending",m="interval",l="failed",k="qx.io.remote.RequestQueue",c="timeout",j="completed",g="queued",b="__rq",a="io.maxrequests",f="__ro",d="receiving",h="singleton";
qx.Class.define(k,{type:h,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__rn=[];
this.__ro=[];
this.__rp=0;
this.__rq=new qx.event.Timer(500);
this.__rq.addListener(m,this._oninterval,this);
},properties:{enabled:{init:true,check:o,apply:p},maxTotalRequests:{check:t,nullable:true},maxConcurrentRequests:{check:t,init:qx.core.Environment.get(a)},defaultTimeout:{check:t,init:5000}},members:{__rn:null,__ro:null,__rp:null,__rq:null,getRequestQueue:function(){return this.__rn;
},getActiveQueue:function(){return this.__ro;
},_debug:function(){var u;
},_check:function(){this._debug();
if(this.__ro.length==0&&this.__rn.length==0){this.__rq.stop();
}if(!this.getEnabled()){return;
}if(this.__rn.length==0||(this.__rn[0].isAsynchronous()&&this.__ro.length>=this.getMaxConcurrentRequests())){return;
}if(this.getMaxTotalRequests()!=null&&this.__rp>=this.getMaxTotalRequests()){return;
}var v=this.__rn.shift();
var w=new qx.io.remote.Exchange(v);
this.__rp++;
this.__ro.push(w);
this._debug();
w.addListener(n,this._onsending,this);
w.addListener(d,this._onreceiving,this);
w.addListener(j,this._oncompleted,this);
w.addListener(s,this._oncompleted,this);
w.addListener(c,this._oncompleted,this);
w.addListener(l,this._oncompleted,this);
w._start=(new Date).valueOf();
w.send();
if(this.__rn.length>0){this._check();
}},_remove:function(x){qx.lang.Array.remove(this.__ro,x);
x.dispose();
this._check();
},__rr:0,_onsending:function(e){e.getTarget().getRequest()._onsending(e);
},_onreceiving:function(e){e.getTarget().getRequest()._onreceiving(e);
},_oncompleted:function(e){var z=e.getTarget().getRequest();
var y=q+e.getType();
this._remove(e.getTarget());
try{if(z[y]){z[y](e);
}}catch(A){this.error("Request "+z+" handler "+y+" threw an error: ",A);
try{if(z[r]){var event=qx.event.Registration.createEvent(s,qx.event.type.Event);
z[r](event);
}}catch(B){}}},_oninterval:function(e){var I=this.__ro;

if(I.length==0){this.__rq.stop();
return;
}var D=(new Date).valueOf();
var G;
var E;
var H=this.getDefaultTimeout();
var F;
var C;

for(var i=I.length-1;i>=0;i--){G=I[i];
E=G.getRequest();

if(E.isAsynchronous()){F=E.getTimeout();
if(F==0){continue;
}
if(F==null){F=H;
}C=D-G._start;

if(C>F){this.warn("Timeout: transport "+G.toHashCode());
this.warn(C+"ms > "+F+"ms");
G.timeout();
}}}},_applyEnabled:function(J,K){if(J){this._check();
}this.__rq.setEnabled(J);
},add:function(L){L.setState(g);

if(L.isAsynchronous()){this.__rn.push(L);
}else{this.__rn.unshift(L);
}this._check();

if(this.getEnabled()){this.__rq.start();
}},abort:function(M){var N=M.getTransport();

if(N){N.abort();
}else if(qx.lang.Array.contains(this.__rn,M)){qx.lang.Array.remove(this.__rn,M);
}}},destruct:function(){this._disposeArray(f);
this._disposeObjects(b);
this.__rn=null;
}});
})();
(function(){var o="failed",n="sending",m="completed",k="receiving",j="aborted",h="timeout",g="qx.event.type.Event",f="Connection dropped",d="qx.io.remote.Response",c="=",bp="configured",bo="&",bn="Unknown status code. ",bm="qx.io.remote.transport.XmlHttp",bl="qx.io.remote.transport.Abstract",bk="Request-URL too large",bj="MSHTML-specific HTTP status code",bi="Not available",bh="Precondition failed",bg="Server error",v="Moved temporarily",w="qx.io.remote.Exchange",t="Possibly due to a cross-domain request?",u="Bad gateway",r="Gone",s="See other",p="Partial content",q="Server timeout",B="qx.io.remote.transport.Script",C="HTTP version not supported",L="Unauthorized",I="Possibly due to application URL using 'file:' protocol?",T="Multiple choices",O="Payment required",bc="Not implemented",Y="Proxy authentication required",E="Length required",bf="_applyState",be="changeState",bd="Not modified",D="qx.io.remote.Request",G="Connection closed by server",H="Moved permanently",K="_applyImplementation",M="",P="Method not allowed",V="Forbidden",bb="Use proxy",x="Ok",y="Conflict",F="Not found",S="Not acceptable",R="Request time-out",Q="Bad request",X="No content",W="file:",N="qx.io.remote.transport.Iframe",U="Request entity too large",a="Unknown status code",ba="Unsupported media type",z="Gateway time-out",A="created",J="Out of resources",b="undefined";
qx.Class.define(w,{extend:qx.core.Object,construct:function(bq){qx.core.Object.call(this);
this.setRequest(bq);
bq.setTransport(this);
},events:{"sending":g,"receiving":g,"completed":d,"aborted":g,"failed":d,"timeout":d},statics:{typesOrder:[bm,N,B],typesReady:false,typesAvailable:{},typesSupported:{},registerType:function(br,bs){qx.io.remote.Exchange.typesAvailable[bs]=br;
},initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var bu in qx.io.remote.Exchange.typesAvailable){var bt=qx.io.remote.Exchange.typesAvailable[bu];

if(bt.isSupported()){qx.io.remote.Exchange.typesSupported[bu]=bt;
}}qx.io.remote.Exchange.typesReady=true;

if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},canHandle:function(bv,bw,bx){if(!qx.lang.Array.contains(bv.handles.responseTypes,bx)){return false;
}
for(var by in bw){if(!bv.handles[by]){return false;
}}return true;
},_nativeMap:{0:A,1:bp,2:n,3:k,4:m},wasSuccessful:function(bz,bA,bB){if(bB){switch(bz){case null:case 0:return true;
case -1:return bA<4;
default:return typeof bz===b;
}}else{switch(bz){case -1:{};
return bA<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:{};
return bA!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:{};
return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:{};
return false;
default:if(bz>206&&bz<300){return true;
}qx.log.Logger.debug(this,"Unknown status code: "+bz+" ("+bA+")");
return false;
}}},statusCodeToString:function(bC){switch(bC){case -1:return bi;
case 0:var bD=window.location.href;
if(qx.lang.String.startsWith(bD.toLowerCase(),W)){return (bn+I);
}else{return (bn+t);
}break;
case 200:return x;
case 304:return bd;
case 206:return p;
case 204:return X;
case 300:return T;
case 301:return H;
case 302:return v;
case 303:return s;
case 305:return bb;
case 400:return Q;
case 401:return L;
case 402:return O;
case 403:return V;
case 404:return F;
case 405:return P;
case 406:return S;
case 407:return Y;
case 408:return R;
case 409:return y;
case 410:return r;
case 411:return E;
case 412:return bh;
case 413:return U;
case 414:return bk;
case 415:return ba;
case 500:return bg;
case 501:return bc;
case 502:return u;
case 503:return J;
case 504:return z;
case 505:return C;
case 12002:return q;
case 12029:return f;
case 12030:return f;
case 12031:return f;
case 12152:return G;
case 13030:return bj;
default:return a;
}}},properties:{request:{check:D,nullable:true},implementation:{check:bl,nullable:true,apply:K},state:{check:[bp,n,k,m,j,h,o],init:bp,event:be,apply:bf}},members:{send:function(){var bH=this.getRequest();

if(!bH){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var bF=qx.io.remote.Exchange.typesOrder;
var bE=qx.io.remote.Exchange.typesSupported;
var bJ=bH.getResponseType();
var bK={};

if(bH.getAsynchronous()){bK.asynchronous=true;
}else{bK.synchronous=true;
}
if(bH.getCrossDomain()){bK.crossDomain=true;
}
if(bH.getFileUpload()){bK.fileUpload=true;
}for(var bI in bH.getFormFields()){bK.programaticFormFields=true;
break;
}var bL,bG;

for(var i=0,l=bF.length;i<l;i++){bL=bE[bF[i]];

if(bL){if(!qx.io.remote.Exchange.canHandle(bL,bK,bJ)){continue;
}
try{bG=new bL;
this.setImplementation(bG);
bG.setUseBasicHttpAuth(bH.getUseBasicHttpAuth());
bG.send();
return true;
}catch(bM){this.error("Request handler throws error");
this.error(bM);
return;
}}}this.error("There is no transport implementation available to handle this request: "+bH);
},abort:function(){var bN=this.getImplementation();

if(bN){bN.abort();
}else{this.setState(j);
}},timeout:function(){var bQ=this.getImplementation();

if(bQ){var bP=M;

for(var bO in bQ.getParameters()){bP+=bo+bO+c+bQ.getParameters()[bO];
}this.warn("Timeout: implementation "+bQ.toHashCode()+", "+bQ.getUrl()+" ["+bQ.getMethod()+"], "+bP);
bQ.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(h);
}this.__rs();
},__rs:function(){var bR=this.getRequest();

if(bR){bR.setTimeout(0);
}},_onsending:function(e){this.setState(n);
},_onreceiving:function(e){this.setState(k);
},_oncompleted:function(e){this.setState(m);
},_onabort:function(e){this.setState(j);
},_onfailed:function(e){this.setState(o);
},_ontimeout:function(e){this.setState(h);
},_applyImplementation:function(bS,bT){if(bT){bT.removeListener(n,this._onsending,this);
bT.removeListener(k,this._onreceiving,this);
bT.removeListener(m,this._oncompleted,this);
bT.removeListener(j,this._onabort,this);
bT.removeListener(h,this._ontimeout,this);
bT.removeListener(o,this._onfailed,this);
}
if(bS){var bV=this.getRequest();
bS.setUrl(bV.getUrl());
bS.setMethod(bV.getMethod());
bS.setAsynchronous(bV.getAsynchronous());
bS.setUsername(bV.getUsername());
bS.setPassword(bV.getPassword());
bS.setParameters(bV.getParameters(false));
bS.setFormFields(bV.getFormFields());
bS.setRequestHeaders(bV.getRequestHeaders());
if(bS instanceof qx.io.remote.transport.XmlHttp){bS.setParseJson(bV.getParseJson());
}var bY=bV.getData();

if(bY===null){var ca=bV.getParameters(true);
var bX=[];

for(var bU in ca){var bW=ca[bU];

if(bW instanceof Array){for(var i=0;i<bW.length;i++){bX.push(encodeURIComponent(bU)+c+encodeURIComponent(bW[i]));
}}else{bX.push(encodeURIComponent(bU)+c+encodeURIComponent(bW));
}}
if(bX.length>0){bS.setData(bX.join(bo));
}}else{bS.setData(bY);
}bS.setResponseType(bV.getResponseType());
bS.addListener(n,this._onsending,this);
bS.addListener(k,this._onreceiving,this);
bS.addListener(m,this._oncompleted,this);
bS.addListener(j,this._onabort,this);
bS.addListener(h,this._ontimeout,this);
bS.addListener(o,this._onfailed,this);
}},_applyState:function(cb,cc){switch(cb){case n:this.fireEvent(n);
break;
case k:this.fireEvent(k);
break;
case m:case j:case h:case o:var ce=this.getImplementation();

if(!ce){break;
}this.__rs();

if(this.hasListener(cb)){var cf=qx.event.Registration.createEvent(cb,qx.io.remote.Response);

if(cb==m){var cd=ce.getResponseContent();
cf.setContent(cd);
if(cd===null){cb=o;
}}else if(cb==o){cf.setContent(ce.getResponseContent());
}cf.setStatusCode(ce.getStatusCode());
cf.setResponseHeaders(ce.getResponseHeaders());
this.dispatchEvent(cf);
}this.setImplementation(null);
ce.dispose();
break;
}}},environment:{"qx.ioRemoteDebug":false,"qx.ioRemoteDebugData":false},destruct:function(){var cg=this.getImplementation();

if(cg){this.setImplementation(null);
cg.dispose();
}this.setRequest(null);
}});
})();
(function(){var q="qx.event.type.Event",p="String",o="failed",n="timeout",m="created",l="aborted",k="sending",j="configured",i="receiving",h="completed",c="Object",g="Boolean",f="abstract",b="_applyState",a="GET",e="changeState",d="qx.io.remote.transport.Abstract";
qx.Class.define(d,{type:f,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.setRequestHeaders({});
this.setParameters({});
this.setFormFields({});
},events:{"created":q,"configured":q,"sending":q,"receiving":q,"completed":q,"aborted":q,"failed":q,"timeout":q},properties:{url:{check:p,nullable:true},method:{check:p,nullable:true,init:a},asynchronous:{check:g,nullable:true,init:true},data:{check:p,nullable:true},username:{check:p,nullable:true},password:{check:p,nullable:true},state:{check:[m,j,k,i,h,l,n,o],init:m,event:e,apply:b},requestHeaders:{check:c,nullable:true},parameters:{check:c,nullable:true},formFields:{check:c,nullable:true},responseType:{check:p,nullable:true},useBasicHttpAuth:{check:g,nullable:true}},members:{send:function(){throw new Error("send is abstract");
},abort:function(){this.setState(l);
},timeout:function(){this.setState(n);
},failed:function(){this.setState(o);
},setRequestHeader:function(r,s){throw new Error("setRequestHeader is abstract");
},getResponseHeader:function(t){throw new Error("getResponseHeader is abstract");
},getResponseHeaders:function(){throw new Error("getResponseHeaders is abstract");
},getStatusCode:function(){throw new Error("getStatusCode is abstract");
},getStatusText:function(){throw new Error("getStatusText is abstract");
},getResponseText:function(){throw new Error("getResponseText is abstract");
},getResponseXml:function(){throw new Error("getResponseXml is abstract");
},getFetchedLength:function(){throw new Error("getFetchedLength is abstract");
},_applyState:function(u,v){switch(u){case m:this.fireEvent(m);
break;
case j:this.fireEvent(j);
break;
case k:this.fireEvent(k);
break;
case i:this.fireEvent(i);
break;
case h:this.fireEvent(h);
break;
case l:this.fireEvent(l);
break;
case o:this.fireEvent(o);
break;
case n:this.fireEvent(n);
break;
}return true;
}},destruct:function(){this.setRequestHeaders(null);
this.setParameters(null);
this.setFormFields(null);
}});
})();
(function(){var l="=",k="",j="engine.name",h="&",g="application/xml",f="application/json",d="text/html",c="textarea",b="_data_",a="load",G="text/plain",F="text/javascript",E="readystatechange",D="completed",C="?",B="qx.io.remote.transport.Iframe",A="none",z="display",y="gecko",x="frame_",s="aborted",t="pre",q="javascript:void(0)",r="sending",o="form",p="failed",m="mshtml",n="form_",u="opera",v="timeout",w="qx/static/blank.gif";
qx.Class.define(B,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var H=(new Date).valueOf();
var I=x+H;
var J=n+H;
var K;

if((qx.core.Environment.get(j)==m)){K=q;
}this.__rt=qx.bom.Iframe.create({id:I,name:I,src:K});
qx.bom.element.Style.set(this.__rt,z,A);
this.__ru=qx.bom.Element.create(o,{id:J,name:J,target:I});
qx.bom.element.Style.set(this.__ru,z,A);
qx.dom.Element.insertEnd(this.__ru,qx.dom.Node.getBodyElement(document));
this.__rv=qx.bom.Element.create(c,{id:b,name:b});
qx.dom.Element.insertEnd(this.__rv,this.__ru);
qx.dom.Element.insertEnd(this.__rt,qx.dom.Node.getBodyElement(document));
qx.event.Registration.addListener(this.__rt,a,this._onload,this);
this.__rw=qx.lang.Function.listener(this._onreadystatechange,this);
qx.bom.Event.addNativeListener(this.__rt,E,this.__rw);
},statics:{handles:{synchronous:false,asynchronous:true,crossDomain:false,fileUpload:true,programaticFormFields:true,responseTypes:[G,F,f,g,d]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4}},members:{__rv:null,__rx:0,__ru:null,__rt:null,__rw:null,send:function(){var M=this.getMethod();
var O=this.getUrl();
var S=this.getParameters(false);
var R=[];

for(var N in S){var P=S[N];

if(P instanceof Array){for(var i=0;i<P.length;i++){R.push(encodeURIComponent(N)+l+encodeURIComponent(P[i]));
}}else{R.push(encodeURIComponent(N)+l+encodeURIComponent(P));
}}
if(R.length>0){O+=(O.indexOf(C)>=0?h:C)+R.join(h);
}if(this.getData()===null){var S=this.getParameters(true);
var R=[];

for(var N in S){var P=S[N];

if(P instanceof Array){for(var i=0;i<P.length;i++){R.push(encodeURIComponent(N)+l+encodeURIComponent(P[i]));
}}else{R.push(encodeURIComponent(N)+l+encodeURIComponent(P));
}}
if(R.length>0){this.setData(R.join(h));
}}var L=this.getFormFields();

for(var N in L){var Q=document.createElement(c);
Q.name=N;
Q.appendChild(document.createTextNode(L[N]));
this.__ru.appendChild(Q);
}this.__ru.action=O;
this.__ru.method=M;
this.__rv.appendChild(document.createTextNode(this.getData()));
this.__ru.submit();
this.setState(r);
},_onload:qx.event.GlobalError.observeMethod(function(e){if(qx.core.Environment.get(j)==u&&this.getIframeHtmlContent()==k){return;
}
if(this.__ru.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
}),_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__rt.readyState]);
}),_switchReadyState:function(T){switch(this.getState()){case D:case s:case p:case v:this.warn("Ignore Ready State Change");
return;
}while(this.__rx<T){this.setState(qx.io.remote.Exchange._nativeMap[++this.__rx]);
}},setRequestHeader:function(U,V){},getResponseHeader:function(W){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return k;
},getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__rt);
},getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__rt);
},getIframeBody:function(){return qx.bom.Iframe.getBody(this.__rt);
},getIframeTextContent:function(){var X=this.getIframeBody();

if(!X){return null;
}
if(!X.firstChild){return k;
}if(X.firstChild.tagName&&X.firstChild.tagName.toLowerCase()==t){return X.firstChild.innerHTML;
}else{return X.innerHTML;
}},getIframeHtmlContent:function(){var Y=this.getIframeBody();
return Y?Y.innerHTML:null;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==D){return null;
}var ba=this.getIframeTextContent();

switch(this.getResponseType()){case G:{};
return ba;
break;
case d:ba=this.getIframeHtmlContent();
{};
return ba;
break;
case f:ba=this.getIframeHtmlContent();
{};

try{return ba&&ba.length>0?qx.util.Json.parse(ba,false):null;
}catch(bb){return this.error("Could not execute json: ("+ba+")",bb);
}case F:ba=this.getIframeHtmlContent();
{};

try{return ba&&ba.length>0?window.eval(ba):null;
}catch(bc){return this.error("Could not execute javascript: ("+ba+")",bc);
}case g:ba=this.getIframeDocument();
{};
return ba;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,B);
},destruct:function(){if(this.__rt){qx.event.Registration.removeListener(this.__rt,a,this._onload,this);
qx.bom.Event.removeNativeListener(this.__rt,E,this.__rw);
if((qx.core.Environment.get(j)==y)){this.__rt.src=qx.util.ResourceManager.getInstance().toUri(w);
}qx.dom.Element.remove(this.__rt);
}
if(this.__ru){qx.dom.Element.remove(this.__ru);
}this.__rt=this.__ru=this.__rv=null;
}});
})();
(function(){var d="qx.event.handler.Iframe",c="load",b="iframe",a="navigate";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1,navigate:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(e){var f=qx.bom.Iframe.queryCurrentUrl(e);

if(f!==e.$$url){qx.event.Registration.fireEvent(e,a,qx.event.type.Data,[f]);
e.$$url=f;
}qx.event.Registration.fireEvent(e,c);
})},members:{canHandleEvent:function(g,h){return g.tagName.toLowerCase()===b;
},registerEvent:function(i,j,k){},unregisterEvent:function(l,m,n){}},defer:function(o){qx.event.Registration.addHandler(o);
}});
})();
(function(){var h="engine.name",g="load",f="qx.bom.Iframe",e="osx",d="os.name",c="webkit",b="iframe",a="body";
qx.Class.define(f,{statics:{DEFAULT_ATTRIBUTES:{onload:"qx.event.handler.Iframe.onevent(this)",frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(i,j){var i=i?qx.lang.Object.clone(i):{};
var k=qx.bom.Iframe.DEFAULT_ATTRIBUTES;

for(var l in k){if(i[l]==null){i[l]=k[l];
}}return qx.bom.Element.create(b,i,j);
},getWindow:function(m){try{return m.contentWindow;
}catch(n){return null;
}},getDocument:qx.core.Environment.select(h,{"mshtml":function(o){try{var p=this.getWindow(o);
return p?p.document:null;
}catch(q){return null;
}},"default":function(r){try{return r.contentDocument;
}catch(s){return null;
}}}),getBody:function(t){try{var u=this.getDocument(t);
return u?u.getElementsByTagName(a)[0]:null;
}catch(v){return null;
}},setSource:function(w,x){try{if(this.getWindow(w)&&qx.dom.Hierarchy.isRendered(w)){try{if((qx.core.Environment.get(h)==c)&&qx.core.Environment.get(d)==e){var y=this.getWindow(w);

if(y){y.stop();
}}this.getWindow(w).location.replace(x);
}catch(z){w.src=x;
}}else{w.src=x;
}this.__ry(w);
}catch(A){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(B){var C=this.getDocument(B);

try{if(C&&C.location){return C.location.href;
}}catch(D){}return null;
},__ry:function(E){var F=function(){qx.bom.Event.removeNativeListener(E,g,F);
E.$$url=qx.bom.Iframe.queryCurrentUrl(E);
};
qx.bom.Event.addNativeListener(E,g,F);
}}});
})();
(function(){var a="qx.dom.Element";
qx.Class.define(a,{statics:{hasChild:function(parent,b){return b.parentNode===parent;
},hasChildren:function(c){return !!c.firstChild;
},hasChildElements:function(d){d=d.firstChild;

while(d){if(d.nodeType===1){return true;
}d=d.nextSibling;
}return false;
},getParentElement:function(e){return e.parentNode;
},isInDom:function(f,g){if(!g){g=window;
}var h=g.document.getElementsByTagName(f.nodeName);

for(var i=0,l=h.length;i<l;i++){if(h[i]===f){return true;
}}return false;
},insertAt:function(j,parent,k){var m=parent.childNodes[k];

if(m){parent.insertBefore(j,m);
}else{parent.appendChild(j);
}return true;
},insertBegin:function(n,parent){if(parent.firstChild){this.insertBefore(n,parent.firstChild);
}else{parent.appendChild(n);
}},insertEnd:function(o,parent){parent.appendChild(o);
},insertBefore:function(p,q){q.parentNode.insertBefore(p,q);
return true;
},insertAfter:function(r,s){var parent=s.parentNode;

if(s==parent.lastChild){parent.appendChild(r);
}else{return this.insertBefore(r,s.nextSibling);
}return true;
},remove:function(t){if(!t.parentNode){return false;
}t.parentNode.removeChild(t);
return true;
},removeChild:function(u,parent){if(u.parentNode!==parent){return false;
}parent.removeChild(u);
return true;
},removeChildAt:function(v,parent){var w=parent.childNodes[v];

if(!w){return false;
}parent.removeChild(w);
return true;
},replaceChild:function(x,y){if(!y.parentNode){return false;
}y.parentNode.replaceChild(x,y);
return true;
},replaceAt:function(z,A,parent){var B=parent.childNodes[A];

if(!B){return false;
}parent.replaceChild(z,B);
return true;
}}});
})();
(function(){var n=",",m="",k='"',j="string",h="null",g="engine.name",f=':',e="qx.jsonDebugging",d='-',c='\\u00',Q="new Date(Date.UTC(",P="__rD",O='\\\\',N='\\f',M='\\"',L="))",K='T',J="}",I='(',H='.',u="__rL",v='\\r',s="__rB",t=":",q="{",r='\\t',o="__rE",p="]",w="opera",x="[",A="mshtml",z="qx.jsonEncodeUndefined",C='\\b',B="qx.util.Json",E='Z"',D=')',y="__rM",G='\\n',F="__rC";
qx.Class.define(B,{statics:{__rz:null,BEAUTIFYING_INDENT:"  ",BEAUTIFYING_LINE_END:"\n",CONVERT_DATES:null,__rA:{"function":s,"boolean":F,"number":P,"string":o,"object":u,"undefined":y},NUMBER_FORMAT:new qx.util.format.NumberFormat(),__rB:function(R,S){return String(R);
},__rC:function(T,U){return String(T);
},__rD:function(V,W){return isFinite(V)?String(V):h;
},__rE:function(X,Y){var ba;

if(/["\\\x00-\x1f]/.test(X)){ba=X.replace(/([\x00-\x1f\\"])/g,qx.util.Json.__rG);
}else{ba=X;
}return k+ba+k;
},__rF:{'\b':C,'\t':r,'\n':G,'\f':N,'\r':v,'"':M,'\\':O},__rG:function(a,b){var bb=qx.util.Json.__rF[b];

if(bb){return bb;
}bb=b.charCodeAt();
return c+Math.floor(bb/16).toString(16)+(bb%16).toString(16);
},__rH:function(bc,bd){var bf=[],bi=true,bh,be;
var bg=qx.util.Json.__rO;
bf.push(x);

if(bg){qx.util.Json.__rI+=qx.util.Json.BEAUTIFYING_INDENT;
bf.push(qx.util.Json.__rI);
}
for(var i=0,l=bc.length;i<l;i++){be=bc[i];
bh=this.__rA[typeof be];

if(bh){be=this[bh](be,i+m);

if(typeof be==j){if(!bi){bf.push(n);

if(bg){bf.push(qx.util.Json.__rI);
}}bf.push(be);
bi=false;
}}}
if(bg){qx.util.Json.__rI=qx.util.Json.__rI.substring(0,qx.util.Json.__rI.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bf.push(qx.util.Json.__rI);
}bf.push(p);
return bf.join(m);
},__rJ:function(bj,bk){if(!qx.util.Json.CONVERT_DATES){if(bj.toJSON&&qx.core.Environment.get(g)!=w&&qx.core.Environment.get(g)!=A){return k+bj.toJSON()+k;
}var bl=this.NUMBER_FORMAT;
bl.setMinimumIntegerDigits(2);
var bn=bj.getUTCFullYear()+d+bl.format(bj.getUTCMonth()+1)+d+bl.format(bj.getUTCDate())+K+bl.format(bj.getUTCHours())+f+bl.format(bj.getUTCMinutes())+f+bl.format(bj.getUTCSeconds())+H;
bl.setMinimumIntegerDigits(3);
return k+bn+bl.format(bj.getUTCMilliseconds())+E;
}else{var bm=bj.getUTCFullYear()+n+bj.getUTCMonth()+n+bj.getUTCDate()+n+bj.getUTCHours()+n+bj.getUTCMinutes()+n+bj.getUTCSeconds()+n+bj.getUTCMilliseconds();
return Q+bm+L;
}},__rK:function(bo,bp){var bs=[],bu=true,br,bq;
var bt=qx.util.Json.__rO;
bs.push(q);

if(bt){qx.util.Json.__rI+=qx.util.Json.BEAUTIFYING_INDENT;
bs.push(qx.util.Json.__rI);
}
for(var bp in bo){bq=bo[bp];
br=this.__rA[typeof bq];

if(br){bq=this[br](bq,bp);

if(typeof bq==j){if(!bu){bs.push(n);

if(bt){bs.push(qx.util.Json.__rI);
}}bs.push(this.__rE(bp),t,bq);
bu=false;
}}}
if(bt){qx.util.Json.__rI=qx.util.Json.__rI.substring(0,qx.util.Json.__rI.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bs.push(qx.util.Json.__rI);
}bs.push(J);
return bs.join(m);
},__rL:function(bv,bw){if(bv){if(qx.lang.Type.isFunction(bv.toJSON)&&bv.toJSON!==this.__rz){return this.__rN(bv.toJSON(bw),bw);
}else if(qx.lang.Type.isDate(bv)){return this.__rJ(bv,bw);
}else if(qx.lang.Type.isArray(bv)){return this.__rH(bv,bw);
}else if(qx.lang.Type.isObject(bv)){return this.__rK(bv,bw);
}return m;
}return h;
},__rM:function(bx,by){if(qx.core.Environment.get(z)){return h;
}},__rN:function(bz,bA){return this[this.__rA[typeof bz]](bz,bA);
},stringify:function(bB,bC){this.__rO=bC;
this.__rI=this.BEAUTIFYING_LINE_END;
var bD=this.__rN(bB,m);

if(typeof bD!=j){bD=null;
}if(qx.core.Environment.get(e)){qx.log.Logger.debug(this,"JSON request: "+bD);
}return bD;
},parse:function(bE,bF){if(bF===undefined){bF=true;
}
if(qx.core.Environment.get(e)){qx.log.Logger.debug(this,"JSON response: "+bE);
}
if(bF){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(bE.replace(/"(\\.|[^"\\])*"/g,m))){throw new Error("Could not parse JSON string!");
}}
try{var bG=(bE&&bE.length>0)?eval(I+bE+D):null;
return bG;
}catch(bH){throw new Error("Could not evaluate JSON string: "+bH.message);
}}},environment:{"qx.jsonEncodeUndefined":true,"qx.jsonDebugging":false},defer:function(bI){bI.__rz=Date.prototype.toJSON;
}});
})();
(function(){var r="&",q="=",p="?",o="application/json",n="completed",m="text/plain",l="text/javascript",k="qx.io.remote.transport.Script",j="",h="_ScriptTransport_data",c="script",g="timeout",f="_ScriptTransport_",b="_ScriptTransport_id",a="aborted",e="utf-8",d="failed";
qx.Class.define(k,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var s=++qx.io.remote.transport.Script.__rP;

if(s>=2000000000){qx.io.remote.transport.Script.__rP=s=1;
}this.__rQ=null;
this.__rP=s;
},statics:{__rP:0,_instanceRegistry:{},ScriptTransport_PREFIX:f,ScriptTransport_ID_PARAM:b,ScriptTransport_DATA_PARAM:h,handles:{synchronous:false,asynchronous:true,crossDomain:true,fileUpload:false,programaticFormFields:false,responseTypes:[m,l,o]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4},_requestFinished:qx.event.GlobalError.observeMethod(function(t,content){var u=qx.io.remote.transport.Script._instanceRegistry[t];

if(u==null){}else{u._responseContent=content;
u._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}})},members:{__rR:0,__rQ:null,__rP:null,send:function(){var x=this.getUrl();
x+=(x.indexOf(p)>=0?r:p)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+q+this.__rP;
var A=this.getParameters();
var z=[];

for(var w in A){if(w.indexOf(qx.io.remote.transport.Script.ScriptTransport_PREFIX)==0){this.error("Illegal parameter name. The following prefix is used internally by qooxdoo): "+qx.io.remote.transport.Script.ScriptTransport_PREFIX);
}var y=A[w];

if(y instanceof Array){for(var i=0;i<y.length;i++){z.push(encodeURIComponent(w)+q+encodeURIComponent(y[i]));
}}else{z.push(encodeURIComponent(w)+q+encodeURIComponent(y));
}}
if(z.length>0){x+=r+z.join(r);
}var v=this.getData();

if(v!=null){x+=r+qx.io.remote.transport.Script.ScriptTransport_DATA_PARAM+q+encodeURIComponent(v);
}qx.io.remote.transport.Script._instanceRegistry[this.__rP]=this;
this.__rQ=document.createElement(c);
this.__rQ.charset=e;
this.__rQ.src=x;
document.body.appendChild(this.__rQ);
},_switchReadyState:function(B){switch(this.getState()){case n:case a:case d:case g:this.warn("Ignore Ready State Change");
return;
}while(this.__rR<B){this.setState(qx.io.remote.Exchange._nativeMap[++this.__rR]);
}},setRequestHeader:function(C,D){},getResponseHeader:function(E){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return j;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==n){return null;
}
switch(this.getResponseType()){case m:case o:case l:{};
var F=this._responseContent;
return (F===0?0:(F||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,k);
},destruct:function(){if(this.__rQ){delete qx.io.remote.transport.Script._instanceRegistry[this.__rP];
document.body.removeChild(this.__rQ);
}this.__rQ=this._responseContent=null;
}});
})();
(function(){var m="failed",k="completed",j="=",h="aborted",g="sending",f="",d="&",c="engine.name",b="configured",a="timeout",L="application/xml",K="qx.io.remote.transport.XmlHttp",J="application/json",I="text/html",H="receiving",G="text/plain",F="text/javascript",E="?",D="created",C="Boolean",u='Referer',v="engine.version",r='Basic ',t="\n</pre>",p="string",q='Authorization',n="<pre>Could not execute json: \n",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",w="mshtml",x=':',z="parseerror",y="file:",B="webkit",A="object";
qx.Class.define(K,{extend:qx.io.remote.transport.Abstract,statics:{handles:{synchronous:true,asynchronous:true,crossDomain:false,fileUpload:false,programaticFormFields:false,responseTypes:[G,F,J,L,I]},createRequestObject:qx.core.Environment.select(c,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),isSupported:function(){return !!this.createRequestObject();
}},properties:{parseJson:{check:C,init:true}},members:{__rS:false,__rT:0,__rU:null,getRequest:function(){if(this.__rU===null){this.__rU=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__rU.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
}return this.__rU;
},send:function(){this.__rT=0;
var Q=this.getRequest();
var M=this.getMethod();
var T=this.getAsynchronous();
var S=this.getUrl();
var O=(window.location.protocol===y&&!(/^http(s){0,1}\:/.test(S)));
this.__rS=O;
var W=this.getParameters(false);
var U=[];

for(var N in W){var R=W[N];

if(R instanceof Array){for(var i=0;i<R.length;i++){U.push(encodeURIComponent(N)+j+encodeURIComponent(R[i]));
}}else{U.push(encodeURIComponent(N)+j+encodeURIComponent(R));
}}
if(U.length>0){S+=(S.indexOf(E)>=0?d:E)+U.join(d);
}if(this.getData()===null){var W=this.getParameters(true);
var U=[];

for(var N in W){var R=W[N];

if(R instanceof Array){for(var i=0;i<R.length;i++){U.push(encodeURIComponent(N)+j+encodeURIComponent(R[i]));
}}else{U.push(encodeURIComponent(N)+j+encodeURIComponent(R));
}}
if(U.length>0){this.setData(U.join(d));
}}var V=function(X){var bd=o;
var bh=f;
var bb,ba,Y;
var be,bf,bg,bc;
var i=0;

do{bb=X.charCodeAt(i++);
ba=X.charCodeAt(i++);
Y=X.charCodeAt(i++);
be=bb>>2;
bf=((bb&3)<<4)|(ba>>4);
bg=((ba&15)<<2)|(Y>>6);
bc=Y&63;

if(isNaN(ba)){bg=bc=64;
}else if(isNaN(Y)){bc=64;
}bh+=bd.charAt(be)+bd.charAt(bf)+bd.charAt(bg)+bd.charAt(bc);
}while(i<X.length);
return bh;
};
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){Q.open(M,S,T);
Q.setRequestHeader(q,r+V(this.getUsername()+x+this.getPassword()));
}else{Q.open(M,S,T,this.getUsername(),this.getPassword());
}}else{Q.open(M,S,T);
}}catch(bi){this.error("Failed with exception: "+bi);
this.failed();
return;
}if(!(qx.core.Environment.get(c)==B)){Q.setRequestHeader(u,window.location.href);
}var P=this.getRequestHeaders();

for(var N in P){Q.setRequestHeader(N,P[N]);
}try{if(O&&T&&qx.core.Environment.get(c)==w&&qx.core.Environment.get(v)==9){qx.event.Timer.once(function(){Q.send(this.getData());
},this,0);
}else{Q.send(this.getData());
}}catch(bj){if(O){this.failedLocally();
}else{this.error("Failed to send data: "+bj,"send");
this.failed();
}return;
}if(!T){this._onreadystatechange();
}},failedLocally:function(){if(this.getState()===m){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){switch(this.getState()){case k:case h:case m:case a:{};
return;
}var bk=this.getReadyState();

if(bk==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),bk,this.__rS)){if(this.getState()===b){this.setState(g);
}this.failed();
return;
}}if(bk==3&&this.__rT==1){this.setState(qx.io.remote.Exchange._nativeMap[++this.__rT]);
}while(this.__rT<bk){this.setState(qx.io.remote.Exchange._nativeMap[++this.__rT]);
}}),getReadyState:function(){var bl=null;

try{bl=this.getRequest().readyState;
}catch(bm){}return bl;
},setRequestHeader:function(bn,bo){this.getRequestHeaders()[bn]=bo;
},getResponseHeader:function(bp){var bq=null;

try{bq=this.getRequest().getResponseHeader(bp)||null;
}catch(br){}return bq;
},getStringResponseHeaders:function(){var bt=null;

try{var bs=this.getRequest().getAllResponseHeaders();

if(bs){bt=bs;
}}catch(bu){}return bt;
},getResponseHeaders:function(){var bx=this.getStringResponseHeaders();
var by={};

if(bx){var bv=bx.split(/[\r\n]+/g);

for(var i=0,l=bv.length;i<l;i++){var bw=bv[i].match(/^([^:]+)\s*:\s*(.+)$/i);

if(bw){by[bw[1]]=bw[2];
}}}return by;
},getStatusCode:function(){var bz=-1;

try{bz=this.getRequest().status;
if(bz===1223){bz=204;
}}catch(bA){}return bz;
},getStatusText:function(){var bB=f;

try{bB=this.getRequest().statusText;
}catch(bC){}return bB;
},getResponseText:function(){var bD=null;

try{bD=this.getRequest().responseText;
}catch(bE){bD=null;
}return bD;
},getResponseXml:function(){var bH=null;
var bF=this.getStatusCode();
var bG=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(bF,bG,this.__rS)){try{bH=this.getRequest().responseXML;
}catch(bI){}}if(typeof bH==A&&bH!=null){if(!bH.documentElement){var s=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,f);
bH.loadXML(s);
}if(!bH.documentElement){throw new Error("Missing Document Element!");
}
if(bH.documentElement.tagName==z){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return bH;
},getFetchedLength:function(){var bJ=this.getResponseText();
return typeof bJ==p?bJ.length:0;
},getResponseContent:function(){var bK=this.getState();

if(bK!==k&&bK!=m){return null;
}var bM=this.getResponseText();

if(bK==m){return bM;
}
switch(this.getResponseType()){case G:case I:{};
return bM;
case J:{};

try{if(bM&&bM.length>0){var bL;

if(this.getParseJson()){bL=qx.util.Json.parse(bM,false);
bL=(bL===0?0:(bL||null));
}else{bL=bM;
}return bL;
}else{return null;
}}catch(bN){this.error("Could not execute json: ["+bM+"]",bN);
return n+bM+t;
}case F:{};

try{if(bM&&bM.length>0){var bL=window.eval(bM);
return (bL===0?0:(bL||null));
}else{return null;
}}catch(bO){this.error("Could not execute javascript: ["+bM+"]",bO);
return null;
}case L:bM=this.getResponseXml();
{};
return (bM===0?0:(bM||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},_applyState:function(bP,bQ){switch(bP){case D:this.fireEvent(D);
break;
case b:this.fireEvent(b);
break;
case g:this.fireEvent(g);
break;
case H:this.fireEvent(H);
break;
case k:this.fireEvent(k);
break;
case m:this.fireEvent(m);
break;
case h:this.getRequest().abort();
this.fireEvent(h);
break;
case a:this.getRequest().abort();
this.fireEvent(a);
break;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,K);
},destruct:function(){var bR=this.getRequest();

if(bR){bR.onreadystatechange=qx.lang.Function.empty;
switch(bR.readyState){case 1:case 2:case 3:bR.abort();
}}this.__rU=null;
}});
})();
(function(){var c="Integer",b="Object",a="qx.io.remote.Response";
qx.Class.define(a,{extend:qx.event.type.Event,properties:{state:{check:c,nullable:true},statusCode:{check:c,nullable:true},content:{nullable:true},responseHeaders:{check:b,nullable:true}},members:{clone:function(d){var e=qx.event.type.Event.prototype.clone.call(this,d);
e.setType(this.getType());
e.setState(this.getState());
e.setStatusCode(this.getStatusCode());
e.setContent(this.getContent());
e.setResponseHeaders(this.getResponseHeaders());
return e;
},getResponseHeader:function(f){var g=this.getResponseHeaders();

if(g){return g[f]||null;
}return null;
}}});
})();
(function(){var ep="css.gradients",eo="widget",en="atom",em="-css",el="button-frame",ek="css.borderradius",ej="css.boxshadow",ei="main",eh="button",eg="bold",cB="text-selected",cA="image",cz="middle",cy="selected",cx="background-light",cw="label",cv="text-disabled",cu="groupbox",ct="decoration/arrows/down.png",cs="popup",ew="cell",ex="border-invalid",eu="input-disabled",ev="menu-button",es="input",et="input-focused-invalid",eq="toolbar-button",er="spinner",ey="input-focused",ez="list",dH="tooltip",dG="qx/static/blank.gif",dJ="radiobutton",dI="tree-item",dL="combobox",dK="treevirtual-contract",dN="scrollbar",dM="datechooser/nav-button",dE="center",dD="checkbox",u="treevirtual-expand",v="",w="textfield",x="-invalid",y="decoration/arrows/right.png",z="background-application",A="invalid",B="right-top",C="selectbox",D="text-title",eN="icon/16/places/folder-open.png",eM="radiobutton-hovered",eL="group-item",eK="scrollbar/button",eR="right",eQ="combobox/button",eP="virtual-list",eO="icon/16/places/folder.png",eT="radiobutton-checked-focused",eS="text-label",by="decoration/tree/closed.png",bz="table-scroller-header",bw="scrollbar-slider-horizontal",bx="checkbox-hovered",bC="checkbox-checked",bD="decoration/arrows/left.png",bA="radiobutton-checked",bB="button-focused",bu="text-light",bv="menu-slidebar-button",ba="checkbox-undetermined",Y="table-scroller-header-css",bc="text-input",bb="slidebar/button-forward",V="background-splitpane",U="text-hovered",X=".png",W="decoration/tree/open.png",T="default",S="decoration/arrows/down-small.png",bJ="datechooser",bK="slidebar/button-backward",bL="radiobutton-checked-disabled",bM="checkbox-focused",bF="radiobutton-checked-hovered",bG="treevirtual-folder",bH="shadow-popup",bI="icon/16/mimetypes/office-document.png",bN="background-medium",bO="icon/32/places/folder-open.png",bn="icon/22/places/folder-open.png",bm="table",bl="decoration/arrows/up.png",bk="decoration/form/",bj="radiobutton-focused",bi="button-checked",bh="decoration/window/maximize-active-hovered.png",bg="keyboard-focus",br="menu-css",bq="decoration/cursors/",bP="icon/16/apps/office-calendar.png",bQ="slidebar",bR="tooltip-error-arrow",bS="table-scroller-focus-indicator",bT="popup-css",bU="move-frame",bV="nodrop",bW="decoration/table/boolean-true.png",bX="-invalid-css",bY="menu",cJ="app-header",cI="row-layer",cH="text-inactive",cG="move",cN="decoration/window/restore-active-hovered.png",cM="border-separator",cL="shadow-window",cK="tree-folder",cR="window-pane-css",cQ="right.png",dr="checkbox-undetermined-hovered",ds="window-incl-statusbar-css",dp="tabview-page-button-bottom-inactive",dq="tooltip-error",dm="window-css",dn="window-statusbar",dk="button-hovered",dl="decoration/scrollbar/scrollbar-",dz="background-tip",dA="menubar-css",dS="scrollbar-slider-horizontal-disabled",dR="radiobutton-disabled",dU="button-pressed",dT="table-pane",dW="decoration/window/close-active.png",dV="native",dY="button-invalid-shadow",dX="decoration/window/minimize-active-hovered.png",dP="menubar",dO="icon/16/actions/dialog-cancel.png",eG="tabview-page-button-top-inactive",eH="tabview-page-button-left-inactive",eI="menu-slidebar",eJ="toolbar-button-checked",eC="decoration/tree/open-selected.png",eD="decoration/window/minimize-inactive.png",eE="group-item-css",eF="group",eA="tabview-page-button-right-inactive",eB="decoration/window/minimize-active.png",k="decoration/window/restore-inactive.png",j="checkbox-checked-focused",i="splitpane",h="combobox/textfield",g="decoration/window/close-active-hovered.png",f="qx/icon/Tango/16/actions/window-close.png",e="checkbox-pressed",d="button-disabled",c="selected-dragover",b="tooltip-error-css",I="decoration/window/maximize-inactive.png",J="dragover",G="scrollarea",H="scrollbar-vertical",M="decoration/menu/checkbox-invert.gif",N="decoration/toolbar/toolbar-handle-knob.gif",K="icon/22/mimetypes/office-document.png",L="table-header-cell",P="button-checked-focused",Q="up.png",cV="best-fit",cP="pane-css",dd="decoration/tree/closed-selected.png",cY="qx.theme.modern.Appearance",cE="text-active",cC="checkbox-disabled",be="toolbar-button-hovered",cF="decoration/form/checked.png",bp="progressive-table-header",bo="decoration/table/select-column-order.png",cj="decoration/menu/radiobutton.gif",ck="decoration/arrows/forward.png",cl="decoration/table/descending.png",cm="decoration/form/undetermined.png",cn="tree-file",co="window-captionbar-active",cp="checkbox-checked-hovered",cq="scrollbar-slider-vertical",cg="toolbar",ch="alias",cD="decoration/window/restore-active.png",dc="decoration/table/boolean-false.png",db="icon/32/mimetypes/office-document.png",da="tabview-pane",dh="decoration/arrows/rewind.png",dg="top",df="icon/16/actions/dialog-ok.png",de="progressbar-background",cX="table-header-cell-hovered",cW="window-statusbar-css",O="window",bt="text-gray",bs="decoration/menu/radiobutton-invert.gif",cO="text-placeholder",bE="slider",cU="toolbar-css",cT="keep-align",cS="down.png",bd="groupitem-text",dj="tabview-page-button-top-active",R="icon/22/places/folder.png",bf="decoration/window/maximize-active.png",ca="checkbox-checked-pressed",cb="decoration/window/close-inactive.png",cc="tabview-page-button-left-active",cd="toolbar-part",ce="decoration/splitpane/knob-vertical.png",cf=".gif",dC="virtual-row-layer-background-odd",ci="table-statusbar",eb="progressive-table-header-cell-css",ea="window-captionbar-inactive",ed="copy",ec="decoration/arrows/down-invert.png",ef="decoration/menu/checkbox.gif",ee="window-caption-active-text",cr="decoration/splitpane/knob-horizontal.png",dQ="group-css",di="icon/32/places/folder.png",dF="virtual-row-layer-background-even",E="toolbar-separator",F="tabview-page-button-bottom-active",dx="decoration/arrows/up-small.png",dy="decoration/table/ascending.png",dv="decoration/arrows/up-invert.png",dw="small",dt="tabview-page-button-right-active",du="-disabled",a="scrollbar-horizontal",dB="progressbar",s="checkbox-undetermined-focused",r="progressive-table-header-cell",q="menu-separator",p="tabview-pane-css",o="pane",n="htmlarea-background",m="decoration/arrows/right-invert.png",l="left.png",t="icon/16/actions/view-refresh.png";
qx.Theme.define(cY,{appearances:{"widget":{},"root":{style:function(eU){return {backgroundColor:z,textColor:eS,font:T};
}},"label":{style:function(eV){return {textColor:eV.disabled?cv:undefined};
}},"move-frame":{style:function(eW){return {decorator:ei};
}},"resize-frame":bU,"dragdrop-cursor":{style:function(eX){var eY=bV;

if(eX.copy){eY=ed;
}else if(eX.move){eY=cG;
}else if(eX.alias){eY=ch;
}return {source:bq+eY+cf,position:B,offset:[2,16,2,6]};
}},"image":{style:function(fa){return {opacity:!fa.replacement&&fa.disabled?0.3:1};
}},"atom":{},"atom/label":cw,"atom/icon":cA,"popup":{style:function(fb){var fc=qx.core.Environment.get(ej);
return {decorator:fc?bT:ei,backgroundColor:cx,shadow:fc?undefined:bH};
}},"button-frame":{alias:en,style:function(fd){var fh,fg;
var fe=[3,9];

if(fd.checked&&fd.focused&&!fd.inner){fh=P;
fg=undefined;
fe=[1,7];
}else if(fd.disabled){fh=d;
fg=undefined;
}else if(fd.pressed){fh=dU;
fg=U;
}else if(fd.checked){fh=bi;
fg=undefined;
}else if(fd.hovered){fh=dk;
fg=U;
}else if(fd.focused&&!fd.inner){fh=bB;
fg=undefined;
fe=[1,7];
}else{fh=eh;
fg=undefined;
}var ff;
if(qx.core.Environment.get(ek)&&qx.core.Environment.get(ep)){if(fd.invalid&&!fd.disabled){fh+=bX;
}else{fh+=em;
}}else{ff=fd.invalid&&!fd.disabled?dY:undefined;
fe=[2,8];
}return {decorator:fh,textColor:fg,shadow:ff,padding:fe,margin:[1,0]};
}},"button-frame/image":{style:function(fi){return {opacity:!fi.replacement&&fi.disabled?0.5:1};
}},"button":{alias:el,include:el,style:function(fj){return {center:true};
}},"hover-button":{alias:en,include:en,style:function(fk){var fl=fk.hovered?cy:undefined;

if(fl&&qx.core.Environment.get(ep)){fl+=em;
}return {decorator:fl,textColor:fk.hovered?cB:undefined};
}},"splitbutton":{},"splitbutton/button":eh,"splitbutton/arrow":{alias:eh,include:eh,style:function(fm,fn){return {icon:ct,padding:[fn.padding[0],fn.padding[1]-6],marginLeft:1};
}},"checkbox":{alias:en,style:function(fo){var fp=qx.core.Environment.get(ep)&&qx.core.Environment.get(ej);
var fr;

if(fp){if(fo.checked){fr=cF;
}else if(fo.undetermined){fr=cm;
}else{fr=dG;
}}else{if(fo.checked){if(fo.disabled){fr=bC;
}else if(fo.focused){fr=j;
}else if(fo.pressed){fr=ca;
}else if(fo.hovered){fr=cp;
}else{fr=bC;
}}else if(fo.undetermined){if(fo.disabled){fr=ba;
}else if(fo.focused){fr=s;
}else if(fo.hovered){fr=dr;
}else{fr=ba;
}}else if(!fo.disabled){if(fo.focused){fr=bM;
}else if(fo.pressed){fr=e;
}else if(fo.hovered){fr=bx;
}}fr=fr||dD;
var fq=fo.invalid&&!fo.disabled?x:v;
fr=bk+fr+fq+X;
}return {icon:fr,minWidth:fp?14:undefined,gap:fp?8:6};
}},"checkbox/icon":{style:function(fs){var fu=qx.core.Environment.get(ep)&&qx.core.Environment.get(ej);

if(!fu){return {opacity:!fs.replacement&&fs.disabled?0.3:1};
}var fv;

if(fs.disabled){fv=cC;
}else if(fs.focused){fv=bM;
}else if(fs.hovered){fv=bx;
}else{fv=dD;
}fv+=fs.invalid&&!fs.disabled?x:v;
var ft;
if(fs.undetermined){ft=[2,0];
}return {decorator:fv,padding:ft,width:12,height:10};
}},"radiobutton":{alias:en,style:function(fw){var fx=qx.core.Environment.get(ek)&&qx.core.Environment.get(ej);
var fz;

if(fx){fz=dG;
}else{if(fw.checked&&fw.focused){fz=eT;
}else if(fw.checked&&fw.disabled){fz=bL;
}else if(fw.checked&&fw.hovered){fz=bF;
}else if(fw.checked){fz=bA;
}else if(fw.focused){fz=bj;
}else if(fw.hovered){fz=eM;
}else{fz=dJ;
}var fy=fw.invalid&&!fw.disabled?x:v;
fz=bk+fz+fy+X;
}return {icon:fz,gap:fx?8:6};
}},"radiobutton/icon":{style:function(fA){var fB=qx.core.Environment.get(ek)&&qx.core.Environment.get(ej);

if(!fB){return {opacity:!fA.replacement&&fA.disabled?0.3:1};
}var fC;

if(fA.disabled&&!fA.checked){fC=dR;
}else if(fA.checked&&fA.focused){fC=eT;
}else if(fA.checked&&fA.disabled){fC=bL;
}else if(fA.checked&&fA.hovered){fC=bF;
}else if(fA.checked){fC=bA;
}else if(fA.focused){fC=bj;
}else if(fA.hovered){fC=eM;
}else{fC=dJ;
}fC+=fA.invalid&&!fA.disabled?x:v;
return {decorator:fC,width:12,height:10};
}},"textfield":{style:function(fD){var fI;
var fG=!!fD.focused;
var fH=!!fD.invalid;
var fE=!!fD.disabled;

if(fG&&fH&&!fE){fI=et;
}else if(fG&&!fH&&!fE){fI=ey;
}else if(fE){fI=eu;
}else if(!fG&&fH&&!fE){fI=ex;
}else{fI=es;
}
if(qx.core.Environment.get(ep)){fI+=em;
}var fF;

if(fD.disabled){fF=cv;
}else if(fD.showingPlaceholder){fF=cO;
}else{fF=bc;
}return {decorator:fI,padding:[2,4,1],textColor:fF};
}},"textarea":{include:w,style:function(fJ){return {padding:4};
}},"spinner":{style:function(fK){var fO;
var fM=!!fK.focused;
var fN=!!fK.invalid;
var fL=!!fK.disabled;

if(fM&&fN&&!fL){fO=et;
}else if(fM&&!fN&&!fL){fO=ey;
}else if(fL){fO=eu;
}else if(!fM&&fN&&!fL){fO=ex;
}else{fO=es;
}
if(qx.core.Environment.get(ep)){fO+=em;
}return {decorator:fO};
}},"spinner/textfield":{style:function(fP){return {marginRight:2,padding:[2,4,1],textColor:fP.disabled?cv:bc};
}},"spinner/upbutton":{alias:el,include:el,style:function(fQ,fR){return {icon:dx,padding:[fR.padding[0]-1,fR.padding[1]-5],shadow:undefined};
}},"spinner/downbutton":{alias:el,include:el,style:function(fS,fT){return {icon:S,padding:[fT.padding[0]-1,fT.padding[1]-5],shadow:undefined};
}},"datefield":dL,"datefield/button":{alias:eQ,include:eQ,style:function(fU){return {icon:bP,padding:[0,3],decorator:undefined};
}},"datefield/textfield":h,"datefield/list":{alias:bJ,include:bJ,style:function(fV){return {decorator:undefined};
}},"groupbox":{style:function(fW){return {legendPosition:dg};
}},"groupbox/legend":{alias:en,style:function(fX){return {padding:[1,0,1,4],textColor:fX.invalid?A:D,font:eg};
}},"groupbox/frame":{style:function(fY){var ga=qx.core.Environment.get(ek);
return {padding:ga?10:12,margin:ga?1:undefined,decorator:ga?dQ:eF};
}},"check-groupbox":cu,"check-groupbox/legend":{alias:dD,include:dD,style:function(gb){return {padding:[1,0,1,4],textColor:gb.invalid?A:D,font:eg};
}},"radio-groupbox":cu,"radio-groupbox/legend":{alias:dJ,include:dJ,style:function(gc){return {padding:[1,0,1,4],textColor:gc.invalid?A:D,font:eg};
}},"scrollarea":{style:function(gd){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(ge){return {backgroundColor:z};
}},"scrollarea/pane":eo,"scrollarea/scrollbar-x":dN,"scrollarea/scrollbar-y":dN,"scrollbar":{style:function(gf){if(gf[dV]){return {};
}var gg=qx.core.Environment.get(ep);
var gh=gf.horizontal?a:H;

if(gg){gh+=em;
}return {width:gf.horizontal?undefined:16,height:gf.horizontal?16:undefined,decorator:gh,padding:1};
}},"scrollbar/slider":{alias:bE,style:function(gi){return {padding:gi.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:el,style:function(gj){var gk=qx.core.Environment.get(ep);
var gl=gj.horizontal?bw:cq;

if(gj.disabled){gl+=du;
}
if(gk){gl+=em;
}return {decorator:gl,minHeight:gj.horizontal?undefined:9,minWidth:gj.horizontal?9:undefined,padding:undefined};
}},"scrollbar/button":{alias:el,include:el,style:function(gm){var gp=dl;

if(gm.left){gp+=l;
}else if(gm.right){gp+=cQ;
}else if(gm.up){gp+=Q;
}else{gp+=cS;
}var go=qx.core.Environment.get(ep);

if(gm.left||gm.right){var gn=gm.left?3:4;
return {padding:go?[3,0,3,gn]:[2,0,2,gn],icon:gp,width:15,height:14};
}else{return {padding:go?3:[3,2],icon:gp,width:14,height:15};
}}},"scrollbar/button-begin":eK,"scrollbar/button-end":eK,"slider":{style:function(gq){var gu;
var gs=!!gq.focused;
var gt=!!gq.invalid;
var gr=!!gq.disabled;

if(gs&&gt&&!gr){gu=et;
}else if(gs&&!gt&&!gr){gu=ey;
}else if(gr){gu=eu;
}else if(!gs&&gt&&!gr){gu=ex;
}else{gu=es;
}
if(qx.core.Environment.get(ep)){gu+=em;
}return {decorator:gu};
}},"slider/knob":{include:el,style:function(gv){return {decorator:gv.disabled?dS:bw,shadow:undefined,height:14,width:14,padding:0};
}},"list":{alias:G,style:function(gw){var gA;
var gy=!!gw.focused;
var gz=!!gw.invalid;
var gx=!!gw.disabled;

if(gy&&gz&&!gx){gA=et;
}else if(gy&&!gz&&!gx){gA=ey;
}else if(gx){gA=eu;
}else if(!gy&&gz&&!gx){gA=ex;
}else{gA=es;
}
if(qx.core.Environment.get(ep)){gA+=em;
}return {backgroundColor:cx,decorator:gA};
}},"list/pane":eo,"listitem":{alias:en,style:function(gB){var gC;

if(gB.dragover){gC=gB.selected?c:J;
}else{gC=gB.selected?cy:undefined;

if(gC&&qx.core.Environment.get(ep)){gC+=em;
}}return {padding:gB.dragover?[4,4,2,4]:4,textColor:gB.selected?cB:undefined,decorator:gC};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:el,include:el,style:function(gD){return {padding:5,center:true,icon:gD.vertical?ct:y};
}},"slidebar/button-backward":{alias:el,include:el,style:function(gE){return {padding:5,center:true,icon:gE.vertical?bl:bD};
}},"tabview":{style:function(gF){return {contentPadding:16};
}},"tabview/bar":{alias:bQ,style:function(gG){var gH={marginBottom:gG.barTop?-1:0,marginTop:gG.barBottom?-4:0,marginLeft:gG.barRight?-3:0,marginRight:gG.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(gG.barTop||gG.barBottom){gH.paddingLeft=5;
gH.paddingRight=7;
}else{gH.paddingTop=5;
gH.paddingBottom=7;
}return gH;
}},"tabview/bar/button-forward":{include:bb,alias:bb,style:function(gI){if(gI.barTop||gI.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:bK,alias:bK,style:function(gJ){if(gJ.barTop||gJ.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(gK){var gL=qx.core.Environment.get(ep)&&qx.core.Environment.get(ek);
return {decorator:gL?p:da,minHeight:100,marginBottom:gK.barBottom?-1:0,marginTop:gK.barTop?-1:0,marginLeft:gK.barLeft?-1:0,marginRight:gK.barRight?-1:0};
}},"tabview-page":{alias:eo,include:eo,style:function(gM){var gN=qx.core.Environment.get(ep)&&qx.core.Environment.get(ek);
return {padding:gN?[4,3]:undefined};
}},"tabview-page/button":{alias:en,style:function(gO){var gV,gR=0;
var gU=0,gP=0,gS=0,gT=0;
var gQ=qx.core.Environment.get(ek)&&qx.core.Environment.get(ej)&&qx.core.Environment.get(ep);

if(gO.checked){if(gO.barTop){gV=dj;
gR=gQ?[5,11]:[6,14];
gS=gO.firstTab?0:-5;
gT=gO.lastTab?0:-5;
}else if(gO.barBottom){gV=F;
gR=gQ?[5,11]:[6,14];
gS=gO.firstTab?0:-5;
gT=gO.lastTab?0:-5;
gU=3;
}else if(gO.barRight){gV=dt;
gR=gQ?[5,10]:[6,13];
gU=gO.firstTab?0:-5;
gP=gO.lastTab?0:-5;
gS=2;
}else{gV=cc;
gR=gQ?[5,10]:[6,13];
gU=gO.firstTab?0:-5;
gP=gO.lastTab?0:-5;
}}else{if(gO.barTop){gV=eG;
gR=gQ?[3,9]:[4,10];
gU=4;
gS=gO.firstTab?5:1;
gT=1;
}else if(gO.barBottom){gV=dp;
gR=gQ?[3,9]:[4,10];
gP=4;
gS=gO.firstTab?5:1;
gT=1;
gU=3;
}else if(gO.barRight){gV=eA;
gR=gQ?[3,9]:[4,10];
gT=5;
gU=gO.firstTab?5:1;
gP=1;
gS=3;
}else{gV=eH;
gR=gQ?[3,9]:[4,10];
gS=5;
gU=gO.firstTab?5:1;
gP=1;
gT=1;
}}
if(gV&&gQ){gV+=em;
}return {zIndex:gO.checked?10:5,decorator:gV,padding:gR,marginTop:gU,marginBottom:gP,marginLeft:gS,marginRight:gT,textColor:gO.checked?cE:cH};
}},"tabview-page/button/label":{alias:cw,style:function(gW){return {padding:[0,1,0,1],margin:gW.focused?0:1,decorator:gW.focused?bg:undefined};
}},"tabview-page/button/close-button":{alias:en,style:function(gX){return {icon:f};
}},"toolbar":{style:function(gY){var ha=qx.core.Environment.get(ep);
return {decorator:ha?cU:cg,spacing:2};
}},"toolbar/part":{style:function(hb){return {decorator:cd,spacing:2};
}},"toolbar/part/container":{style:function(hc){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(hd){return {source:N,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:en,style:function(he){var hg;

if(he.pressed||(he.checked&&!he.hovered)||(he.checked&&he.disabled)){hg=eJ;
}else if(he.hovered&&!he.disabled){hg=be;
}var hf=qx.core.Environment.get(ep)&&qx.core.Environment.get(ek);

if(hf&&hg){hg+=em;
}return {marginTop:2,marginBottom:2,padding:(he.pressed||he.checked||he.hovered)&&!he.disabled||(he.disabled&&he.checked)?3:5,decorator:hg};
}},"toolbar-menubutton":{alias:eq,include:eq,style:function(hh){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:cA,include:cA,style:function(hi){return {source:S};
}},"toolbar-splitbutton":{style:function(hj){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:eq,include:eq,style:function(hk){return {icon:ct,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:eq,include:eq,style:function(hl){if(hl.pressed||hl.checked||(hl.hovered&&!hl.disabled)){var hm=1;
}else{var hm=3;
}return {padding:hm,icon:ct,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(hn){return {decorator:E,margin:7};
}},"tree":ez,"tree-item":{style:function(ho){var hp=ho.selected?cy:undefined;

if(hp&&qx.core.Environment.get(ep)){hp+=em;
}return {padding:[2,6],textColor:ho.selected?cB:undefined,decorator:hp};
}},"tree-item/icon":{include:cA,style:function(hq){return {paddingRight:5};
}},"tree-item/label":cw,"tree-item/open":{include:cA,style:function(hr){var hs;

if(hr.selected&&hr.opened){hs=eC;
}else if(hr.selected&&!hr.opened){hs=dd;
}else if(hr.opened){hs=W;
}else{hs=by;
}return {padding:[0,5,0,2],source:hs};
}},"tree-folder":{include:dI,alias:dI,style:function(ht){var hv,hu;

if(ht.small){hv=ht.opened?eN:eO;
hu=eN;
}else if(ht.large){hv=ht.opened?bO:di;
hu=bO;
}else{hv=ht.opened?bn:R;
hu=bn;
}return {icon:hv,iconOpened:hu};
}},"tree-file":{include:dI,alias:dI,style:function(hw){return {icon:hw.small?bI:hw.large?db:K};
}},"treevirtual":bm,"treevirtual-folder":{style:function(hx){return {icon:hx.opened?eN:eO};
}},"treevirtual-file":{include:bG,alias:bG,style:function(hy){return {icon:bI};
}},"treevirtual-line":{style:function(hz){return {icon:dG};
}},"treevirtual-contract":{style:function(hA){return {icon:W,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(hB){return {icon:by,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":dK,"treevirtual-only-expand":u,"treevirtual-start-contract":dK,"treevirtual-start-expand":u,"treevirtual-end-contract":dK,"treevirtual-end-expand":u,"treevirtual-cross-contract":dK,"treevirtual-cross-expand":u,"treevirtual-end":{style:function(hC){return {icon:dG};
}},"treevirtual-cross":{style:function(hD){return {icon:dG};
}},"tooltip":{include:cs,style:function(hE){return {backgroundColor:dz,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":en,"tooltip-error":{include:dH,style:function(hF){var hG=qx.core.Environment.get(ek)&&qx.core.Environment.get(ej);
return {textColor:cB,backgroundColor:undefined,placeMethod:eo,offset:[0,0,0,14],marginTop:-2,position:B,showTimeout:100,hideTimeout:10000,decorator:hG?b:dq,shadow:bR,font:eg,padding:hG?3:undefined};
}},"tooltip-error/atom":en,"window":{style:function(hH){var hJ=qx.core.Environment.get(ek)&&qx.core.Environment.get(ep)&&qx.core.Environment.get(ej);
var hK;
var hI;

if(hJ){if(hH.showStatusbar){hK=ds;
}else{hK=dm;
}}else{hI=cL;
}return {decorator:hK,shadow:hI,contentPadding:[10,10,10,10],margin:[0,5,5,0]};
}},"window/pane":{style:function(hL){var hM=qx.core.Environment.get(ek)&&qx.core.Environment.get(ep)&&qx.core.Environment.get(ej);
return {decorator:hM?cR:O};
}},"window/captionbar":{style:function(hN){var hO=qx.core.Environment.get(ek)&&qx.core.Environment.get(ep)&&qx.core.Environment.get(ej);
var hP=hN.active?co:ea;

if(hO){hP+=em;
}return {decorator:hP,textColor:hN.active?ee:bt,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(hQ){return {margin:[5,0,3,6]};
}},"window/title":{style:function(hR){return {alignY:cz,font:eg,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:en,style:function(hS){return {icon:hS.active?hS.hovered?dX:eB:eD,margin:[4,8,2,0]};
}},"window/restore-button":{alias:en,style:function(hT){return {icon:hT.active?hT.hovered?cN:cD:k,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:en,style:function(hU){return {icon:hU.active?hU.hovered?bh:bf:I,margin:[4,8,2,0]};
}},"window/close-button":{alias:en,style:function(hV){return {icon:hV.active?hV.hovered?g:dW:cb,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(hW){var hX=qx.core.Environment.get(ek)&&qx.core.Environment.get(ep)&&qx.core.Environment.get(ej);
return {padding:[2,6],decorator:hX?cW:dn,minHeight:18};
}},"window/statusbar-text":{style:function(hY){return {font:dw};
}},"iframe":{style:function(ia){return {decorator:ei};
}},"resizer":{style:function(ib){var ic=qx.core.Environment.get(ej)&&qx.core.Environment.get(ek)&&qx.core.Environment.get(ep);
return {decorator:ic?cP:o};
}},"splitpane":{style:function(id){return {decorator:i};
}},"splitpane/splitter":{style:function(ie){return {width:ie.horizontal?3:undefined,height:ie.vertical?3:undefined,backgroundColor:V};
}},"splitpane/splitter/knob":{style:function(ig){return {source:ig.horizontal?cr:ce};
}},"splitpane/slider":{style:function(ih){return {width:ih.horizontal?3:undefined,height:ih.vertical?3:undefined,backgroundColor:V};
}},"selectbox":el,"selectbox/atom":en,"selectbox/popup":cs,"selectbox/list":{alias:ez},"selectbox/arrow":{include:cA,style:function(ii){return {source:ct,paddingLeft:5};
}},"datechooser":{style:function(ij){var io;
var il=!!ij.focused;
var im=!!ij.invalid;
var ik=!!ij.disabled;

if(il&&im&&!ik){io=et;
}else if(il&&!im&&!ik){io=ey;
}else if(ik){io=eu;
}else if(!il&&im&&!ik){io=ex;
}else{io=es;
}
if(qx.core.Environment.get(ep)){io+=em;
}return {padding:2,decorator:io,backgroundColor:cx};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:el,alias:el,style:function(ip){var iq={padding:[2,4],shadow:undefined};

if(ip.lastYear){iq.icon=dh;
iq.marginRight=1;
}else if(ip.lastMonth){iq.icon=bD;
}else if(ip.nextYear){iq.icon=ck;
iq.marginLeft=1;
}else if(ip.nextMonth){iq.icon=y;
}return iq;
}},"datechooser/last-year-button-tooltip":dH,"datechooser/last-month-button-tooltip":dH,"datechooser/next-year-button-tooltip":dH,"datechooser/next-month-button-tooltip":dH,"datechooser/last-year-button":dM,"datechooser/last-month-button":dM,"datechooser/next-month-button":dM,"datechooser/next-year-button":dM,"datechooser/month-year-label":{style:function(ir){return {font:eg,textAlign:dE,textColor:ir.disabled?cv:undefined};
}},"datechooser/date-pane":{style:function(is){return {textColor:is.disabled?cv:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(it){return {textColor:it.disabled?cv:it.weekend?bu:undefined,textAlign:dE,paddingTop:2,backgroundColor:bN};
}},"datechooser/week":{style:function(iu){return {textAlign:dE,padding:[2,4],backgroundColor:bN};
}},"datechooser/day":{style:function(iv){var iw=iv.disabled?undefined:iv.selected?cy:undefined;

if(iw&&qx.core.Environment.get(ep)){iw+=em;
}return {textAlign:dE,decorator:iw,textColor:iv.disabled?cv:iv.selected?cB:iv.otherMonth?bu:undefined,font:iv.today?eg:undefined,padding:[2,4]};
}},"combobox":{style:function(ix){var iB;
var iz=!!ix.focused;
var iA=!!ix.invalid;
var iy=!!ix.disabled;

if(iz&&iA&&!iy){iB=et;
}else if(iz&&!iA&&!iy){iB=ey;
}else if(iy){iB=eu;
}else if(!iz&&iA&&!iy){iB=ex;
}else{iB=es;
}
if(qx.core.Environment.get(ep)){iB+=em;
}return {decorator:iB};
}},"combobox/popup":cs,"combobox/list":{alias:ez},"combobox/button":{include:el,alias:el,style:function(iC,iD){var iE={icon:ct,padding:[iD.padding[0],iD.padding[1]-6],shadow:undefined,margin:undefined};

if(iC.selected){iE.decorator=bB;
}return iE;
}},"combobox/textfield":{include:w,style:function(iF){return {decorator:undefined};
}},"menu":{style:function(iG){var iH=qx.core.Environment.get(ep)&&qx.core.Environment.get(ej);
var iI={decorator:iH?br:bY,shadow:iH?undefined:bH,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:iG.submenu||iG.contextmenu?cV:cT};

if(iG.submenu){iI.position=B;
iI.offset=[-2,-3];
}return iI;
}},"menu/slidebar":eI,"menu-slidebar":eo,"menu-slidebar-button":{style:function(iJ){var iK=iJ.hovered?cy:undefined;

if(iK&&qx.core.Environment.get(ep)){iK+=em;
}return {decorator:iK,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:bv,style:function(iL){return {icon:iL.hovered?dv:bl};
}},"menu-slidebar/button-forward":{include:bv,style:function(iM){return {icon:iM.hovered?ec:ct};
}},"menu-separator":{style:function(iN){return {height:0,decorator:q,margin:[4,2]};
}},"menu-button":{alias:en,style:function(iO){var iP=iO.selected?cy:undefined;

if(iP&&qx.core.Environment.get(ep)){iP+=em;
}return {decorator:iP,textColor:iO.selected?cB:undefined,padding:[4,6]};
}},"menu-button/icon":{include:cA,style:function(iQ){return {alignY:cz};
}},"menu-button/label":{include:cw,style:function(iR){return {alignY:cz,padding:1};
}},"menu-button/shortcut":{include:cw,style:function(iS){return {alignY:cz,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:cA,style:function(iT){return {source:iT.selected?m:y,alignY:cz};
}},"menu-checkbox":{alias:ev,include:ev,style:function(iU){return {icon:!iU.checked?undefined:iU.selected?M:ef};
}},"menu-radiobutton":{alias:ev,include:ev,style:function(iV){return {icon:!iV.checked?undefined:iV.selected?bs:cj};
}},"menubar":{style:function(iW){var iX=qx.core.Environment.get(ep);
return {decorator:iX?dA:dP};
}},"menubar-button":{alias:en,style:function(iY){var ja=(iY.pressed||iY.hovered)&&!iY.disabled?cy:undefined;

if(ja&&qx.core.Environment.get(ep)){ja+=em;
}return {decorator:ja,textColor:iY.pressed||iY.hovered?cB:undefined,padding:[3,8]};
}},"colorselector":eo,"colorselector/control-bar":eo,"colorselector/control-pane":eo,"colorselector/visual-pane":cu,"colorselector/preset-grid":eo,"colorselector/colorbucket":{style:function(jb){return {decorator:ei,width:16,height:16};
}},"colorselector/preset-field-set":cu,"colorselector/input-field-set":cu,"colorselector/preview-field-set":cu,"colorselector/hex-field-composite":eo,"colorselector/hex-field":w,"colorselector/rgb-spinner-composite":eo,"colorselector/rgb-spinner-red":er,"colorselector/rgb-spinner-green":er,"colorselector/rgb-spinner-blue":er,"colorselector/hsb-spinner-composite":eo,"colorselector/hsb-spinner-hue":er,"colorselector/hsb-spinner-saturation":er,"colorselector/hsb-spinner-brightness":er,"colorselector/preview-content-old":{style:function(jc){return {decorator:ei,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(jd){return {decorator:ei,backgroundColor:cx,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(je){return {decorator:ei,margin:5};
}},"colorselector/brightness-field":{style:function(jf){return {decorator:ei,margin:[5,7]};
}},"colorselector/hue-saturation-pane":eo,"colorselector/hue-saturation-handle":eo,"colorselector/brightness-pane":eo,"colorselector/brightness-handle":eo,"colorpopup":{alias:cs,include:cs,style:function(jg){return {padding:5,backgroundColor:z};
}},"colorpopup/field":{style:function(jh){return {decorator:ei,margin:2,width:14,height:14,backgroundColor:cx};
}},"colorpopup/selector-button":eh,"colorpopup/auto-button":eh,"colorpopup/preview-pane":cu,"colorpopup/current-preview":{style:function(ji){return {height:20,padding:4,marginLeft:4,decorator:ei,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(jj){return {height:20,padding:4,marginRight:4,decorator:ei,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:eh,include:eh,style:function(jk){return {icon:df};
}},"colorpopup/colorselector-cancelbutton":{alias:eh,include:eh,style:function(jl){return {icon:dO};
}},"table":{alias:eo,style:function(jm){return {decorator:bm};
}},"table/statusbar":{style:function(jn){return {decorator:ci,padding:[0,2]};
}},"table/column-button":{alias:el,style:function(jo){var jp=qx.core.Environment.get(ep);
return {decorator:jp?Y:bz,padding:3,icon:bo};
}},"table-column-reset-button":{include:ev,alias:ev,style:function(){return {icon:t};
}},"table-scroller":eo,"table-scroller/scrollbar-x":dN,"table-scroller/scrollbar-y":dN,"table-scroller/header":{style:function(jq){var jr=qx.core.Environment.get(ep);
return {decorator:jr?Y:bz};
}},"table-scroller/pane":{style:function(js){return {backgroundColor:dT};
}},"table-scroller/focus-indicator":{style:function(jt){return {decorator:bS};
}},"table-scroller/resize-line":{style:function(ju){return {backgroundColor:cM,width:2};
}},"table-header-cell":{alias:en,style:function(jv){return {minWidth:13,minHeight:20,padding:jv.hovered?[3,4,2,4]:[3,4],decorator:jv.hovered?cX:L,sortIcon:jv.sorted?(jv.sortedAscending?dy:cl):undefined};
}},"table-header-cell/label":{style:function(jw){return {minWidth:0,alignY:cz,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(jx){return {alignY:cz,alignX:eR};
}},"table-header-cell/icon":{style:function(jy){return {minWidth:0,alignY:cz,paddingRight:5};
}},"table-editor-textfield":{include:w,style:function(jz){return {decorator:undefined,padding:[2,2],backgroundColor:cx};
}},"table-editor-selectbox":{include:C,alias:C,style:function(jA){return {padding:[0,2],backgroundColor:cx};
}},"table-editor-combobox":{include:dL,alias:dL,style:function(jB){return {decorator:undefined,backgroundColor:cx};
}},"progressive-table-header":{alias:eo,style:function(jC){return {decorator:bp};
}},"progressive-table-header-cell":{alias:en,style:function(jD){var jE=qx.core.Environment.get(ep);
return {minWidth:40,minHeight:25,paddingLeft:6,decorator:jE?eb:r};
}},"app-header":{style:function(jF){return {font:eg,textColor:cB,padding:[8,12],decorator:cJ};
}},"app-header-label":cw,"virtual-list":ez,"virtual-list/row-layer":cI,"row-layer":{style:function(jG){return {colorEven:dF,colorOdd:dC};
}},"group-item":{include:cw,alias:cw,style:function(jH){return {padding:4,decorator:qx.core.Environment.get(ep)?eE:eL,textColor:bd,font:eg};
}},"virtual-selectbox":C,"virtual-selectbox/dropdown":cs,"virtual-selectbox/dropdown/list":{alias:eP},"virtual-combobox":dL,"virtual-combobox/dropdown":cs,"virtual-combobox/dropdown/list":{alias:eP},"virtual-tree":ez,"virtual-tree-folder":cK,"virtual-tree-file":cn,"column-layer":eo,"cell":{style:function(jI){return {textColor:jI.selected?cB:eS,padding:[3,6],font:T};
}},"cell-string":ew,"cell-number":{include:ew,style:function(jJ){return {textAlign:eR};
}},"cell-image":ew,"cell-boolean":{include:ew,style:function(jK){return {iconTrue:bW,iconFalse:dc};
}},"cell-atom":ew,"cell-date":ew,"cell-html":ew,"htmlarea":{"include":eo,style:function(jL){return {backgroundColor:n};
}},"progressbar":{style:function(jM){return {decorator:dB,padding:[1],backgroundColor:de};
}},"progressbar/progress":{style:function(jN){var jO=jN.disabled?eL:cy;

if(qx.core.Environment.get(ep)){jO+=em;
}return {decorator:jO};
}}}});
})();
(function(){var a="trxtest.theme.Appearance";
qx.Theme.define(a,{extend:qx.theme.modern.Appearance,appearances:{}});
})();
(function(){var k="_applyBoxShadow",j="px ",i="Integer",h="shadowHorizontalLength",g="box-shadow",f="-webkit-box-shadow",e="shadowVerticalLength",d="-moz-box-shadow",c="shorthand",b="qx.ui.decoration.MBoxShadow",a="Color";
qx.Mixin.define(b,{properties:{shadowHorizontalLength:{nullable:true,check:i,apply:k},shadowVerticalLength:{nullable:true,check:i,apply:k},shadowBlurRadius:{nullable:true,check:i,apply:k},shadowColor:{nullable:true,check:a,apply:k},shadowLength:{group:[h,e],mode:c}},members:{_styleBoxShadow:function(l){var m=qx.theme.manager.Color.getInstance();
var p=m.resolve(this.getShadowColor());

if(p!=null){var q=this.getShadowVerticalLength()||0;
var n=this.getShadowHorizontalLength()||0;
var blur=this.getShadowBlurRadius()||0;
var o=n+j+q+j+blur+j+p;
l[d]=o;
l[f]=o;
l[g]=o;
}},_applyBoxShadow:function(){}}});
})();
(function(){var j="solid",i="_applyStyle",h="double",g="px ",f="dotted",e="_applyWidth",d="Color",c="",b="dashed",a="Number",D=" ",C="shorthand",B="widthTop",A="styleRight",z="styleBottom",y="widthBottom",x="widthLeft",w="styleTop",v="colorBottom",u="styleLeft",q="widthRight",r="colorLeft",o="colorRight",p="colorTop",m="border-top",n="border-left",k="border-right",l="qx.ui.decoration.MSingleBorder",s="border-bottom",t="absolute";
qx.Mixin.define(l,{properties:{widthTop:{check:a,init:0,apply:e},widthRight:{check:a,init:0,apply:e},widthBottom:{check:a,init:0,apply:e},widthLeft:{check:a,init:0,apply:e},styleTop:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleRight:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleBottom:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleLeft:{nullable:true,check:[j,f,b,h],init:j,apply:i},colorTop:{nullable:true,check:d,apply:i},colorRight:{nullable:true,check:d,apply:i},colorBottom:{nullable:true,check:d,apply:i},colorLeft:{nullable:true,check:d,apply:i},left:{group:[x,u,r]},right:{group:[q,A,o]},top:{group:[B,w,p]},bottom:{group:[y,z,v]},width:{group:[B,q,y,x],mode:C},style:{group:[w,A,z,u],mode:C},color:{group:[p,o,v,r],mode:C}},members:{_styleBorder:function(E){var F=qx.theme.manager.Color.getInstance();
var G=this.getWidthTop();

if(G>0){E[m]=G+g+this.getStyleTop()+D+(F.resolve(this.getColorTop())||c);
}var G=this.getWidthRight();

if(G>0){E[k]=G+g+this.getStyleRight()+D+(F.resolve(this.getColorRight())||c);
}var G=this.getWidthBottom();

if(G>0){E[s]=G+g+this.getStyleBottom()+D+(F.resolve(this.getColorBottom())||c);
}var G=this.getWidthLeft();

if(G>0){E[n]=G+g+this.getStyleLeft()+D+(F.resolve(this.getColorLeft())||c);
}E.position=t;
E.top=0;
E.left=0;
},_resizeBorder:function(H,I,J){var K=this.getInsets();
I-=K.left+K.right;
J-=K.top+K.bottom;
if(I<0){I=0;
}
if(J<0){J=0;
}return {left:K.left-this.getWidthLeft(),top:K.top-this.getWidthTop(),width:I,height:J};
},_getDefaultInsetsForBorder:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_applyWidth:function(){this._applyStyle();
this._resetInsets();
},_applyStyle:function(){}}});
})();
(function(){var d="qx.ui.decoration.MBackgroundColor",c="Color",b="_applyBackgroundColor",a="";
qx.Mixin.define(d,{properties:{backgroundColor:{check:c,nullable:true,apply:b}},members:{_tintBackgroundColor:function(e,f,g){var h=qx.theme.manager.Color.getInstance();

if(f==null){f=this.getBackgroundColor();
}g.backgroundColor=h.resolve(f)||a;
},_resizeBackgroundColor:function(i,j,k){var l=this.getInsets();
j-=l.left+l.right;
k-=l.top+l.bottom;
return {left:l.left,top:l.top,width:j,height:k};
},_applyBackgroundColor:function(){}}});
})();
(function(){var t="_applyBackgroundImage",s="repeat",r="",q="mshtml",p="engine.name",o="backgroundPositionX",n='<div style="',m="backgroundPositionY",l='</div>',k="no-repeat",d="engine.version",j="scale",g='">',c=" ",b="repeat-x",f="repeat-y",e="hidden",h="qx.ui.decoration.MBackgroundImage",a="String",i="browser.quirksmode";
qx.Mixin.define(h,{properties:{backgroundImage:{check:a,nullable:true,apply:t},backgroundRepeat:{check:[s,b,f,k,j],init:s,apply:t},backgroundPositionX:{nullable:true,apply:t},backgroundPositionY:{nullable:true,apply:t},backgroundPosition:{group:[m,o]}},members:{_generateMarkup:this._generateBackgroundMarkup,_generateBackgroundMarkup:function(u,content){var y=r;
var x=this.getBackgroundImage();
var w=this.getBackgroundRepeat();
var top=this.getBackgroundPositionY();

if(top==null){top=0;
}var z=this.getBackgroundPositionX();

if(z==null){z=0;
}u.backgroundPosition=z+c+top;
if(x){var v=qx.util.AliasManager.getInstance().resolve(x);
y=qx.bom.element.Decoration.create(v,w,u);
}else{if((qx.core.Environment.get(p)==q)){if(parseFloat(qx.core.Environment.get(d))<7||qx.core.Environment.get(i)){u.overflow=e;
}}
if(!content){content=r;
}y=n+qx.bom.element.Style.compile(u)+g+content+l;
}return y;
},_applyBackgroundImage:function(){}}});
})();
(function(){var b="px",a="qx.ui.decoration.Single";
qx.Class.define(a,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MSingleBorder],construct:function(c,d,e){qx.ui.decoration.Abstract.call(this);
if(c!=null){this.setWidth(c);
}
if(d!=null){this.setStyle(d);
}
if(e!=null){this.setColor(e);
}},members:{_markup:null,getMarkup:function(f){if(this._markup){return this._markup;
}var g={};
this._styleBorder(g,f);
var h=this._generateBackgroundMarkup(g);
return this._markup=h;
},resize:function(i,j,k){var l=this._resizeBorder(i,j,k);
i.style.width=l.width+b;
i.style.height=l.height+b;
i.style.left=parseInt(i.style.left)+l.left+b;
i.style.top=parseInt(i.style.top)+l.top+b;
},tint:function(m,n){this._tintBackgroundColor(m,n,m.style);
},_isInitialized:function(){return !!this._markup;
},_getDefaultInsets:function(){return this._getDefaultInsetsForBorder();
}},destruct:function(){this._markup=null;
}});
})();
(function(){var j="_applyLinearBackgroundGradient",i=" ",h=")",g="engine.name",f="horizontal",e=",",d=" 0",c="px",b="background",a="0",E="shorthand",D="Color",C="vertical",B="",A="Number",z="%",y="),to(",x="from(",w="linear-gradient(",v="-moz-",q="-webkit-gradient(linear,",r="startColorPosition",o="-o-",p="deg, ",m="startColor",n="qx.ui.decoration.MLinearBackgroundGradient",k="endColorPosition",l="opera",s="endColor",t="gecko",u="webkit";
qx.Mixin.define(n,{properties:{startColor:{check:D,nullable:true,apply:j},endColor:{check:D,nullable:true,apply:j},orientation:{check:[f,C],init:C,apply:j},startColorPosition:{check:A,init:0,apply:j},endColorPosition:{check:A,init:100,apply:j},colorPositionUnit:{check:[c,z],init:z,apply:j},gradientStart:{group:[m,r],mode:E},gradientEnd:{group:[s,k],mode:E}},members:{_styleLinearBackgroundGradient:function(F){var I=qx.theme.manager.Color.getInstance();
var O=this.getColorPositionUnit();

if(qx.core.Environment.get(g)==u){O=O===c?B:O;

if(this.getOrientation()==f){var N=this.getStartColorPosition()+O+d+O;
var M=this.getEndColorPosition()+O+d+O;
}else{var N=a+O+i+this.getStartColorPosition()+O;
var M=a+O+i+this.getEndColorPosition()+O;
}var K=x+I.resolve(this.getStartColor())+y+I.resolve(this.getEndColor())+h;
var J=q+N+e+M+e+K+h;
F[b]=J;
}else{var P=this.getOrientation()==f?0:270;
var H=I.resolve(this.getStartColor())+i+this.getStartColorPosition()+O;
var G=I.resolve(this.getEndColor())+i+this.getEndColorPosition()+O;
var L=B;

if(qx.core.Environment.get(g)==t){L=v;
}else if(qx.core.Environment.get(g)==l){L=o;
}F[b]=L+w+P+p+H+e+G+h;
}},_resizeLinearBackgroundGradient:function(Q,R,S){var T=this.getInsets();
R-=T.left+T.right;
S-=T.top+T.bottom;
return {left:T.left,top:T.top,width:R,height:S};
},_applyLinearBackgroundGradient:function(){}}});
})();
(function(){var j="px ",i=" ",h='',g="Color",f="Number",e="border-top",d="border-left",c="border-bottom",b="border-right",a="shorthand",C="line-height",B="engine.name",A="mshtml",z="innerWidthRight",y="top",x="innerColorBottom",w="innerWidthTop",v="innerColorRight",u="innerColorTop",t="relative",q="browser.documentmode",r="innerColorLeft",o="qx.ui.decoration.MDoubleBorder",p="left",m="engine.version",n="innerWidthBottom",k="innerWidthLeft",l="position",s="absolute";
qx.Mixin.define(o,{include:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundImage],construct:function(){this._getDefaultInsetsForBorder=this.__lp;
this._resizeBorder=this.__lo;
this._styleBorder=this.__lm;
this._generateMarkup=this.__ln;
},properties:{innerWidthTop:{check:f,init:0},innerWidthRight:{check:f,init:0},innerWidthBottom:{check:f,init:0},innerWidthLeft:{check:f,init:0},innerWidth:{group:[w,z,n,k],mode:a},innerColorTop:{nullable:true,check:g},innerColorRight:{nullable:true,check:g},innerColorBottom:{nullable:true,check:g},innerColorLeft:{nullable:true,check:g},innerColor:{group:[u,v,x,r],mode:a}},members:{__ll:null,__lm:function(D){var E=qx.theme.manager.Color.getInstance();
D.position=t;
var F=this.getInnerWidthTop();

if(F>0){D[e]=F+j+this.getStyleTop()+i+E.resolve(this.getInnerColorTop());
}var F=this.getInnerWidthRight();

if(F>0){D[b]=F+j+this.getStyleRight()+i+E.resolve(this.getInnerColorRight());
}var F=this.getInnerWidthBottom();

if(F>0){D[c]=F+j+this.getStyleBottom()+i+E.resolve(this.getInnerColorBottom());
}var F=this.getInnerWidthLeft();

if(F>0){D[d]=F+j+this.getStyleLeft()+i+E.resolve(this.getInnerColorLeft());
}},__ln:function(G){var J=this._generateBackgroundMarkup(G);
var H=qx.theme.manager.Color.getInstance();
G[e]=h;
G[b]=h;
G[c]=h;
G[d]=h;
G[C]=0;
if((qx.core.Environment.get(B)==A&&parseFloat(qx.core.Environment.get(m))<8)||(qx.core.Environment.get(B)==A&&qx.core.Environment.get(q)<8)){G[C]=h;
}var I=this.getWidthTop();

if(I>0){G[e]=I+j+this.getStyleTop()+i+H.resolve(this.getColorTop());
}var I=this.getWidthRight();

if(I>0){G[b]=I+j+this.getStyleRight()+i+H.resolve(this.getColorRight());
}var I=this.getWidthBottom();

if(I>0){G[c]=I+j+this.getStyleBottom()+i+H.resolve(this.getColorBottom());
}var I=this.getWidthLeft();

if(I>0){G[d]=I+j+this.getStyleLeft()+i+H.resolve(this.getColorLeft());
}G[l]=s;
G[y]=0;
G[p]=0;
return this.__ll=this._generateBackgroundMarkup(G,J);
},__lo:function(K,L,M){var N=this.getInsets();
L-=N.left+N.right;
M-=N.top+N.bottom;
var O=N.left-this.getWidthLeft()-this.getInnerWidthLeft();
var top=N.top-this.getWidthTop()-this.getInnerWidthTop();
return {left:O,top:top,width:L,height:M,elementToApplyDimensions:K.firstChild};
},__lp:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};
}}});
})();
(function(){var c="px",b="qx.ui.decoration.Background",a="absolute";
qx.Class.define(b,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor],construct:function(d){qx.ui.decoration.Abstract.call(this);

if(d!=null){this.setBackgroundColor(d);
}},members:{__lq:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__lq;
},getMarkup:function(e){if(this.__lq){return this.__lq;
}var f={position:a,top:0,left:0};
var g=this._generateBackgroundMarkup(f);
return this.__lq=g;
},resize:function(h,i,j){var k=this.getInsets();
h.style.width=(i-k.left-k.right)+c;
h.style.height=(j-k.top-k.bottom)+c;
h.style.left=-k.left+c;
h.style.top=-k.top+c;
},tint:function(l,m){this._tintBackgroundColor(l,m,l.style);
}},destruct:function(){this.__lq=null;
}});
})();
(function(){var j='"></div>',i="_applyStyle",h="1px",g='<div style="',f='border:',e="1px solid ",d="Color",c=";",b="px",a='</div>',x="qx.ui.decoration.Beveled",w="css.boxmodel",v='<div style="position:absolute;top:1px;left:1px;',u='border-bottom:',t='border-right:',s="",r="content",q='border-left:',p='border-top:',o="Number",m='<div style="position:absolute;top:1px;left:0px;',n='position:absolute;top:0px;left:1px;',k='<div style="overflow:hidden;font-size:0;line-height:0;">',l="absolute";
qx.Class.define(x,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor],construct:function(y,z,A){qx.ui.decoration.Abstract.call(this);
if(y!=null){this.setOuterColor(y);
}
if(z!=null){this.setInnerColor(z);
}
if(A!=null){this.setInnerOpacity(A);
}},properties:{innerColor:{check:d,nullable:true,apply:i},innerOpacity:{check:o,init:1,apply:i},outerColor:{check:d,nullable:true,apply:i}},members:{__lr:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__lr;
},_applyStyle:function(){},getMarkup:function(){if(this.__lr){return this.__lr;
}var B=qx.theme.manager.Color.getInstance();
var C=[];
var F=e+B.resolve(this.getOuterColor())+c;
var E=e+B.resolve(this.getInnerColor())+c;
C.push(k);
C.push(g);
C.push(f,F);
C.push(qx.bom.element.Opacity.compile(0.35));
C.push(j);
C.push(m);
C.push(q,F);
C.push(t,F);
C.push(qx.bom.element.Opacity.compile(1));
C.push(j);
C.push(g);
C.push(n);
C.push(p,F);
C.push(u,F);
C.push(qx.bom.element.Opacity.compile(1));
C.push(j);
var D={position:l,top:h,left:h,opacity:1};
C.push(this._generateBackgroundMarkup(D));
C.push(v);
C.push(f,E);
C.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
C.push(j);
C.push(a);
return this.__lr=C.join(s);
},resize:function(G,H,I){if(H<4){H=4;
}
if(I<4){I=4;
}if(qx.core.Environment.get(w)==r){var outerWidth=H-2;
var outerHeight=I-2;
var O=outerWidth;
var N=outerHeight;
var innerWidth=H-4;
var innerHeight=I-4;
}else{var outerWidth=H;
var outerHeight=I;
var O=H-2;
var N=I-2;
var innerWidth=O;
var innerHeight=N;
}var Q=b;
var M=G.childNodes[0].style;
M.width=outerWidth+Q;
M.height=outerHeight+Q;
var L=G.childNodes[1].style;
L.width=outerWidth+Q;
L.height=N+Q;
var K=G.childNodes[2].style;
K.width=O+Q;
K.height=outerHeight+Q;
var J=G.childNodes[3].style;
J.width=O+Q;
J.height=N+Q;
var P=G.childNodes[4].style;
P.width=innerWidth+Q;
P.height=innerHeight+Q;
},tint:function(R,S){this._tintBackgroundColor(R,S,R.childNodes[3].style);
}},destruct:function(){this.__lr=null;
}});
})();
(function(){var a="qx.ui.decoration.Uniform";
qx.Class.define(a,{extend:qx.ui.decoration.Single,construct:function(b,c,d){qx.ui.decoration.Single.call(this);
if(b!=null){this.setWidth(b);
}
if(c!=null){this.setStyle(c);
}
if(d!=null){this.setColor(d);
}}});
})();
(function(){var m="Number",l="_applyInsets",k="-l",j="insetRight",i="insetTop",h="_applyBaseImage",g="insetBottom",f="set",e="shorthand",d="-t",a="insetLeft",c="String",b="qx.ui.decoration.Grid";
qx.Class.define(b,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(n,o){qx.core.Object.call(this);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__ls=new qx.ui.decoration.css3.BorderImage();

if(n){this.__lt(n);
}}else{this.__ls=new qx.ui.decoration.GridDiv(n);
}
if(o!=null){this.__ls.setInsets(o);
}},properties:{baseImage:{check:c,nullable:true,apply:h},insetLeft:{check:m,nullable:true,apply:l},insetRight:{check:m,nullable:true,apply:l},insetBottom:{check:m,nullable:true,apply:l},insetTop:{check:m,nullable:true,apply:l},insets:{group:[i,j,g,a],mode:e}},members:{__ls:null,getMarkup:function(){return this.__ls.getMarkup();
},resize:function(p,q,r){this.__ls.resize(p,q,r);
},tint:function(s,t){},getInsets:function(){return this.__ls.getInsets();
},_applyInsets:function(u,v,name){var w=f+qx.lang.String.firstUp(name);
this.__ls[w](u);
},_applyBaseImage:function(x,y){if(this.__ls instanceof qx.ui.decoration.GridDiv){this.__ls.setBaseImage(x);
}else{this.__lt(x);
}},__lt:function(z){var B,D;
this.__ls.setBorderImage(z);
var F=qx.util.AliasManager.getInstance().resolve(z);
var G=/(.*)(\.[a-z]+)$/.exec(F);
var C=G[1];
var E=G[2];
var A=qx.util.ResourceManager.getInstance();
var H=A.getImageHeight(C+d+E);
var I=A.getImageWidth(C+k+E);
this.__ls.setSlice([H,I]);
}},destruct:function(){this.__ls=null;
}});
})();
(function(){var j="px",i="Integer",h="_applyBorderRadius",g="radiusTopRight",f="radiusTopLeft",e="-webkit-border-bottom-left-radius",d="-webkit-background-clip",c="radiusBottomRight",b="-webkit-border-bottom-right-radius",a="border-top-left-radius",w="border-top-right-radius",v="border-bottom-left-radius",u="radiusBottomLeft",t="-webkit-border-top-left-radius",s="shorthand",r="-moz-border-radius-bottomright",q="padding-box",p="border-bottom-right-radius",o="qx.ui.decoration.MBorderRadius",n="-moz-border-radius-topright",l="-webkit-border-top-right-radius",m="-moz-border-radius-topleft",k="-moz-border-radius-bottomleft";
qx.Mixin.define(o,{properties:{radiusTopLeft:{nullable:true,check:i,apply:h},radiusTopRight:{nullable:true,check:i,apply:h},radiusBottomLeft:{nullable:true,check:i,apply:h},radiusBottomRight:{nullable:true,check:i,apply:h},radius:{group:[f,g,c,u],mode:s}},members:{_styleBorderRadius:function(x){x[d]=q;
var y=this.getRadiusTopLeft();

if(y>0){x[m]=y+j;
x[t]=y+j;
x[a]=y+j;
}y=this.getRadiusTopRight();

if(y>0){x[n]=y+j;
x[l]=y+j;
x[w]=y+j;
}y=this.getRadiusBottomLeft();

if(y>0){x[k]=y+j;
x[e]=y+j;
x[v]=y+j;
}y=this.getRadiusBottomRight();

if(y>0){x[r]=y+j;
x[b]=y+j;
x[p]=y+j;
}},_applyBorderRadius:function(){}}});
})();
(function(){var cI="solid",cH="invalid",cG="scale",cF="border-main",cE="border-invalid",cD="shadow",cC="border-separator",cB="checkbox-hovered",cA="button-start",cz="button-end",bJ="background-light",bI="tabview-background",bH="repeat-x",bG="radiobutton",bF="button-css",bE="border-input",bD="border-inner-input",bC="border-inner-scrollbar",bB="radiobutton-checked",bA="tabview-inactive",cP="checkbox",cQ="window-border",cN="radiobutton-disabled",cO="radiobutton-hovered-invalid",cL="tabview-page-button-top-active-css",cM="button-border-disabeld",cJ="tabview-page-button-top-inactive-css",cK="decoration/form/input.png",cR="broder-toolbar-button-outer",cS="input-css",ci="border-disabled",ch="broder-toolbar-broder-inner",ck="background-pane",cj="checkbox-disabled-border",cm="button-hovered-end",cl="repeat-y",co="border-dragover",cn="button-hovered-start",cg="progressive-table-header-border-right",cf="decoration/scrollbar/scrollbar-button-bg-vertical.png",k="radiobutton-background",l="checkbox-focus",m="scrollbar-slider-horizontal-css",n="menu-end",o="decoration/selection.png",p="horizontal",q="table-header-start",r="decoration/scrollbar/scrollbar-button-bg-horizontal.png",s="decoration/form/input-focused.png",t="checkbox-hovered-invalid",dh="decoration/table/header-cell.png",dg="tabview-inactive-start",df="table-header-end",de="border-button",dl="border-focused-invalid",dk="button-focused-css",dj="checkbox-border",di="tabview-start",dn="checkbox-start",dm="decoration/tabview/tab-button-top-active.png",ba="group-background",bb="decoration/form/button-c.png",X="keyboard-focus",Y="button-disabled-start",be="selected-end",bf="table-header-hovered",bc="decoration/groupbox/groupbox.png",bd="decoration/pane/pane.png",V="decoration/menu/background.png",W="tooltip-error",I="decoration/toolbar/toolbar-part.gif",H="input-focused-css",K="decoration/menu/bar-background.png",J="window-border-caption",E="radiobutton-hovered",D="decoration/tabview/tab-button-bottom-active.png",G="radiobutton-checked-focused",F="groupitem-end",C="button-disabled-css",B="group-border",bk="scrollbar-slider-vertical-css",bl="decoration/form/button-checked.png",bm="window-css",bn="selected-start",bg="tabview-end",bh="window-statusbar-background",bi="decoration/scrollbar/scrollbar-bg-vertical.png",bj="button-pressed-css",bo="toolbar-button-hovered-css",bp="window-caption-active-end",S="dotted",R="checkbox-disabled-end",Q="window-caption-active-start",P="button-focused",O="menu-start",N="decoration/form/tooltip-error.png",M="window-captionbar-active-css",L="qx/decoration/Modern",U="border-toolbar-separator-left",T="decoration/scrollbar/scrollbar-bg-horizontal.png",bq="decoration/tabview/tab-button-left-active.png",br="decoration/tabview/tab-button-right-inactive.png",bs="decoration/tabview/tab-button-bottom-inactive.png",bt="decoration/form/button-disabled.png",bu="decoration/form/button-pressed.png",bv="background-splitpane",bw="decoration/form/button-checked-focused.png",bx="px",by="decoration/window/statusbar.png",bz="input-border-disabled",bN="checkbox-inner",bM="scrollbar-horizontal-css",bL="button-disabled-end",bK="center",bR="toolbar-end",bQ="groupitem-start",bP="decoration/form/button-hovered.png",bO="checkbox-hovered-inner",bT="input-focused-start",bS="scrollbar-start",cb="scrollbar-slider-start",cc="radiobutton-checked-disabled",bY="checkbox-focused",ca="qx.theme.modern.Decoration",bW="decoration/form/button.png",bX="decoration/app-header.png",bU="decoration/form/button-focused.png",bV="radiobutton-checked-hovered",cd="button-hovered-css",ce="checkbox-disabled-inner",cs="border-toolbar-separator-right",cr="border-focused",cu="decoration/shadow/shadow.png",ct="scrollbar-end",cw="decoration/group-item.png",cv="window-caption-inactive-end",cy="checkbox-end",cx="tabview-inactive-end",cq="input-end",cp="no-repeat",da="decoration/tabview/tab-button-left-inactive.png",db="input-focused-inner-invalid",dc="menu-separator-top",dd="window-caption-inactive-start",cV="scrollbar-slider-end",cW="decoration/window/captionbar-inactive.png",cX="decoration/tabview/tab-button-top-inactive.png",cY="pane-end",cT="input-focused-end",cU="decoration/form/tooltip-error-arrow.png",j="menubar-start",i="toolbar-start",h="checkbox-disabled-start",g="radiobutton-focused",f="pane-start",e="table-focus-indicator",d="button-checked-css",c="decoration/form/button-checked-c.png",b="menu-separator-bottom",a="decoration/shadow/shadow-small.png",w="input-start",x="decoration/tabview/tabview-pane.png",u="decoration/window/captionbar-active.png",v="decoration/tabview/tab-button-right-active.png",z="button-checked-focused-css",A="decoration/toolbar/toolbar-gradient.png",y="checkbox-hovered-inner-invalid";
qx.Theme.define(ca,{aliases:{decoration:L},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:cF}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:o,backgroundRepeat:cG}},"selected-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{startColorPosition:0,endColorPosition:100,startColor:bn,endColor:be}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:o,backgroundRepeat:cG,bottom:[2,cI,co]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,cI,co]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:bd,insets:[0,2,3,0]}},"pane-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MLinearBackgroundGradient],style:{width:1,color:bI,radius:3,shadowColor:cD,shadowBlurRadius:2,shadowLength:0,gradientStart:[f,0],gradientEnd:[cY,100]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:bc}},"group-css":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder],style:{backgroundColor:ba,radius:4,color:B,width:1}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cH,innerColor:bD,innerOpacity:0.5,backgroundImage:cK,backgroundRepeat:bH,backgroundColor:bJ}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:X,style:S}},"radiobutton":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow],style:{backgroundColor:k,radius:5,width:1,innerWidth:2,color:dj,innerColor:k,shadowLength:0,shadowBlurRadius:0,shadowColor:l,insetLeft:5}},"radiobutton-checked":{include:bG,style:{backgroundColor:bB}},"radiobutton-checked-focused":{include:bB,style:{shadowBlurRadius:4}},"radiobutton-checked-hovered":{include:bB,style:{innerColor:cB}},"radiobutton-focused":{include:bG,style:{shadowBlurRadius:4}},"radiobutton-hovered":{include:bG,style:{backgroundColor:cB,innerColor:cB}},"radiobutton-disabled":{include:bG,style:{innerColor:cN,backgroundColor:cN,color:cj}},"radiobutton-checked-disabled":{include:cN,style:{backgroundColor:cc}},"radiobutton-invalid":{include:bG,style:{color:cH}},"radiobutton-checked-invalid":{include:bB,style:{color:cH}},"radiobutton-checked-focused-invalid":{include:G,style:{color:cH,shadowColor:cH}},"radiobutton-checked-hovered-invalid":{include:bV,style:{color:cH,innerColor:cO}},"radiobutton-focused-invalid":{include:g,style:{color:cH,shadowColor:cH}},"radiobutton-hovered-invalid":{include:E,style:{color:cH,innerColor:cO,backgroundColor:cO}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:cC}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:cC}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:N,insets:[2,5,5,2]}},"tooltip-error-css":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow],style:{backgroundColor:W,radius:4,shadowColor:cD,shadowBlurRadius:2,shadowLength:1}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:cU,backgroundPositionY:bK,backgroundRepeat:cp,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:cu,insets:[4,8,8,4]}},"shadow-window-css":{decorator:[qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{shadowColor:cD,shadowBlurRadius:2,shadowLength:1}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:a,insets:[0,3,3,0]}},"popup-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{width:1,color:cF,shadowColor:cD,shadowBlurRadius:3,shadowLength:1}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:T,backgroundRepeat:bH}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bi,backgroundRepeat:cl}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:r,backgroundRepeat:cG,outerColor:cF,innerColor:bC,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:r,backgroundRepeat:cG,outerColor:ci,innerColor:bC,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:cf,backgroundRepeat:cG,outerColor:cF,innerColor:bC,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:cf,backgroundRepeat:cG,outerColor:ci,innerColor:bC,innerOpacity:0.3}},"scrollbar-horizontal-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[bS,0],gradientEnd:[ct,100]}},"scrollbar-vertical-css":{include:bM,style:{orientation:p}},"scrollbar-slider-horizontal-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[cb,0],gradientEnd:[cV,100],color:cF,width:1}},"scrollbar-slider-vertical-css":{include:m,style:{orientation:p}},"scrollbar-slider-horizontal-disabled-css":{include:m,style:{color:cM}},"scrollbar-slider-vertical-disabled-css":{include:bk,style:{color:cM}},"button-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius],style:{radius:3,color:de,width:1,startColor:cA,endColor:cz,startColorPosition:35,endColorPosition:100}},"button-disabled-css":{include:bF,style:{color:cM,startColor:Y,endColor:bL}},"button-hovered-css":{include:bF,style:{startColor:cn,endColor:cm}},"button-checked-css":{include:bF,style:{endColor:cA,startColor:cz}},"button-pressed-css":{include:bF,style:{endColor:cn,startColor:cm}},"button-focused-css":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius],style:{radius:3,color:de,width:1,innerColor:P,innerWidth:2,startColor:cA,endColor:cz,startColorPosition:30,endColorPosition:100}},"button-checked-focused-css":{include:dk,style:{endColor:cA,startColor:cz}},"button-invalid-css":{include:bF,style:{color:cE}},"button-disabled-invalid-css":{include:C,style:{color:cE}},"button-hovered-invalid-css":{include:cd,style:{color:cE}},"button-checked-invalid-css":{include:d,style:{color:cE}},"button-pressed-invalid-css":{include:bj,style:{color:cE}},"button-focused-invalid-css":{include:dk,style:{color:cE}},"button-checked-focused-invalid-css":{include:z,style:{color:cE}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:bW,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:bt,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:bU,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:bP,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:bu,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:bl,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:bw,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Single,style:{color:cH,width:1}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cH,innerColor:dl,insets:[0]}},"checkbox":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBoxShadow],style:{width:1,color:dj,innerWidth:1,innerColor:bN,gradientStart:[dn,0],gradientEnd:[cy,100],shadowLength:0,shadowBlurRadius:0,shadowColor:l,insetLeft:4}},"checkbox-hovered":{include:cP,style:{innerColor:bO,gradientStart:[cB,0],gradientEnd:[cB,100]}},"checkbox-focused":{include:cP,style:{shadowBlurRadius:4}},"checkbox-disabled":{include:cP,style:{color:cj,innerColor:ce,gradientStart:[h,0],gradientEnd:[R,100]}},"checkbox-invalid":{include:cP,style:{color:cH}},"checkbox-hovered-invalid":{include:cB,style:{color:cH,innerColor:y,gradientStart:[t,0],gradientEnd:[t,100]}},"checkbox-focused-invalid":{include:bY,style:{color:cH,shadowColor:cH}},"input-css":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBackgroundColor],style:{color:bE,innerColor:bD,innerWidth:1,width:1,backgroundColor:bJ,startColor:w,endColor:cq,startColorPosition:0,endColorPosition:12,colorPositionUnit:bx}},"border-invalid-css":{include:cS,style:{color:cE}},"input-focused-css":{include:cS,style:{startColor:bT,innerColor:cT,endColorPosition:4}},"input-focused-invalid-css":{include:H,style:{innerColor:db,color:cE}},"input-disabled-css":{include:cS,style:{color:bz}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bE,innerColor:bD,innerOpacity:0.5,backgroundImage:cK,backgroundRepeat:bH,backgroundColor:bJ}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bE,innerColor:cr,backgroundImage:s,backgroundRepeat:bH,backgroundColor:bJ}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cH,innerColor:dl,backgroundImage:s,backgroundRepeat:bH,backgroundColor:bJ,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:ci,innerColor:bD,innerOpacity:0.5,backgroundImage:cK,backgroundRepeat:bH,backgroundColor:bJ}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:A,backgroundRepeat:cG}},"toolbar-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{startColorPosition:40,endColorPosition:60,startColor:i,endColor:bR}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cR,innerColor:ch,backgroundImage:bb,backgroundRepeat:cG}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cR,innerColor:ch,backgroundImage:c,backgroundRepeat:cG}},"toolbar-button-hovered-css":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius],style:{color:cR,width:1,innerWidth:1,innerColor:ch,radius:2,gradientStart:[cA,30],gradientEnd:[cz,100]}},"toolbar-button-checked-css":{include:bo,style:{gradientStart:[cz,30],gradientEnd:[cA,100]}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:U,colorRight:cs,styleLeft:cI,styleRight:cI}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:I,backgroundRepeat:cl}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:x,insets:[4,6,7,4]}},"tabview-pane-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MSingleBorder],style:{width:1,color:cQ,radius:3,gradientStart:[di,90],gradientEnd:[bg,100]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:dm}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:cX}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:D}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:bs}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bq}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:da}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:v}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:br}},"tabview-page-button-top-active-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBoxShadow],style:{radius:[3,3,0,0],width:[1,1,0,1],color:bI,backgroundColor:di,shadowLength:1,shadowColor:cD,shadowBlurRadius:2}},"tabview-page-button-top-inactive-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{radius:[3,3,0,0],color:bA,colorBottom:bI,width:1,gradientStart:[dg,0],gradientEnd:[cx,100]}},"tabview-page-button-bottom-active-css":{include:cL,style:{radius:[0,0,3,3],width:[0,1,1,1],backgroundColor:dg}},"tabview-page-button-bottom-inactive-css":{include:cJ,style:{radius:[0,0,3,3],width:[0,1,1,1],colorBottom:bA,colorTop:bI}},"tabview-page-button-left-active-css":{include:cL,style:{radius:[3,0,0,3],width:[1,0,1,1],shadowLength:0,shadowBlurRadius:0}},"tabview-page-button-left-inactive-css":{include:cJ,style:{radius:[3,0,0,3],width:[1,0,1,1],colorBottom:bA,colorRight:bI}},"tabview-page-button-right-active-css":{include:cL,style:{radius:[0,3,3,0],width:[1,1,1,0],shadowLength:0,shadowBlurRadius:0}},"tabview-page-button-right-inactive-css":{include:cJ,style:{radius:[0,3,3,0],width:[1,1,1,0],colorBottom:bA,colorLeft:bI}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:ck,width:3,color:bv,style:cI}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:ck,width:1,color:cF,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:u}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:cW}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:by}},"window-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MSingleBorder],style:{radius:[5,5,0,0],shadowBlurRadius:4,shadowLength:2,shadowColor:cD}},"window-incl-statusbar-css":{include:bm,style:{radius:[5,5,5,5]}},"window-captionbar-active-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MLinearBackgroundGradient],style:{width:1,color:cQ,colorBottom:J,radius:[5,5,0,0],gradientStart:[Q,30],gradientEnd:[bp,70]}},"window-captionbar-inactive-css":{include:M,style:{gradientStart:[dd,30],gradientEnd:[cv,70]}},"window-statusbar-css":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius],style:{backgroundColor:bh,width:[0,1,1,1],color:cQ,radius:[0,0,5,5]}},"window-pane-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{backgroundColor:ck,width:1,color:cQ,widthTop:0}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:cF,style:cI}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:cF,style:cI}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:dh,backgroundRepeat:cG,widthBottom:1,colorBottom:cF,style:cI}},"table-scroller-header-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[q,10],gradientEnd:[df,90],widthBottom:1,colorBottom:cF}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:cC,styleRight:cI}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:cC,styleRight:cI,widthBottom:1,colorBottom:bf,styleBottom:cI}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:e,style:cI}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:cF,style:cI}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:dh,backgroundRepeat:cG,widthRight:1,colorRight:cg,style:cI}},"progressive-table-header-cell-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[q,10],gradientEnd:[df,90],widthRight:1,colorRight:cg}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:V,backgroundRepeat:cG,width:1,color:cF,style:cI}},"menu-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MSingleBorder],style:{gradientStart:[O,0],gradientEnd:[n,100],shadowColor:cD,shadowBlurRadius:2,shadowLength:1,width:1,color:cF}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:dc,widthBottom:1,colorBottom:b}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:K,backgroundRepeat:cG,width:1,color:cC,style:cI}},"menubar-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[j,0],gradientEnd:[n,100],width:1,color:cC}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bX,backgroundRepeat:cG}},"progressbar":{decorator:qx.ui.decoration.Single,style:{width:1,color:bE}},"group-item":{decorator:qx.ui.decoration.Background,style:{backgroundImage:cw,backgroundRepeat:cG}},"group-item-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{startColorPosition:0,endColorPosition:100,startColor:bQ,endColor:F}}}});
})();
(function(){var a="trxtest.theme.Decoration";
qx.Theme.define(a,{extend:qx.theme.modern.Decoration,decorations:{}});
})();
(function(){var bz="white",by="#EEEEEE",bx="#E4E4E4",bw="#F3F3F3",bv="#F0F0F0",bu="#E8E8E8",bt="#CCCCCC",bs="#EFEFEF",br="#1a1a1a",bq="#00204D",bf="gray",be="#F4F4F4",bd="#fffefe",bc="#AFAFAF",bb="#084FAB",ba="#FCFCFC",Y="#CCC",X="#F2F2F2",W="black",V="#ffffdd",bG="#b6b6b6",bH="#004DAD",bE="#BABABA",bF="#005BC3",bC="#334866",bD="#CECECE",bA="#D9D9D9",bB="#D8D8D8",bI="#99C3FE",bJ="#001533",bj="#B3B3B3",bi="#D5D5D5",bl="#C3C3C3",bk="#DDDDDD",bn="#FF9999",bm="#E8E8E9",bp="#084FAA",bo="#C5C5C5",bh="#DBDBDB",bg="#4a4a4a",a="#83BAEA",b="#D7E7F4",c="#07125A",d="#FAF2F2",e="#87AFE7",f="#F7EAEA",g="#777D8D",h="#FBFBFB",i="#CACACA",j="#909090",bN="#9B9B9B",bM="#F0F9FE",bL="#314a6e",bK="#B4B4B4",bR="#787878",bQ="qx.theme.modern.Color",bP="#000000",bO="#26364D",bT="#A7A7A7",bS="#D1E4FF",F="#5CB0FD",G="#EAEAEA",D="#003B91",E="#80B4EF",J="#FF6B78",K="#949494",H="#808080",I="#930000",B="#7B7B7B",C="#C82C2C",r="#DFDFDF",q="#B6B6B6",t="#0880EF",s="#4d4d4d",n="#f4f4f4",m="#7B7A7E",p="#D0D0D0",o="#f8f8f8",l="#404955",k="#959595",P="#AAAAAA",Q="#F7E9E9",R="#314A6E",S="#C72B2B",L="#FAFAFA",M="#FBFCFB",N="#B2D2FF",O="#666666",T="#CBC8CD",U="#999999",A="#8EB8D6",z="#b8b8b8",y="#727272",x="#33508D",w="#F1F1F1",v="#990000",u="#00368A";
qx.Theme.define(bQ,{colors:{"background-application":r,"background-pane":bw,"background-light":ba,"background-medium":by,"background-splitpane":bc,"background-tip":V,"background-tip-error":S,"background-odd":bx,"htmlarea-background":bz,"progressbar-background":bz,"text-light":j,"text-gray":bg,"text-label":br,"text-title":bL,"text-input":bP,"text-hovered":bJ,"text-disabled":m,"text-selected":bd,"text-active":bO,"text-inactive":l,"text-placeholder":T,"border-inner-scrollbar":bz,"border-main":s,"menu-separator-top":bo,"menu-separator-bottom":L,"border-separator":H,"broder-toolbar-button-outer":bG,"broder-toolbar-broder-inner":o,"border-toolbar-separator-right":n,"border-toolbar-separator-left":z,"border-input":bC,"border-inner-input":bz,"border-disabled":q,"border-pane":bq,"border-button":O,"border-column":bt,"border-focused":bI,"invalid":v,"border-focused-invalid":bn,"border-dragover":x,"keyboard-focus":W,"table-pane":bw,"table-focus-indicator":t,"table-row-background-focused-selected":bb,"table-row-background-focused":E,"table-row-background-selected":bb,"table-row-background-even":bw,"table-row-background-odd":bx,"table-row-selected":bd,"table-row":br,"table-row-line":Y,"table-column-line":Y,"table-header-hovered":bz,"progressive-table-header":P,"progressive-table-header-border-right":X,"progressive-table-row-background-even":be,"progressive-table-row-background-odd":bx,"progressive-progressbar-background":bf,"progressive-progressbar-indicator-done":bt,"progressive-progressbar-indicator-undone":bz,"progressive-progressbar-percent-background":bf,"progressive-progressbar-percent-text":bz,"selected-start":bH,"selected-end":u,"tabview-background":c,"shadow":U,"pane-start":h,"pane-end":bv,"group-background":bu,"group-border":bK,"radiobutton-background":bs,"checkbox-border":R,"checkbox-focus":e,"checkbox-hovered":N,"checkbox-hovered-inner":bS,"checkbox-inner":by,"checkbox-start":bx,"checkbox-end":bw,"checkbox-disabled-border":bR,"checkbox-disabled-inner":i,"checkbox-disabled-start":p,"checkbox-disabled-end":bB,"checkbox-hovered-inner-invalid":d,"checkbox-hovered-invalid":Q,"radiobutton-checked":bF,"radiobutton-disabled":bi,"radiobutton-checked-disabled":B,"radiobutton-hovered-invalid":f,"tooltip-error":C,"scrollbar-start":bt,"scrollbar-end":w,"scrollbar-slider-start":by,"scrollbar-slider-end":bl,"button-border-disabeld":k,"button-start":bv,"button-end":bc,"button-disabled-start":be,"button-disabled-end":bE,"button-hovered-start":bM,"button-hovered-end":A,"button-focused":a,"border-invalid":I,"input-start":bv,"input-end":M,"input-focused-start":b,"input-focused-end":F,"input-focused-inner-invalid":J,"input-border-disabled":bN,"input-border-inner":bz,"toolbar-start":bs,"toolbar-end":bk,"window-border":bq,"window-border-caption":y,"window-caption-active-text":bz,"window-caption-active-start":bp,"window-caption-active-end":D,"window-caption-inactive-start":X,"window-caption-inactive-end":bh,"window-statusbar-background":bs,"tabview-start":ba,"tabview-end":by,"tabview-inactive":g,"tabview-inactive-start":G,"tabview-inactive-end":bD,"table-header-start":bu,"table-header-end":bj,"menu-start":bm,"menu-end":bA,"menubar-start":bu,"groupitem-start":bT,"groupitem-end":K,"groupitem-text":bz,"virtual-row-layer-background-even":bz,"virtual-row-layer-background-odd":bz}});
})();
(function(){var a="trxtest.theme.Color";
qx.Theme.define(a,{extend:qx.theme.modern.Color,colors:{}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b},icons:{}});
})();
(function(){var t="os.version",s="os.name",r="win",q="7",p="vista",o="osx",n="Liberation Sans",m="Tahoma",l="sans-serif",k="Arial",d="Lucida Grande",j="Candara",g="Segoe UI",c="Consolas",b="monospace",f="Courier New",e="Lucida Console",h="Monaco",a="qx.theme.modern.Font",i="DejaVu Sans Mono";
qx.Theme.define(a,{fonts:{"default":{size:(qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p))?12:11,lineHeight:1.4,family:qx.core.Environment.get(s)==o?[d]:((qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p)))?[g,j]:[m,n,k,l]},"bold":{size:(qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p))?12:11,lineHeight:1.4,family:qx.core.Environment.get(s)==o?[d]:((qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p)))?[g,j]:[m,n,k,l],bold:true},"small":{size:(qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p))?11:10,lineHeight:1.4,family:qx.core.Environment.get(s)==o?[d]:((qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p)))?[g,j]:[m,n,k,l]},"monospace":{size:11,lineHeight:1.4,family:qx.core.Environment.get(s)==o?[e,h]:((qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p)))?[c]:[c,i,f,b]}}});
})();
(function(){var a="trxtest.theme.Font";
qx.Theme.define(a,{extend:qx.theme.modern.Font,fonts:{}});
})();
(function(){var a="trxtest.theme.Theme";
qx.Theme.define(a,{meta:{color:trxtest.theme.Color,decoration:trxtest.theme.Decoration,font:trxtest.theme.Font,icon:qx.theme.icon.Tango,appearance:trxtest.theme.Appearance}});
})();
(function(){var j="_applyStyle",i="stretch",h="Integer",g="px",f=" ",e="repeat",d="round",c="shorthand",b="px ",a="sliceBottom",y=";'></div>",x="<div style='",w="sliceLeft",v="sliceRight",u="repeatX",t="String",s="qx.ui.decoration.css3.BorderImage",r="border-box",q="",p='") ',n="sliceTop",o='url("',l="hidden",m="repeatY",k="absolute";
qx.Class.define(s,{extend:qx.ui.decoration.Abstract,construct:function(z,A){qx.ui.decoration.Abstract.call(this);
if(z!=null){this.setBorderImage(z);
}
if(A!=null){this.setSlice(A);
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:t,nullable:true,apply:j},sliceTop:{check:h,init:0,apply:j},sliceRight:{check:h,init:0,apply:j},sliceBottom:{check:h,init:0,apply:j},sliceLeft:{check:h,init:0,apply:j},slice:{group:[n,v,a,w],mode:c},repeatX:{check:[i,e,d],init:i,apply:j},repeatY:{check:[i,e,d],init:i,apply:j},repeat:{group:[u,m],mode:c}},members:{__lu:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__lu;
},getMarkup:function(){if(this.__lu){return this.__lu;
}var B=this._resolveImageUrl(this.getBorderImage());
var C=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var D=[this.getRepeatX(),this.getRepeatY()].join(f);
this.__lu=[x,qx.bom.element.Style.compile({"borderImage":o+B+p+C.join(f)+f+D,position:k,lineHeight:0,fontSize:0,overflow:l,boxSizing:r,borderWidth:C.join(b)+g}),y].join(q);
return this.__lu;
},resize:function(E,F,G){E.style.width=F+g;
E.style.height=G+g;
},tint:function(H,I){},_applyStyle:function(){},_resolveImageUrl:function(J){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(J));
}},destruct:function(){this.__lu=null;
}});
})();
(function(){var j="px",i="0px",h="-1px",g="no-repeat",f="engine.version",e="scale-x",d="scale-y",c="-tr",b="-l",a='</div>',z="scale",y="-br",x="-t",w="browser.quirksmode",v="-tl",u="-r",t='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',s="_applyBaseImage",r="-b",q="String",o="",p="-bl",m="qx.ui.decoration.GridDiv",n="-c",k="mshtml",l="engine.name";
qx.Class.define(m,{extend:qx.ui.decoration.Abstract,construct:function(A,B){qx.ui.decoration.Abstract.call(this);
if(A!=null){this.setBaseImage(A);
}
if(B!=null){this.setInsets(B);
}},properties:{baseImage:{check:q,nullable:true,apply:s}},members:{__lv:null,__lw:null,__lx:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__lv;
},getMarkup:function(){if(this.__lv){return this.__lv;
}var C=qx.bom.element.Decoration;
var D=this.__lw;
var E=this.__lx;
var F=[];
F.push(t);
F.push(C.create(D.tl,g,{top:0,left:0}));
F.push(C.create(D.t,e,{top:0,left:E.left+j}));
F.push(C.create(D.tr,g,{top:0,right:0}));
F.push(C.create(D.bl,g,{bottom:0,left:0}));
F.push(C.create(D.b,e,{bottom:0,left:E.left+j}));
F.push(C.create(D.br,g,{bottom:0,right:0}));
F.push(C.create(D.l,d,{top:E.top+j,left:0}));
F.push(C.create(D.c,z,{top:E.top+j,left:E.left+j}));
F.push(C.create(D.r,d,{top:E.top+j,right:0}));
F.push(a);
return this.__lv=F.join(o);
},resize:function(G,H,I){var J=this.__lx;
var innerWidth=H-J.left-J.right;
var innerHeight=I-J.top-J.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}G.style.width=H+j;
G.style.height=I+j;
G.childNodes[1].style.width=innerWidth+j;
G.childNodes[4].style.width=innerWidth+j;
G.childNodes[7].style.width=innerWidth+j;
G.childNodes[6].style.height=innerHeight+j;
G.childNodes[7].style.height=innerHeight+j;
G.childNodes[8].style.height=innerHeight+j;

if((qx.core.Environment.get(l)==k)){if(parseFloat(qx.core.Environment.get(f))<7||(qx.core.Environment.get(w)&&parseFloat(qx.core.Environment.get(f))<8)){if(H%2==1){G.childNodes[2].style.marginRight=h;
G.childNodes[5].style.marginRight=h;
G.childNodes[8].style.marginRight=h;
}else{G.childNodes[2].style.marginRight=i;
G.childNodes[5].style.marginRight=i;
G.childNodes[8].style.marginRight=i;
}
if(I%2==1){G.childNodes[3].style.marginBottom=h;
G.childNodes[4].style.marginBottom=h;
G.childNodes[5].style.marginBottom=h;
}else{G.childNodes[3].style.marginBottom=i;
G.childNodes[4].style.marginBottom=i;
G.childNodes[5].style.marginBottom=i;
}}}},tint:function(K,L){},_applyBaseImage:function(M,N){if(M){var R=this._resolveImageUrl(M);
var S=/(.*)(\.[a-z]+)$/.exec(R);
var Q=S[1];
var P=S[2];
var O=this.__lw={tl:Q+v+P,t:Q+x+P,tr:Q+c+P,bl:Q+p+P,b:Q+r+P,br:Q+y+P,l:Q+b+P,c:Q+n+P,r:Q+u+P};
this.__lx=this._computeEdgeSizes(O);
}},_resolveImageUrl:function(T){return qx.util.AliasManager.getInstance().resolve(T);
},_computeEdgeSizes:function(U){var V=qx.util.ResourceManager.getInstance();
return {top:V.getImageHeight(U.t),bottom:V.getImageHeight(U.b),left:V.getImageWidth(U.l),right:V.getImageWidth(U.r)};
}},destruct:function(){this.__lv=this.__lw=this.__lx=null;
}});
})();


qx.$$loader.init();

