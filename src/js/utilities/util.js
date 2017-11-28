/*(function(){
    return {
        
    };
});*/

var util = { 
    active: null,

    router: function(route, data){
        route = route || location.hash.slice(1) || 'home';
        var route_split = route.split('?');
        var redirect_function = route_split[0] || false;

        if(route_split.length > 1){
            var params  = this.extract_params(route_split[1]);
        }
        if(this.active !== redirect_function){
            this.set_active_nav(redirect_function);
        }
        if(redirect_function){
            views[redirect_function](redirect_function, params, data);
        }
    },

    set_active_nav: function(id){
        if(this.active !== null){
            document.getElementById(this.active).classList.remove("active");
        }
        this.active = id;
        let temp = document.getElementById(this.active);
        //temp.style.color = "white";
        temp.classList.add("active");
    },

    extract_params: function(params_string){
        var params = {};
        var utlParamas = params_string.split('&');

        for(var i = 0; i < utlParamas.length; i++){
            var tmepParams = utlParamas[i].split('=');
            if(tmepParams.length == 2){
                params[tmepParams[0]] = tmepParams[1];
            }
            else{
                console.log("Url params No equal sign.!\nparam: " + tmepParams);
            }
        }
        return params;
    },

    control: function(page, params){
        params = params || {};
        controllers[page](page, '', params);
    },

    render: function(element_id, content){
        document.getElementById(element_id).innerHTML = content;
    }
  
};