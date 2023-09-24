function reading(pages, pagesForHour, days) {
    hoursNeeded = pages / pagesForHour;
    hoursPerDay = hoursNeeded / days
    console.log(hoursPerDay);
}

reading(212,
    20 ,
    2 )
reading(432,
    15 ,
    4 )