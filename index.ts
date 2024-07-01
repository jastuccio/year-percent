import dayjs from 'dayjs';
import { yearPercent } from './src/yearPercent';

dayjs.extend(yearPercent);

// Example usage
const now = dayjs();
console.log(`${now.yearPercent()}% percent of the year has gone by`);

// Custom date and precision
const customDate = dayjs('2024-06-30');
console.log(`Percentage of the year on ${customDate.format('YYYY-MM-DD')}: ${customDate.yearPercent(4)}%`);