import dayjs from 'dayjs';
import { yearPercent } from './yearPercent.js';

dayjs.extend(yearPercent);

describe('yearPercent plugin', () => {
  it('should return a string', () => {
    const result = dayjs().yearPercent();
    expect(typeof result).toBe('string');
  });

  it('should return a valid percentage', () => {
    const result = parseFloat(dayjs().yearPercent());
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(100);
  });

  it('should respect the precision parameter', () => {
    const result = dayjs().yearPercent(2);
    expect(result.split('.')[1].length).toBe(2);
  });

  it('should return correct percentage for known dates', () => {
    // Test for non-leap year
    const midYear2023 = dayjs('2023-07-02 12:00:00');
    expect(parseFloat(midYear2023.yearPercent(4))).toBeCloseTo(50.0000, 4);

    // Test for leap year
    const quarterYear2024 = dayjs('2024-03-31 18:00:00');
    expect(parseFloat(quarterYear2024.yearPercent(4))).toBeCloseTo(25.0000, 4);
  });

  it('should handle edge cases', () => {
    const startOfYear = dayjs('2023-01-01 00:00:00');
    expect(parseFloat(startOfYear.yearPercent())).toBeCloseTo(0, 6);

    const endOfYear = dayjs('2023-12-31 23:59:59.999');
    expect(parseFloat(endOfYear.yearPercent())).toBeCloseTo(100, 6);
  });
});