declare const helperFunctions: {
    isValidDate: (d: Date) => boolean;
    isLeapYear: (cM: number, cY: number) => number[];
    isToday: (d: number, m: number, y: number) => boolean;
    decomposeRGBA: (color: string) => number[] | null;
    getRGBColor: (color: string) => string;
    getRGBAColorWithAlpha: (color: string, alpha: number) => string;
    getFirstWeekDayOfMonth: (cM: number, cY: number) => number;
    getNumberWithOrdinal: (n: number) => string;
    getFormattedDate: (date: Date, format: string, lang: string, languages: object) => string;
    getFormattedTime: (date: Date, format24h: boolean) => string;
};
export default helperFunctions;
