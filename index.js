var postcss = require('postcss');

module.exports = postcss.plugin('postcss-verthorz', function (opts) {
    opts = opts || {};

    var PROPVALUES = {
        pv: ['padding-top', 'padding-bottom'],
        ph: ['padding-left', 'padding-right'],
        mv: ['margin-top', 'margin-bottom'],
        mh: ['margin-left', 'margin-right']
    }

    var PROPS = {
        'padding-vert': PROPVALUES.pv,
        'padding-horz': PROPVALUES.ph,
        'pv': PROPVALUES.pv,
        'ph': PROPVALUES.ph,
        'margin-vert': PROPVALUES.mv,
        'margin-horz': PROPVALUES.mh,
        'mv': PROPVALUES.mv,
        'mh': PROPVALUES.mh
    };

    // Work with CSS here
    return function (css) {
        css.eachRule(function (rule) {
            rule.nodes.forEach(function(node) {
                var prop = node.prop;

                // Return if the value isn't in PROPS
                if (! PROPS.hasOwnProperty(prop)) return;

                css.eachDecl(prop, function (decl) {
                    var declarations = PROPS[prop];

                    for (var i = 0; i < declarations.length; i++) {
                        decl.cloneBefore({ prop: declarations[i], value: decl.value });
                    }
                    decl.removeSelf();
                });
            });
        });


        // This works!
        // css.eachDecl('padding-vert', function (decl) {
        //     decl.cloneBefore({ prop: 'padding-top', value: decl.value });
        //     decl.cloneBefore({ prop: 'padding-bottom', value: decl.value });
        //     decl.removeSelf();
        // });
    };
});
