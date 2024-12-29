// Import Axios (if you're using modules or Node.js, otherwise include via <script> tag)
import getNextWeekDates from './getDates.js';
import sendPostRequest from './getTrainsRequest.js'
import findDepartureAtTime from './findTime.js';
import getTickets from './getTicketsRequest.js';
import fs from 'fs'


let dates = getNextWeekDates();
console.log(dates);



const encodedTrips = [];
const tickets = [];

const promises = dates.map(async (date) => {
    try {
        const data = await sendPostRequest(date);  // Wait for the response
        encodedTrips.push({
            aller: findDepartureAtTime(data.body.departurePath,"07:39:00").listPrixFlexibilite[0].prixFlexibilite[0].encodedAttributs,
            retour: findDepartureAtTime(data.body.arrivalPath,"17:44:00").listPrixFlexibilite[0].prixFlexibilite[0].encodedAttributs
        });
    } catch (error) {
        console.error('Error occurred during request getTrainsRequest:', error);
    }
});

// Wait for all promises to resolve
await Promise.all(promises);
// Now it's safe to log the encodedTrips after all async tasks are done



const promises2 = encodedTrips.map(async (trip) => {
    try {
        const data = await getTickets(trip.aller,trip.retour);  // Wait for the response
        tickets.push(data.data.achatResponse.body.ticketsAndVouchers[0].contents)
    } catch (error) {
        console.error('Error occurred during request getTickets:', error);
    }
});

// Wait for all promises to resolve
await Promise.all(promises2);

tickets.forEach((base64String,i) => {
    const buffer = Buffer.from(base64String, 'base64');
    fs.writeFile('./tickets/'+dates[i]+'.pdf', buffer, (err) => {
        if (err) throw err;
        console.log('PDF saved successfully!');
      });
})
