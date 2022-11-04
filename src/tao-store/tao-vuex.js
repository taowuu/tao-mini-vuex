// 实现一个插件挂载 $store
// 实现 Store

import { _ } from "core-js"

let Vue

class Store {
    
}

function install(_Vue) {
    Vue = _Vue

    Vue.mixin({
        beforeCreate() {
            if (this.$options.store) {
                Vue.prototype.$store = this.$options.store
            }
        }
    })
}

export default {Store, install}
