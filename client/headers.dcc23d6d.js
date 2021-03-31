import{S as e,i as r,s as a,g as o,e as t,o as s,p as n,q as h,d as c,h as i,c as l,a as f,r as d,u as m,b as p,f as b,j as v,v as g,w as u,x as E,y as T,n as w}from"./client.a6f00f2b.js";import{H as y,a as x}from"./index.c6e93800.js";function D(e){let r,a='GET /home.html HTTP/1.1\nHost: developer.mozilla.org\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8\nAccept-Language: en-US,en;q=0.5\nAccept-Encoding: gzip, deflate, br\nReferer: https://developer.mozilla.org/testpage.html\nConnection: keep-alive\nUpgrade-Insecure-Requests: 1\nIf-Modified-Since: Mon, 18 Jul 2016 02:36:04 GMT\nIf-None-Match: "c561c68d0ba92bbeb8b0fff2a9199f722e3a621a"\nCache-Control: max-age=0';return{c(){r=s(a)},l(e){r=d(e,a)},m(e,a){b(e,r,a)},p:w,d(e){e&&c(r)}}}function R(e){let r,a,w,R,k,S,P,H,I,O,q,A,N,V,B,M,U,X,G,L,F,$,z,Y,_,C,W,j,Z,J,K,Q,ee,re,ae,oe,te,se,ne,he,ce,ie,le,fe,de,me,pe,be,ve,ge,ue,Ee,Te,we,ye,xe,De,Re,ke,Se,Pe,He,Ie,Oe,qe,Ae,Ne,Ve,Be,Me,Ue,Xe,Ge,Le,Fe,$e,ze,Ye,_e,Ce,We,je,Ze,Je,Ke,Qe,er,rr,ar,or,tr,sr,nr,hr,cr,ir,lr,fr,dr,mr,pr,br,vr,gr,ur,Er,Tr,wr,yr,xr,Dr,Rr,kr,Sr,Pr,Hr,Ir,Or,qr,Ar,Nr,Vr,Br,Mr,Ur,Xr,Gr,Lr,Fr,$r,zr,Yr,_r,Cr,Wr,jr,Zr,Jr,Kr,Qr,ea,ra,aa,oa,ta,sa,na,ha,ca,ia,la,fa,da,ma,pa,ba,va,ga,ua,Ea,Ta,wa,ya,xa,Da,Ra,ka,Sa,Pa,Ha,Ia,Oa,qa,Aa,Na,Va,Ba,Ma,Ua,Xa,Ga,La,Fa,$a,za,Ya,_a,Ca,Wa,ja,Za,Ja,Ka,Qa,eo,ro,ao,oo,to,so,no,ho,co,io,lo,fo,mo,po,bo,vo,go,uo,Eo,To,wo,yo,xo,Do,Ro,ko,So,Po,Ho,Io,Oo,qo,Ao,No,Vo,Bo,Mo,Uo,Xo,Go,Lo,Fo,$o,zo,Yo,_o,Co,Wo,jo,Zo,Jo,Ko,Qo,et,rt,at,ot,tt;const st=new y({props:{language:x,$$slots:{default:[D]},$$scope:{ctx:e}}});return{c(){r=o(),a=t("div"),w=t("div"),R=t("img"),S=o(),P=t("div"),H=t("div"),I=t("h2"),O=s("What are HTTP headers?"),q=o(),A=t("p"),N=s("An HTTP header is information that is sent with "),V=t("strong"),B=s("every"),M=s(" HTTP request that your web browser makes.\n        More info can be found "),U=t("a"),X=s("here"),G=s(".\n        An example of an HTTP header (request header) is shown below:\n        "),n(st.$$.fragment),L=o(),F=t("div"),$=t("div"),z=s("The HTTP header lets the server know the following:"),Y=o(),_=t("div"),C=s("The URL requested: "),W=t("span"),j=s("https://developer.mozilla.org/home.html"),Z=o(),J=t("div"),K=s("The browser used to make the request: "),Q=t("span"),ee=s("Firefox 50"),re=o(),ae=t("div"),oe=s("The language the browser supports: "),te=t("span"),se=s("English (US)"),ne=o(),he=t("div"),ce=s("The page the user navigated from: "),ie=t("span"),le=s("https://developer.mozilla.org/testpage.html"),fe=o(),de=t("div"),me=t("h2"),pe=s("Chameleon options"),be=o(),ve=t("div"),ge=t("h3"),ue=s("Enable DNT (Do Not Track)"),Ee=o(),Te=t("p"),we=s("Enables Do Not Track in the header. This "),ye=t("strong"),xe=s("DOES NOT"),De=s(" mean that you will not get tracked on the web.\n          By enabling this option you are expressing that you "),Re=t("em"),ke=s("prefer"),Se=s(" not to be tracked. You will have to\n          trust the server to honor your request.\n          More info can be found "),Pe=t("a"),He=s("here"),Ie=s("."),Oe=o(),qe=t("div"),Ae=t("h3"),Ne=s("Prevent Etag tracking"),Ve=o(),Be=t("p"),Me=s("Etags are used to control how long files are cached by the browser. They can be used to track you online\n          without cookies.\n          More info can be found "),Ue=t("a"),Xe=s("here"),Ge=s("."),Le=o(),Fe=t("div"),$e=t("h3"),ze=s("Spoof Accept-Language"),Ye=o(),_e=t("p"),Ce=s("This may change the language of the content returned to the browser.\n          For example, changing Youtube's text from English to Chinese regardless of where the user is located.\n          More info can be found "),We=t("a"),je=s("here"),Ze=s("."),Je=o(),Ke=t("div"),Qe=t("h3"),er=s("Spoof X-Forwarded-For/Via IP"),rr=o(),ar=t("p"),or=s("You can fool several sites that obtain your IP address by setting the X-Forwarded-For/Via header fields.\n          "),tr=t("strong"),sr=s("This does not work on most sites and will not make you anonymous online."),nr=o(),hr=t("div"),cr=t("h2"),ir=s("Referer options"),lr=o(),fr=t("p"),dr=s('The referer header field lets a web server know where people are visiting from. For example,\n        when you perform a search for "cake recipes" and click a link to someone\'s website,\n        the server now knows which search engine was used to get to a page. This provides useful information\n        to website owners who can use the referer for analytics. However, there are some privacy and security concerns\n        that are detailed '),mr=t("a"),pr=s("here"),br=s("."),vr=o(),gr=t("div"),ur=t("h3"),Er=s("Disable referer"),Tr=o(),wr=t("p"),yr=s("This clears the referer header. While useful, it can break sites and redirects."),xr=o(),Dr=t("div"),Rr=t("h3"),kr=s("Referer X Origin Policy"),Sr=o(),Pr=t("p"),Hr=s("Do not modify the about:config setting: network.http.referer.XOriginPolicy."),Ir=o(),Or=t("p"),qr=s('A request made to a domain different from the web page that\n        the request is coming from is a "cross origin" request.'),Ar=o(),Nr=t("div"),Vr=t("table"),Br=t("thead"),Mr=t("tr"),Ur=t("th"),Xr=s("Option"),Gr=o(),Lr=t("th"),Fr=s("Description"),$r=o(),zr=t("tbody"),Yr=t("tr"),_r=t("td"),Cr=s("Always send"),Wr=o(),jr=t("td"),Zr=s("Always send the referer for X Origin requests"),Jr=o(),Kr=t("tr"),Qr=t("td"),ea=s("Match base domain"),ra=o(),aa=t("td"),oa=s("Only send X Origin request if base domain matches\n                "),ta=t("br"),sa=o(),na=t("br"),ha=s("\n                If a request from a web page, "),ca=t("strong"),ia=s("news.example.com"),la=s(", is made to \n                "),fa=t("strong"),da=s("test.com"),ma=s(", the referer will "),pa=t("em"),ba=s("not"),va=s(" be sent because\n                both URLs "),ga=t("em"),ua=s("do not"),Ea=s(" share the same base domain (example.com, test.com)."),Ta=o(),wa=t("tr"),ya=t("td"),xa=s("Match host"),Da=o(),Ra=t("td"),ka=s("Only send X Origin request if hostname matches\n                "),Sa=t("br"),Pa=o(),Ha=t("br"),Ia=s("\n                If a request from a web page, "),Oa=t("strong"),qa=s("news.example.com"),Aa=s(", is made to \n                "),Na=t("strong"),Va=s("news.example.com"),Ba=s(", the referer "),Ma=t("em"),Ua=s("will"),Xa=s(" be sent because\n                both URLs share the same base hostname (news.example.com)."),Ga=o(),La=t("div"),Fa=t("h3"),$a=s("Referer Trimming Policy"),za=o(),Ya=t("p"),_a=s("Do not modify the about:config setting: network.http.referer.trimmingPolicy."),Ca=o(),Wa=t("div"),ja=t("table"),Za=t("thead"),Ja=t("tr"),Ka=t("th"),Qa=s("Option"),eo=o(),ro=t("th"),ao=s("Description"),oo=o(),to=t("tbody"),so=t("tr"),no=t("td"),ho=s("Send full URI"),co=o(),io=t("td"),lo=s("Sends the full referer"),fo=o(),mo=t("tr"),po=t("td"),bo=s("Scheme, host, port, path"),vo=o(),go=t("td"),uo=s("Sends the scheme, host, port and path of the URL; strips query strings.\n                "),Eo=t("br"),To=o(),wo=t("br"),yo=o(),xo=t("strong"),Do=s("Before:"),Ro=o(),ko=t("br"),So=s("\n                https://example.com:8080/page?privacy=false&trackingid=XYZ\n                "),Po=t("br"),Ho=o(),Io=t("strong"),Oo=s("After:"),qo=o(),Ao=t("br"),No=s("\n                https://example.com:8080/page"),Vo=o(),Bo=t("tr"),Mo=t("td"),Uo=s("Scheme, host, port"),Xo=o(),Go=t("td"),Lo=s("Sends the scheme, host, and port of the URL.\n                "),Fo=t("br"),$o=o(),zo=t("br"),Yo=o(),_o=t("strong"),Co=s("Before:"),Wo=o(),jo=t("br"),Zo=s("\n                https://example.com:8080/page?privacy=false&trackingid=XYZ\n                "),Jo=t("br"),Ko=o(),Qo=t("strong"),et=s("After:"),rt=o(),at=t("br"),ot=s("\n                https://example.com:8080/"),this.h()},l(e){h('[data-svelte="svelte-rg5zis"]',document.head).forEach(c),r=i(e),a=l(e,"DIV",{class:!0});var o=f(a);w=l(o,"DIV",{class:!0});var t=f(w);R=l(t,"IMG",{src:!0,alt:!0}),t.forEach(c),S=i(o),P=l(o,"DIV",{});var s=f(P);H=l(s,"DIV",{class:!0});var n=f(H);I=l(n,"H2",{class:!0});var p=f(I);O=d(p,"What are HTTP headers?"),p.forEach(c),q=i(n),A=l(n,"P",{});var b=f(A);N=d(b,"An HTTP header is information that is sent with "),V=l(b,"STRONG",{});var v=f(V);B=d(v,"every"),v.forEach(c),M=d(b," HTTP request that your web browser makes.\n        More info can be found "),U=l(b,"A",{href:!0,target:!0,rel:!0});var g=f(U);X=d(g,"here"),g.forEach(c),G=d(b,".\n        An example of an HTTP header (request header) is shown below:\n        "),m(st.$$.fragment,b),b.forEach(c),L=i(n),F=l(n,"DIV",{class:!0});var u=f(F);$=l(u,"DIV",{class:!0});var E=f($);z=d(E,"The HTTP header lets the server know the following:"),E.forEach(c),Y=i(u),_=l(u,"DIV",{});var T=f(_);C=d(T,"The URL requested: "),W=l(T,"SPAN",{class:!0});var y=f(W);j=d(y,"https://developer.mozilla.org/home.html"),y.forEach(c),T.forEach(c),Z=i(u),J=l(u,"DIV",{});var x=f(J);K=d(x,"The browser used to make the request: "),Q=l(x,"SPAN",{class:!0});var D=f(Q);ee=d(D,"Firefox 50"),D.forEach(c),x.forEach(c),re=i(u),ae=l(u,"DIV",{});var k=f(ae);oe=d(k,"The language the browser supports: "),te=l(k,"SPAN",{class:!0});var tt=f(te);se=d(tt,"English (US)"),tt.forEach(c),k.forEach(c),ne=i(u),he=l(u,"DIV",{});var nt=f(he);ce=d(nt,"The page the user navigated from: "),ie=l(nt,"SPAN",{class:!0});var ht=f(ie);le=d(ht,"https://developer.mozilla.org/testpage.html"),ht.forEach(c),nt.forEach(c),u.forEach(c),n.forEach(c),fe=i(s),de=l(s,"DIV",{class:!0});var ct=f(de);me=l(ct,"H2",{class:!0});var it=f(me);pe=d(it,"Chameleon options"),it.forEach(c),be=i(ct),ve=l(ct,"DIV",{class:!0});var lt=f(ve);ge=l(lt,"H3",{class:!0});var ft=f(ge);ue=d(ft,"Enable DNT (Do Not Track)"),ft.forEach(c),Ee=i(lt),Te=l(lt,"P",{});var dt=f(Te);we=d(dt,"Enables Do Not Track in the header. This "),ye=l(dt,"STRONG",{});var mt=f(ye);xe=d(mt,"DOES NOT"),mt.forEach(c),De=d(dt," mean that you will not get tracked on the web.\n          By enabling this option you are expressing that you "),Re=l(dt,"EM",{});var pt=f(Re);ke=d(pt,"prefer"),pt.forEach(c),Se=d(dt," not to be tracked. You will have to\n          trust the server to honor your request.\n          More info can be found "),Pe=l(dt,"A",{href:!0,target:!0,rel:!0});var bt=f(Pe);He=d(bt,"here"),bt.forEach(c),Ie=d(dt,"."),dt.forEach(c),lt.forEach(c),Oe=i(ct),qe=l(ct,"DIV",{class:!0});var vt=f(qe);Ae=l(vt,"H3",{class:!0});var gt=f(Ae);Ne=d(gt,"Prevent Etag tracking"),gt.forEach(c),Ve=i(vt),Be=l(vt,"P",{});var ut=f(Be);Me=d(ut,"Etags are used to control how long files are cached by the browser. They can be used to track you online\n          without cookies.\n          More info can be found "),Ue=l(ut,"A",{href:!0,target:!0,rel:!0});var Et=f(Ue);Xe=d(Et,"here"),Et.forEach(c),Ge=d(ut,"."),ut.forEach(c),vt.forEach(c),Le=i(ct),Fe=l(ct,"DIV",{class:!0});var Tt=f(Fe);$e=l(Tt,"H3",{class:!0});var wt=f($e);ze=d(wt,"Spoof Accept-Language"),wt.forEach(c),Ye=i(Tt),_e=l(Tt,"P",{});var yt=f(_e);Ce=d(yt,"This may change the language of the content returned to the browser.\n          For example, changing Youtube's text from English to Chinese regardless of where the user is located.\n          More info can be found "),We=l(yt,"A",{href:!0,target:!0,rel:!0});var xt=f(We);je=d(xt,"here"),xt.forEach(c),Ze=d(yt,"."),yt.forEach(c),Tt.forEach(c),Je=i(ct),Ke=l(ct,"DIV",{class:!0});var Dt=f(Ke);Qe=l(Dt,"H3",{class:!0});var Rt=f(Qe);er=d(Rt,"Spoof X-Forwarded-For/Via IP"),Rt.forEach(c),rr=i(Dt),ar=l(Dt,"P",{});var kt=f(ar);or=d(kt,"You can fool several sites that obtain your IP address by setting the X-Forwarded-For/Via header fields.\n          "),tr=l(kt,"STRONG",{});var St=f(tr);sr=d(St,"This does not work on most sites and will not make you anonymous online."),St.forEach(c),kt.forEach(c),Dt.forEach(c),ct.forEach(c),nr=i(s),hr=l(s,"DIV",{class:!0});var Pt=f(hr);cr=l(Pt,"H2",{class:!0});var Ht=f(cr);ir=d(Ht,"Referer options"),Ht.forEach(c),lr=i(Pt),fr=l(Pt,"P",{});var It=f(fr);dr=d(It,'The referer header field lets a web server know where people are visiting from. For example,\n        when you perform a search for "cake recipes" and click a link to someone\'s website,\n        the server now knows which search engine was used to get to a page. This provides useful information\n        to website owners who can use the referer for analytics. However, there are some privacy and security concerns\n        that are detailed '),mr=l(It,"A",{href:!0,target:!0,rel:!0});var Ot=f(mr);pr=d(Ot,"here"),Ot.forEach(c),br=d(It,"."),It.forEach(c),Pt.forEach(c),vr=i(s),gr=l(s,"DIV",{class:!0});var qt=f(gr);ur=l(qt,"H3",{class:!0});var At=f(ur);Er=d(At,"Disable referer"),At.forEach(c),Tr=i(qt),wr=l(qt,"P",{});var Nt=f(wr);yr=d(Nt,"This clears the referer header. While useful, it can break sites and redirects."),Nt.forEach(c),qt.forEach(c),xr=i(s),Dr=l(s,"DIV",{class:!0});var Vt=f(Dr);Rr=l(Vt,"H3",{class:!0});var Bt=f(Rr);kr=d(Bt,"Referer X Origin Policy"),Bt.forEach(c),Sr=i(Vt),Pr=l(Vt,"P",{class:!0});var Mt=f(Pr);Hr=d(Mt,"Do not modify the about:config setting: network.http.referer.XOriginPolicy."),Mt.forEach(c),Ir=i(Vt),Or=l(Vt,"P",{});var Ut=f(Or);qr=d(Ut,'A request made to a domain different from the web page that\n        the request is coming from is a "cross origin" request.'),Ut.forEach(c),Ar=i(Vt),Nr=l(Vt,"DIV",{class:!0});var Xt=f(Nr);Vr=l(Xt,"TABLE",{});var Gt=f(Vr);Br=l(Gt,"THEAD",{});var Lt=f(Br);Mr=l(Lt,"TR",{});var Ft=f(Mr);Ur=l(Ft,"TH",{});var $t=f(Ur);Xr=d($t,"Option"),$t.forEach(c),Gr=i(Ft),Lr=l(Ft,"TH",{});var zt=f(Lr);Fr=d(zt,"Description"),zt.forEach(c),Ft.forEach(c),Lt.forEach(c),$r=i(Gt),zr=l(Gt,"TBODY",{});var Yt=f(zr);Yr=l(Yt,"TR",{});var _t=f(Yr);_r=l(_t,"TD",{});var Ct=f(_r);Cr=d(Ct,"Always send"),Ct.forEach(c),Wr=i(_t),jr=l(_t,"TD",{});var Wt=f(jr);Zr=d(Wt,"Always send the referer for X Origin requests"),Wt.forEach(c),_t.forEach(c),Jr=i(Yt),Kr=l(Yt,"TR",{});var jt=f(Kr);Qr=l(jt,"TD",{});var Zt=f(Qr);ea=d(Zt,"Match base domain"),Zt.forEach(c),ra=i(jt),aa=l(jt,"TD",{});var Jt=f(aa);oa=d(Jt,"Only send X Origin request if base domain matches\n                "),ta=l(Jt,"BR",{}),sa=i(Jt),na=l(Jt,"BR",{}),ha=d(Jt,"\n                If a request from a web page, "),ca=l(Jt,"STRONG",{});var Kt=f(ca);ia=d(Kt,"news.example.com"),Kt.forEach(c),la=d(Jt,", is made to \n                "),fa=l(Jt,"STRONG",{});var Qt=f(fa);da=d(Qt,"test.com"),Qt.forEach(c),ma=d(Jt,", the referer will "),pa=l(Jt,"EM",{});var es=f(pa);ba=d(es,"not"),es.forEach(c),va=d(Jt," be sent because\n                both URLs "),ga=l(Jt,"EM",{});var rs=f(ga);ua=d(rs,"do not"),rs.forEach(c),Ea=d(Jt," share the same base domain (example.com, test.com)."),Jt.forEach(c),jt.forEach(c),Ta=i(Yt),wa=l(Yt,"TR",{});var as=f(wa);ya=l(as,"TD",{});var os=f(ya);xa=d(os,"Match host"),os.forEach(c),Da=i(as),Ra=l(as,"TD",{});var ts=f(Ra);ka=d(ts,"Only send X Origin request if hostname matches\n                "),Sa=l(ts,"BR",{}),Pa=i(ts),Ha=l(ts,"BR",{}),Ia=d(ts,"\n                If a request from a web page, "),Oa=l(ts,"STRONG",{});var ss=f(Oa);qa=d(ss,"news.example.com"),ss.forEach(c),Aa=d(ts,", is made to \n                "),Na=l(ts,"STRONG",{});var ns=f(Na);Va=d(ns,"news.example.com"),ns.forEach(c),Ba=d(ts,", the referer "),Ma=l(ts,"EM",{});var hs=f(Ma);Ua=d(hs,"will"),hs.forEach(c),Xa=d(ts," be sent because\n                both URLs share the same base hostname (news.example.com)."),ts.forEach(c),as.forEach(c),Yt.forEach(c),Gt.forEach(c),Xt.forEach(c),Vt.forEach(c),Ga=i(s),La=l(s,"DIV",{class:!0});var cs=f(La);Fa=l(cs,"H3",{class:!0});var is=f(Fa);$a=d(is,"Referer Trimming Policy"),is.forEach(c),za=i(cs),Ya=l(cs,"P",{class:!0});var ls=f(Ya);_a=d(ls,"Do not modify the about:config setting: network.http.referer.trimmingPolicy."),ls.forEach(c),Ca=i(cs),Wa=l(cs,"DIV",{class:!0});var fs=f(Wa);ja=l(fs,"TABLE",{});var ds=f(ja);Za=l(ds,"THEAD",{});var ms=f(Za);Ja=l(ms,"TR",{});var ps=f(Ja);Ka=l(ps,"TH",{});var bs=f(Ka);Qa=d(bs,"Option"),bs.forEach(c),eo=i(ps),ro=l(ps,"TH",{});var vs=f(ro);ao=d(vs,"Description"),vs.forEach(c),ps.forEach(c),ms.forEach(c),oo=i(ds),to=l(ds,"TBODY",{});var gs=f(to);so=l(gs,"TR",{});var us=f(so);no=l(us,"TD",{});var Es=f(no);ho=d(Es,"Send full URI"),Es.forEach(c),co=i(us),io=l(us,"TD",{});var Ts=f(io);lo=d(Ts,"Sends the full referer"),Ts.forEach(c),us.forEach(c),fo=i(gs),mo=l(gs,"TR",{});var ws=f(mo);po=l(ws,"TD",{});var ys=f(po);bo=d(ys,"Scheme, host, port, path"),ys.forEach(c),vo=i(ws),go=l(ws,"TD",{});var xs=f(go);uo=d(xs,"Sends the scheme, host, port and path of the URL; strips query strings.\n                "),Eo=l(xs,"BR",{}),To=i(xs),wo=l(xs,"BR",{}),yo=i(xs),xo=l(xs,"STRONG",{});var Ds=f(xo);Do=d(Ds,"Before:"),Ds.forEach(c),Ro=i(xs),ko=l(xs,"BR",{}),So=d(xs,"\n                https://example.com:8080/page?privacy=false&trackingid=XYZ\n                "),Po=l(xs,"BR",{}),Ho=i(xs),Io=l(xs,"STRONG",{});var Rs=f(Io);Oo=d(Rs,"After:"),Rs.forEach(c),qo=i(xs),Ao=l(xs,"BR",{}),No=d(xs,"\n                https://example.com:8080/page"),xs.forEach(c),ws.forEach(c),Vo=i(gs),Bo=l(gs,"TR",{});var ks=f(Bo);Mo=l(ks,"TD",{});var Ss=f(Mo);Uo=d(Ss,"Scheme, host, port"),Ss.forEach(c),Xo=i(ks),Go=l(ks,"TD",{});var Ps=f(Go);Lo=d(Ps,"Sends the scheme, host, and port of the URL.\n                "),Fo=l(Ps,"BR",{}),$o=i(Ps),zo=l(Ps,"BR",{}),Yo=i(Ps),_o=l(Ps,"STRONG",{});var Hs=f(_o);Co=d(Hs,"Before:"),Hs.forEach(c),Wo=i(Ps),jo=l(Ps,"BR",{}),Zo=d(Ps,"\n                https://example.com:8080/page?privacy=false&trackingid=XYZ\n                "),Jo=l(Ps,"BR",{}),Ko=i(Ps),Qo=l(Ps,"STRONG",{});var Is=f(Qo);et=d(Is,"After:"),Is.forEach(c),rt=i(Ps),at=l(Ps,"BR",{}),ot=d(Ps,"\n                https://example.com:8080/"),Ps.forEach(c),ks.forEach(c),gs.forEach(c),ds.forEach(c),fs.forEach(c),cs.forEach(c),s.forEach(c),o.forEach(c),this.h()},h(){document.title="Headers | Chameleon",R.src!==(k="ui3.png")&&p(R,"src","ui3.png"),p(R,"alt","Chameleon Headers tab"),p(w,"class","text-lg mb-4 w-full flex justify-center"),p(I,"class","font-semibold text-3xl border-primary border-b-2 mb-4"),p(U,"href","https://developer.mozilla.org/en-US/docs/Glossary/Request_header"),p(U,"target","_blank"),p(U,"rel","noopener noreferrer"),p($,"class","mb-6"),p(W,"class","font-semibold"),p(Q,"class","font-semibold"),p(te,"class","font-semibold"),p(ie,"class","font-semibold"),p(F,"class","mt-4"),p(H,"class","mb-4"),p(me,"class","font-semibold text-3xl border-primary border-b-2 mb-4"),p(ge,"class","font-semibold text-2xl mb-1"),p(Pe,"href","https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/DNT"),p(Pe,"target","_blank"),p(Pe,"rel","noopener noreferrer"),p(ve,"class","mb-4"),p(Ae,"class","font-semibold text-2xl mb-1"),p(Ue,"href","https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag"),p(Ue,"target","_blank"),p(Ue,"rel","noopener noreferrer"),p(qe,"class","mb-4"),p($e,"class","font-semibold text-2xl mb-1"),p(We,"href","https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language"),p(We,"target","_blank"),p(We,"rel","noopener noreferrer"),p(Fe,"class","mb-4"),p(Qe,"class","font-semibold text-2xl mb-1"),p(Ke,"class","mb-6"),p(de,"class","mb-4"),p(cr,"class","font-semibold text-3xl border-primary border-b-2 mb-4"),p(mr,"href","https://developer.mozilla.org/en-US/docs/Web/Security/Referer_header:_privacy_and_security_concerns"),p(mr,"target","_blank"),p(mr,"rel","noopener noreferrer"),p(hr,"class","mb-4"),p(ur,"class","font-semibold text-2xl mb-1"),p(gr,"class","mb-6"),p(Rr,"class","font-semibold text-2xl mb-1"),p(Pr,"class","text-red-800 font-semibold"),p(Nr,"class","mt-4"),p(Dr,"class","mb-6"),p(Fa,"class","font-semibold text-2xl mb-1"),p(Ya,"class","text-red-800 font-semibold"),p(Wa,"class","mt-4"),p(La,"class","mb-6"),p(a,"class","mb-8 px-4 text-xl leading-snug")},m(e,o){b(e,r,o),b(e,a,o),v(a,w),v(w,R),v(a,S),v(a,P),v(P,H),v(H,I),v(I,O),v(H,q),v(H,A),v(A,N),v(A,V),v(V,B),v(A,M),v(A,U),v(U,X),v(A,G),g(st,A,null),v(H,L),v(H,F),v(F,$),v($,z),v(F,Y),v(F,_),v(_,C),v(_,W),v(W,j),v(F,Z),v(F,J),v(J,K),v(J,Q),v(Q,ee),v(F,re),v(F,ae),v(ae,oe),v(ae,te),v(te,se),v(F,ne),v(F,he),v(he,ce),v(he,ie),v(ie,le),v(P,fe),v(P,de),v(de,me),v(me,pe),v(de,be),v(de,ve),v(ve,ge),v(ge,ue),v(ve,Ee),v(ve,Te),v(Te,we),v(Te,ye),v(ye,xe),v(Te,De),v(Te,Re),v(Re,ke),v(Te,Se),v(Te,Pe),v(Pe,He),v(Te,Ie),v(de,Oe),v(de,qe),v(qe,Ae),v(Ae,Ne),v(qe,Ve),v(qe,Be),v(Be,Me),v(Be,Ue),v(Ue,Xe),v(Be,Ge),v(de,Le),v(de,Fe),v(Fe,$e),v($e,ze),v(Fe,Ye),v(Fe,_e),v(_e,Ce),v(_e,We),v(We,je),v(_e,Ze),v(de,Je),v(de,Ke),v(Ke,Qe),v(Qe,er),v(Ke,rr),v(Ke,ar),v(ar,or),v(ar,tr),v(tr,sr),v(P,nr),v(P,hr),v(hr,cr),v(cr,ir),v(hr,lr),v(hr,fr),v(fr,dr),v(fr,mr),v(mr,pr),v(fr,br),v(P,vr),v(P,gr),v(gr,ur),v(ur,Er),v(gr,Tr),v(gr,wr),v(wr,yr),v(P,xr),v(P,Dr),v(Dr,Rr),v(Rr,kr),v(Dr,Sr),v(Dr,Pr),v(Pr,Hr),v(Dr,Ir),v(Dr,Or),v(Or,qr),v(Dr,Ar),v(Dr,Nr),v(Nr,Vr),v(Vr,Br),v(Br,Mr),v(Mr,Ur),v(Ur,Xr),v(Mr,Gr),v(Mr,Lr),v(Lr,Fr),v(Vr,$r),v(Vr,zr),v(zr,Yr),v(Yr,_r),v(_r,Cr),v(Yr,Wr),v(Yr,jr),v(jr,Zr),v(zr,Jr),v(zr,Kr),v(Kr,Qr),v(Qr,ea),v(Kr,ra),v(Kr,aa),v(aa,oa),v(aa,ta),v(aa,sa),v(aa,na),v(aa,ha),v(aa,ca),v(ca,ia),v(aa,la),v(aa,fa),v(fa,da),v(aa,ma),v(aa,pa),v(pa,ba),v(aa,va),v(aa,ga),v(ga,ua),v(aa,Ea),v(zr,Ta),v(zr,wa),v(wa,ya),v(ya,xa),v(wa,Da),v(wa,Ra),v(Ra,ka),v(Ra,Sa),v(Ra,Pa),v(Ra,Ha),v(Ra,Ia),v(Ra,Oa),v(Oa,qa),v(Ra,Aa),v(Ra,Na),v(Na,Va),v(Ra,Ba),v(Ra,Ma),v(Ma,Ua),v(Ra,Xa),v(P,Ga),v(P,La),v(La,Fa),v(Fa,$a),v(La,za),v(La,Ya),v(Ya,_a),v(La,Ca),v(La,Wa),v(Wa,ja),v(ja,Za),v(Za,Ja),v(Ja,Ka),v(Ka,Qa),v(Ja,eo),v(Ja,ro),v(ro,ao),v(ja,oo),v(ja,to),v(to,so),v(so,no),v(no,ho),v(so,co),v(so,io),v(io,lo),v(to,fo),v(to,mo),v(mo,po),v(po,bo),v(mo,vo),v(mo,go),v(go,uo),v(go,Eo),v(go,To),v(go,wo),v(go,yo),v(go,xo),v(xo,Do),v(go,Ro),v(go,ko),v(go,So),v(go,Po),v(go,Ho),v(go,Io),v(Io,Oo),v(go,qo),v(go,Ao),v(go,No),v(to,Vo),v(to,Bo),v(Bo,Mo),v(Mo,Uo),v(Bo,Xo),v(Bo,Go),v(Go,Lo),v(Go,Fo),v(Go,$o),v(Go,zo),v(Go,Yo),v(Go,_o),v(_o,Co),v(Go,Wo),v(Go,jo),v(Go,Zo),v(Go,Jo),v(Go,Ko),v(Go,Qo),v(Qo,et),v(Go,rt),v(Go,at),v(Go,ot),tt=!0},p(e,[r]){const a={};1&r&&(a.$$scope={dirty:r,ctx:e}),st.$set(a)},i(e){tt||(u(st.$$.fragment,e),tt=!0)},o(e){E(st.$$.fragment,e),tt=!1},d(e){e&&c(r),e&&c(a),T(st)}}}export default class extends e{constructor(e){super(),r(this,e,null,R,a,{})}}