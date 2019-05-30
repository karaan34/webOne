import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'pipeSearch'
})
export class PipeSearch implements PipeTransform{
    transform(items: any[], searchText: string): any[] {

        if(!items) return [];
        if(!searchText) return items;

        return items.filter( item => {
            return item.name.toString().toLowerCase().includes(searchText.toLowerCase());
        });
    }
}

@Pipe({
    name: 'pipeActive'
})
export class PipeActive implements PipeTransform{
    transform(items: any[], active: boolean): any[] {

        if(!items) return [];
        if(!active) return items;

        return items.filter( item => {
            return item.active;
        });
    }
}

@Pipe({
    name: 'pipeOrderBy'
})
export class PipeOrderBy implements PipeTransform{
    transform(items: any[], field: string): any[] {

        if(!items) return [];

        items.sort((item1: any, item2: any) => {

            if(!field){ //sort by specific Field of an array
                if(item1 < item2) return -1;
                else if(items > item2) return 1;
                else 0
            } else{
                if(item1[field] < item2[field]) return -1;
                else if(items[field] > item2[field]) return 1;
                else 0
            }

        });

        return items;
    }
}