import $ from 'jquery';
if( $(".map#map").length  > 0 ){
    ymaps.ready(init);
    function init(){
        // Создание карты.
        let myMap = new ymaps.Map("map", {
            center: [59.889038, 30.278274],
            zoom: 14,
            controls: ['fullscreenControl'],
        });
        // Добавим панель маршрутизации.
        myMap.controls.add('routePanelControl');
        myMap.controls.add('zoomControl', { position: { top: 'auto', left: 'auto', right: 10, bottom: 40} });
        let control = myMap.controls.get('routePanelControl');
        // Свойства самой панели
        control.options.set({
            maxWidth: '240',
            autofocus: false,
            showHeader: true,
            title: 'Как добраться?',
        });
        // Состояние панели в начале
        control.routePanel.state.set({
            // Тип маршрутизации.
            type: 'auto',
            fromEnabled: true,
            from: '',
            toEnabled: false,
            to: 'Санкт-Петербург, ул. Маршала Говорова, д.35'
        });
        // Опции панели для построения машрутов.
        control.routePanel.options.set({
            reverseGeocoding: true,
            allowSwitch: false,
            // Виды маршрутизации
            types: { auto: true, masstransit: true, pedestrian: true, bicycle: false, taxi: false }
        });
        // Получение объекта, описывающего построенные маршруты.
        let multiRoutePromise = control.routePanel.getRouteAsync();
        multiRoutePromise.then(function(multiRoute) {
            multiRoute.options.set({
                // Цвет метки начальной точки.
                wayPointStartIconFillColor: "#1E1E1E",
                // Внешний вид линий (для всех маршрутов).
                routeStrokeColor: "726d72",
                routeStrokeStyle: "shortdot",
                routeActiveStrokeColor: "1E1E1E",
                routeActiveStrokeStyle: "solid",
                boundsAutoApply: true
            }); 
            
            multiRoute.model.events.once("requestsuccess", function () {
                let yandexWayPoint = multiRoute.getWayPoints().get(1);
                // Создаем балун у метки второй точки.
                ymaps.geoObject.addon.balloon.get(yandexWayPoint);
                yandexWayPoint.options.set({
                    preset: "islands#blackDotIcon",
                    iconContentLayout: ymaps.templateLayoutFactory.createClass(
                        '<b>Наш&nbsp;офис</b>'
                    ),
                    balloonContentLayout: ymaps.templateLayoutFactory.createClass(
                        '<div style="width:180px;max-width:100%;margin:20px 0 20px 20px;text-align:center">{{ properties.address|raw }}</div>'
                    )
                });
            });
        }, function (err) {
            console.log(err); 
        });
    }
}