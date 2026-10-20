(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zr="170",Za=0,ho=1,Ka=2,fa=1,pa=2,an=3,En=0,Me=1,Xe=2,wn=0,si=1,uo=2,fo=3,po=4,ja=5,Nn=100,$a=101,Ja=102,Qa=103,tc=104,ec=200,nc=201,ic=202,sc=203,Qs=204,tr=205,rc=206,oc=207,ac=208,cc=209,lc=210,hc=211,dc=212,uc=213,fc=214,er=0,nr=1,ir=2,ai=3,sr=4,rr=5,or=6,ar=7,kr=0,pc=1,mc=2,yn=0,gc=1,_c=2,xc=3,ma=4,vc=5,Mc=6,Sc=7,ga=300,ci=301,li=302,cr=303,lr=304,ms=306,hr=1e3,On=1001,dr=1002,Ue=1003,wc=1004,Bi=1005,$e=1006,Ms=1007,Bn=1008,dn=1009,_a=1010,xa=1011,Ci=1012,Hr=1013,zn=1014,cn=1015,Pi=1016,Vr=1017,Wr=1018,hi=1020,va=35902,Ma=1021,Sa=1022,Ye=1023,wa=1024,ya=1025,ri=1026,di=1027,Ea=1028,Xr=1029,Ta=1030,qr=1031,Yr=1033,rs=33776,os=33777,as=33778,cs=33779,ur=35840,fr=35841,pr=35842,mr=35843,gr=36196,_r=37492,xr=37496,vr=37808,Mr=37809,Sr=37810,wr=37811,yr=37812,Er=37813,Tr=37814,br=37815,Ar=37816,Rr=37817,Cr=37818,Pr=37819,Lr=37820,Ir=37821,ls=36492,Dr=36494,Ur=36495,ba=36283,Nr=36284,Fr=36285,Or=36286,yc=3200,Ec=3201,Zr=0,Tc=1,Sn="",Be="srgb",fi="srgb-linear",gs="linear",te="srgb",Vn=7680,mo=519,bc=512,Ac=513,Rc=514,Aa=515,Cc=516,Pc=517,Lc=518,Ic=519,go=35044,_o="300 es",ln=2e3,ds=2001;class pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const _e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ss=Math.PI/180,us=180/Math.PI;function Li(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_e[i&255]+_e[i>>8&255]+_e[i>>16&255]+_e[i>>24&255]+"-"+_e[t&255]+_e[t>>8&255]+"-"+_e[t>>16&15|64]+_e[t>>24&255]+"-"+_e[e&63|128]+_e[e>>8&255]+"-"+_e[e>>16&255]+_e[e>>24&255]+_e[n&255]+_e[n>>8&255]+_e[n>>16&255]+_e[n>>24&255]).toLowerCase()}function Ae(i,t,e){return Math.max(t,Math.min(e,i))}function Dc(i,t){return(i%t+t)%t}function ws(i,t,e){return(1-e)*i+e*t}function Mi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,n,s,r,a,o,c,l){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],m=n[5],g=n[8],_=s[0],p=s[3],d=s[6],w=s[1],E=s[4],v=s[7],D=s[2],A=s[5],R=s[8];return r[0]=a*_+o*w+c*D,r[3]=a*p+o*E+c*A,r[6]=a*d+o*v+c*R,r[1]=l*_+h*w+f*D,r[4]=l*p+h*E+f*A,r[7]=l*d+h*v+f*R,r[2]=u*_+m*w+g*D,r[5]=u*p+m*E+g*A,r[8]=u*d+m*v+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,u=o*c-h*r,m=l*r-a*c,g=e*f+n*u+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(s*l-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=u*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=m*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ys.makeScale(t,e)),this}rotate(t){return this.premultiply(ys.makeRotation(-t)),this}translate(t,e){return this.premultiply(ys.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ys=new Bt;function Ra(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function fs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Uc(){const i=fs("canvas");return i.style.display="block",i}const xo={};function Ai(i){i in xo||(xo[i]=!0,console.warn(i))}function Nc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Fc(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Oc(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Kt={enabled:!0,workingColorSpace:fi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===te&&(i.r=hn(i.r),i.g=hn(i.g),i.b=hn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===te&&(i.r=oi(i.r),i.g=oi(i.g),i.b=oi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Sn?gs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function oi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const vo=[.64,.33,.3,.6,.15,.06],Mo=[.2126,.7152,.0722],So=[.3127,.329],wo=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yo=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Kt.define({[fi]:{primaries:vo,whitePoint:So,transfer:gs,toXYZ:wo,fromXYZ:yo,luminanceCoefficients:Mo,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:vo,whitePoint:So,transfer:te,toXYZ:wo,fromXYZ:yo,luminanceCoefficients:Mo,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}});let Wn;class Bc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Wn===void 0&&(Wn=fs("canvas")),Wn.width=t.width,Wn.height=t.height;const n=Wn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Wn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=fs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=hn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hn(e[n]/255)*255):e[n]=hn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Gc=0;class Ca{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=Li(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Es(s[a].image)):r.push(Es(s[a]))}else r=Es(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Es(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zc=0;class Se extends pi{constructor(t=Se.DEFAULT_IMAGE,e=Se.DEFAULT_MAPPING,n=On,s=On,r=$e,a=Bn,o=Ye,c=dn,l=Se.DEFAULT_ANISOTROPY,h=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zc++}),this.uuid=Li(),this.name="",this.source=new Ca(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ga)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hr:t.x=t.x-Math.floor(t.x);break;case On:t.x=t.x<0?0:1;break;case dr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hr:t.y=t.y-Math.floor(t.y);break;case On:t.y=t.y<0?0:1;break;case dr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Se.DEFAULT_IMAGE=null;Se.DEFAULT_MAPPING=ga;Se.DEFAULT_ANISOTROPY=1;class ee{constructor(t=0,e=0,n=0,s=1){ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],m=c[5],g=c[9],_=c[2],p=c[6],d=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,v=(m+1)/2,D=(d+1)/2,A=(h+u)/4,R=(f+_)/4,C=(g+p)/4;return E>v&&E>D?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=A/n,r=R/n):v>D?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=C/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=R/r,s=C/r),this.set(n,s,r,e),this}let w=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(f-_)/w,this.z=(u-h)/w,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kc extends pi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Se(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ca(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends kc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Pa extends Se{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hc extends Se{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ii{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3];const u=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=u,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(f!==_||c!==u||l!==m||h!==g){let p=1-o;const d=c*u+l*m+h*g+f*_,w=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){const D=Math.sqrt(E),A=Math.atan2(D,d*w);p=Math.sin(p*A)/D,o=Math.sin(o*A)/D}const v=o*w;if(c=c*p+u*v,l=l*p+m*v,h=h*p+g*v,f=f*p+_*v,p===1-o){const D=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=D,l*=D,h*=D,f*=D}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[a],u=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*f+c*m-l*u,t[e+1]=c*g+h*u+l*f-o*m,t[e+2]=l*g+h*m+o*u-c*f,t[e+3]=h*g-o*f-c*u-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),f=o(r/2),u=c(n/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*f+l*m*g,this._y=l*m*f-u*h*g,this._z=l*h*g+u*m*f,this._w=l*h*f-u*m*g;break;case"YXZ":this._x=u*h*f+l*m*g,this._y=l*m*f-u*h*g,this._z=l*h*g-u*m*f,this._w=l*h*f+u*m*g;break;case"ZXY":this._x=u*h*f-l*m*g,this._y=l*m*f+u*h*g,this._z=l*h*g+u*m*f,this._w=l*h*f-u*m*g;break;case"ZYX":this._x=u*h*f-l*m*g,this._y=l*m*f+u*h*g,this._z=l*h*g-u*m*f,this._w=l*h*f+u*m*g;break;case"YZX":this._x=u*h*f+l*m*g,this._y=l*m*f+u*h*g,this._z=l*h*g-u*m*f,this._w=l*h*f-u*m*g;break;case"XZY":this._x=u*h*f-l*m*g,this._y=l*m*f-u*h*g,this._z=l*h*g+u*m*f,this._w=l*h*f+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),f=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=a*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Eo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Eo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+c*l+a*f-o*h,this.y=n+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ts.copy(this).projectOnVector(t),this.sub(Ts)}reflect(t){return this.sub(Ts.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ts=new L,Eo=new Ii;class Di{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ke):ke.fromBufferAttribute(r,a),ke.applyMatrix4(t.matrixWorld),this.expandByPoint(ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gi.copy(n.boundingBox)),Gi.applyMatrix4(t.matrixWorld),this.union(Gi)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ke),ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Si),zi.subVectors(this.max,Si),Xn.subVectors(t.a,Si),qn.subVectors(t.b,Si),Yn.subVectors(t.c,Si),mn.subVectors(qn,Xn),gn.subVectors(Yn,qn),bn.subVectors(Xn,Yn);let e=[0,-mn.z,mn.y,0,-gn.z,gn.y,0,-bn.z,bn.y,mn.z,0,-mn.x,gn.z,0,-gn.x,bn.z,0,-bn.x,-mn.y,mn.x,0,-gn.y,gn.x,0,-bn.y,bn.x,0];return!bs(e,Xn,qn,Yn,zi)||(e=[1,0,0,0,1,0,0,0,1],!bs(e,Xn,qn,Yn,zi))?!1:(ki.crossVectors(mn,gn),e=[ki.x,ki.y,ki.z],bs(e,Xn,qn,Yn,zi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(en),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const en=[new L,new L,new L,new L,new L,new L,new L,new L],ke=new L,Gi=new Di,Xn=new L,qn=new L,Yn=new L,mn=new L,gn=new L,bn=new L,Si=new L,zi=new L,ki=new L,An=new L;function bs(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){An.fromArray(i,r);const o=s.x*Math.abs(An.x)+s.y*Math.abs(An.y)+s.z*Math.abs(An.z),c=t.dot(An),l=e.dot(An),h=n.dot(An);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Vc=new Di,wi=new L,As=new L;class Kr{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Vc.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wi.subVectors(t,this.center);const e=wi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(wi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(As.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wi.copy(t.center).add(As)),this.expandByPoint(wi.copy(t.center).sub(As))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nn=new L,Rs=new L,Hi=new L,_n=new L,Cs=new L,Vi=new L,Ps=new L;class Wc{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(nn.copy(this.origin).addScaledVector(this.direction,e),nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Rs.copy(t).add(e).multiplyScalar(.5),Hi.copy(e).sub(t).normalize(),_n.copy(this.origin).sub(Rs);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Hi),o=_n.dot(this.direction),c=-_n.dot(Hi),l=_n.lengthSq(),h=Math.abs(1-a*a);let f,u,m,g;if(h>0)if(f=a*c-o,u=a*o-c,g=r*h,f>=0)if(u>=-g)if(u<=g){const _=1/h;f*=_,u*=_,m=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-r,-c),r),m=u*(u+2*c)+l):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+u*(u+2*c)+l);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Rs).addScaledVector(Hi,u),m}intersectSphere(t,e){nn.subVectors(t.center,this.origin);const n=nn.dot(this.direction),s=nn.dot(nn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,nn)!==null}intersectTriangle(t,e,n,s,r){Cs.subVectors(e,t),Vi.subVectors(n,t),Ps.crossVectors(Cs,Vi);let a=this.direction.dot(Ps),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_n.subVectors(this.origin,t);const c=o*this.direction.dot(Vi.crossVectors(_n,Vi));if(c<0)return null;const l=o*this.direction.dot(Cs.cross(_n));if(l<0||c+l>a)return null;const h=-o*_n.dot(Ps);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,s,r,a,o,c,l,h,f,u,m,g,_,p){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,f,u,m,g,_,p)}set(t,e,n,s,r,a,o,c,l,h,f,u,m,g,_,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=f,d[14]=u,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Zn.setFromMatrixColumn(t,0).length(),r=1/Zn.setFromMatrixColumn(t,1).length(),a=1/Zn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const u=a*h,m=a*f,g=o*h,_=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=m+g*l,e[5]=u-_*l,e[9]=-o*c,e[2]=_-u*l,e[6]=g+m*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,m=c*f,g=l*h,_=l*f;e[0]=u+_*o,e[4]=g*o-m,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=_+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,m=c*f,g=l*h,_=l*f;e[0]=u-_*o,e[4]=-a*f,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,m=a*f,g=o*h,_=o*f;e[0]=c*h,e[4]=g*l-m,e[8]=u*l+_,e[1]=c*f,e[5]=_*l+u,e[9]=m*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,m=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-u*f,e[8]=g*f+m,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=m*f+g,e[10]=u-_*f}else if(t.order==="XZY"){const u=a*c,m=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+_,e[5]=a*h,e[9]=m*f-g,e[2]=g*f-m,e[6]=o*h,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xc,t,qc)}lookAt(t,e,n){const s=this.elements;return Pe.subVectors(t,e),Pe.lengthSq()===0&&(Pe.z=1),Pe.normalize(),xn.crossVectors(n,Pe),xn.lengthSq()===0&&(Math.abs(n.z)===1?Pe.x+=1e-4:Pe.z+=1e-4,Pe.normalize(),xn.crossVectors(n,Pe)),xn.normalize(),Wi.crossVectors(Pe,xn),s[0]=xn.x,s[4]=Wi.x,s[8]=Pe.x,s[1]=xn.y,s[5]=Wi.y,s[9]=Pe.y,s[2]=xn.z,s[6]=Wi.z,s[10]=Pe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],m=n[13],g=n[2],_=n[6],p=n[10],d=n[14],w=n[3],E=n[7],v=n[11],D=n[15],A=s[0],R=s[4],C=s[8],M=s[12],x=s[1],T=s[5],I=s[9],U=s[13],G=s[2],X=s[6],z=s[10],Y=s[14],H=s[3],ot=s[7],ft=s[11],vt=s[15];return r[0]=a*A+o*x+c*G+l*H,r[4]=a*R+o*T+c*X+l*ot,r[8]=a*C+o*I+c*z+l*ft,r[12]=a*M+o*U+c*Y+l*vt,r[1]=h*A+f*x+u*G+m*H,r[5]=h*R+f*T+u*X+m*ot,r[9]=h*C+f*I+u*z+m*ft,r[13]=h*M+f*U+u*Y+m*vt,r[2]=g*A+_*x+p*G+d*H,r[6]=g*R+_*T+p*X+d*ot,r[10]=g*C+_*I+p*z+d*ft,r[14]=g*M+_*U+p*Y+d*vt,r[3]=w*A+E*x+v*G+D*H,r[7]=w*R+E*T+v*X+D*ot,r[11]=w*C+E*I+v*z+D*ft,r[15]=w*M+E*U+v*Y+D*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],m=t[14],g=t[3],_=t[7],p=t[11],d=t[15];return g*(+r*c*f-s*l*f-r*o*u+n*l*u+s*o*m-n*c*m)+_*(+e*c*m-e*l*u+r*a*u-s*a*m+s*l*h-r*c*h)+p*(+e*l*f-e*o*m-r*a*f+n*a*m+r*o*h-n*l*h)+d*(-s*o*h-e*c*f+e*o*u+s*a*f-n*a*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],m=t[11],g=t[12],_=t[13],p=t[14],d=t[15],w=f*p*l-_*u*l+_*c*m-o*p*m-f*c*d+o*u*d,E=g*u*l-h*p*l-g*c*m+a*p*m+h*c*d-a*u*d,v=h*_*l-g*f*l+g*o*m-a*_*m-h*o*d+a*f*d,D=g*f*c-h*_*c-g*o*u+a*_*u+h*o*p-a*f*p,A=e*w+n*E+s*v+r*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=w*R,t[1]=(_*u*r-f*p*r-_*s*m+n*p*m+f*s*d-n*u*d)*R,t[2]=(o*p*r-_*c*r+_*s*l-n*p*l-o*s*d+n*c*d)*R,t[3]=(f*c*r-o*u*r-f*s*l+n*u*l+o*s*m-n*c*m)*R,t[4]=E*R,t[5]=(h*p*r-g*u*r+g*s*m-e*p*m-h*s*d+e*u*d)*R,t[6]=(g*c*r-a*p*r-g*s*l+e*p*l+a*s*d-e*c*d)*R,t[7]=(a*u*r-h*c*r+h*s*l-e*u*l-a*s*m+e*c*m)*R,t[8]=v*R,t[9]=(g*f*r-h*_*r-g*n*m+e*_*m+h*n*d-e*f*d)*R,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*d+e*o*d)*R,t[11]=(h*o*r-a*f*r-h*n*l+e*f*l+a*n*m-e*o*m)*R,t[12]=D*R,t[13]=(h*_*s-g*f*s+g*n*u-e*_*u-h*n*p+e*f*p)*R,t[14]=(g*o*s-a*_*s-g*n*c+e*_*c+a*n*p-e*o*p)*R,t[15]=(a*f*s-h*o*s+h*n*c-e*f*c-a*n*u+e*o*u)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,f=o+o,u=r*l,m=r*h,g=r*f,_=a*h,p=a*f,d=o*f,w=c*l,E=c*h,v=c*f,D=n.x,A=n.y,R=n.z;return s[0]=(1-(_+d))*D,s[1]=(m+v)*D,s[2]=(g-E)*D,s[3]=0,s[4]=(m-v)*A,s[5]=(1-(u+d))*A,s[6]=(p+w)*A,s[7]=0,s[8]=(g+E)*R,s[9]=(p-w)*R,s[10]=(1-(u+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Zn.set(s[0],s[1],s[2]).length();const a=Zn.set(s[4],s[5],s[6]).length(),o=Zn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],He.copy(this);const l=1/r,h=1/a,f=1/o;return He.elements[0]*=l,He.elements[1]*=l,He.elements[2]*=l,He.elements[4]*=h,He.elements[5]*=h,He.elements[6]*=h,He.elements[8]*=f,He.elements[9]*=f,He.elements[10]*=f,e.setFromRotationMatrix(He),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=ln){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s);let m,g;if(o===ln)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ds)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ln){const c=this.elements,l=1/(e-t),h=1/(n-s),f=1/(a-r),u=(e+t)*l,m=(n+s)*h;let g,_;if(o===ln)g=(a+r)*f,_=-2*f;else if(o===ds)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Zn=new L,He=new le,Xc=new L(0,0,0),qc=new L(1,1,1),xn=new L,Wi=new L,Pe=new L,To=new le,bo=new Ii;class Ze{constructor(t=0,e=0,n=0,s=Ze.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ae(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return To.makeRotationFromQuaternion(t),this.setFromRotationMatrix(To,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bo.setFromEuler(this),this.setFromQuaternion(bo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ze.DEFAULT_ORDER="XYZ";class La{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Yc=0;const Ao=new L,Kn=new Ii,sn=new le,Xi=new L,yi=new L,Zc=new L,Kc=new Ii,Ro=new L(1,0,0),Co=new L(0,1,0),Po=new L(0,0,1),Lo={type:"added"},jc={type:"removed"},jn={type:"childadded",child:null},Ls={type:"childremoved",child:null};class de extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=de.DEFAULT_UP.clone();const t=new L,e=new Ze,n=new Ii,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Bt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=de.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new La,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Kn.setFromAxisAngle(t,e),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(t,e){return Kn.setFromAxisAngle(t,e),this.quaternion.premultiply(Kn),this}rotateX(t){return this.rotateOnAxis(Ro,t)}rotateY(t){return this.rotateOnAxis(Co,t)}rotateZ(t){return this.rotateOnAxis(Po,t)}translateOnAxis(t,e){return Ao.copy(t).applyQuaternion(this.quaternion),this.position.add(Ao.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ro,t)}translateY(t){return this.translateOnAxis(Co,t)}translateZ(t){return this.translateOnAxis(Po,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xi.copy(t):Xi.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(yi,Xi,this.up):sn.lookAt(Xi,yi,this.up),this.quaternion.setFromRotationMatrix(sn),s&&(sn.extractRotation(s.matrixWorld),Kn.setFromRotationMatrix(sn),this.quaternion.premultiply(Kn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lo),jn.child=t,this.dispatchEvent(jn),jn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jc),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lo),jn.child=t,this.dispatchEvent(jn),jn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,t,Zc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,Kc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}de.DEFAULT_UP=new L(0,1,0);de.DEFAULT_MATRIX_AUTO_UPDATE=!0;de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ve=new L,rn=new L,Is=new L,on=new L,$n=new L,Jn=new L,Io=new L,Ds=new L,Us=new L,Ns=new L,Fs=new ee,Os=new ee,Bs=new ee;class qe{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ve.subVectors(t,e),s.cross(Ve);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ve.subVectors(s,e),rn.subVectors(n,e),Is.subVectors(t,e);const a=Ve.dot(Ve),o=Ve.dot(rn),c=Ve.dot(Is),l=rn.dot(rn),h=rn.dot(Is),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,m=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,on)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,on.x),c.addScaledVector(a,on.y),c.addScaledVector(o,on.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Fs.setScalar(0),Os.setScalar(0),Bs.setScalar(0),Fs.fromBufferAttribute(t,e),Os.fromBufferAttribute(t,n),Bs.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Fs,r.x),a.addScaledVector(Os,r.y),a.addScaledVector(Bs,r.z),a}static isFrontFacing(t,e,n,s){return Ve.subVectors(n,e),rn.subVectors(t,e),Ve.cross(rn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ve.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),Ve.cross(rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return qe.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;$n.subVectors(s,n),Jn.subVectors(r,n),Ds.subVectors(t,n);const c=$n.dot(Ds),l=Jn.dot(Ds);if(c<=0&&l<=0)return e.copy(n);Us.subVectors(t,s);const h=$n.dot(Us),f=Jn.dot(Us);if(h>=0&&f<=h)return e.copy(s);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector($n,a);Ns.subVectors(t,r);const m=$n.dot(Ns),g=Jn.dot(Ns);if(g>=0&&m<=g)return e.copy(r);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Jn,o);const p=h*g-m*f;if(p<=0&&f-h>=0&&m-g>=0)return Io.subVectors(r,s),o=(f-h)/(f-h+(m-g)),e.copy(s).addScaledVector(Io,o);const d=1/(p+_+u);return a=_*d,o=u*d,e.copy(n).addScaledVector($n,a).addScaledVector(Jn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ia={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},qi={h:0,s:0,l:0};function Gs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Lt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=Dc(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Gs(a,r,t+1/3),this.g=Gs(a,r,t),this.b=Gs(a,r,t-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(t,e=Be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){const n=Ia[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hn(t.r),this.g=hn(t.g),this.b=hn(t.b),this}copyLinearToSRGB(t){return this.r=oi(t.r),this.g=oi(t.g),this.b=oi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return Kt.fromWorkingColorSpace(xe.copy(this),t),Math.round(Ae(xe.r*255,0,255))*65536+Math.round(Ae(xe.g*255,0,255))*256+Math.round(Ae(xe.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(xe.copy(this),e);const n=xe.r,s=xe.g,r=xe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(xe.copy(this),e),t.r=xe.r,t.g=xe.g,t.b=xe.b,t}getStyle(t=Be){Kt.fromWorkingColorSpace(xe.copy(this),t);const e=xe.r,n=xe.g,s=xe.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(vn),this.setHSL(vn.h+t,vn.s+e,vn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vn),t.getHSL(qi);const n=ws(vn.h,qi.h,e),s=ws(vn.s,qi.s,e),r=ws(vn.l,qi.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xe=new Lt;Lt.NAMES=Ia;let $c=0;class mi extends pi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=Li(),this.name="",this.blending=si,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qs,this.blendDst=tr,this.blendEquation=Nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=ai,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vn,this.stencilZFail=Vn,this.stencilZPass=Vn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==si&&(n.blending=this.blending),this.side!==En&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qs&&(n.blendSrc=this.blendSrc),this.blendDst!==tr&&(n.blendDst=this.blendDst),this.blendEquation!==Nn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ai&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ut extends mi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.combine=kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ue=new L,Yi=new kt;class Je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=go,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Yi.fromBufferAttribute(this,e),Yi.applyMatrix3(t),this.setXY(e,Yi.x,Yi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==go&&(t.usage=this.usage),t}}class Da extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ua extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class re extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Jc=0;const Oe=new le,zs=new de,Qn=new L,Le=new Di,Ei=new Di,me=new L;class Ne extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ra(t)?Ua:Da)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Oe.makeRotationFromQuaternion(t),this.applyMatrix4(Oe),this}rotateX(t){return Oe.makeRotationX(t),this.applyMatrix4(Oe),this}rotateY(t){return Oe.makeRotationY(t),this.applyMatrix4(Oe),this}rotateZ(t){return Oe.makeRotationZ(t),this.applyMatrix4(Oe),this}translate(t,e,n){return Oe.makeTranslation(t,e,n),this.applyMatrix4(Oe),this}scale(t,e,n){return Oe.makeScale(t,e,n),this.applyMatrix4(Oe),this}lookAt(t){return zs.lookAt(t),zs.updateMatrix(),this.applyMatrix4(zs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qn).negate(),this.translate(Qn.x,Qn.y,Qn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Le.setFromBufferAttribute(r),this.morphTargetsRelative?(me.addVectors(this.boundingBox.min,Le.min),this.boundingBox.expandByPoint(me),me.addVectors(this.boundingBox.max,Le.max),this.boundingBox.expandByPoint(me)):(this.boundingBox.expandByPoint(Le.min),this.boundingBox.expandByPoint(Le.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Le.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ei.setFromBufferAttribute(o),this.morphTargetsRelative?(me.addVectors(Le.min,Ei.min),Le.expandByPoint(me),me.addVectors(Le.max,Ei.max),Le.expandByPoint(me)):(Le.expandByPoint(Ei.min),Le.expandByPoint(Ei.max))}Le.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(me));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)me.fromBufferAttribute(o,l),c&&(Qn.fromBufferAttribute(t,l),me.add(Qn)),s=Math.max(s,n.distanceToSquared(me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new L,c[C]=new L;const l=new L,h=new L,f=new L,u=new kt,m=new kt,g=new kt,_=new L,p=new L;function d(C,M,x){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,M),f.fromBufferAttribute(n,x),u.fromBufferAttribute(r,C),m.fromBufferAttribute(r,M),g.fromBufferAttribute(r,x),h.sub(l),f.sub(l),m.sub(u),g.sub(u);const T=1/(m.x*g.y-g.x*m.y);isFinite(T)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(T),p.copy(f).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(T),o[C].add(_),o[M].add(_),o[x].add(_),c[C].add(p),c[M].add(p),c[x].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let C=0,M=w.length;C<M;++C){const x=w[C],T=x.start,I=x.count;for(let U=T,G=T+I;U<G;U+=3)d(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const E=new L,v=new L,D=new L,A=new L;function R(C){D.fromBufferAttribute(s,C),A.copy(D);const M=o[C];E.copy(M),E.sub(D.multiplyScalar(D.dot(M))).normalize(),v.crossVectors(A,M);const T=v.dot(c[C])<0?-1:1;a.setXYZW(C,E.x,E.y,E.z,T)}for(let C=0,M=w.length;C<M;++C){const x=w[C],T=x.start,I=x.count;for(let U=T,G=T+I;U<G;U+=3)R(t.getX(U+0)),R(t.getX(U+1)),R(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,h=new L,f=new L;if(t)for(let u=0,m=t.count;u<m;u+=3){const g=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,m=e.count;u<m;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)me.fromBufferAttribute(t,e),me.normalize(),t.setXYZ(e,me.x,me.y,me.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h);let m=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*h;for(let d=0;d<h;d++)u[g++]=l[m++]}return new Je(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ne,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){const u=l[h],m=t(u,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const m=l[f];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],f=r[l];for(let u=0,m=f.length;u<m;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Do=new le,Rn=new Wc,Zi=new Kr,Uo=new L,Ki=new L,ji=new L,$i=new L,ks=new L,Ji=new L,No=new L,Qi=new L;class P extends de{constructor(t=new Ne,e=new Ut){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Ji.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],f=r[c];h!==0&&(ks.fromBufferAttribute(f,t),a?Ji.addScaledVector(ks,h):Ji.addScaledVector(ks.sub(e),h))}e.add(Ji)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zi.copy(n.boundingSphere),Zi.applyMatrix4(r),Rn.copy(t.ray).recast(t.near),!(Zi.containsPoint(Rn.origin)===!1&&(Rn.intersectSphere(Zi,Uo)===null||Rn.origin.distanceToSquared(Uo)>(t.far-t.near)**2))&&(Do.copy(r).invert(),Rn.copy(t.ray).applyMatrix4(Do),!(n.boundingBox!==null&&Rn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Rn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const p=u[g],d=a[p.materialIndex],w=Math.max(p.start,m.start),E=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let v=w,D=E;v<D;v+=3){const A=o.getX(v),R=o.getX(v+1),C=o.getX(v+2);s=ts(this,d,t,n,l,h,f,A,R,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const w=o.getX(p),E=o.getX(p+1),v=o.getX(p+2);s=ts(this,a,t,n,l,h,f,w,E,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const p=u[g],d=a[p.materialIndex],w=Math.max(p.start,m.start),E=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let v=w,D=E;v<D;v+=3){const A=v,R=v+1,C=v+2;s=ts(this,d,t,n,l,h,f,A,R,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const w=p,E=p+1,v=p+2;s=ts(this,a,t,n,l,h,f,w,E,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Qc(i,t,e,n,s,r,a,o){let c;if(t.side===Me?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===En,o),c===null)return null;Qi.copy(o),Qi.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Qi);return l<e.near||l>e.far?null:{distance:l,point:Qi.clone(),object:i}}function ts(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Ki),i.getVertexPosition(c,ji),i.getVertexPosition(l,$i);const h=Qc(i,t,e,n,Ki,ji,$i,No);if(h){const f=new L;qe.getBarycoord(No,Ki,ji,$i,f),s&&(h.uv=qe.getInterpolatedAttribute(s,o,c,l,f,new kt)),r&&(h.uv1=qe.getInterpolatedAttribute(r,o,c,l,f,new kt)),a&&(h.normal=qe.getInterpolatedAttribute(a,o,c,l,f,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new L,materialIndex:0};qe.getNormal(Ki,ji,$i,u.normal),h.face=u,h.barycoord=f}return h}class Q extends Ne{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],f=[];let u=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(f,2));function g(_,p,d,w,E,v,D,A,R,C,M){const x=v/R,T=D/C,I=v/2,U=D/2,G=A/2,X=R+1,z=C+1;let Y=0,H=0;const ot=new L;for(let ft=0;ft<z;ft++){const vt=ft*T-U;for(let It=0;It<X;It++){const qt=It*x-I;ot[_]=qt*w,ot[p]=vt*E,ot[d]=G,l.push(ot.x,ot.y,ot.z),ot[_]=0,ot[p]=0,ot[d]=A>0?1:-1,h.push(ot.x,ot.y,ot.z),f.push(It/R),f.push(1-ft/C),Y+=1}}for(let ft=0;ft<C;ft++)for(let vt=0;vt<R;vt++){const It=u+vt+X*ft,qt=u+vt+X*(ft+1),Z=u+(vt+1)+X*(ft+1),j=u+(vt+1)+X*ft;c.push(It,qt,j),c.push(qt,Z,j),H+=6}o.addGroup(m,H,M),m+=H,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Q(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ui(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ve(i){const t={};for(let e=0;e<i.length;e++){const n=ui(i[e]);for(const s in n)t[s]=n[s]}return t}function tl(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Na(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const el={clone:ui,merge:ve};var nl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,il=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends mi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nl,this.fragmentShader=il,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ui(t.uniforms),this.uniformsGroups=tl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Fa extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=ln}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mn=new L,Fo=new kt,Oo=new kt;class Re extends Fa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=us*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ss*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return us*2*Math.atan(Math.tan(Ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mn.x,Mn.y).multiplyScalar(-t/Mn.z),Mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mn.x,Mn.y).multiplyScalar(-t/Mn.z)}getViewSize(t,e){return this.getViewBounds(t,Fo,Oo),e.subVectors(Oo,Fo)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ss*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ti=-90,ei=1;class sl extends de{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Re(ti,ei,t,e);s.layers=this.layers,this.add(s);const r=new Re(ti,ei,t,e);r.layers=this.layers,this.add(r);const a=new Re(ti,ei,t,e);a.layers=this.layers,this.add(a);const o=new Re(ti,ei,t,e);o.layers=this.layers,this.add(o);const c=new Re(ti,ei,t,e);c.layers=this.layers,this.add(c);const l=new Re(ti,ei,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,u,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Oa extends Se{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ci,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class rl extends kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Oa(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Q(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Me,blending:wn});r.uniforms.tEquirect.value=e;const a=new P(s,r),o=e.minFilter;return e.minFilter===Bn&&(e.minFilter=$e),new sl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Hs=new L,ol=new L,al=new Bt;class In{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Hs.subVectors(n,e).cross(ol.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Hs),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||al.getNormalMatrix(t),s=this.coplanarPoint(Hs).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cn=new Kr,es=new L;class jr{constructor(t=new In,e=new In,n=new In,s=new In,r=new In,a=new In){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ln){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],f=s[6],u=s[7],m=s[8],g=s[9],_=s[10],p=s[11],d=s[12],w=s[13],E=s[14],v=s[15];if(n[0].setComponents(c-r,u-l,p-m,v-d).normalize(),n[1].setComponents(c+r,u+l,p+m,v+d).normalize(),n[2].setComponents(c+a,u+h,p+g,v+w).normalize(),n[3].setComponents(c-a,u-h,p-g,v-w).normalize(),n[4].setComponents(c-o,u-f,p-_,v-E).normalize(),e===ln)n[5].setComponents(c+o,u+f,p+_,v+E).normalize();else if(e===ds)n[5].setComponents(o,f,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Cn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cn)}intersectsSprite(t){return Cn.center.set(0,0,0),Cn.radius=.7071067811865476,Cn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(es.x=s.normal.x>0?t.max.x:t.min.x,es.y=s.normal.y>0?t.max.y:t.min.y,es.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(es)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ba(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function cl(i){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<f.length;m++){const g=f[u],_=f[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,f[u]=_)}f.length=u+1;for(let m=0,g=f.length;m<g;m++){const _=f[m];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class Gn extends Ne{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,f=t/o,u=e/c,m=[],g=[],_=[],p=[];for(let d=0;d<h;d++){const w=d*u-a;for(let E=0;E<l;E++){const v=E*f-r;g.push(v,-w,0),_.push(0,0,1),p.push(E/o),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let w=0;w<o;w++){const E=w+l*d,v=w+l*(d+1),D=w+1+l*(d+1),A=w+1+l*d;m.push(E,v,A),m.push(v,D,A)}this.setIndex(m),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gn(t.width,t.height,t.widthSegments,t.heightSegments)}}var ll=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hl=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ul=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fl=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ml=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_l=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ml=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sl=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wl=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yl=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,El=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Al=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ll=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Il=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Dl=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ul=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ol=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gl="gl_FragColor = linearToOutputTexel( gl_FragColor );",zl=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vl=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wl=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ql=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jl=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$l=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jl=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ql=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,th=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ih=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ah=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ch=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ph=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_h=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Th=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ah=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ch=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ph=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ih=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Oh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Xh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$h=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,td=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ed=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,id=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,od=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ad=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ld=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,md=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_d=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Md=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ed=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Td=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ad=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ld=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Id=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Dd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ud=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Od=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zt={alphahash_fragment:ll,alphahash_pars_fragment:hl,alphamap_fragment:dl,alphamap_pars_fragment:ul,alphatest_fragment:fl,alphatest_pars_fragment:pl,aomap_fragment:ml,aomap_pars_fragment:gl,batching_pars_vertex:_l,batching_vertex:xl,begin_vertex:vl,beginnormal_vertex:Ml,bsdfs:Sl,iridescence_fragment:wl,bumpmap_pars_fragment:yl,clipping_planes_fragment:El,clipping_planes_pars_fragment:Tl,clipping_planes_pars_vertex:bl,clipping_planes_vertex:Al,color_fragment:Rl,color_pars_fragment:Cl,color_pars_vertex:Pl,color_vertex:Ll,common:Il,cube_uv_reflection_fragment:Dl,defaultnormal_vertex:Ul,displacementmap_pars_vertex:Nl,displacementmap_vertex:Fl,emissivemap_fragment:Ol,emissivemap_pars_fragment:Bl,colorspace_fragment:Gl,colorspace_pars_fragment:zl,envmap_fragment:kl,envmap_common_pars_fragment:Hl,envmap_pars_fragment:Vl,envmap_pars_vertex:Wl,envmap_physical_pars_fragment:eh,envmap_vertex:Xl,fog_vertex:ql,fog_pars_vertex:Yl,fog_fragment:Zl,fog_pars_fragment:Kl,gradientmap_pars_fragment:jl,lightmap_pars_fragment:$l,lights_lambert_fragment:Jl,lights_lambert_pars_fragment:Ql,lights_pars_begin:th,lights_toon_fragment:nh,lights_toon_pars_fragment:ih,lights_phong_fragment:sh,lights_phong_pars_fragment:rh,lights_physical_fragment:oh,lights_physical_pars_fragment:ah,lights_fragment_begin:ch,lights_fragment_maps:lh,lights_fragment_end:hh,logdepthbuf_fragment:dh,logdepthbuf_pars_fragment:uh,logdepthbuf_pars_vertex:fh,logdepthbuf_vertex:ph,map_fragment:mh,map_pars_fragment:gh,map_particle_fragment:_h,map_particle_pars_fragment:xh,metalnessmap_fragment:vh,metalnessmap_pars_fragment:Mh,morphinstance_vertex:Sh,morphcolor_vertex:wh,morphnormal_vertex:yh,morphtarget_pars_vertex:Eh,morphtarget_vertex:Th,normal_fragment_begin:bh,normal_fragment_maps:Ah,normal_pars_fragment:Rh,normal_pars_vertex:Ch,normal_vertex:Ph,normalmap_pars_fragment:Lh,clearcoat_normal_fragment_begin:Ih,clearcoat_normal_fragment_maps:Dh,clearcoat_pars_fragment:Uh,iridescence_pars_fragment:Nh,opaque_fragment:Fh,packing:Oh,premultiplied_alpha_fragment:Bh,project_vertex:Gh,dithering_fragment:zh,dithering_pars_fragment:kh,roughnessmap_fragment:Hh,roughnessmap_pars_fragment:Vh,shadowmap_pars_fragment:Wh,shadowmap_pars_vertex:Xh,shadowmap_vertex:qh,shadowmask_pars_fragment:Yh,skinbase_vertex:Zh,skinning_pars_vertex:Kh,skinning_vertex:jh,skinnormal_vertex:$h,specularmap_fragment:Jh,specularmap_pars_fragment:Qh,tonemapping_fragment:td,tonemapping_pars_fragment:ed,transmission_fragment:nd,transmission_pars_fragment:id,uv_pars_fragment:sd,uv_pars_vertex:rd,uv_vertex:od,worldpos_vertex:ad,background_vert:cd,background_frag:ld,backgroundCube_vert:hd,backgroundCube_frag:dd,cube_vert:ud,cube_frag:fd,depth_vert:pd,depth_frag:md,distanceRGBA_vert:gd,distanceRGBA_frag:_d,equirect_vert:xd,equirect_frag:vd,linedashed_vert:Md,linedashed_frag:Sd,meshbasic_vert:wd,meshbasic_frag:yd,meshlambert_vert:Ed,meshlambert_frag:Td,meshmatcap_vert:bd,meshmatcap_frag:Ad,meshnormal_vert:Rd,meshnormal_frag:Cd,meshphong_vert:Pd,meshphong_frag:Ld,meshphysical_vert:Id,meshphysical_frag:Dd,meshtoon_vert:Ud,meshtoon_frag:Nd,points_vert:Fd,points_frag:Od,shadow_vert:Bd,shadow_frag:Gd,sprite_vert:zd,sprite_frag:kd},ct={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},je={basic:{uniforms:ve([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:ve([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Lt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:ve([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:ve([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:ve([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Lt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:ve([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:ve([ct.points,ct.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:ve([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:ve([ct.common,ct.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:ve([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:ve([ct.sprite,ct.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:ve([ct.common,ct.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:ve([ct.lights,ct.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};je.physical={uniforms:ve([je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const ns={r:0,b:0,g:0},Pn=new Ze,Hd=new le;function Vd(i,t,e,n,s,r,a){const o=new Lt(0);let c=r===!0?0:1,l,h,f=null,u=0,m=null;function g(w){let E=w.isScene===!0?w.background:null;return E&&E.isTexture&&(E=(w.backgroundBlurriness>0?e:t).get(E)),E}function _(w){let E=!1;const v=g(w);v===null?d(o,c):v&&v.isColor&&(d(v,1),E=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(w,E){const v=g(E);v&&(v.isCubeTexture||v.mapping===ms)?(h===void 0&&(h=new P(new Q(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:ui(je.backgroundCube.uniforms),vertexShader:je.backgroundCube.vertexShader,fragmentShader:je.backgroundCube.fragmentShader,side:Me,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Pn.copy(E.backgroundRotation),Pn.x*=-1,Pn.y*=-1,Pn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Pn.y*=-1,Pn.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Hd.makeRotationFromEuler(Pn)),h.material.toneMapped=Kt.getTransfer(v.colorSpace)!==te,(f!==v||u!==v.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=v,u=v.version,m=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new P(new Gn(2,2),new un({name:"BackgroundMaterial",uniforms:ui(je.background.uniforms),vertexShader:je.background.vertexShader,fragmentShader:je.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(v.colorSpace)!==te,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||u!==v.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,f=v,u=v.version,m=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function d(w,E){w.getRGB(ns,Na(i)),n.buffers.color.setClear(ns.r,ns.g,ns.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(w,E=1){o.set(w),c=E,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,d(o,c)},render:_,addToRenderList:p}}function Wd(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(x,T,I,U,G){let X=!1;const z=f(U,I,T);r!==z&&(r=z,l(r.object)),X=m(x,U,I,G),X&&g(x,U,I,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,v(x,T,I,U),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function f(x,T,I){const U=I.wireframe===!0;let G=n[x.id];G===void 0&&(G={},n[x.id]=G);let X=G[T.id];X===void 0&&(X={},G[T.id]=X);let z=X[U];return z===void 0&&(z=u(c()),X[U]=z),z}function u(x){const T=[],I=[],U=[];for(let G=0;G<e;G++)T[G]=0,I[G]=0,U[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:I,attributeDivisors:U,object:x,attributes:{},index:null}}function m(x,T,I,U){const G=r.attributes,X=T.attributes;let z=0;const Y=I.getAttributes();for(const H in Y)if(Y[H].location>=0){const ft=G[H];let vt=X[H];if(vt===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(vt=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(vt=x.instanceColor)),ft===void 0||ft.attribute!==vt||vt&&ft.data!==vt.data)return!0;z++}return r.attributesNum!==z||r.index!==U}function g(x,T,I,U){const G={},X=T.attributes;let z=0;const Y=I.getAttributes();for(const H in Y)if(Y[H].location>=0){let ft=X[H];ft===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(ft=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(ft=x.instanceColor));const vt={};vt.attribute=ft,ft&&ft.data&&(vt.data=ft.data),G[H]=vt,z++}r.attributes=G,r.attributesNum=z,r.index=U}function _(){const x=r.newAttributes;for(let T=0,I=x.length;T<I;T++)x[T]=0}function p(x){d(x,0)}function d(x,T){const I=r.newAttributes,U=r.enabledAttributes,G=r.attributeDivisors;I[x]=1,U[x]===0&&(i.enableVertexAttribArray(x),U[x]=1),G[x]!==T&&(i.vertexAttribDivisor(x,T),G[x]=T)}function w(){const x=r.newAttributes,T=r.enabledAttributes;for(let I=0,U=T.length;I<U;I++)T[I]!==x[I]&&(i.disableVertexAttribArray(I),T[I]=0)}function E(x,T,I,U,G,X,z){z===!0?i.vertexAttribIPointer(x,T,I,G,X):i.vertexAttribPointer(x,T,I,U,G,X)}function v(x,T,I,U){_();const G=U.attributes,X=I.getAttributes(),z=T.defaultAttributeValues;for(const Y in X){const H=X[Y];if(H.location>=0){let ot=G[Y];if(ot===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(ot=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(ot=x.instanceColor)),ot!==void 0){const ft=ot.normalized,vt=ot.itemSize,It=t.get(ot);if(It===void 0)continue;const qt=It.buffer,Z=It.type,j=It.bytesPerElement,nt=Z===i.INT||Z===i.UNSIGNED_INT||ot.gpuType===Hr;if(ot.isInterleavedBufferAttribute){const tt=ot.data,xt=tt.stride,Tt=ot.offset;if(tt.isInstancedInterleavedBuffer){for(let bt=0;bt<H.locationSize;bt++)d(H.location+bt,tt.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let bt=0;bt<H.locationSize;bt++)p(H.location+bt);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let bt=0;bt<H.locationSize;bt++)E(H.location+bt,vt/H.locationSize,Z,ft,xt*j,(Tt+vt/H.locationSize*bt)*j,nt)}else{if(ot.isInstancedBufferAttribute){for(let tt=0;tt<H.locationSize;tt++)d(H.location+tt,ot.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let tt=0;tt<H.locationSize;tt++)p(H.location+tt);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let tt=0;tt<H.locationSize;tt++)E(H.location+tt,vt/H.locationSize,Z,ft,vt*j,vt/H.locationSize*tt*j,nt)}}else if(z!==void 0){const ft=z[Y];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(H.location,ft);break;case 3:i.vertexAttrib3fv(H.location,ft);break;case 4:i.vertexAttrib4fv(H.location,ft);break;default:i.vertexAttrib1fv(H.location,ft)}}}}w()}function D(){C();for(const x in n){const T=n[x];for(const I in T){const U=T[I];for(const G in U)h(U[G].object),delete U[G];delete T[I]}delete n[x]}}function A(x){if(n[x.id]===void 0)return;const T=n[x.id];for(const I in T){const U=T[I];for(const G in U)h(U[G].object),delete U[G];delete T[I]}delete n[x.id]}function R(x){for(const T in n){const I=n[T];if(I[x.id]===void 0)continue;const U=I[x.id];for(const G in U)h(U[G].object),delete U[G];delete I[x.id]}}function C(){M(),a=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:M,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:p,disableUnusedAttributes:w}}function Xd(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),e.update(h,n,f))}function o(l,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let m=0;for(let g=0;g<f;g++)m+=h[g];e.update(m,n,1)}function c(l,h,f,u){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)a(l[g],h[g],u[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_]*u[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function qd(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Ye&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const C=R===Pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==dn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==cn&&!C)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:D,maxSamples:A}}function Yd(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new In,o=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const m=f.length!==0||u||n!==0||s;return s=u,n=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,m){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,d=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{const w=r?0:n,E=w*4;let v=d.clippingState||null;c.value=v,v=h(g,u,E,m);for(let D=0;D!==E;++D)v[D]=e[D];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,m,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const d=m+_*4,w=u.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<d)&&(p=new Float32Array(d));for(let E=0,v=m;E!==_;++E,v+=4)a.copy(f[E]).applyMatrix4(w,o),a.normal.toArray(p,v),p[v+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Zd(i){let t=new WeakMap;function e(a,o){return o===cr?a.mapping=ci:o===lr&&(a.mapping=li),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===cr||o===lr)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new rl(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ga extends Fa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ii=4,Bo=[.125,.215,.35,.446,.526,.582],Fn=20,Vs=new Ga,Go=new Lt;let Ws=null,Xs=0,qs=0,Ys=!1;const Dn=(1+Math.sqrt(5))/2,ni=1/Dn,zo=[new L(-Dn,ni,0),new L(Dn,ni,0),new L(-ni,0,Dn),new L(ni,0,Dn),new L(0,Dn,-ni),new L(0,Dn,ni),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class ko{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ws=this._renderer.getRenderTarget(),Xs=this._renderer.getActiveCubeFace(),qs=this._renderer.getActiveMipmapLevel(),Ys=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ws,Xs,qs),this._renderer.xr.enabled=Ys,t.scissorTest=!1,is(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ci||t.mapping===li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ws=this._renderer.getRenderTarget(),Xs=this._renderer.getActiveCubeFace(),qs=this._renderer.getActiveMipmapLevel(),Ys=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:Pi,format:Ye,colorSpace:fi,depthBuffer:!1},s=Ho(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ho(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kd(r)),this._blurMaterial=jd(r,t,e)}return s}_compileMaterial(t){const e=new P(this._lodPlanes[0],t);this._renderer.compile(e,Vs)}_sceneToCubeUV(t,e,n,s){const o=new Re(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Go),h.toneMapping=yn,h.autoClear=!1;const m=new Ut({name:"PMREM.Background",side:Me,depthWrite:!1,depthTest:!1}),g=new P(new Q,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Go),_=!0);for(let d=0;d<6;d++){const w=d%3;w===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):w===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));const E=this._cubeSize;is(s,w*E,d>2?E:0,E,E),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ci||t.mapping===li;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new P(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;is(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Vs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=zo[(s-r-1)%zo.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new P(this._lodPlanes[s],l),u=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Fn-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Fn;p>Fn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Fn}`);const d=[];let w=0;for(let R=0;R<Fn;++R){const C=R/_,M=Math.exp(-C*C/2);d.push(M),R===0?w+=M:R<p&&(w+=2*M)}for(let R=0;R<d.length;R++)d[R]=d[R]/w;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=d,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:E}=this;u.dTheta.value=g,u.mipInt.value=E-n;const v=this._sizeLods[s],D=3*v*(s>E-ii?s-E+ii:0),A=4*(this._cubeSize-v);is(e,D,A,3*v,2*v),c.setRenderTarget(e),c.render(f,Vs)}}function Kd(i){const t=[],e=[],n=[];let s=i;const r=i-ii+1+Bo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-ii?c=Bo[a-i+ii-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,g=6,_=3,p=2,d=1,w=new Float32Array(_*g*m),E=new Float32Array(p*g*m),v=new Float32Array(d*g*m);for(let A=0;A<m;A++){const R=A%3*2/3-1,C=A>2?0:-1,M=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];w.set(M,_*g*A),E.set(u,p*g*A);const x=[A,A,A,A,A,A];v.set(x,d*g*A)}const D=new Ne;D.setAttribute("position",new Je(w,_)),D.setAttribute("uv",new Je(E,p)),D.setAttribute("faceIndex",new Je(v,d)),t.push(D),s>ii&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ho(i,t,e){const n=new kn(i,t,e);return n.texture.mapping=ms,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function is(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function jd(i,t,e){const n=new Float32Array(Fn),s=new L(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:Fn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$r(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Vo(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$r(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Wo(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$r(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function $r(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $d(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===cr||c===lr,h=c===ci||c===li;if(l||h){let f=t.get(o);const u=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new ko(i)),f=l?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return l&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new ko(i)),f=l?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Jd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ai("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Qd(i,t,e,n){const s={},r=new WeakMap;function a(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let p=0,d=_.length;p<d;p++)t.remove(_[p])}u.removeEventListener("dispose",a),delete s[u.id];const m=r.get(u);m&&(t.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function c(f){const u=f.attributes;for(const g in u)t.update(u[g],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const _=m[g];for(let p=0,d=_.length;p<d;p++)t.update(_[p],i.ARRAY_BUFFER)}}function l(f){const u=[],m=f.index,g=f.attributes.position;let _=0;if(m!==null){const w=m.array;_=m.version;for(let E=0,v=w.length;E<v;E+=3){const D=w[E+0],A=w[E+1],R=w[E+2];u.push(D,A,A,R,R,D)}}else if(g!==void 0){const w=g.array;_=g.version;for(let E=0,v=w.length/3-1;E<v;E+=3){const D=E+0,A=E+1,R=E+2;u.push(D,A,A,R,R,D)}}else return;const p=new(Ra(u)?Ua:Da)(u,1);p.version=_;const d=r.get(f);d&&t.remove(d),r.set(f,p)}function h(f){const u=r.get(f);if(u){const m=f.index;m!==null&&u.version<m.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function tu(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,m){i.drawElements(n,m,r,u*a),e.update(m,n,1)}function l(u,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,u*a,g),e.update(m,n,g))}function h(u,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,u,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];e.update(p,n,1)}function f(u,m,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<u.length;d++)l(u[d]/a,m[d],_[d]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,u,0,_,0,g);let d=0;for(let w=0;w<g;w++)d+=m[w]*_[w];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function eu(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function nu(i,t,e){const n=new WeakMap,s=new ee;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let x=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var m=x;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),p===!0&&(v=3);let D=o.attributes.position.count*v,A=1;D>t.maxTextureSize&&(A=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const R=new Float32Array(D*A*4*f),C=new Pa(R,D,A,f);C.type=cn,C.needsUpdate=!0;const M=v*4;for(let T=0;T<f;T++){const I=d[T],U=w[T],G=E[T],X=D*A*4*T;for(let z=0;z<I.count;z++){const Y=z*M;g===!0&&(s.fromBufferAttribute(I,z),R[X+Y+0]=s.x,R[X+Y+1]=s.y,R[X+Y+2]=s.z,R[X+Y+3]=0),_===!0&&(s.fromBufferAttribute(U,z),R[X+Y+4]=s.x,R[X+Y+5]=s.y,R[X+Y+6]=s.z,R[X+Y+7]=0),p===!0&&(s.fromBufferAttribute(G,z),R[X+Y+8]=s.x,R[X+Y+9]=s.y,R[X+Y+10]=s.z,R[X+Y+11]=G.itemSize===4?s.w:1)}}u={count:f,texture:C,size:new kt(D,A)},n.set(o,u),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function iu(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,f=t.get(c,h);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return f}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class za extends Se{constructor(t,e,n,s,r,a,o,c,l,h=ri){if(h!==ri&&h!==di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ri&&(n=zn),n===void 0&&h===di&&(n=hi),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ue,this.minFilter=c!==void 0?c:Ue,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ka=new Se,Xo=new za(1,1),Ha=new Pa,Va=new Hc,Wa=new Oa,qo=[],Yo=[],Zo=new Float32Array(16),Ko=new Float32Array(9),jo=new Float32Array(4);function gi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=qo[s];if(r===void 0&&(r=new Float32Array(s),qo[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function _s(i,t){let e=Yo[t];e===void 0&&(e=new Int32Array(t),Yo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function su(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ru(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2fv(this.addr,t),pe(e,t)}}function ou(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;i.uniform3fv(this.addr,t),pe(e,t)}}function au(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4fv(this.addr,t),pe(e,t)}}function cu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;jo.set(n),i.uniformMatrix2fv(this.addr,!1,jo),pe(e,n)}}function lu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;Ko.set(n),i.uniformMatrix3fv(this.addr,!1,Ko),pe(e,n)}}function hu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;Zo.set(n),i.uniformMatrix4fv(this.addr,!1,Zo),pe(e,n)}}function du(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function uu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2iv(this.addr,t),pe(e,t)}}function fu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3iv(this.addr,t),pe(e,t)}}function pu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4iv(this.addr,t),pe(e,t)}}function mu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function gu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;i.uniform2uiv(this.addr,t),pe(e,t)}}function _u(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;i.uniform3uiv(this.addr,t),pe(e,t)}}function xu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;i.uniform4uiv(this.addr,t),pe(e,t)}}function vu(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xo.compareFunction=Aa,r=Xo):r=ka,e.setTexture2D(t||r,s)}function Mu(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Va,s)}function Su(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Wa,s)}function wu(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ha,s)}function yu(i){switch(i){case 5126:return su;case 35664:return ru;case 35665:return ou;case 35666:return au;case 35674:return cu;case 35675:return lu;case 35676:return hu;case 5124:case 35670:return du;case 35667:case 35671:return uu;case 35668:case 35672:return fu;case 35669:case 35673:return pu;case 5125:return mu;case 36294:return gu;case 36295:return _u;case 36296:return xu;case 35678:case 36198:case 36298:case 36306:case 35682:return vu;case 35679:case 36299:case 36307:return Mu;case 35680:case 36300:case 36308:case 36293:return Su;case 36289:case 36303:case 36311:case 36292:return wu}}function Eu(i,t){i.uniform1fv(this.addr,t)}function Tu(i,t){const e=gi(t,this.size,2);i.uniform2fv(this.addr,e)}function bu(i,t){const e=gi(t,this.size,3);i.uniform3fv(this.addr,e)}function Au(i,t){const e=gi(t,this.size,4);i.uniform4fv(this.addr,e)}function Ru(i,t){const e=gi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Cu(i,t){const e=gi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Pu(i,t){const e=gi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Lu(i,t){i.uniform1iv(this.addr,t)}function Iu(i,t){i.uniform2iv(this.addr,t)}function Du(i,t){i.uniform3iv(this.addr,t)}function Uu(i,t){i.uniform4iv(this.addr,t)}function Nu(i,t){i.uniform1uiv(this.addr,t)}function Fu(i,t){i.uniform2uiv(this.addr,t)}function Ou(i,t){i.uniform3uiv(this.addr,t)}function Bu(i,t){i.uniform4uiv(this.addr,t)}function Gu(i,t,e){const n=this.cache,s=t.length,r=_s(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||ka,r[a])}function zu(i,t,e){const n=this.cache,s=t.length,r=_s(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Va,r[a])}function ku(i,t,e){const n=this.cache,s=t.length,r=_s(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Wa,r[a])}function Hu(i,t,e){const n=this.cache,s=t.length,r=_s(e,s);fe(n,r)||(i.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ha,r[a])}function Vu(i){switch(i){case 5126:return Eu;case 35664:return Tu;case 35665:return bu;case 35666:return Au;case 35674:return Ru;case 35675:return Cu;case 35676:return Pu;case 5124:case 35670:return Lu;case 35667:case 35671:return Iu;case 35668:case 35672:return Du;case 35669:case 35673:return Uu;case 5125:return Nu;case 36294:return Fu;case 36295:return Ou;case 36296:return Bu;case 35678:case 36198:case 36298:case 36306:case 35682:return Gu;case 35679:case 36299:case 36307:return zu;case 35680:case 36300:case 36308:case 36293:return ku;case 36289:case 36303:case 36311:case 36292:return Hu}}class Wu{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yu(e.type)}}class Xu{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Vu(e.type)}}class qu{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Zs=/(\w+)(\])?(\[|\.)?/g;function $o(i,t){i.seq.push(t),i.map[t.id]=t}function Yu(i,t,e){const n=i.name,s=n.length;for(Zs.lastIndex=0;;){const r=Zs.exec(n),a=Zs.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){$o(e,l===void 0?new Wu(o,i,t):new Xu(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new qu(o),$o(e,f)),e=f}}}class hs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Yu(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Jo(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Zu=37297;let Ku=0;function ju(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Qo=new Bt;function $u(i){Kt._getMatrix(Qo,Kt.workingColorSpace,i);const t=`mat3( ${Qo.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(i)){case gs:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ta(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+ju(i.getShaderSource(t),a)}else return s}function Ju(i,t){const e=$u(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Qu(i,t){let e;switch(t){case gc:e="Linear";break;case _c:e="Reinhard";break;case xc:e="Cineon";break;case ma:e="ACESFilmic";break;case Mc:e="AgX";break;case Sc:e="Neutral";break;case vc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ss=new L;function tf(){Kt.getLuminanceCoefficients(ss);const i=ss.x.toFixed(4),t=ss.y.toFixed(4),e=ss.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ef(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ri).join(`
`)}function nf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function sf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ri(i){return i!==""}function ea(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function na(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Br(i){return i.replace(rf,af)}const of=new Map;function af(i,t){let e=zt[t];if(e===void 0){const n=of.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Br(e)}const cf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ia(i){return i.replace(cf,lf)}function lf(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sa(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function hf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===fa?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===pa?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===an&&(t="SHADOWMAP_TYPE_VSM"),t}function df(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ci:case li:t="ENVMAP_TYPE_CUBE";break;case ms:t="ENVMAP_TYPE_CUBE_UV";break}return t}function uf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case li:t="ENVMAP_MODE_REFRACTION";break}return t}function ff(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case kr:t="ENVMAP_BLENDING_MULTIPLY";break;case pc:t="ENVMAP_BLENDING_MIX";break;case mc:t="ENVMAP_BLENDING_ADD";break}return t}function pf(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function mf(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=hf(e),l=df(e),h=uf(e),f=ff(e),u=pf(e),m=ef(e),g=nf(r),_=s.createProgram();let p,d,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ri).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ri).join(`
`),d.length>0&&(d+=`
`)):(p=[sa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ri).join(`
`),d=[sa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yn?"#define TONE_MAPPING":"",e.toneMapping!==yn?zt.tonemapping_pars_fragment:"",e.toneMapping!==yn?Qu("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,Ju("linearToOutputTexel",e.outputColorSpace),tf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ri).join(`
`)),a=Br(a),a=ea(a,e),a=na(a,e),o=Br(o),o=ea(o,e),o=na(o,e),a=ia(a),o=ia(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===_o?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_o?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=w+p+a,v=w+d+o,D=Jo(s,s.VERTEX_SHADER,E),A=Jo(s,s.FRAGMENT_SHADER,v);s.attachShader(_,D),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(T){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(_).trim(),U=s.getShaderInfoLog(D).trim(),G=s.getShaderInfoLog(A).trim();let X=!0,z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,D,A);else{const Y=ta(s,D,"vertex"),H=ta(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+I+`
`+Y+`
`+H)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(U===""||G==="")&&(z=!1);z&&(T.diagnostics={runnable:X,programLog:I,vertexShader:{log:U,prefix:p},fragmentShader:{log:G,prefix:d}})}s.deleteShader(D),s.deleteShader(A),C=new hs(s,_),M=sf(s,_)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,Zu)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ku++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=A,this}let gf=0;class _f{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new xf(t),e.set(t,n)),n}}class xf{constructor(t){this.id=gf++,this.code=t,this.usedTimes=0}}function vf(i,t,e,n,s,r,a){const o=new La,c=new _f,l=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function p(M,x,T,I,U){const G=I.fog,X=U.geometry,z=M.isMeshStandardMaterial?I.environment:null,Y=(M.isMeshStandardMaterial?e:t).get(M.envMap||z),H=Y&&Y.mapping===ms?Y.image.height:null,ot=g[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const ft=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,vt=ft!==void 0?ft.length:0;let It=0;X.morphAttributes.position!==void 0&&(It=1),X.morphAttributes.normal!==void 0&&(It=2),X.morphAttributes.color!==void 0&&(It=3);let qt,Z,j,nt;if(ot){const Qt=je[ot];qt=Qt.vertexShader,Z=Qt.fragmentShader}else qt=M.vertexShader,Z=M.fragmentShader,c.update(M),j=c.getVertexShaderID(M),nt=c.getFragmentShaderID(M);const tt=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Tt=U.isInstancedMesh===!0,bt=U.isBatchedMesh===!0,Yt=!!M.map,Vt=!!M.matcap,ce=!!Y,B=!!M.aoMap,we=!!M.lightMap,Wt=!!M.bumpMap,Ht=!!M.normalMap,At=!!M.displacementMap,ne=!!M.emissiveMap,Rt=!!M.metalnessMap,b=!!M.roughnessMap,S=M.anisotropy>0,k=M.clearcoat>0,$=M.dispersion>0,et=M.iridescence>0,K=M.sheen>0,yt=M.transmission>0,ht=S&&!!M.anisotropyMap,mt=k&&!!M.clearcoatMap,Zt=k&&!!M.clearcoatNormalMap,it=k&&!!M.clearcoatRoughnessMap,gt=et&&!!M.iridescenceMap,Pt=et&&!!M.iridescenceThicknessMap,Dt=K&&!!M.sheenColorMap,_t=K&&!!M.sheenRoughnessMap,Xt=!!M.specularMap,Gt=!!M.specularColorMap,ie=!!M.specularIntensityMap,N=yt&&!!M.transmissionMap,lt=yt&&!!M.thicknessMap,q=!!M.gradientMap,J=!!M.alphaMap,pt=M.alphaTest>0,dt=!!M.alphaHash,Ft=!!M.extensions;let he=yn;M.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(he=i.toneMapping);const ge={shaderID:ot,shaderType:M.type,shaderName:M.name,vertexShader:qt,fragmentShader:Z,defines:M.defines,customVertexShaderID:j,customFragmentShaderID:nt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:bt,batchingColor:bt&&U._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&U.instanceColor!==null,instancingMorph:Tt&&U.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:fi,alphaToCoverage:!!M.alphaToCoverage,map:Yt,matcap:Vt,envMap:ce,envMapMode:ce&&Y.mapping,envMapCubeUVHeight:H,aoMap:B,lightMap:we,bumpMap:Wt,normalMap:Ht,displacementMap:u&&At,emissiveMap:ne,normalMapObjectSpace:Ht&&M.normalMapType===Tc,normalMapTangentSpace:Ht&&M.normalMapType===Zr,metalnessMap:Rt,roughnessMap:b,anisotropy:S,anisotropyMap:ht,clearcoat:k,clearcoatMap:mt,clearcoatNormalMap:Zt,clearcoatRoughnessMap:it,dispersion:$,iridescence:et,iridescenceMap:gt,iridescenceThicknessMap:Pt,sheen:K,sheenColorMap:Dt,sheenRoughnessMap:_t,specularMap:Xt,specularColorMap:Gt,specularIntensityMap:ie,transmission:yt,transmissionMap:N,thicknessMap:lt,gradientMap:q,opaque:M.transparent===!1&&M.blending===si&&M.alphaToCoverage===!1,alphaMap:J,alphaTest:pt,alphaHash:dt,combine:M.combine,mapUv:Yt&&_(M.map.channel),aoMapUv:B&&_(M.aoMap.channel),lightMapUv:we&&_(M.lightMap.channel),bumpMapUv:Wt&&_(M.bumpMap.channel),normalMapUv:Ht&&_(M.normalMap.channel),displacementMapUv:At&&_(M.displacementMap.channel),emissiveMapUv:ne&&_(M.emissiveMap.channel),metalnessMapUv:Rt&&_(M.metalnessMap.channel),roughnessMapUv:b&&_(M.roughnessMap.channel),anisotropyMapUv:ht&&_(M.anisotropyMap.channel),clearcoatMapUv:mt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:_t&&_(M.sheenRoughnessMap.channel),specularMapUv:Xt&&_(M.specularMap.channel),specularColorMapUv:Gt&&_(M.specularColorMap.channel),specularIntensityMapUv:ie&&_(M.specularIntensityMap.channel),transmissionMapUv:N&&_(M.transmissionMap.channel),thicknessMapUv:lt&&_(M.thicknessMap.channel),alphaMapUv:J&&_(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ht||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!X.attributes.uv&&(Yt||J),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:xt,skinning:U.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:It,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:Yt&&M.map.isVideoTexture===!0&&Kt.getTransfer(M.map.colorSpace)===te,decodeVideoTextureEmissive:ne&&M.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(M.emissiveMap.colorSpace)===te,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Xe,flipSided:M.side===Me,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ft&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&M.extensions.multiDraw===!0||bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ge.vertexUv1s=l.has(1),ge.vertexUv2s=l.has(2),ge.vertexUv3s=l.has(3),l.clear(),ge}function d(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const T in M.defines)x.push(T),x.push(M.defines[T]);return M.isRawShaderMaterial===!1&&(w(x,M),E(x,M),x.push(i.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function w(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function E(M,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),M.push(o.mask)}function v(M){const x=g[M.type];let T;if(x){const I=je[x];T=el.clone(I.uniforms)}else T=M.uniforms;return T}function D(M,x){let T;for(let I=0,U=h.length;I<U;I++){const G=h[I];if(G.cacheKey===x){T=G,++T.usedTimes;break}}return T===void 0&&(T=new mf(i,x,M,r),h.push(T)),T}function A(M){if(--M.usedTimes===0){const x=h.indexOf(M);h[x]=h[h.length-1],h.pop(),M.destroy()}}function R(M){c.remove(M)}function C(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:v,acquireProgram:D,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:C}}function Mf(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Sf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ra(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function oa(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,u,m,g,_,p){let d=i[t];return d===void 0?(d={id:f.id,object:f,geometry:u,material:m,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},i[t]=d):(d.id=f.id,d.object=f,d.geometry=u,d.material=m,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=p),t++,d}function o(f,u,m,g,_,p){const d=a(f,u,m,g,_,p);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):e.push(d)}function c(f,u,m,g,_,p){const d=a(f,u,m,g,_,p);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):e.unshift(d)}function l(f,u){e.length>1&&e.sort(f||Sf),n.length>1&&n.sort(u||ra),s.length>1&&s.sort(u||ra)}function h(){for(let f=t,u=i.length;f<u;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function wf(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new oa,i.set(n,[a])):s>=r.length?(a=new oa,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function yf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Lt};break;case"SpotLight":e={position:new L,direction:new L,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function Ef(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Tf=0;function bf(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Af(i){const t=new yf,e=Ef(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new le,a=new le;function o(l){let h=0,f=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,g=0,_=0,p=0,d=0,w=0,E=0,v=0,D=0,A=0,R=0;l.sort(bf);for(let M=0,x=l.length;M<x;M++){const T=l[M],I=T.color,U=T.intensity,G=T.distance,X=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=I.r*U,f+=I.g*U,u+=I.b*U;else if(T.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(T.sh.coefficients[z],U);R++}else if(T.isDirectionalLight){const z=t.get(T);if(z.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const Y=T.shadow,H=e.get(T);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=T.shadow.matrix,w++}n.directional[m]=z,m++}else if(T.isSpotLight){const z=t.get(T);z.position.setFromMatrixPosition(T.matrixWorld),z.color.copy(I).multiplyScalar(U),z.distance=G,z.coneCos=Math.cos(T.angle),z.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),z.decay=T.decay,n.spot[_]=z;const Y=T.shadow;if(T.map&&(n.spotLightMap[D]=T.map,D++,Y.updateMatrices(T),T.castShadow&&A++),n.spotLightMatrix[_]=Y.matrix,T.castShadow){const H=e.get(T);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=X,v++}_++}else if(T.isRectAreaLight){const z=t.get(T);z.color.copy(I).multiplyScalar(U),z.halfWidth.set(T.width*.5,0,0),z.halfHeight.set(0,T.height*.5,0),n.rectArea[p]=z,p++}else if(T.isPointLight){const z=t.get(T);if(z.color.copy(T.color).multiplyScalar(T.intensity),z.distance=T.distance,z.decay=T.decay,T.castShadow){const Y=T.shadow,H=e.get(T);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=T.shadow.matrix,E++}n.point[g]=z,g++}else if(T.isHemisphereLight){const z=t.get(T);z.skyColor.copy(T.color).multiplyScalar(U),z.groundColor.copy(T.groundColor).multiplyScalar(U),n.hemi[d]=z,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const C=n.hash;(C.directionalLength!==m||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==p||C.hemiLength!==d||C.numDirectionalShadows!==w||C.numPointShadows!==E||C.numSpotShadows!==v||C.numSpotMaps!==D||C.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+D-A,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,C.directionalLength=m,C.pointLength=g,C.spotLength=_,C.rectAreaLength=p,C.hemiLength=d,C.numDirectionalShadows=w,C.numPointShadows=E,C.numSpotShadows=v,C.numSpotMaps=D,C.numLightProbes=R,n.version=Tf++)}function c(l,h){let f=0,u=0,m=0,g=0,_=0;const p=h.matrixWorldInverse;for(let d=0,w=l.length;d<w;d++){const E=l[d];if(E.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),f++}else if(E.isSpotLight){const v=n.spot[m];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),m++}else if(E.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(p),a.identity(),r.copy(E.matrixWorld),r.premultiply(p),a.extractRotation(r),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(p),u++}else if(E.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:o,setupView:c,state:n}}function aa(i){const t=new Af(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Rf(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new aa(i),t.set(s,[o])):r>=a.length?(o=new aa(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Cf extends mi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=yc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Pf extends mi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Lf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,If=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Df(i,t,e){let n=new jr;const s=new kt,r=new kt,a=new ee,o=new Cf({depthPacking:Ec}),c=new Pf,l={},h=e.maxTextureSize,f={[En]:Me,[Me]:En,[Xe]:Xe},u=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:Lf,fragmentShader:If}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ne;g.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new P(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fa;let d=this.type;this.render=function(A,R,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const M=i.getRenderTarget(),x=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),I=i.state;I.setBlending(wn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const U=d!==an&&this.type===an,G=d===an&&this.type!==an;for(let X=0,z=A.length;X<z;X++){const Y=A[X],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ot=H.getFrameExtents();if(s.multiply(ot),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ot.x),s.x=r.x*ot.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ot.y),s.y=r.y*ot.y,H.mapSize.y=r.y)),H.map===null||U===!0||G===!0){const vt=this.type!==an?{minFilter:Ue,magFilter:Ue}:{};H.map!==null&&H.map.dispose(),H.map=new kn(s.x,s.y,vt),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ft=H.getViewportCount();for(let vt=0;vt<ft;vt++){const It=H.getViewport(vt);a.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),I.viewport(a),H.updateMatrices(Y,vt),n=H.getFrustum(),v(R,C,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===an&&w(H,C),H.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(M,x,T)};function w(A,R){const C=t.update(_);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new kn(s.x,s.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,C,u,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,C,m,_,null)}function E(A,R,C,M){let x=null;const T=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)x=T;else if(x=C.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const I=x.uuid,U=R.uuid;let G=l[I];G===void 0&&(G={},l[I]=G);let X=G[U];X===void 0&&(X=x.clone(),G[U]=X,R.addEventListener("dispose",D)),x=X}if(x.visible=R.visible,x.wireframe=R.wireframe,M===an?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:f[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const I=i.properties.get(x);I.light=C}return x}function v(A,R,C,M,x){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===an)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const U=t.update(A),G=A.material;if(Array.isArray(G)){const X=U.groups;for(let z=0,Y=X.length;z<Y;z++){const H=X[z],ot=G[H.materialIndex];if(ot&&ot.visible){const ft=E(A,ot,M,x);A.onBeforeShadow(i,A,R,C,U,ft,H),i.renderBufferDirect(C,null,U,ft,A,H),A.onAfterShadow(i,A,R,C,U,ft,H)}}}else if(G.visible){const X=E(A,G,M,x);A.onBeforeShadow(i,A,R,C,U,X,null),i.renderBufferDirect(C,null,U,X,A,null),A.onAfterShadow(i,A,R,C,U,X,null)}}const I=A.children;for(let U=0,G=I.length;U<G;U++)v(I[U],R,C,M,x)}function D(A){A.target.removeEventListener("dispose",D);for(const C in l){const M=l[C],x=A.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const Uf={[er]:nr,[ir]:or,[sr]:ar,[ai]:rr,[nr]:er,[or]:ir,[ar]:sr,[rr]:ai};function Nf(i,t){function e(){let N=!1;const lt=new ee;let q=null;const J=new ee(0,0,0,0);return{setMask:function(pt){q!==pt&&!N&&(i.colorMask(pt,pt,pt,pt),q=pt)},setLocked:function(pt){N=pt},setClear:function(pt,dt,Ft,he,ge){ge===!0&&(pt*=he,dt*=he,Ft*=he),lt.set(pt,dt,Ft,he),J.equals(lt)===!1&&(i.clearColor(pt,dt,Ft,he),J.copy(lt))},reset:function(){N=!1,q=null,J.set(-1,0,0,0)}}}function n(){let N=!1,lt=!1,q=null,J=null,pt=null;return{setReversed:function(dt){if(lt!==dt){const Ft=t.get("EXT_clip_control");lt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);const he=pt;pt=null,this.setClear(he)}lt=dt},getReversed:function(){return lt},setTest:function(dt){dt?tt(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(dt){q!==dt&&!N&&(i.depthMask(dt),q=dt)},setFunc:function(dt){if(lt&&(dt=Uf[dt]),J!==dt){switch(dt){case er:i.depthFunc(i.NEVER);break;case nr:i.depthFunc(i.ALWAYS);break;case ir:i.depthFunc(i.LESS);break;case ai:i.depthFunc(i.LEQUAL);break;case sr:i.depthFunc(i.EQUAL);break;case rr:i.depthFunc(i.GEQUAL);break;case or:i.depthFunc(i.GREATER);break;case ar:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=dt}},setLocked:function(dt){N=dt},setClear:function(dt){pt!==dt&&(lt&&(dt=1-dt),i.clearDepth(dt),pt=dt)},reset:function(){N=!1,q=null,J=null,pt=null,lt=!1}}}function s(){let N=!1,lt=null,q=null,J=null,pt=null,dt=null,Ft=null,he=null,ge=null;return{setTest:function(Qt){N||(Qt?tt(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(Qt){lt!==Qt&&!N&&(i.stencilMask(Qt),lt=Qt)},setFunc:function(Qt,Ge,Qe){(q!==Qt||J!==Ge||pt!==Qe)&&(i.stencilFunc(Qt,Ge,Qe),q=Qt,J=Ge,pt=Qe)},setOp:function(Qt,Ge,Qe){(dt!==Qt||Ft!==Ge||he!==Qe)&&(i.stencilOp(Qt,Ge,Qe),dt=Qt,Ft=Ge,he=Qe)},setLocked:function(Qt){N=Qt},setClear:function(Qt){ge!==Qt&&(i.clearStencil(Qt),ge=Qt)},reset:function(){N=!1,lt=null,q=null,J=null,pt=null,dt=null,Ft=null,he=null,ge=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},f={},u=new WeakMap,m=[],g=null,_=!1,p=null,d=null,w=null,E=null,v=null,D=null,A=null,R=new Lt(0,0,0),C=0,M=!1,x=null,T=null,I=null,U=null,G=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Y=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),z=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),z=Y>=2);let ot=null,ft={};const vt=i.getParameter(i.SCISSOR_BOX),It=i.getParameter(i.VIEWPORT),qt=new ee().fromArray(vt),Z=new ee().fromArray(It);function j(N,lt,q,J){const pt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(N,dt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<q;Ft++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(lt+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return dt}const nt={};nt[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(i.DEPTH_TEST),a.setFunc(ai),Wt(!1),Ht(ho),tt(i.CULL_FACE),B(wn);function tt(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function xt(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Tt(N,lt){return f[N]!==lt?(i.bindFramebuffer(N,lt),f[N]=lt,N===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=lt),N===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function bt(N,lt){let q=m,J=!1;if(N){q=u.get(lt),q===void 0&&(q=[],u.set(lt,q));const pt=N.textures;if(q.length!==pt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Ft=pt.length;dt<Ft;dt++)q[dt]=i.COLOR_ATTACHMENT0+dt;q.length=pt.length,J=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,J=!0);J&&i.drawBuffers(q)}function Yt(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const Vt={[Nn]:i.FUNC_ADD,[$a]:i.FUNC_SUBTRACT,[Ja]:i.FUNC_REVERSE_SUBTRACT};Vt[Qa]=i.MIN,Vt[tc]=i.MAX;const ce={[ec]:i.ZERO,[nc]:i.ONE,[ic]:i.SRC_COLOR,[Qs]:i.SRC_ALPHA,[lc]:i.SRC_ALPHA_SATURATE,[ac]:i.DST_COLOR,[rc]:i.DST_ALPHA,[sc]:i.ONE_MINUS_SRC_COLOR,[tr]:i.ONE_MINUS_SRC_ALPHA,[cc]:i.ONE_MINUS_DST_COLOR,[oc]:i.ONE_MINUS_DST_ALPHA,[hc]:i.CONSTANT_COLOR,[dc]:i.ONE_MINUS_CONSTANT_COLOR,[uc]:i.CONSTANT_ALPHA,[fc]:i.ONE_MINUS_CONSTANT_ALPHA};function B(N,lt,q,J,pt,dt,Ft,he,ge,Qt){if(N===wn){_===!0&&(xt(i.BLEND),_=!1);return}if(_===!1&&(tt(i.BLEND),_=!0),N!==ja){if(N!==p||Qt!==M){if((d!==Nn||v!==Nn)&&(i.blendEquation(i.FUNC_ADD),d=Nn,v=Nn),Qt)switch(N){case si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uo:i.blendFunc(i.ONE,i.ONE);break;case fo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case po:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case fo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case po:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}w=null,E=null,D=null,A=null,R.set(0,0,0),C=0,p=N,M=Qt}return}pt=pt||lt,dt=dt||q,Ft=Ft||J,(lt!==d||pt!==v)&&(i.blendEquationSeparate(Vt[lt],Vt[pt]),d=lt,v=pt),(q!==w||J!==E||dt!==D||Ft!==A)&&(i.blendFuncSeparate(ce[q],ce[J],ce[dt],ce[Ft]),w=q,E=J,D=dt,A=Ft),(he.equals(R)===!1||ge!==C)&&(i.blendColor(he.r,he.g,he.b,ge),R.copy(he),C=ge),p=N,M=!1}function we(N,lt){N.side===Xe?xt(i.CULL_FACE):tt(i.CULL_FACE);let q=N.side===Me;lt&&(q=!q),Wt(q),N.blending===si&&N.transparent===!1?B(wn):B(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const J=N.stencilWrite;o.setTest(J),J&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ne(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(N){x!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),x=N)}function Ht(N){N!==Za?(tt(i.CULL_FACE),N!==T&&(N===ho?i.cullFace(i.BACK):N===Ka?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),T=N}function At(N){N!==I&&(z&&i.lineWidth(N),I=N)}function ne(N,lt,q){N?(tt(i.POLYGON_OFFSET_FILL),(U!==lt||G!==q)&&(i.polygonOffset(lt,q),U=lt,G=q)):xt(i.POLYGON_OFFSET_FILL)}function Rt(N){N?tt(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function b(N){N===void 0&&(N=i.TEXTURE0+X-1),ot!==N&&(i.activeTexture(N),ot=N)}function S(N,lt,q){q===void 0&&(ot===null?q=i.TEXTURE0+X-1:q=ot);let J=ft[q];J===void 0&&(J={type:void 0,texture:void 0},ft[q]=J),(J.type!==N||J.texture!==lt)&&(ot!==q&&(i.activeTexture(q),ot=q),i.bindTexture(N,lt||nt[N]),J.type=N,J.texture=lt)}function k(){const N=ft[ot];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function yt(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ht(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Zt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Dt(N){qt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),qt.copy(N))}function _t(N){Z.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Z.copy(N))}function Xt(N,lt){let q=l.get(lt);q===void 0&&(q=new WeakMap,l.set(lt,q));let J=q.get(N);J===void 0&&(J=i.getUniformBlockIndex(lt,N.name),q.set(N,J))}function Gt(N,lt){const J=l.get(lt).get(N);c.get(lt)!==J&&(i.uniformBlockBinding(lt,J,N.__bindingPointIndex),c.set(lt,J))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ot=null,ft={},f={},u=new WeakMap,m=[],g=null,_=!1,p=null,d=null,w=null,E=null,v=null,D=null,A=null,R=new Lt(0,0,0),C=0,M=!1,x=null,T=null,I=null,U=null,G=null,qt.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:tt,disable:xt,bindFramebuffer:Tt,drawBuffers:bt,useProgram:Yt,setBlending:B,setMaterial:we,setFlipSided:Wt,setCullFace:Ht,setLineWidth:At,setPolygonOffset:ne,setScissorTest:Rt,activeTexture:b,bindTexture:S,unbindTexture:k,compressedTexImage2D:$,compressedTexImage3D:et,texImage2D:gt,texImage3D:Pt,updateUBOMapping:Xt,uniformBlockBinding:Gt,texStorage2D:Zt,texStorage3D:it,texSubImage2D:K,texSubImage3D:yt,compressedTexSubImage2D:ht,compressedTexSubImage3D:mt,scissor:Dt,viewport:_t,reset:ie}}function ca(i,t,e,n){const s=Ff(n);switch(e){case Ma:return i*t;case wa:return i*t;case ya:return i*t*2;case Ea:return i*t/s.components*s.byteLength;case Xr:return i*t/s.components*s.byteLength;case Ta:return i*t*2/s.components*s.byteLength;case qr:return i*t*2/s.components*s.byteLength;case Sa:return i*t*3/s.components*s.byteLength;case Ye:return i*t*4/s.components*s.byteLength;case Yr:return i*t*4/s.components*s.byteLength;case rs:case os:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case as:case cs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fr:case mr:return Math.max(i,16)*Math.max(t,8)/4;case ur:case pr:return Math.max(i,8)*Math.max(t,8)/2;case gr:case _r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Sr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case wr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case yr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Er:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Tr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case br:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ar:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Rr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Cr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Pr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Lr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ir:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ls:case Dr:case Ur:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ba:case Nr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fr:case Or:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ff(i){switch(i){case dn:case _a:return{byteLength:1,components:1};case Ci:case xa:case Pi:return{byteLength:2,components:1};case Vr:case Wr:return{byteLength:2,components:4};case zn:case Hr:case cn:return{byteLength:4,components:1};case va:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Of(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new kt,h=new WeakMap;let f;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,S){return m?new OffscreenCanvas(b,S):fs("canvas")}function _(b,S,k){let $=1;const et=Rt(b);if((et.width>k||et.height>k)&&($=k/Math.max(et.width,et.height)),$<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const K=Math.floor($*et.width),yt=Math.floor($*et.height);f===void 0&&(f=g(K,yt));const ht=S?g(K,yt):f;return ht.width=K,ht.height=yt,ht.getContext("2d").drawImage(b,0,0,K,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+K+"x"+yt+")."),ht}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),b;return b}function p(b){return b.generateMipmaps}function d(b){i.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(b,S,k,$,et=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let K=S;if(S===i.RED&&(k===i.FLOAT&&(K=i.R32F),k===i.HALF_FLOAT&&(K=i.R16F),k===i.UNSIGNED_BYTE&&(K=i.R8)),S===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.R8UI),k===i.UNSIGNED_SHORT&&(K=i.R16UI),k===i.UNSIGNED_INT&&(K=i.R32UI),k===i.BYTE&&(K=i.R8I),k===i.SHORT&&(K=i.R16I),k===i.INT&&(K=i.R32I)),S===i.RG&&(k===i.FLOAT&&(K=i.RG32F),k===i.HALF_FLOAT&&(K=i.RG16F),k===i.UNSIGNED_BYTE&&(K=i.RG8)),S===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RG8UI),k===i.UNSIGNED_SHORT&&(K=i.RG16UI),k===i.UNSIGNED_INT&&(K=i.RG32UI),k===i.BYTE&&(K=i.RG8I),k===i.SHORT&&(K=i.RG16I),k===i.INT&&(K=i.RG32I)),S===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RGB8UI),k===i.UNSIGNED_SHORT&&(K=i.RGB16UI),k===i.UNSIGNED_INT&&(K=i.RGB32UI),k===i.BYTE&&(K=i.RGB8I),k===i.SHORT&&(K=i.RGB16I),k===i.INT&&(K=i.RGB32I)),S===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),k===i.UNSIGNED_INT&&(K=i.RGBA32UI),k===i.BYTE&&(K=i.RGBA8I),k===i.SHORT&&(K=i.RGBA16I),k===i.INT&&(K=i.RGBA32I)),S===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),S===i.RGBA){const yt=et?gs:Kt.getTransfer($);k===i.FLOAT&&(K=i.RGBA32F),k===i.HALF_FLOAT&&(K=i.RGBA16F),k===i.UNSIGNED_BYTE&&(K=yt===te?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function v(b,S){let k;return b?S===null||S===zn||S===hi?k=i.DEPTH24_STENCIL8:S===cn?k=i.DEPTH32F_STENCIL8:S===Ci&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===zn||S===hi?k=i.DEPTH_COMPONENT24:S===cn?k=i.DEPTH_COMPONENT32F:S===Ci&&(k=i.DEPTH_COMPONENT16),k}function D(b,S){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ue&&b.minFilter!==$e?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function A(b){const S=b.target;S.removeEventListener("dispose",A),C(S),S.isVideoTexture&&h.delete(S)}function R(b){const S=b.target;S.removeEventListener("dispose",R),x(S)}function C(b){const S=n.get(b);if(S.__webglInit===void 0)return;const k=b.source,$=u.get(k);if($){const et=$[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&M(b),Object.keys($).length===0&&u.delete(k)}n.remove(b)}function M(b){const S=n.get(b);i.deleteTexture(S.__webglTexture);const k=b.source,$=u.get(k);delete $[S.__cacheKey],a.memory.textures--}function x(b){const S=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let et=0;et<S.__webglFramebuffer[$].length;et++)i.deleteFramebuffer(S.__webglFramebuffer[$][et]);else i.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)i.deleteFramebuffer(S.__webglFramebuffer[$]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=b.textures;for(let $=0,et=k.length;$<et;$++){const K=n.get(k[$]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(k[$])}n.remove(b)}let T=0;function I(){T=0}function U(){const b=T;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),T+=1,b}function G(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function X(b,S){const k=n.get(b);if(b.isVideoTexture&&At(b),b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){const $=b.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(k,b,S);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+S)}function z(b,S){const k=n.get(b);if(b.version>0&&k.__version!==b.version){Z(k,b,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+S)}function Y(b,S){const k=n.get(b);if(b.version>0&&k.__version!==b.version){Z(k,b,S);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+S)}function H(b,S){const k=n.get(b);if(b.version>0&&k.__version!==b.version){j(k,b,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+S)}const ot={[hr]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[dr]:i.MIRRORED_REPEAT},ft={[Ue]:i.NEAREST,[wc]:i.NEAREST_MIPMAP_NEAREST,[Bi]:i.NEAREST_MIPMAP_LINEAR,[$e]:i.LINEAR,[Ms]:i.LINEAR_MIPMAP_NEAREST,[Bn]:i.LINEAR_MIPMAP_LINEAR},vt={[bc]:i.NEVER,[Ic]:i.ALWAYS,[Ac]:i.LESS,[Aa]:i.LEQUAL,[Rc]:i.EQUAL,[Lc]:i.GEQUAL,[Cc]:i.GREATER,[Pc]:i.NOTEQUAL};function It(b,S){if(S.type===cn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===$e||S.magFilter===Ms||S.magFilter===Bi||S.magFilter===Bn||S.minFilter===$e||S.minFilter===Ms||S.minFilter===Bi||S.minFilter===Bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,ot[S.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,ot[S.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,ot[S.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ft[S.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ft[S.minFilter]),S.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,vt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ue||S.minFilter!==Bi&&S.minFilter!==Bn||S.type===cn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function qt(b,S){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",A));const $=S.source;let et=u.get($);et===void 0&&(et={},u.set($,et));const K=G(S);if(K!==b.__cacheKey){et[K]===void 0&&(et[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),et[K].usedTimes++;const yt=et[b.__cacheKey];yt!==void 0&&(et[b.__cacheKey].usedTimes--,yt.usedTimes===0&&M(S)),b.__cacheKey=K,b.__webglTexture=et[K].texture}return k}function Z(b,S,k){let $=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=i.TEXTURE_3D);const et=qt(b,S),K=S.source;e.bindTexture($,b.__webglTexture,i.TEXTURE0+k);const yt=n.get(K);if(K.version!==yt.__version||et===!0){e.activeTexture(i.TEXTURE0+k);const ht=Kt.getPrimaries(Kt.workingColorSpace),mt=S.colorSpace===Sn?null:Kt.getPrimaries(S.colorSpace),Zt=S.colorSpace===Sn||ht===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let it=_(S.image,!1,s.maxTextureSize);it=ne(S,it);const gt=r.convert(S.format,S.colorSpace),Pt=r.convert(S.type);let Dt=E(S.internalFormat,gt,Pt,S.colorSpace,S.isVideoTexture);It($,S);let _t;const Xt=S.mipmaps,Gt=S.isVideoTexture!==!0,ie=yt.__version===void 0||et===!0,N=K.dataReady,lt=D(S,it);if(S.isDepthTexture)Dt=v(S.format===di,S.type),ie&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,Dt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Dt,it.width,it.height,0,gt,Pt,null));else if(S.isDataTexture)if(Xt.length>0){Gt&&ie&&e.texStorage2D(i.TEXTURE_2D,lt,Dt,Xt[0].width,Xt[0].height);for(let q=0,J=Xt.length;q<J;q++)_t=Xt[q],Gt?N&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,_t.width,_t.height,gt,Pt,_t.data):e.texImage2D(i.TEXTURE_2D,q,Dt,_t.width,_t.height,0,gt,Pt,_t.data);S.generateMipmaps=!1}else Gt?(ie&&e.texStorage2D(i.TEXTURE_2D,lt,Dt,it.width,it.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,gt,Pt,it.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,it.width,it.height,0,gt,Pt,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Gt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Dt,Xt[0].width,Xt[0].height,it.depth);for(let q=0,J=Xt.length;q<J;q++)if(_t=Xt[q],S.format!==Ye)if(gt!==null)if(Gt){if(N)if(S.layerUpdates.size>0){const pt=ca(_t.width,_t.height,S.format,S.type);for(const dt of S.layerUpdates){const Ft=_t.data.subarray(dt*pt/_t.data.BYTES_PER_ELEMENT,(dt+1)*pt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,dt,_t.width,_t.height,1,gt,Ft)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,_t.width,_t.height,it.depth,gt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Dt,_t.width,_t.height,it.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,_t.width,_t.height,it.depth,gt,Pt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Dt,_t.width,_t.height,it.depth,0,gt,Pt,_t.data)}else{Gt&&ie&&e.texStorage2D(i.TEXTURE_2D,lt,Dt,Xt[0].width,Xt[0].height);for(let q=0,J=Xt.length;q<J;q++)_t=Xt[q],S.format!==Ye?gt!==null?Gt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,_t.width,_t.height,gt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Dt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?N&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,_t.width,_t.height,gt,Pt,_t.data):e.texImage2D(i.TEXTURE_2D,q,Dt,_t.width,_t.height,0,gt,Pt,_t.data)}else if(S.isDataArrayTexture)if(Gt){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Dt,it.width,it.height,it.depth),N)if(S.layerUpdates.size>0){const q=ca(it.width,it.height,S.format,S.type);for(const J of S.layerUpdates){const pt=it.data.subarray(J*q/it.data.BYTES_PER_ELEMENT,(J+1)*q/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,it.width,it.height,1,gt,Pt,pt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,gt,Pt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,it.width,it.height,it.depth,0,gt,Pt,it.data);else if(S.isData3DTexture)Gt?(ie&&e.texStorage3D(i.TEXTURE_3D,lt,Dt,it.width,it.height,it.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,gt,Pt,it.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,it.width,it.height,it.depth,0,gt,Pt,it.data);else if(S.isFramebufferTexture){if(ie)if(Gt)e.texStorage2D(i.TEXTURE_2D,lt,Dt,it.width,it.height);else{let q=it.width,J=it.height;for(let pt=0;pt<lt;pt++)e.texImage2D(i.TEXTURE_2D,pt,Dt,q,J,0,gt,Pt,null),q>>=1,J>>=1}}else if(Xt.length>0){if(Gt&&ie){const q=Rt(Xt[0]);e.texStorage2D(i.TEXTURE_2D,lt,Dt,q.width,q.height)}for(let q=0,J=Xt.length;q<J;q++)_t=Xt[q],Gt?N&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,gt,Pt,_t):e.texImage2D(i.TEXTURE_2D,q,Dt,gt,Pt,_t);S.generateMipmaps=!1}else if(Gt){if(ie){const q=Rt(it);e.texStorage2D(i.TEXTURE_2D,lt,Dt,q.width,q.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Pt,it)}else e.texImage2D(i.TEXTURE_2D,0,Dt,gt,Pt,it);p(S)&&d($),yt.__version=K.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function j(b,S,k){if(S.image.length!==6)return;const $=qt(b,S),et=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+k);const K=n.get(et);if(et.version!==K.__version||$===!0){e.activeTexture(i.TEXTURE0+k);const yt=Kt.getPrimaries(Kt.workingColorSpace),ht=S.colorSpace===Sn?null:Kt.getPrimaries(S.colorSpace),mt=S.colorSpace===Sn||yt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Zt=S.isCompressedTexture||S.image[0].isCompressedTexture,it=S.image[0]&&S.image[0].isDataTexture,gt=[];for(let J=0;J<6;J++)!Zt&&!it?gt[J]=_(S.image[J],!0,s.maxCubemapSize):gt[J]=it?S.image[J].image:S.image[J],gt[J]=ne(S,gt[J]);const Pt=gt[0],Dt=r.convert(S.format,S.colorSpace),_t=r.convert(S.type),Xt=E(S.internalFormat,Dt,_t,S.colorSpace),Gt=S.isVideoTexture!==!0,ie=K.__version===void 0||$===!0,N=et.dataReady;let lt=D(S,Pt);It(i.TEXTURE_CUBE_MAP,S);let q;if(Zt){Gt&&ie&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Xt,Pt.width,Pt.height);for(let J=0;J<6;J++){q=gt[J].mipmaps;for(let pt=0;pt<q.length;pt++){const dt=q[pt];S.format!==Ye?Dt!==null?Gt?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,0,0,dt.width,dt.height,Dt,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,Xt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,0,0,dt.width,dt.height,Dt,_t,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,Xt,dt.width,dt.height,0,Dt,_t,dt.data)}}}else{if(q=S.mipmaps,Gt&&ie){q.length>0&&lt++;const J=Rt(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Xt,J.width,J.height)}for(let J=0;J<6;J++)if(it){Gt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,gt[J].width,gt[J].height,Dt,_t,gt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xt,gt[J].width,gt[J].height,0,Dt,_t,gt[J].data);for(let pt=0;pt<q.length;pt++){const Ft=q[pt].image[J].image;Gt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,0,0,Ft.width,Ft.height,Dt,_t,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,Xt,Ft.width,Ft.height,0,Dt,_t,Ft.data)}}else{Gt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Dt,_t,gt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xt,Dt,_t,gt[J]);for(let pt=0;pt<q.length;pt++){const dt=q[pt];Gt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,0,0,Dt,_t,dt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,Xt,Dt,_t,dt.image[J])}}}p(S)&&d(i.TEXTURE_CUBE_MAP),K.__version=et.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function nt(b,S,k,$,et,K){const yt=r.convert(k.format,k.colorSpace),ht=r.convert(k.type),mt=E(k.internalFormat,yt,ht,k.colorSpace),Zt=n.get(S),it=n.get(k);if(it.__renderTarget=S,!Zt.__hasExternalTextures){const gt=Math.max(1,S.width>>K),Pt=Math.max(1,S.height>>K);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,K,mt,gt,Pt,S.depth,0,yt,ht,null):e.texImage2D(et,K,mt,gt,Pt,0,yt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),Ht(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,et,it.__webglTexture,0,Wt(S)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,et,it.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(b,S,k){if(i.bindRenderbuffer(i.RENDERBUFFER,b),S.depthBuffer){const $=S.depthTexture,et=$&&$.isDepthTexture?$.type:null,K=v(S.stencilBuffer,et),yt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=Wt(S);Ht(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,K,S.width,S.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,K,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,K,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,b)}else{const $=S.textures;for(let et=0;et<$.length;et++){const K=$[et],yt=r.convert(K.format,K.colorSpace),ht=r.convert(K.type),mt=E(K.internalFormat,yt,ht,K.colorSpace),Zt=Wt(S);k&&Ht(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt,mt,S.width,S.height):Ht(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt,mt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,mt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xt(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const et=$.__webglTexture,K=Wt(S);if(S.depthTexture.format===ri)Ht(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(S.depthTexture.format===di)Ht(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Tt(b){const S=n.get(b),k=b.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==b.depthTexture){const $=b.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const et=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",et)};$.addEventListener("dispose",et),S.__depthDisposeCallback=et}S.__boundDepthTexture=$}if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");xt(S.__webglFramebuffer,b)}else if(k){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=i.createRenderbuffer(),tt(S.__webglDepthbuffer[$],b,!1);else{const et=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),tt(S.__webglDepthbuffer,b,!1);else{const $=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(b,S,k){const $=n.get(b);S!==void 0&&nt($.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Tt(b)}function Yt(b){const S=b.texture,k=n.get(b),$=n.get(S);b.addEventListener("dispose",R);const et=b.textures,K=b.isWebGLCubeRenderTarget===!0,yt=et.length>1;if(yt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=S.version,a.memory.textures++),K){k.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[ht]=[];for(let mt=0;mt<S.mipmaps.length;mt++)k.__webglFramebuffer[ht][mt]=i.createFramebuffer()}else k.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let ht=0;ht<S.mipmaps.length;ht++)k.__webglFramebuffer[ht]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(yt)for(let ht=0,mt=et.length;ht<mt;ht++){const Zt=n.get(et[ht]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&Ht(b)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ht=0;ht<et.length;ht++){const mt=et[ht];k.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ht]);const Zt=r.convert(mt.format,mt.colorSpace),it=r.convert(mt.type),gt=E(mt.internalFormat,Zt,it,mt.colorSpace,b.isXRRenderTarget===!0),Pt=Wt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,gt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,k.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),tt(k.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),It(i.TEXTURE_CUBE_MAP,S);for(let ht=0;ht<6;ht++)if(S.mipmaps&&S.mipmaps.length>0)for(let mt=0;mt<S.mipmaps.length;mt++)nt(k.__webglFramebuffer[ht][mt],b,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,mt);else nt(k.__webglFramebuffer[ht],b,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);p(S)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let ht=0,mt=et.length;ht<mt;ht++){const Zt=et[ht],it=n.get(Zt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),It(i.TEXTURE_2D,Zt),nt(k.__webglFramebuffer,b,Zt,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),p(Zt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ht=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,$.__webglTexture),It(ht,S),S.mipmaps&&S.mipmaps.length>0)for(let mt=0;mt<S.mipmaps.length;mt++)nt(k.__webglFramebuffer[mt],b,S,i.COLOR_ATTACHMENT0,ht,mt);else nt(k.__webglFramebuffer,b,S,i.COLOR_ATTACHMENT0,ht,0);p(S)&&d(ht),e.unbindTexture()}b.depthBuffer&&Tt(b)}function Vt(b){const S=b.textures;for(let k=0,$=S.length;k<$;k++){const et=S[k];if(p(et)){const K=w(b),yt=n.get(et).__webglTexture;e.bindTexture(K,yt),d(K),e.unbindTexture()}}}const ce=[],B=[];function we(b){if(b.samples>0){if(Ht(b)===!1){const S=b.textures,k=b.width,$=b.height;let et=i.COLOR_BUFFER_BIT;const K=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(b),ht=S.length>1;if(ht)for(let mt=0;mt<S.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let mt=0;mt<S.length;mt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[mt]);const Zt=n.get(S[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Zt,0)}i.blitFramebuffer(0,0,k,$,0,0,k,$,et,i.NEAREST),c===!0&&(ce.length=0,B.length=0,ce.push(i.COLOR_ATTACHMENT0+mt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ce.push(K),B.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let mt=0;mt<S.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[mt]);const Zt=n.get(S[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,Zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const S=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Wt(b){return Math.min(s.maxSamples,b.samples)}function Ht(b){const S=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function At(b){const S=a.render.frame;h.get(b)!==S&&(h.set(b,S),b.update())}function ne(b,S){const k=b.colorSpace,$=b.format,et=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||k!==fi&&k!==Sn&&(Kt.getTransfer(k)===te?($!==Ye||et!==dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function Rt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=I,this.setTexture2D=X,this.setTexture2DArray=z,this.setTexture3D=Y,this.setTextureCube=H,this.rebindTextures=bt,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=Ht}function Bf(i,t){function e(n,s=Sn){let r;const a=Kt.getTransfer(s);if(n===dn)return i.UNSIGNED_BYTE;if(n===Vr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===va)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_a)return i.BYTE;if(n===xa)return i.SHORT;if(n===Ci)return i.UNSIGNED_SHORT;if(n===Hr)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===Pi)return i.HALF_FLOAT;if(n===Ma)return i.ALPHA;if(n===Sa)return i.RGB;if(n===Ye)return i.RGBA;if(n===wa)return i.LUMINANCE;if(n===ya)return i.LUMINANCE_ALPHA;if(n===ri)return i.DEPTH_COMPONENT;if(n===di)return i.DEPTH_STENCIL;if(n===Ea)return i.RED;if(n===Xr)return i.RED_INTEGER;if(n===Ta)return i.RG;if(n===qr)return i.RG_INTEGER;if(n===Yr)return i.RGBA_INTEGER;if(n===rs||n===os||n===as||n===cs)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===rs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===as)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===rs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===os)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===as)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ur||n===fr||n===pr||n===mr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ur)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gr||n===_r||n===xr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===gr||n===_r)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vr||n===Mr||n===Sr||n===wr||n===yr||n===Er||n===Tr||n===br||n===Ar||n===Rr||n===Cr||n===Pr||n===Lr||n===Ir)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===vr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Er)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Tr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===br)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ar)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lr)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ir)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ls||n===Dr||n===Ur)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ls)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Dr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ur)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ba||n===Nr||n===Fr||n===Or)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ls)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Nr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Or)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Gf extends Re{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ct extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zf={type:"move"};class Ks{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),d=this._getHandJoint(l,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),m=.02,g=.005;l.inputState.pinching&&u>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zf)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ct;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const kf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hf=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Vf{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Se,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new un({vertexShader:kf,fragmentShader:Hf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new P(new Gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wf extends pi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,m=null,g=null;const _=new Vf,p=e.getContextAttributes();let d=null,w=null;const E=[],v=[],D=new kt;let A=null;const R=new Re;R.viewport=new ee;const C=new Re;C.viewport=new ee;const M=[R,C],x=new Gf;let T=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let j=E[Z];return j===void 0&&(j=new Ks,E[Z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Z){let j=E[Z];return j===void 0&&(j=new Ks,E[Z]=j),j.getGripSpace()},this.getHand=function(Z){let j=E[Z];return j===void 0&&(j=new Ks,E[Z]=j),j.getHandSpace()};function U(Z){const j=v.indexOf(Z.inputSource);if(j===-1)return;const nt=E[j];nt!==void 0&&(nt.update(Z.inputSource,Z.frame,l||a),nt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",X);for(let Z=0;Z<E.length;Z++){const j=v[Z];j!==null&&(v[Z]=null,E[Z].disconnect(j))}T=null,I=null,_.reset(),t.setRenderTarget(d),m=null,u=null,f=null,s=null,w=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",G),s.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const j={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new kn(m.framebufferWidth,m.framebufferHeight,{format:Ye,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let j=null,nt=null,tt=null;p.depth&&(tt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=p.stencil?di:ri,nt=p.stencil?hi:zn);const xt={colorFormat:e.RGBA8,depthFormat:tt,scaleFactor:r};f=new XRWebGLBinding(s,e),u=f.createProjectionLayer(xt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),w=new kn(u.textureWidth,u.textureHeight,{format:Ye,type:dn,depthTexture:new za(u.textureWidth,u.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),qt.setContext(s),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(Z){for(let j=0;j<Z.removed.length;j++){const nt=Z.removed[j],tt=v.indexOf(nt);tt>=0&&(v[tt]=null,E[tt].disconnect(nt))}for(let j=0;j<Z.added.length;j++){const nt=Z.added[j];let tt=v.indexOf(nt);if(tt===-1){for(let Tt=0;Tt<E.length;Tt++)if(Tt>=v.length){v.push(nt),tt=Tt;break}else if(v[Tt]===null){v[Tt]=nt,tt=Tt;break}if(tt===-1)break}const xt=E[tt];xt&&xt.connect(nt)}}const z=new L,Y=new L;function H(Z,j,nt){z.setFromMatrixPosition(j.matrixWorld),Y.setFromMatrixPosition(nt.matrixWorld);const tt=z.distanceTo(Y),xt=j.projectionMatrix.elements,Tt=nt.projectionMatrix.elements,bt=xt[14]/(xt[10]-1),Yt=xt[14]/(xt[10]+1),Vt=(xt[9]+1)/xt[5],ce=(xt[9]-1)/xt[5],B=(xt[8]-1)/xt[0],we=(Tt[8]+1)/Tt[0],Wt=bt*B,Ht=bt*we,At=tt/(-B+we),ne=At*-B;if(j.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ne),Z.translateZ(At),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),xt[10]===-1)Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const Rt=bt+At,b=Yt+At,S=Wt-ne,k=Ht+(tt-ne),$=Vt*Yt/b*Rt,et=ce*Yt/b*Rt;Z.projectionMatrix.makePerspective(S,k,$,et,Rt,b),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ot(Z,j){j===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(j.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let j=Z.near,nt=Z.far;_.texture!==null&&(_.depthNear>0&&(j=_.depthNear),_.depthFar>0&&(nt=_.depthFar)),x.near=C.near=R.near=j,x.far=C.far=R.far=nt,(T!==x.near||I!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,I=x.far),R.layers.mask=Z.layers.mask|2,C.layers.mask=Z.layers.mask|4,x.layers.mask=R.layers.mask|C.layers.mask;const tt=Z.parent,xt=x.cameras;ot(x,tt);for(let Tt=0;Tt<xt.length;Tt++)ot(xt[Tt],tt);xt.length===2?H(x,R,C):x.projectionMatrix.copy(R.projectionMatrix),ft(Z,x,tt)};function ft(Z,j,nt){nt===null?Z.matrix.copy(j.matrixWorld):(Z.matrix.copy(nt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(j.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=us*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(Z){c=Z,u!==null&&(u.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let vt=null;function It(Z,j){if(h=j.getViewerPose(l||a),g=j,h!==null){const nt=h.views;m!==null&&(t.setRenderTargetFramebuffer(w,m.framebuffer),t.setRenderTarget(w));let tt=!1;nt.length!==x.cameras.length&&(x.cameras.length=0,tt=!0);for(let Tt=0;Tt<nt.length;Tt++){const bt=nt[Tt];let Yt=null;if(m!==null)Yt=m.getViewport(bt);else{const ce=f.getViewSubImage(u,bt);Yt=ce.viewport,Tt===0&&(t.setRenderTargetTextures(w,ce.colorTexture,u.ignoreDepthValues?void 0:ce.depthStencilTexture),t.setRenderTarget(w))}let Vt=M[Tt];Vt===void 0&&(Vt=new Re,Vt.layers.enable(Tt),Vt.viewport=new ee,M[Tt]=Vt),Vt.matrix.fromArray(bt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(bt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),Tt===0&&(x.matrix.copy(Vt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),tt===!0&&x.cameras.push(Vt)}const xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")){const Tt=f.getDepthInformation(nt[0]);Tt&&Tt.isValid&&Tt.texture&&_.init(t,Tt,s.renderState)}}for(let nt=0;nt<E.length;nt++){const tt=v[nt],xt=E[nt];tt!==null&&xt!==void 0&&xt.update(tt,j,l||a)}vt&&vt(Z,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const qt=new Ba;qt.setAnimationLoop(It),this.setAnimationLoop=function(Z){vt=Z},this.dispose=function(){}}}const Ln=new Ze,Xf=new le;function qf(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Na(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,w,E,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),f(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),u(p,d),d.isMeshPhysicalMaterial&&m(p,d,v)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),_(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?c(p,d,w,E):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Me&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Me&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const w=t.get(d),E=w.envMap,v=w.envMapRotation;E&&(p.envMap.value=E,Ln.copy(v),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),p.envMapRotation.value.setFromMatrix4(Xf.makeRotationFromEuler(Ln)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,w,E){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*w,p.scale.value=E*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function u(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,w){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Me&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const w=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Yf(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,E){const v=E.program;n.uniformBlockBinding(w,v)}function l(w,E){let v=s[w.id];v===void 0&&(g(w),v=h(w),s[w.id]=v,w.addEventListener("dispose",p));const D=E.program;n.updateUBOMapping(w,D);const A=t.render.frame;r[w.id]!==A&&(u(w),r[w.id]=A)}function h(w){const E=f();w.__bindingPointIndex=E;const v=i.createBuffer(),D=w.__size,A=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,D,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,v),v}function f(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){const E=s[w.id],v=w.uniforms,D=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,R=v.length;A<R;A++){const C=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,x=C.length;M<x;M++){const T=C[M];if(m(T,A,M,D)===!0){const I=T.__offset,U=Array.isArray(T.value)?T.value:[T.value];let G=0;for(let X=0;X<U.length;X++){const z=U[X],Y=_(z);typeof z=="number"||typeof z=="boolean"?(T.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,I+G,T.__data)):z.isMatrix3?(T.__data[0]=z.elements[0],T.__data[1]=z.elements[1],T.__data[2]=z.elements[2],T.__data[3]=0,T.__data[4]=z.elements[3],T.__data[5]=z.elements[4],T.__data[6]=z.elements[5],T.__data[7]=0,T.__data[8]=z.elements[6],T.__data[9]=z.elements[7],T.__data[10]=z.elements[8],T.__data[11]=0):(z.toArray(T.__data,G),G+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,E,v,D){const A=w.value,R=E+"_"+v;if(D[R]===void 0)return typeof A=="number"||typeof A=="boolean"?D[R]=A:D[R]=A.clone(),!0;{const C=D[R];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return D[R]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(w){const E=w.uniforms;let v=0;const D=16;for(let R=0,C=E.length;R<C;R++){const M=Array.isArray(E[R])?E[R]:[E[R]];for(let x=0,T=M.length;x<T;x++){const I=M[x],U=Array.isArray(I.value)?I.value:[I.value];for(let G=0,X=U.length;G<X;G++){const z=U[G],Y=_(z),H=v%D,ot=H%Y.boundary,ft=H+ot;v+=ot,ft!==0&&D-ft<Y.storage&&(v+=D-ft),I.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=Y.storage}}}const A=v%D;return A>0&&(v+=D-A),w.__size=v,w.__cache={},this}function _(w){const E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function p(w){const E=w.target;E.removeEventListener("dispose",p);const v=a.indexOf(E.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function d(){for(const w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:c,update:l,dispose:d}}class Zf{constructor(t={}){const{canvas:e=Uc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,d=null;const w=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Be,this.toneMapping=yn,this.toneMappingExposure=1;const v=this;let D=!1,A=0,R=0,C=null,M=-1,x=null;const T=new ee,I=new ee;let U=null;const G=new Lt(0);let X=0,z=e.width,Y=e.height,H=1,ot=null,ft=null;const vt=new ee(0,0,z,Y),It=new ee(0,0,z,Y);let qt=!1;const Z=new jr;let j=!1,nt=!1;const tt=new le,xt=new le,Tt=new L,bt=new ee,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function ce(){return C===null?H:1}let B=n;function we(y,F){return e.getContext(y,F)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${zr}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),B===null){const F="webgl2";if(B=we(F,y),B===null)throw we(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Wt,Ht,At,ne,Rt,b,S,k,$,et,K,yt,ht,mt,Zt,it,gt,Pt,Dt,_t,Xt,Gt,ie,N;function lt(){Wt=new Jd(B),Wt.init(),Gt=new Bf(B,Wt),Ht=new qd(B,Wt,t,Gt),At=new Nf(B,Wt),Ht.reverseDepthBuffer&&u&&At.buffers.depth.setReversed(!0),ne=new eu(B),Rt=new Mf,b=new Of(B,Wt,At,Rt,Ht,Gt,ne),S=new Zd(v),k=new $d(v),$=new cl(B),ie=new Wd(B,$),et=new Qd(B,$,ne,ie),K=new iu(B,et,$,ne),Dt=new nu(B,Ht,b),it=new Yd(Rt),yt=new vf(v,S,k,Wt,Ht,ie,it),ht=new qf(v,Rt),mt=new wf,Zt=new Rf(Wt),Pt=new Vd(v,S,k,At,K,m,c),gt=new Df(v,K,Ht),N=new Yf(B,ne,Ht,At),_t=new Xd(B,Wt,ne),Xt=new tu(B,Wt,ne),ne.programs=yt.programs,v.capabilities=Ht,v.extensions=Wt,v.properties=Rt,v.renderLists=mt,v.shadowMap=gt,v.state=At,v.info=ne}lt();const q=new Wf(v,B);this.xr=q,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const y=Wt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Wt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(y){y!==void 0&&(H=y,this.setSize(z,Y,!1))},this.getSize=function(y){return y.set(z,Y)},this.setSize=function(y,F,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=y,Y=F,e.width=Math.floor(y*H),e.height=Math.floor(F*H),V===!0&&(e.style.width=y+"px",e.style.height=F+"px"),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(z*H,Y*H).floor()},this.setDrawingBufferSize=function(y,F,V){z=y,Y=F,H=V,e.width=Math.floor(y*V),e.height=Math.floor(F*V),this.setViewport(0,0,y,F)},this.getCurrentViewport=function(y){return y.copy(T)},this.getViewport=function(y){return y.copy(vt)},this.setViewport=function(y,F,V,W){y.isVector4?vt.set(y.x,y.y,y.z,y.w):vt.set(y,F,V,W),At.viewport(T.copy(vt).multiplyScalar(H).round())},this.getScissor=function(y){return y.copy(It)},this.setScissor=function(y,F,V,W){y.isVector4?It.set(y.x,y.y,y.z,y.w):It.set(y,F,V,W),At.scissor(I.copy(It).multiplyScalar(H).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(y){At.setScissorTest(qt=y)},this.setOpaqueSort=function(y){ot=y},this.setTransparentSort=function(y){ft=y},this.getClearColor=function(y){return y.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(y=!0,F=!0,V=!0){let W=0;if(y){let O=!1;if(C!==null){const rt=C.texture.format;O=rt===Yr||rt===qr||rt===Xr}if(O){const rt=C.texture.type,ut=rt===dn||rt===zn||rt===Ci||rt===hi||rt===Vr||rt===Wr,Mt=Pt.getClearColor(),St=Pt.getClearAlpha(),Nt=Mt.r,Ot=Mt.g,wt=Mt.b;ut?(g[0]=Nt,g[1]=Ot,g[2]=wt,g[3]=St,B.clearBufferuiv(B.COLOR,0,g)):(_[0]=Nt,_[1]=Ot,_[2]=wt,_[3]=St,B.clearBufferiv(B.COLOR,0,_))}else W|=B.COLOR_BUFFER_BIT}F&&(W|=B.DEPTH_BUFFER_BIT),V&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),mt.dispose(),Zt.dispose(),Rt.dispose(),S.dispose(),k.dispose(),K.dispose(),ie.dispose(),N.dispose(),yt.dispose(),q.dispose(),q.removeEventListener("sessionstart",no),q.removeEventListener("sessionend",io),Tn.stop()};function J(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const y=ne.autoReset,F=gt.enabled,V=gt.autoUpdate,W=gt.needsUpdate,O=gt.type;lt(),ne.autoReset=y,gt.enabled=F,gt.autoUpdate=V,gt.needsUpdate=W,gt.type=O}function dt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ft(y){const F=y.target;F.removeEventListener("dispose",Ft),he(F)}function he(y){ge(y),Rt.remove(y)}function ge(y){const F=Rt.get(y).programs;F!==void 0&&(F.forEach(function(V){yt.releaseProgram(V)}),y.isShaderMaterial&&yt.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,V,W,O,rt){F===null&&(F=Yt);const ut=O.isMesh&&O.matrixWorld.determinant()<0,Mt=Xa(y,F,V,W,O);At.setMaterial(W,ut);let St=V.index,Nt=1;if(W.wireframe===!0){if(St=et.getWireframeAttribute(V),St===void 0)return;Nt=2}const Ot=V.drawRange,wt=V.attributes.position;let jt=Ot.start*Nt,se=(Ot.start+Ot.count)*Nt;rt!==null&&(jt=Math.max(jt,rt.start*Nt),se=Math.min(se,(rt.start+rt.count)*Nt)),St!==null?(jt=Math.max(jt,0),se=Math.min(se,St.count)):wt!=null&&(jt=Math.max(jt,0),se=Math.min(se,wt.count));const oe=se-jt;if(oe<0||oe===1/0)return;ie.setup(O,W,Mt,V,St);let ye,$t=_t;if(St!==null&&(ye=$.get(St),$t=Xt,$t.setIndex(ye)),O.isMesh)W.wireframe===!0?(At.setLineWidth(W.wireframeLinewidth*ce()),$t.setMode(B.LINES)):$t.setMode(B.TRIANGLES);else if(O.isLine){let Et=W.linewidth;Et===void 0&&(Et=1),At.setLineWidth(Et*ce()),O.isLineSegments?$t.setMode(B.LINES):O.isLineLoop?$t.setMode(B.LINE_LOOP):$t.setMode(B.LINE_STRIP)}else O.isPoints?$t.setMode(B.POINTS):O.isSprite&&$t.setMode(B.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)$t.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))$t.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Et=O._multiDrawStarts,tn=O._multiDrawCounts,Jt=O._multiDrawCount,ze=St?$.get(St).bytesPerElement:1,Hn=Rt.get(W).currentProgram.getUniforms();for(let Ce=0;Ce<Jt;Ce++)Hn.setValue(B,"_gl_DrawID",Ce),$t.render(Et[Ce]/ze,tn[Ce])}else if(O.isInstancedMesh)$t.renderInstances(jt,oe,O.count);else if(V.isInstancedBufferGeometry){const Et=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,tn=Math.min(V.instanceCount,Et);$t.renderInstances(jt,oe,tn)}else $t.render(jt,oe)};function Qt(y,F,V){y.transparent===!0&&y.side===Xe&&y.forceSinglePass===!1?(y.side=Me,y.needsUpdate=!0,Oi(y,F,V),y.side=En,y.needsUpdate=!0,Oi(y,F,V),y.side=Xe):Oi(y,F,V)}this.compile=function(y,F,V=null){V===null&&(V=y),d=Zt.get(V),d.init(F),E.push(d),V.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),y!==V&&y.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights();const W=new Set;return y.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const rt=O.material;if(rt)if(Array.isArray(rt))for(let ut=0;ut<rt.length;ut++){const Mt=rt[ut];Qt(Mt,V,O),W.add(Mt)}else Qt(rt,V,O),W.add(rt)}),E.pop(),d=null,W},this.compileAsync=function(y,F,V=null){const W=this.compile(y,F,V);return new Promise(O=>{function rt(){if(W.forEach(function(ut){Rt.get(ut).currentProgram.isReady()&&W.delete(ut)}),W.size===0){O(y);return}setTimeout(rt,10)}Wt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Ge=null;function Qe(y){Ge&&Ge(y)}function no(){Tn.stop()}function io(){Tn.start()}const Tn=new Ba;Tn.setAnimationLoop(Qe),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(y){Ge=y,q.setAnimationLoop(y),y===null?Tn.stop():Tn.start()},q.addEventListener("sessionstart",no),q.addEventListener("sessionend",io),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(F),F=q.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,F,C),d=Zt.get(y,E.length),d.init(F),E.push(d),xt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Z.setFromProjectionMatrix(xt),nt=this.localClippingEnabled,j=it.init(this.clippingPlanes,nt),p=mt.get(y,w.length),p.init(),w.push(p),q.enabled===!0&&q.isPresenting===!0){const rt=v.xr.getDepthSensingMesh();rt!==null&&vs(rt,F,-1/0,v.sortObjects)}vs(y,F,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(ot,ft),Vt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Vt&&Pt.addToRenderList(p,y),this.info.render.frame++,j===!0&&it.beginShadows();const V=d.state.shadowsArray;gt.render(V,y,F),j===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=p.opaque,O=p.transmissive;if(d.setupLights(),F.isArrayCamera){const rt=F.cameras;if(O.length>0)for(let ut=0,Mt=rt.length;ut<Mt;ut++){const St=rt[ut];ro(W,O,y,St)}Vt&&Pt.render(y);for(let ut=0,Mt=rt.length;ut<Mt;ut++){const St=rt[ut];so(p,y,St,St.viewport)}}else O.length>0&&ro(W,O,y,F),Vt&&Pt.render(y),so(p,y,F);C!==null&&(b.updateMultisampleRenderTarget(C),b.updateRenderTargetMipmap(C)),y.isScene===!0&&y.onAfterRender(v,y,F),ie.resetDefaultState(),M=-1,x=null,E.pop(),E.length>0?(d=E[E.length-1],j===!0&&it.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function vs(y,F,V,W){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Z.intersectsSprite(y)){W&&bt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(xt);const ut=K.update(y),Mt=y.material;Mt.visible&&p.push(y,ut,Mt,V,bt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Z.intersectsObject(y))){const ut=K.update(y),Mt=y.material;if(W&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),bt.copy(y.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),bt.copy(ut.boundingSphere.center)),bt.applyMatrix4(y.matrixWorld).applyMatrix4(xt)),Array.isArray(Mt)){const St=ut.groups;for(let Nt=0,Ot=St.length;Nt<Ot;Nt++){const wt=St[Nt],jt=Mt[wt.materialIndex];jt&&jt.visible&&p.push(y,ut,jt,V,bt.z,wt)}}else Mt.visible&&p.push(y,ut,Mt,V,bt.z,null)}}const rt=y.children;for(let ut=0,Mt=rt.length;ut<Mt;ut++)vs(rt[ut],F,V,W)}function so(y,F,V,W){const O=y.opaque,rt=y.transmissive,ut=y.transparent;d.setupLightsView(V),j===!0&&it.setGlobalState(v.clippingPlanes,V),W&&At.viewport(T.copy(W)),O.length>0&&Fi(O,F,V),rt.length>0&&Fi(rt,F,V),ut.length>0&&Fi(ut,F,V),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function ro(y,F,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[W.id]===void 0&&(d.state.transmissionRenderTarget[W.id]=new kn(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?Pi:dn,minFilter:Bn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const rt=d.state.transmissionRenderTarget[W.id],ut=W.viewport||T;rt.setSize(ut.z,ut.w);const Mt=v.getRenderTarget();v.setRenderTarget(rt),v.getClearColor(G),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),Vt&&Pt.render(V);const St=v.toneMapping;v.toneMapping=yn;const Nt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),d.setupLightsView(W),j===!0&&it.setGlobalState(v.clippingPlanes,W),Fi(y,V,W),b.updateMultisampleRenderTarget(rt),b.updateRenderTargetMipmap(rt),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let wt=0,jt=F.length;wt<jt;wt++){const se=F[wt],oe=se.object,ye=se.geometry,$t=se.material,Et=se.group;if($t.side===Xe&&oe.layers.test(W.layers)){const tn=$t.side;$t.side=Me,$t.needsUpdate=!0,oo(oe,V,W,ye,$t,Et),$t.side=tn,$t.needsUpdate=!0,Ot=!0}}Ot===!0&&(b.updateMultisampleRenderTarget(rt),b.updateRenderTargetMipmap(rt))}v.setRenderTarget(Mt),v.setClearColor(G,X),Nt!==void 0&&(W.viewport=Nt),v.toneMapping=St}function Fi(y,F,V){const W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,rt=y.length;O<rt;O++){const ut=y[O],Mt=ut.object,St=ut.geometry,Nt=W===null?ut.material:W,Ot=ut.group;Mt.layers.test(V.layers)&&oo(Mt,F,V,St,Nt,Ot)}}function oo(y,F,V,W,O,rt){y.onBeforeRender(v,F,V,W,O,rt),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(v,F,V,W,y,rt),O.transparent===!0&&O.side===Xe&&O.forceSinglePass===!1?(O.side=Me,O.needsUpdate=!0,v.renderBufferDirect(V,F,W,O,y,rt),O.side=En,O.needsUpdate=!0,v.renderBufferDirect(V,F,W,O,y,rt),O.side=Xe):v.renderBufferDirect(V,F,W,O,y,rt),y.onAfterRender(v,F,V,W,O,rt)}function Oi(y,F,V){F.isScene!==!0&&(F=Yt);const W=Rt.get(y),O=d.state.lights,rt=d.state.shadowsArray,ut=O.state.version,Mt=yt.getParameters(y,O.state,rt,F,V),St=yt.getProgramCacheKey(Mt);let Nt=W.programs;W.environment=y.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(y.isMeshStandardMaterial?k:S).get(y.envMap||W.environment),W.envMapRotation=W.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,Nt===void 0&&(y.addEventListener("dispose",Ft),Nt=new Map,W.programs=Nt);let Ot=Nt.get(St);if(Ot!==void 0){if(W.currentProgram===Ot&&W.lightsStateVersion===ut)return co(y,Mt),Ot}else Mt.uniforms=yt.getUniforms(y),y.onBeforeCompile(Mt,v),Ot=yt.acquireProgram(Mt,St),Nt.set(St,Ot),W.uniforms=Mt.uniforms;const wt=W.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(wt.clippingPlanes=it.uniform),co(y,Mt),W.needsLights=Ya(y),W.lightsStateVersion=ut,W.needsLights&&(wt.ambientLightColor.value=O.state.ambient,wt.lightProbe.value=O.state.probe,wt.directionalLights.value=O.state.directional,wt.directionalLightShadows.value=O.state.directionalShadow,wt.spotLights.value=O.state.spot,wt.spotLightShadows.value=O.state.spotShadow,wt.rectAreaLights.value=O.state.rectArea,wt.ltc_1.value=O.state.rectAreaLTC1,wt.ltc_2.value=O.state.rectAreaLTC2,wt.pointLights.value=O.state.point,wt.pointLightShadows.value=O.state.pointShadow,wt.hemisphereLights.value=O.state.hemi,wt.directionalShadowMap.value=O.state.directionalShadowMap,wt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,wt.spotShadowMap.value=O.state.spotShadowMap,wt.spotLightMatrix.value=O.state.spotLightMatrix,wt.spotLightMap.value=O.state.spotLightMap,wt.pointShadowMap.value=O.state.pointShadowMap,wt.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Ot,W.uniformsList=null,Ot}function ao(y){if(y.uniformsList===null){const F=y.currentProgram.getUniforms();y.uniformsList=hs.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function co(y,F){const V=Rt.get(y);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Xa(y,F,V,W,O){F.isScene!==!0&&(F=Yt),b.resetTextureUnits();const rt=F.fog,ut=W.isMeshStandardMaterial?F.environment:null,Mt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:fi,St=(W.isMeshStandardMaterial?k:S).get(W.envMap||ut),Nt=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ot=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),wt=!!V.morphAttributes.position,jt=!!V.morphAttributes.normal,se=!!V.morphAttributes.color;let oe=yn;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(oe=v.toneMapping);const ye=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,$t=ye!==void 0?ye.length:0,Et=Rt.get(W),tn=d.state.lights;if(j===!0&&(nt===!0||y!==x)){const Fe=y===x&&W.id===M;it.setState(W,y,Fe)}let Jt=!1;W.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==tn.state.version||Et.outputColorSpace!==Mt||O.isBatchedMesh&&Et.batching===!1||!O.isBatchedMesh&&Et.batching===!0||O.isBatchedMesh&&Et.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Et.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Et.instancing===!1||!O.isInstancedMesh&&Et.instancing===!0||O.isSkinnedMesh&&Et.skinning===!1||!O.isSkinnedMesh&&Et.skinning===!0||O.isInstancedMesh&&Et.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Et.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Et.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Et.instancingMorph===!1&&O.morphTexture!==null||Et.envMap!==St||W.fog===!0&&Et.fog!==rt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==it.numPlanes||Et.numIntersection!==it.numIntersection)||Et.vertexAlphas!==Nt||Et.vertexTangents!==Ot||Et.morphTargets!==wt||Et.morphNormals!==jt||Et.morphColors!==se||Et.toneMapping!==oe||Et.morphTargetsCount!==$t)&&(Jt=!0):(Jt=!0,Et.__version=W.version);let ze=Et.currentProgram;Jt===!0&&(ze=Oi(W,F,O));let Hn=!1,Ce=!1,xi=!1;const ae=ze.getUniforms(),Ke=Et.uniforms;if(At.useProgram(ze.program)&&(Hn=!0,Ce=!0,xi=!0),W.id!==M&&(M=W.id,Ce=!0),Hn||x!==y){At.buffers.depth.getReversed()?(tt.copy(y.projectionMatrix),Fc(tt),Oc(tt),ae.setValue(B,"projectionMatrix",tt)):ae.setValue(B,"projectionMatrix",y.projectionMatrix),ae.setValue(B,"viewMatrix",y.matrixWorldInverse);const fn=ae.map.cameraPosition;fn!==void 0&&fn.setValue(B,Tt.setFromMatrixPosition(y.matrixWorld)),Ht.logarithmicDepthBuffer&&ae.setValue(B,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ae.setValue(B,"isOrthographic",y.isOrthographicCamera===!0),x!==y&&(x=y,Ce=!0,xi=!0)}if(O.isSkinnedMesh){ae.setOptional(B,O,"bindMatrix"),ae.setOptional(B,O,"bindMatrixInverse");const Fe=O.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),ae.setValue(B,"boneTexture",Fe.boneTexture,b))}O.isBatchedMesh&&(ae.setOptional(B,O,"batchingTexture"),ae.setValue(B,"batchingTexture",O._matricesTexture,b),ae.setOptional(B,O,"batchingIdTexture"),ae.setValue(B,"batchingIdTexture",O._indirectTexture,b),ae.setOptional(B,O,"batchingColorTexture"),O._colorsTexture!==null&&ae.setValue(B,"batchingColorTexture",O._colorsTexture,b));const vi=V.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&Dt.update(O,V,ze),(Ce||Et.receiveShadow!==O.receiveShadow)&&(Et.receiveShadow=O.receiveShadow,ae.setValue(B,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ke.envMap.value=St,Ke.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(Ke.envMapIntensity.value=F.environmentIntensity),Ce&&(ae.setValue(B,"toneMappingExposure",v.toneMappingExposure),Et.needsLights&&qa(Ke,xi),rt&&W.fog===!0&&ht.refreshFogUniforms(Ke,rt),ht.refreshMaterialUniforms(Ke,W,H,Y,d.state.transmissionRenderTarget[y.id]),hs.upload(B,ao(Et),Ke,b)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(hs.upload(B,ao(Et),Ke,b),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ae.setValue(B,"center",O.center),ae.setValue(B,"modelViewMatrix",O.modelViewMatrix),ae.setValue(B,"normalMatrix",O.normalMatrix),ae.setValue(B,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Fe=W.uniformsGroups;for(let fn=0,pn=Fe.length;fn<pn;fn++){const lo=Fe[fn];N.update(lo,ze),N.bind(lo,ze)}}return ze}function qa(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function Ya(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(y,F,V){Rt.get(y.texture).__webglTexture=F,Rt.get(y.depthTexture).__webglTexture=V;const W=Rt.get(y);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,F){const V=Rt.get(y);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(y,F=0,V=0){C=y,A=F,R=V;let W=!0,O=null,rt=!1,ut=!1;if(y){const St=Rt.get(y);if(St.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(B.FRAMEBUFFER,null),W=!1;else if(St.__webglFramebuffer===void 0)b.setupRenderTarget(y);else if(St.__hasExternalTextures)b.rebindTextures(y,Rt.get(y.texture).__webglTexture,Rt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const wt=y.depthTexture;if(St.__boundDepthTexture!==wt){if(wt!==null&&Rt.has(wt)&&(y.width!==wt.image.width||y.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(y)}}const Nt=y.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(ut=!0);const Ot=Rt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ot[F])?O=Ot[F][V]:O=Ot[F],rt=!0):y.samples>0&&b.useMultisampledRTT(y)===!1?O=Rt.get(y).__webglMultisampledFramebuffer:Array.isArray(Ot)?O=Ot[V]:O=Ot,T.copy(y.viewport),I.copy(y.scissor),U=y.scissorTest}else T.copy(vt).multiplyScalar(H).floor(),I.copy(It).multiplyScalar(H).floor(),U=qt;if(At.bindFramebuffer(B.FRAMEBUFFER,O)&&W&&At.drawBuffers(y,O),At.viewport(T),At.scissor(I),At.setScissorTest(U),rt){const St=Rt.get(y.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,St.__webglTexture,V)}else if(ut){const St=Rt.get(y.texture),Nt=F||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,St.__webglTexture,V||0,Nt)}M=-1},this.readRenderTargetPixels=function(y,F,V,W,O,rt,ut){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Rt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ut!==void 0&&(Mt=Mt[ut]),Mt){At.bindFramebuffer(B.FRAMEBUFFER,Mt);try{const St=y.texture,Nt=St.format,Ot=St.type;if(!Ht.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-W&&V>=0&&V<=y.height-O&&B.readPixels(F,V,W,O,Gt.convert(Nt),Gt.convert(Ot),rt)}finally{const St=C!==null?Rt.get(C).__webglFramebuffer:null;At.bindFramebuffer(B.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(y,F,V,W,O,rt,ut){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Rt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ut!==void 0&&(Mt=Mt[ut]),Mt){const St=y.texture,Nt=St.format,Ot=St.type;if(!Ht.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=y.width-W&&V>=0&&V<=y.height-O){At.bindFramebuffer(B.FRAMEBUFFER,Mt);const wt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,wt),B.bufferData(B.PIXEL_PACK_BUFFER,rt.byteLength,B.STREAM_READ),B.readPixels(F,V,W,O,Gt.convert(Nt),Gt.convert(Ot),0);const jt=C!==null?Rt.get(C).__webglFramebuffer:null;At.bindFramebuffer(B.FRAMEBUFFER,jt);const se=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Nc(B,se,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,wt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,rt),B.deleteBuffer(wt),B.deleteSync(se),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,F=null,V=0){y.isTexture!==!0&&(Ai("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,y=arguments[1]);const W=Math.pow(2,-V),O=Math.floor(y.image.width*W),rt=Math.floor(y.image.height*W),ut=F!==null?F.x:0,Mt=F!==null?F.y:0;b.setTexture2D(y,0),B.copyTexSubImage2D(B.TEXTURE_2D,V,0,0,ut,Mt,O,rt),At.unbindTexture()},this.copyTextureToTexture=function(y,F,V=null,W=null,O=0){y.isTexture!==!0&&(Ai("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,y=arguments[1],F=arguments[2],O=arguments[3]||0,V=null);let rt,ut,Mt,St,Nt,Ot,wt,jt,se;const oe=y.isCompressedTexture?y.mipmaps[O]:y.image;V!==null?(rt=V.max.x-V.min.x,ut=V.max.y-V.min.y,Mt=V.isBox3?V.max.z-V.min.z:1,St=V.min.x,Nt=V.min.y,Ot=V.isBox3?V.min.z:0):(rt=oe.width,ut=oe.height,Mt=oe.depth||1,St=0,Nt=0,Ot=0),W!==null?(wt=W.x,jt=W.y,se=W.z):(wt=0,jt=0,se=0);const ye=Gt.convert(F.format),$t=Gt.convert(F.type);let Et;F.isData3DTexture?(b.setTexture3D(F,0),Et=B.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(b.setTexture2DArray(F,0),Et=B.TEXTURE_2D_ARRAY):(b.setTexture2D(F,0),Et=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);const tn=B.getParameter(B.UNPACK_ROW_LENGTH),Jt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ze=B.getParameter(B.UNPACK_SKIP_PIXELS),Hn=B.getParameter(B.UNPACK_SKIP_ROWS),Ce=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,oe.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,oe.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,St),B.pixelStorei(B.UNPACK_SKIP_ROWS,Nt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ot);const xi=y.isDataArrayTexture||y.isData3DTexture,ae=F.isDataArrayTexture||F.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const Ke=Rt.get(y),vi=Rt.get(F),Fe=Rt.get(Ke.__renderTarget),fn=Rt.get(vi.__renderTarget);At.bindFramebuffer(B.READ_FRAMEBUFFER,Fe.__webglFramebuffer),At.bindFramebuffer(B.DRAW_FRAMEBUFFER,fn.__webglFramebuffer);for(let pn=0;pn<Mt;pn++)xi&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rt.get(y).__webglTexture,O,Ot+pn),y.isDepthTexture?(ae&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rt.get(F).__webglTexture,O,se+pn),B.blitFramebuffer(St,Nt,rt,ut,wt,jt,rt,ut,B.DEPTH_BUFFER_BIT,B.NEAREST)):ae?B.copyTexSubImage3D(Et,O,wt,jt,se+pn,St,Nt,rt,ut):B.copyTexSubImage2D(Et,O,wt,jt,se+pn,St,Nt,rt,ut);At.bindFramebuffer(B.READ_FRAMEBUFFER,null),At.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ae?y.isDataTexture||y.isData3DTexture?B.texSubImage3D(Et,O,wt,jt,se,rt,ut,Mt,ye,$t,oe.data):F.isCompressedArrayTexture?B.compressedTexSubImage3D(Et,O,wt,jt,se,rt,ut,Mt,ye,oe.data):B.texSubImage3D(Et,O,wt,jt,se,rt,ut,Mt,ye,$t,oe):y.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,O,wt,jt,rt,ut,ye,$t,oe.data):y.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,O,wt,jt,oe.width,oe.height,ye,oe.data):B.texSubImage2D(B.TEXTURE_2D,O,wt,jt,rt,ut,ye,$t,oe);B.pixelStorei(B.UNPACK_ROW_LENGTH,tn),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Jt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ze),B.pixelStorei(B.UNPACK_SKIP_ROWS,Hn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ce),O===0&&F.generateMipmaps&&B.generateMipmap(Et),At.unbindTexture()},this.copyTextureToTexture3D=function(y,F,V=null,W=null,O=0){return y.isTexture!==!0&&(Ai("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,y=arguments[2],F=arguments[3],O=arguments[4]||0),Ai('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,F,V,W,O)},this.initRenderTarget=function(y){Rt.get(y).__webglFramebuffer===void 0&&b.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?b.setTextureCube(y,0):y.isData3DTexture?b.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?b.setTexture2DArray(y,0):b.setTexture2D(y,0),At.unbindTexture()},this.resetState=function(){A=0,R=0,C=null,At.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}}class Jr{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Lt(t),this.near=e,this.far=n}clone(){return new Jr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Kf extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ze,this.environmentIntensity=1,this.environmentRotation=new Ze,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class jf extends Se{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _i extends Ne{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new L,h=new kt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const m=n+f/e*s;l.x=t*Math.cos(m),l.y=t*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,c.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(o,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _i(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class at extends Ne{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],u=[],m=[];let g=0;const _=[],p=n/2;let d=0;w(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new re(f,3)),this.setAttribute("normal",new re(u,3)),this.setAttribute("uv",new re(m,2));function w(){const v=new L,D=new L;let A=0;const R=(e-t)/n;for(let C=0;C<=r;C++){const M=[],x=C/r,T=x*(e-t)+t;for(let I=0;I<=s;I++){const U=I/s,G=U*c+o,X=Math.sin(G),z=Math.cos(G);D.x=T*X,D.y=-x*n+p,D.z=T*z,f.push(D.x,D.y,D.z),v.set(X,R,z).normalize(),u.push(v.x,v.y,v.z),m.push(U,1-x),M.push(g++)}_.push(M)}for(let C=0;C<s;C++)for(let M=0;M<r;M++){const x=_[M][C],T=_[M+1][C],I=_[M+1][C+1],U=_[M][C+1];(t>0||M!==0)&&(h.push(x,T,U),A+=3),(e>0||M!==r-1)&&(h.push(T,I,U),A+=3)}l.addGroup(d,A,0),d+=A}function E(v){const D=g,A=new kt,R=new L;let C=0;const M=v===!0?t:e,x=v===!0?1:-1;for(let I=1;I<=s;I++)f.push(0,p*x,0),u.push(0,x,0),m.push(.5,.5),g++;const T=g;for(let I=0;I<=s;I++){const G=I/s*c+o,X=Math.cos(G),z=Math.sin(G);R.x=M*z,R.y=p*x,R.z=M*X,f.push(R.x,R.y,R.z),u.push(0,x,0),A.x=X*.5+.5,A.y=z*.5*x+.5,m.push(A.x,A.y),g++}for(let I=0;I<s;I++){const U=D+I,G=T+I;v===!0?h.push(G,G+1,U):h.push(G+1,G,U),C+=3}l.addGroup(d,C,v===!0?1:2),d+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new at(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class be extends at{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new be(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ui extends Ne{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(w){const E=new L,v=new L,D=new L;for(let A=0;A<e.length;A+=3)m(e[A+0],E),m(e[A+1],v),m(e[A+2],D),c(E,v,D,w)}function c(w,E,v,D){const A=D+1,R=[];for(let C=0;C<=A;C++){R[C]=[];const M=w.clone().lerp(v,C/A),x=E.clone().lerp(v,C/A),T=A-C;for(let I=0;I<=T;I++)I===0&&C===A?R[C][I]=M:R[C][I]=M.clone().lerp(x,I/T)}for(let C=0;C<A;C++)for(let M=0;M<2*(A-C)-1;M++){const x=Math.floor(M/2);M%2===0?(u(R[C][x+1]),u(R[C+1][x]),u(R[C][x])):(u(R[C][x+1]),u(R[C+1][x+1]),u(R[C+1][x]))}}function l(w){const E=new L;for(let v=0;v<r.length;v+=3)E.x=r[v+0],E.y=r[v+1],E.z=r[v+2],E.normalize().multiplyScalar(w),r[v+0]=E.x,r[v+1]=E.y,r[v+2]=E.z}function h(){const w=new L;for(let E=0;E<r.length;E+=3){w.x=r[E+0],w.y=r[E+1],w.z=r[E+2];const v=p(w)/2/Math.PI+.5,D=d(w)/Math.PI+.5;a.push(v,1-D)}g(),f()}function f(){for(let w=0;w<a.length;w+=6){const E=a[w+0],v=a[w+2],D=a[w+4],A=Math.max(E,v,D),R=Math.min(E,v,D);A>.9&&R<.1&&(E<.2&&(a[w+0]+=1),v<.2&&(a[w+2]+=1),D<.2&&(a[w+4]+=1))}}function u(w){r.push(w.x,w.y,w.z)}function m(w,E){const v=w*3;E.x=t[v+0],E.y=t[v+1],E.z=t[v+2]}function g(){const w=new L,E=new L,v=new L,D=new L,A=new kt,R=new kt,C=new kt;for(let M=0,x=0;M<r.length;M+=9,x+=6){w.set(r[M+0],r[M+1],r[M+2]),E.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),A.set(a[x+0],a[x+1]),R.set(a[x+2],a[x+3]),C.set(a[x+4],a[x+5]),D.copy(w).add(E).add(v).divideScalar(3);const T=p(D);_(A,x+0,w,T),_(R,x+2,E,T),_(C,x+4,v,T)}}function _(w,E,v,D){D<0&&w.x===1&&(a[E]=w.x-1),v.x===0&&v.z===0&&(a[E]=D/2/Math.PI+.5)}function p(w){return Math.atan2(w.z,-w.x)}function d(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.vertices,t.indices,t.radius,t.details)}}class We extends Ui{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new We(t.radius,t.detail)}}class Qr extends Ui{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Qr(t.radius,t.detail)}}class ps extends Ui{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ps(t.radius,t.detail)}}class to extends Ne{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],h=[];let f=t;const u=(e-t)/s,m=new L,g=new kt;for(let _=0;_<=s;_++){for(let p=0;p<=n;p++){const d=r+p/n*a;m.x=f*Math.cos(d),m.y=f*Math.sin(d),c.push(m.x,m.y,m.z),l.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,h.push(g.x,g.y)}f+=u}for(let _=0;_<s;_++){const p=_*(n+1);for(let d=0;d<n;d++){const w=d+p,E=w,v=w+n+1,D=w+n+2,A=w+1;o.push(E,v,A),o.push(v,D,A)}}this.setIndex(o),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new to(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class De extends Ne{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],f=new L,u=new L,m=[],g=[],_=[],p=[];for(let d=0;d<=n;d++){const w=[],E=d/n;let v=0;d===0&&a===0?v=.5/e:d===n&&c===Math.PI&&(v=-.5/e);for(let D=0;D<=e;D++){const A=D/e;f.x=-t*Math.cos(s+A*r)*Math.sin(a+E*o),f.y=t*Math.cos(a+E*o),f.z=t*Math.sin(s+A*r)*Math.sin(a+E*o),g.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),p.push(A+v,1-E),w.push(l++)}h.push(w)}for(let d=0;d<n;d++)for(let w=0;w<e;w++){const E=h[d][w+1],v=h[d][w],D=h[d+1][w],A=h[d+1][w+1];(d!==0||a>0)&&m.push(E,v,A),(d!==n-1||c<Math.PI)&&m.push(v,D,A)}this.setIndex(m),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new De(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class xs extends Ne{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new L,f=new L,u=new L;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){const _=g/s*r,p=m/n*Math.PI*2;f.x=(t+e*Math.cos(p))*Math.cos(_),f.y=(t+e*Math.cos(p))*Math.sin(_),f.z=e*Math.sin(p),o.push(f.x,f.y,f.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(f,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/s),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){const _=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,d=(s+1)*(m-1)+g,w=(s+1)*m+g;a.push(_,p,w),a.push(p,d,w)}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ie extends mi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zr,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class st extends mi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zr,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.combine=kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ni extends de{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class $f extends Ni{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const js=new le,la=new L,ha=new L;class eo{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jr,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;la.setFromMatrixPosition(t.matrixWorld),e.position.copy(la),ha.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ha),e.updateMatrixWorld(),js.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(js),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(js)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Jf extends eo{constructor(){super(new Re(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=us*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Gr extends Ni{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Jf}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const da=new le,Ti=new L,$s=new L;class Qf extends eo{constructor(){super(new Re(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new kt(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ti.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ti),$s.copy(n.position),$s.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt($s),n.updateMatrixWorld(),s.makeTranslation(-Ti.x,-Ti.y,-Ti.z),da.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(da)}}class Te extends Ni{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Qf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class tp extends eo{constructor(){super(new Ga(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ep extends Ni{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.shadow=new tp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class np extends Ni{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class ip{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ua(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ua();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ua(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zr);const Un={GOLDEN_HOUR:{id:"GOLDEN_HOUR",name:"GOLDEN HOUR",shortName:"GOLDEN",vibe:"Warm Honey Horizon & Bright Cobalt Zenith",topColor:1717611,midColor:8079992,horizonColor:16755246,bottomColor:1911879,fogColor:2570329,fogNear:65,fogFar:360,ambientColor:11452650,ambientIntensity:1.45,hemiSky:16769700,hemiGround:3030100,hemiIntensity:1.05,sunColor:16765054,sunIntensity:2.35,sunDiscColor:16773290,haloColor:16754738},CRIMSON_DUSK:{id:"CRIMSON_DUSK",name:"CRIMSON DUSK",shortName:"CRIMSON",vibe:"Fiery Coral Horizon & Violet Twilight",topColor:3022415,midColor:12729184,horizonColor:16743474,bottomColor:3152437,fogColor:4007749,fogNear:65,fogFar:350,ambientColor:13213380,ambientIntensity:1.4,hemiSky:16755589,hemiGround:3810104,hemiIntensity:1,sunColor:16747594,sunIntensity:2.3,sunDiscColor:16768414,haloColor:16728128},TROPICAL_MANGO:{id:"TROPICAL_MANGO",name:"TROPICAL MANGO",shortName:"TROPICAL",vibe:"Warm Mango Glow & Turquoise Lagoon",topColor:1525857,midColor:3837061,horizonColor:16758852,bottomColor:1389893,fogColor:1984084,fogNear:70,fogFar:370,ambientColor:9621462,ambientIntensity:1.45,hemiSky:16768404,hemiGround:1851724,hemiIntensity:1.1,sunColor:16766064,sunIntensity:2.4,sunDiscColor:16775848,haloColor:5234882},PASTEL_PEACH:{id:"PASTEL_PEACH",name:"PASTEL PEACH",shortName:"PEACH",vibe:"Dreamy Lilac & Pastel Peach (Liquid DnB)",topColor:2630482,midColor:9073832,horizonColor:16755084,bottomColor:3089477,fogColor:3945561,fogNear:65,fogFar:350,ambientColor:12891355,ambientIntensity:1.4,hemiSky:16764858,hemiGround:3681612,hemiIntensity:1.05,sunColor:16764334,sunIntensity:2.2,sunDiscColor:16773343,haloColor:16092840},AFTERNOON_GOLD:{id:"AFTERNOON_GOLD",name:"AFTERNOON GOLD",shortName:"AFTERNOON",vibe:"Crisp High Sun & Maximum Island Visibility",topColor:3302558,midColor:7120333,horizonColor:16766837,bottomColor:2508390,fogColor:4221583,fogNear:75,fogFar:400,ambientColor:12902133,ambientIntensity:1.6,hemiSky:16774088,hemiGround:3493995,hemiIntensity:1.25,sunColor:16770713,sunIntensity:2.6,sunDiscColor:16775910,haloColor:16767088}},Js=Object.keys(Un);class sp{constructor(t){this.container=t,this.currentThemeKey="GOLDEN_HOUR",this.scene=new Kf;const e=Un[this.currentThemeKey];this.scene.background=new Lt(e.fogColor),this.scene.fog=new Jr(e.fogColor,e.fogNear,e.fogFar);const n=window.innerWidth/window.innerHeight;this.camera=new Re(62,n,.1,500),this.camera.position.set(0,5,12),this.retroPixelMode=!0,this.renderer=new Zf({antialias:!1,powerPreference:"high-performance"}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=pa,this.renderer.toneMapping=ma,this.renderer.toneMappingExposure=1.34,this.container.appendChild(this.renderer.domElement),this._applyResolution(),this._setupLighting(),this._setupSkyGradient(),this._setupSunDisc(),this.applySkyTheme(this.currentThemeKey),window.addEventListener("resize",()=>this.onWindowResize())}_setupLighting(){const t=Un[this.currentThemeKey];this.ambientLight=new np(t.ambientColor,t.ambientIntensity),this.scene.add(this.ambientLight),this.hemiLight=new $f(t.hemiSky,t.hemiGround,t.hemiIntensity),this.hemiLight.position.set(0,50,0),this.scene.add(this.hemiLight),this.sunLight=new ep(t.sunColor,t.sunIntensity),this.sunLight.position.set(-65,30,-170),this.sunLight.target.position.set(0,0,0),this.scene.add(this.sunLight.target),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=2048,this.sunLight.shadow.mapSize.height=2048,this.sunLight.shadow.camera.near=.5,this.sunLight.shadow.camera.far=280;const e=55;this.sunLight.shadow.camera.left=-e,this.sunLight.shadow.camera.right=e,this.sunLight.shadow.camera.top=e,this.sunLight.shadow.camera.bottom=-e,this.sunLight.shadow.bias=-5e-4,this.scene.add(this.sunLight)}_setupSkyGradient(){const t=Un[this.currentThemeKey],e=new De(250,24,16);this.skyMat=new un({side:Me,uniforms:{topColor:{value:new Lt(t.topColor)},midColor:{value:new Lt(t.midColor)},horizonColor:{value:new Lt(t.horizonColor)},bottomColor:{value:new Lt(t.bottomColor)},offset:{value:16}},vertexShader:`
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 topColor;
        uniform vec3 midColor;
        uniform vec3 horizonColor;
        uniform vec3 bottomColor;
        uniform float offset;
        varying vec3 vWorldPosition;

        void main() {
          float h = normalize(vWorldPosition + vec3(0.0, offset, 0.0)).y;
          if (h >= 0.0) {
            // Rich 3-stop atmospheric transition:
            // Warm horizon -> Dusky twilight belt -> Deep zenith
            float tMid = smoothstep(0.0, 0.28, h);
            float tTop = smoothstep(0.18, 0.85, h);
            vec3 c = mix(horizonColor, midColor, tMid);
            c = mix(c, topColor, tTop);
            gl_FragColor = vec4(c, 1.0);
          } else {
            float b = clamp(-h * 2.5, 0.0, 1.0);
            gl_FragColor = vec4(mix(horizonColor, bottomColor, b), 1.0);
          }
        }
      `}),this.skyMesh=new P(e,this.skyMat),this.scene.add(this.skyMesh)}_setupSunDisc(){const t=Un[this.currentThemeKey];this.sunGroup=new Ct;const e=new _i(15,24);this.sunDiscMat=new Ut({color:t.sunDiscColor,side:Xe,depthWrite:!1});const n=new P(e,this.sunDiscMat);this.sunGroup.add(n);const s=new to(15,25,24);this.sunHaloMat=new Ut({color:t.haloColor,side:Xe,transparent:!0,opacity:.45,depthWrite:!1});const r=new P(s,this.sunHaloMat);this.sunGroup.add(r),this.sunGroup.position.set(-65,16,-180),this.sunGroup.lookAt(0,16,0),this.scene.add(this.sunGroup)}applySkyTheme(t){const e=Un[t]||Un.GOLDEN_HOUR;return this.currentThemeKey=e.id,this.skyMat&&this.skyMat.uniforms&&(this.skyMat.uniforms.topColor.value.setHex(e.topColor),this.skyMat.uniforms.midColor.value.setHex(e.midColor),this.skyMat.uniforms.horizonColor.value.setHex(e.horizonColor),this.skyMat.uniforms.bottomColor.value.setHex(e.bottomColor)),this.scene.fog&&(this.scene.fog.color.setHex(e.fogColor),this.scene.fog.near=e.fogNear,this.scene.fog.far=e.fogFar),this.scene.background.setHex(e.fogColor),this.ambientLight&&(this.ambientLight.color.setHex(e.ambientColor),this.ambientLight.intensity=e.ambientIntensity),this.hemiLight&&(this.hemiLight.color.setHex(e.hemiSky),this.hemiLight.groundColor.setHex(e.hemiGround),this.hemiLight.intensity=e.hemiIntensity),this.sunLight&&(this.sunLight.color.setHex(e.sunColor),this.sunLight.intensity=e.sunIntensity),this.sunDiscMat&&this.sunDiscMat.color.setHex(e.sunDiscColor),this.sunHaloMat&&this.sunHaloMat.color.setHex(e.haloColor),e}cycleSkyTheme(){const e=(Js.indexOf(this.currentThemeKey)+1)%Js.length;return this.applySkyTheme(Js[e])}_applyResolution(){if(this.retroPixelMode){const e=Math.round(window.innerWidth/2.2),n=Math.round(window.innerHeight/2.2);this.renderer.setSize(e,n,!1),this.renderer.domElement.style.imageRendering="pixelated",this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%"}else this.renderer.setSize(window.innerWidth,window.innerHeight,!0),this.renderer.domElement.style.imageRendering="auto",this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%"}toggleRetroPixelMode(){return this.retroPixelMode=!this.retroPixelMode,this._applyResolution(),this.retroPixelMode}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this._applyResolution()}render(){this.renderer.render(this.scene,this.camera)}}class rp{constructor(t){this.domElement=t||document.body,this.keys={},this.mouse={isDragging:!1,isPointerLocked:!1,deltaX:0,deltaY:0,prevX:0,prevY:0,pitch:.08,yaw:0},this.arrowControlsCamera=!0,this.keyLookSpeed=2.4,this.trackpadLookSpeed=.0035,this.onCameraToggle=null,this.onInteract=null,this.onArrowModeToggle=null,this.onPointerLockChange=null,this.lastShiftPressTime=0,this.isDoubleTapZoom=!1,this.sprintHoldDuration=0,this._bindEvents()}setArrowMode(t){this.arrowControlsCamera=t,this.onArrowModeToggle&&this.onArrowModeToggle(this.arrowControlsCamera)}toggleArrowMode(){return this.setArrowMode(!this.arrowControlsCamera),this.arrowControlsCamera}requestPointerLock(){try{this.domElement.requestPointerLock()}catch(t){console.warn("Pointer lock error:",t)}}exitPointerLock(){document.exitPointerLock&&document.exitPointerLock()}_bindEvents(){window.addEventListener("keydown",t=>{if(this.keys[t.code]=!0,["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)&&t.preventDefault(),(t.code==="ShiftLeft"||t.code==="ShiftRight")&&!t.repeat){const e=performance.now();e-this.lastShiftPressTime<380&&(this.isDoubleTapZoom=!0),this.lastShiftPressTime=e}t.code==="KeyV"&&!t.repeat&&this.onCameraToggle&&this.onCameraToggle(),t.code==="KeyT"&&!t.repeat&&this.onSkyToggle&&this.onSkyToggle(),t.code==="KeyE"&&!t.repeat&&this.onInteract&&this.onInteract()}),window.addEventListener("keyup",t=>{this.keys[t.code]=!1,(t.code==="ShiftLeft"||t.code==="ShiftRight")&&!this.keys.ShiftLeft&&!this.keys.ShiftRight&&(this.isDoubleTapZoom=!1,this.sprintHoldDuration=0)}),window.addEventListener("wheel",t=>{if(t.target.closest("#walkman")||t.target.closest("input"))return;t.preventDefault();const e=Math.PI/3.4,n=-Math.PI/3.2;this.mouse.yaw-=t.deltaX*this.trackpadLookSpeed,this.mouse.pitch-=t.deltaY*this.trackpadLookSpeed,this.mouse.pitch=Math.max(n,Math.min(e,this.mouse.pitch))},{passive:!1}),document.addEventListener("pointerlockchange",()=>{this.mouse.isPointerLocked=document.pointerLockElement===this.domElement,this.onPointerLockChange&&this.onPointerLockChange(this.mouse.isPointerLocked)}),this.domElement.addEventListener("mousedown",t=>{t.target.closest("#walkman")||t.target.closest("button")||t.target.closest("input")||(this.mouse.isDragging=!0,this.mouse.prevX=t.clientX,this.mouse.prevY=t.clientY)}),window.addEventListener("mouseup",()=>{this.mouse.isDragging=!1}),window.addEventListener("mousemove",t=>{const e=Math.PI/3.4,n=-Math.PI/3.2;if(this.mouse.isPointerLocked){this.mouse.yaw-=(t.movementX||0)*.0028,this.mouse.pitch-=(t.movementY||0)*.0028,this.mouse.pitch=Math.max(n,Math.min(e,this.mouse.pitch));return}if(!this.mouse.isDragging)return;const s=t.clientX-this.mouse.prevX,r=t.clientY-this.mouse.prevY;this.mouse.prevX=t.clientX,this.mouse.prevY=t.clientY;const a=.004;this.mouse.yaw-=s*a,this.mouse.pitch-=r*a,this.mouse.pitch=Math.max(n,Math.min(e,this.mouse.pitch))}),this.domElement.addEventListener("touchstart",t=>{if(t.touches.length===1){const e=t.touches[0];if(e.target.closest("#walkman")||e.target.closest("button"))return;this.mouse.isDragging=!0,this.mouse.prevX=e.clientX,this.mouse.prevY=e.clientY}},{passive:!0}),window.addEventListener("touchmove",t=>{if(!this.mouse.isDragging||t.touches.length!==1)return;const e=t.touches[0],n=e.clientX-this.mouse.prevX,s=e.clientY-this.mouse.prevY;this.mouse.prevX=e.clientX,this.mouse.prevY=e.clientY;const r=.005;this.mouse.yaw-=n*r,this.mouse.pitch-=s*r,this.mouse.pitch=Math.max(-Math.PI/3.2,Math.min(Math.PI/3.4,this.mouse.pitch))},{passive:!0}),window.addEventListener("touchend",()=>{this.mouse.isDragging=!1})}update(t){if(this.isSprint()?this.sprintHoldDuration+=t:(this.sprintHoldDuration=0,this.isDoubleTapZoom=!1),this.arrowControlsCamera){const e=Math.PI/3.4,n=-Math.PI/3.2;this.keys.ArrowLeft&&(this.mouse.yaw+=this.keyLookSpeed*t),this.keys.ArrowRight&&(this.mouse.yaw-=this.keyLookSpeed*t),this.keys.ArrowUp&&(this.mouse.pitch=Math.min(e,this.mouse.pitch+this.keyLookSpeed*t)),this.keys.ArrowDown&&(this.mouse.pitch=Math.max(n,this.mouse.pitch-this.keyLookSpeed*t))}}isForward(){return!!(this.keys.KeyW||!this.arrowControlsCamera&&this.keys.ArrowUp)}isBackward(){return!!(this.keys.KeyS||!this.arrowControlsCamera&&this.keys.ArrowDown)}isLeft(){return!!(this.keys.KeyA||!this.arrowControlsCamera&&this.keys.ArrowLeft)}isRight(){return!!(this.keys.KeyD||!this.arrowControlsCamera&&this.keys.ArrowRight)}isSprint(){return!!(this.keys.ShiftLeft||this.keys.ShiftRight)}isZoom(){return this.isSprint()?!!(this.keys.AltLeft||this.keys.AltRight||this.keys.ControlLeft||this.keys.ControlRight||this.keys.KeyZ||this.isDoubleTapZoom||this.sprintHoldDuration>1.1):!1}isJump(){return!!this.keys.Space}}class op{constructor(){this.ctx=null,this.isPlaying=!1,this.bpm=164,this.masterGain=null,this.visualizerData=new Uint8Array(16),this.analyser=null,this.tracks=[{title:"ATLANTIC BREEZE (LIQUID MIX)",artist:"LOW-POLY SOUNDSYSTEM",bpm:164,key:"F#m9",chords:[[277.18,369.99,440,554.37],[293.66,369.99,440,587.33],[246.94,329.63,392,493.88],[220,329.63,440,554.37]]},{title:"TWILIGHT OVER THE REEF",artist:"ORBITAL RUNNER",bpm:162,key:"Ebm7",chords:[[311.13,369.99,466.16,554.37],[261.63,329.63,392,523.25],[233.08,349.23,440,523.25],[293.66,369.99,440,587.33]]},{title:"DREAMCAST MEMORY (1998)",artist:"VIRTUAL HORIZON",bpm:166,key:"C#m7",chords:[[277.18,329.63,415.3,493.88],[220,277.18,329.63,440],[246.94,311.13,369.99,493.88],[329.63,415.3,493.88,659.25]]}],this.currentTrackIndex=0,this.currentChordIndex=0,this.step=0,this.timerId=null,this.oceanNode=null}_initContext(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.75,this.ctx.currentTime),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=32,this.masterGain.connect(this.analyser),this.analyser.connect(this.ctx.destination),this._startOceanWash()}getCurrentTrack(){return this.tracks[this.currentTrackIndex]}setVolume(t){this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(Math.max(0,Math.min(1,t)),this.ctx.currentTime)}togglePlay(){return this._initContext(),this.ctx.state==="suspended"&&this.ctx.resume(),this.isPlaying?this.stop():this.play(),this.isPlaying}play(){this._initContext(),this.ctx.state==="suspended"&&this.ctx.resume(),this.isPlaying=!0,this.step=0,this.currentChordIndex=0;const t=60/this.bpm/4*1e3;this._playPadChord(),this.timerId=setInterval(()=>{this._onTick()},t)}stop(){this.isPlaying=!1,this.timerId&&(clearInterval(this.timerId),this.timerId=null)}nextTrack(){return this.currentTrackIndex=(this.currentTrackIndex+1)%this.tracks.length,this.currentChordIndex=0,this.isPlaying&&(this.stop(),this.play()),this.getCurrentTrack()}prevTrack(){return this.currentTrackIndex=(this.currentTrackIndex-1+this.tracks.length)%this.tracks.length,this.currentChordIndex=0,this.isPlaying&&(this.stop(),this.play()),this.getCurrentTrack()}_onTick(){if(!this.ctx||!this.isPlaying)return;const t=this.ctx.currentTime,e=this.step%16;(e===0||e===10)&&this._triggerKick(t,e===0?1:.7),e===4||e===12?this._triggerSnare(t,.85):(e===7||e===15)&&this._triggerSnare(t,.4,!0);let n=.22;if(e%2===0&&(n=.45),e%4===2&&(n=.6),this._triggerHat(t,n),e===0||e===6||e===10){const r=this.tracks[this.currentTrackIndex].chords[this.currentChordIndex][0]/4;this._triggerSubBass(t,r)}if(this.step++,this.step%32===0){const s=this.tracks[this.currentTrackIndex];this.currentChordIndex=(this.currentChordIndex+1)%s.chords.length,this._playPadChord()}}_triggerKick(t,e){const n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(140,t),n.frequency.exponentialRampToValueAtTime(45,t+.12),s.gain.setValueAtTime(.7*e,t),s.gain.exponentialRampToValueAtTime(.001,t+.25),n.connect(s),s.connect(this.masterGain),n.start(t),n.stop(t+.26)}_triggerSnare(t,e,n=!1){const s=this.ctx.sampleRate*(n?.08:.16),r=this.ctx.createBuffer(1,s,this.ctx.sampleRate),a=r.getChannelData(0);for(let h=0;h<s;h++)a[h]=(Math.random()*2-1)*Math.exp(-h/(s*.35));const o=this.ctx.createBufferSource();o.buffer=r;const c=this.ctx.createBiquadFilter();c.type="highpass",c.frequency.setValueAtTime(n?1400:900,t);const l=this.ctx.createGain();l.gain.setValueAtTime((n?.2:.5)*e,t),l.gain.exponentialRampToValueAtTime(.001,t+(n?.09:.18)),o.connect(c),c.connect(l),l.connect(this.masterGain),o.start(t)}_triggerHat(t,e){const n=this.ctx.createOscillator();n.type="highpass";const s=this.ctx.createBiquadFilter();s.type="highpass",s.frequency.value=7500;const r=this.ctx.sampleRate*.04,a=this.ctx.createBuffer(1,r,this.ctx.sampleRate),o=a.getChannelData(0);for(let h=0;h<r;h++)o[h]=Math.random()*2-1;const c=this.ctx.createBufferSource();c.buffer=a;const l=this.ctx.createGain();l.gain.setValueAtTime(.2*e,t),l.gain.exponentialRampToValueAtTime(.001,t+.04),c.connect(s),s.connect(l),l.connect(this.masterGain),c.start(t)}_triggerSubBass(t,e){const n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(e,t),s.gain.setValueAtTime(.45,t),s.gain.linearRampToValueAtTime(.35,t+.2),s.gain.exponentialRampToValueAtTime(.001,t+.5),n.connect(s),s.connect(this.masterGain),n.start(t),n.stop(t+.52)}_playPadChord(){if(!this.ctx||!this.isPlaying)return;const e=this.tracks[this.currentTrackIndex].chords[this.currentChordIndex],n=60/this.bpm*8,s=this.ctx.currentTime;e.forEach((r,a)=>{const o=this.ctx.createOscillator(),c=this.ctx.createOscillator(),l=this.ctx.createGain(),h=this.ctx.createBiquadFilter();o.type="sawtooth",c.type="sawtooth",o.frequency.setValueAtTime(r,s),c.frequency.setValueAtTime(r*1.004,s),h.type="lowpass",h.frequency.setValueAtTime(800+a*250,s),h.frequency.exponentialRampToValueAtTime(1600,s+n*.5),h.frequency.exponentialRampToValueAtTime(700,s+n),l.gain.setValueAtTime(.001,s),l.gain.linearRampToValueAtTime(.09,s+1.2),l.gain.setValueAtTime(.09,s+n-.8),l.gain.exponentialRampToValueAtTime(.001,s+n),o.connect(h),c.connect(h),h.connect(l),l.connect(this.masterGain),o.start(s),c.start(s),o.stop(s+n+.1),c.stop(s+n+.1)})}_startOceanWash(){if(!this.ctx)return;const t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0);for(let l=0;l<t;l++)n[l]=Math.random()*2-1;const s=this.ctx.createBufferSource();s.buffer=e,s.loop=!0;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(350,this.ctx.currentTime);const a=this.ctx.createOscillator();a.frequency.setValueAtTime(.12,this.ctx.currentTime);const o=this.ctx.createGain();o.gain.setValueAtTime(220,this.ctx.currentTime),a.connect(o),o.connect(r.frequency);const c=this.ctx.createGain();c.gain.setValueAtTime(.18,this.ctx.currentTime),s.connect(r),r.connect(c),c.connect(this.masterGain),s.start(),a.start()}getVisualizerData(){return this.analyser&&this.analyser.getByteFrequencyData(this.visualizerData),this.visualizerData}}class ap{constructor(t){this.scene=t,this.position=new L(0,2.38,-10),this.velocity=new L,this.rotation=Math.PI,this.walkSpeed=7,this.runSpeed=13.5,this.zoomSpeed=24,this.moveState="WALK",this.isDrivingQuad=!1,this.jumpForce=9.5,this.gravity=25,this.isGrounded=!0,this.animTime=0,this.isMoving=!1,this.dustParticles=[];const e=new We(.12,0);for(let n=0;n<8;n++){const s=new P(e,new Ut({color:12890772,transparent:!0,opacity:.6}));s.visible=!1,this.scene.add(s),this.dustParticles.push({mesh:s,life:0,maxLife:.35})}this.dustTimer=0,this.mesh=new Ct,this._buildFacetedPS1Model(),this.mesh.position.copy(this.position),this.mesh.rotation.y=this.rotation,this.scene.add(this.mesh),this.radius=.5,this.height=1.8}_createPixelTexture(t){const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d");t==="jacket"?(n.fillStyle="#eb3467",n.fillRect(0,0,64,64),n.fillStyle="#2de2e6",n.beginPath(),n.moveTo(0,16),n.lineTo(64,40),n.lineTo(64,48),n.lineTo(0,24),n.fill(),n.fillStyle="#16192b",n.fillRect(0,54,64,10),n.fillStyle="#ffffff",n.fillRect(30,0,4,54),n.fillStyle="#888888",n.fillRect(31,0,2,54)):t==="pants"?(n.fillStyle="#1b2238",n.fillRect(0,0,64,64),n.fillStyle="#121726",n.fillRect(0,0,4,64),n.fillRect(60,0,4,64),n.fillRect(16,24,32,16),n.fillStyle="#263152",n.fillRect(18,26,28,12)):t==="sneaker"&&(n.fillStyle="#e8ecf2",n.fillRect(0,0,64,64),n.fillStyle="#222633",n.fillRect(0,50,64,14),n.fillStyle="#ff2a7a",n.fillRect(8,24,48,8));const s=new jf(e);return s.magFilter=Ue,s.minFilter=Ue,s}_buildFacetedPS1Model(){const t=new st({color:14724482,flatShading:!0}),e=this._createPixelTexture("jacket"),n=new st({map:e,flatShading:!0}),s=this._createPixelTexture("pants"),r=new st({map:s,flatShading:!0}),a=this._createPixelTexture("sneaker"),o=new st({map:a,flatShading:!0}),c=new st({color:1448489,flatShading:!0}),l=new Ut({color:3007206}),h=new at(.32,.22,.72,6);this.torso=new P(h,n),this.torso.position.y=1.15,this.torso.castShadow=!0,this.mesh.add(this.torso);const f=new at(.18,.24,.14,6),u=new P(f,c);u.position.y=.4,this.torso.add(u);const m=new P(new at(.1,.12,.18,5),t);m.position.y=1.55,this.mesh.add(m);const g=new at(.2,.18,.32,7);this.head=new P(g,t),this.head.position.y=1.74,this.head.castShadow=!0,this.mesh.add(this.head);const _=new at(.22,.22,.14,7),p=new P(_,c);p.position.y=.12,this.head.add(p);const d=new Q(.26,.04,.18),w=new P(d,c);w.position.set(0,.08,-.18),w.rotation.x=.2,this.head.add(w);const E=new Q(.28,.08,.06),v=new P(E,l);v.position.set(0,.04,.17),this.head.add(v);const D=new xs(.22,.04,5,10,Math.PI),A=new P(D,c);A.rotation.x=Math.PI/2,A.position.set(0,1.54,0),this.mesh.add(A),this.leftArmPivot=new Ct,this.leftArmPivot.position.set(-.36,1.42,0);const R=new P(new at(.11,.09,.35,5),n);R.position.y=-.17,R.castShadow=!0,this.leftArmPivot.add(R);const C=new P(new at(.09,.07,.35,5),t);C.position.y=-.48,C.castShadow=!0,this.leftArmPivot.add(C),this.mesh.add(this.leftArmPivot),this.rightArmPivot=new Ct,this.rightArmPivot.position.set(.36,1.42,0);const M=new P(new at(.11,.09,.35,5),n);M.position.y=-.17,M.castShadow=!0,this.rightArmPivot.add(M);const x=new P(new at(.09,.07,.35,5),t);x.position.y=-.48,x.castShadow=!0,this.rightArmPivot.add(x),this.mesh.add(this.rightArmPivot),this.leftLegPivot=new Ct,this.leftLegPivot.position.set(-.16,.82,0);const T=new P(new at(.14,.11,.42,6),r);T.position.y=-.21,T.castShadow=!0,this.leftLegPivot.add(T);const I=new P(new at(.11,.09,.42,6),r);I.position.y=-.58,I.castShadow=!0,this.leftLegPivot.add(I);const U=new Q(.18,.14,.36),G=new P(U,o);G.position.set(0,-.76,.06),G.castShadow=!0,this.leftLegPivot.add(G),this.mesh.add(this.leftLegPivot),this.rightLegPivot=new Ct,this.rightLegPivot.position.set(.16,.82,0);const X=new P(new at(.14,.11,.42,6),r);X.position.y=-.21,X.castShadow=!0,this.rightLegPivot.add(X);const z=new P(new at(.11,.09,.42,6),r);z.position.y=-.58,z.castShadow=!0,this.rightLegPivot.add(z);const Y=new P(U,o);Y.position.set(0,-.76,.06),Y.castShadow=!0,this.rightLegPivot.add(Y),this.mesh.add(this.rightLegPivot);const H=new _i(.52,14);this.shadowMat=new Ut({color:329489,transparent:!0,opacity:.48,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}),this.shadowMesh=new P(H,this.shadowMat),this.shadowMesh.rotation.x=-Math.PI/2,this.shadowMesh.position.y=.035,this.scene.add(this.shadowMesh)}update(t,e,n,s){if(this.isDrivingQuad){this.mesh.position.copy(this.position),this.mesh.rotation.y=this.rotation,this.shadowMesh&&(this.shadowMesh.visible=!1);return}const r=new L;if(e.isForward()&&(r.z-=1),e.isBackward()&&(r.z+=1),e.isLeft()&&(r.x-=1),e.isRight()&&(r.x+=1),this.isMoving=r.lengthSq()>.001,this.isMoving){r.normalize(),r.applyAxisAngle(new L(0,1,0),n);let c=Math.atan2(r.x,r.z)-this.rotation;for(;c<-Math.PI;)c+=Math.PI*2;for(;c>Math.PI;)c-=Math.PI*2;this.rotation+=c*Math.min(1,t*14);let l=this.walkSpeed;e.isZoom()?(l=this.zoomSpeed,this.moveState="ZOOM"):e.isSprint()?(l=this.runSpeed,this.moveState="RUN"):(l=this.walkSpeed,this.moveState="WALK"),this.velocity.x=r.x*l,this.velocity.z=r.z*l}else this.velocity.x*=Math.max(0,1-t*12),this.velocity.z*=Math.max(0,1-t*12),this.moveState="IDLE";this.position.x+=this.velocity.x*t,this.position.z+=this.velocity.z*t,s&&s.resolveCollisions&&s.resolveCollisions(this.position,this.radius,this.position.y),this.isGrounded&&e.isJump()&&(this.velocity.y=this.jumpForce,this.isGrounded=!1),this.isGrounded||(this.velocity.y-=this.gravity*t),this.position.y+=this.velocity.y*t;const a=s?s.getGroundHeight(this.position.x,this.position.z,this.position.y):0;if(this.position.y<=a?(this.position.y=a,this.velocity.y=0,this.isGrounded=!0):this.isGrounded=!1,this.mesh.position.copy(this.position),this.mesh.rotation.y=this.rotation,this.shadowMesh){const o=Math.max(0,this.position.y-a);this.shadowMesh.position.set(this.position.x,a+.035,this.position.z);const c=Math.max(.35,1-o*.12);this.shadowMesh.scale.set(c,c,c),this.shadowMat&&(this.shadowMat.opacity=Math.max(.12,.45-o*.07))}if(this.isMoving&&this.isGrounded){const o=this.moveState==="ZOOM"?25:this.moveState==="RUN"?17:11;this.animTime+=t*o;const c=Math.sin(this.animTime)*(this.moveState==="ZOOM"?.95:.8),l=-Math.sin(this.animTime)*(this.moveState==="ZOOM"?.85:.7);this.leftLegPivot.rotation.x=c,this.rightLegPivot.rotation.x=-c,this.leftArmPivot.rotation.x=l,this.rightArmPivot.rotation.x=-l,this.torso.position.y=1.15+Math.abs(Math.sin(this.animTime*2))*.06,this.head.position.y=1.74+Math.abs(Math.sin(this.animTime*2))*.06}else this.leftLegPivot.rotation.x*=.8,this.rightLegPivot.rotation.x*=.8,this.leftArmPivot.rotation.x*=.8,this.rightArmPivot.rotation.x*=.8,this.torso.position.y=1.15,this.head.position.y=1.74;if(this.moveState==="ZOOM"&&this.isMoving&&this.isGrounded&&(this.dustTimer+=t,this.dustTimer>.07)){this.dustTimer=0;const o=this.dustParticles.find(c=>c.life<=0);o&&(o.mesh.position.set(this.position.x+(Math.random()-.5)*.4,a+.08,this.position.z+(Math.random()-.5)*.4),o.life=o.maxLife,o.mesh.visible=!0,o.mesh.scale.set(1,1,1),o.mesh.material.opacity=.55)}this.dustParticles.forEach(o=>{if(o.life>0){o.life-=t;const c=1-o.life/o.maxLife;o.mesh.position.y+=t*.4;const l=1+c*1.5;o.mesh.scale.set(l,l,l),o.mesh.material.opacity=Math.max(0,.55*(1-c)),o.life<=0&&(o.mesh.visible=!1)}})}setVisible(t){this.mesh.visible=t,this.shadowMesh&&(this.shadowMesh.visible=t)}getEyePosition(){return new L(this.position.x,this.position.y+1.65,this.position.z)}}const bi={THIRD_PERSON:"3RD PERSON [V]",FIRST_PERSON:"1ST PERSON [V]"};class cp{constructor(t){this.camera=t,this.mode=bi.THIRD_PERSON,this.distance=5.8,this.currentPosition=new L,this.currentTarget=new L,this.onModeChange=null}toggleMode(t){this.mode===bi.THIRD_PERSON?(this.mode=bi.FIRST_PERSON,t&&t.setVisible(!1)):(this.mode=bi.THIRD_PERSON,t&&t.setVisible(!0)),this.onModeChange&&this.onModeChange(this.mode)}getMode(){return this.mode}update(t,e,n){if(!e)return;let s=62;e.isDrivingQuad?e.quadTurbo?s=84:e.quadSpeed>10&&(s=72):e.moveState==="ZOOM"&&e.isMoving&&(s=73),Math.abs(this.camera.fov-s)>.05&&(this.camera.fov+=(s-this.camera.fov)*Math.min(1,t*7),this.camera.updateProjectionMatrix());const r=n.mouse.yaw,a=n.mouse.pitch;if(this.mode===bi.FIRST_PERSON){const o=e.getEyePosition();this.camera.position.copy(o);const c=new L(-Math.sin(r)*Math.cos(a),Math.sin(a),-Math.cos(r)*Math.cos(a)),l=o.clone().add(c);this.camera.lookAt(l)}else{const o=e.position.clone();o.y+=1.1;const c=Math.cos(a),l=Math.sin(a),h=1.35,f=Math.sin(r)*c*this.distance,u=h-l*this.distance,m=Math.cos(r)*c*this.distance,g=new L(o.x+f,o.y+u,o.z+m),_=e.position.y+.5;g.y<_&&(g.y=_);const p=o.clone();if(p.y+=l*1.6,this.currentPosition.lengthSq()<.001)this.currentPosition.copy(g),this.currentTarget.copy(p);else{const d=Math.min(1,t*10);this.currentPosition.lerp(g,d),this.currentTarget.lerp(p,d)}this.camera.position.copy(this.currentPosition),this.camera.lookAt(this.currentTarget)}}}class lp{constructor(t,e=-36,n=46){this.scene=t,this.position=new L(e,0,n),this.heading=.35,this.speed=0,this.steerAngle=0,this.pitch=0,this.roll=0,this.isRidden=!1,this.wheelRadius=.42,this.wheelRot=0,this.maxSpeed=24,this.turboSpeed=46,this.reverseSpeed=-8.5,this.accel=28,this.turboAccel=72,this.brakeRate=36,this.friction=4.8,this.turnSpeed=2.6,this.velocityY=0,this.isGrounded=!0,this.gravity=25,this.jumpForce=13.5,this.prevGroundY=0,this.airTime=0,this.isTurbo=!1,this.dustParticles=[],this.dustTimer=0,this._initDustParticles(),this.mesh=new Ct,this._buildLowPolyModel(),this.mesh.position.copy(this.position),this.mesh.rotation.y=this.heading,this.scene.add(this.mesh)}_initDustParticles(){const t=new We(.22,0);for(let e=0;e<20;e++){const n=new P(t,new Ut({color:12889995,transparent:!0,opacity:.65}));n.visible=!1,this.scene.add(n),this.dustParticles.push({mesh:n,life:0,maxLife:.45})}}_spawnBurstDust(t=6){for(let e=0;e<t;e++){const n=this.dustParticles.find(s=>s.life<=0);n&&(n.mesh.position.set(this.position.x+(Math.random()-.5)*1.4,this.position.y+.12,this.position.z+(Math.random()-.5)*1.4),n.life=n.maxLife*(.8+Math.random()*.4),n.mesh.visible=!0,n.mesh.scale.set(1.2,1.2,1.2),n.mesh.material.opacity=.75)}}_buildLowPolyModel(){const t=new st({color:2040619,flatShading:!0}),e=new st({color:16109600,flatShading:!0}),n=new st({color:58879,flatShading:!0}),s=new st({color:1118999,flatShading:!0}),r=new Ie({color:13421772,metalness:.75,roughness:.25,flatShading:!0}),a=new st({color:1579551,flatShading:!0}),o=new st({color:10067368,flatShading:!0}),c=new st({color:1447965,flatShading:!0}),l=new st({color:14494720,flatShading:!0}),h=new P(new Q(.72,.35,1.95),t);h.position.y=.45,h.castShadow=!0,this.mesh.add(h);const f=new P(new Q(.85,.45,.12),t);f.position.set(0,.55,-1.05),f.castShadow=!0,this.mesh.add(f);const u=new P(new Q(.12,.35,.28),t);u.position.set(-.42,.55,-.95),this.mesh.add(u);const m=new P(new Q(.12,.35,.28),t);m.position.set(.42,.55,-.95),this.mesh.add(m),[-.72,.72].forEach(M=>{const x=new P(new at(.045,.045,1.25,6),t);x.rotation.z=Math.PI/2,x.position.set(0,.4,M),this.mesh.add(x),[-.45,.45].forEach(T=>{const I=new P(new at(.06,.06,.38,5),l);I.position.set(T,.55,M),I.rotation.z=T>0?.25:-.25,this.mesh.add(I)})}),this.wheels=[],this.steerKnuckles=[],[{id:"FL",x:-.62,z:-.72,isFront:!0},{id:"FR",x:.62,z:-.72,isFront:!0},{id:"RL",x:-.62,z:.72,isFront:!1},{id:"RR",x:.62,z:.72,isFront:!1}].forEach(M=>{const x=new Ct;x.position.set(M.x,.4,M.z),this.mesh.add(x),M.isFront&&this.steerKnuckles.push(x);const T=new Ct;x.add(T),this.wheels.push(T);const I=new at(this.wheelRadius,this.wheelRadius,.28,8);I.rotateZ(Math.PI/2);const U=new P(I,a);U.castShadow=!0,T.add(U);for(let z=0;z<6;z++){const Y=z/6*Math.PI*2,H=new P(new Q(.29,.06,.12),s);H.position.set(0,Math.sin(Y)*this.wheelRadius,Math.cos(Y)*this.wheelRadius),H.rotation.x=-Y,T.add(H)}const G=new P(new at(.24,.24,.29,6),o);G.rotation.z=Math.PI/2,T.add(G);const X=new P(new at(.08,.08,.32,6),r);X.rotation.z=Math.PI/2,T.add(X)});const _=new P(new Q(.65,.3,.65),e);_.position.set(0,.75,-.65),_.castShadow=!0,this.mesh.add(_),[-.52,.52].forEach(M=>{const x=new P(new Q(.35,.08,.72),e);x.position.set(M,.82,-.72),x.rotation.z=M>0?.15:-.15,x.castShadow=!0,this.mesh.add(x);const T=new P(new Q(.35,.08,.72),e);T.position.set(M,.82,.72),T.rotation.z=M>0?.15:-.15,T.castShadow=!0,this.mesh.add(T)});const p=new P(new Q(.55,.35,.55),e);p.position.set(0,.88,-.2),p.castShadow=!0,this.mesh.add(p);const d=new P(new Q(.18,.36,1.1),n);d.position.set(0,.89,-.35),this.mesh.add(d);const w=new P(new at(.06,.06,.08,6),s);w.position.set(0,1.08,-.2),this.mesh.add(w);const E=new P(new Q(.48,.18,.95),c);E.position.set(0,.82,.32),E.castShadow=!0,this.mesh.add(E);const v=new P(new at(.035,.04,.42,5),t);v.position.set(0,1.05,-.45),v.rotation.x=-.35,this.mesh.add(v);const D=new P(new at(.025,.025,.75,5),r);D.position.set(0,1.25,-.52),D.rotation.z=Math.PI/2,this.mesh.add(D),[-.34,.34].forEach(M=>{const x=new P(new at(.035,.035,.16,5),s);x.position.set(M,1.25,-.52),x.rotation.z=Math.PI/2,this.mesh.add(x);const T=new P(new Q(.08,.09,.12),e);T.position.set(M,1.26,-.58),this.mesh.add(T)});const A=new P(new Q(.18,.03,.12),new Ut({color:3800852}));A.position.set(0,1.18,-.45),A.rotation.x=.5,this.mesh.add(A),[-.18,.18].forEach(M=>{const x=new P(new at(.08,.08,.12,6),s);x.rotation.x=Math.PI/2,x.position.set(M,.82,-.98),this.mesh.add(x);const T=new P(new _i(.075,6),new Ut({color:16774824}));T.position.set(M,.82,-1.045),this.mesh.add(T)}),this.headlight=new Gr(16775904,2.5,28,Math.PI/5,.4,1.5),this.headlight.position.set(0,.85,-1),this.headlightTarget=new de,this.headlightTarget.position.set(0,.2,-12),this.mesh.add(this.headlightTarget),this.headlight.target=this.headlightTarget,this.mesh.add(this.headlight);const R=new P(new Q(.68,.06,.52),t);R.position.set(0,.88,.95),this.mesh.add(R);const C=new P(new Q(.24,.28,.18),l);C.position.set(-.16,1.05,.95),C.castShadow=!0,this.mesh.add(C),[-.24,.24].forEach(M=>{const x=new P(new Q(.12,.06,.04),new Ut({color:16719390}));x.position.set(M,.86,1.18),this.mesh.add(x)}),[-.22,.22].forEach(M=>{const x=new P(new at(.045,.05,.55,6),r);x.rotation.x=Math.PI/2,x.position.set(M,.65,1.05),this.mesh.add(x)}),this.nitroFlames=[],[-.22,.22].forEach(M=>{const x=new Ct;x.position.set(M,.65,1.35);const T=new P(new be(.12,.55,5),new Ut({color:58879,transparent:!0,opacity:.9}));T.rotation.x=Math.PI/2,T.position.z=.26,x.add(T);const I=new P(new be(.06,.35,5),new Ut({color:16772829}));I.rotation.x=Math.PI/2,I.position.z=.16,x.add(I),x.visible=!1,this.mesh.add(x),this.nitroFlames.push(x)})}mount(t){this.isRidden=!0,t.isDrivingQuad=!0,t.velocity.set(0,0,0)}dismount(t,e){this.isRidden=!1,this.speed=0,this.velocityY=0,this.isGrounded=!0,t.isDrivingQuad=!1,t.quadTurbo=!1,t.quadSpeed=0;const n=Math.cos(this.heading),s=Math.sin(this.heading),r=this.position.x-n*1.6,a=this.position.z+s*1.6,o=e?e.getGroundHeight(r,a):this.position.y;t.position.set(r,o,a),t.rotation=this.heading}update(t,e,n,s){if(this.isRidden){const r=e.keys.ShiftLeft||e.keys.ShiftRight;this.isTurbo=r,s&&(s.quadTurbo=r,s.quadSpeed=Math.abs(this.speed));const a=r?this.turboSpeed:this.maxSpeed,o=r?this.turboAccel:this.accel,c=e.keys.KeyW||e.keys.ArrowUp,l=e.keys.KeyS||e.keys.ArrowDown,h=e.keys.KeyA||e.keys.ArrowLeft,f=e.keys.KeyD||e.keys.ArrowRight,u=e.keys.Space;c?(this.speed+=o*t,this.speed>a&&(this.speed=a)):l?this.speed>.5?this.speed-=this.brakeRate*t:(this.speed-=this.accel*.6*t,this.speed<this.reverseSpeed&&(this.speed=this.reverseSpeed)):this.speed>0?this.speed=Math.max(0,this.speed-this.friction*t):this.speed<0&&(this.speed=Math.min(0,this.speed+this.friction*t));let m=0;if(h&&(m+=.55),f&&(m-=.55),this.steerAngle+=(m-this.steerAngle)*Math.min(1,t*10),Math.abs(this.speed)>.2){const _=this.speed>0?1:-1;this.heading+=this.steerAngle*this.turnSpeed*(Math.abs(this.speed)/this.maxSpeed)*_*t}const g=this.speed*t;if(this.position.x-=Math.sin(this.heading)*g,this.position.z-=Math.cos(this.heading)*g,n&&n.getIslandElevation(this.position.x,this.position.z)<.35){this.speed*=.5;const p=10-this.position.x,d=65-this.position.z,w=Math.hypot(p,d);w>0&&(this.position.x+=p/w*.4,this.position.z+=d/w*.4)}if(n&&n.resolveCollisions&&n.resolveCollisions(this.position,1.05,this.position.y),n){const _=this.position.x-Math.sin(this.heading)*.85,p=this.position.z-Math.cos(this.heading)*.85,d=this.position.x+Math.sin(this.heading)*.85,w=this.position.z+Math.cos(this.heading)*.85,E=n.getGroundHeight(_,p,this.position.y),v=n.getGroundHeight(d,w,this.position.y),D=(E+v)*.5,A=t>1e-4?(D-this.prevGroundY)/t:0;if(this.prevGroundY=D,this.isGrounded&&(u?(this.isGrounded=!1,this.velocityY=Math.max(this.jumpForce,A+10),this._spawnBurstDust(4)):D<this.position.y-.28?(this.isGrounded=!1,this.velocityY=Math.max(0,A*.95),this.airTime=.01):(this.position.y=D,this.velocityY=0,this.pitch=Math.atan2(E-v,1.7),this.roll=-this.steerAngle*(this.speed/this.maxSpeed)*.18)),!this.isGrounded){this.airTime+=t,this.velocityY-=this.gravity*t,this.position.y+=this.velocityY*t;const R=-Math.atan2(this.velocityY,Math.max(7,Math.abs(this.speed)));this.pitch+=(R-this.pitch)*Math.min(1,t*5.5),this.roll*=.92;const C=n.getGroundHeight(this.position.x,this.position.z,this.position.y);this.position.y<=C&&(this.position.y=C,this.velocityY<-6.5&&this._spawnBurstDust(8),this.velocityY=0,this.isGrounded=!0,this.airTime=0)}}if(this.steerKnuckles.forEach(_=>{_.rotation.y=this.steerAngle}),this.wheelRot+=g/this.wheelRadius,this.wheels.forEach(_=>{_.rotation.x=this.wheelRot}),this.isGrounded&&Math.abs(this.speed)>4&&n){this.dustTimer+=t;const _=r?.025:.05;if(this.dustTimer>_){this.dustTimer=0;const p=this.position.z+Math.cos(this.heading)*.85,d=this.position.x+Math.sin(this.heading)*.85,w=Math.random()>.5?.45:-.45,E=this.dustParticles.find(v=>v.life<=0);E&&(E.mesh.position.set(d+Math.cos(this.heading)*w,this.position.y+.15,p-Math.sin(this.heading)*w),E.life=r?E.maxLife*1.3:E.maxLife,E.mesh.visible=!0,E.mesh.scale.set(r?1.5:1,r?1.5:1,r?1.5:1),E.mesh.material.opacity=r?.85:.6)}}if(this.nitroFlames&&this.nitroFlames.length>0){const _=r&&this.speed>5;this.nitroFlames.forEach(p=>{if(p.visible=_,_){const d=.85+Math.random()*.4,w=1+this.speed/this.turboSpeed*.6+Math.random()*.3;p.scale.set(d,d,w)}})}s&&(s.position.set(this.position.x,this.position.y+.22,this.position.z),s.rotation=this.heading,s.velocity.set(0,0,0),s.isGrounded=this.isGrounded,s.leftLegPivot&&s.rightLegPivot&&(s.leftLegPivot.rotation.x=-1.1,s.rightLegPivot.rotation.x=-1.1),s.leftArmPivot&&s.rightArmPivot&&(s.leftArmPivot.rotation.x=-.75,s.rightArmPivot.rotation.x=-.75))}else{if(n){const r=n.getGroundHeight(this.position.x,this.position.z);this.position.y=r}this.nitroFlames&&this.nitroFlames.forEach(r=>r.visible=!1)}this.mesh.position.copy(this.position),this.mesh.rotation.set(this.pitch,this.heading,this.roll,"YXZ"),this.dustParticles.forEach(r=>{if(r.life>0){r.life-=t;const a=1-r.life/r.maxLife;r.mesh.position.y+=t*.6;const o=1+a*2.5;r.mesh.scale.set(o,o,o),r.mesh.material.opacity=Math.max(0,.7*(1-a)),r.life<=0&&(r.mesh.visible=!1)}})}}class hp{constructor(){this.colliders=[]}addBox(t,e,n,s,r,a,o=!0,c=""){this.colliders.push({type:"box",minX:Math.min(t,e),maxX:Math.max(t,e),minZ:Math.min(n,s),maxZ:Math.max(n,s),minY:r,maxY:a,isWalkableTop:o,tag:c})}addRotatedBox(t,e,n,s,r,a,o,c=!0,l=""){const h=Math.cos(o),f=Math.sin(o);this.colliders.push({type:"rotated_box",cx:t,cz:e,minY:n-a,maxY:n+a,halfW:s,halfD:r,cosA:h,sinA:f,rotY:o,isWalkableTop:c,tag:l})}addRamp(t,e,n,s,r,a,o,c="ramp"){const l=Math.cos(o),h=Math.sin(o);this.colliders.push({type:"ramp",cx:t,cz:e,baseY:n,maxY:n+a,minY:n,halfW:s,length:r,height:a,cosA:l,sinA:h,rotY:o,isWalkableTop:!0,tag:c})}addCylinder(t,e,n,s,r,a=!0,o=""){this.colliders.push({type:"cylinder",x:t,z:e,minY:n,maxY:s,radius:r,isWalkableTop:a,tag:o})}addBoulder(t,e,n,s,r,a,o=!0,c=""){this.colliders.push({type:"boulder",x:t,z:e,minY:n,maxY:n+a,radiusX:s,radiusZ:r,height:a,isWalkableTop:o,tag:c})}getSurfaceHeight(t,e,n,s){let r=s;const a=.5;for(let o=0;o<this.colliders.length;o++){const c=this.colliders[o];if(c.isWalkableTop){if(c.type==="box")t>=c.minX&&t<=c.maxX&&e>=c.minZ&&e<=c.maxZ&&n>=c.maxY-a&&c.maxY>r&&(r=c.maxY);else if(c.type==="rotated_box"){const l=t-c.cx,h=e-c.cz,f=l*c.cosA+h*c.sinA,u=-l*c.sinA+h*c.cosA;Math.abs(f)<=c.halfW&&Math.abs(u)<=c.halfD&&n>=c.maxY-a&&c.maxY>r&&(r=c.maxY)}else if(c.type==="cylinder")(t-c.x)**2+(e-c.z)**2<=c.radius*c.radius&&n>=c.maxY-a&&c.maxY>r&&(r=c.maxY);else if(c.type==="boulder"){const l=(t-c.x)/c.radiusX,h=(e-c.z)/c.radiusZ,f=l*l+h*h;if(f<=1){const u=c.minY+c.height*Math.sqrt(Math.max(0,1-f*.75));n>=u-a&&u>r&&(r=u)}}else if(c.type==="ramp"){const l=t-c.cx,h=e-c.cz,f=l*c.cosA+h*c.sinA,u=-l*c.sinA+h*c.cosA;if(Math.abs(f)<=c.halfW&&u>=-.2&&u<=c.length+.25){const m=Math.max(0,Math.min(1,u/c.length)),g=c.baseY+m*c.height;n>=g-a&&g>r&&(r=g)}}}}return r}resolveHorizontalCollisions(t,e,n,s=1.8){const r=n,a=n+s,o=.42;for(let c=0;c<this.colliders.length;c++){const l=this.colliders[c];if(!(l.isWalkableTop&&r>=l.maxY-o)&&!(a<=l.minY)&&!(r>=l.maxY)){if(l.type==="box")this._resolveBoxCollision(t,e,l);else if(l.type==="rotated_box")this._resolveRotatedBoxCollision(t,e,l);else if(l.type==="cylinder")this._resolveCylinderCollision(t,e,l.x,l.z,l.radius);else if(l.type==="boulder"){const h=(l.radiusX+l.radiusZ)*.45;this._resolveCylinderCollision(t,e,l.x,l.z,h)}}}}_resolveBoxCollision(t,e,n){const s=Math.max(n.minX,Math.min(n.maxX,t.x)),r=Math.max(n.minZ,Math.min(n.maxZ,t.z)),a=t.x-s,o=t.z-r,c=a*a+o*o;if(c<e*e){const l=Math.sqrt(c);if(l>1e-4){const h=e-l;t.x+=a/l*h,t.z+=o/l*h}else{const h=Math.abs(t.x-n.minX),f=Math.abs(n.maxX-t.x),u=Math.abs(t.z-n.minZ),m=Math.abs(n.maxZ-t.z),g=Math.min(h,f,u,m);g===h?t.x=n.minX-e:g===f?t.x=n.maxX+e:g===u?t.z=n.minZ-e:t.z=n.maxZ+e}}}_resolveRotatedBoxCollision(t,e,n){const s=t.x-n.cx,r=t.z-n.cz,a=s*n.cosA+r*n.sinA,o=-s*n.sinA+r*n.cosA,c=Math.max(-n.halfW,Math.min(n.halfW,a)),l=Math.max(-n.halfD,Math.min(n.halfD,o)),h=a-c,f=o-l,u=h*h+f*f;if(u<e*e){const m=Math.sqrt(u);let g=0,_=0;if(m>1e-4){const p=e-m;g=h/m*p,_=f/m*p}else{const p=Math.abs(a- -n.halfW),d=Math.abs(n.halfW-a),w=Math.abs(o- -n.halfD),E=Math.abs(n.halfD-o),v=Math.min(p,d,w,E);v===p?g=-n.halfW-e-a:v===d?g=n.halfW+e-a:v===w?_=-n.halfD-e-o:_=n.halfD+e-o}t.x+=g*n.cosA-_*n.sinA,t.z+=g*n.sinA+_*n.cosA}}_resolveCylinderCollision(t,e,n,s,r){const a=t.x-n,o=t.z-s,c=Math.hypot(a,o),l=e+r;if(c<l)if(c>1e-4){const h=l-c;t.x+=a/c*h,t.z+=o/c*h}else t.x+=l}}class dp{constructor(t){this.scene=t,this.time=0,this.collisionWorld=new hp,this._buildOcean(),this._buildTerrain(),this._buildCliffsAndRocks(),this._buildPier(),this._buildClifftopOverlook(),this._buildForestAndVegetation(),this._buildLighthouse(),this._buildVendingMachines(),this._buildStreetLamps(),this._buildBeachHouse(),this._buildTreasureCove(),this._buildRadioTower(),this._buildDistantShip(),this._buildCampfireAndBuoys(),this._buildBeachBarAndLoungers(),this._buildDanceArea(),this._buildJetSkis(),this._buildWindingPath(),this._buildShrubs(),this._buildStuntRamps()}_buildOcean(){const t=new Gn(600,600,64,64);t.rotateX(-Math.PI/2),this.waterMat=new Ie({color:1455183,roughness:.3,metalness:.15,flatShading:!0,transparent:!0,opacity:.92}),this.waterMesh=new P(t,this.waterMat),this.waterMesh.position.y=-.2,this.scene.add(this.waterMesh),this.waterPosAttribute=t.attributes.position,this.waterBaseY=new Float32Array(this.waterPosAttribute.count);for(let e=0;e<this.waterPosAttribute.count;e++)this.waterBaseY[e]=this.waterPosAttribute.getY(e)}getIslandElevation(t,e){if(Math.abs(t)<=2.4&&e>=-48&&e<=3||Math.abs(t)<=7&&e>=-49&&e<=-39)return 2.38;const n=t-10,s=e-65,r=Math.hypot(n*.9,s*.7);if(r>95)return 0;const a=1-r/95;let o=Math.pow(a,1.25)*4.5;if(t>18&&e>15&&e<115){const l=Math.sin((t-18)/62*Math.PI)*Math.sin((e-15)/100*Math.PI);l>0&&(o+=Math.pow(l,.75)*19.5,o+=Math.sin(t*.25)*Math.cos(e*.2)*1.5)}if(e>45&&e<135){const l=Math.sin((e-45)/90*Math.PI)*Math.cos((t+10)/60*(Math.PI/2));l>0&&(o+=Math.pow(l,1.2)*14,o+=Math.sin(t*.15)*Math.cos(e*.12)*1.6)}if(Math.abs(t)<4.5&&e>=0&&e<=12){const l=e/12;o=2.38*(1-l)+o*l}const c=this._getTrailHeightAndDist(t,e);if(c.dist<3.2){const l=Math.max(0,1-c.dist/3.2),h=l*l*(3-2*l);o=o*(1-h*.88)+c.height*(h*.88)}return Math.max(0,o)}_buildTerrain(){const t=new Gn(240,240,64,64);t.rotateX(-Math.PI/2);const e=t.attributes.position,n=[],s=new Lt(1121843),r=new Lt(13212776),a=new Lt(4876616),o=new Lt(3494966),c=new Lt(5393244),l=new Lt(7037816),h=new Lt(8020814);for(let u=0;u<e.count;u++){const m=e.getX(u),g=e.getZ(u),_=this.getIslandElevation(m,g);e.setY(u,_);const p=new Lt,d=g<15&&_<2.9||m<-20&&g<38&&_<2.9||_<1.7;if(_<.2)p.copy(s);else if(d){const w=Math.max(0,Math.min(1,(_-.2)/2.7));p.lerpColors(r,a,w*.25)}else if(_>14||m>32&&_>7)p.lerpColors(c,l,(Math.sin(m*.5+g*.5)+1)*.5);else{const w=Math.min(1,(_-1.4)/10);p.lerpColors(a,o,w),this._distanceToTrail(m,g)<2.2&&p.lerp(h,.7)}n.push(p.r,p.g,p.b)}t.setAttribute("color",new re(n,3)),t.computeVertexNormals();const f=new st({vertexColors:!0,flatShading:!0});this.terrainMesh=new P(t,f),this.terrainMesh.receiveShadow=!0,this.scene.add(this.terrainMesh)}_getTrailHeightAndDist(t,e){const n=[[2,12,2.38],[6,18,3.5],[11,26,5.4],[16,34,7.8],[22,42,10.8],[28,50,14.2],[36,57,17.5],[42,63,20.2],[48,68,22.3]];let s=999,r=2.38;for(let a=0;a<n.length-1;a++){const[o,c,l]=n[a],[h,f,u]=n[a+1],m=h-o,g=f-c,_=m*m+g*g;let p=0;_>0&&(p=Math.max(0,Math.min(1,((t-o)*m+(e-c)*g)/_)));const d=o+p*m,w=c+p*g,E=Math.hypot(t-d,e-w);E<s&&(s=E,r=l+p*(u-l))}return{dist:s,height:r}}_distanceToTrail(t,e){return this._getTrailHeightAndDist(t,e).dist}_buildCliffsAndRocks(){this.rockGroup=new Ct,this.rockGeoDodec=new We(1,0),this.rockGeoIcos=new Qr(1,0),[[82,0,35,14,18,12],[90,0,70,16,24,15],[75,0,95,12,16,10],[-55,0,20,8,9,8],[-65,0,40,10,12,9]].forEach(([n,s,r,a,o,c])=>{this._createRockCluster(n,s+o*.4,r,a,o,c,4670036)}),[[-18,6],[-28,14],[-38,25],[22,12],[28,4],[35,18],[5,2],[-8,1]].forEach(([n,s])=>{const r=this.getGroundHeight(n,s),a=1.2+Math.random()*1.8;this._createRockCluster(n,r+a*.3,s,a*1.4,a,a*1.2,5919334)});for(let n=25;n<=105;n+=12){const s=46+Math.sin(n*.3)*6,r=this.getGroundHeight(s,n);this._createRockCluster(s,r+1.5,n,4.5,3.5,4,6445680)}this.scene.add(this.rockGroup)}_createRockCluster(t,e,n,s,r,a,o){const c=new Ct;c.position.set(t,e,n);const l=new st({color:o,flatShading:!0}),h=Math.random()>.45?this.rockGeoDodec:this.rockGeoIcos,f=new P(h,l);if(f.scale.set(s,r,a),f.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),f.castShadow=!0,f.receiveShadow=!0,c.add(f),s>2.2){const u=this.rockGeoIcos,m=new P(u,l),g=.52+Math.random()*.28;m.scale.set(s*g,r*g*.85,a*g),m.position.set((Math.random()-.5)*s*.55,-r*.12,(Math.random()-.5)*a*.55),m.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),m.castShadow=!0,m.receiveShadow=!0,c.add(m)}this.rockGroup.add(c),this.collisionWorld&&this.collisionWorld.addBoulder(t,n,e-r*.35,s*.9,a*.9,r*1.15,!0,"boulder")}_buildPier(){this.pierGroup=new Ct;const t=new st({color:7556399,flatShading:!0}),e=new st({color:4665372,flatShading:!0}),n=new Q(4.6,.35,52),s=new P(n,t);s.position.set(0,2.2,-23),s.receiveShadow=!0,s.castShadow=!0,this.pierGroup.add(s),this.collisionWorld&&this.collisionWorld.addBox(-2.3,2.3,-48,3,0,2.38,!0,"pier_deck");const r=new at(.2,.25,4.5,6);for(let h=-44;h<=2;h+=5)[-2.1,2.1].forEach(f=>{const u=new P(r,t);u.position.set(f,.5,h),u.castShadow=!0,this.pierGroup.add(u)});const a=new Q(.12,.65,52);[-2.2,2.2].forEach(h=>{const f=new P(a,e);f.position.set(h,2.7,-23),f.castShadow=!0,this.pierGroup.add(f)}),this.collisionWorld&&(this.collisionWorld.addBox(-2.32,-2.12,-48,3,2.2,3.03,!0,"pier_rail_left"),this.collisionWorld.addBox(2.12,2.32,-48,3,2.2,3.03,!0,"pier_rail_right"));const o=new P(new Q(14,.35,10),t);o.position.set(0,2.2,-44),o.receiveShadow=!0,o.castShadow=!0,this.pierGroup.add(o),this.collisionWorld&&this.collisionWorld.addBox(-7,7,-49,-39,0,2.38,!0,"gazebo_platform");const c=new P(new be(4.8,2.4,6),new st({color:2043461,flatShading:!0}));c.position.set(0,5.3,-44),c.castShadow=!0,this.pierGroup.add(c);const l=new at(.12,.12,2.8,6);[[-3,-42],[3,-42],[-3,-46],[3,-46]].forEach(([h,f])=>{const u=new P(l,t);u.position.set(h,3.6,f),u.castShadow=!0,this.pierGroup.add(u),this.collisionWorld&&this.collisionWorld.addCylinder(h,f,2.2,5.2,.18,!1,"gazebo_pillar")}),this.scene.add(this.pierGroup)}_buildClifftopOverlook(){const t=this.getGroundHeight(48,68),e=new Ct;e.position.set(48,t,68);const n=new st({color:7227432,flatShading:!0}),s=new st({color:4007700,flatShading:!0}),r=new Q(8,.3,8),a=new P(r,n);a.position.y=.15,a.castShadow=!0,a.receiveShadow=!0,e.add(a),this.collisionWorld&&this.collisionWorld.addBox(44,52,64,72,t,t+.3,!0,"overlook_deck");const o=new P(new Q(8,.7,.1),s);o.position.set(0,.5,-4),e.add(o);const c=new P(new Q(.1,.7,8),s);c.position.set(4,.5,0),e.add(c);const l=new P(new Q(8,.7,.1),s);l.position.set(0,.5,4),e.add(l),this.collisionWorld&&(this.collisionWorld.addBox(44,52,63.85,64.15,t,t+.85,!0,"overlook_rail"),this.collisionWorld.addBox(51.85,52.15,64,72,t,t+.85,!0,"overlook_rail"),this.collisionWorld.addBox(44,52,71.85,72.15,t,t+.85,!0,"overlook_rail"));const h=new st({color:9067062,flatShading:!0}),f=new P(new Q(2.4,.15,.6),h);f.position.set(1.5,.55,0),f.rotation.y=-Math.PI/2,e.add(f);const u=new P(new Q(2.4,.6,.1),h);u.position.set(1.75,.9,0),u.rotation.y=-Math.PI/2,e.add(u),this.collisionWorld&&this.collisionWorld.addBox(49.2,49.8,66.8,69.2,t,t+.65,!0,"overlook_bench");const m=new P(new at(.08,.1,3.2,6),s);m.position.set(-3.2,1.6,-3.2),e.add(m);const g=new P(new Q(.35,.35,.35),new Ut({color:16768896}));g.position.set(-3.2,3.2,-3.2),e.add(g);const _=new Te(16758869,1.6,16);_.position.set(-3.2,3.2,-3.2),e.add(_),this.scene.add(e)}_buildForestAndVegetation(){this.vegetationGroup=new Ct,[[-15,55],[-5,65],[10,75],[-20,80],[0,90],[18,95],[-12,105],[5,115],[-25,95],[-35,75],[-10,125],[12,120]].forEach(([n,s])=>{const r=4+Math.floor(Math.random()*3);for(let a=0;a<r;a++){const o=n+(Math.random()-.5)*16,c=s+(Math.random()-.5)*16,l=.8+Math.random()*.7;this._createPineTree(o,c,l)}}),[[-12,12],[-22,18],[-32,28],[-42,38],[14,12],[22,18],[18,26],[-8,6],[8,6],[-16,2],[16,2],[-26,8],[26,8]].forEach(([n,s])=>{this._createPalmTree(n,s)}),this.scene.add(this.vegetationGroup)}_createPineTree(t,e,n=1){const s=this.getGroundHeight(t,e);if(s<1.2)return;const r=new Ct;r.position.set(t,s,e);const a=new st({color:4862498,flatShading:!0}),o=Math.random()>.5?2048555:2575924,c=new st({color:o,flatShading:!0}),l=2*n,h=new P(new at(.18*n,.28*n,l,5),a);h.position.y=l/2,h.castShadow=!0,r.add(h);const f=3;for(let u=0;u<f;u++){const m=(1.8-u*.4)*n,g=(2.2-u*.3)*n,_=new P(new be(m,g,6),c);_.position.y=l+u*1.3*n,_.castShadow=!0,r.add(_)}this.vegetationGroup.add(r),this.collisionWorld&&this.collisionWorld.addCylinder(t,e,s,s+l,.28*n,!1,"pine_trunk")}_createPalmTree(t,e){const n=this.getGroundHeight(t,e);if(n<.2)return;const s=new Ct;s.position.set(t,n,e);const r=new st({color:7228983,flatShading:!0}),a=new st({color:3040826,flatShading:!0}),o=5;let c=0,l=0;const h=(Math.random()-.5)*.45;for(let u=0;u<o;u++){const g=new P(new at(.22-u*.02,.28-u*.02,1.4,6),r);g.position.set(l,c+1.4/2,0),g.rotation.z=h*(u+1),g.castShadow=!0,s.add(g),c+=1.4,l+=Math.sin(h*(u+1))*.35}const f=7;for(let u=0;u<f;u++){const m=u/f*Math.PI*2,g=new P(new be(.65,3.8,4),a);g.geometry.rotateX(Math.PI/2.5),g.position.set(l,c,0),g.rotation.y=m,g.castShadow=!0,s.add(g)}this.vegetationGroup.add(s),this.collisionWorld&&this.collisionWorld.addCylinder(t,e,n,n+4.2,.32,!1,"palm_trunk")}_buildLighthouse(){this.lighthouseGroup=new Ct,this.lighthouseGroup.position.set(120,0,-85);const t=new P(new We(18,0),new st({color:4735570,flatShading:!0}));t.scale.set(1.5,.6,1.3),t.position.y=1.5,this.lighthouseGroup.add(t);const e=new P(new at(2.2,4.2,26,10),new st({color:15132394,flatShading:!0}));e.position.y=15.5,e.castShadow=!0,this.lighthouseGroup.add(e);const n=new P(new at(2.8,3.4,5,10),new st({color:14235704,flatShading:!0}));n.position.y=16.5,this.lighthouseGroup.add(n);const s=new P(new at(2,2,3.2,8),new Ut({color:16773014}));s.position.y=29.5,this.lighthouseGroup.add(s),this.lighthouseSpot=new Gr(16775904,8,240,Math.PI/7,.4,.2),this.lighthouseSpot.position.set(0,29.5,0),this.lighthouseTarget=new de,this.lighthouseTarget.position.set(60,0,60),this.lighthouseGroup.add(this.lighthouseTarget),this.lighthouseSpot.target=this.lighthouseTarget,this.lighthouseGroup.add(this.lighthouseSpot),this.scene.add(this.lighthouseGroup)}_buildVendingMachines(){const t=new Ct;t.position.set(-3.2,2.38,2),t.rotation.y=Math.PI/2;const e=new P(new Q(1.1,2.1,.85),new st({color:2041400,flatShading:!0}));e.position.y=1.05,e.castShadow=!0,t.add(e);const n=new P(new Gn(.85,1.1),new Ut({color:5107434}));n.position.set(0,1.3,.43),t.add(n);const s=new Te(5107434,1.8,6);s.position.set(0,1.3,.6),t.add(s);const r=t.clone();r.position.set(-3.2,2.38,3.6),r.children[1].material=new Ut({color:16726907});const a=new Te(16726907,1.8,6);a.position.set(0,1.3,.6),r.children[2]=a,this.scene.add(t),this.scene.add(r),this.collisionWorld&&(this.collisionWorld.addBox(-3.65,-2.75,1.45,2.55,2.38,4.48,!0,"vending_machine_1"),this.collisionWorld.addBox(-3.65,-2.75,3.05,4.15,2.38,4.48,!0,"vending_machine_2"))}_buildStreetLamps(){const t=[[-2.4,-6],[2.4,-6],[-2.4,-20],[2.4,-20],[-2.4,-34],[2.4,-34],[-4,4],[4,4],[10,22],[20,32],[30,42]],e=new st({color:1975347,flatShading:!0}),n=new Ut({color:16765578});t.forEach(([s,r])=>{const a=new Ct,o=this.getGroundHeight(s,r);a.position.set(s,o,r);const c=new P(new at(.08,.12,3.6,6),e);c.position.y=1.8,c.castShadow=!0,a.add(c);const l=new P(new Q(.4,.4,.4),n);l.position.y=3.6,a.add(l);const h=new Te(16758892,1.2,14,1.5);h.position.y=3.6,a.add(h),this.scene.add(a),this.collisionWorld&&this.collisionWorld.addCylinder(s,r,o,o+3.6,.16,!1,"streetlamp")})}_buildBeachHouse(){this.beachHouseGroup=new Ct;const t=-34,e=30,n=this.getGroundHeight(t,e);this.beachHouseGroup.position.set(t,n,e),this.beachHouseGroup.rotation.y=.35;const s=new st({color:4863525,flatShading:!0});[[-3.2,-2.6],[0,-2.6],[3.2,-2.6],[-3.2,2.6],[0,2.6],[3.2,2.6]].forEach(([I,U])=>{const G=new P(new at(.14,.16,2.2,6),s);G.position.set(I,.9,U),G.castShadow=!0,this.beachHouseGroup.add(G)});const a=new st({color:8018750,flatShading:!0}),o=new P(new Q(7.8,.32,6.4),a);o.position.set(0,2,0),o.receiveShadow=!0,this.beachHouseGroup.add(o);for(let I=0;I<4;I++){const U=new P(new Q(1.6,.22,.5),a);U.position.set(0,1.6-I*.45,3.4+I*.45),U.receiveShadow=!0,this.beachHouseGroup.add(U)}const c=new st({color:4026478,flatShading:!0}),l=new P(new Q(5.2,3.2,4.4),c);l.position.set(-.8,3.75,-.6),l.castShadow=!0,l.receiveShadow=!0,this.beachHouseGroup.add(l);const h=new st({color:12208700,flatShading:!0}),f=new P(new Q(6.2,.38,5.4),h);f.position.set(-.8,5.5,-.6),f.rotation.x=-.12,f.castShadow=!0,this.beachHouseGroup.add(f);const u=new st({color:5520940,flatShading:!0}),m=new P(new Q(.12,.9,3.2),u);m.position.set(3.7,2.6,1.2),this.beachHouseGroup.add(m);const g=new P(new Q(2.4,.9,.12),u);g.position.set(2.4,2.6,3),this.beachHouseGroup.add(g);const _=new P(new Q(2.4,.9,.12),u);_.position.set(-2.4,2.6,3),this.beachHouseGroup.add(_);const p=new Ut({color:16765301}),d=new P(new Q(1.2,1.2,.1),p);d.position.set(.8,3.8,1.62),this.beachHouseGroup.add(d);const w=new P(new Q(.1,1.1,1.4),p);w.position.set(1.82,3.8,-.6),this.beachHouseGroup.add(w);const E=new Te(16760427,1.6,14,1.4);E.position.set(-.5,3.8,.5),this.beachHouseGroup.add(E);const v=new Ct;v.position.set(2.8,2.1,3.2),v.rotation.set(-.25,.2,.15);const D=new st({color:16722541,flatShading:!0}),A=new P(new at(.3,.24,2.4,8),D);A.scale.set(1,1,.2),A.castShadow=!0,v.add(A);const R=new Ut({color:383464}),C=new P(new Q(.32,.5,.08),R);C.position.y=.2,v.add(C),this.beachHouseGroup.add(v);const M=new st({color:15130575,flatShading:!0}),x=new P(new Q(.9,.1,1.4),M);x.position.set(2.2,2.5,1),x.rotation.x=-.55,this.beachHouseGroup.add(x);const T=new P(new Q(.9,.1,1.1),M);if(T.position.set(2.2,2.2,1.8),this.beachHouseGroup.add(T),this.scene.add(this.beachHouseGroup),this.collisionWorld){this.collisionWorld.addRotatedBox(t,e,n+2,3.9,3.2,.2,.35,!0,"beachhouse_deck");const I=Math.cos(.35),U=Math.sin(.35);for(let It=0;It<4;It++){const qt=3.4+It*.45,Z=t+-qt*U,j=e+qt*I,nt=n+(1.6-It*.45);this.collisionWorld.addRotatedBox(Z,j,nt,.8,.28,.15,.35,!0,"beachhouse_step")}const G=-.8,X=-.6,z=t+(G*I-X*U),Y=e+(G*U+X*I);this.collisionWorld.addRotatedBox(z,Y,n+3.75,2.6,2.2,1.6,!0,"beachhouse_cabin"),this.collisionWorld.addRotatedBox(z,Y,n+5.5,3.1,2.7,.22,.35,!0,"beachhouse_roof");const H=2.2,ot=1.4,ft=t+(H*I-ot*U),vt=e+(H*U+ot*I);this.collisionWorld.addRotatedBox(ft,vt,n+2.3,.5,.9,.18,.35,!0,"beachhouse_lounger")}}_buildTreasureCove(){this.treasureGroup=new Ct;const t=-48,e=16,n=this.getGroundHeight(t,e);this.treasureGroup.position.set(t,n,e),this._createRockCluster(t-3.5,n+1.2,e+1,3.8,2.8,3.2,5196124),this._createRockCluster(t+2.8,n+.9,e-2.5,3.2,2.2,3,5788006);const s=new st({color:4010793,flatShading:!0}),r=new P(new Q(1.8,.06,.28),s);r.rotation.y=Math.PI/4,r.position.set(-.8,.04,-.6),this.treasureGroup.add(r);const a=new P(new Q(1.8,.06,.28),s);a.rotation.y=-Math.PI/4,a.position.set(-.8,.05,-.6),this.treasureGroup.add(a);const o=new st({color:8545347,flatShading:!0}),c=new P(new We(1.2,0),o);c.scale.set(1.4,.35,1.3),c.position.set(.3,.15,.2),this.treasureGroup.add(c);const l=new Ct;l.position.set(1,.2,.6),l.rotation.set(.3,.4,-.25);const h=new Ie({color:4475732,metalness:.6,roughness:.5,flatShading:!0}),f=new P(new Q(.24,.38,.04),h);f.position.y=.2,l.add(f);const u=new st({color:9069375,flatShading:!0}),m=new P(new at(.025,.025,1.1,5),u);m.position.y=.85,l.add(m);const g=new P(new Q(.16,.04,.04),u);g.position.y=1.4,l.add(g),this.treasureGroup.add(l);const _=new Ct;_.position.set(0,.35,0),_.rotation.y=-.3;const p=new st({color:5517847,flatShading:!0}),d=new Ie({color:13938487,metalness:.8,roughness:.25,flatShading:!0}),w=new P(new Q(1.15,.62,.75),p);w.castShadow=!0,_.add(w);const E=new P(new Q(.14,.16,.08),d);E.position.set(0,.08,.38),_.add(E);const v=new P(new Q(.08,.64,.77),d);v.position.x=-.38,_.add(v);const D=new P(new Q(.08,.64,.77),d);D.position.x=.38,_.add(D);const A=new Ct;A.position.set(0,.31,-.37),A.rotation.x=-1.1;const R=new P(new at(.38,.38,1.15,8,1,!1,0,Math.PI),p);R.rotation.z=Math.PI/2,R.rotation.y=Math.PI,A.add(R),_.add(A);const C=new Ie({color:16766720,metalness:.9,roughness:.2,flatShading:!0});[[-.2,.26,-.05],[.15,.26,-.08],[0,.33,.05],[-.15,.32,.1],[.22,.32,.08]].forEach(([X,z,Y],H)=>{const ot=new P(new Q(.28,.12,.16),C);ot.position.set(X,z,Y),ot.rotation.y=H*.45,_.add(ot)});const x=new Ie({color:16717636,roughness:.1,metalness:.4,flatShading:!0}),T=new P(new ps(.11,0),x);T.position.set(-.25,.36,.18),_.add(T);const I=new Ie({color:58879,roughness:.1,metalness:.4,flatShading:!0}),U=new P(new ps(.12,0),I);U.position.set(.28,.36,.16),_.add(U);const G=new Te(16762939,1.2,7,1.8);G.position.set(0,.8,0),_.add(G),this.treasureGroup.add(_),this.scene.add(this.treasureGroup),this.collisionWorld&&(this.collisionWorld.addBox(t-.6,t+.6,e-.45,e+.45,n,n+.68,!0,"treasure_chest"),this.collisionWorld.addCylinder(t+.3,e+.2,n,n+.35,1.2,!0,"treasure_mound"))}_buildRadioTower(){this.radioTowerGroup=new Ct;const t=-6,e=110,n=this.getGroundHeight(t,e);this.radioTowerGroup.position.set(t,n,e);const s=new st({color:5921891,flatShading:!0}),r=new P(new at(2.4,2.8,1,6),s);r.position.y=.5,r.receiveShadow=!0,this.radioTowerGroup.add(r);const a=new st({color:14562099,flatShading:!0}),o=new st({color:16119290,flatShading:!0}),c=8,l=24,h=l/c;for(let w=0;w<c;w++){const v=w%2===0?a:o,D=1.9*(1-w/c*.7),A=1.9*(1-(w+1)/c*.7),R=1+w*h+h/2;[[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([x,T])=>{const I=new P(new at(.045,.055,h,4),v);I.position.set(x*((D+A)/4),R,T*((D+A)/4)),I.castShadow=!0,this.radioTowerGroup.add(I)});const M=new P(new Q(A,.08,A),v);M.position.set(0,1+(w+1)*h,0),this.radioTowerGroup.add(M)}const f=new st({color:15263984,flatShading:!0}),u=new P(new De(1.1,8,8,0,Math.PI*2,0,Math.PI/2.3),f);u.position.set(.6,17.5,0),u.rotation.z=-Math.PI/2,u.rotation.y=.4,this.radioTowerGroup.add(u);const m=new P(new De(.8,8,8,0,Math.PI*2,0,Math.PI/2.3),f);m.position.set(-.5,12,0),m.rotation.z=Math.PI/2,this.radioTowerGroup.add(m);const g=new st({color:13421772,flatShading:!0}),_=new P(new at(.02,.04,3.5,4),g);_.position.y=l+1+1.75,this.radioTowerGroup.add(_);const p=l+1+3.5;this.radioBeaconMat=new Ut({color:16718362});const d=new P(new De(.32,8,6),this.radioBeaconMat);d.position.y=p,this.radioTowerGroup.add(d),this.radioBeaconLight=new Te(16720418,3.2,55,1.2),this.radioBeaconLight.position.y=p,this.radioTowerGroup.add(this.radioBeaconLight),this.scene.add(this.radioTowerGroup),this.collisionWorld&&(this.collisionWorld.addCylinder(t,e,n,n+1,2.6,!0,"radio_tower_plinth"),this.collisionWorld.addCylinder(t,e,n+1,n+25,1.1,!1,"radio_tower_mast"))}_buildDistantShip(){this.shipGroup=new Ct,this.shipGroup.position.set(-175,0,-105),this.shipGroup.rotation.y=.28;const t=new st({color:9052963,flatShading:!0}),e=new P(new Q(42,3.2,9.5),t);e.position.y=.6,this.shipGroup.add(e);const n=new st({color:2237996,flatShading:!0}),s=new P(new Q(43,2.2,10),n);s.position.y=3,this.shipGroup.add(s);const r=new st({color:2237996,flatShading:!0}),a=new P(new be(5.2,9,4),r);a.rotation.z=-Math.PI/2,a.rotation.y=Math.PI/4,a.position.set(24,2.6,0),this.shipGroup.add(a);const o=[2517130,13933352,10892329,2390619,5916032],c=5;for(let R=0;R<c;R++){const C=8-R*5.8,M=2+R%2;for(let x=0;x<M;x++){const T=o[(R*3+x)%o.length],I=new st({color:T,flatShading:!0}),U=new P(new Q(5.2,2.2,8.4),I);U.position.set(C,4.8+x*2.3,0),this.shipGroup.add(U)}}const l=new st({color:15658734,flatShading:!0}),h=new P(new Q(9,7.5,9.2),l);h.position.set(-16,7,0),this.shipGroup.add(h);const f=new Ut({color:1119778}),u=new P(new Q(9.2,1.1,9.4),f);u.position.set(-16,9.2,0),this.shipGroup.add(u);const m=new st({color:13380138,flatShading:!0}),g=new st({color:1381653,flatShading:!0}),_=new P(new at(.8,.9,4.2,6),m);_.position.set(-18.5,12,-1.8),this.shipGroup.add(_);const p=new P(new at(.82,.82,.6,6),g);p.position.set(-18.5,14.1,-1.8),this.shipGroup.add(p);const d=new P(new at(.8,.9,4.2,6),m);d.position.set(-18.5,12,1.8),this.shipGroup.add(d);const w=new P(new at(.82,.82,.6,6),g);w.position.set(-18.5,14.1,1.8),this.shipGroup.add(w);const E=new P(new at(.08,.12,6,4),l);E.position.set(-16,13.5,0),this.shipGroup.add(E);const v=new P(new De(.3,4,4),new Ut({color:16777215}));v.position.set(-16,16.5,0),this.shipGroup.add(v);const D=new P(new De(.25,4,4),new Ut({color:16720452}));D.position.set(-16,8.5,-4.8),this.shipGroup.add(D);const A=new P(new De(.25,4,4),new Ut({color:65416}));A.position.set(-16,8.5,4.8),this.shipGroup.add(A),this.scene.add(this.shipGroup)}_buildCampfireAndBuoys(){this.campfireGroup=new Ct;const t=-22,e=20,n=this.getGroundHeight(t,e);this.campfireGroup.position.set(t,n,e);const s=new st({color:5261655,flatShading:!0});for(let l=0;l<8;l++){const h=l/8*Math.PI*2,f=new P(new We(.22,0),s);f.position.set(Math.cos(h)*.75,.12,Math.sin(h)*.75),this.campfireGroup.add(f)}const r=new st({color:4007705,flatShading:!0});for(let l=0;l<3;l++){const h=new P(new at(.08,.09,1.2,5),r);h.rotation.z=.35,h.rotation.y=l*Math.PI/3,h.position.y=.15,this.campfireGroup.add(h)}const a=new Ut({color:16743168});this.campfireFlame=new P(new be(.32,.75,5),a),this.campfireFlame.position.y=.45,this.campfireGroup.add(this.campfireFlame),this.campfireLight=new Te(16739866,1.5,12,1.8),this.campfireLight.position.y=.65,this.campfireGroup.add(this.campfireLight);const o=new P(new at(.22,.25,2.6,6),r);o.rotation.z=Math.PI/2,o.position.set(0,.22,1.6),this.campfireGroup.add(o),this.scene.add(this.campfireGroup),this.collisionWorld&&(this.collisionWorld.addCylinder(t,e,n,n+.35,1,!0,"campfire_stones"),this.collisionWorld.addBox(t-1.3,t+1.3,e+1.35,e+1.85,n,n+.45,!0,"campfire_bench")),this.buoys=[],[[14,-32,58998],[-14,-32,16717636]].forEach(([l,h,f],u)=>{const m=new Ct;m.position.set(l,0,h);const g=new st({color:f,flatShading:!0}),_=new P(new at(.3,.8,1.8,6),g);_.position.y=.5,m.add(_);const p=new P(new De(.18,4,4),new Ut({color:f}));p.position.y=1.5,m.add(p);const d=new Te(f,.9,10,2);d.position.y=1.5,m.add(d),this.scene.add(m),this.buoys.push({mesh:m,light:d})})}_buildBeachBarAndLoungers(){this.beachBarGroup=new Ct;const t=11,e=14,n=this.getGroundHeight(t,e);this.beachBarGroup.position.set(t,n,e),this.beachBarGroup.rotation.y=-.25;const s=new st({color:7557944,flatShading:!0}),r=new st({color:5519136,flatShading:!0}),a=new st({color:10387540,flatShading:!0}),o=new st({color:11901028,flatShading:!0}),c=new st({color:4007959,flatShading:!0}),l=new Q(5.4,.25,4.2),h=new P(l,s);h.position.set(0,.12,0),h.receiveShadow=!0,this.beachBarGroup.add(h);const f=new P(new Q(3.8,1.05,.8),a);f.position.set(0,.65,.9),f.castShadow=!0,f.receiveShadow=!0,this.beachBarGroup.add(f);const u=new P(new Q(4.1,.1,1.05),r);u.position.set(0,1.2,.9),u.castShadow=!0,u.receiveShadow=!0,this.beachBarGroup.add(u);const m=new P(new Q(.8,1.05,1.6),a);m.position.set(1.5,.65,-.2),m.castShadow=!0,this.beachBarGroup.add(m);const g=new P(new Q(1,.1,1.8),r);g.position.set(1.5,1.2,-.2),g.castShadow=!0,this.beachBarGroup.add(g);const _=new P(new Q(3.2,1.6,.35),c);_.position.set(-.2,1.3,-1.6),_.castShadow=!0,this.beachBarGroup.add(_);const p=[58879,16727409,16755200,58998,10233776,16771584];for(let j=0;j<2;j++){const nt=.85+j*.65,tt=new P(new Q(3,.06,.3),r);tt.position.set(-.2,nt,-1.45),this.beachBarGroup.add(tt);for(let xt=0;xt<6;xt++){const Tt=new Ie({color:p[(xt+j*2)%p.length],roughness:.2,metalness:.2,transparent:!0,opacity:.85,flatShading:!0}),bt=new P(new at(.045,.055,.28,5),Tt);bt.position.set(-1.2+xt*.4,nt+.17,-1.45),this.beachBarGroup.add(bt)}}const d=new st({color:6373670,flatShading:!0}),w=new Ut({color:16717636});[-1.2,-.3,.6].forEach(j=>{const nt=new P(new at(.08,.07,.2,6),d);nt.position.set(j,1.35,.9);const tt=new P(new at(.01,.01,.28,4),w);tt.position.set(j+.02,1.45,.9),tt.rotation.z=.25,this.beachBarGroup.add(nt),this.beachBarGroup.add(tt)});const E=new st({color:9069116,flatShading:!0}),v=new st({color:4862491,flatShading:!0}),D=[-1.4,-.5,.4,1.2];D.forEach(j=>{const nt=new Ct;nt.position.set(j,0,1.85);const tt=new P(new at(.28,.26,.08,8),E);tt.position.y=.74,tt.castShadow=!0,tt.receiveShadow=!0,nt.add(tt);for(let xt=0;xt<3;xt++){const Tt=xt/3*Math.PI*2,bt=new P(new at(.025,.035,.74,4),v);bt.position.set(Math.cos(Tt)*.16,.37,Math.sin(Tt)*.16),bt.rotation.z=Math.sin(Tt)*.12,bt.rotation.x=-Math.cos(Tt)*.12,bt.castShadow=!0,nt.add(bt)}this.beachBarGroup.add(nt)});const A=new at(.1,.12,2.7,6);[[-2.4,-1.8],[2.4,-1.8],[-2.4,1.8],[2.4,1.8]].forEach(([j,nt])=>{const tt=new P(A,a);tt.position.set(j,1.35,nt),tt.castShadow=!0,this.beachBarGroup.add(tt)});const C=new P(new Q(5.6,.35,4.4),o);C.position.set(0,2.85,0),C.rotation.x=.08,C.castShadow=!0,C.receiveShadow=!0,this.beachBarGroup.add(C);const M=new P(new be(3.2,.6,4),o);M.position.set(0,3.25,0),M.scale.set(1,.6,.7),this.beachBarGroup.add(M);const x=new P(new Q(2.2,.45,.06),c);x.position.set(0,2.45,1.95),this.beachBarGroup.add(x);const T=new P(new Q(2,.3,.08),new Ut({color:16769154}));T.position.set(0,2.45,1.96),this.beachBarGroup.add(T);const I=new Ct;I.position.set(2.2,.1,.4),I.rotation.set(.15,-.4,.2);const U=new P(new at(.28,.22,2.2,8),new st({color:58879,flatShading:!0}));U.scale.set(1,1,.18),U.castShadow=!0,I.add(U);const G=new P(new Q(.3,.45,.06),new Ut({color:16722554}));G.position.y=.2,I.add(G),this.beachBarGroup.add(I),this.barStringLights=[];const X=new Ut({color:5107434}),z=new Ut({color:16726907}),Y=new Ut({color:16758832}),H=new Ut({color:6942894}),ot=[X,z,Y,H],ft=10;for(let j=0;j<ft;j++){const nt=j/(ft-1),tt=-2.3+nt*4.6,Tt=2.65-Math.sin(nt*Math.PI)*.22,bt=2.05,Yt=new P(new De(.08,4,4),ot[j%ot.length]);Yt.position.set(tt,Tt,bt),this.beachBarGroup.add(Yt),this.barStringLights.push(Yt)}const vt=new P(new at(.07,.09,2.8,5),a);vt.position.set(-3.8,1.4,3.2),vt.castShadow=!0,this.beachBarGroup.add(vt);const It=6;for(let j=0;j<It;j++){const nt=j/(It-1),tt=-2.4+nt*-1.4,xt=1.8+nt*1.4,bt=2.65-Math.sin(nt*Math.PI)*.28,Yt=new P(new De(.08,4,4),ot[(j+2)%ot.length]);Yt.position.set(tt,bt,xt),this.beachBarGroup.add(Yt),this.barStringLights.push(Yt)}const qt=new Te(16754740,1.8,14,1.4);qt.position.set(-.8,2.2,1.1),this.beachBarGroup.add(qt);const Z=new Te(5107434,1.4,12,1.5);if(Z.position.set(1,2.2,1.1),this.beachBarGroup.add(Z),this.scene.add(this.beachBarGroup),this.collisionWorld){const nt=Math.cos(-.25),tt=Math.sin(-.25),xt=0,Tt=.9,bt=t+(xt*nt-Tt*tt),Yt=e+(xt*tt+Tt*nt);this.collisionWorld.addRotatedBox(bt,Yt,n+.65,2.05,.52,.6,-.25,!0,"bar_counter");const Vt=-.2,ce=-1.6,B=t+(Vt*nt-ce*tt),we=e+(Vt*tt+ce*nt);this.collisionWorld.addRotatedBox(B,we,n+1.2,1.6,.25,.9,-.25,!0,"bar_shelf"),D.forEach(Wt=>{const Ht=Wt,At=1.85,ne=t+(Ht*nt-At*tt),Rt=e+(Ht*tt+At*nt);this.collisionWorld.addCylinder(ne,Rt,n,n+.78,.28,!0,"barstool")}),this.collisionWorld.addRotatedBox(t,e,n+2.85,2.8,2.2,.2,-.25,!0,"bar_roof")}this._buildBeachLoungers()}_buildBeachLoungers(){this.loungersGroup=new Ct;const t=[{x:18,z:4.8,rot:.15,stripeColor:58879},{x:22,z:4.2,rot:.05,stripeColor:16732754},{x:26,z:4.8,rot:-.15,stripeColor:16758605}],e=new st({color:7228978,flatShading:!0}),n=new st({color:15724006,flatShading:!0}),s=new st({color:10387540,flatShading:!0});t.forEach((r,a)=>{const o=this.getGroundHeight(r.x,r.z),c=new Ct;c.position.set(r.x,o,r.z),c.rotation.y=r.rot;const l=new st({color:r.stripeColor,flatShading:!0}),h=new P(new Q(.85,.12,1.95),e);h.position.set(0,.28,0),h.castShadow=!0,h.receiveShadow=!0,c.add(h),[[-.38,-.85],[.38,-.85],[-.38,.85],[.38,.85]].forEach(([C,M])=>{const x=new P(new at(.04,.04,.28,4),e);x.position.set(C,.14,M),x.castShadow=!0,c.add(x)});const f=new P(new Q(.78,.1,1.25),n);f.position.set(0,.38,-.2),f.castShadow=!0,c.add(f);for(let C=0;C<3;C++){const M=new P(new Q(.79,.105,.18),l);M.position.set(0,.38,-.6+C*.4),c.add(M)}const u=new Ct;u.position.set(0,.38,.45),u.rotation.x=.55;const m=new P(new Q(.78,.1,.75),n);m.position.set(0,0,.35),m.castShadow=!0,u.add(m);const g=new P(new Q(.79,.105,.25),l);g.position.set(0,0,.35),u.add(g),c.add(u);const _=.75,p=.15,d=new P(new Q(.48,.38,.48),e);d.position.set(_,.19,p),d.castShadow=!0,d.receiveShadow=!0,c.add(d);const w=new P(new De(.09,6,6),new st({color:4861981,flatShading:!0}));w.position.set(_,.45,p),c.add(w);const E=new P(new at(.01,.01,.22,4),new Ut({color:r.stripeColor}));E.position.set(_+.02,.53,p),E.rotation.z=.2,c.add(E);const v=new Ct;v.position.set(_+.35,0,p-.5),v.rotation.z=.12,v.rotation.x=-.08;const D=new P(new at(.04,.05,2.4,5),s);D.position.y=1.2,D.castShadow=!0,v.add(D);const A=new P(new be(1.35,.55,8),l);A.position.y=2.4,A.castShadow=!0,v.add(A);const R=new P(new be(1.37,.57,8,1,!1,0,Math.PI),n);if(R.position.y=2.4,v.add(R),c.add(v),this.loungersGroup.add(c),this.collisionWorld){this.collisionWorld.addRotatedBox(r.x,r.z,o+.25,.5,1.05,.2,r.rot,!0,"beach_lounger");const C=r.x+(_+.35)*Math.cos(r.rot)-(p-.5)*Math.sin(r.rot),M=r.z+(_+.35)*Math.sin(r.rot)+(p-.5)*Math.cos(r.rot);this.collisionWorld.addCylinder(C,M,o,o+2.4,.1,!1,"umbrella_pole")}}),this.scene.add(this.loungersGroup)}_buildDanceArea(){this.danceGroup=new Ct;const t=0,e=22,n=this.getIslandElevation(t,e);this.danceGroup.position.set(t,n,e);const s=new st({color:1579556,flatShading:!0}),r=new Ie({color:2238003,metalness:.85,roughness:.3,flatShading:!0}),a=new Ie({color:14211301,metalness:.9,roughness:.1,flatShading:!0}),o=new Ie({color:987415,roughness:.35,metalness:.35,flatShading:!0}),c=new st({color:1184796,flatShading:!0}),l=new st({color:2106416,flatShading:!0}),h=new Ie({color:9081510,metalness:.85,roughness:.35,flatShading:!0}),f=new P(new Q(8.8,.22,8.8),s);f.position.y=.11,f.receiveShadow=!0,this.danceGroup.add(f),this.danceTiles=[];const u=[1448235,58879,1448235,16711807,1448235,7940298,1448235,16755200],m=.96,g=3.5;for(let T=0;T<8;T++)for(let I=0;I<8;I++){const U=(T+I)%2===1,G=U?u[(T*3+I)%u.length]:1448235,X=U?new Ut({color:G}):new st({color:G,flatShading:!0}),z=new P(new Q(m,.05,m),X),Y=(I-g)*1.02,H=(T-g)*1.02;z.position.set(Y,.23,H),z.receiveShadow=!0,this.danceGroup.add(z),U&&this.danceTiles.push({mesh:z,baseColor:G,distFromCenter:Math.hypot(Y,H),phase:(T+I)*.4})}const _=new P(new Q(3.6,.3,1.8),s);_.position.set(0,.25,3.4),_.castShadow=!0,_.receiveShadow=!0,this.danceGroup.add(_);const p=new P(new Q(2.6,.95,.85),r);p.position.set(0,.85,3.4),p.castShadow=!0,this.danceGroup.add(p);const d=new P(new Q(2.4,.45,.05),new Ut({color:58879}));d.position.set(0,.85,2.95),this.danceGroup.add(d);const w=new P(new Q(2,.25,.07),new Ut({color:16711807}));w.position.set(0,.85,2.96),this.danceGroup.add(w),[-.7,.7].forEach((T,I)=>{const U=new P(new Q(.55,.06,.48),s);U.position.set(T,1.36,3.4),this.danceGroup.add(U);const G=new P(new at(.2,.2,.02,12),a);G.position.set(T-.02,1.4,3.4),this.danceGroup.add(G);const X=new P(new at(.18,.18,.025,12),o);X.position.set(T-.02,1.415,3.4),this.danceGroup.add(X);const z=new P(new at(.06,.06,.03,8),new Ut({color:I===0?16711807:58879}));z.position.set(T-.02,1.42,3.4),this.danceGroup.add(z);const Y=new P(new at(.008,.008,.22,4),a);Y.position.set(T+.15,1.43,3.32),Y.rotation.z=Math.PI/4,Y.rotation.y=.3,this.danceGroup.add(Y)});const E=new P(new Q(.42,.08,.5),s);E.position.set(0,1.37,3.4),this.danceGroup.add(E),[-.06,.06].forEach(T=>{const I=new P(new Q(.02,.015,.24),new Ut({color:3800852}));I.position.set(T,1.42,3.4),this.danceGroup.add(I)});const v=new P(new xs(.12,.02,6,12,Math.PI),a);v.position.set(.15,1.43,3.55),v.rotation.x=Math.PI/2,this.danceGroup.add(v),[-3.8,3.8].forEach(T=>{const I=new Ct;I.position.set(T,0,3.2);const U=new P(new Q(1.2,1.1,.95),c);U.position.y=.55,U.castShadow=!0,I.add(U),[-.26,.26].forEach(Y=>{const H=new P(new at(.22,.12,.06,8),l);H.rotation.x=Math.PI/2,H.position.set(0,.55+Y,-.48),I.add(H)});const G=new P(new Q(1,1.1,.8),c);G.position.y=1.65,G.castShadow=!0,I.add(G);const X=new P(new at(.18,.08,.06,8),l);X.rotation.x=Math.PI/2,X.position.set(0,1.5,-.41),I.add(X);const z=new P(new be(.24,.35,4),l);z.rotation.x=-Math.PI/2,z.position.set(0,1.9,-.41),I.add(z),this.danceGroup.add(I)});const D=[[-4,3.6],[4,3.6],[-4,-3.6],[4,-3.6]];D.forEach(([T,I])=>{const U=new P(new at(.08,.08,4.2,4),h);U.position.set(T,2.1,I),U.castShadow=!0,this.danceGroup.add(U)});const A=new P(new Q(8.2,.16,.16),h);A.position.set(0,4.2,3.6),this.danceGroup.add(A);const R=new P(new Q(8.2,.16,.16),h);R.position.set(0,4.2,-3.6),this.danceGroup.add(R),this.stageSpots=[];const C=[58879,16711807,16771584,7940298];[-2.8,-1,1,2.8].forEach((T,I)=>{const U=new P(new at(.1,.14,.35,6),s);U.position.set(T,4.05,3.5),U.rotation.x=.6,U.rotation.y=(I-1.5)*.25,this.danceGroup.add(U);const G=new P(new _i(.12,6),new Ut({color:C[I]}));G.position.set(0,-.18,0),G.rotation.x=Math.PI/2,U.add(G);const X=new Gr(C[I],3,14,Math.PI/6,.4,1.2);X.position.set(T,4,3.5);const z=new de;z.position.set(T*.4,.2,0),this.danceGroup.add(z),X.target=z,this.danceGroup.add(X),this.stageSpots.push({can:U,spotLight:X,target:z,baseAngle:I*1.5})});const M=new Te(58879,1.8,12,1.6);M.position.set(-2,2.8,0),this.danceGroup.add(M);const x=new Te(16711807,1.8,12,1.6);x.position.set(2,2.8,0),this.danceGroup.add(x),this.scene.add(this.danceGroup),this.collisionWorld&&(this.collisionWorld.addBox(t-4.4,t+4.4,e-4.4,e+4.4,n,n+.25,!0,"dance_floor"),this.collisionWorld.addBox(t-1.35,t+1.35,e+2.9,e+3.85,n,n+1.35,!0,"dj_booth"),this.collisionWorld.addBox(t-4.4,t-3.2,e+2.7,e+3.7,n,n+2.4,!0,"speaker_left"),this.collisionWorld.addBox(t+3.2,t+4.4,e+2.7,e+3.7,n,n+2.4,!0,"speaker_right"),D.forEach(([T,I])=>{this.collisionWorld.addCylinder(t+T,e+I,n,n+4.2,.16,!1,"truss_pillar")}))}_buildJetSkis(){this.jetSkis=[];const t=[{x:8.5,z:1.5,rot:.35,hullColor:58879,stripeColor:16722554,name:"WAVERUNNER 750 // TEAL"},{x:-8.5,z:1.5,rot:-.35,hullColor:16771584,stripeColor:10233776,name:"WAVERUNNER 750 // SOLAR"},{x:18.5,z:3.5,rot:.15,hullColor:58998,stripeColor:16739584,name:"WAVERUNNER 750 // LIME"}],e=new st({color:1579556,flatShading:!0}),n=new Ie({color:13421772,metalness:.8,roughness:.2,flatShading:!0}),s=new st({color:658448,flatShading:!0});t.forEach((r,a)=>{const o=new Ct;o.position.set(r.x,.15,r.z),o.rotation.y=r.rot;const c=new st({color:r.hullColor,flatShading:!0}),l=new st({color:r.stripeColor,flatShading:!0}),h=new Q(.85,.32,2.1),f=new P(h,c);f.position.y=.16,f.castShadow=!0,o.add(f);const u=new P(new be(.48,.75,4),c);u.position.set(0,.22,-1.25),u.rotation.x=-Math.PI/2,u.rotation.y=Math.PI/4,u.scale.set(.9,1,.45),u.castShadow=!0,o.add(u);const m=new P(new Q(.78,.22,1.4),l);m.position.set(0,.38,-.2),o.add(m);const g=new P(new Q(.44,.18,1.15),e);g.position.set(0,.52,.15),g.castShadow=!0,o.add(g);const _=new P(new at(.03,.04,.38,4),s);_.position.set(0,.58,-.58),_.rotation.x=-.35,o.add(_);const p=new P(new at(.02,.02,.52,5),n);p.position.set(0,.72,-.65),p.rotation.z=Math.PI/2,o.add(p),[-.24,.24].forEach(v=>{const D=new P(new at(.028,.028,.14,5),s);D.position.set(v,.72,-.65),D.rotation.z=Math.PI/2,o.add(D)});const d=new P(new Q(.18,.02,.12),new Ut({color:5107434}));d.position.set(0,.62,-.52),d.rotation.x=.5,o.add(d);const w=new P(new at(.08,.1,.25,6),s);w.position.set(0,.12,1.15),w.rotation.x=Math.PI/2,o.add(w);const E=new P(new at(.06,.08,.7,5),new st({color:4862492,flatShading:!0}));E.position.set(r.x+Math.sin(r.rot)*1.5,this.getGroundHeight(r.x,r.z+1.6)+.25,r.z+Math.cos(r.rot)*1.5+.6),E.castShadow=!0,this.scene.add(E),this.scene.add(o),this.jetSkis.push({group:o,baseY:.15,baseRotY:r.rot,phase:a*1.8}),this.collisionWorld&&this.collisionWorld.addRotatedBox(r.x,r.z,.35,.5,1.15,.3,r.rot,!0,"jet_ski")})}_buildWindingPath(){this.trailGroup=new Ct;const t=[[2,12],[6,18],[11,26],[16,34],[22,42],[28,50],[36,57],[42,63],[48,68]],e=new st({color:5913892,flatShading:!0}),n=new st({color:7234933,flatShading:!0}),s=new st({color:4665372,flatShading:!0}),r=new Ut({color:16765578});for(let m=0;m<t.length-1;m++){const[g,_]=t[m],[p,d]=t[m+1],w=Math.hypot(p-g,d-_),E=Math.max(3,Math.round(w/1.7));for(let v=0;v<E;v++){const D=v/E,A=g+D*(p-g),R=_+D*(d-_),C=this.getGroundHeight(A,R),M=Math.atan2(p-g,d-_),x=new P(new Q(1.65,.16,.38),e);if(x.position.set(A,C+.07,R),x.rotation.y=M,x.receiveShadow=!0,x.castShadow=!0,this.trailGroup.add(x),v%2===0){const T=new P(new We(.35,0),n);T.scale.set(1.4,.25,1.2),T.position.set(A+Math.sin(v*3)*.4,C+.05,R+.6),T.receiveShadow=!0,this.trailGroup.add(T)}if(v===0){const T=-(d-_)/w,I=(p-g)/w,U=A+T*1.1,G=R+I*1.1,X=this.getGroundHeight(U,G),z=new P(new at(.06,.07,1.1,5),s);if(z.position.set(U,X+.55,G),z.castShadow=!0,this.trailGroup.add(z),m%2===0){const Y=new P(new Q(.24,.26,.24),r);Y.position.set(U,X+1.2,G),this.trailGroup.add(Y);const H=new Te(16758892,1.1,10,1.8);H.position.set(U,X+1.2,G),this.trailGroup.add(H)}}}}const a=25,o=44,c=this.getGroundHeight(a,o),l=new Ct;l.position.set(a,c,o),l.rotation.y=-1.1;const h=new st({color:7556399,flatShading:!0}),f=new P(new Q(1.8,.12,.55),h);f.position.y=.45,f.castShadow=!0,f.receiveShadow=!0,l.add(f);const u=new P(new Q(1.8,.5,.08),h);u.position.set(0,.8,-.24),u.castShadow=!0,l.add(u),[[-.75,-.18],[.75,-.18],[-.75,.18],[.75,.18]].forEach(([m,g])=>{const _=new P(new Q(.08,.45,.08),s);_.position.set(m,.22,g),_.castShadow=!0,l.add(_)}),this.trailGroup.add(l),this.scene.add(this.trailGroup),this.collisionWorld&&this.collisionWorld.addRotatedBox(a,o,c+.45,.9,.35,.25,-1.1,!0,"trail_bench")}_buildShrubs(){this.shrubsGroup=new Ct;const t=[3957055,4678459,3560517,5664063,4283209],e=[16739201,16765286,12616956,3731325];[[-16,24],[-18,28],[-14,32],[-24,34],[-28,38],[-22,42],[-30,48],[-38,54],[-32,58],[-26,52],[-42,48],[-44,40],[-6,44],[-2,48],[8,48],[4,54],[12,56],[-8,60],[2,68],[14,36],[18,42],[24,36],[28,32],[22,28],[28,24],[14,20],[10,32],[32,46],[38,50],[20,58],[26,62],[-18,70],[-26,66],[-14,82],[14,80],[8,86],[-4,78],[36,70],[40,74],[44,58],[42,52]].forEach(([s,r])=>{const a=this.getGroundHeight(s,r);if(a<1.4||a>20||Math.abs(s)<4.5&&r<14||Math.hypot(s,r-22)<9.5||Math.hypot(s-11,r-14)<9||Math.hypot(s-22,r-5)<8.5||Math.hypot(s- -34,r-30)<10||Math.hypot(s- -36,r-46)<7||Math.hypot(s- -22,r-20)<7||Math.hypot(s- -48,r-16)<9||Math.hypot(s- -6,r-110)<11||Math.hypot(s-48,r-68)<10||this._distanceToTrail(s,r)<1.9)return;const o=new Ct;o.position.set(s,a,r);const c=2+Math.floor(Math.random()*2),l=new st({color:t[Math.floor(Math.random()*t.length)],flatShading:!0});for(let h=0;h<c;h++){const f=.45+Math.random()*.45,u=new We(f,0),m=new P(u,l),g=h===0?0:(Math.random()-.5)*.7,_=h===0?0:(Math.random()-.5)*.7,p=f*.65;if(m.position.set(g,p,_),m.scale.set(1.15,.75,1.15),m.castShadow=!0,m.receiveShadow=!0,o.add(m),Math.random()>.4){const d=e[Math.floor(Math.random()*e.length)],w=new Ut({color:d});for(let E=0;E<3;E++){const v=new P(new We(.07,0),w);v.position.set(g+(Math.random()-.5)*f*.8,p+f*.6+Math.random()*.1,_+(Math.random()-.5)*f*.8),o.add(v)}}}this.shrubsGroup.add(o)}),this.scene.add(this.shrubsGroup)}_buildStuntRamps(){this.rampsGroup=new Ct;const t=[{x:-28,z:52,rotY:.25,width:3.8,length:6.2,height:2.1,tag:"foothill_stunt_ramp"},{x:-16,z:14,rotY:-.65,width:4,length:6.5,height:2.3,tag:"beach_stunt_ramp"}],e=new st({color:7228978,flatShading:!0}),n=new st({color:4008989,flatShading:!0}),s=new Ut({color:16765440});t.forEach(r=>{const a=this.getGroundHeight(r.x,r.z),o=new Ct;o.position.set(r.x,a,r.z),o.rotation.y=r.rotY;const c=r.width*.5,l=Math.atan2(r.height,r.length),h=Math.hypot(r.length,r.height),f=new Q(r.width,.16,h),u=new P(f,e);u.position.set(0,r.height*.5,r.length*.5),u.rotation.x=l,u.castShadow=!0,u.receiveShadow=!0,o.add(u),[-c-.06,c+.06].forEach(m=>{const g=new P(new Q(.08,.24,h),s);g.position.set(m,r.height*.5+.12,r.length*.5),g.rotation.x=l,o.add(g)}),[-c*.75,c*.75].forEach(m=>{const g=new P(new at(.12,.14,r.height,5),n);g.position.set(m,r.height*.5,r.length-.15),g.castShadow=!0,o.add(g)}),this.rampsGroup.add(o),this.collisionWorld&&this.collisionWorld.addRamp(r.x,r.z,a,c,r.length,r.height,r.rotY,r.tag)}),this.scene.add(this.rampsGroup)}getGroundHeight(t,e,n=null){const s=this.getIslandElevation(t,e);if(!this.collisionWorld)return s;const r=n!==null?n:s;return this.collisionWorld.getSurfaceHeight(t,e,r,s)}resolveCollisions(t,e,n){this.collisionWorld&&this.collisionWorld.resolveHorizontalCollisions(t,e,n)}update(t){if(this.time+=t,this.waterPosAttribute){for(let e=0;e<this.waterPosAttribute.count;e++){const n=this.waterPosAttribute.getX(e),s=this.waterPosAttribute.getZ(e),r=Math.sin(n*.05+this.time*1.6)*.25+Math.cos(s*.04+this.time*1.2)*.2;this.waterPosAttribute.setY(e,this.waterBaseY[e]+r)}this.waterPosAttribute.needsUpdate=!0}if(this.lighthouseTarget){const e=this.time*.7,n=80;this.lighthouseTarget.position.x=Math.sin(e)*n,this.lighthouseTarget.position.z=Math.cos(e)*n}if(this.radioBeaconLight&&this.radioBeaconMat){const e=Math.sin(this.time*3.5)>.45;this.radioBeaconLight.intensity=e?3.8:.3,this.radioBeaconMat.color.setHex(e?16720418:4458504)}if(this.shipGroup&&(this.shipGroup.position.y=Math.sin(this.time*.8)*.22,this.shipGroup.rotation.z=Math.sin(this.time*.5)*.015,this.shipGroup.rotation.x=Math.cos(this.time*.4)*.012,this.shipGroup.position.x+=t*.25,this.shipGroup.position.x>-100&&(this.shipGroup.position.x=-240)),this.campfireFlame&&this.campfireLight){const e=.85+Math.sin(this.time*18)*.15+Math.cos(this.time*26)*.1;this.campfireFlame.scale.set(e,.9+Math.sin(this.time*14)*.2,e),this.campfireLight.intensity=1.4*e}if(this.barStringLights&&this.barStringLights.length>0)for(let e=0;e<this.barStringLights.length;e++){const n=.9+Math.sin(this.time*3.2+e*.75)*.14;this.barStringLights[e].scale.set(n,n,n)}if(this.danceTiles&&this.danceTiles.length>0){const e=this.time*2.73*Math.PI*2;this.danceTiles.forEach(n=>{const s=.5+.5*Math.sin(e-n.distFromCenter*.8+n.phase);n.mesh.position.y=.23+s*.025})}this.stageSpots&&this.stageSpots.length>0&&this.stageSpots.forEach(e=>{const n=this.time*1.5+e.baseAngle;e.target.position.x=Math.sin(n)*3.2,e.target.position.z=Math.cos(n*.8)*3,e.can.rotation.y=Math.sin(n)*.45,e.can.rotation.x=.55+Math.cos(n*.7)*.2}),this.jetSkis&&this.jetSkis.length>0&&this.jetSkis.forEach(e=>{const n=Math.sin(this.time*2.2+e.phase)*.07,s=Math.sin(this.time*1.8+e.phase)*.04,r=Math.cos(this.time*1.6+e.phase)*.03;e.group.position.y=e.baseY+n,e.group.rotation.z=s,e.group.rotation.x=r}),this.buoys&&this.buoys.length>0&&this.buoys.forEach((e,n)=>{e.mesh.position.y=Math.sin(this.time*1.6+n*1.8)*.18,e.mesh.rotation.z=Math.sin(this.time*1.2+n*1.5)*.08})}}class up{constructor(){this.container=document.getElementById("game-container"),this.sceneManager=new sp(this.container),this.inputManager=new rp(this.container),this.audioEngine=new op,this.world=new dp(this.sceneManager.scene),this.player=new ap(this.sceneManager.scene),this.cameraController=new cp(this.sceneManager.camera),this.quadBike=new lp(this.sceneManager.scene,-36,46),this.player.position.set(0,2.38,-8),this.player.rotation=Math.PI,this.fpsDisplay=document.getElementById("fps-display"),this.speedBadge=document.getElementById("speed-badge"),this.camBadgeText=document.getElementById("cam-mode-text"),this.camBadge=document.getElementById("cam-badge"),this.arrowModeBtn=document.getElementById("arrow-mode-btn"),this.pointerLockBtn=document.getElementById("pointer-lock-btn"),this.retroResBtn=document.getElementById("retro-res-btn"),this.skyThemeBtn=document.getElementById("sky-theme-btn"),this.actionPrompt=document.getElementById("action-prompt"),this.actionText=document.getElementById("action-text"),this.btnPlay=document.getElementById("btn-play"),this.btnNext=document.getElementById("btn-next"),this.btnPrev=document.getElementById("btn-prev"),this.volSlider=document.getElementById("vol-slider"),this.trackTitle=document.getElementById("track-title"),this.trackArtist=document.getElementById("track-artist"),this.reelLeft=document.getElementById("reel-left"),this.reelRight=document.getElementById("reel-right"),this.vSegments=document.querySelectorAll(".v-segment"),this.clock=new ip,this.frameCount=0,this.lastFpsUpdate=0,this._setupUI(),this._setupControls(),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}_setupControls(){this.inputManager.onCameraToggle=()=>{this.cameraController.toggleMode(this.player),this.camBadgeText.textContent=this.cameraController.getMode()},this.camBadge&&(this.camBadge.style.cursor="pointer",this.camBadge.addEventListener("click",()=>{this.cameraController.toggleMode(this.player),this.camBadgeText.textContent=this.cameraController.getMode()})),this.arrowModeBtn&&this.arrowModeBtn.addEventListener("click",()=>{this.inputManager.toggleArrowMode()}),this.inputManager.onArrowModeToggle=n=>{this.arrowModeBtn&&(n?(this.arrowModeBtn.textContent="ARROWS: CAM LOOK",this.arrowModeBtn.classList.remove("alt-mode")):(this.arrowModeBtn.textContent="ARROWS: MOVE",this.arrowModeBtn.classList.add("alt-mode")))},this.pointerLockBtn&&this.pointerLockBtn.addEventListener("click",()=>{this.inputManager.mouse.isPointerLocked?this.inputManager.exitPointerLock():this.inputManager.requestPointerLock()}),this.inputManager.onPointerLockChange=n=>{this.pointerLockBtn&&(n?(this.pointerLockBtn.textContent="CURSOR LOCKED [ESC]",this.pointerLockBtn.classList.add("alt-mode")):(this.pointerLockBtn.textContent="LOCK CURSOR",this.pointerLockBtn.classList.remove("alt-mode")))},this.retroResBtn&&this.retroResBtn.addEventListener("click",()=>{this.sceneManager.toggleRetroPixelMode()?(this.retroResBtn.textContent="PS1 PIXELS: ON",this.retroResBtn.classList.remove("alt-mode")):(this.retroResBtn.textContent="HD MODE: ON",this.retroResBtn.classList.add("alt-mode"))});const t=document.querySelectorAll(".sunset-opt-btn");t.forEach(n=>{n.addEventListener("click",()=>{const s=n.dataset.theme,r=this.sceneManager.applySkyTheme(s);t.forEach(a=>a.classList.remove("active")),n.classList.add("active"),this._showToast(`🌅 SUNSET: ${r.name} // ${r.vibe.toUpperCase()}`)})});const e=()=>{const n=this.sceneManager.cycleSkyTheme();t.forEach(s=>{s.dataset.theme===n.id?s.classList.add("active"):s.classList.remove("active")}),this._showToast(`🌅 SUNSET: ${n.name} // ${n.vibe.toUpperCase()}`)};this.skyThemeBtn&&this.skyThemeBtn.addEventListener("click",e),this.inputManager.onSkyToggle=e,this.inputManager.onInteract=()=>{if(this.quadBike&&this.quadBike.isRidden){this.quadBike.dismount(this.player,this.world),this._showToast("🛑 DISMOUNTED 4X4 QUAD BIKE");return}const n=this.player.position;if(this.quadBike&&n.distanceTo(this.quadBike.position)<3.8){this.quadBike.mount(this.player),this._showToast("🏁 MOUNTED 4X4 QUAD BIKE // WASD TO DRIVE, SHIFT FOR TURBO!");return}if(n.distanceTo(new L(-3.2,2.38,2.8))<3.2){this._showToast("🥫 DISPENSED ICED COFFEE // ATMOSPHERE +1");return}const s=new L(-48,this.world.getGroundHeight(-48,16),16);if(n.distanceTo(s)<4){this._showToast("💰 DISCOVERED PIRATE TREASURE // GOLD DOUBLOONS & GEMS");return}const r=new L(-34,this.world.getGroundHeight(-34,30),30);if(n.distanceTo(r)<5.5){this._showToast("🏄 CHILLING AT BEACH SHACK // MELLOW VIBES");return}const a=new L(-22,this.world.getGroundHeight(-22,20),20);if(n.distanceTo(a)<3.5){this._showToast("🔥 WARMING HANDS BY THE DRIFTWOOD FIRE");return}const o=new L(-6,this.world.getGroundHeight(-6,110),110);if(n.distanceTo(o)<6){this._showToast("📻 RADIO MAST SUMMIT // RECEIVING 164 BPM SIGNALS");return}const c=new L(48,this.world.getGroundHeight(48,68),68);if(n.distanceTo(c)<5.5){this._showToast("🌅 CLIFFTOP OBSERVATION // PANORAMIC OCEAN VIBES");return}const l=new L(11,this.world.getGroundHeight(11,14),14);if(n.distanceTo(l)<4.2){this._showToast("🍹 ORDERED TROPICAL COCONUT PUNCH // VIBES MAXIMIZED");return}const h=new L(22,this.world.getGroundHeight(22,4.5),4.5);if(n.distanceTo(h)<4.8){this._showToast("🏖️ RELAXING ON SUNSET LOUNGER // GOLDEN SURF VIBES");return}const f=new L(0,this.world.getGroundHeight(0,25.4),25.4);if(n.distanceTo(f)<4.2){const d=this.audioEngine.togglePlay();this._updateWalkmanState(d),this._showToast(d?'🎧 SPUN 12" VINYL // 164 BPM BREAKBEAT DROPPED!':"🎧 PAUSED TURNTABLES // FADING BREAKBEAT");return}const u=new L(8.5,.2,1.5),m=new L(-8.5,.2,1.5),g=new L(18.5,.2,3.5);if(n.distanceTo(u)<3.2||n.distanceTo(m)<3.2||n.distanceTo(g)<3.2){this._showToast("⚡ HIGH-OUTPUT WAVERUNNER 750 // READY FOR OCEAN SWELL");return}const _=new L(25,this.world.getGroundHeight(25,44),44);if(n.distanceTo(_)<4){this._showToast("🪑 RESTING ON CLIFFSIDE BENCH // ENJOYING SCENIC ASCENT");return}const p=new L(0,2.38,-44);if(n.distanceTo(p)<5){this._showToast("🌊 WATCHING WAVES CRASH AGAINST THE REEF");return}}}_setupUI(){this.btnPlay.addEventListener("click",()=>{const t=this.audioEngine.togglePlay();this._updateWalkmanState(t)}),this.btnNext.addEventListener("click",()=>{const t=this.audioEngine.nextTrack();this.trackTitle.textContent=t.title,this.trackArtist.textContent=t.artist,this._updateWalkmanState(this.audioEngine.isPlaying)}),this.btnPrev.addEventListener("click",()=>{const t=this.audioEngine.prevTrack();this.trackTitle.textContent=t.title,this.trackArtist.textContent=t.artist,this._updateWalkmanState(this.audioEngine.isPlaying)}),this.volSlider.addEventListener("input",t=>{this.audioEngine.setVolume(parseFloat(t.target.value))}),this._updateWalkmanState(!1)}_updateWalkmanState(t){t?(this.btnPlay.textContent="⏸ PAUSE",this.reelLeft.classList.add("spinning"),this.reelRight.classList.add("spinning")):(this.btnPlay.textContent="▶ PLAY",this.reelLeft.classList.remove("spinning"),this.reelRight.classList.remove("spinning"))}_showToast(t){this.actionText.textContent=t,this.actionPrompt.classList.remove("hidden"),setTimeout(()=>{this.actionPrompt.classList.add("hidden")},2500)}_checkProximityPrompts(){if(this.quadBike&&this.quadBike.isRidden){this.actionText.textContent="DISMOUNT QUAD BIKE",this.actionPrompt.classList.remove("hidden");return}const t=this.player.position;if(this.quadBike&&t.distanceTo(this.quadBike.position)<3.8){this.actionText.textContent="DRIVE 4X4 QUAD BIKE",this.actionPrompt.classList.remove("hidden");return}const e=new L(-48,this.world.getGroundHeight(-48,16),16);if(t.distanceTo(e)<4){this.actionText.textContent="INSPECT SECRET TREASURE",this.actionPrompt.classList.remove("hidden");return}const n=new L(-34,this.world.getGroundHeight(-34,30),30);if(t.distanceTo(n)<5.5){this.actionText.textContent="RELAX AT BEACH SHACK",this.actionPrompt.classList.remove("hidden");return}const s=new L(-22,this.world.getGroundHeight(-22,20),20);if(t.distanceTo(s)<3.5){this.actionText.textContent="WARM HANDS BY FIRE",this.actionPrompt.classList.remove("hidden");return}const r=new L(-6,this.world.getGroundHeight(-6,110),110);if(t.distanceTo(r)<6){this.actionText.textContent="INSPECT RADIO MAST",this.actionPrompt.classList.remove("hidden");return}if(t.distanceTo(new L(-3.2,2.38,2.8))<3){this.actionText.textContent="BUY CHILLED DRINK",this.actionPrompt.classList.remove("hidden");return}if(t.distanceTo(new L(0,2.38,-44))<5){this.actionText.textContent="ENJOY TWILIGHT HORIZON",this.actionPrompt.classList.remove("hidden");return}const c=new L(48,this.world.getGroundHeight(48,68),68);if(t.distanceTo(c)<5.5){this.actionText.textContent="REST AT CLIFFTOP LOOKOUT",this.actionPrompt.classList.remove("hidden");return}const h=new L(11,this.world.getGroundHeight(11,14),14);if(t.distanceTo(h)<4.2){this.actionText.textContent="ORDER TROPICAL COCKTAIL",this.actionPrompt.classList.remove("hidden");return}const f=new L(22,this.world.getGroundHeight(22,4.5),4.5);if(t.distanceTo(f)<4.8){this.actionText.textContent="CHILL ON BEACH LOUNGER",this.actionPrompt.classList.remove("hidden");return}const u=new L(0,this.world.getGroundHeight(0,25.4),25.4);if(t.distanceTo(u)<4.2){this.actionText.textContent=this.audioEngine.isPlaying?"PAUSE TURNTABLES":"SPIN VINYL // DROP BREAKBEAT",this.actionPrompt.classList.remove("hidden");return}const m=new L(8.5,.2,1.5),g=new L(-8.5,.2,1.5),_=new L(18.5,.2,3.5);if(t.distanceTo(m)<3.2||t.distanceTo(g)<3.2||t.distanceTo(_)<3.2){this.actionText.textContent="INSPECT HIGH-OUTPUT JET SKI",this.actionPrompt.classList.remove("hidden");return}const p=new L(25,this.world.getGroundHeight(25,44),44);if(t.distanceTo(p)<4){this.actionText.textContent="REST ON CLIFFSIDE BENCH",this.actionPrompt.classList.remove("hidden");return}this.actionPrompt.classList.add("hidden")}_updateZoneIndicator(){const t=this.player.position;let e="COASTAL HAVEN // PIER SECTOR";this.quadBike&&this.quadBike.isRidden?e="ALL-TERRAIN EXPLORER // 4X4 QUAD BIKE":t.distanceTo(new L(-36,this.world.getGroundHeight(-36,46),46))<12?e="NORTH FOOTHILLS // ALL-TERRAIN TRAIL":Math.abs(t.x)<5.5&&t.z>=16&&t.z<=28?e="NEON PLAZA // 164 BPM DANCE ARENA":t.distanceTo(new L(11,this.world.getGroundHeight(11,14),14))<8?e="TIKI COVE // SUNSET BEACH BAR":t.distanceTo(new L(22,this.world.getGroundHeight(22,4.5),4.5))<8?e="GOLDEN DUNES // SUNSET LOUNGE":t.z>=-2&&t.z<=5&&Math.abs(t.x)<=22?e="COASTAL SURF // JET SKI MOORING":t.distanceTo(new L(25,this.world.getGroundHeight(25,44),44))<10?e="CLIFFSIDE TRAIL // SCENIC SWITCHBACK":t.x>=2&&t.x<=48&&t.z>=12&&t.z<=68&&t.y>4&&t.y<19?e="CLIFFSIDE TRAIL // SCENIC ASCENT":t.distanceTo(new L(48,this.world.getGroundHeight(48,68),68))<10?e="SUMMIT DECK // PANORAMIC LOOKOUT":t.distanceTo(new L(-48,this.world.getGroundHeight(-48,16),16))<16?e="SMUGGLER'S COVE // X MARKS THE SPOT":t.distanceTo(new L(-34,this.world.getGroundHeight(-34,30),30))<14?e="SURF SHACK // DRIFTWOOD RETREAT":t.distanceTo(new L(-6,this.world.getGroundHeight(-6,110),110))<18?e="NORTH PEAK // BROADCAST TOWER":t.z>=0&&t.z<35&&t.x<-10?e="WEST SHORELINE // DRIFTWOOD BEACH":t.z>=0&&t.z<35?e="SUNSET SHORE // SANDY BEACH COVE":t.z>=35&&t.x>25?e="CRAGGY BLUFFS // EASTERN SEA CLIFFS":t.z>=35&&t.x<=25&&(e="EMERALD RIDGE // PINE FOREST TRAILS");const n=document.getElementById("zone-name");n&&n.textContent!==e&&(n.textContent=e)}_updateVisualizer(){if(!this.audioEngine.isPlaying){this.vSegments.forEach(e=>{e.style.transform="scaleY(0.15)",e.classList.remove("active")});return}const t=this.audioEngine.getVisualizerData();this.vSegments.forEach((e,n)=>{const s=t[n]/255,r=Math.max(.15,s*1);e.style.transform=`scaleY(${r})`,s>.45?e.classList.add("active"):e.classList.remove("active")})}animate(){requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.1),e=performance.now();if(this.inputManager.update(t),this.player.update(t,this.inputManager,this.inputManager.mouse.yaw,this.world),this.quadBike&&this.quadBike.update(t,this.inputManager,this.world,this.player),this.cameraController.update(t,this.player,this.inputManager),this.world.update(t),this._updateVisualizer(),this._checkProximityPrompts(),this._updateZoneIndicator(),this.speedBadge)if(this.quadBike&&this.quadBike.isRidden){const n=Math.round(Math.abs(this.quadBike.speed)),s=this.inputManager.keys.ShiftLeft||this.inputManager.keys.ShiftRight;this.quadBike.isGrounded?s&&n>15?(this.speedBadge.textContent=`🔥 NITRO ${n} M/S`,this.speedBadge.className="speed-badge nitro"):n>0?(this.speedBadge.textContent=`QUAD 4X4: ${n} M/S`,this.speedBadge.className="speed-badge run"):(this.speedBadge.textContent="QUAD: IDLE",this.speedBadge.className="speed-badge"):(this.speedBadge.textContent=`✈️ AIRTIME ${n} M/S`,this.speedBadge.className="speed-badge airtime")}else{const n=this.player.moveState;n==="ZOOM"?(this.speedBadge.textContent="⚡ ZOOM 24 M/S",this.speedBadge.className="speed-badge zoom"):n==="RUN"?(this.speedBadge.textContent="RUN 14 M/S",this.speedBadge.className="speed-badge run"):(this.speedBadge.textContent=this.player.isMoving?"WALK 7 M/S":"IDLE",this.speedBadge.className="speed-badge")}if(this.sceneManager.render(),this.frameCount++,e-this.lastFpsUpdate>=1e3){const n=Math.round(this.frameCount*1e3/(e-this.lastFpsUpdate));this.fpsDisplay&&(this.fpsDisplay.textContent=`${n} FPS`),this.frameCount=0,this.lastFpsUpdate=e}}}window.addEventListener("DOMContentLoaded",()=>{new up});
