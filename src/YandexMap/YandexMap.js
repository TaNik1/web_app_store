import React from 'react';
import './YandexMap.css';

const ymaps = window.ymaps;

ymaps.ready(init);

function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
                // Координаты центра карты.
                // Порядок по умолчанию: «широта, долгота».
                // Чтобы не определять координаты центра карты вручную,
                // воспользуйтесь инструментом Определение координат.
                center: [56.8259266, 60.604886],
                // Уровень масштабирования. Допустимые значения:
                // от 0 (весь мир) до 19.
                zoom: 17,
                type: 'yandex#map',
                controls: []
            },
            {
                // Зададим ограниченную область прямоугольником,
                // примерно описывающим Санкт-Петербург.
                restrictMapArea: [[56.961660, 60.261055],
                    [56.678812, 60.859405]
                ]
            }
        )
    ;

    var searchControl = new ymaps.control.SearchControl({
        options: {
            provider: 'yandex#search'
        }
    });
    myMap.events.add('click', function (e) {
        myMap.geoObjects.removeAll();
        var coords = e.get('coords');
        var myGeocoder = ymaps.geocode([coords[0], coords[1]], {kind: "house"});
        myGeocoder.then(
            function (res) {
                var street = res.geoObjects.get(0);
                var name = street.properties.get('name');
                myMap.geoObjects.add(new ymaps.Placemark([coords[0], coords[1]], {
                    iconCaption: name
                }, {
                    preset: 'islands#icon',

                    iconColor: '#8577D9'
                })).add(new ymaps.Circle([
                    // Координаты центра круга.
                    [coords[0], coords[1]],
                    // Радиус круга в метрах.
                    100
                ], {}, {
                    // Задаем опции круга.
                    // Включаем возможность перетаскивания круга.
                    draggable: false,
                    // Цвет заливки.
                    // Последний байт (77) определяет прозрачность.
                    // Прозрачность заливки также можно задать используя опцию "fillOpacity".
                    fillColor: "#8577D966",
                    // Цвет обводки.
                    strokeColor: "#8577D9",
                    // Прозрачность обводки.
                    strokeOpacity: 0.8,
                    // Ширина обводки в пикселях.
                    strokeWidth: 4
                }))
            })
    });
    var searchControl = new ymaps.control.SearchControl({
        options: {
            // Будет производиться поиск только по топонимам.
            provider: 'yandex#map',
            boundedBy: [[56.961660, 60.261055], [56.678812, 60.859405]]
        }
    });
    var mySearchResults = new ymaps.GeoObjectCollection(null, {
        hintContentLayout: ymaps.templateLayoutFactory.createClass('$[properties.name]')
    });

// Добавляем элемент управления на карту.
    myMap.controls.add(searchControl);
}

const Map = ({onAdd}) => {
    return (
        <div className={"help"}>
            <div id="map" className={"map"}></div>
            <div className={"block"}>
                <button className={"btn"}>Подтвердить</button>
            </div>
        </div>

    );
};

export default Map;