$(document).ready(function() {

    // page is now ready, initialize the calendar...

$('#calendar').fullCalendar({
				selectable: true,
				selectHelper: true,
				select: function(start, end, allDay)
				{
					/*var title = prompt('Event Title:');
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
					}*/
					calendar.fullCalendar('unselect');
				},
				editable: true,
				weekMode: 'liquid',
				url:'#',
			events: [
					{
						title: 'Tango Hop',
						start: '2016-03-12T20:00:00',
						end: '2016-03-13T03:00:00',
						allDay: false
					},
					{
						title: 'Queer Tango!',
						start: '2016-03-05T14:30:00',
						end: '2016-03-05T17:30:00',
                    allDay: false
                },
				{
						title: 'Queer Tango!',
						start: '2016-04-02T14:30:00',
						end: '2016-04-02T17:30:00',
                    allDay: false
                },
				{
						title: 'Queer Tango!',
						start: '2016-05-07T14:30:00',
						end: '2016-05-07T17:30:00',
                    allDay: false
                },
				{
						title: 'Beginner Series Starts!',
						start: '2016-03-02T20:30:00',
						end: '2016-03-02T22:00:00',
                    allDay: false
                }
            ]
        });
         
    });