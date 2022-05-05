public with sharing class SpeciesService {
    @AuraEnabled(cacheable = true)
    
    public static List<Species__c> getFilteredSpecies(String searchText){
        String likeValue = '%'+searchText+'%';
        return [
            SELECT Id, Description__c, Image_URL__c, Location__c, Name 
            FROM Species__c 
            WHERE Name LIKE : likeValue
        ];
    }

    //con esto retornamos el listado de todas species
    /*public static List<Species__c> getAllSpecies(){
        return [
            SELECT Id, Description__c, Image_URL__c, Location__c, Name 
            FROM Species__c
        ];
    }*/
}
