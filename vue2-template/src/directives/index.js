/**
 * v-outside
 * 点击外部，隐藏下拉框等
 */
let handleOutsideClick;
export const outside = {
    bind(el, binding, vnode) {
        // console.log("bind", el, binding, vnode);
        // 点击
        handleOutsideClick = e => {
            e.stopPropagation();
            /**
             * @param {handler} 是点击外面触发的函数
             * @param {excludes} 排除的按钮, 里面要排除的元素用 ref 标记
             **/
            const {
                handler,
                excludes
            } = binding.value;
            // 判断是否有排除的元素节点
            let clickOnExcludeElement = false;
            if (excludes && excludes.length && !clickOnExcludeElement) {
                excludes.forEach(n => {
                    const ref = vnode.context.$refs[n];
                    if (ref) {
                        clickOnExcludeElement = true;
                    }
                });
            }

            //点击除了 搜索模块的所有节点，都会隐藏下拉选择框
            if (!el.contains(e.target) && !clickOnExcludeElement) {
                vnode.context[handler]();
            }
        };
        document.addEventListener('click', handleOutsideClick, false);
    },
    unbind() {
        document.removeEventListener('click', handleOutsideClick, false);
    }
}

/**
 *  v-focus
 * 自动聚焦
 */
export const focus = {
    inserted(el, binding, vnode) {
        // console.log("bind", el, binding, vnode);
        el.focus();
    }
}
