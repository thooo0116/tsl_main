"use strict";(self.webpackChunktsl_web=self.webpackChunktsl_web||[]).push([[870],{18870:function(t,r,e){e.r(r),e.d(r,{MarketplaceV3:function(){return h}});var n=e(74165),i=e(15861),a=e(15671),s=e(43144),c=e(23001),o=e(79530),h=(e(80518),e(25025),e(70332),e(8455),e(49242),e(59189),e(26219),e(68834),e(65660),e(61303),e(71497),e(56880),e(94317),e(13670),e(79120),e(97604),e(8187),e(19362),e(59190),e(54730),e(36250),e(85725),e(38730),e(48507),e(38398),e(2090),e(86841),e(49561),e(80580),e(40246),e(54253),e(91559),e(40553),e(26),e(69392),e(29526),e(24601),e(46878),e(77033),e(87033),e(5158),e(27761),e(20583),e(92355),e(84194),e(51121),e(32484),e(78435),e(31583),e(84255),e(98528),e(62555),e(73211),e(82037),e(20737),e(78262),e(34161),e(50266),e(98839),e(65815),e(52378),e(55173),e(51375),e(43320),function(){function t(r,e,n){(0,a.Z)(this,t);var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,h=arguments.length>5?arguments[5]:void 0,p=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new o.cV(r,e,s,i);(0,c._)(this,"abi",void 0),(0,c._)(this,"contractWrapper",void 0),(0,c._)(this,"storage",void 0),(0,c._)(this,"encoder",void 0),(0,c._)(this,"events",void 0),(0,c._)(this,"estimator",void 0),(0,c._)(this,"platformFees",void 0),(0,c._)(this,"metadata",void 0),(0,c._)(this,"app",void 0),(0,c._)(this,"roles",void 0),(0,c._)(this,"interceptor",void 0),(0,c._)(this,"_chainId",void 0),this._chainId=h,this.abi=s,this.contractWrapper=p,this.storage=n,this.metadata=new o.am(this.contractWrapper,o.cZ,this.storage),this.app=new o.b4(this.contractWrapper,this.metadata,this.storage),this.roles=new o.an(this.contractWrapper,t.contractRoles),this.encoder=new o.al(this.contractWrapper),this.estimator=new o.aZ(this.contractWrapper),this.events=new o.a_(this.contractWrapper),this.platformFees=new o.b0(this.contractWrapper),this.interceptor=new o.a$(this.contractWrapper)}return(0,s.Z)(t,[{key:"directListings",get:function(){return(0,o.c1)(this.detectDirectListings(),o.d0)}},{key:"englishAuctions",get:function(){return(0,o.c1)(this.detectEnglishAuctions(),o.d1)}},{key:"offers",get:function(){return(0,o.c1)(this.detectOffers(),o.d2)}},{key:"chainId",get:function(){return this._chainId}},{key:"onNetworkUpdated",value:function(t){this.contractWrapper.updateSignerOrProvider(t)}},{key:"getAddress",value:function(){return this.contractWrapper.readContract.address}},{key:"prepare",value:function(){var t=(0,i.Z)((0,n.Z)().mark((function t(r,e,i){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.b3.fromContractWrapper({contractWrapper:this.contractWrapper,method:r,args:e,overrides:i}));case 1:case"end":return t.stop()}}),t,this)})));return function(r,e,n){return t.apply(this,arguments)}}()},{key:"call",value:function(){var t=(0,i.Z)((0,n.Z)().mark((function t(r){var e,i,a,s,c=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(i=c.length,a=new Array(i>1?i-1:0),s=1;s<i;s++)a[s-1]=c[s];return t.abrupt("return",(e=this.contractWrapper).call.apply(e,[r].concat(a)));case 2:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"detectDirectListings",value:function(){if((0,o.c2)(this.contractWrapper,"DirectListings"))return new o.aV(this.contractWrapper,this.storage)}},{key:"detectEnglishAuctions",value:function(){if((0,o.c2)(this.contractWrapper,"EnglishAuctions"))return new o.aW(this.contractWrapper,this.storage)}},{key:"detectOffers",value:function(){if((0,o.c2)(this.contractWrapper,"Offers"))return new o.aX(this.contractWrapper,this.storage)}}]),t}());(0,c._)(h,"contractRoles",["admin","lister","asset"])}}]);
//# sourceMappingURL=870.e85504ac.chunk.js.map