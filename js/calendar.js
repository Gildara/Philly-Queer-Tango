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
				editable: true		
    })
			
});