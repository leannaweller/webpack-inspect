(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"1OZW":function(e,t,a){"use strict";var n=a("SW2M");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=n(a("TZn1"))},"6Dz3":function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o});const n=(e,t,a)=>{const n=new URLSearchParams(e);return n.set(t,a),n.toString()},o=(e,t)=>{return new URLSearchParams(e).get(t)}},"8/g6":function(e,t,a){"use strict";var n=a("SW2M");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("q1tI")),r=n(a("6KpG")),l=n(a("+2mu"));var i=function(e,t){var a=function(t){return o.default.createElement(l.default,t,e)};return a.displayName=t,(a=(0,r.default)(a)).muiName="SvgIcon",a};t.default=i},CcK9:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),r=a("SUMQ"),l=a("6ZaM"),i=a.n(l),s=a("zEnc"),d=a.n(s),c=a("E3xr"),u=a("wIs1");const p=e=>({button:{margin:e.spacing.unit},modal:{position:"absolute",width:70*e.spacing.unit,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:4*e.spacing.unit,display:"flex",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},modalInput:{width:"100%",marginRight:4*e.spacing.unit}});a("e8/j");var h=a("Ng2W"),m=a.n(h),f=a("1OZW"),b=a.n(f),g=a("nwgO"),y=a.n(g),v=a("hzb6"),S=a.n(v),x=a("ZqOF"),C=a.n(x);var E=Object(r.withStyles)(p)(class extends o.a.Component{constructor(e){super(e),this.handleUrlChange=(e=>{this.setState({url:e.target.value})}),this.handleKeyPress=(e=>{"Enter"===e.key&&this.props.onUrl(this.state.url)}),this.handleButtonPress=(()=>{this.props.onUrl(this.state.url)}),this.state={url:""}}render(){const{classes:e,handleClose:t,open:a}=this.props;return o.a.createElement(S.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:a,onClose:t},o.a.createElement("div",{className:e.modal},o.a.createElement(C.a,{className:e.modalInput,inputRef:e=>e&&e.focus(),placeholder:"URL for stats.json",value:this.state.url,onChange:this.handleUrlChange,onKeyPress:this.handleKeyPress}),o.a.createElement(b.a,{color:"primary",variant:"contained",onClick:this.handleButtonPress},"Ok")))}}),w=a("6Dz3");var k=Object(u.a)(Object(r.withStyles)(p)(class extends o.a.Component{constructor(e){super(e),this.openModal=(()=>{this.setState({isModalOpened:!0})}),this.closeModal=(()=>{this.setState({isModalOpened:!1})}),this.handleOnUrl=(async e=>{this.closeModal(),this.props.onUrl(e)}),this.state={isModalOpened:!1}}render(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,{open:this.state.isModalOpened,handleClose:this.closeModal,onUrl:this.handleOnUrl}),o.a.createElement(y.a,{title:"Upload stats.json file from the url"},o.a.createElement(b.a,{color:"primary",variant:"fab",disabled:this.props.disabled,component:"span",onClick:this.openModal,className:this.props.classes.button},o.a.createElement(m.a,null))))}})),U=a("vrOF"),O=a.n(U);var M=Object(r.withStyles)(e=>({button:{margin:e.spacing.unit},input:{display:"none"}}))(class extends o.a.Component{constructor(e){super(e),this.handleFileUpload=(e=>{this.props.onUploadStart(),null!==e.target.files&&function(e,t){const a=new FileReader;a.onload=(e=>{const n=a.result,o=JSON.parse(n);t(o)}),a.readAsText(e)}(e.target.files[0],e=>{this.props.onUploadEnd(e)})}),this.state={uploading:!1}}render(){const{classes:e}=this.props;return o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{accept:".json",className:e.input,id:"button-file",onChange:this.handleFileUpload,type:"file"}),o.a.createElement("label",{htmlFor:"button-file"},o.a.createElement(y.a,{title:"Upload file from the computer"},o.a.createElement(b.a,{color:"primary",variant:"fab",disabled:this.state.uploading,component:"span",className:e.button},o.a.createElement(O.a,null)))))}});var j=Object(r.withStyles)(e=>({root:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},actions:{display:"flex",justifyContent:"center",paddingBottom:2*e.spacing.unit,paddingTop:2*e.spacing.unit}}))(class extends o.a.Component{constructor(e){super(e),this.onUploadStart=(()=>{this.setState({uploading:!0})}),this.onUploadEnd=((e,t)=>{this.setState({uploading:!1}),this.props.onStatsUploaded(e,t)}),this.state={uploading:!1}}render(){const{classes:e}=this.props;return o.a.createElement("div",{className:e.root},o.a.createElement(c.b,null),o.a.createElement("div",null,o.a.createElement(i.a,{align:"center",variant:"headline"},"Please, upload your stats.json data"),o.a.createElement(i.a,{align:"center",variant:"caption",color:"textSecondary",paragraph:!0},"webpack --profile --json > stats.json"),o.a.createElement("div",{className:e.actions},o.a.createElement(M,{onUploadStart:this.onUploadStart,onUploadEnd:this.onUploadEnd}),o.a.createElement(k,{onUrl:this.props.onUrl})),this.state.uploading?o.a.createElement(d.a,null):null))}}),P=a("6FtM");t.default=Object(u.a)(e=>o.a.createElement(P.a.Consumer,null,t=>o.a.createElement(j,{onStatsUploaded:(a,n)=>{t.onStatsDataLoaded(a);const o={pathname:"/inspect",search:e.location.search};e.history.push(o)},onUrl:t=>{const a={pathname:"/inspect",search:Object(w.a)(e.location.search,"stats",t)};e.history.push(a)}})))},Ng2W:function(e,t,a){"use strict";var n=a("SW2M");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("q1tI")),r=(0,n(a("8/g6")).default)(o.default.createElement("g",null,o.default.createElement("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"})),"Link");t.default=r},TZn1:function(e,t,a){"use strict";var n=a("SW2M");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=n(a("JRbm")),r=n(a("ll+H")),l=n(a("Zdao")),i=n(a("hM+G")),s=n(a("q1tI")),d=(n(a("17x9")),n(a("TSYQ"))),c=n(a("Hk+Y")),u=a("wClv"),p=n(a("U0j5")),h=a("gasH"),m=function(e){return{root:(0,i.default)({},e.typography.button,{lineHeight:"1.4em",boxSizing:"border-box",minWidth:11*e.spacing.unit,minHeight:36,padding:"".concat(e.spacing.unit,"px ").concat(2*e.spacing.unit,"px"),borderRadius:4,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:(0,u.fade)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,u.fade)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,u.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},flat:{},flatPrimary:{},flatSecondary:{},outlined:{border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},colorInherit:{color:"inherit"},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground},"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},raised:{},raisedPrimary:{},raisedSecondary:{},focusVisible:{},disabled:{},fab:{borderRadius:"50%",padding:0,minWidth:0,width:56,fontSize:24,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]}},mini:{width:40,height:40},sizeSmall:{padding:"".concat(e.spacing.unit-1,"px ").concat(e.spacing.unit,"px"),minWidth:8*e.spacing.unit,minHeight:32,fontSize:e.typography.pxToRem(13)},sizeLarge:{padding:"".concat(e.spacing.unit,"px ").concat(3*e.spacing.unit,"px"),minWidth:14*e.spacing.unit,minHeight:40,fontSize:e.typography.pxToRem(15)},fullWidth:{width:"100%"}}};function f(e){var t,a=e.children,n=e.classes,i=e.className,c=e.color,u=e.disabled,m=e.disableFocusRipple,f=e.fullWidth,b=e.focusVisibleClassName,g=e.mini,y=e.size,v=e.variant,S=(0,l.default)(e,["children","classes","className","color","disabled","disableFocusRipple","fullWidth","focusVisibleClassName","mini","size","variant"]),x="fab"===v,C="contained"===v||"raised"===v,E=!C&&!x,w=(0,d.default)(n.root,(t={},(0,r.default)(t,n.contained,C||x),(0,r.default)(t,n.fab,x),(0,r.default)(t,n.mini,x&&g),(0,r.default)(t,n.colorInherit,"inherit"===c),(0,r.default)(t,n.textPrimary,E&&"primary"===c),(0,r.default)(t,n.textSecondary,E&&"secondary"===c),(0,r.default)(t,n.flat,E),(0,r.default)(t,n.flatPrimary,E&&"primary"===c),(0,r.default)(t,n.flatSecondary,E&&"secondary"===c),(0,r.default)(t,n.containedPrimary,!E&&"primary"===c),(0,r.default)(t,n.containedSecondary,!E&&"secondary"===c),(0,r.default)(t,n.raised,C||x),(0,r.default)(t,n.raisedPrimary,(C||x)&&"primary"===c),(0,r.default)(t,n.raisedSecondary,(C||x)&&"secondary"===c),(0,r.default)(t,n.text,"text"===v),(0,r.default)(t,n.outlined,"outlined"===v),(0,r.default)(t,n["size".concat((0,h.capitalize)(y))],"medium"!==y),(0,r.default)(t,n.disabled,u),(0,r.default)(t,n.fullWidth,f),t),i);return s.default.createElement(p.default,(0,o.default)({className:w,disabled:u,focusRipple:!m,focusVisibleClassName:(0,d.default)(n.focusVisible,b)},S),s.default.createElement("span",{className:n.label},a))}t.styles=m,f.propTypes={},f.defaultProps={color:"default",component:"button",disabled:!1,disableFocusRipple:!1,fullWidth:!1,mini:!1,size:"medium",type:"button",variant:"text"};var b=(0,c.default)(m,{name:"MuiButton"})(f);t.default=b},"e8/j":function(e,t,a){"use strict";async function n(e){return(await fetch(e)).json()}a.d(t,"a",function(){return n})},vrOF:function(e,t,a){"use strict";var n=a("SW2M");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("q1tI")),r=(0,n(a("8/g6")).default)(o.default.createElement("g",null,o.default.createElement("path",{d:"M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"})),"FileUpload");t.default=r}}]);