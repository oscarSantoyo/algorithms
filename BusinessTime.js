

function addBusinessTime(holiday, time, duration){
    const durationMili = duration * 1000
    let timePoint = time.getTime() + durationMili
    if(timePoint >= holiday.start.getTime() && timePoint <= holiday.end.getTime()){
        timePoint = (durationMili > 0 ? holiday.end.getTime() : holiday.start.getTime()) + durationMili
    }
    const result = new Date(timePoint)
    return result
}

const holiday = {
    start: new Date('2019-12-24T21:00:00'),
    end: new Date('2019-12-25T21:00:00')
}

addBusinessTime(holiday, new Date('2019-12-01T00:00:00'), 60 * 60) // returns 2019-12-01T01:00:00
addBusinessTime(holiday, new Date('2019-12-24T21:00:00'), 1) // returns 2019-12-25T21:00:01
addBusinessTime(holiday, new Date('2019-12-24T20:30:00'), 60 * 60) // returns 2019-12-25T21:30:00
addBusinessTime(holiday, new Date('2019-12-25T00:00:00'), 1) // returns 2019-12-25T21:00:01
addBusinessTime(holiday, new Date('2019-12-25T00:00:00'), -1) // returns 2019-12-24T20:59:59
