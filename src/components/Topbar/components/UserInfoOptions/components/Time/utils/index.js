/**
 * return number of days in month
 * @param isoDate
 * @returns {number}
 */
const getNumDaysInMonth = (isoDate) => {
  const date = new Date(isoDate);
  const month = date.getMonth();
  const year = date.getFullYear();
  switch (month) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
      return 31;
    case 3:
    case 5:
    case 8:
    case 10:
      return 30;
    case 1:
      return leapYear(year) ? 29 : 28;
    default:
      throw new Error(`month is out of range`);
  }
};

/**
 * return weekday
 * @param number
 * @returns {string}
 */
export const getWeekday = (number) => {
  switch (number) {
    case 0:
      return "SUNDAY";
    case 1:
      return "MONDAY";
    case 2:
      return "TUESDAY";
    case 3:
      return "WEDNESDAY";
    case 4:
      return "THURSDAY";
    case 5:
      return "FRIDAY";
    case 6:
      return "SATURDAY";
    default:
      throw new Error(`day is out of range`);
  }
};

/**
 * return month and year
 * @param dateTime
 * @returns {string|undefined}
 */
const generateLaunchCalendarKey = (dateTime) => {
  const mm = dateTime.substring(5, 7);
  const yyyy = dateTime.substring(0, 4);

  switch (mm) {
    case "01":
      return `JAN ${yyyy}`;
    case "02":
      return `FEB ${yyyy}`;
    case "03":
      return `MAR ${yyyy}`;
    case "04":
      return `APR ${yyyy}`;
    case "05":
      return `MAY ${yyyy}`;
    case "06":
      return `JUN ${yyyy}`;
    case "07":
      return `JUL ${yyyy}`;
    case "08":
      return `AUG ${yyyy}`;
    case "09":
      return `SEP ${yyyy}`;
    case "10":
      return `OCT ${yyyy}`;
    case "11":
      return `NOV ${yyyy}`;
    case "12":
      return `DEC ${yyyy}`;
    default:
      throw new Error(`month is out of range`);
  }
};

const leapYear = (year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

/**
 * return days of month with days and numbers
 * @param date
 * @param launchCalendar
 * @returns {[]}
 */
export const getDaysInMonth = (date, launchCalendar) => {
  const numDays = getNumDaysInMonth(date);
  const dayISOString = date.toISOString();
  const month = generateLaunchCalendarKey(dayISOString);
  const firstDayOfMonth = getFirstDayOfMonth(dayISOString);
  const days = [];

  for (let i = 0, weekdayNumber = firstDayOfMonth.getDay(); i < numDays; i++) {
    days.push({ launches: [], weekday: getWeekday(weekdayNumber) });
    if (weekdayNumber < 6) {
      weekdayNumber++;
    } else {
      weekdayNumber = 0;
    }
  }
  if (!launchCalendar) {
    return days;
  }
  const launchesInMonth = launchCalendar[month];

  launchesInMonth.forEach((launch) => {
    const launchDate = new Date(launch.date);
    const dayOfMonth = launchDate.getDate();
    const launchesOnDay = days[dayOfMonth - 1].launches;
    launchesOnDay.push(launch);
  });

  return days;
};

/**
 * return first day of the month
 * @param dateTime
 * @returns {Date}
 */
const getFirstDayOfMonth = (dateTime) => {
  const mm = dateTime.substring(5, 7);
  const yyyy = dateTime.substring(0, 4);
  return new Date(`${yyyy}-${mm}-01T00:00:00.000Z`);
};
