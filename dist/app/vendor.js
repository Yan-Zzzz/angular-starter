var root = './node_modules/',
    packages = [
        'angular/angular.js',
        'bootstrap/dist/**',
        'jquery/dist/**'
    ];

module.exports = {
    root: root,
    packages: packages.map(function(item) {
    	return root + item;
    })
};
