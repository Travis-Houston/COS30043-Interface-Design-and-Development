const app = Vue.createApp({ })
app.directive("hightlight",
{
    created(el, binding, vnode){
        el.style.backgroundColor = "lightgreen"
    }
});

app.directive("hightlight1",
{
    created(el, binding, vnode){
        el.style.backgroundColor = binding.value
    }
});

app.directive("hightlight2",
{
    created(el, binding, vnode){
        el.style.backgroundColor = binding.value.color
        el.style.border = binding.value.border 
        el.style.fontStyle = binding.value.font
    }
});
app.mount("#app")