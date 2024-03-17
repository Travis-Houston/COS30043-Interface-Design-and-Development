const app = Vue.createApp({
    data(){
        return {
            strVar : "Hello World !"
        }
    },
    methods: {
        myCtrl:function(){
            this.strVar = "New Hello World"
        }
    }
}).mount('#app')
