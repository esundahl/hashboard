

/**
 * Default jake task
 */

task('default', ['test']);


//
/**
 * Lint
 */

desc('Lint all files');
task("lint", [], function() {

  var lint, files, options;

	lint = require("./build/lint/");
	
	files = new jake.FileList();
	files.include("**/*.js");
	files.exclude("node_modules");
	
	options = {
		node: true,
    strict: false
	};

	lint.validateFileList(files.toArray(), options, {});
});


desc('Automatically builds and serves files during development');
task('watch', function () {

  jake.exec('watch make -C client', function () {
    complete();
  }, { printStdout: false });

  jake.exec('node server/app.js', function () {
    complete();
  }, { printStdout: true });

});


/**
 * Tests
 */

desc('Run all tests');
task('test', ['client:test', 'server:test'], function () {
  console.log('Running Tests...');
});


namespace('server', function () {


  desc('Run all server side tests');
  task('test', [], function () {
    var Mocha = require('mocha');
    var mocha = new Mocha({ reporter: 'dot' });
    var list = new jake.FileList();

    list.include('server/test/*.js');
    list.forEach(function (file) {
      mocha.addFile(file);
    });

    mocha.run(function (failures) {
      process.exit(failures);
    });
  });


});


namespace('client', function () {


  desc('build client script');
  task('build', { async: true }, function () {
    jake.exec('make -C client', function () {
      console.log('Built client component...');
      complete();
    }, { printStdout: true });
  });


  desc('Run all client side tests');
  task('test', ['build', 'generate'], { async: true }, function () {
    jake.exec('mocha-phantomjs -R dot client/test/runner.html', function () {
      console.log('Client tests passed...');
      complete();
    }, { printStdout: true });
  });


  desc('Generates a test runner file');
  task('generate', [], function () {
    var tests = '';
    var fs = require('fs');
    var runner = fs.readFileSync('client/test/runner-template.html', 'utf8');
    var list = new jake.FileList();

    list.include('client/lib/**/test/*.js');
    list.forEach(function (file) {
      tests += "<script src='../../" + file + "'></script>\n";
    });

    runner = runner.replace("<script id='tests'></script>", tests);
    fs.writeFileSync('client/test/runner.html', runner, 'utf8');
  });

});
