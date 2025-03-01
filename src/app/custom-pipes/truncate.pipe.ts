import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

    transform(value: string, limit: number, isHidden: boolean): string {
        console.log(`moja wartosc ${value}`);
        console.log(`limit ${limit}`);
        console.log(`isHidden ${isHidden}`);
        if (isHidden == true) {
            return ''
        }

        return value.substring(0, limit);
    }

}