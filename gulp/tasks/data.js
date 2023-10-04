// // import data from 'gulp-data';
// import path from 'path';
// import merge from 'gulp-merge-json';

// export const data = () => {
//   return app.gulp.src(app.path.src.json)
//   .pipe(app.plugins.plumber(
//     app.plugins.notify.onError({
//       title: "data JSON",
//       message: "Error: <%= error.message %>"
//     })
//   ))
//   .pipe(merge({
//     fileName: 'data.json',
//     edit: (json, file) => {
//         // Extract the filename and strip the extension
//         var filename = path.basename(file.path),
//             primaryKey = filename.replace(path.extname(filename), '');

//         // Set the filename as the primary key for our JSON data
//         var data = {};
//         data[primaryKey.toLowerCase()] = json;

//         return data;
//     }
//   }))
//   .pipe(app.gulp.dest(app.path.src.temp))
//   .pipe(app.plugins.browsersync.stream())
// }