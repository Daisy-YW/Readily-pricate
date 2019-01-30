/* 
    判单回文字符串
*/

function run(input){
    if(typeof input !== 'string') return false;
    return input.split('').reverse().join('') === input;
}