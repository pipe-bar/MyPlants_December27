public with sharing class PossibleSolution {

    Schema.SObjectType targetType = Schema.getGlobalDescribe().get('Lead');
    Map<String,Schema.SObjectField> fieldMap = targetType.getDescribe().fields.getMap();
    
    Integer totalNumberOfField = fieldMap.size();
    Integer filledFields = 0;
    
    List<String> fieldsToIgnore = new List<String>
    {'Id','IdDeleted','CreatedById','CreatedDate','LastModifiedById','LastModifiedDate','SystemModstamp'};
        
        for (Schema.SObjectField field : fieldMap.values()) {
            Schema.DescribeFieldResult describeResult = field.getDescribe();
            //system.debug(describeResult);
            if (describeResult.isAutoNumber() || describeResult.isCalculated() || fieldsToIgnore.contains(describeResult.getName())) {
                //system.debug('HOla');
                filledFields--;
            }
            
            if (yourRecord.get(describeResult.getName() != null)) {
                filledFields++;
            }
        }
    
    system.System.debug('Fracción');
        

}
