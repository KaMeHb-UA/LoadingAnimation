require('colors');
const LoadingAnimation = require('./anim');
let anim = new LoadingAnimation('Text setted as string', 'red');
setTimeout(()=>{
    anim.stop('Ok'.green);
    anim = new LoadingAnimation(['Text setted', 'as array'], 'green');
    setTimeout(()=>{
        anim.stop('Ok'.yellow);
    }, 3000);
}, 3000);