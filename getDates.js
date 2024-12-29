const getNextWeekDates = () => {
  const today = new Date();

  // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const currentDay = today.getDay();

  // Calculate how many days to add to get to the next Monday
  const daysUntilNextMonday = (currentDay === 0 ? 1 : 9 - currentDay);

  // Start from the next Monday and loop to get Monday to Friday
  const nextWeekDates = [];
  for (let i = 0; i < 5; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + daysUntilNextMonday + i);
      nextWeekDates.push(nextDay.toISOString().split('T')[0]); // Format to YYYY-MM-DD
  }

  return nextWeekDates; // Returns an array of dates for Monday to Friday of next week
};

  
export default getNextWeekDates
  