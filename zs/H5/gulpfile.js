var gulp=require('gulp');
var web=require('gulp-webserver');
gulp.task('web',function(){
	return gulp.src('src')
	.pipe(web({
		port:8989,
		open:true,
		livereload:true,
		proxies:[
			{
				source:"/api/tou",target:"http://localhost:3000/api/tou"
			},
			{
				source:"/api/tong",target:"http://localhost:3000/api/tong"
			},
			{
				source:"/api/aid",target:"http://localhost:3000/api/aid"
			},
			{
				source:"/api/guo",target:"http://localhost:3000/api/guo"
			}
		]
	}))
})