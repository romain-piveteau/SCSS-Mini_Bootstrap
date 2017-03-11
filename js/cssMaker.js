/*
* @Author: romain.piveteau@epitech.eu
* @Date:   2017-02-22 11:50:50
* @Last Modified by:   romain.piveteau@epitech.eu
* @Last Modified time: 2017-02-26 22:12:51
*/
$(document).ready(function($) {
    $('.close').each(function(index, el) {
        el.title = "Fermer l'alerte " + el.parentNode.className.substring(6);
    });
    
    $('.close').on('click', function(e) {
        e.preventDefault();
        $(this.parentNode).hide(333);
    });
   

    $("[data-target='#myModal']").on('click', function(e) {
        e.preventDefault();
        $("#myModal").modal("show");
    });
    
});

jQuery.fn.modal = function(act){
    if ( act === 'show' ) {
        this.show('fast', function () {
        window.modalId = this.id;
            $(window).on('click', function(e) {                
                if ( e.target.id !== window.modalId ) {
                    $('.modal').modal('hide');
                }
            });

        });
    
        $('.popin-dismiss').on('click', function (e) {
            $('.modal').hide('fast');
        });

        document.onkeydown = function(e) {
            if ( e.key === 'Escape' ) {
                $('.modal').modal('hide');
            }
        };

    } else if ( act === 'hide') {
    
        this.hide('fast', function (e) {
            $(window).off();
        });
    
    }
};
