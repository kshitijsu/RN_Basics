(function(g){var window=this;var J2=function(a,b,c){var d=b.oa();g.L(a.element,"ytp-suggestion-set",!!d.videoId);var e=b.getPlaylistId();c=b.sc(c?c:"mqdefault.jpg");var f=b instanceof g.KA&&b.lengthSeconds?g.IP(b.lengthSeconds):null,k=!!e;e=k&&"RD"==(new g.vD(e.substr(0,2),e.substr(2))).type;var l=b instanceof g.KA?b.sa:null;d={title:b.title,author:b.author,author_and_views:d.shortViewCount?b.author+" \u2022 "+d.shortViewCount:b.author,aria_label:b.Wi||g.KM("Watch $TITLE",{TITLE:b.title}),duration:f,url:b.zj(),is_live:l,is_list:k,
is_mix:e,background:c?"background-image: url("+c+")":""};b instanceof g.xD&&(d.playlist_length=b.getLength());a.update(d)},K2=function(a,b){g.OB.call(this,{C:"div",
W:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.player=a;this.created=!1},L2=function(a){g.T.call(this,{C:"div",
W:["ytp-upnext","ytp-player-content"],L:{"aria-label":"{{aria_label}}"},I:[{C:"div",G:"ytp-cued-thumbnail-overlay-image",L:{style:"{{background}}"}},{C:"span",G:"ytp-upnext-top",I:[{C:"span",G:"ytp-upnext-header",U:"Up Next"},{C:"span",G:"ytp-upnext-title",U:"{{title}}"},{C:"span",G:"ytp-upnext-author",U:"{{author}}"}]},{C:"a",G:"ytp-upnext-autoplay-icon",L:{role:"button",href:"{{url}}","aria-label":"Play next video"},I:[{C:"svg",L:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},I:[{C:"circle",
G:"ytp-svg-autoplay-circle",L:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{C:"circle",G:"ytp-svg-autoplay-ring",L:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{C:"path",G:"ytp-svg-fill",L:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{C:"span",G:"ytp-upnext-bottom",I:[{C:"span",G:"ytp-upnext-cancel"},{C:"span",G:"ytp-upnext-paused",U:"Autoplay is paused"}]}]});
this.A=null;var b=this.i["ytp-upnext-cancel"];this.A=new g.T({C:"button",W:["ytp-upnext-cancel-button","ytp-button"],L:{tabindex:"0","aria-label":"Cancel autoplay"},U:"Cancel"});g.H(this,this.A);this.A.da("click",this.IH,this);this.A.g(b);this.l=a;this.J=this.i["ytp-svg-autoplay-ring"];this.D=this.B=this.o=this.u=null;this.F=new g.M(this.yl,5E3,this);g.H(this,this.F);this.H=0;this.K(this.i["ytp-upnext-autoplay-icon"],"click",this.zJ);this.gy();this.K(a,"autonavvisibility",this.gy);this.K(a,"mdxnowautoplaying",
this.MI);this.K(a,"mdxautoplaycanceled",this.NI);this.K(a,"mdxautoplayupnext",this.CA);3==this.l.getPresentingPlayerType()&&(a=(a=g.wJ(g.qJ(this.l)))?a.MC():null)&&this.CA(a)},M2=function(a,b){if(!a.o){g.Zp("a11y-announce","Up Next "+a.u.title);
a.H=g.P();a.o=new g.M((0,g.z)(a.Bo,a,b),25);a.Bo(b);var c=b||g.R(g.V(a.l).experiments,"autoplay_time")||1E4;a.l.ma("onAutonavCoundownStarted",c)}g.eo(a.element,"ytp-upnext-autoplay-paused")},O2=function(a){N2(a);
a.H=g.P();a.Bo();g.J(a.element,"ytp-upnext-autoplay-paused")},N2=function(a){a.o&&(a.o.dispose(),a.o=null)},P2=function(a,b){b=void 0===b?!1:b;
if(g.Q(g.V(a.l).experiments,"autonav_notifications")&&b&&window.Notification&&document.hasFocus){var c=Notification.permission;"default"==c?Notification.requestPermission():"granted"!=c||document.hasFocus()||(c=a.u.oa(),a.yl(),a.B=new Notification("Up Next",{body:c.title,icon:c.sc()}),a.D=a.K(a.B,"click",a.rJ),a.F.start())}N2(a);a.l.nextVideo(!1,b)},Q2=function(a){K2.call(this,a,"subscribecard-endscreen");
var b=a.getVideoData();this.l=new g.T({C:"div",G:"ytp-subscribe-card",I:[{C:"img",G:"ytp-author-image",L:{src:b.Kd}},{C:"div",G:"ytp-subscribe-card-right",I:[{C:"div",G:"ytp-author-name",U:b.author},{C:"div",G:"html5-subscribe-button-container"}]}]});g.H(this,this.l);this.l.g(this.element);this.o=new g.mV("Subscribe",null,"Unsubscribe",null,!0,!1,b.If,b.subscribed,"trailer-endscreen",null,null,a);g.H(this,this.o);this.o.g(this.l.i["html5-subscribe-button-container"]);this.hide()},R2=function(a){var b=
g.V(a),c=g.Mw||g.yh?{style:"will-change: opacity"}:void 0,d=b.i,e=["ytp-videowall-still"];
b.g&&e.push("ytp-videowall-show-text");g.T.call(this,{C:"a",W:e,L:{href:"{{url}}",target:d?b.u:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},I:[{C:"div",G:"ytp-videowall-still-image",L:{style:"{{background}}"}},{C:"span",G:"ytp-videowall-still-info",I:[{C:"span",G:"ytp-videowall-still-info-bg",I:[{C:"span",G:"ytp-videowall-still-info-content",L:c,I:[{C:"span",G:"ytp-videowall-still-info-title",U:"{{title}}"},{C:"span",G:"ytp-videowall-still-info-author",
U:"{{author_and_views}}"},{C:"span",G:"ytp-videowall-still-info-live",U:"Live"},{C:"span",G:"ytp-videowall-still-info-duration",U:"{{duration}}"}]}]}]},{C:"span",W:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],I:[{C:"span",G:"ytp-videowall-still-listlabel-icon"},"Playlist",{C:"span",G:"ytp-videowall-still-listlabel-length",I:[" (",{C:"span",U:"{{playlist_length}}"},")"]}]},{C:"span",W:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],I:[{C:"span",G:"ytp-videowall-still-listlabel-mix-icon"},
"Mix",{C:"span",G:"ytp-videowall-still-listlabel-length",U:" (50+)"}]}]});this.A=d;this.l=a;this.o=null;this.u=new g.Qr(this);g.H(this,this.u);this.da("click",this.D);this.da("keypress",this.F);this.u.K(a,"videodatachange",this.B);g.V(a).F&&g.xN(a.app.O,this.element,this);this.B()},S2=function(a){g.OJ(a.l,a.element);
var b=a.o.oa().videoId,c=a.o.getPlaylistId();g.wX(a.l.app,b,a.o.Yc,c,void 0,void 0,void 0)},T2=function(a){K2.call(this,a,"videowall-endscreen");
this.H=a;this.B=0;this.o=[];this.D=this.u=this.A=null;this.F=this.R=!1;this.O=null;this.ca=new g.Qr(this);g.H(this,this.ca);this.J=new g.M(g.Qa(g.J,this.element,"ytp-show-tiles"),0);g.H(this,this.J);var b=new g.T({C:"button",W:["ytp-button","ytp-endscreen-previous"],L:{"aria-label":"Previous"},I:[g.NO()]});g.H(this,b);b.g(this.element);b.da("click",this.iF,this);this.M=new g.JB({C:"div",G:"ytp-endscreen-content"});g.H(this,this.M);this.M.g(this.element);b=new g.T({C:"button",W:["ytp-button","ytp-endscreen-next"],
L:{"aria-label":"Next"},I:[g.OO()]});g.H(this,b);b.g(this.element);b.da("click",this.hF,this);this.l=new L2(a);g.H(this,this.l);g.LJ(this.player,this.l.element,4);this.hide()},U2=function(a){return g.MJ(a.player)&&a.ku()&&!a.D},V2=function(a,b){return(0,g.F)(b.suggestions,function(c){c=g.pR(g.V(a.H),c);
g.H(a,c);return c})},W2=function(a){var b=a.Ie();
b!=a.R&&(a.R=b,a.player.N("autonavvisibility"))},Y2=function(a){g.ZJ.call(this,a);
this.g=null;this.i=new g.Qr(this);g.H(this,this.i);this.l=g.V(a);X2(a)?this.g=new T2(this.player):this.l.Ja?this.g=new Q2(this.player):this.g=new K2(this.player);g.H(this,this.g);g.LJ(this.player,this.g.element,4);this.zz();this.i.K(a,"videodatachange",this.zz,this);this.i.K(a,g.uD("endscreen"),this.yE,this);this.i.K(a,"crx_endscreen",this.zE,this)},X2=function(a){a=g.V(a);
return a.Ga&&!a.Ja};
g.t(K2,g.OB);K2.prototype.create=function(){this.created=!0};
K2.prototype.destroy=function(){this.created=!1};
K2.prototype.ku=function(){return!1};
K2.prototype.Ie=function(){return!1};g.t(L2,g.T);g.h=L2.prototype;g.h.yl=function(){this.B&&(this.F.stop(),this.Oa(this.D),this.D=null,this.B.close(),this.B=null)};
g.h.gy=function(){g.NB(this,this.l.Ie())};
g.h.rJ=function(){window.focus();this.yl()};
g.h.hide=function(){g.T.prototype.hide.call(this)};
g.h.Bo=function(a){a=a||g.R(g.V(this.l).experiments,"autoplay_time")||1E4;var b=Math.min(g.P()-this.H,a);a=Math.min(b/a,1);this.J.setAttribute("stroke-dashoffset",-211*(a+1));1<=a&&3!=this.l.getPresentingPlayerType()?P2(this,!0):this.o&&this.o.start()};
g.h.zJ=function(a){!g.ae(this.A.element,g.Fr(a))&&g.sR(a,this.l)&&P2(this)};
g.h.IH=function(){g.sJ(this.l,!0)};
g.h.MI=function(a){this.l.getPresentingPlayerType();this.show();M2(this,a)};
g.h.CA=function(a){this.l.getPresentingPlayerType();this.u&&this.u.oa().videoId==a.oa().videoId||(this.u=a,J2(this,a,"hqdefault.jpg"))};
g.h.NI=function(){this.l.getPresentingPlayerType();N2(this);this.hide()};
g.h.T=function(){N2(this);this.yl();g.T.prototype.T.call(this)};g.t(Q2,K2);g.t(R2,g.T);R2.prototype.D=function(a){g.sR(a,this.l,this.A,this.o.Yc||void 0)&&S2(this)};
R2.prototype.F=function(a){switch(a.keyCode){case 13:case 32:g.Kr(a)||(S2(this),g.Jr(a))}};
R2.prototype.B=function(){var a=this.l.getVideoData(),b=g.V(this.l);this.A=a.Xb?!1:b.i};g.t(T2,K2);g.h=T2.prototype;g.h.create=function(){K2.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.A=V2(this,a),this.u=a);this.Cf();this.ca.K(this.player,"appresize",this.Cf);this.ca.K(this.player,"onVideoAreaChange",this.Cf);this.ca.K(this.player,"videodatachange",this.jF);this.ca.K(this.player,"autonavchange",this.Pq);this.ca.K(this.player,"autonavcancel",this.gF);a=this.u.autonavState;a!=this.O&&this.Pq(a);this.ca.K(this.element,"transitionend",this.QK)};
g.h.destroy=function(){g.Sr(this.ca);g.rf(this.o);this.o=[];this.A=null;K2.prototype.destroy.call(this);g.eo(this.element,"ytp-show-tiles");this.J.stop();this.O=this.u.autonavState};
g.h.ku=function(){return 1!=this.u.autonavState};
g.h.show=function(){K2.prototype.show.call(this);g.eo(this.element,"ytp-show-tiles");g.V(this.player).g?g.oo(this.J):this.J.start();(this.F||this.D&&this.D!=this.u.clientPlaybackNonce)&&g.sJ(this.player,!1);U2(this)?(W2(this),2==this.u.autonavState?g.Q(g.V(this.player).experiments,"fast_autonav_in_background")&&3==this.player.getVisibilityState()?P2(this.l,!0):M2(this.l):3==this.u.autonavState&&O2(this.l)):(g.sJ(this.player,!0),W2(this))};
g.h.hide=function(){K2.prototype.hide.call(this);O2(this.l);W2(this)};
g.h.QK=function(a){g.Fr(a)==this.element&&this.Cf()};
g.h.Cf=function(){if(this.A&&this.A.length){g.J(this.element,"ytp-endscreen-paginate");var a=g.CJ(this.H,!0),b=g.cC(this.H);b&&(b=b.wc()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),k=Math.max(a.height/54,2),l=this.A.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<k);){var p=b/2,r=e/2,u=b<=f-2&&n>=r*m,y=e<=k-2&&n>=p*m;if((p+1)/r*d/c>c/(p/(r+1)*d)&&y)n-=p*m,e+=2;else if(u)n-=r*m,b+=2;else if(y)n-=p*m,e+=2;else break}d=
!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m*=c;n*=c;m*=g.od(a.width/m||1,1,1.21);n*=g.od(a.height/n||1,1,1.21);m=Math.floor(Math.min(a.width,m));n=Math.floor(Math.min(a.height,n));a=this.M.element;g.Nh(a,m,n);g.vh(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});c=this.l;f=this.A[0];c.u=f;J2(c,f,"hqdefault.jpg");g.L(this.element,"ytp-endscreen-takeover",U2(this));W2(this);m+=4;n+=4;for(f=c=0;f<b;f++)for(k=0;k<e;k++)if(p=c,r=0,d&&f>=b-2&&k>=e-
2?r=1:0==k%2&&0==f%2&&(2>k&&2>f?0==k&&0==f&&(r=2):r=2),p=g.pd(p+this.B,l),0!=r){u=this.o[c];u||(u=new R2(this.player),this.o[c]=u,a.appendChild(u.element));y=Math.floor(n*k/e);var D=Math.floor(m*f/b),E=Math.floor(n*(k+r)/e)-y-4,K=Math.floor(m*(f+r)/b)-D-4;g.Dh(u.element,D,y);g.Nh(u.element,K,E);g.vh(u.element,"transitionDelay",(k+f)/20+"s");g.L(u.element,"ytp-videowall-still-mini",1==r);g.L(u.element,"ytp-videowall-still-large",2<r);r=u;p=this.A[p];r.o!=p&&(r.o=p,J2(r,p,g.bo(r.element,"ytp-videowall-still-large")?
"hqdefault.jpg":"mqdefault.jpg"),p=(p=p.Yc)&&p.itct)&&(u=r.l,g.V(u).F&&g.yN(u.app.O,r.element,p));c++}g.L(this.element,"ytp-endscreen-paginate",c<l);for(b=this.o.length-1;b>=c;b--)e=this.o[b],g.Xd(e.element),g.qf(e);this.o.length=c}};
g.h.jF=function(){var a=this.player.getVideoData();this.u!=a&&(this.B=0,this.A=V2(this,a),this.u=a,this.Cf())};
g.h.hF=function(){this.B+=this.o.length;this.Cf()};
g.h.iF=function(){this.B-=this.o.length;this.Cf()};
g.h.LD=function(){return!!this.l.o};
g.h.Pq=function(a){1==a?(this.F=!1,this.D=this.u.clientPlaybackNonce,N2(this.l),this.Fa()&&this.Cf()):(this.F=!0,this.Fa()&&U2(this)&&(2==a?M2(this.l):3==a&&O2(this.l)))};
g.h.gF=function(a){if(a){for(a=0;a<this.o.length;a++)g.PJ(this.H,this.o[a].element,!0);this.Pq(1)}else this.D=null,this.F=!1;this.Cf()};
g.h.Ie=function(){return this.Fa()&&U2(this)};g.t(Y2,g.ZJ);g.h=Y2.prototype;g.h.Dk=function(){var a=this.player.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!X2(this.player)||b;a=a.Lc;var c=g.XW(this.player.app);return b&&!a&&!c};
g.h.Ie=function(){return this.g.Ie()};
g.h.HD=function(){return this.Ie()?this.g.LD():!1};
g.h.T=function(){g.HJ(this.player,"endscreen");g.ZJ.prototype.T.call(this)};
g.h.load=function(){g.ZJ.prototype.load.call(this);this.g.show()};
g.h.unload=function(){g.ZJ.prototype.unload.call(this);this.g.hide();this.g.destroy()};
g.h.yE=function(a){this.Dk()&&(this.g.created||this.g.create(),"load"==a.getId()&&this.load())};
g.h.zE=function(a){"load"==a.getId()&&this.loaded&&this.unload()};
g.h.zz=function(){g.HJ(this.player,"endscreen");var a=Math.max(1E3*(this.player.getVideoData().lengthSeconds-10),0);a=new g.rD(a,0x8000000000000,{id:"preload",namespace:"endscreen"});g.H(this,a);var b=new g.rD(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.H(this,b);g.EJ(this.player,[a,b])};g.uU.endscreen=Y2;})(_yt_player);
