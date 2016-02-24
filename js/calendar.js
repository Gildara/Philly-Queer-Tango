$(document).ready(function() {

    // page is now ready, initialize the calendar...

$('#calendar').fullCalendar({
				selectable: true,
				selectHelper: true,
				select: function(start, end, allDay)
				{
					var title = prompt('Event Title:');
					if (title)
					{
						calendar.fullCalendar('renderEvent',
							{
								title: title,
								start: start,
								end: end,
								allDay: allDay
							},
							true // make the event "stick"
						);
					}
					calendar.fullCalendar('unselect');
				},
				editable: true,
				weekMode: 'liquid',
				url:'#',
				events: [
					{
						title: 'Tango Hop',
						start: new Date(2016, 1, 9, 6),
						end: new Date(2016, 1, 9, 10),
						allDay: false
					},
					{
						title: 'Tango Meetup',
						start: new Date(2016, 1, 11, 00),
                    allDay: false
                }
            ]
        });
         
    });