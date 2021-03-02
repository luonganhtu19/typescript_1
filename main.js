function main() {
    console.log("START");
    if (true) {
        var lang = "vi";
        var target = "en-us";
        console.log("inside block");
        console.log(target);
    }
    console.log(lang);
    console.log(target);
}
function main1() {
    var x = 5;
    console.log(x);
    var x = 10;
    console.log(x);
    var y = 55;
    console.log(y);
    y = 10;
    console.log(y);
}
function main2() {
    var message;
    var total;
    var isProduction = true;
    var prices = [120, 88, 60];
    var languages = ['vi', 'en-us'];
    var now = new Date();
    var unknow;
    var Direction;
    (function (Direction) {
        Direction[Direction["UP"] = 0] = "UP";
        Direction[Direction["DOWN"] = 1] = "DOWN";
        Direction[Direction["LEFT"] = 2] = "LEFT";
        Direction[Direction["RIGHT"] = 3] = "RIGHT";
    })(Direction || (Direction = {}));
    isProduction = false;
    unknow = Direction.UP;
    unknow = 'changed';
    //let postId='8080';
    function getPost(postId) {
        return {
            id: postId,
            title: 'Post Title',
            body: 'Post Body'
        };
    }
}
main();
main1();
main2();
console.log(main2().getPost('10'));
