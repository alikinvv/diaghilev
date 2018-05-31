var trigger = true,
    mobileDirection,
    ww = $(window).width(),
    wh = $(window).height();

// set position menu blocks
function setPosition(el, direction) {anime({
    targets: el,
    translateY: ($(el).outerHeight() + 100) * direction,
    duration: 0
})};

// slide up menu block
function slideUp(el, btn, direction) {
    trigger = false;
    $('#overlay').removeClass('active');
    $(btn).removeClass('active');
    anime({
        targets: el,
        translateY: ($(el).outerHeight() + 100) * direction,
        duration: 150,
        easing: 'linear',
        complete: function() {
            trigger = true;
        }
    })
}; 

$(document).ready(function () {

    ww <= 767 ?  $('.header__sponsor img').attr('src','img/sber-mobile.svg') : $('.header__sponsor img').attr('src','img/sber.svg');

    // set of the same height
    function sameOuterHeight(block) {
        if($('*').is(block)) {
            var maxHeight = 0;
            $(block).each(function () {
                var h_block = parseInt($(this).outerHeight());
                if(h_block > maxHeight) {
                    maxHeight = h_block;
                };
            });
            $(block).height(maxHeight);
        }
    }

    ww <= 1023 ?  sameOuterHeight($('.card')) : '';

    // .header__buttons move to footer
    ww <= 1023 ?  $('.header__buttons').css('top', wh - 44) : '';
    
    // set full screen height .places on mobile
    ww <= 1023 ? $('.places').height(wh - $('.header').height() - $('.footer').height()) : '';

    // overflow on main page
    !$('#map').length ? $('html,body').css('overflow','auto') : ''; 

    ww <= 1023 ? mobileDirection = 1 : mobileDirection = -1;

    // slide down menu block
    function slideDown(el, btn) {
        trigger = false;
        $('#overlay').addClass('active');
        $(btn).addClass('active');
        anime({
            targets: el,
            translateY: 0,
            duration: 1200,
            complete: function() {
                trigger = true;
            }
        })
    };       

    setPosition('.programms', mobileDirection);
    setPosition('.places', mobileDirection);
    setPosition('#datepicker', mobileDirection);

    // animate programms block 
    $('.programms-btn').click(function(e) {
        if($('.events').hasClass('active') && trigger) {
            trigger = false;
            $('.events').removeClass('active');
            anime({
                targets: '#datepicker',
                translateY: ($('#datepicker').outerHeight() + 100) * mobileDirection,
                duration: 150,
                easing: 'linear',
                complete: function() {
                    trigger = true;
                    slideDown('.programms','.programms-btn');
                }
            })
        }
        if($('.places-btn').hasClass('active') && trigger) {
            trigger = false;
            $('.places-btn').removeClass('active');
            anime({
                targets: '.places',
                translateY: ($('.places').outerHeight() + 100) * mobileDirection,
                duration: 150,
                easing: 'linear',
                complete: function() {
                    trigger = true;
                    slideDown('.programms','.programms-btn');
                }
            })
        }

        if(!$(this).hasClass('active') && trigger) {       
            slideDown('.programms','.programms-btn');
        } else if(trigger) {           
            slideUp('.programms','.programms-btn', mobileDirection);
        }
    });    

    // animate places block 
    $('.places-btn').click(function(e) {
        e.preventDefault();
        if($('.events').hasClass('active') && trigger) {
            trigger = false;
            $('.events').removeClass('active');
            anime({
                targets: '#datepicker',
                translateY: ($('#datepicker').outerHeight() + 100) * mobileDirection,
                duration: 150,
                easing: 'linear',
                complete: function() {
                    trigger = true;
                    slideDown('.places','.places-btn');
                }
            })
        }
        if($('.programms-btn').hasClass('active') && trigger) {
            trigger = false;
            $('.programms-btn').removeClass('active');
            anime({
                targets: '.programms',
                translateY: ($('.programms').outerHeight() + 100) * mobileDirection,
                duration: 150,
                easing: 'linear',
                complete: function() {
                    trigger = true;
                    slideDown('.places','.places-btn');
                }
            })
        }

        if(!$(this).hasClass('active') && trigger) {
            slideDown('.places','.places-btn');
        } else if(trigger) {
            slideUp('.places','.places-btn', mobileDirection);
        }
    });  

    // animate datepicker
    $('.events').click(function(e) {
        e.preventDefault();
        if($('.programms-btn').hasClass('active') && trigger) {
            trigger = false;
            $('.programms-btn').removeClass('active');
            anime({
                targets: '.programms',
                translateY: ($('.programms').outerHeight() + 100) * mobileDirection,
                duration: 150,
                easing: 'linear',
                complete: function() {
                    trigger = true;
                    slideDown('#datepicker','.events');
                }
            })
        }

        if($('.places-btn').hasClass('active') && trigger) {
            trigger = false;
            $('.places-btn').removeClass('active');
            anime({
                targets: '.places',
                translateY: ($('.places').outerHeight() + 100) * mobileDirection,
                duration: 150,
                easing: 'linear',
                complete: function() {
                    trigger = true;
                    slideDown('#datepicker','.events');
                }
            })
        }

        if(!$(this).hasClass('active') && trigger) {
            slideDown('#datepicker','.events');
        } else if(trigger) {
            slideUp('#datepicker','.events', mobileDirection);
        }
    });    

    
    // add white backdrops
    $('body').append('<div id="overlay"></div>');

    $('#overlay').click(function() {
        $('#overlay').removeClass('active');
        if($('.events').hasClass('active') && trigger) {
            trigger = false;
            $('.events').removeClass('active');
            anime({
                targets: '#datepicker',
                translateY: ($('#datepicker').outerHeight() + 100) * mobileDirection,
                duration: 150,
                easing: 'linear',
                complete: function() {
                    trigger = true;
                }
            })
        }

        if($('.programms-btn').hasClass('active') && trigger) {
            trigger = false;
            $('.programms-btn').removeClass('active');
            anime({
                targets: '.programms',
                translateY: ($('.programms').outerHeight() + 100) * mobileDirection,
                duration: 150,
                easing: 'linear',
                complete: function() {
                    trigger = true;
                }
            })
        }

        if($('.places-btn').hasClass('active') && trigger) {
            trigger = false;
            $('.places-btn').removeClass('active');
            anime({
                targets: '.places',
                translateY: ($('.places').outerHeight() + 100) * mobileDirection,
                duration: 150,
                easing: 'linear',
                complete: function() {
                    trigger = true;
                }
            })
        }
    });

    // places checkboxes 
    $('.places__col a').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
    }); 

    // programms checkboxes 
    $('.programms .programms__item').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
    }); 

    // favorite button click
    $('.btn-gray').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
    }); 

    // banner close
    $('.banner__close').click(function() {
        anime({
            targets: '.banner',
            translateX: '110%',
            duration: 300,
            easing: 'linear'
        });
    });

    // heart click
    $('body').on('click', '.card__like, .popup__like', function() {
        $(this).toggleClass('active');
    });

    // banner slider init
    var swiper = new Swiper('.banner-slider', {
        slidesPerView: 1,
        spaceBetween: 80,
    });

    // main slider init
    var swiperMain = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        autoHeight: true,
        spaceBetween: 13,
        freeMode: true,
        mousewheelControl: true,
        breakpoints: {
            1920: {
                direction: 'vertical',
            },
            1023: {
                direction: 'horizontal'
            },
            767: {
                direction: 'horizontal',
                slidesPerView: 'auto',
                autoHeight: true,
                spaceBetween: 10,
                freeMode: true,
                mousewheelControl: true,
            }
        }
    });
    

    // set full screen height
    $('#map,.swiper-container').height(wh - $('.header').height() - $('.footer').height());

    // Bind the swipeleftHandler callback function to the swipe event on div.box
    $( "div.box" ).on( "swipeleft", function() {
        $( event.target ).addClass( "swipeleft" );
    } );
 

    // main slider toggle left
    $('.hideList').click(function () {
        if(ww <= 1023) {
            if (!$(this).hasClass('is-active')) {
                anime({
                    targets: '.swiper-container',
                    translateY: $('.swiper-container').height() + 10,
                    duration: 500,
                    easing: 'easeOutQuad'
                });   
                anime({
                    targets: '.hideList svg',
                    rotate: 180,
                    duration: 500
                });
                $(this).addClass('is-active');     
            } else {
                anime({
                    targets: '.swiper-container',
                    translateY: 0,
                    duration: 1500
                });   
                anime({
                    targets: '.hideList svg',
                    rotate: 360,
                    duration: 500
                });
                $(this).removeClass('is-active');     
            }
            // $('.swiper-container').addClass('vertical');
            // swiper.destroy();
            // var swiper1 = new Swiper('.swiper-container', {
            //     direction: 'vertical',
            //     slidesPerView: 'auto',
            //     autoHeight: true,
            //     spaceBetween: 13,
            //     freeMode: true,
            //     mousewheelControl: true
            // });    
            
        } else {
            if (!$(this).hasClass('is-active')) {
                $(this).addClass('is-active');
                anime({
                    targets: '.swiper-container',
                    translateX: $('.swiper-slide').outerWidth() * -1,
                    duration: 500,
                    easing: 'easeOutQuad'
                });
                anime({
                    targets: '.hideList svg',
                    rotate: 180,
                    duration: 500
                });
            } else {
                $(this).removeClass('is-active');
                anime({
                    targets: '.swiper-container',
                    translateX: 0,
                    duration: 1200
                });
                anime({
                    targets: '.hideList svg',
                    rotate: 0,
                    duration: 500
                });
            }
        }
        
    });

    // datepicker
   var datepicker = new Datepickk({
       container: document.querySelector('#datepicker'),
       inline: true,
       range: true,
       lang: 'ru'
   });
   
   datepicker.setDate = new Date(2018,5,1);

   // add submit button to datepicker
   $('.d-tables.range').append('<input class="datepicker__submit" type="submit">');

});

