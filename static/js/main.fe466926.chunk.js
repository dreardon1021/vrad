(this.webpackJsonpvrad=this.webpackJsonpvrad||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/marker.1fb36206.png"},,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/denver-background.75626fae.jpg"},function(e,t,a){e.exports=a.p+"static/media/left.ecdc2137.png"},function(e,t,a){e.exports=a.p+"static/media/right.203b0311.png"},function(e,t,a){e.exports=a(62)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(14),r=a.n(s),l=(a(35),a(3)),o=a(4),c=a(6),m=a(7),d=(a(36),a(37),a(5)),u=a(16),g=a.n(u),h=function(e){return i.a.createElement("nav",null,i.a.createElement("div",{className:"logo-nav"},i.a.createElement("img",{className:"nav-marker",src:g.a,alt:""}),i.a.createElement("h2",{className:"nav-title"},"VRAD")),e.userinfo.name&&i.a.createElement("div",{className:"logged-in-elements"},i.a.createElement("div",{className:"greeting-btn-container"},i.a.createElement("h2",{className:"greeting"},"Hello, ",e.userinfo.name),i.a.createElement("div",{className:"trip-type"},"Trip type: ",e.userinfo.visitReason)),i.a.createElement("div",{className:"nav-btn-container fav-btn"},i.a.createElement(d.b,{to:"/favorites",className:"nav-btn"},"Favorites (",e.userinfo.favorites.length,")")),i.a.createElement("div",{onClick:function(t){return e.logOutUser(t)},className:"nav-btn-container"},i.a.createElement(d.b,{to:"/",className:"nav-btn"},"Log out"))))},f=a(26),v=(a(42),a(27)),p=a.n(v),E=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){var n;e.logInUser;return Object(l.a)(this,a),(n=t.call(this)).updateFormState=function(e){var t=e.target,a=t.name,i=t.value;n.setState(Object(f.a)({},a,i),n.checkField(a,i))},n.checkField=function(e,t){var a=n.state.nameValid,i=n.state.emailValid,s=n.state.reasonValid;switch(e){case"username":a=/[A-Za-z]/i.test(t);break;case"email":i=/\S+@\S+\.\S+/.test(String(t).toLowerCase());break;case"visitReason":s=/[^("")]/.test(t)}n.setState({nameValid:a,emailValid:i,reasonValid:s},n.validateForm)},n.validateForm=function(){n.setState({formValid:n.state.nameValid&&n.state.emailValid&&n.state.reasonValid})},n.throwErrorMessage=function(){return n.state.nameValid?n.state.emailValid?n.state.reasonValid?void 0:"Please enter a reason for your visit":"Please enter a valid email address":"Please enter a valid name"},n.submitLogin=function(e){e.preventDefault();var t={name:n.state.username,email:n.state.email,visitReason:n.state.visitReason,favorites:[]};n.state.formValid?n.props.logInUser(t):n.setState({loginFailed:!0})},n.state={username:"",email:"",visitReason:"",nameValid:!1,emailValid:!1,reasonValid:!1,formValid:!1,loginFailed:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state.formValid?i.a.createElement(d.c,{className:"login-button",to:"/areas",role:"button"},"Login"):i.a.createElement("button",{className:"login-button"},"Login"),a=this.throwErrorMessage();return i.a.createElement("section",{className:"login-background"},i.a.createElement("div",{className:"form-container"},i.a.createElement("form",{"data-testid":"form"},i.a.createElement("div",{className:"header-container"},i.a.createElement("div",{className:"logo-container"},i.a.createElement("img",{className:"marker",src:g.a,alt:""}),i.a.createElement("h2",{"data-testid":"header",className:"login-header"},"VRAD")),i.a.createElement("h3",{className:"slogan"},"Vacation Rentals Around Denver")),i.a.createElement("p",{className:"error-message"},this.state.loginFailed?a:""),i.a.createElement("div",{className:"inputs-container"},i.a.createElement("input",{className:"name-input",name:"username",placeholder:"Name",type:"text",value:this.state.username,onChange:function(t){return e.updateFormState(t)}}),i.a.createElement("input",{name:"email",placeholder:"Email",type:"email",value:this.state.email,onChange:function(t){return e.updateFormState(t)}})),i.a.createElement("select",{"data-testid":"select",name:"visitReason",value:this.state.visitReason,onChange:function(t){return e.updateFormState(t)}},i.a.createElement("option",{value:""},"Reason for visit"),i.a.createElement("option",{value:"business"},"Business"),i.a.createElement("option",{value:"vacation"},"Vacation"),i.a.createElement("option",{value:"other"},"Other")),i.a.createElement("div",{className:"login-button-container",onClick:function(t){return e.submitLogin(t)}},t))),i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{className:"hero-img",src:p.a,alt:""})))}}]),a}(n.Component),b=(a(43),a(44),function(e){var t=e.about,a=e.id,n=e.shortName,s=(e.longName,e.chooseNeighborhood,n.replace(/\s/g,"")),r="../images/neighborhoods/".concat(s,".jpg");return i.a.createElement("article",{id:a},i.a.createElement("div",{className:"article-inner"},i.a.createElement("div",{className:"title-image-description-container"},i.a.createElement("div",{className:"title-subtitle-container"},i.a.createElement("h3",{className:"area-title"},n)),i.a.createElement("img",{className:"neighborhood-image",src:r,alt:""}),i.a.createElement("div",{className:"area-card-info"},i.a.createElement("p",{className:"about"},t))),i.a.createElement("div",{name:a,className:"view-listings-button-container"},i.a.createElement(d.c,{to:"/areas/"+a+"/listings",className:"view-listings-button",name:a,role:"button","data-testid":a},"View Listings"))))}),N=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={selectedArea:""},n}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("section",{"data-testid":"card-container",className:"areas-card-container"},this.props.areas.map((function(e){return i.a.createElement(b,{"data-testid":"card",about:e.about,id:e.id,key:e.id,shortName:e.area,longName:e.name})})))}}]),a}(n.Component),I=(a(45),a(46),function(e){return i.a.createElement("div",{"data-testid":"listing-card",className:e.highlighted?"card highlighted":"card"},i.a.createElement("div",{className:"property-title"},i.a.createElement("h3",{className:"property-title-text"},e.name)),i.a.createElement("div",{className:"image-btn"},i.a.createElement("img",{src:"../../../images/"+e.listing_id+"_a.jpg",className:"listings-page-img",alt:e.name}),i.a.createElement("div",{className:"btns-container"},i.a.createElement(d.b,{to:"/areas/"+e.area_id+"/listings/"+e.listing_id,className:"listings-btn","data-testid":e.listing_id},"View"),i.a.createElement("div",{"data-testid":"favorite-btn",className:"listing-heart-container",onClick:function(t){return e.addDeleteFavorite(e.listing_id)}},i.a.createElement("i",{className:e.favorite?"fas fa-heart listing-heart listing-heart-active fa-2x":"fas fa-heart listing-heart listing-heart-inactive fa-2x"})))))}),k=a(15),j=(a(59),{}),_=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onMarkerClicked=function(e,t,a){n.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0}),n.props.highlightListing(n.state.selectedPlace.listing_id)},n.onMapClicked=function(e){n.state.showingInfoWindow&&(n.setState({showingInfoWindow:!1,activeMarker:null,selectedPlace:""}),n.props.highlightListing(n.state.selectedPlace.listing_id))},n.state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},n}return Object(o.a)(a,[{key:"render",value:function(){for(var e=this,t=this.props.listings.map((function(e){return{lat:+e.lat,lng:+e.lng}})),a=new this.props.google.maps.LatLngBounds,n=0;n<t.length;n++)a.extend(t[n]);return i.a.createElement(k.Map,{google:this.props.google,style:j,initialCenter:{lat:39.742043,lng:-104.991531},zoom:12,onClick:this.onMapClicked,bounds:a,disableDefaultUI:!0,styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}]},this.props.listings.map((function(t){return i.a.createElement(k.Marker,{position:{lat:+t.lat,lng:+t.lng},name:t.name,listing_id:t.listing_id,area_id:t.area_id,onMouseover:e.onMarkerMouseOver,onMouseout:e.onMouseOutMarker,onClick:e.onMarkerClicked,cost:t.details.cost_per_night,key:t.listing_id})})),i.a.createElement(k.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow},i.a.createElement("div",{"data-testid":"listing-card",className:"card-map"},i.a.createElement("h3",null,this.state.selectedPlace.name,", $",this.state.selectedPlace.cost))))}}]),a}(n.Component),O=Object(k.GoogleApiWrapper)({apiKey:"AIzaSyCbZxS2j8ev6oMQWLdmJn6s77uKuD7yeLQ"})(_),y=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).highlightListing=function(e){n.setState({highlightedListing:e})},n.getLatLong=function(e){var t=e.map((function(e){return fetch("https://nominatim.openstreetmap.org/?addressdetails=1&q=".concat(e.address.street.split(" ").join("+"),"+").concat(e.address.zip,"&format=json&limit=1")).then((function(e){return e.json()})).then((function(t){return{listing_id:e.listing_id,area_id:e.area_id,name:e.name,lat:t[0].lat,lng:t[0].lon,address:e.address,details:e.details}})).catch((function(e){return console.log(e)}))}));Promise.all(t).then((function(e){return n.setState({listingsToMap:e})}))},n.state={listingsToMap:[],highlightedListing:{}},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getLatLong(this.props.listingsData)}},{key:"render",value:function(){var e=this;return i.a.createElement("section",{"data-testid":"listing-container",className:"listings-card-container"}," ",i.a.createElement("h2",{className:"listings-header"},this.props.pathname.includes("/favorites")?"Favorites":""),0===this.props.favorites.length&&"/favorites"===this.props.pathname?i.a.createElement("div",{class:"no-favorites"},i.a.createElement("h3",null,"You have no favorites!")):"",i.a.createElement("div",{className:"listings-container-inner"},"/favorites"!==this.props.pathname?i.a.createElement("div",{className:" card-map-container"},i.a.createElement(O,{listings:this.state.listingsToMap,highlightListing:this.highlightListing})):"",i.a.createElement("div",{className:"listing-tiles"},this.props.listingsData.map((function(t){return i.a.createElement(I,{highlighted:e.state.highlightedListing===t.listing_id,name:t.name,listing_id:t.listing_id,area_id:e.props.area_id,key:t.listing_id,favorite:e.props.favorites.includes(t.listing_id),addDeleteFavorite:e.props.addDeleteFavorite})})))))}}]),a}(n.Component),w=(a(60),a(61),a(28)),C=a.n(w),L=a(29),F=a.n(L),D=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={currentImageIndex:0},n}return Object(o.a)(a,[{key:"mod",value:function(e,t){return(e%t+t)%t}},{key:"changeImage",value:function(e){var t="right"===e.target.name?this.mod(this.state.currentImageIndex+1,3):this.mod(this.state.currentImageIndex-1,3);this.setState({currentImageIndex:t})}},{key:"render",value:function(){var e=this,t=["A","B","C"];return i.a.createElement("section",{className:"carousel"},i.a.createElement("img",{src:"../../../images/"+this.props.listing_id+"_"+t[this.state.currentImageIndex]+".jpg",className:"details-img",alt:this.props.listing_id+"_"+t[this.state.currentImageIndex]}),i.a.createElement("div",{className:"carousel-control"},i.a.createElement("div",{className:"carousel-back",onClick:function(t){return e.changeImage(t)}},i.a.createElement("img",{src:C.a,alt:"left-arrow",className:"control-item",name:"left",onClick:function(t){return e.changeImage(t)}})),i.a.createElement("div",null,i.a.createElement("p",{className:"image-number"},"Photo ",this.state.currentImageIndex+1," of 3")),i.a.createElement("div",{className:"carousel-forward",onClick:function(t){return e.changeImage(t)}},i.a.createElement("img",{src:F.a,alt:"right-arrow",className:"control-item",name:"right"}))))}}]),a}(n.Component),S=function(e){var t=e.selectedListing,a=e.addDeleteFavorite,n=e.favorites,s=t.name,r=t.address,l=t.details,o=t.listing_id,c=r.street,m=r.zip,d=l.beds,u=l.baths,g=l.cost_per_night,h=l.features;return i.a.createElement("section",{className:"details"},i.a.createElement("div",{className:"title-btn-container"},i.a.createElement("div",{className:"title-address-container"},i.a.createElement("h1",{className:"details-title"},s),i.a.createElement("h2",{className:"details-address"},c," ",m)),i.a.createElement("button",{className:n.includes(o)?"details-active":"details-fav-btn",onClick:function(e){return a(o)}},i.a.createElement("i",{className:n.includes(o)?"fas fa-heart":"far fa-heart"}),"Favorite")),i.a.createElement("div",{className:"details-body"},i.a.createElement("div",{className:"other-details-container"},i.a.createElement("div",{className:"bed-bath-container"},i.a.createElement("div",{className:"bed-bath-display"},i.a.createElement("div",{className:"num-beds"},d)," ",i.a.createElement("div",null,"beds")),i.a.createElement("div",{className:"bed-bath-display"},i.a.createElement("div",{className:"num-baths"},u)," ",i.a.createElement("div",null,"baths"))),i.a.createElement("div",{className:"cost-per-night-container"},i.a.createElement("span",{className:"cost-highlight"},"$",g),"/night"),!!h.length&&i.a.createElement("div",{className:"features-list"},i.a.createElement("h3",{className:"features-title"},"Features"),i.a.createElement("ul",null,h.map((function(e,t){return i.a.createElement("li",{key:t},function(e){var t=e.split("");return t[0]=t[0].toUpperCase(),t.join("")}(e))}))))),i.a.createElement(D,{listing_id:o})))},V=a(11),x=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).getListingsData=function(t){(function(e){var t=e.reduce((function(e,t){return t.listings.forEach((function(t){return e.push(t)})),e}),[]).map((function(e){return fetch("http://localhost:3001"+e).then((function(e){return e.json()}))}));return Promise.all(t)})(t).then((function(t){return e.setState({listings:t})}))},e.logInUser=function(t){e.setState({userInfo:t})},e.addDeleteFavorite=function(t){var a=e.state.userInfo.favorites;if(a.includes(t))a.splice(a.indexOf(t),1),e.setState({userInfo:{name:e.state.userInfo.name,email:e.state.userInfo.email,visitReason:e.state.userInfo.visitReason,favorites:a}});else{var n=a.concat([t]);e.setState({userInfo:{name:e.state.userInfo.name,email:e.state.userInfo.email,visitReason:e.state.userInfo.visitReason,favorites:n}})}},e.logOutUser=function(){e.setState({userInfo:{name:"",email:"",visitReason:"",favorites:[]}})},e.state={userInfo:{name:"",email:"",visitReason:"",favorites:[]},areas:[],listings:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:3001/api/v1/areas").then((function(e){return e.json()})).then((function(e){var t=e.areas.map((function(e){return fetch("http://localhost:3001"+e.details).then((function(e){return e.json()})).then((function(t){return{area:e.area,about:t.about,id:t.id,name:t.name,listings:t.listings}}))}));return Promise.all(t)})).then((function(t){e.setState({areas:t}),e.getListingsData(t)})).catch((function(e){return console.error(e)}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,this.state.userInfo.name&&i.a.createElement(h,{userinfo:this.state.userInfo,logOutUser:this.logOutUser}),i.a.createElement("main",null,i.a.createElement(V.a,{exact:!0,path:"/",render:function(t){return i.a.createElement(E,Object.assign({logInUser:e.logInUser},t))}}),i.a.createElement(V.a,{exact:!0,path:"/areas",render:function(t){return i.a.createElement(N,Object.assign({areas:e.state.areas},t))}}),i.a.createElement(V.a,{exact:!0,path:"/areas/:id/listings",render:function(t){var a=t.match,n=t.history,s=a.params.id,r=n.location.pathname,l=e.state.listings.filter((function(e){return e.area_id===parseInt(s)}));return i.a.createElement(y,{listingsData:l,area_id:parseInt(s),pathname:r,favorites:e.state.userInfo.favorites,addDeleteFavorite:e.addDeleteFavorite})}}),i.a.createElement(V.a,{exact:!0,path:"/areas/:id/listings/:listing",render:function(t){var a=t.match.params.listing,n=e.state.listings.find((function(e){return e.listing_id===parseInt(a)}));if(e.state.listings.length>0)return i.a.createElement(S,{selectedListing:n,addDeleteFavorite:e.addDeleteFavorite,favorites:e.state.userInfo.favorites})}}),i.a.createElement(V.a,{exact:!0,path:"/favorites",render:function(t){var a=t.location.pathname,n=e.state.userInfo.favorites.map((function(t){return e.state.listings.find((function(e){return e.listing_id===t}))}));return i.a.createElement(y,Object.assign({listingsData:n},t,{pathname:a,favorites:e.state.userInfo.favorites,addDeleteFavorite:e.addDeleteFavorite}))}})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=i.a.createElement(d.a,null,i.a.createElement(x,null));r.a.render(M,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[30,1,2]]]);
//# sourceMappingURL=main.fe466926.chunk.js.map