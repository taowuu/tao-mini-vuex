// 实现一个插件挂载 $store
// 实现 Store

let Vue

class Store {
    constructor(options) {
        // 递归 data 响应化
        // this.$store.state.xx
        this._vm = new Vue({
            // data: options.state
            data: {
                $$state: options.state
            }
        })
        this._mutations = options.mutations
        this._actions = options.actions
        // dispatch 需要绑定 store
        this.commit = this.commit.bind(this)
        this.dispatch = this.dispatch.bind(this)
    }
    // $$ 不会被代理
    get state() {
        return this._vm._data.$$state
    }
    set state(v) {
        console.error('请使用 replaceState重置状态')
    }
    // 提交修改
    commit(type, playload) {
        const entry = this._mutations[type]

        if(!entry) {
            console.error('mutation 不存在')
            return
        }

        entry(this.state, playload)
    }
    // 
    dispatch(type, playload) {
        const entry = this._actions[type]

        if(!entry) {
            console.error('actions 不存在')
            return
        }

        entry(this, playload)

    }
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