// ESC event listener
$(document).keyup(function(e) {
    if (e.keyCode == 27) {
        $('#overlay').removeClass('active');
        if($('.events').hasClass('active') && trigger) {
            trigger = false;
            $('.events').removeClass('active');
            anime({
                targets: '#datepicker',
                translateY: ($('#datepicker').outerHeight() + 100) * -1,
                duration: 150,
                easing: 'linear',
                complete: function() {
                    trigger = true;
                }
            })
        }

        if($('.programms-btn').hasClass('active') && trigger) {
            trigger = false;
            $('.programms-btn').removeClass('active');
            anime({
                targets: '.programms',
                translateY: ($('.programms').outerHeight() + 100) * -1,
                duration: 150,
                easing: 'linear',
                complete: function() {
                    trigger = true;
                }
            })
        }

        if($('.places-btn').hasClass('active') && trigger) {
            trigger = false;
            $('.places-btn').removeClass('active');
            anime({
                targets: '.places',
                translateY: ($('.places').outerHeight() + 100) * -1,
                duration: 150,
                easing: 'linear',
                complete: function() {
                    trigger = true;
                }
            })
        }
   }
});

$(window).resize(function () {
    ww = $(window).width();
    wh = $(window).height();  

    ww <= 767 ?  $('.header__sponsor img').attr('src','img/sber-mobile.svg') : $('.header__sponsor img').attr('src','img/sber.svg');

    ww <= 1023 ? mobileDirection = 1 : mobileDirection = -1;

    setPosition('.programms', mobileDirection);
    setPosition('.places', mobileDirection);
    setPosition('#datepicker', mobileDirection);

    slideUp('.programms','.programms-btn', mobileDirection);
    slideUp('#datepicker','.events', mobileDirection);
    slideUp('.places','.places-btn', mobileDirection);

    var swiperMain = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        autoHeight: true,
        spaceBetween: 13,
        freeMode: true,
        mousewheelControl: true,
        breakpoints: {
            1920: {
                direction: 'vertical',
            },
            1023: {
                direction: 'horizontal'
            }
        }
    });

     // set full screen height
    $('#map,.swiper-container').height(wh - $('.header').height() - $('.footer').height());

    // set full screen height .places on mobile
    ww <= 1023 ? $('.places').height(wh - $('.header').height() - $('.footer').height()) : '';

    // .header__buttons move to footer
    ww <= 1023 ?  $('.header__buttons').css('top', wh - 34) : '';
});

