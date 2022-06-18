---
title: Vue3 script setup
date: 2022-06-18 09:09:00
tags:
category: ['FrontEnd', 'Vue3']
lang: ko
---
# 1. &lt;script setup&gt;란?
&lt;script setup&gt;은 SFC(Single File Components)내에서 Composition API를 사용하기 위해서 권장되는 구문이다. &lt;script&gt; 구문에 비해 몇가지 나은점을 제공한다.

공식사이트에는 아래와 같은 내용이 있다.
- More succinct code with less boilerplate
- Ability to declare props and emitted events using pure TypeScript
- Better runtime performance (the template is compiled into a render function in the same scope, without an intermediate proxy)
- Better IDE type-inference performance (less work for the language -server to extract types from code)

개인적으로 느낀바로는 변수나 객체등을 또 다시 return 구문에 입력하지 않아도 됨으로서, return 구문이 비대해지거나 return 기입시 오타등으로 인해서 예기치 않는 오류만 발생하지 않는 것 만으로도 매우 훌륭하다고 느낀다. 코드도 훨씬 깔끔해진다.

# 2. Composition API와 &lt;script setup&gt; 비교
## Composition API
```javascript
<template>
  <button @click="increment">
    {{ state.count }}
  </button>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup() {
    const state = reactive({ count: 0 })

    function increment() {
      state.count++
    }

    // don't forget to expose the function as well.
    return {
      state,
      increment
    }
  }
}
</script>
```

## &lt;script setup&gt;
```javascript
<script setup>
import { reactive } from 'vue'

const state = reactive({ count: 0 })

function increment() {
  state.count++
}
</script>

<template>
  <button @click="increment">
    {{ state.count }}
  </button>
</template>
```

단순히 count만 증가시키는 모듈이지만 코드 라인수도 줄어들고, 간결하다. &lt;script setup&gt;에서 선언한 변수나 함수를 return할 필요 없이 template에서 바로 사용할 수 있다. 변수가 한개 인데도 코드가 많이 줄어든다. 변수 갯수만큼 라인수가 늘어나는거라 복잡도가 높은 변수가 많은 프로그램일수록 소스가 간결해지는 효과는 좋다.

# 3. Using Components
컴포넌트 사용법. 컴포넌트 사용법도 정말 간단하다 단순하게 import만 해주게 되면 template에서 사용 할 수 있다. 기존 Composition API보다 간결하다.

```javascript
<script setup>
import MyComponent from './MyComponent.vue'
</script>

<template>
  <MyComponent />
</template>
```

## Dynamic Components 
동적으로 조건에따라서 컴포넌트 사용
```javascript
<script setup>
import Foo from './Foo.vue'
import Bar from './Bar.vue'
</script>

<template>
  <component :is="Foo" />
  <component :is="someCondition ? Foo : Bar" />
</template>
```

## Recursive Components
컴포넌트 이름이 동일하거나 이름을 변경이 필요하다면 아래와 같이 사용할 수 있다.
```javascript
import { FooBar as FooBarChild } from './components'
```

# 4. Top-level await
await 문법도 사용가능하다. 다만, Suspense와 함께 사용되어야 한다.
```javascript
<script setup>
const post = await fetch(`/api/post/1`).then((r) => r.json())
</script>
```

# 5. TypeScript 기능
타입 스크립트도 지원한다. 

## Type-only props/emit declarations

```javascript
const props = defineProps<{
  foo: string
  bar?: number
}>()

const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()
```

## Default props values when using type declaration
```javascript
interface Props {
  msg?: string
  labels?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two']
})
```

# 6. 마치며
Vue.js 3를 사용하고 있다면 무조건 적용해야 하는 것 같다. 토이프로젝트에  모듈들이 Composition API로 적용되어 있었다. &lt;script setup&gt; 부분으로 하나씩 고쳐가고 있는데, 별도로 시간을 들여서 수정할만 하다. 소스가 간결해지는 부분이 참으로 만족스럽다. 

# 9. 참조
- [&lt;script setup&gt; - Vue.js 공식사이트](https://vuejs.org/api/sfc-script-setup.html)  
- [API styles - Vue.js 공식사이트](https://vuejs.org/guide/introduction.html#api-styles)