(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{11:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),i=a.n(o),c=(a(16),a(10)),s=a(1),l=a(6),u=a.n(l);var m=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{src:u.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__logo"}))},d=r.a.createContext();var p=function(e){var t=e.card,a=e.onClick,n=e.onLikeClick,o=e.onCardDelete,i=r.a.useContext(d),c=t.owner._id===i._id,s=t.likes.some((function(e){return e._id===i._id})),l="card__remove-button ".concat(c?"card__remove-button_active":""," link-translucence"),u="card__like-button ".concat(s?"card__like-button_active":""," link-translucence");return r.a.createElement("li",{className:"card"},r.a.createElement("div",{className:"card__container"},r.a.createElement("div",{className:"card__image-container"},r.a.createElement("img",{className:"card__image",src:t.link,onClick:function(){a(t)}})),r.a.createElement("button",{className:l,onClick:function(){o(t)}}),r.a.createElement("h3",{className:"card__title"},t.name),r.a.createElement("button",{className:u,onClick:function(){n(t)}}),r.a.createElement("p",{className:"card__like-score"},t.likes.length)))},f=a(7),_=a.n(f);var h=function(e){var t=e.cards,a=e.onEditAvatar,n=e.onEditProfile,o=e.onAddPlace,i=e.onCardClick,c=e.onCardLike,s=e.onCardDelete,l=r.a.useContext(d);return r.a.createElement("main",{className:"content"},r.a.createElement("section",{id:"profile",className:"lead"},r.a.createElement("figure",{className:"profile"},r.a.createElement("div",{className:"profile__avatar-continer"},r.a.createElement("img",{src:l.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar-image"}),r.a.createElement("button",{className:"profile__avatar-button",onClick:a},r.a.createElement("img",{src:_.a,alt:"",className:"profile__avatar-button-img"}))),r.a.createElement("figcaption",{className:"profile__info"},r.a.createElement("h1",{className:"profile__title"},l.name),r.a.createElement("p",{className:"profile__subtitle"},l.about),r.a.createElement("button",{className:"profile__edit-button link-translucence",onClick:n}))),r.a.createElement("button",{className:"add-button link-translucence",onClick:o})),r.a.createElement("section",{className:"cards"},r.a.createElement("ul",{className:"cards__list"},t.map((function(e){return r.a.createElement(p,{card:e,key:e._id,onClick:i,onLikeClick:c,onCardDelete:s})})))))};var b=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var E=function(e){var t=e.name,a=e.title,n=e.submitText,o=e.submitWaitText,i=e.isOpen,c=e.onSubmit,s=e.onClose,l=e.children;return r.a.createElement("section",{id:"".concat(t,"Popup"),className:"popup popup_transparency-norm ".concat(i?"popup_opened":"")},r.a.createElement("form",{action:"#",name:t,className:"form",onSubmit:c,noValidate:!0},r.a.createElement("button",{type:"reset",className:"popup__close-button link-translucence",onClick:s}),r.a.createElement("label",{className:"form__label"},a),l,r.a.createElement("button",{type:"submit",className:"form__submit form__submit_nonactive link-translucence"},r.a.createElement("span",{id:"submitText",className:"form__submit-text"},n),r.a.createElement("span",{id:"submitWaitText",className:"form__submit-text form__submit-text_hide"},o))))};var v=function(e){var t=e.isOpen,a=e.onUpdateUser,n=e.onClose,o=r.a.useContext(d),i=r.a.useState(""),c=Object(s.a)(i,2),l=c[0],u=c[1],m=r.a.useState(""),p=Object(s.a)(m,2),f=p[0],_=p[1];return r.a.useEffect((function(){u(o.name),_(o.about)}),[o]),r.a.createElement(E,{name:"editProfile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submitText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",submitWaitText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...",isOpen:t,onSubmit:function(e){e.preventDefault(),a({name:l,about:f})},onClose:n},r.a.createElement("input",{type:"text",placeholder:"\u0418\u043c\u044f",name:"name",id:"profile-name-input",className:"form__input",value:l||"",onChange:function(e){u(e.target.value)},minLength:"2",maxLength:"40",required:!0}),r.a.createElement("span",{id:"profile-name-input-error",className:"form__input-error"}),r.a.createElement("input",{type:"text",placeholder:"\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0430",name:"about",id:"profile-description-input",className:"form__input",value:f||"",onChange:function(e){_(e.target.value)},minLength:"2",maxLength:"200",required:!0}),r.a.createElement("span",{id:"profile-description-input-error",className:"form__input-error"}))};var g=function(e){var t=e.isOpen,a=e.onUpdateAvatar,n=e.onClose,o=r.a.useRef();return r.a.createElement(E,{name:"editProfileAvatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",submitText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",submitWaitText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...",isOpen:t,onSubmit:function(e){e.preventDefault(),a({avatar:o.current.value})},onClose:n},r.a.createElement("input",{type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",name:"avatar",id:"avatar-link-input",className:"form__input",ref:o,required:!0}),r.a.createElement("span",{id:"avatar-link-input-error",className:"form__input-error"}))};var k=function(e){var t=e.isOpen,a=e.onAdd,n=e.onClose,o=r.a.useState(""),i=Object(s.a)(o,2),c=i[0],l=i[1],u=r.a.useState(""),m=Object(s.a)(u,2),d=m[0],p=m[1];return r.a.createElement(E,{name:"addCard",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submitText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",submitWaitText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...",isOpen:t,onSubmit:function(e){e.preventDefault(),a({name:c,link:d})},onClose:n},r.a.createElement("input",{type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",id:"card-name-input",className:"form__input",value:c,onChange:function(e){l(e.target.value)},minLength:"1",maxLength:"30",required:!0}),r.a.createElement("span",{id:"card-name-input-error",className:"form__input-error"}),r.a.createElement("input",{type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",name:"link",id:"card-link-input",className:"form__input",value:d,onChange:function(e){p(e.target.value)},required:!0}),r.a.createElement("span",{id:"card-link-input-error",className:"form__input-error"}))};var C=function(e){var t=e.card,a=e.onClose;return r.a.createElement("section",{id:"imagePopup",className:"popup popup_transparency-hard popup_opened"},r.a.createElement("figure",{className:"image-popup"},r.a.createElement("button",{className:"popup__close-button link-translucence",onClick:a}),r.a.createElement("img",{className:"image-popup__image",src:t.link}),r.a.createElement("figcaption",{className:"image-popup__title"},t.name)))},N=a(8),y=a(9),x=new(function(){function e(t){Object(N.a)(this,e),this.options=t}return Object(y.a)(e,[{key:"_sendQuery",value:function(e,t){return fetch(e,t).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getInitialCards",value:function(){return this._sendQuery("".concat(this.options.baseUrl,"/cards"),{method:"GET",headers:this.options.headers})}},{key:"setCard",value:function(e){return this._sendQuery("".concat(this.options.baseUrl,"/cards"),{method:"POST",headers:this.options.headers,body:JSON.stringify(e)})}},{key:"deleteCard",value:function(e){return this._sendQuery("".concat(this.options.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.options.headers})}},{key:"changeLikeCardStatus",value:function(e,t){return this._sendQuery("".concat(this.options.baseUrl,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:this.options.headers})}},{key:"getUserInfo",value:function(){return this._sendQuery("".concat(this.options.baseUrl,"/users/me"),{method:"GET",headers:this.options.headers})}},{key:"setUserInfo",value:function(e){return this._sendQuery("".concat(this.options.baseUrl,"/users/me"),{method:"PATCH",headers:this.options.headers,body:JSON.stringify(e)})}},{key:"setUserAvatar",value:function(e){return this._sendQuery("".concat(this.options.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.options.headers,body:JSON.stringify(e)})}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-15",headers:{authorization:"c791e527-e4b7-4175-8eba-6e62f06389ee","Content-Type":"application/json"}});var O=function(){var e=r.a.useState(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],o=r.a.useState(!1),i=Object(s.a)(o,2),l=i[0],u=i[1],p=r.a.useState(!1),f=Object(s.a)(p,2),_=f[0],N=f[1],y=r.a.useState(null),O=Object(s.a)(y,2),S=O[0],T=O[1],U=r.a.useState([]),j=Object(s.a)(U,2),P=j[0],L=j[1],A=r.a.useState([]),w=Object(s.a)(A,2),D=w[0],Q=w[1];function W(){n(!1),u(!1),N(!1),T(null)}return r.a.useEffect((function(){Promise.all([x.getUserInfo(),x.getInitialCards()]).then((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];Q(a),L(n)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement("div",{className:"page"},r.a.createElement(d.Provider,{value:D},r.a.createElement(m,null),r.a.createElement(h,{cards:P,onEditAvatar:function(){n(!0)},onEditProfile:function(){u(!0)},onAddPlace:function(){N(!0)},onCardClick:function(e){T(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===D._id}));x.changeLikeCardStatus(e._id,!t).then((function(t){var a=P.map((function(a){return a._id===e._id?t:a}));L(a)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){x.deleteCard(e._id).then((function(){var t=P.filter((function(t){return t._id!==e._id}));L(t)})).catch((function(e){console.log(e)}))}}),r.a.createElement(b,null),r.a.createElement(v,{isOpen:l,onUpdateUser:function(e){x.setUserInfo(e).then((function(e){Q(e)})).catch((function(e){console.log(e)}))},onClose:W}),r.a.createElement(g,{isOpen:a,onUpdateAvatar:function(e){x.setUserAvatar(e).then((function(e){Q(e)})).catch((function(e){console.log(e)}))},onClose:W}),r.a.createElement(k,{isOpen:_,onAdd:function(e){x.setCard(e).then((function(e){L([].concat(Object(c.a)(P),[e]))})).catch((function(e){console.log(e)}))},onClose:W}),r.a.createElement(E,{name:"deleteCard",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",submitText:"\u0414\u0430",submitWaitText:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435..."}),S&&r.a.createElement(C,{card:S,onClose:W})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a.p+"static/media/logo.c6f11019.svg"},7:function(e,t,a){e.exports=a.p+"static/media/icon_pen.6bfdb354.svg"}},[[11,1,2]]]);
//# sourceMappingURL=main.43766cd9.chunk.js.map