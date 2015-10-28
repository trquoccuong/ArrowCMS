/**
 * Created by thangnv on 8/11/15.
 */
"use strict";

/** Create pagination */
module.exports = function (env) {
    env.addFilter('pagination_front', function (totalPage, current_page, link) {
        let html ='';
        if (totalPage > 1){
            html +=  '<div class="page-links"><ul class="pagination">';
            if (current_page != 1){
                html +='<li><a href="'+link.replace('{page}',(current_page-1))+'">«</a></li>';
            }
            for (let i = 1 ; i <= totalPage ; i++){
                if (i == current_page){
                    html += '<li class="active"><a style="background-color: #1FA67A !important; " href="#">'+i+'</a></li>';
                }else {
                    html += '<li><a href="'+link.replace('{page}',i)+'">'+i+'</a></li>';
                }
            }
            if (current_page != totalPage){
                html +='<li><a href="'+link.replace('{page}',(current_page+1))+'">»</a></li>';
            }
            html += '</ul></div>';
        }
        return html;
    });
};
