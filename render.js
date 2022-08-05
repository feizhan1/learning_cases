/**
 * @description 字符串模板
 * let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
 * let person = {
 *     name: '布兰',
 *     age: 12
 * }
 * render(template, person); // 我是布兰，年龄12，性别undefined
*/
function render(template, data) {
  const reg = /\{\{(\w+)\}\}/ // 模板字符串正则
  const hasTemplate = reg.test(template) // // 判断模板里是否有模板字符串
  if (hasTemplate === false) { // 如果模板没有模板字符串直接返回
    return template
  }
  const name = reg.exec(template)[1] // 查找当前模板里第一个模板字符串的字段
  template = template.replace(reg, data[name]) // 将第一个模板字符串渲染
  return render(template, data) // 递归的渲染并返回渲染后的结构
}

let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let person = {
    name: '布兰',
    age: 12,
    sex: '男'
}
const result = render(template, person); // 我是布兰，年龄12，性别undefined
console.log(result)