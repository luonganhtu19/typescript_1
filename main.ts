function main(){
	console.log("START");
	if(true){
		var lang="vi";
		var target="en-us";
		console.log("inside block");
		console.log(target);
	}
	console.log(lang);
	console.log(target);
}

function main1(){
	var x=5;
	console.log(x);
	var x=10;
	console.log(x);

	
	let y=55;
	console.log(y);
	 y=10;
	console.log(y);
}

function main2(){
	let message : string;
	let total   : number;
	let isProduction=true;
	let prices: Array<number> =[120,88,60];
	let languages: string[]=['vi','en-us'];
	let now= new Date();
	let unknow: any;

enum Direction{
	UP,
		DOWN,
		LEFT,
		RIGHT
}
interface IPost{
	id   : string;
	title: string;
	body?: string;
}
	isProduction =false;
	unknow=Direction.UP;
	unknow='changed';

//let postId='8080';
function getPost(postId: string): IPost{
		return{
		id: postId,
		title: 'Post Title',
		body: 'Post Body'
		}as IPost;
	}
}
main();
main1();
main2();