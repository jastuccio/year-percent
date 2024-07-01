import dayjs from 'dayjs';

declare module 'dayjs' {
  interface Dayjs {
    yearPercent(precision?: number): string;
  }
}

export function yearPercent(option: { precision?: number } = {}, dayjsClass: any, dayjsFactory: any): void {
  const { precision = 6 } = option;

  dayjsClass.prototype.yearPercent = function(this: dayjs.Dayjs): string {
    const now = this;
    const startOfYear = now.startOf('year');
    const endOfYear = now.endOf('year');
    const elapsedTime = now.diff(startOfYear);
    const totalTimeInYear = endOfYear.diff(startOfYear);
    const percentageOfYear = elapsedTime / totalTimeInYear * 100;
    return percentageOfYear.toFixed(precision);
  };
}