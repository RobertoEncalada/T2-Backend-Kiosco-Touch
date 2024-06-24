"use strict";(self.webpackChunkFrontend_Juegos_2022=self.webpackChunkFrontend_Juegos_2022||[]).push([[614],{3614:(H,h,s)=>{s.r(h),s.d(h,{JuegoModule:()=>Q});var u=s(6895),e=s(4650),c=s(1390);let d=(()=>{class n{constructor(t){this.router=t}canActivate(t,o){return!!sessionStorage.getItem(t.data.Validate_game)||(this.router.navigate(["/juego"]),!1)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(c.F0))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var l=s(5861),_=s(3276),S=s(2990),f=s(4870),w=s(8739),x=s(1782),J=s(3021),v=s(2215),b=s(7973),y=s(529),P=s(9406);let M=(()=>{class n{constructor(t,o){this.http=t,this.puente=o,this.url=this.puente.geturl()}setAudioFile(t){this.audioFile=t}getAudioFile(t){return this.audioFile}getAll(){return this.http.get(this.url+"api/audio/")}getById(t){return this.http.get(this.url+"api/audio/"+t+"/")}post(t){return this.http.post(this.url+"api/audio/",t)}put(t,o){return this.http.put(this.url+"api/audio/"+t+"/",o)}delete(t){return this.http.delete(this.url+"api/audio/"+t+"/")}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(y.eN),e.LFG(P.Q))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var C=s(1202),T=s(9298);let A=(()=>{class n{constructor(t,o,i,a,m,p,D,q,E,R){this.dashPublicity=t,this.themeService=o,this.styles=i,this.publicity=a,this.router=m,this.AuthSrv=p,this.GameSrv=D,this.confirmDialog=q,this.Gamelogic=E,this.audioService=R,this.backgroundImgUrl="",this.buttonTitle="",this.logoImage="",this.videoUrl="",this.boxes_images=0,this.design_images=0,this.audio=new Audio,this.audioArray=[]}ngOnInit(){var t=this;return(0,l.Z)(function*(){yield t.auth(),t.validateSlot(),sessionStorage.removeItem("juego_scan"),sessionStorage.removeItem("selection_game"),sessionStorage.removeItem("juego_play"),sessionStorage.removeItem("juego_rolldice"),t.publicity.getPublicityTopList().subscribe(o=>{o.length>0&&(t.dashPublicity.loadTopData(o),t.publicity.getPublicityBottomList().subscribe(i=>{t.dashPublicity.loadBottomData(i)})),t.themeService.getDesignInformation().subscribe(i=>{t.styles.loadData(i[0]),t.buttonTitle=t.styles.get_title_button_screensaver(),t.logoImage=t.styles.get_image_logo_game(),t.videoUrl=t.styles.get_video_screensaver()})})})()}goScan(){var t=this;return(0,l.Z)(function*(){yield t.validateSlot(),console.log("Valor de boxes_images despu\xe9s de getPublicityGame:",t.boxes_images),console.log("Valor de boxes_images despu\xe9s de getPublicityGame:",t.design_images),10==t.boxes_images&&3==t.design_images?(t.router.navigate(["/juego/scan"]),sessionStorage.setItem("juego_scan","juego_scan")):t.confirmDialog.error(["Revise que esten todas las im\xe1genes de las casillas","Revise que este el contenedor del juego","Revise que este el logo del juego","Revise que este la imagen al ganar"])})()}auth(){var t=this;return(0,l.Z)(function*(){let o=new FormData;o.append("username","admin"),o.append("password","admin"),t.AuthSrv.auth_token(o).subscribe(i=>{sessionStorage.setItem("token",i.access),sessionStorage.setItem("refresh",i.refresh)})})()}validateSlot(){var t=this;return(0,l.Z)(function*(){t.GameSrv.getPublicityGame().subscribe(o=>{for(let i of o)i.image&&(t.boxes_images+=1)}),t.GameSrv.getDesign().subscribe(o=>{for(let i of o)i.image_machine_game&&(t.design_images+=1),i.image_logo_game&&(t.design_images+=1),i.image_winner&&(t.design_images+=1)})})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(_.E),e.Y36(S.f),e.Y36(f.T),e.Y36(w.U),e.Y36(c.F0),e.Y36(x.e),e.Y36(J.h),e.Y36(v.D),e.Y36(b.g),e.Y36(M))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-juego"]],decls:7,vars:10,consts:[[3,"publicityList"],[1,"container-fluid","home_container","p-0","m-0"],[1,"home-image_container",3,"autoplay","muted","loop","src"],[1,"home-btn_container"],[1,"home_btn",3,"title","fontSize","styledPadding","click"],[3,"publicityList","isTop"]],template:function(t,o){1&t&&(e.TgZ(0,"div"),e._UZ(1,"app-publicity",0),e.TgZ(2,"div",1),e._UZ(3,"video",2),e.TgZ(4,"div",3)(5,"app-generic-button",4),e.NdJ("click",function(){return o.goScan()}),e.qZA()()(),e._UZ(6,"app-publicity",5),e.qZA()),2&t&&(e.xp6(1),e.Q6J("publicityList",o.dashPublicity.getTopPublicityList()),e.xp6(2),e.Q6J("autoplay",!0)("muted","muted")("loop",!0)("src",o.videoUrl,e.LSH),e.xp6(2),e.Q6J("title",o.buttonTitle)("fontSize","2.8rem")("styledPadding","3.4rem 6.6rem"),e.xp6(1),e.Q6J("publicityList",o.dashPublicity.getBottomPublicityList())("isTop",!1))},dependencies:[C.x,T.R],styles:[".home_container[_ngcontent-%COMP%]{position:relative;width:100%;height:70vh;overflow-y:hidden;overflow-x:hidden}.home-image_container[_ngcontent-%COMP%]{position:relative;height:100%;width:100%;background-color:#3b3b3b}.home-logo__container[_ngcontent-%COMP%]{position:absolute;min-width:20rem;height:15rem;left:calc(50% - 203px);z-index:2}img[_ngcontent-%COMP%]{width:100%;height:100%}.home_background[_ngcontent-%COMP%]{width:100%;height:100%;max-height:77.1rem}.home-shadow[_ngcontent-%COMP%]{background:#000000a1;height:100%;width:100%;position:absolute;top:0}.home-btn_container[_ngcontent-%COMP%]{width:100%;position:absolute;display:flex;justify-content:center;bottom:calc(10% + 10px)}"]}),n})(),Z=(()=>{class n{constructor(){this.code=""}getCode(){return this.code}setCode(t){this.code=this.code+t}deleteLastValue(){this.code=this.code.substring(0,this.code.length-1)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var g=s(4006),V=s(7392);const O=function(){return{"font-size":"56px",height:"43px",width:"68px"}};let U=(()=>{class n{constructor(t){this.KeyControllerService=t}ngOnInit(){}getButtonValue(t){let o=t.target;o.textContent&&this.KeyControllerService.setCode(o.textContent.trim())}deleteValue(){this.KeyControllerService.deleteLastValue()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(Z))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-keyboard"]],decls:29,vars:2,consts:[[1,"container-fluid","text-center"],[1,"keyboard-container"],[1,"row","keyboard-row"],[1,"col","btn",3,"click"],[1,"col-7","btn",3,"click"],["value","delete",1,"col-4","btn",3,"click"],[3,"ngStyle"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),e.NdJ("click",function(a){return o.getButtonValue(a)}),e._uU(4," 1 "),e.qZA(),e.TgZ(5,"button",3),e.NdJ("click",function(a){return o.getButtonValue(a)}),e._uU(6," 2 "),e.qZA(),e.TgZ(7,"button",3),e.NdJ("click",function(a){return o.getButtonValue(a)}),e._uU(8," 3 "),e.qZA()(),e.TgZ(9,"div",2)(10,"button",3),e.NdJ("click",function(a){return o.getButtonValue(a)}),e._uU(11," 4 "),e.qZA(),e.TgZ(12,"button",3),e.NdJ("click",function(a){return o.getButtonValue(a)}),e._uU(13," 5 "),e.qZA(),e.TgZ(14,"button",3),e.NdJ("click",function(a){return o.getButtonValue(a)}),e._uU(15," 6 "),e.qZA()(),e.TgZ(16,"div",2)(17,"button",3),e.NdJ("click",function(a){return o.getButtonValue(a)}),e._uU(18," 7 "),e.qZA(),e.TgZ(19,"button",3),e.NdJ("click",function(a){return o.getButtonValue(a)}),e._uU(20," 8 "),e.qZA(),e.TgZ(21,"button",3),e.NdJ("click",function(a){return o.getButtonValue(a)}),e._uU(22," 9 "),e.qZA()(),e.TgZ(23,"div",2)(24,"button",4),e.NdJ("click",function(a){return o.getButtonValue(a)}),e._uU(25," 0 "),e.qZA(),e.TgZ(26,"button",5),e.NdJ("click",function(){return o.deleteValue()}),e.TgZ(27,"mat-icon",6),e._uU(28,"keyboard_backspace"),e.qZA()()()()()),2&t&&(e.xp6(27),e.Q6J("ngStyle",e.DdM(1,O)))},dependencies:[u.PC,V.Hw],styles:[".btn[_ngcontent-%COMP%]{background-color:#fff;border-radius:45px;padding:1.3rem .2rem;font-size:2.8rem}.keyboard-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem;width:34rem;height:32rem;font-size:1.6rem}.keyboard-row[_ngcontent-%COMP%]{gap:1.6rem}"]}),n})();var I=s(7136);function F(n,r){if(1&n&&(e.TgZ(0,"div",16)(1,"h2",17),e._uU(2),e.qZA(),e.TgZ(3,"p",18),e._uU(4),e.qZA()()),2&n){const t=e.oxw();e.xp6(2),e.Oqu(t.styles.get_scan_code_title()),e.xp6(2),e.hij(" ",t.styles.get_scan_code_description()," ")}}function j(n,r){1&n&&(e.TgZ(0,"div",16)(1,"h2",17),e._uU(2,"Ingrese el c\xf3digo"),e.qZA()())}function N(n,r){1&n&&(e.TgZ(0,"figure",19),e._UZ(1,"img",20),e.qZA())}function Y(n,r){1&n&&e._UZ(0,"app-keyboard")}let L=(()=>{class n{constructor(t,o,i,a,m,p){this.router=t,this.publicity=o,this.styles=i,this.keyController=a,this.gameLogic=m,this.confirmDialog=p,this.selectedInputCode=!1,this.scanState=!0,this.explication="Puedes escanear el c\xf3digo QR de tu ticket",this.code=this.keyController.getCode()}ngOnInit(){}changeView(){this.scanState=!1,this.keyController.setCode("")}continueToGame(){var t=this;return(0,l.Z)(function*(){""!=t.keyController.getCode()&&((yield t.gameLogic.verifyTicket(t.keyController.getCode()))?(t.gameLogic.playGame(),sessionStorage.setItem("selection_game","selection_game"),t.router.navigate(["/juego/selection"])):t.confirmDialog.error(["El ticket que ingres\xf3 no existe o ya fu\xe9 reclamado, revise si la informacion ingresada es correcta","\xd3","La fecha disponible del ticket est\xe1 fuera del rango de disponibilidad del juego"]))})()}doSomething(){sessionStorage.removeItem("juego_scan")}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(c.F0),e.Y36(_.E),e.Y36(f.T),e.Y36(Z),e.Y36(b.g),e.Y36(v.D))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-scan-view"]],decls:17,vars:15,consts:[["contenteditable","true",1,"scan_container","p-0","m-0",3,"beforeunload"],[3,"publicityList"],[1,"container-menu"],["height","25rem",3,"isBackground","urlImage"],[1,"scan-shadow"],[1,"scan_menu-container"],[1,"menu-container_img-container"],["height","22rem",3,"urlImage","isHome"],["class","menu-info",4,"ngIf"],["class","menu-container_scan-img-container",4,"ngIf"],[4,"ngIf"],["type","text","onkeypress","return event.charCode >= 48 && event.charCode <= 57",1,"btn","menu__input",3,"ngModel","click","ngModelChange"],["codeInput","ngModel"],["title","Continuar",1,"mb-2",3,"fontSize","styledPadding","click"],["autoplay","","loop","","controls","None","hidden","","src","./assets/audio/playing_music.mp3",3,"volume"],[3,"publicityList","isTop"],[1,"menu-info"],[1,"scan_title"],[1,"explication-text"],[1,"menu-container_scan-img-container"],["src","../../../assets/img/codigoQR.png","alt","scan-logo",1,"menu-container_scan-img"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.NdJ("beforeunload",function(){return o.doSomething()},!1,e.Jf7),e._UZ(1,"app-publicity",1),e.TgZ(2,"div",2),e._UZ(3,"app-logo",3)(4,"div",4),e.TgZ(5,"div",5)(6,"div",6),e._UZ(7,"app-logo",7),e.qZA(),e.YNc(8,F,5,2,"div",8),e.YNc(9,j,3,0,"div",8),e.YNc(10,N,2,0,"figure",9),e.YNc(11,Y,1,0,"app-keyboard",10),e.TgZ(12,"input",11,12),e.NdJ("click",function(){return o.changeView()})("ngModelChange",function(a){return o.keyController.code=a}),e.qZA(),e.TgZ(14,"app-generic-button",13),e.NdJ("click",function(){return o.continueToGame()}),e.qZA()()(),e._UZ(15,"audio",14)(16,"app-publicity",15),e.qZA()),2&t&&(e.xp6(1),e.Q6J("publicityList",o.publicity.getTopPublicityList()),e.xp6(2),e.Q6J("isBackground",!0)("urlImage",o.styles.get_image_logo_game()),e.xp6(4),e.Q6J("urlImage",o.styles.get_image_logo_game())("isHome",!1),e.xp6(1),e.Q6J("ngIf",o.scanState),e.xp6(1),e.Q6J("ngIf",!o.scanState),e.xp6(1),e.Q6J("ngIf",o.scanState),e.xp6(1),e.Q6J("ngIf",!o.scanState),e.xp6(1),e.Q6J("ngModel",o.keyController.code),e.xp6(2),e.Q6J("fontSize","2.8rem")("styledPadding","2.4rem 6.6rem"),e.xp6(1),e.Q6J("volume",.05),e.xp6(1),e.Q6J("publicityList",o.publicity.getBottomPublicityList())("isTop",!1))},dependencies:[u.O5,g.Fj,g.JJ,g.On,C.x,U,T.R,I.R],styles:[".scan_container[_ngcontent-%COMP%]{position:relative;background-color:gray;width:100%}.container-menu[_ngcontent-%COMP%]{position:relative;height:71%;width:100%;background-color:#000}.scan-shadow[_ngcontent-%COMP%]{height:71%;width:100%;position:absolute;background-color:#000000d4;z-index:2}.scan_menu-container[_ngcontent-%COMP%]{position:relative;height:70vh;width:100%;display:flex;flex-direction:column;align-items:center;gap:3rem;z-index:3}.scan_title[_ngcontent-%COMP%]{margin:0;font-size:3.8rem}.menu-container_img-container[_ngcontent-%COMP%]{width:39rem;height:19rem;min-height:4rem;margin:0 1rem 1rem 0}.menu-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;color:#fff;font-size:3.8rem;gap:2.4rem;margin-top:25px}.menu-container_img[_ngcontent-%COMP%]{border-radius:25px}.explication-text[_ngcontent-%COMP%]{padding:0 2rem;line-height:initial;text-align:center;width:83%}.menu-container_scan-img-container[_ngcontent-%COMP%]{min-height:16rem;width:19rem}.menu__input[_ngcontent-%COMP%]{border:5px solid red;outline:none;border-radius:33px;background-color:#000;color:#fff;padding:1rem .5rem;width:37rem;font-size:2.8rem}p[_ngcontent-%COMP%], figure[_ngcontent-%COMP%]{margin:0}img[_ngcontent-%COMP%]{width:100%;height:100%}"]}),n})();var B=s(5960),z=s(7274);const k=[{path:"",component:A},{path:"scan",component:L,canActivate:[d],data:{Validate_game:"juego_scan"}},{path:"selection",component:(()=>{class n{constructor(t){this.router=t,this.informationText="ELIGE UN JUEGO",this.probability={}}ngOnInit(){throw new Error("Method not implemented.")}doSomething(){sessionStorage.removeItem("selection_game")}navigateTo(t){k.forEach(o=>{o.path===t&&this.router.navigate([t])})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(c.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-selectiongame-view"]],decls:27,vars:0,consts:[["lang","es"],["charset","UTF-8"],["name","viewport","content","width=device-width, initial-scale=1.0"],[1,"container"],[1,"games"],[1,"game"],["src","../../../../../assets/img/door.png","alt","Adivina la puerta"],[3,"click"],["src","../../../../../assets/img/slot_machine.png","alt","M\xe1quina tragamonedas"],["src","../../../../../assets/img/dice.png","alt","Tira los dados"],["src","../../../../../assets/img/precision.png","alt","Precisi\xf3n"]],template:function(t,o){1&t&&(e.TgZ(0,"html",0)(1,"head"),e._UZ(2,"meta",1)(3,"meta",2),e.TgZ(4,"title"),e._uU(5,"Juegos Disponibles"),e.qZA()(),e.TgZ(6,"body")(7,"div",3)(8,"h1"),e._uU(9,"\xa1Juegos disponibles!"),e.qZA(),e.TgZ(10,"div",4)(11,"div",5),e._UZ(12,"img",6),e.TgZ(13,"button",7),e.NdJ("click",function(){return o.navigateTo("juego_guessdoor")}),e._uU(14,"Adivina la puerta"),e.qZA()(),e.TgZ(15,"div",5),e._UZ(16,"img",8),e.TgZ(17,"button",7),e.NdJ("click",function(){return o.navigateTo("play")}),e._uU(18,"M\xe1quina tragamonedas"),e.qZA()(),e.TgZ(19,"div",5),e._UZ(20,"img",9),e.TgZ(21,"button",7),e.NdJ("click",function(){return o.navigateTo("rolldice")}),e._uU(22,"Tira los dados"),e.qZA()(),e.TgZ(23,"div",5),e._UZ(24,"img",10),e.TgZ(25,"button",7),e.NdJ("click",function(){return o.navigateTo("juego_precision")}),e._uU(26,"Precisi\xf3n"),e.qZA()()()()()())},styles:["body[_ngcontent-%COMP%]{background-color:#0c1a32;font-family:Arial,sans-serif;color:#fff;margin:0;padding:0;display:flex;justify-content:center;align-items:center;height:100vh}.container[_ngcontent-%COMP%]{text-align:center;width:90%;max-width:1200px}h1[_ngcontent-%COMP%]{font-size:2.5em;margin-bottom:20px}.games[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;gap:20px}.game[_ngcontent-%COMP%]{background-color:#142850;border-radius:10px;padding:10px;box-shadow:0 4px 8px #0003;flex:1 1 calc(50% - 40px);max-width:calc(50% - 40px);display:flex;flex-direction:column;align-items:center}.game[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;border-radius:10px}button[_ngcontent-%COMP%]{background-color:#00d084;color:#fff;border:none;padding:10px 20px;border-radius:5px;margin-top:10px;font-size:1em;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#00a86b}@media (max-width: 768px){.game[_ngcontent-%COMP%]{flex:1 1 100%;max-width:100%}}",'<!DOCTYPE html>\r\n<html lang="es">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n    <title>Juegos Disponibles</title>\r\n    <link rel="stylesheet" href="selectiongame-view.component.html">\r\n</head>\r\n<body>\r\n    <div class="container">\r\n        <h1>\xa1Juegos disponibles!</h1>\r\n        <div class="games">\r\n            <div class="game">\r\n                <img src="../../../../../assets/img/door.png" alt="Adivina la puerta">\r\n                <button (click)="navigateTo(\'juego_guessdoor\')">Adivina la puerta</button>\r\n            </div>\r\n            <div class="game">\r\n                <img src="../../../../../assets/img/slot_machine.png" alt="M\xe1quina tragamonedas">\r\n                <button (click)="navigateTo(\'play\')">M\xe1quina tragamonedas</button>\r\n            </div>\r\n            <div class="game">\r\n                <img src="../../../../../assets/img/dice.png" alt="Tira los dados">\r\n                <button (click)="navigateTo(\'rolldice\')">Tira los dados</button>\r\n            </div>\r\n            <div class="game">\r\n                <img src="../../../../../assets/img/precision.png" alt="Precisi\xf3n">\r\n                <button (click)="navigateTo(\'juego_precision\')">Precisi\xf3n</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</body>\r\n</html>']}),n})(),data:{Validate_game:"selection_game"}},{path:"play",component:B.N,canActivate:[d],data:{Validate_game:"juego_play"}},{path:"rolldice",component:z.s,canActivate:[d],data:{Validate_game:"juego_rolldice"}}];let K=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.Bz.forChild(k),c.Bz]}),n})();var G=s(5906);let Q=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.ez,K,G.m,y.JF,g.u5]}),n})()}}]);