$(window).load(function () {    
    // banner animation
    anime({
        targets: '.banner',
        translateX: '110%',
        duration: 0
    });
    setTimeout(function() {
        anime({
            targets: '.banner',
            translateX: 0,
            duration: 1000
        });
    }, 5000);
                           
});

if($('#map').length) {    
    ymaps.ready(function () {    
        var myMap = new ymaps.Map('map', {
                center: [58.012453, 56.239072],
                zoom: 15,
                controls: ['smallMapDefaultSet']
            }, {
                searchControlProvider: 'yandex#search'
            }),
    
            // Создание макета балуна на основе Twitter Bootstrap.
            MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
                '<div class="popover top">' +
                '<div class="popover-inner">' +
                '$[[options.contentLayout observeSize minWidth=334 maxWidth=334]]' +
                '</div>' +
                '</div>', {
                /* Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент. */
                build: function () {
                    this.constructor.superclass.build.call(this);
    
                    this._$element = $('.popover', this.getParentElement());
    
                    this.applyElementOffset();
    
                },
    
                /* Удаляет содержимое макета из DOM. */
                clear: function () {
                    this._$element.find('.close')
                        .off('click');
    
                    this.constructor.superclass.clear.call(this);
                },
    
                /* Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета. */
                onSublayoutSizeChange: function () {
                    MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);
    
                    if (!this._isElement(this._$element)) {
                        return;
                    }
    
                    this.applyElementOffset();
    
                    this.events.fire('shapechange');
                },
    
                /* Сдвигаем балун, чтобы "хвостик" указывал на точку привязки. */
                applyElementOffset: function () {
                    this._$element.css({
                        left: -(this._$element[0].offsetWidth / 2),
                        top: -(this._$element[0].offsetHeight * -1)
                    });
                },
    
                /* Закрывает балун при клике на крестик, кидая событие "userclose" на макете. */
                onCloseClick: function (e) {
                    e.preventDefault();
    
                    this.events.fire('userclose');
                },
    
                /* Используется для автопозиционирования (balloonAutoPan). */
                getShape: function () {
                    if (!this._isElement(this._$element)) {
                        return MyBalloonLayout.superclass.getShape.call(this);
                    }
    
                    var position = this._$element.position();
    
                    return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                        [position.left, position.top],
                        [
                            position.left + this._$element[0].offsetWidth,
                            position.top + this._$element[0].offsetHeight * -1
                        ]
                    ]));
                },
    
                /* Проверяем наличие элемента (в ИЕ и Опере его еще может не быть). */
                _isElement: function (element) {
                    return element && element[0] && element.find('.arrow')[0];
                }
            }),
    
            // Создание вложенного макета содержимого балуна.
            MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div class="popup">' + 
                    '<div class="popup__header" style="background-image: url(../img/$[properties.popupImage])">' +
                        '<svg class="popup__like icon"><use xlink:href="img/symbol-defs.svg#icon-heart"></use></svg>' +
                        '<p class="popup__date"><span>$[properties.popupDay]</span>.$[properties.popupMonth]</p>' +
                        '<p class="popup__time">$[properties.popupTime] <br> $[properties.popupDesc]</p>' +
                        '<p class="popup__place"><svg class="icon"><use xlink:href="img/symbol-defs.svg#icon-house"></use></svg> <span>$[properties.popupPlace]</span></p>' +
                    '</div>' +                     
                    '<div class="popup__content">' + 
                        '<span class="popup__label popup__label-yellow">$[properties.popupLabel]</span>' +
                        '<a href="$[properties.popupLink]" class="popup__title">$[properties.popupTitle]</a>' +
                        '<p class="popup__text">$[properties.popupText]</p>' +
                    '</div>' +
                '</div>'
            ),
    
            // Создание метки с пользовательским макетом балуна.
            myPlacemark = window.myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                popupImage: 'man.jpg',
                popupDay: '15',
                popupMonth: '06',
                popupTime: 'пт / 19:00-20:15',
                popupDesc: 'концерт',
                popupPlace: 'органный зал',
                popupLabel: 'основная программа',
                popupTitle: 'концерт пианистов алексея любимова и алексея зуева',
                popupText: 'александр рабинович-бараковский, игорь стравинский <br> билетов нет',
                popupLink: '#'
            }, {
                balloonShadow: false,
                balloonLayout: MyBalloonLayout,
                balloonContentLayout: MyBalloonContentLayout,
                balloonPanelMaxMapArea: 0,
                // И дополнительно смещаем балун, для открытия над иконкой.
                //balloonOffset: [3, -40]
            });
    
    
        myMap.geoObjects.add(myPlacemark);
    
        myPlacemark.events.add('click', function () {
            // myMap.panTo(myPlacemark.geometry.getCoordinates(), {
            //     delay: 0
            // }); 
            $('.hideList').addClass('is-active');
            if(ww <= 1023) {
                anime({
                    targets: '.swiper-container',
                    translateY: $('.swiper-container').height() + 10,
                    duration: 500,
                    easing: 'easeOutQuad'
                });   
                anime({
                    targets: '.hideList svg',
                    rotate: 180,
                    duration: 500
                });
            } else {
                anime({
                    targets: '.swiper-container',
                    translateX: $('.swiper-slide').outerWidth() * -1,
                    duration: 500,
                    easing: 'easeOutQuad'
                });
                anime({
                    targets: '.hideList svg',
                    rotate: 180,
                    duration: 500
                });
            }                
        });
    
        myMap.events.add('click', function (e) {  
             myMap.balloon.close();    
        });
    
        setTimeout(function() {
            $('.loader').hide();
        },1000);
    });
}