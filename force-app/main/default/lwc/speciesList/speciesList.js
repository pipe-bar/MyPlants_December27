import { LightningElement, wire } from 'lwc';
import getFilteredSpecies from "@salesforce/apex/SpeciesService.getFilteredSpecies";
//import getAllSpecies from "@salesforce/apex/SpeciesService.getAllSpecies"

export default class SpeciesList extends LightningElement {
    //PROPERTIES GETTERS & SETTERS
    searchText = "";

    //LIFECYCLE HOOKS

    //WIRE

    //Con esto obtenemos todas las plantas
    //@wire(getAllSpecies)
    //species;

    @wire(getFilteredSpecies,{searchText : '$searchText'})
    species;

    //METHODS son los eventos handler
    handleInputChange(event){
        const searchTextAux = event.target.value;
        console.log('esto bota el perro'+searchTextAux);
        if (searchTextAux.length >=3 || searchTextAux === "") {
            this.searchText = searchTextAux;
        }
    }

    //esta variable:data  va a contener lo devuelto cuando @wire llame al método
    //species.data --> datos devueltos por apex
    //species.error --> devuelve la lista de posibles errores
}