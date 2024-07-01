import dayjs from 'dayjs';

declare module 'dayjs' {
  interface Dayjs {
    yearPercent(): string;
  }
}

export function yearPercent(_: any, dayjsClass: any): void {
  dayjsClass.prototype.yearPercent = function(): string {
    const now = this;
    const startOfYear = now.startOf('year');
    const endOfYear = now.endOf('year');
    const elapsedTime = now.diff(startOfYear);
    const totalTimeInYear = endOfYear.diff(startOfYear);
    const percentageOfYear = (elapsedTime / totalTimeInYear) * 100;
    return percentageOfYear.toFixed(4);
  };
}