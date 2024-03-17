const app = Vue.createApp({ })
app.component("example_component",
{
    data: function(){
        return { 
            // declare properties
            msg : "Hello, Mr. Chua. Good Morning"
        }
    },
    //declare template
    template: '<p> {{ msg }} </p>'
});

app.component("blog-post",
{
    props: ["title"],
    template: '<h3> {{title}} </h3>' 
});

app.component("myexample",
{
    props: ["fruits"],
    template: '<ul><li v-for="f in fruits"> {{ f }} </li></ul>'
});
app.mount("#app")