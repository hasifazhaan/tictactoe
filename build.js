
const webpack=require("webpack")
const path=require('path')
webpack({
	entry:"./second.js",
	output:{
		path:path.resolve("./"),
		filename:"bundle.js"
	},
	mode:"development"
},(error,stats)=>{
	if(error)
		console.log(error)
	else
	{
		console.log(stats.toString());
	}
})