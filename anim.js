const colors = require('colors/safe');
class LoadingAnimation{
    constructor(text = '', props = 'blue bold'){
        if (typeof text == 'string'){
            if (text.length) this.textBefore = text + ' ';
            this.textAfter = '';
        } else if (Array.isArray(text)){
            if (text[0]){
                if (text[0].length) this.textBefore = text[0] + ' ';
            } else this.textBefore = '';
            if (text[1]){
                if (text[1].length) this.textAfter = ' ' + text[1];
            } else this.textAfter = '';
        } else {
            throw new TypeError('text is not of type String or Array');
        }
        function resetIfColor(text, color){
            if (typeof colors[color]) return colors[color](text); else return text;
        }
        function colorize(str, colors){
            colors.forEach(color => {
                str = resetIfColor(str, color);
            })
            return str;
        }
        this.internalTimer = (() => {
            var symbols = ((arr, colors) => {
                arr.forEach((symbol, i) => {
                    arr[i] = colorize(symbol, colors);
                });
                return arr;
            })(['⣾', '⣷', '⣯', '⣟', '⡿', '⢿', '⣻', '⣽'], props.split(' '));
            var i = 0;
            return setInterval(() => {
                process.stdout.cursorTo(0);
                process.stdout.write(this.textBefore + symbols[i++] + this.textAfter);
                i &= symbols.length - 1;
            }, 50);
        })();
    }
    stop(stopText = false){
        clearInterval(this.internalTimer);
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        process.stdout.write(this.textBefore);
        if (stopText && stopText.length){
            console.log(stopText + this.textAfter);
        } else {
            process.stdout.moveCursor(-1, 0);
            console.log(this.textAfter);
        }
    }
}
module.exports = LoadingAnimation;