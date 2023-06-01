import { Injectable } from '@angular/core';
export interface Menu{
    state:string,
    name:string,
    icon:string,
    role:string
}
const MENUITEMS=[
    {state:"dashboard",name:" dashboard ",icon:"dashboard",role:""},
    {state:"category",name:" category",icon:'category',role:''},
    {state:"product",name:" product",icon:'inventory_2',role:''},
    {state:"order",name:" order",icon:'list_alt',role:''},
    {state:"bill",name:" bill",icon:'import_contacts',role:''},
    {state:"user",name:" user",icon:'people',role:''},
]
@Injectable()
export class MenuItems{
    getMenuItems():Menu[]{
        return MENUITEMS
    }
}