(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(e,a,t){e.exports={Overlay:"Modal_Overlay__3gh8s",Modal:"Modal_Modal__2YSDl"}},11:function(e,a,t){e.exports={App:"App_App__1bvgS",Loader:"App_Loader__-VXm0"}},24:function(e,a,t){e.exports={ImageGallery:"ImageGallery_ImageGallery__3oVX5"}},25:function(e,a,t){e.exports={Button:"Button_Button__2ReCq"}},27:function(e,a,t){e.exports=t(71)},71:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(22),c=t.n(o),l=t(12),s=t(3),i=t(4),u=t(6),m=t(5),h=t(7),p=t(23),d=t.n(p),g=t(8),f=t.n(g),b=function(e){function a(){var e,t;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={valueSearchBarr:""},t.handleInput=function(e){var a=e.target.value;t.setState({valueSearchBarr:a})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.valueSearchBarr),t.resetSearchBarr()},t.resetSearchBarr=function(){t.setState({valueSearchBarr:""})},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.valueSearchBarr;return n.a.createElement("header",{className:f.a.Searchbar},n.a.createElement("form",{className:f.a.SearchForm,onSubmit:this.handleSubmit},n.a.createElement("button",{type:"submit",className:f.a.SearchFormButton},n.a.createElement("span",{className:f.a.SearchFormButtonLabel},"Search")),n.a.createElement("input",{className:f.a.SearchFormInput,type:"text",autoComplete:"off",placeholder:"Search images and photos",value:e,onChange:this.handleInput})))}}]),a}(r.Component),S=t(9),v=t.n(S),y=function(e){var a=e.src,t=e.largeImage;return n.a.createElement("li",{className:v.a.ImageGalleryItem},n.a.createElement("img",{src:a,alt:"",className:v.a.ImageGalleryItemImage,"data-large_image":t}))},_=t(24),I=t.n(_),E=function(e){var a=e.openModal,t=e.articles;return n.a.createElement("ul",{className:I.a.ImageGallery,onClick:a,role:"presentation"},t.map((function(e){var t=e.id,r=e.webformatURL,o=e.largeImageURL;return n.a.createElement(y,{src:r,key:t,largeImage:o,openModal:a})})))},O=t(25),k=t.n(O),B=function(e){var a=e.onClickButton;return n.a.createElement("button",{type:"button",className:k.a.Button,onClick:a},"Load more")},w=t(10),M=t.n(w),L=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).overletRef=Object(r.createRef)(),t.handleKeyPress=function(e){"Escape"===e.code&&t.props.onClose()},t.handleBackdropClick=function(e){var a=t.overletRef.current;a&&e.target!==a||t.props.onClose()},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props.srcModalImage;return n.a.createElement("div",{className:M.a.Overlay,ref:this.overletRef,onClick:this.handleBackdropClick,onKeyDown:this.handleKeyPress,role:"presentation"},n.a.createElement("img",{src:e,className:M.a.Modal,alt:""}))}}]),a}(r.Component),j=t(26),C=t.n(j),G=function(e,a){return C.a.get("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(a,"&key=").concat("13080993-ef0fc8e255e06bc4fd233c1c4","&image_type=photo&orientation=horizontal&per_page=12"))},N=function(e){return e.map((function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL}}))},A=t(11),F=t.n(A),R=(t(70),function(e){function a(){var e,t;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={searchValue:"",searchPage:1,articles:[],isLoading:!1,error:null,isModalOpen:!1,modalImage:null},t.addSearchValue=function(e){t.setState({searchValue:e.toLowerCase(),searchPage:1,articles:[]})},t.handleAddMore=function(){t.setState((function(e){return{searchPage:e.searchPage+1}}))},t.fatchArticles=function(e,a){t.setState({isLoading:!0}),G(e,a).then((function(e){var a=e.data;return t.setState((function(e){return{articles:[].concat(Object(l.a)(e.articles),Object(l.a)(N(a.hits)))}}))})).catch((function(e){return t.setState({error:e})})).finally((function(){return t.setState({isLoading:!1})}))},t.openModal=function(e){var a=e.target;"IMG"===a.nodeName&&t.setState({isModalOpen:!0,modalImage:a.dataset.large_image})},t.closeModal=function(){t.setState({isModalOpen:!1,modalImage:null})},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,a){var t=this.state,r=t.searchValue,n=t.searchPage,o=t.articles;a.searchValue===r&&a.searchPage===n||this.fatchArticles(r,n),a.articles!==o&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,a=e.articles,t=e.isLoading,r=e.isModalOpen,o=e.modalImage,c=e.error;return n.a.createElement("div",{className:F.a.App},n.a.createElement(b,{onSubmit:this.addSearchValue}),a.length>0&&n.a.createElement(E,{articles:a,openModal:this.openModal}),t?n.a.createElement(d.a,{type:"ThreeDots",color:"Red",height:20,className:F.a.Loader}):a.length>0&&n.a.createElement(B,{onClickButton:this.handleAddMore}),c&&n.a.createElement("p",null,"Whoops, something went wrong: ",c.message),r&&n.a.createElement(L,{srcModalImage:o,onClose:this.closeModal}))}}]),a}(r.Component));c.a.render(n.a.createElement(R,null),document.getElementById("root"))},8:function(e,a,t){e.exports={Searchbar:"Searchbar_Searchbar__lut6W",SearchForm:"Searchbar_SearchForm__1B87C",SearchFormButton:"Searchbar_SearchFormButton__1nD7J",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__18POz",SearchFormInput:"Searchbar_SearchFormInput__3aLsG"}},9:function(e,a,t){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1vExX",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3JEbZ"}}},[[27,1,2]]]);
//# sourceMappingURL=main.03ce9847.chunk.js.map