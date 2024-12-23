var names = ['medo', 'aya', 'mona', 'ali', 'omar']
var len = (len) => {
    return names.filter(item => item.length <= len)
}
var result = len(3)
console.log(result);