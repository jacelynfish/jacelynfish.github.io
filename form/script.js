
EventUtil = {

    addEvent : function(elem,type,handler){
        if(elem.addEventListener){
            elem.addEventListener(type,handler,false);
        }else if(elem.attachEvent){
            elem.attachEvent("on"+type,handler);
        }else{
            elem["on"+type] = handler;
        }
    },

    removeEvent :function(elem,type,handler) {
        if (elem.removeEventListener) {
            elem.removeEventListener(type, handler, false);
        } else if (elem.attachEvent) {
            elem.detachEvent("on" + type, handler);
        } else {
            elem["on" + type] = null;
        }
    },

    getEvent : function(event){
        return event? event : window.event;
    },


    getTarget : function(event){
        return event.target ? event.target : window.event.srcElement;
    },

    preventDefault : function(event){
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue = false;
        }
        return false;
    },


    stopPropagation : function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble = true;
        }
    },


    getRelatedTarget : function(event){
        if(event.relatedTarget){
            return event.relatedTarget;
        }else if(event.toElement){
            return event.toElement;
        }else if(event.fromElement){
            return event.fromElement;
        }else{
            return null;
        }
    },

    getCharCode : function(event){
        if(typeof event.charCode == "number"){
            return event.charCode;
        }else{
            return evnet.keyCode;
        }
    }
};

$ = function(el){
    return document.querySelector(el);
}
window.onload = function(){

    var navMobile = $('#header-nav-mobile');
    var navLogoMobile = $('#header-logo-mobile');
    EventUtil.addEvent(navLogoMobile,'click',toggleEl);

    var searchBtnMobile = $('#header-search-mobile');
    var searchMobile = $('#search-mobile');
    EventUtil.addEvent(searchBtnMobile,'click',toggleEl);

    function toggleEl(event){
        var el;
        var target = EventUtil.getTarget(event);
        switch (target.id){
            case 'header-logo-mobile':
                el = navMobile;
                break;
            case 'header-search-mobile':
                el = searchMobile;
                break;
        }
        if(el.style.display != 'none'){
            if(el.classList.contains('nav-show')){
                el.classList.add('nav-none');
                el.classList.remove('nav-show');
            }else{
                el.classList.remove('nav-none');
                el.classList.add('nav-show');
            }
        }

    }
    EventUtil.addEvent($('#content'),'click',function(event) {

        if (navMobile.classList.contains('nav-show')) {
            navMobile.classList.add('nav-none');
            navMobile.classList.remove('nav-show');
        }
        if (searchMobile.classList.contains('nav-show')) {
            searchMobile.classList.add('nav-none');
            searchMobile.classList.remove('nav-show');
        }
    });
    EventUtil.addEvent($('#content-header'),'click',function(){
        if (navMobile.classList.contains('nav-show')) {
            navMobile.classList.add('nav-none');
            navMobile.classList.remove('nav-show');
        }
        if (searchMobile.classList.contains('nav-show')) {
            searchMobile.classList.add('nav-none');
            searchMobile.classList.remove('nav-show');
        }
    })
}