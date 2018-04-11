module.exports = {
    RandomChar: function(num){
        var string = "abcdefghijklmnopqrstuvmxyz0123456789";
        var str = 'boing!';
        var i = 0;
        while (i < num){
        str += string.charAt(Math.floor(Math.random() * string.length));
        i++;
        }
        return str;
        }
}