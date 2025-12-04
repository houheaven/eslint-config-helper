
<template>
  <div>
    <div rule="vue/no-custom-modifiers-on-v-model">
      <!-- ✓ GOOD -->
      <MyComponent v-model="foo" />
      <MyComponent v-model.trim="foo" />
      <MyComponent v-model.lazy="foo" />
      <MyComponent v-model.number="foo" />

      <!-- ✗ BAD -->
      <MyComponent v-model.aaa="foo" />
      <MyComponent v-model.aaa.bbb="foo" />
    </div>

    <div rule="vue/no-unused-components">
      <!-- <componentA /> -->
      <!-- <component-a /> -->
      <component :is="compA" />
    </div>

    <!-- eslint-disable2 vue/no-v-text-v-html-on-component -->
    <div>
      <div
        is="header"
        v-for="item in items"
        :key="item.id"
        v-if="!item.show"
        v-once
        id="uniqueID"
        ref="header"
        v-model="headerData"
        class="c101"
        :class="hello"
        v-on:greet="greet"
        my-prop="prop"
        @click="functionCall"
        v-text="textContent"
      />
    </div>

    <div>
      <div :id="id">content</div>
      <div v-bind:id="id">content</div>
      <div @click="onClick">click</div>
      <div v-on:click="onClick">click</div>
    </div>

    <div rule="vue/singleline-html-element-content-newline">
      <div></div>
      <div attr>content</div>
      <tr attr><td>{{ data1 }}</td><td>{{ data2 }}</td></tr>
      <div attr><!-- comment --></div>
      <div>content</div>
      <tr><td>{{ data1 }}</td><td>{{ data2 }}</td></tr>
      <div><!-- comment --></div>
    </div>

    <div rule="vue/max-attributes-per-line">
      <MyComponent lorem="1" ipsum="2" dolor="3" sit="4" />
      <div a="1" b="2" c="3" d="4"
        e="5" fff="666" xx="111"
        ss="666"
      ></div>
    </div>

    <div rule="vue/multiline-html-element-content-newline">
      <div>11111</div>
      <div>1111
        2222
      </div>
      <div>
        
      </div>
      <div>
      </div>
      <div>
        dsadsads
      </div>
      <div>
        dsadsads
        dsad2wew
      </div>
      <div>

        dsad4s
        dsadsads

        dsadsads

        
      </div>
    </div>
  </div>
</template>

<script>
import componentA from "../components/componentA.vue";
export default {
  name: "teleport2",
  components: {
    componentA,
  },
  props: {
    // ref: {
    //   type: String,
    //   default: "",
    // },
    tag: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      foo: "hello",
    };
  },
  computed: {
    compA() {
      return componentA;
    },
    compB() {
      return;
    },
  },
};
</script>
