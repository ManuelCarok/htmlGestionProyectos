$(document).ready(function () {
    $('#calendar').fullCalendar({
        schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
        customButtons: {
            promptResource: {
                text: 'Agregar proyecto',
                click: function () {
                    var title = prompt('Room name');
                    if (title) {
                        $('#calendar').fullCalendar(
                            'addResource',
                            { title: title },
                            true // scroll to the new resource?
                        );
                    }
                }
            }
        },
        now: '2018-07-22',
        height: 'auto',
        locale: 'es',
        themeSystem: 'bootstrap3',
        selectable: true,
        selectHelper: true,
        editable: true, // enable draggable events
        aspectRatio: 1.8,
        header: {
            left: 'promptResource prev,next',
            center: 'title',
            right: 'timelineMonth,timelineThreeDays'
        },
        defaultView: 'timelineThreeDays',
        views: {
            timelineThreeDays: {
                type: 'timelineWeek',
                duration: { days: 18 }
            }
        },
        resourceLabelText: 'Proyectos',
        resources: [
            { id: 'a', title: 'Auditorium A' },
            { id: 'b', title: 'Auditorium B', eventColor: 'green' },
            { id: 'c', title: 'Auditorium C', eventColor: 'orange' },
            {
                id: 'd', title: 'Auditorium D', children: [
                    { id: 'd1', title: 'Room D1' },
                    { id: 'd2', title: 'Room D2' }
                ]
            }
        ],
        events: [
            { id: '1', resourceId: 'b', start: '2018-07-22T02:00:00', end: '2018-07-25T07:00:00', title: 'event 1' },
            { id: '2', resourceId: 'c', start: '2018-07-24T19:00:00', end: '2018-07-26T22:00:00', title: 'event 2' },
            { id: '3', resourceId: 'd', start: '2018-07-28', end: '2018-07-30', title: 'event 3' }
        ],
        select: function (start, end, jsEvent, view, resource) {

        },
        dayClick: function (date, jsEvent, view, resource) {

        }
    });
});