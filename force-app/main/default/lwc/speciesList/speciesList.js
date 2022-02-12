import { LightningElement, wire } from 'lwc';
import getAllSpec from "@salesforce/apex/SpeciesService.getAllSpecies";

export default class SpeciesList extends LightningElement {
    @wire(getAllSpec)
    species;
    //esta variable va a contener lo devuelto cuando @wire llame al método
    //species.data --> datos devueltos por apex
    //species.error --> devuelve la lista de posibles errores
}