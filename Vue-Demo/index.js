
    //介绍
    var intro = new Vue({
        el: '#introduction',
        data: {
            message: '将元素节点的 title 特性和 Vue 实例的 message 属性保持一致',
            mess:'v-model表单输入与应用状态之间的绑定',
			todos:[
                {text:'v-for 指令可以绑定数组的数据来渲染一个项目列表'},
                {text:'鼠标在移到这里'},
                {text:'我们是个快乐的大家族'}
            ]
        },
        methods:{
            reverseMessage:function () {
                this.message = this.message.split('').reverse().join('')
            }
        }
    })

    //Vue实例
    //阻止追踪
    var datas={ a : 1}
    var vm = new Vue({
        el:'#example',
        data:datas
    })
    Object.freeze(datas);


    //模板语法
    var grammers = new Vue({
        el:'#grammer',
        data:{
			message:'用v-once'
		}
    })
	
	//Class 与 Style 绑定
	var styles = new Vue({
		el:'#styles',
		data:{
			isActive:{
			    'active':true
            },
            myStyle:{
			    fontSize:'1rem',
                backgroundColor:'yellow'
            }
		},
        methods:{
            Change:function(){
                this.isActive.active = !this.isActive.active
            }
        }
	})

    //条件渲染
    var condition = new Vue({
        el:'#condition',
        data:{
            key:true,
            ok:false
        },
        methods:{
            change:function () {
            this.key = !this.key
            },
            show:function () {
                this.ok = !this.ok
            }
        }
    })

    //列表渲染
    var list = new Vue({
        el:'#list',
        data:{
            todos: {
                boss: '黄村堂',
                balabala: '梦瑶',
                sectary: '健文'
            }
        }
    })

    //事件处理
    var event= new Vue({
        el:'#event',
        data: {
            name: "Vue.js"
        },
        methods: {
            dodo: function () {
                alert("dodo");
            },
            dothis: function () {
                alert("noclick");
            },
            submit:function () {
                alert('添加按键修饰符keyup.enter')
            }
        }
    })

    //表单输入
    var form = new Vue({
        el:'#form',
        data:{
            pick:'v-model 会忽略所有表单元素的 value、checked、selected 特性的初始值而总是将 Vue 实例的数据作为数据来源。',
            picked:'',

        }
    })

    //组件
    Vue.component('blog-post',{
        props: ['post'],
        template: `
        <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <button v-on:click="$emit('enlarge-text')">
        Enlarge text
        </button>
        <div v-html="post.content"></div>
        </div>
        `
    })

    new Vue({
        el:'#component',
        data:{
            posts:[
                {id:1,title:'噢酱紫', content:'<p style="color: darkred;border-bottom:dashed">富强民主文明和谐，自由平等公正法制</p>'},
                {id:2,title:'红领巾', content:'<p style="border-bottom-style: dotted;border-left-style: dashed;border-top-style: double;border-right-style: solid">当一个值传递给一个 prop 特性的时候，它就变成了那个组件实例的一个属性。调用内建的 $emit 方法并传入事件的名字，来向父级组件触发一个事件：</p>'}
            ],
            postFontSize: 1
        }
    })