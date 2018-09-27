# Vue-Demo
### 安装
- 直接下载并用script 标签引入，Vue 会被注册为一个全局变量。
### 介绍
- v-for列表渲染todos数组，并且用v-bind绑定一个title特性，其值为message，当鼠标移到列表上会有message提示。然后button上用v-on 指令添加一个事件监听器，事件为将字符串message颠倒
- 在input标签里用v-model来动态获取数据
### Vue实例
- 用v-on的.click属性来改变a的值，并且用Object.freeze来防止数据追踪
### 模板语法
- v-once来使数据不能改变
### Class 与 Style 绑定
-  v-bind:class用来动态切换class，其中class的值可以是表达式或者对象
-  v-bind:style直接绑定到一个内联样式对象
-  button用v-on:click触发变换外联样本事件
### 条件渲染
-  v-if=“ok”其中ok为布尔值
-  v-show用来显示/隐藏标签，相当于css的display属性
-  v-else与v-if紧贴着使用
### 列表渲染
- v-for语法为todo in todos，其中todos为对象/数组，todo相当于下标
### 事件处理
- v-on.click触发事件
- v-on.keyup.enter通过符号值触发事件
- v-on.click-stop阻止事件传播
### 表单输入
- v-model 指令在表单 <input、<textarea 及 <select 元素上创建双向数据绑定。v-model 会忽略所有表单元素的 value、checked、selected 特性的初始值而总是将 Vue 实例的数据作为数据来源。
- label的for 属性规定 label 与哪个表单元素绑定。
- 在input里添加v-bind可以直接为实例的动态属性赋值
### 组件
- 通过 new Vue 创建的 Vue 根实例中，把这个组件作为自定义元素来使用
- Prop 是你可以在组件上注册的一些自定义特性。当一个值传递给一个 prop 特性的时候，它就变成了那个组件实例的一个属性。
- 调用内建的 $emit 方法并传入事件的名字，来向父级组件触发一个事件
