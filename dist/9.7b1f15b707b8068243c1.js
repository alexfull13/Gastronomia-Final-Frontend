(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"f+ep":function(n,l,e){"use strict";e.r(l);var o=e("CcnG"),t=function(){return function(){}}(),u=e("pMnS"),i=e("gIcY"),r=e("A7o+"),a=e("Lk47"),s=e("PSD3"),d=e.n(s),c=function(){function n(n,l,e,o){this.spinner=n,this.service=l,this.translate=e,this.router=o,this.translate.addLangs(["es"]),this.translate.setDefaultLang("es"),this.translate.use("es")}return n.prototype.ngOnInit=function(){this.validateLogin=!0,this.correoValido=!1},n.prototype.onLoggedin=function(n){var l=this;13!==n.which&&13!==n||(this.validateLogin=!1,this.spinner.show(),this.userName=this.userName.toLocaleLowerCase(),-1===this.userName.search("@")&&(this.userName=this.userName+"@yavirac.edu.ec"),this.service.postPublic("oauth/token",{client_id:1,client_secret:"gCKtEi6W8KpXgWCv4sDSlkM6IErcQQLTuvW5j5yg",grant_type:"password",username:this.userName,password:this.password}).subscribe(function(n){localStorage.setItem("token",JSON.stringify(n.access_token)),localStorage.setItem("isLoggedin","true"),l.service.get("users?email="+l.userName).subscribe(function(n){localStorage.setItem("user",JSON.stringify(n.user)),"1"===n.user.role.rol&&l.router.navigate(["dashboard-cupo"]),"2"===n.user.role.rol&&l.router.navigate(["perfil-estudiante"]),"3"===n.user.role.rol&&l.router.navigate(["dashboard-matricula"]),"4"===n.user.role.rol&&l.router.navigate(["dashboard-matricula"])}),l.validateLogin=!1,l.spinner.hide()},function(n){localStorage.removeItem("token"),localStorage.removeItem("user"),localStorage.removeItem("isLoggedin"),d.a.fire("Credenciales Incorrectas","Nombre de Usuario y/o Contrase\xf1a incorrectos","warning"),l.validateLogin=!0,l.spinner.hide()}))},n.prototype.forgotPassword=function(){var n=this;null!=this.userName&&""!==this.userName?(-1===this.userName.search("@")&&(this.userName=this.userName+"@yavirac.edu.ec"),this.validateCorreoElectronico(this.userName)&&(this.spinner.show(),this.service.postPublic("password/email",{email:this.userName}).subscribe(function(l){console.log(l),n.spinner.hide(),d.a.fire("\xa1Correo Electr\xf3nico Enviado!","Ingrese a su correo electr\xf3nico institucional","success")},function(l){console.log(l),localStorage.removeItem("token"),localStorage.removeItem("user"),localStorage.removeItem("isLoggedin"),n.spinner.hide(),d.a.fire("\xa1Correo Electr\xf3nico Enviado!","Ingrese a su correo electr\xf3nico institucional","info")}))):d.a.fire("\xa1Correo Electr\xf3nico Institucional Incorrecto!","Ingrese un correo v\xe1lido","error")},n.prototype.validateCorreoElectronico=function(n){return/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(n)?(this.correoValido=!0,!0):(this.correoValido=!1,!1)},n}(),g=e("miAi"),p=e("ZYCi"),m=o["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}.login-page[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;overflow:auto;background:#222;text-align:center;color:#fff;padding:3em}.login-page[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]{padding:0}.login-page[_ngcontent-%COMP%]   .input-lg[_ngcontent-%COMP%]{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:0}.login-page[_ngcontent-%COMP%]   .input-underline[_ngcontent-%COMP%]{background:0 0;border:none;box-shadow:none;border-bottom:2px solid rgba(255,255,255,.5);color:#fff;border-radius:0}.login-page[_ngcontent-%COMP%]   .input-underline[_ngcontent-%COMP%]:focus{border-bottom:2px solid #fff;box-shadow:none}.login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]{border-radius:50px;color:rgba(255,255,255,.8);background:#222;border:2px solid rgba(255,255,255,.8);font-size:18px;line-height:40px;padding:0 25px}.login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]:active, .login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]:focus, .login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]:hover, .login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]:visited{color:#fff;border:2px solid #fff;outline:0}.login-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:300;margin-top:20px;margin-bottom:10px;font-size:36px}.login-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:rgba(255,255,255,.7)}.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{padding:8px 0}.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:rgba(255,255,255,.6)!important}.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-moz-placeholder{color:rgba(255,255,255,.6)!important}.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(255,255,255,.6)!important}.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(255,255,255,.6)!important}.login-page[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]{padding:40px 0}.login-page[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]{border-radius:50%;border:2px solid #fff}"]],data:{animation:[{type:7,name:"routerTransition",definitions:[],options:{}}]}});function v(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,44,"div",[["class","login-page"]],[[24,"@routerTransition",0]],null,null,null,null)),(n()(),o["\u0275eld"](1,0,null,null,43,"div",[["class","row justify-content-md-center"]],null,null,null,null,null)),(n()(),o["\u0275eld"](2,0,null,null,42,"div",[["class","col-md-4"]],null,null,null,null,null)),(n()(),o["\u0275eld"](3,0,null,null,0,"img",[["class","user-avatar"],["src","assets/images/logo.png"],["width","150px"]],null,null,null,null,null)),(n()(),o["\u0275eld"](4,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["IGNUG"])),(n()(),o["\u0275eld"](6,0,null,null,38,"form",[["novalidate",""],["role","form"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,e){var t=!0;return"submit"===l&&(t=!1!==o["\u0275nov"](n,8).onSubmit(e)&&t),"reset"===l&&(t=!1!==o["\u0275nov"](n,8).onReset()&&t),t},null,null)),o["\u0275did"](7,16384,null,0,i.u,[],null,null),o["\u0275did"](8,4210688,null,0,i.m,[[8,null],[8,null]],null,null),o["\u0275prd"](2048,null,i.b,null,[i.m]),o["\u0275did"](10,16384,null,0,i.l,[[4,i.b]],null,null),(n()(),o["\u0275eld"](11,0,null,null,27,"div",[["class","form-content"]],null,null,null,null,null)),(n()(),o["\u0275eld"](12,0,null,null,14,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),o["\u0275eld"](13,0,null,null,3,"label",[["for","userName"]],null,null,null,null,null)),(n()(),o["\u0275eld"](14,0,null,null,2,"i",[["class","fa fa-envelope"]],null,null,null,null,null)),(n()(),o["\u0275ted"](15,null,[" "," "])),o["\u0275pid"](131072,r.i,[r.j,o.ChangeDetectorRef]),(n()(),o["\u0275eld"](17,0,null,null,9,"div",[["class","form-group input-group"]],null,null,null,null,null)),(n()(),o["\u0275eld"](18,0,null,null,5,"input",[["class","form-control input-underline input-lg"],["id","userName"],["name","userName"],["placeholder",""],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var t=!0,u=n.component;return"input"===l&&(t=!1!==o["\u0275nov"](n,19)._handleInput(e.target.value)&&t),"blur"===l&&(t=!1!==o["\u0275nov"](n,19).onTouched()&&t),"compositionstart"===l&&(t=!1!==o["\u0275nov"](n,19)._compositionStart()&&t),"compositionend"===l&&(t=!1!==o["\u0275nov"](n,19)._compositionEnd(e.target.value)&&t),"ngModelChange"===l&&(t=!1!==(u.userName=e)&&t),t},null,null)),o["\u0275did"](19,16384,null,0,i.c,[o.Renderer2,o.ElementRef,[2,i.a]],null,null),o["\u0275prd"](1024,null,i.i,function(n){return[n]},[i.c]),o["\u0275did"](21,671744,null,0,i.n,[[2,i.b],[8,null],[8,null],[6,i.i]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),o["\u0275prd"](2048,null,i.j,null,[i.n]),o["\u0275did"](23,16384,null,0,i.k,[[4,i.j]],null,null),(n()(),o["\u0275eld"](24,0,null,null,2,"div",[["class","input-group-prepend"]],null,null,null,null,null)),(n()(),o["\u0275eld"](25,0,null,null,1,"span",[["class","input-group-text  input-underline input-lg"],["id","basic-addon1"]],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["@yavirac.edu.ec"])),(n()(),o["\u0275eld"](27,0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),o["\u0275eld"](28,0,null,null,4,"label",[["for","userName"]],null,null,null,null,null)),(n()(),o["\u0275eld"](29,0,null,null,3,"i",[["class","fa fa-key"]],null,null,null,null,null)),(n()(),o["\u0275ted"](30,null,[" ",""])),o["\u0275pid"](131072,r.i,[r.j,o.ChangeDetectorRef]),(n()(),o["\u0275eld"](32,0,null,null,0,"i",[["class","fa fa-question btn"],["title","Su contrase\xf1a por defecto es su n\xfamero de c\xe9dula"]],null,null,null,null,null)),(n()(),o["\u0275eld"](33,0,null,null,5,"input",[["class","form-control input-underline input-lg"],["id","password"],["name","password"],["placeholder",""],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var t=!0,u=n.component;return"input"===l&&(t=!1!==o["\u0275nov"](n,34)._handleInput(e.target.value)&&t),"blur"===l&&(t=!1!==o["\u0275nov"](n,34).onTouched()&&t),"compositionstart"===l&&(t=!1!==o["\u0275nov"](n,34)._compositionStart()&&t),"compositionend"===l&&(t=!1!==o["\u0275nov"](n,34)._compositionEnd(e.target.value)&&t),"ngModelChange"===l&&(t=!1!==(u.password=e)&&t),"keyup"===l&&(t=!1!==u.onLoggedin(e)&&t),t},null,null)),o["\u0275did"](34,16384,null,0,i.c,[o.Renderer2,o.ElementRef,[2,i.a]],null,null),o["\u0275prd"](1024,null,i.i,function(n){return[n]},[i.c]),o["\u0275did"](36,671744,null,0,i.n,[[2,i.b],[8,null],[8,null],[6,i.i]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),o["\u0275prd"](2048,null,i.j,null,[i.n]),o["\u0275did"](38,16384,null,0,i.k,[[4,i.j]],null,null),(n()(),o["\u0275eld"](39,0,null,null,2,"a",[["class","btn rounded-btn"]],null,[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.onLoggedin(13)&&o),o},null,null)),(n()(),o["\u0275ted"](40,null,["",""])),o["\u0275pid"](131072,r.i,[r.j,o.ChangeDetectorRef]),(n()(),o["\u0275eld"](42,0,null,null,2,"a",[["class","btn rounded-btn m-3"]],null,[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.forgotPassword()&&o),o},null,null)),(n()(),o["\u0275ted"](43,null,["\xbf","?"])),o["\u0275pid"](131072,r.i,[r.j,o.ChangeDetectorRef])],function(n,l){var e=l.component;n(l,21,0,"userName",!e.validateLogin,e.userName),n(l,36,0,"password",!e.validateLogin,e.password)},function(n,l){n(l,0,0,void 0),n(l,6,0,o["\u0275nov"](l,10).ngClassUntouched,o["\u0275nov"](l,10).ngClassTouched,o["\u0275nov"](l,10).ngClassPristine,o["\u0275nov"](l,10).ngClassDirty,o["\u0275nov"](l,10).ngClassValid,o["\u0275nov"](l,10).ngClassInvalid,o["\u0275nov"](l,10).ngClassPending),n(l,15,0,o["\u0275unv"](l,15,0,o["\u0275nov"](l,16).transform("Institutional Email"))),n(l,18,0,o["\u0275nov"](l,23).ngClassUntouched,o["\u0275nov"](l,23).ngClassTouched,o["\u0275nov"](l,23).ngClassPristine,o["\u0275nov"](l,23).ngClassDirty,o["\u0275nov"](l,23).ngClassValid,o["\u0275nov"](l,23).ngClassInvalid,o["\u0275nov"](l,23).ngClassPending),n(l,30,0,o["\u0275unv"](l,30,0,o["\u0275nov"](l,31).transform("Password"))),n(l,33,0,o["\u0275nov"](l,38).ngClassUntouched,o["\u0275nov"](l,38).ngClassTouched,o["\u0275nov"](l,38).ngClassPristine,o["\u0275nov"](l,38).ngClassDirty,o["\u0275nov"](l,38).ngClassValid,o["\u0275nov"](l,38).ngClassInvalid,o["\u0275nov"](l,38).ngClassPending),n(l,40,0,o["\u0275unv"](l,40,0,o["\u0275nov"](l,41).transform("Log in"))),n(l,43,0,o["\u0275unv"](l,43,0,o["\u0275nov"](l,44).transform("Forgot Password")))})}function f(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"app-login",[],null,null,null,v,m)),o["\u0275did"](1,114688,null,0,c,[g.c,a.a,r.j,p.l],null,null)],function(n,l){n(l,1,0)},null)}var h=o["\u0275ccf"]("app-login",c,f,{},{},[]),C=e("Ip0R"),b=function(){return function(){}}();e.d(l,"LoginModuleNgFactory",function(){return P});var P=o["\u0275cmf"](t,[],function(n){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,h]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,C.o,C.n,[o.LOCALE_ID,[2,C.B]]),o["\u0275mpd"](4608,i.v,i.v,[]),o["\u0275mpd"](1073742336,C.b,C.b,[]),o["\u0275mpd"](1073742336,r.g,r.g,[]),o["\u0275mpd"](1073742336,p.o,p.o,[[2,p.u],[2,p.l]]),o["\u0275mpd"](1073742336,b,b,[]),o["\u0275mpd"](1073742336,i.s,i.s,[]),o["\u0275mpd"](1073742336,i.g,i.g,[]),o["\u0275mpd"](1073742336,t,t,[]),o["\u0275mpd"](1024,p.j,function(){return[[{path:"",component:c}]]},[])])})}}]);