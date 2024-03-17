const app = Vue.createApp({ 
    data(){
        return {
            fName : "", errors: [] 
        }
    },
    methods: {
        checkForm: function(e){
            this.errors = [];
            var result = true;
            if(!this.fName){
                this.errors.push("First name required")
                result = false; 
            } 
            if(!result)
                e.preventDefault();
        }  
    }
})
app.mount("#app")