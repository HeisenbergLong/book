const book = {
    state: {//共享区 所有组件能取到数据
        test: 1
    },
    mutations: {//用来改变共享区的值
        'SET_TEST': (state, newText) => {
            // newText是test的值
            state.test = newText
        }
    },
    actions: {//调用mutations 可以通过异步来调用
        setTest: ({ commit, state }, newText) => {
            // setTest是个方法 传入一个对象 commit是个方法用来调用mutations state用来获取原有的值 
            return commit('SET_TEST', newText) //return会返回一个promise对象 可以使用链式编程（then）来进行异步调用
            //调用commit方法传入mutations中对象的SET_TEST这个key 第二个传新的test的值 这样就完成了修改
        }
    }
}

export default book;