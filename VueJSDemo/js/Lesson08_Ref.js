const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }
const City = {
    template: '<div>{{$route.params.id}} is a great city. </div>'
}

const routes = [ 
    { path: "/", component: Home },
    { path: "/about", component: About },
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

app.component("example_component",
{
    data: function(){
        return {msg: "Hello Mr. Chua ne"}
    },

    template: "<p>{{ msg }} </p>"
});

app.component("blog-post", {
    props: ["title"],
    template: "<h3>{{ title }}</h3>"
});

app.component("myexample", {
    props: ["fruits"],
    template: '<ul><li v-for="f in fruits">{{ f }}</li></ul>'
});

app.directive("highlight", {
    created(el, binding, vnode) {
        el.style.backgroundColor = 'lightgreen'
    }
});

app.directive("myhighlight", {
    created(el, binding, vnode) {
        el.style.backgroundColor = binding.value
    }
});

app.directive("myhighlight2", {
    created(el, binding, vnode) {
        el.style.backgroundColor = binding.value.color 
        el.style.border = binding.value.border 
        el.style.fontStyle = binding.value.font
    }
});


app.use(router)
app.mount("#app")
