"use strict";(self.webpackChunkFrontend_Juegos_2022=self.webpackChunkFrontend_Juegos_2022||[]).push([[808],{8310:(ne,x,a)=>{a.r(x),a.d(x,{JuegoModule:()=>W});var f=a(6895),e=a(4650),r=a(1390);let l=(()=>{class i{constructor(t){this.router=t}canActivate(t,n){return!!sessionStorage.getItem(t.data.Validate_game)||(this.router.navigate(["/juego"]),!1)}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(r.F0))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var d=a(5861),_=a(3276),v=a(2990),y=a(4870),T=a(8739),Z=a(1782),P=a(3021),S=a(2215),b=a(7973),w=a(529),M=a(9406);let J=(()=>{class i{constructor(t,n){this.http=t,this.puente=n,this.url=this.puente.geturl()}setAudioFile(t){this.audioFile=t}getAudioFile(t){return this.audioFile}getAll(){return this.http.get(this.url+"api/audio/")}getById(t){return this.http.get(this.url+"api/audio/"+t+"/")}post(t){return this.http.post(this.url+"api/audio/",t)}put(t,n){return this.http.put(this.url+"api/audio/"+t+"/",n)}delete(t){return this.http.delete(this.url+"api/audio/"+t+"/")}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(w.eN),e.LFG(M.Q))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var C=a(9298);let I=(()=>{class i{constructor(t,n,o,c,m,u,p,h,ee,te,ie){this.dashPublicity=t,this.themeService=n,this.styles=o,this.publicity=c,this.router=m,this.AuthSrv=u,this.GameSrv=p,this.confirmDialog=h,this.Gamelogic=ee,this.audioService=te,this.puente=ie,this.backgroundImgUrl="",this.buttonTitle="",this.logoImage="",this.logoImageGame="",this.videoUrl="",this.boxes_images=0,this.design_images=0,this.audio=new Audio,this.audioArray=[]}ngOnInit(){var t=this;return(0,d.Z)(function*(){yield t.auth(),t.validateSlot(),sessionStorage.removeItem("juego_scan"),sessionStorage.removeItem("selection_game"),sessionStorage.removeItem("juego_play"),sessionStorage.removeItem("juego_rolldice"),sessionStorage.removeItem("juego_precision"),sessionStorage.removeItem("juego_puertas"),t.publicity.getPublicityTopList().subscribe(n=>{n.length>0&&(t.dashPublicity.loadTopData(n),t.publicity.getPublicityBottomList().subscribe(o=>{t.dashPublicity.loadBottomData(o)})),t.themeService.getDesignInformation().subscribe(o=>{t.styles.loadData(o[0]),t.buttonTitle=t.styles.get_title_button_screensaver(),t.logoImage=t.styles.get_image_logo_kiosco(),t.videoUrl=t.styles.get_video_screensaver()})})})()}goScan(){var t=this;return(0,d.Z)(function*(){yield t.validateSlot(),console.log("Valor de boxes_images despu\xe9s de getPublicityGame:",t.boxes_images),console.log("Valor de design_images despu\xe9s de getPublicityGame:",t.design_images),10==t.boxes_images&&22==t.design_images?(t.router.navigate(["/juego/scan"]),sessionStorage.setItem("juego_scan","juego_scan")):t.confirmDialog.error(["Revise que est\xe9n todas las im\xe1genes de las casillas","Revise que est\xe9 el contenedor del tragamonedas","Revise que est\xe9 el contenedor del reloj","Revise que est\xe9 el logo de todos los juegos","Revise que est\xe9 el fondo de todos los juegos","Revise que est\xe9n todas las caras del dado","Revise que est\xe9n todas las im\xe1genes de las puertas","Revise que est\xe9 la imagen al ganar"])})()}auth(){var t=this;return(0,d.Z)(function*(){let n=new FormData;n.append("username","admin"),n.append("password","admin"),t.AuthSrv.auth_token(n).subscribe(o=>{sessionStorage.setItem("token",o.access),sessionStorage.setItem("refresh",o.refresh)})})()}validateSlot(){var t=this;return(0,d.Z)(function*(){t.GameSrv.getPublicityGame().subscribe(n=>{for(let o of n)o.image&&(t.boxes_images+=1)}),t.GameSrv.getDesign().subscribe(n=>{for(let o of n)o.image_machine_game&&(t.design_images+=1),o.image_box_watch&&(t.design_images+=1),o.image_logo_kiosco&&(t.design_images+=1),o.image_background_kiosco&&(t.design_images+=1),o.image_winner&&(t.design_images+=1),o.image_background_tragamonedas&&(t.design_images+=1),o.image_background_dados&&(t.design_images+=1),o.image_background_puertas&&(t.design_images+=1),o.image_background_precision&&(t.design_images+=1),o.image_logo_tragamonedas&&(t.design_images+=1),o.image_logo_dados&&(t.design_images+=1),o.image_logo_puertas&&(t.design_images+=1),o.image_logo_precision&&(t.design_images+=1),o.image_dice_face_one&&(t.design_images+=1),o.image_dice_face_two&&(t.design_images+=1),o.image_dice_face_three&&(t.design_images+=1),o.image_dice_face_four&&(t.design_images+=1),o.image_dice_face_five&&(t.design_images+=1),o.image_dice_face_six&&(t.design_images+=1),o.image_door_left&&(t.design_images+=1),o.image_door_center&&(t.design_images+=1),o.image_door_right&&(t.design_images+=1)})})()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(_.E),e.Y36(v.f),e.Y36(y.T),e.Y36(T.U),e.Y36(r.F0),e.Y36(Z.e),e.Y36(P.h),e.Y36(S.D),e.Y36(b.g),e.Y36(J),e.Y36(M.Q))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-juego"]],decls:5,vars:7,consts:[[3,"publicityList"],[1,"container-fluid","home_container","p-0","m-0"],[1,"home-image_container",3,"autoplay","loop","volume","src","click"],[3,"publicityList","isTop"]],template:function(t,n){1&t&&(e.TgZ(0,"div"),e._UZ(1,"app-publicity",0),e.TgZ(2,"div",1)(3,"video",2),e.NdJ("click",function(){return n.goScan()}),e.qZA()(),e._UZ(4,"app-publicity",3),e.qZA()),2&t&&(e.xp6(1),e.Q6J("publicityList",n.dashPublicity.getTopPublicityList()),e.xp6(2),e.Q6J("autoplay",!0)("loop",!0)("volume",.05)("src",n.videoUrl,e.LSH),e.xp6(1),e.Q6J("publicityList",n.dashPublicity.getBottomPublicityList())("isTop",!1))},dependencies:[C.R],styles:[".home_container[_ngcontent-%COMP%]{position:relative;width:100%;height:70vh;overflow-y:hidden;overflow-x:hidden}.home-image_container[_ngcontent-%COMP%]{position:relative;height:100%;width:100%;background-color:#3b3b3b}.home-logo__container[_ngcontent-%COMP%]{position:absolute;min-width:20rem;height:15rem;left:calc(50% - 203px);z-index:2}img[_ngcontent-%COMP%]{width:100%;height:100%}video[_ngcontent-%COMP%]{object-fit:cover}.home_background[_ngcontent-%COMP%]{width:100%;height:100%;max-height:77.1rem}.home-shadow[_ngcontent-%COMP%]{background:#000000a1;height:100%;width:100%;position:absolute;top:0}"]}),i})();var A=a(9994),k=a(1172),g=a(4006),j=a(1202),Y=a(8814),O=a(7136);function L(i,s){if(1&i&&(e.TgZ(0,"div",16)(1,"h2",17),e._uU(2),e.qZA(),e.TgZ(3,"p",18),e._uU(4),e.qZA()()),2&i){const t=e.oxw();e.xp6(2),e.Oqu(t.styles.get_scan_code_title()),e.xp6(2),e.hij(" ",t.styles.get_scan_code_description()," ")}}function V(i,s){1&i&&(e.TgZ(0,"div",16)(1,"h2",17),e._uU(2,"Ingrese el c\xf3digo"),e.qZA()())}function F(i,s){1&i&&(e.TgZ(0,"figure",19),e._UZ(1,"img",20),e.qZA())}const G=function(){return["1","2","3","4","5","6","7","8","9","0","delete"]};function Q(i,s){1&i&&e._UZ(0,"app-keyboard",21),2&i&&e.Q6J("keys",e.DdM(1,G))}let U=(()=>{class i{constructor(t,n,o,c,m,u,p,h){this.router=t,this.publicity=n,this.styles=o,this.keyController=c,this.gameLogic=m,this.confirmDialog=u,this.ticketService=p,this.theme=h,this.selectedInputCode=!1,this.scanState=!0,this.explication="Puedes escanear el c\xf3digo QR de tu ticket",this.code=this.keyController.getCode(),this.image_background="",this.intents=0}ngOnInit(){this.keyController.clearCode(),this.theme.getDesignInformation().subscribe(t=>{this.styles.loadData(t[0])})}changeView(){this.scanState=!1,this.keyController.setCode("")}continueToGame(){var t=this;return(0,d.Z)(function*(){const n=t.keyController.getCode();if(""!=n&&!t.scanState&&t.intents++,console.log("Intentos: ",t.intents),""!=n){let o=t.gameLogic.verifyTicket(n);t.intents>8?(t.confirmDialog.error(["Ha superado el n\xfamero de intentos permitidos, por favor contacte a soporte t\xe9cnico"]),t.scanState=!0,setInterval(()=>{window.location.replace("#/login")},5e3)):(yield o)?(t.gameLogic.playGame(),sessionStorage.setItem("selection_game","selection_game"),t.router.navigate(["/juego/selection"])):t.confirmDialog.error(["El ticket que ingres\xf3 no existe o ya fu\xe9 reclamado, revise si la informacion ingresada es correcta","\xd3","La fecha disponible del ticket est\xe1 fuera del rango de disponibilidad del juego"])}else t.confirmDialog.error(["El ticket que ingres\xf3 no existe o ya fu\xe9 reclamado, revise si la informacion ingresada es correcta","\xd3","La fecha disponible del ticket est\xe1 fuera del rango de disponibilidad del juego"]),t.keyController.clearCode()})()}doSomething(){sessionStorage.removeItem("juego_scan")}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(r.F0),e.Y36(_.E),e.Y36(y.T),e.Y36(A.G),e.Y36(b.g),e.Y36(S.D),e.Y36(k.w),e.Y36(v.f))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-scan-view"]],decls:17,vars:14,consts:[[1,"scan_container","p-0","m-0",3,"beforeunload"],[3,"publicityList"],[1,"container-menu"],[1,"background-shadow"],["alt","background",3,"src"],[1,"scan_menu-container"],[1,"menu-container_img-container"],["height","22rem",3,"urlImage","isHome"],["class","menu-info",4,"ngIf"],["class","menu-container_scan-img-container",4,"ngIf"],[3,"keys",4,"ngIf"],["autofocus","","placeholder","Ingrese el c\xf3digo","type","text","onkeypress","return event.charCode >= 48 && event.charCode <= 57","pattern","[0-9]{6}","maxlength","6",1,"btn","menu__input","ng-pristine","ng-valid","ng-touched",3,"ngModel","click","ngModelChange"],["codeInput","ngModel"],["title","Continuar",1,"mb-2",3,"fontSize","styledPadding","click"],["autoplay","","loop","","controls","None","hidden","","src","./assets/audio/playing_music.mp3",3,"volume"],[3,"publicityList","isTop"],[1,"menu-info"],[1,"scan_title"],[1,"explication-text"],[1,"menu-container_scan-img-container"],["src","../../../assets/img/codigoQR.png","alt","scan-logo",1,"menu-container_scan-img"],[3,"keys"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.NdJ("beforeunload",function(){return n.doSomething()},!1,e.Jf7),e._UZ(1,"app-publicity",1),e.TgZ(2,"div",2)(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5)(6,"div",6),e._UZ(7,"app-logo",7),e.qZA(),e.YNc(8,L,5,2,"div",8),e.YNc(9,V,3,0,"div",8),e.YNc(10,F,2,0,"figure",9),e.YNc(11,Q,1,2,"app-keyboard",10),e.TgZ(12,"input",11,12),e.NdJ("click",function(){return n.changeView()})("ngModelChange",function(c){return n.keyController.code=c}),e.qZA(),e.TgZ(14,"app-generic-button",13),e.NdJ("click",function(){return n.continueToGame()}),e.qZA()()(),e._UZ(15,"audio",14)(16,"app-publicity",15),e.qZA()),2&t&&(e.xp6(1),e.Q6J("publicityList",n.publicity.getTopPublicityList()),e.xp6(3),e.s9C("src",n.styles.get_image_background_kiosco(),e.LSH),e.xp6(3),e.Q6J("urlImage",n.styles.get_image_logo_kiosco())("isHome",!1),e.xp6(1),e.Q6J("ngIf",n.scanState),e.xp6(1),e.Q6J("ngIf",!n.scanState),e.xp6(1),e.Q6J("ngIf",n.scanState),e.xp6(1),e.Q6J("ngIf",!n.scanState),e.xp6(1),e.Q6J("ngModel",n.keyController.code),e.xp6(2),e.Q6J("fontSize","2.8rem")("styledPadding","2.4rem 6.6rem"),e.xp6(1),e.Q6J("volume",.05),e.xp6(1),e.Q6J("publicityList",n.publicity.getBottomPublicityList())("isTop",!1))},dependencies:[f.O5,g.Fj,g.JJ,g.nD,g.c5,g.On,j.x,Y.c,C.R,O.R],styles:[".scan_container[_ngcontent-%COMP%]{position:relative;background-color:gray;width:100%}.container-menu[_ngcontent-%COMP%]{position:relative;height:71%;width:100%;background-color:#000}.background-shadow[_ngcontent-%COMP%]{height:100%;width:100%;position:absolute;top:0;left:0;z-index:0}.background-shadow[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;width:100%;object-fit:cover;opacity:.5}.scan_menu-container[_ngcontent-%COMP%]{position:relative;height:70vh;width:100%;display:flex;flex-direction:column;align-items:center;gap:3rem;z-index:3}.scan_title[_ngcontent-%COMP%]{margin:0;font-size:3.8rem}.menu-container_img-container[_ngcontent-%COMP%]{width:30%;height:20%;justify-content:center}.menu-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;color:#fff;font-size:3.8rem;gap:2.4rem;margin-top:25px}.menu-container_img[_ngcontent-%COMP%]{border-radius:25px}.explication-text[_ngcontent-%COMP%]{padding:0 2rem;line-height:initial;text-align:center;width:83%}.menu-container_scan-img-container[_ngcontent-%COMP%]{min-height:16rem;width:19rem}.menu__input[_ngcontent-%COMP%]{border:5px solid red;outline:none;border-radius:33px;background-color:#000;color:#fff;padding:1rem .5rem;width:37rem;font-size:2.8rem}p[_ngcontent-%COMP%], figure[_ngcontent-%COMP%]{margin:0}img[_ngcontent-%COMP%]{width:100%;height:100%}"]}),i})();var D=a(5960),z=a(7274);function R(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",12)(1,"img",13),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit,c=e.oxw();return e.KtG(c.navigateTo(o.name,o.id))}),e.qZA()()}if(2&i){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("src","./assets/img/"+t.name+".png",e.LSH)("alt",t.name)}}function N(i,s){if(1&i&&(e.ynx(0),e.YNc(1,R,2,2,"div",11),e.BQk()),2&i){const t=s.$implicit;e.xp6(1),e.Q6J("ngIf","Activado"==t.state)}}let B=(()=>{class i{constructor(t,n,o,c,m,u,p,h){this.gameService=t,this.router=n,this.route=o,this.ticketService=c,this.gameLogicService=m,this.dashPublicity=u,this.styles=p,this.theme=h,this.informationText="ELIGE UN JUEGO",this.allGames=[],this.image_background="",this.gameRoutes={Dados:"rolldice",Tragamonedas:"play",Precision:"precision",Puertas:"puertas"}}ngOnInit(){this.gameService.getAll().subscribe(t=>{this.allGames=t}),this.theme.getDesignInformation().subscribe(t=>{this.styles.loadData(t[0])})}navigateTo(t,n){const o=this.gameRoutes[t];o?this.router.navigate([`/${o}`],{queryParams:{gameId:n,reload:!0}}):console.error(`No se encontr\xf3 una ruta para el juego ${t}`)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(P.h),e.Y36(r.F0),e.Y36(r.gz),e.Y36(k.w),e.Y36(b.g),e.Y36(_.E),e.Y36(y.T),e.Y36(v.f))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-selectiongame-view"]],decls:13,vars:7,consts:[[1,"container-fullscreen"],[3,"publicityList"],[1,"container-menu"],[1,"background-shadow"],["alt","background",3,"src"],[1,"scan_menu-container"],[1,"menu-container_img-container"],["height","22rem",3,"urlImage","isHome"],[1,"games"],[4,"ngFor","ngForOf"],[3,"publicityList","isTop"],["class","game",4,"ngIf"],[1,"game"],[3,"src","alt","click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"app-publicity",1),e.TgZ(2,"div",2)(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5)(6,"div",6),e._UZ(7,"app-logo",7),e.qZA(),e.TgZ(8,"h1"),e._uU(9,"\xa1Juegos disponibles!"),e.qZA(),e.TgZ(10,"div",8),e.YNc(11,N,2,1,"ng-container",9),e.qZA()()(),e._UZ(12,"app-publicity",10),e.qZA()),2&t&&(e.xp6(1),e.Q6J("publicityList",n.dashPublicity.getTopPublicityList()),e.xp6(3),e.s9C("src",n.styles.get_image_background_kiosco(),e.LSH),e.xp6(3),e.Q6J("urlImage",n.styles.get_image_logo_kiosco())("isHome",!1),e.xp6(4),e.Q6J("ngForOf",n.allGames),e.xp6(1),e.Q6J("publicityList",n.dashPublicity.getBottomPublicityList())("isTop",!1))},dependencies:[f.sg,f.O5,C.R,O.R],styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%;margin:0;padding:0;overflow:hidden;background-color:#0c1a32;font-family:Arial,sans-serif;color:#fff;text-align:center}.container-fullscreen[_ngcontent-%COMP%]{background-color:#0c1a32;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;width:100vw;margin:0;padding:0;box-sizing:border-box}.container-menu[_ngcontent-%COMP%]{position:relative;height:100%;width:100%;background-color:#000}.background-shadow[_ngcontent-%COMP%]{height:100%;width:100%;position:absolute;top:0;left:0;z-index:0}.background-shadow[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;width:100%;object-fit:cover;opacity:.5}.scan_menu-container[_ngcontent-%COMP%]{position:relative;height:100%;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:3;box-sizing:border-box}.menu-container_img-container[_ngcontent-%COMP%]{width:30%;height:20%;justify-content:center}h1[_ngcontent-%COMP%]{font-size:2.5em;margin-bottom:20px;color:#fff}p[_ngcontent-%COMP%]{font-size:1.5em;margin:10px 0;color:#fff}.games[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;gap:50px}.game[_ngcontent-%COMP%]{background-color:#142850;border-radius:10px;padding:10px;box-shadow:0 4px 8px #0003;width:450px;height:450px;display:flex;flex-direction:column;align-items:center;justify-content:center;box-sizing:border-box}.game[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:10px}button[_ngcontent-%COMP%]{background-color:#2d2d2db3;color:#fff;border:none;padding:10px 20px;border-radius:5px;margin-top:10px;font-size:1em;cursor:pointer;transition:background-color .3s,transform .3s}button[_ngcontent-%COMP%]:hover{background-color:#000000e6;transform:scale(1.05)}button[_ngcontent-%COMP%]:focus{outline:none;background-color:#00d084}@media (max-width: 768px){.games[_ngcontent-%COMP%]{gap:15px}.game[_ngcontent-%COMP%]{width:200px;height:200px}.game[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:150px;max-height:150px}}@media (max-width: 480px){.games[_ngcontent-%COMP%]{gap:10px}.game[_ngcontent-%COMP%]{width:150px;height:150px}.game[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:130px;max-height:130px}}"]}),i})();var H=a(7150),E=a(9116);const $=[{path:"",component:I},{path:"scan",component:U,canActivate:[l],data:{Validate_game:"juego_scan"}},{path:"selection",component:B,data:{Validate_game:"selection_game"}},{path:"play",component:D.N,canActivate:[l],data:{Validate_game:"juego_play"}},{path:"rolldice",component:z.s,canActivate:[l],data:{Validate_game:"juego_rolldice"}},{path:"precision",component:H.P,canActivate:[l],data:{Validate_game:"juego_precision"}},{path:"puertas",component:E.U,canActivate:[l],data:{Validate_game:"juego_puertas"}}];let X=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[r.Bz.forChild($),r.Bz]}),i})();var q=a(5906),K=a(5412);let W=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[f.ez,X,q.m,w.JF,g.u5,K.Is]}),i})()}}]);