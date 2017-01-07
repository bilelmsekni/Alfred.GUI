export class EnumExtension {
    public static getNamesAndValues<T extends number>(e: any) {
        return EnumExtension.getNames(e)
            .map(n => ({ name: n, value: e[n] as T }));
    }
    public static getValues<T extends number>(e: any) {
        return EnumExtension.getObjValues(e)
            .filter(v => typeof v === 'number') as T[];
    }

    public static getNames(e: any) {
        return EnumExtension.getObjValues(e)
            .filter(n => typeof n === 'string') as string[];
    }

    private static getObjValues(e: any): (number | string)[] {
        return Object.keys(e).map(k => e[k]);
    }
}
