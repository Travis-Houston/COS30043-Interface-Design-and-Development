const app = Vue.createApp({
    data(){
        return {
            strVar : 10
        };
    }, 
    methods: {},
    watch: {
        strVar (newVal, oldVal){
            alert(oldVal + " " + newVal);
        }
    }
}).mount('#app')
