import { LightningElement, api} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class SpeciesTile extends NavigationMixin(LightningElement) {
    @api
    specie;

    //specie.Location = 'Indoors'
    //specie.Location = 'Outdoors'
    //specie.Location = igual a los dos

    get isOutdoors() {
        return this.specie.Location__c.includes('OUTDOORS');
    }
    get isIndoors() {
        return this.specie.Location__c.includes('INDOORS');
    }

    //navegar a la pagina de detalles del objeto para

    navigateToRecordViewPage() {
        // View a custom object record.
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.specie.Id,
                objectApiName: 'Species__c', // objectApiName is optional
                actionName: 'view'
            }
        });
    }

}