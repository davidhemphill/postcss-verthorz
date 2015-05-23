var postcss = require('postcss');

module.exports = postcss.plugin('postcss-verthorz', function (opts) {
    opts = opts || {};

    var VALUES = {
        pv: ['padding-top', 'padding-bottom'],
        ph: ['padding-left', 'padding-right'],
        mv: ['margin-top', 'margin-bottom'],
        mh: ['margin-left', 'margin-right']
    };

    var PROPS = {
        'padding-vert': VALUES.pv,
        'padding-horz': VALUES.ph,
        'pv': VALUES.pv,
        'ph': VALUES.ph,
        'margin-vert': VALUES.mv,
        'margin-horz': VALUES.mh,
        'mv': VALUES.mv,
        'mh': VALUES.mh
    };

    return function (css) {
        css.eachRule(function (rule) {
            rule.each(function(decl) {
                var prop = decl.prop;

                if (!PROPS.hasOwnProperty(prop)) return;

                var properties = PROPS[prop];

                properties.forEach(function(property, index) {
                    decl.cloneBefore({ prop: properties[index], value: decl.value });
                });

                decl.removeSelf();
            });
        });
    };
});
