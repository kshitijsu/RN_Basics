(function(g){var window=this;var b4=function(a){g.OB.call(this,{C:"div",G:"ytp-miniplayer-ui"});this.player=a;this.H=!1;this.F=this.A=this.l=void 0;this.K(a,"minimized",this.ZI);this.K(a,"onStateChange",this.XL)},c4=function(a){g.ZJ.call(this,a);
this.g=new b4(this.player);this.g.hide();g.LJ(this.player,this.g.element,4);a.app.F.g&&(this.load(),g.L(a.getRootNode(),"ytp-player-minimized",!0))};
g.t(b4,g.OB);g.h=b4.prototype;
g.h.show=function(){this.l=new g.ko(this.qF,null,this);this.l.start();if(!this.H){this.D=new g.uV(this.player,this);g.H(this,this.D);g.LJ(this.player,this.D.element,4);this.D.A=.6;this.O=new g.yU(this.player);g.H(this,this.O);this.B=new g.T({C:"div",G:"ytp-miniplayer-scrim"});g.H(this,this.B);this.B.g(this.element);this.K(this.B.element,"click",this.Jy);var a=new g.T({C:"button",W:["ytp-miniplayer-close-button","ytp-button"],L:{"aria-label":"Close"},I:[g.SO()]});g.H(this,a);a.g(this.B.element);this.K(a.element,
"click",this.ix);this.u=new g.T({C:"div",G:"ytp-miniplayer-controls"});g.H(this,this.u);this.u.g(this.B.element);this.K(this.u.element,"click",this.Jy);var b=new g.T({C:"div",G:"ytp-miniplayer-button-container"});g.H(this,b);b.g(this.u.element);a=new g.T({C:"div",G:"ytp-miniplayer-play-button-container"});g.H(this,a);a.g(this.u.element);var c=new g.T({C:"div",G:"ytp-miniplayer-button-container"});g.H(this,c);c.g(this.u.element);this.M=new g.AS(this.player,this,!1);g.H(this,this.M);this.M.g(b.element);
b=new g.xS(this.player,this);g.H(this,b);b.g(a.element);this.J=new g.AS(this.player,this,!0);g.H(this,this.J);this.J.g(c.element);this.F=new g.ST(this.player,this);g.H(this,this.F);this.F.g(this.B.element);this.A=new g.GS(this.player,this);g.H(this,this.A);g.LJ(this.player,this.A.element,4);this.o=new g.T({C:"div",G:"ytp-miniplayer-buttons"});g.H(this,this.o);g.LJ(this.player,this.o.element,4);this.o.hide();a=new g.T({C:"button",W:["ytp-miniplayer-close-button","ytp-button"],L:{"aria-label":"Close"},
I:[g.SO()]});g.H(this,a);a.g(this.o.element);this.K(a.element,"click",this.ix);a=new g.T({C:"button",W:["ytp-miniplayer-replay-button","ytp-button"],L:{"aria-label":"Close"},I:[g.eP()]});g.H(this,a);a.g(this.o.element);this.K(a.element,"click",this.ZJ);this.K(this.player,"presentingplayerstatechange",this.rF);this.K(this.player,"appresize",this.ob);this.K(this.player,"fullscreentoggled",this.ob);this.ob();this.H=!0}0!=this.player.getPlayerState()&&g.OB.prototype.show.call(this);this.A.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.l&&(this.l.dispose(),this.l=void 0);g.OB.prototype.hide.call(this);this.player.app.F.g||(this.H&&this.A.hide(),this.player.loadModule("annotations_module"))};
g.h.T=function(){this.l&&(this.l.dispose(),this.l=void 0);g.OB.prototype.T.call(this)};
g.h.ix=function(){this.player.stopVideo();this.player.ma("onCloseMiniplayer")};
g.h.ZJ=function(){this.player.playVideo()};
g.h.Jy=function(a){if(a.target==this.B.element||a.target==this.u.element)g.Q(g.V(this.player).experiments,"kevlar_miniplayer_scrim_pause")?2==this.player.getPlayerState()?this.player.playVideo():this.player.pauseVideo():this.player.ma("onExpandMiniplayer")};
g.h.ZI=function(){g.L(this.player.getRootNode(),"ytp-player-minimized",this.player.app.F.g);this.player.app.F.g&&0==this.player.getPlayerState()?this.o.show():this.o.hide()};
g.h.qF=function(){this.A.pd();this.F.pd();this.l&&this.l.start()};
g.h.rF=function(a){g.U(a.state,32)&&this.D.hide()};
g.h.ob=function(){var a=this.A,b=g.vJ(this.player).getPlayerSize().width;a.Ma=0;a.A=b;a.D=!1;g.IS(a)};
g.h.XL=function(a){this.player.app.F.g&&(0==a?(this.hide(),this.o.show()):(this.show(),this.o.hide()))};
g.h.gb=function(){return this.D};
g.h.wc=function(){return!1};
g.h.kg=function(){return!1};
g.h.Wh=function(){return!1};
g.h.Rz=function(){};
g.h.ij=function(){};
g.h.El=function(){};
g.h.Jm=function(){return null};
g.h.Rq=function(){return new g.jh(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.fn=function(a,b,c,d,e){a.style.left="";a.style.top="";a.style.bottom="";d=g.Oh(a);var f=g.vJ(this.player).getPlayerSize().width;b&&["ytp-prev-button","ytp-next-button"].some(function(k){return g.bo(b,k)})?(c=12,a.style.top=12+(e||0)+"px"):(c-=d.width/2,a.style.bottom=25+(e||0)+"px");
a.style.left=g.od(c,0,f-d.width)+"px"};
g.h.showControls=function(){};
g.h.Sq=function(){};
g.h.Hh=function(){};g.t(c4,g.ZJ);c4.prototype.init=function(){};
c4.prototype.load=function(){this.player.hideControls();this.g.show()};
c4.prototype.unload=function(){this.player.showControls();this.g.hide()};g.uU.miniplayer=c4;})(_yt_player);
