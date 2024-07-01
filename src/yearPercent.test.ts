import dayjs from 'dayjs';
import { yearPercent } from './yearPercent';

dayjs.extend(yearPercent);

describe('yearPercent plugin', () => {
  it('should handle the start of the year', () => {
    const startOfYear = dayjs().startOf('year');
    const result = startOfYear.yearPercent();
    expect(result).toBe('0.0000');
  });

  it('should handle the end of the year', () => {
    const endOfYear = dayjs().endOf('year');
    const result = endOfYear.yearPercent();
    expect(parseFloat(result)).toBeCloseTo(100, 2);
  });

  it('should handle mid-year', () => {
    // For a leap year (2024), the exact middle is July 2nd at 12:00:00
    const midYear = dayjs('2024-07-02T12:00:00');
    const result = parseFloat(midYear.yearPercent());
    
    // Check if the result is within 0.2% of 50%
    expect(result).toBeGreaterThanOrEqual(49.8);
    expect(result).toBeLessThanOrEqual(50.2);
  });
});