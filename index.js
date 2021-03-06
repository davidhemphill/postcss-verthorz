var postcss = require('postcss');

module.exports = postcss.plugin('postcss-verthorz', function () {

    var VALUES = {
        pv: ['padding-top', 'padding-bottom'],
        ph: ['padding-left', 'padding-right'],
        mv: ['margin-top', 'margin-bottom'],
        mh: ['margin-left', 'margin-right']
    };

    var PROPS = {
        'padding-vertical': VALUES.pv,
        'padding-horizontal': VALUES.ph,
        'padding-vert': VALUES.pv,
        'padding-horz': VALUES.ph,
        'pv': VALUES.pv,
        'ph': VALUES.ph,
        'margin-vertical': VALUES.mv,
        'margin-horizontal': VALUES.mh,
        'margin-vert': VALUES.mv,
        'margin-horz': VALUES.mh,
        'mv': VALUES.mv,
        'mh': VALUES.mh
    };

    return function (root) {
        root.walkRules(function (rule) {
            rule.walkDecls(function(decl) {

                var declArray = decl.value.split(' ');

                var prop = decl.prop;

                if (!PROPS.hasOwnProperty(prop)) return;

                var properties = PROPS[prop];

                properties.forEach(function(property, index) {
                    if (declArray.length > 1) {
                        decl.cloneBefore({ prop: properties[index], value: declArray[index] });
                    } else {
                        decl.cloneBefore({ prop: properties[index], value: decl.value });
                    }
                });

                decl.remove();
            });
        });
    };
});
