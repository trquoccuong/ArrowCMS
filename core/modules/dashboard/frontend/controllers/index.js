'use strict';

let _module = new FrontModule;
let Promise = require('bluebird');

_module.index = function (req, res) {
    //_module.render404(req, res); return;
    let page = req.params.page || 1;
    let number_item = __config.pagination.number_item || 10;
    let totalPage = 1;
    Promise.all([
        __models.post.findAll({
            limit : 5,
            order : 'published_at DESC',
            where : {
                image : {
                    $ne : ''
                },
                type : 'post',
                published : 1
            },
            include: [
                { model : __models.user }
            ]
        }),
        __models.post.findAndCount({
            where : {
                type : 'post',
                published : 1
            },
            offset: (page - 1) * number_item,
            limit: number_item,
            order : 'created_at DESC',
            include: [
                { model : __models.user }
            ]
        }),
        __models.category.findAll()
    ])
    .then(function (results) {
            totalPage = Math.ceil(parseInt(results[1].count) / number_item) || 1;
        _module.render(req, res, 'index.html', {
            postsSlider : results[0],
            allPost : results[1].rows,
            categories : results[2],
            totalPage: totalPage,
            currentPage: page
        });
    }).catch(function (err) {
        _module.render404(req,res);
    })

};

module.exports = _module;