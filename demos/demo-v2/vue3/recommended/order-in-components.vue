
<template>
  <div class="demo-container">
    <h2>vue/order-in-components 规则演示</h2>
    
    <div class="demo-section">
      <h3>组件属性顺序示例</h3>
      
      <!-- 显示组件数据 -->
      <div class="data-display">
        <p>用户名: {{ userName }}</p>
        <p>用户年龄: {{ userAge }}</p>
        <p>全名: {{ fullName }}</p>
        <p>用户信息: {{ userInfo }}</p>
      </div>

      <!-- 交互操作 -->
      <div class="interaction">
        <button class="btn" @click="incrementAge">增加年龄</button>
        <button class="btn" @click="resetData">重置数据</button>
        <button class="btn" :disabled="isLoading" @click="fetchUserData">
          {{ isLoading ? '加载中...' : '获取用户数据' }}
        </button>
      </div>

      <!-- 插槽内容 -->
      <slot name="footer">
        <p class="footer-text">这是默认的插槽内容</p>
      </slot>
    </div>
  </div>
</template>

<script>
// 导入外部依赖
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import UserMixin from "@/mixins/UserMixin";
  import ValidationMixin from "@/mixins/ValidationMixin";

  // 导入组件
  import UserAvatar from "@/components/UserAvatar.vue";
  import ButtonComponent from "@/components/ButtonComponent.vue";
  import ModalDialog from "@/components/ModalDialog.vue";

  // 导入指令
  import vFocus from "@/directives/focus";
  import vTooltip from "@/directives/tooltip";

  // 导入过滤器
  import { formatDate } from "@/filters/date";
  import { capitalize } from "@/filters/string";

  export default {
    // 1. el - 挂载元素 (Vue 2)
    el: "#app",

    // 2. name - 组件名称
    name: "order-in-components-demo",

    // 3. key - 组件key
    key: "demo-component",

    // 4. parent - 父组件实例 (Vue 2)
    parent: null,

    // 5. functional - 函数式组件
    functional: false,

    // 6. delimiters, comments - 分隔符和注释
    delimiters: ["{{", "}}"],
    comments: true,

    // 7. components, directives, filters - 组件、指令、过滤器
    components: {
      UserAvatar,
      ButtonComponent,
      ModalDialog,
    },
    directives: {
      focus: vFocus,
      tooltip: vTooltip,
    },
    filters: {
      formatDate,
      capitalize,
    },

    // 8. extends - 扩展组件
    // extends: BaseComponent,

    // 9. mixins - 混入
    mixins: [UserMixin, ValidationMixin],

    // 10. provide, inject - 依赖注入
    provide: {
      theme: "light",
      locale: "zh-CN",
    },
    inject: ["appConfig"],

    // 11. ROUTER_GUARDS - 路由守卫 (Nuxt)
    // beforeRouteEnter(to, from, next) { next() },
    // beforeRouteUpdate(to, from, next) { next() },
    // beforeRouteLeave(to, from, next) { next() },

    // 12. layout - 布局 (Nuxt)
    // layout: 'default',

    // 13. middleware - 中间件 (Nuxt)
    // middleware: 'auth',

    // 14. validate - 验证 (Nuxt)
    // validate({ params }) { return /^\d+$/.test(params.id) },

    // 15. scrollToTop - 滚动到顶部 (Nuxt)
    // scrollToTop: true,

    // 16. transition - 过渡动画
    transition: "fade",

    // 17. loading - 加载状态
    // loading: false,

    // 18. inheritAttrs - 继承属性
    inheritAttrs: false,

    // 19. model - 自定义v-model
    model: {
      prop: "value",
      event: "change",
    },

    // 20. props, propsData - 属性和属性数据
    props: {
      initialName: {
        type: String,
        default: "Guest",
      },
      initialAge: {
        type: Number,
        default: 18,
        validator: value => value >= 0,
      },
      isActive: Boolean,
    },
    // propsData: { initialName: 'Test', initialAge: 25 },

    // 21. emits - 自定义事件
    emits: ["ageChanged", "dataReset", "userDataFetched"],

    // 22. slots - 插槽 (Vue 3.3+)
    slots: {
      header: props => h("div", {}, `头部插槽: ${props.title}`),
      default: props => h("div", {}, "默认插槽内容"),
    },

    // 23. expose - 暴露的公共方法
    expose: ["getUserData", "resetData"],

    // 24. setup - 组合式API
    setup(props, { emit }) {
      const router = useRouter();
      const isLoading = ref(false);
    
      // 模拟异步数据获取
      const fetchData = async () => {
        isLoading.value = true;
        await new Promise(resolve => setTimeout(resolve, 1000));
        isLoading.value = false;
        emit("userDataFetched");
      };

      return {
        isLoading,
        fetchData,
      };
    },

    // 25. asyncData - 异步数据 (Nuxt)
    // async asyncData({ $axios }) {
    //   const data = await $axios.get('/api/user')
    //   return { user: data }
    // },

    // 26. data - 数据
    data() {
      return {
        userName: this.initialName,
        userAge: this.initialAge,
        userData: null,
        error: null,
      };
    },

    // 27. fetch - 获取数据 (Nuxt)
    // async fetch() {
    //   this.userData = await this.$axios.get('/api/user')
    // },

    // 28. head - 头部信息 (Nuxt)
    // head() {
    //   return {
    //     title: '组件顺序演示',
    //     meta: [
    //       { hid: 'description', name: 'description', content: 'Vue组件属性顺序示例' }
    //     ]
    //   }
    // },

    // 29. computed - 计算属性
    computed: {
      fullName() {
        return `${this.userName} Smith`;
      },
      userInfo() {
        return `${this.userName}, ${this.userAge}岁`;
      },
      isAdult() {
        return this.userAge >= 18;
      },
    },

    // 30. watch, watchQuery - 监听器和查询监听
    watch: {
      userAge(newAge, oldAge) {
        if (newAge !== oldAge) {
          this.$emit("ageChanged", newAge);
        }
      },
      userName: {
        handler(newName) {
          console.log("用户名变化:", newName);
        },
        immediate: true,
      },
    },
    // watchQuery: ['page', 'sort'],

    // 31. LIFECYCLE_HOOKS - 生命周期钩子
    beforeCreate() {
      console.log("beforeCreate - 实例初始化之后");
    },
    created() {
      console.log("created - 实例创建完成");
    },
    beforeMount() {
      console.log("beforeMount - 挂载开始之前");
    },
    mounted() {
      console.log("mounted - 实例挂载完成");
      this.initializeData();
    },
    beforeUpdate() {
      console.log("beforeUpdate - 数据更新时");
    },
    updated() {
      console.log("updated - 数据更新完成");
    },
    activated() {
      console.log("activated - keep-alive 组件激活时");
    },
    deactivated() {
      console.log("deactivated - keep-alive 组件停用时");
    },
    beforeUnmount() {
      console.log("beforeUnmount - 实例销毁之前");
    },
    unmounted() {
      console.log("unmounted - 实例销毁完成");
    },
    errorCaptured(err, instance, info) {
      console.error("errorCaptured - 捕获到错误:", err, info);
      this.error = err;
      return false;
    },
    renderTracked({ key, target, type }) {
      console.log("renderTracked - 渲染跟踪", key, type);
    },
    renderTriggered({ key, target, type }) {
      console.log("renderTriggered - 渲染触发", key, type);
    },

    // 32. methods - 方法
    methods: {
      incrementAge() {
        this.userAge++;
      },
      resetData() {
        this.userName = this.initialName;
        this.userAge = this.initialAge;
        this.$emit("dataReset");
      },
      fetchUserData() {
        this.isLoading = true;
        setTimeout(() => {
          this.userData = { id: 1, name: this.userName, age: this.userAge };
          this.isLoading = false;
          this.$emit("userDataFetched", this.userData);
        }, 1000);
      },
      initializeData() {
        console.log("初始化组件数据");
      },
      getUserData() {
        return this.userData;
      },
    },

    // 33. template, render - 模板和渲染函数
    // template: '<div>{{ message }}</div>',
    // render() {
    //   return h('div', this.message)
    // },

    // 34. renderError - 渲染错误处理
    renderError(h, err) {
      return h("pre", { style: { color: "red" } }, err.stack);
    },
  };
</script>
