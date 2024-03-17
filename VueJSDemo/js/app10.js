const Home = {template : '<div>Home</div>'}
const About = {template : '<div>About</div>'}
const City = {
    template: '<div>{{$route.params.id}} is a great city. </div>'
}

const routes = [
    { path: "/", component: Home},
    { path: "/about", component: About},
    { path: "/city/:id", component: City }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, 
})

const app = Vue.createApp({ 
    data(){
        return {
            cities : ["HCM", "Ha Noi", "Da Nang"]
        }
    }
})
app.use(router)
app.mount("#app")