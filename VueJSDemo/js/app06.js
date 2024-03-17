const app = Vue.createApp({
    data(){
        return {
            name : "Dr TUAN."
        };
    }, 
    methods: {
        getName:function(bio){
            return this.name + bio
        },
    }
}).mount('#app')
