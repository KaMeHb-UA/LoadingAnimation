class LoadingAnimation{
    constructor(text = '', props = 'blue bold'){
        function resetIfColor(text, color){
            if (typeof text[color] == 'string') return text[color]; else return text;
        }
        function colorize(str, colors){
            colors.forEach(color => {
                str = resetIfColor(str, color);
            })
            return str;
        }
        this.constructedWith = text;
        this.internalTimer = (function(){
            var symbols = ((arr, colors) => {
                arr.forEach((symbol, i) => {
                    arr[i] = colorize(symbol, colors);
                });
                return arr;
            })(['⣾', '⣷', '⣯', '⣟', '⡿', '⢿', '⣻', '⣽'], props.split(' '));
            var i = 0;
            return setInterval(function(){
                process.stdout.clearLine();
                process.stdout.cursorTo(0);
                process.stdout.write(text + ' ' + symbols[i++]);
                i &= symbols.length - 1;
            }, 50);
        })();
    }
    stop(){
        clearInterval(this.internalTimer);
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        process.stdout.write(this.constructedWith + ' ');
    }
}
module.exports = LoadingAnimation;