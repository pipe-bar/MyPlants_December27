import { LightningElement, wire } from 'lwc';
import getAllSpec from "@salesforce/apex/SpeciesService.getAllSpecies";

export default class SpeciesList extends LightningElement {
    @wire(getAllSpec)
    species;

    //species.data --> datos devueltos por apex
    //species.error --> devuelve la lista de posibles errores
}