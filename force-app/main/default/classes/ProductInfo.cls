 global class ProductInfo {

    @InvocableVariable(required=false)
    @AuraEnabled
    global String productId;

    @InvocableVariable(required=false)
    @AuraEnabled
    global String PriceBookId;

    @InvocableVariable(required=false)
    @AuraEnabled
    global String productName;

    @InvocableVariable(required=false)
    @AuraEnabled
    global Decimal price;

    @InvocableVariable(required=false)
    @AuraEnabled
    global String description;

}
