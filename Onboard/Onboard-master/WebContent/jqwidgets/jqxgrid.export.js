/*
jQWidgets v4.5.3 (2017-June)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(a){a.extend(a.jqx._jqxGrid.prototype,{exportdata:function(b,c,d,e,f,g,h){if(!a.jqx.dataAdapter.ArrayExporter)throw"jqxGrid: Missing reference to jqxdata.export.js!";void 0==d&&(d=!0);var i=this;if(void 0==e){var e=this.getrows();if(0==e.length)throw"No data to export."}this.exporting=!0,this.pageable||(this.loadondemand=!0),this.altrows&&this._renderrows(this.virtualsizeinfo);var j=void 0!=f&&f,k={},l={},m=this.host.find(".jqx-grid-cell:first"),n=this.host.find(".jqx-grid-cell-alt:first");m.removeClass(this.toThemeProperty("jqx-grid-cell-selected")),m.removeClass(this.toThemeProperty("jqx-fill-state-pressed")),n.removeClass(this.toThemeProperty("jqx-grid-cell-selected")),n.removeClass(this.toThemeProperty("jqx-fill-state-pressed")),m.removeClass(this.toThemeProperty("jqx-grid-cell-hover")),m.removeClass(this.toThemeProperty("jqx-fill-state-hover")),n.removeClass(this.toThemeProperty("jqx-grid-cell-hover")),n.removeClass(this.toThemeProperty("jqx-fill-state-hover"));for(var o="cell",p=1,q="column",r=1,s=[],t=0;t<this.columns.records.length;t++){var u=this.columns.records[t];if(""!=u.cellclassname)if(u.customCellStyles=new Array,"string"==typeof u.cellclassname)for(var v=0;v<e.length;v++)u.customCellStyles[v]=u.cellclassname;else for(var v=0;v<e.length;v++){var w=this.getrowboundindex(v),x=u.cellclassname(w,u.displayfield,e[v][u.displayfield],e[v]);x&&(u.customCellStyles[v]=x)}}var y=new Array,z=null,A=null,B=null;if(a.each(this.columns.records,function(c){var f=a(i.table[0].rows[0].cells[c]);if(i.table[0].rows.length>1){var g=a(i.table[0].rows[1].cells[c]);B||(B=g)}A||(A=f);var h=this,m=function(a){if(a.removeClass(i.toThemeProperty("jqx-grid-cell-selected")),a.removeClass(i.toThemeProperty("jqx-fill-state-pressed")),a.removeClass(i.toThemeProperty("jqx-grid-cell-hover")),a.removeClass(i.toThemeProperty("jqx-fill-state-hover")),h.customCellStyles)for(var b in h.customCellStyles)a.removeClass(h.customCellStyles[b])};if(m(f),g&&m(g),null==this.displayfield)return!0;i.showaggregates&&i.getcolumnaggregateddata&&s.push(i.getcolumnaggregateddata(this.displayfield,this.aggregates,!0,e));var n=i._getexportcolumntype(this);!this.exportable||this.hidden&&!j||(k[this.displayfield]={},k[this.displayfield].text=this.text,k[this.displayfield].width=parseInt(this.width),isNaN(k[this.displayfield].width)&&(k[this.displayfield].width=60),k[this.displayfield].formatString=this.cellsformat,k[this.displayfield].localization=i.gridlocalization,k[this.displayfield].type=n,k[this.displayfield].cellsAlign=this.cellsalign,k[this.displayfield].hidden=!d,k[this.displayfield].displayfield=this.displayfield,y.push(k[this.displayfield])),o="cell"+p;var t=a(this.element);if(void 0==this.element&&(t=a(this.uielement)),z){if(!h._rendered){t=z,f=A,g=B;var u=i.toTP("jqx-grid-cell")+" "+i.toTP("jqx-item");f[0].className=u,u+=i.toTP("jqx-grid-cell-alt"),g&&(g[0].className=u)}}else z=t;if(q="column"+r,"html"==b||"xls"==b||"pdf"==b){var v=function(a,c,d,e,f,g,h,i,m){l[a]={},void 0!=c&&(l[a]["font-size"]=c.css("font-size"),l[a]["font-weight"]=c.css("font-weight"),l[a]["font-style"]=c.css("font-style"),l[a]["background-color"]=g._getexportcolor(c.css("background-color")),l[a].color=g._getexportcolor(c.css("color")),l[a]["border-color"]=g._getexportcolor(c.css("border-top-color")),d?l[a]["text-align"]=f.align:(l[a]["text-align"]=f.cellsalign,l[a].formatString=f.cellsformat,l[a].dataType=n),"html"!=b&&"pdf"!=b||(l[a]["border-top-width"]=c.css("border-top-width"),l[a]["border-left-width"]=c.css("border-left-width"),l[a]["border-right-width"]=c.css("border-right-width"),l[a]["border-bottom-width"]=c.css("border-bottom-width"),l[a]["border-top-style"]=c.css("border-top-style"),l[a]["border-left-style"]=c.css("border-left-style"),l[a]["border-right-style"]=c.css("border-right-style"),l[a]["border-bottom-style"]=c.css("border-bottom-style"),d?(0==h&&(l[a]["border-left-width"]=c.css("border-right-width")),l[a]["border-top-width"]=c.css("border-right-width"),l[a]["border-bottom-width"]=c.css("border-bottom-width")):0==h&&(l[a]["border-left-width"]=c.css("border-right-width")),l[a].height=c.css("height")),!f.exportable||f.hidden&&!j||(1==i?(k[f.displayfield].customCellStyles||(k[f.displayfield].customCellStyles=new Array),k[f.displayfield].customCellStyles[m]=a):d?k[f.displayfield].style=a:e?k[f.displayfield].cellAltStyle=a:k[f.displayfield].cellStyle=a))};if(v(q,t,!0,!1,this,i,c),r++,v(o,f,!1,!1,this,i,c),i.altrows&&(o="cellalt"+p,v(o,g,!1,!0,this,i,c)),this.customCellStyles){for(var w in h.customCellStyles)f.removeClass(h.customCellStyles[w]);for(var w in h.customCellStyles)f.addClass(h.customCellStyles[w]),v(o+h.customCellStyles[w],f,!1,!1,this,i,c,!0,w),f.removeClass(h.customCellStyles[w])}p++}}),a.each(this.columns.records,function(a){k[this.displayfield]&&(k[this.displayfield].columnsDataFields=y)}),this.showaggregates){var C=[],D="xls"==b?"_AG":"",E=this.groupable?this.groups.length:0;this.rowdetails&&E++,"checkbox"===this.selectionmode&&E++,s.length>0&&(a.each(this.columns.records,function(a){if(this.aggregates)for(var b=0;b<this.aggregates.length;b++)if(C[b]||(C[b]={}),C[b]){var c=i._getaggregatename(this.aggregates[b]),d=i._getaggregatetype(this.aggregates[b]),e=s[a-E];e&&(C[b][this.displayfield]=D+c+": "+e[d])}}),a.each(this.columns.records,function(a){for(var b=0;b<C.length;b++)void 0==C[b][this.displayfield]&&(C[b][this.displayfield]=D)})),a.each(C,function(){e.push(this)})}var F=this,G=a.jqx.dataAdapter.ArrayExporter(e,k,l);if(void 0==c){this._renderrows(this.virtualsizeinfo);var H=G.exportTo(b);return this.showaggregates&&a.each(C,function(){e.pop(this)}),setTimeout(function(){F.exporting=!1},50),H}G.exportToFile(b,c,g,h),this.showaggregates&&a.each(C,function(){e.pop(this)}),this._renderrows(this.virtualsizeinfo),setTimeout(function(){F.exporting=!1},50)},_getexportcolor:function(a){var b=a;if("transparent"==a&&(b="#FFFFFF"),b&&b.toString()||(b="#FFFFFF"),-1!=b.toString().indexOf("rgb")){var c=b.split(",");if(-1!=b.toString().indexOf("rgba")){var d=parseInt(c[0].substring(5)),e=parseInt(c[1]),f=parseInt(c[2]),g=parseInt(c[3].substring(1,4)),h={r:d,g:e,b:f},i=this._rgbToHex(h);return 0==d&&0==e&&0==f&&0==g?"#ffffff":"#"+i}var d=parseInt(c[0].substring(4)),e=parseInt(c[1]),f=parseInt(c[2].substring(1,4)),h={r:d,g:e,b:f},i=this._rgbToHex(h);return"#"+i}if(-1!=b.toString().indexOf("#")&&4==b.toString().length){b+=b.toString().substring(1,4)}return b},_rgbToHex:function(a){return this._intToHex(a.r)+this._intToHex(a.g)+this._intToHex(a.b)},_intToHex:function(a){var b=parseInt(a).toString(16);return 1==b.length&&(b="0"+b),b.toUpperCase()},_getexportcolumntype:function(b){var c=this,d="string",e=c.source.datafields||(c.source._source?c.source._source.datafields:null);if(e){var f="";if(a.each(e,function(){if(this.name==b.displayfield)return this.type&&(f=this.type),!1}),f)return f}if(null!=b){if(void 0==this.dataview.cachedrecords)return d;var g=null;if(this.virtualmode)a.each(this.dataview.cachedrecords,function(){return g=this[b.displayfield],!1});else{if(0==this.dataview.cachedrecords.length)return d;if(null!=(g=this.dataview.cachedrecords[0][b.displayfield])&&""==g.toString())return"string"}if(null!=g){if(-1!=b.cellsformat.indexOf("c"))return"number";if(-1!=b.cellsformat.indexOf("n"))return"number";if(-1!=b.cellsformat.indexOf("p"))return"number";if(-1!=b.cellsformat.indexOf("d"))return"date";if(-1!=b.cellsformat.indexOf("y"))return"date";if(-1!=b.cellsformat.indexOf("M"))return"date";if(-1!=b.cellsformat.indexOf("m"))return"date";if(-1!=b.cellsformat.indexOf("t"))return"date";if("boolean"==typeof g)d="boolean";else if(a.jqx.dataFormat.isNumber(g))d="number";else{var h=new Date(g);if("NaN"==h.toString()||"Invalid Date"==h.toString())if(a.jqx.dataFormat){if(null!=(h=a.jqx.dataFormat.tryparsedate(g))){if(h&&h.getFullYear()&&1970==h.getFullYear()&&0==h.getMonth()&&1==h.getDate()){var i=new Number(g);return isNaN(i)?"string":"number"}return"date"}d="string"}else d="string";else d="date"}}}return d}})}(jqxBaseFramework);

