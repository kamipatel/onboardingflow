

global class GetProducts {
  
  @InvocableMethod(label='Get Products with entries')
  global static List<List<ProductInfo>> getProductEntries() {

    List<List<ProductInfo>> allpe = new List<List<ProductInfo>>();   
    
    List<ProductInfo> results = new List<ProductInfo>();   
    
    List<PriceBookEntry> lstpbe = [SELECT Id, Product2.Id, Product2.Name, Product2.Description, UnitPrice  
                               FROM PriceBookEntry];

    
    for(PriceBookEntry pe : lstpbe){
      ProductInfo pi = new ProductInfo();
      pi.PriceBookId = pe.Id;
      pi.productId = pe.Product2.Id;
      pi.productName = pe.Product2.Name;
      pi.description = pe.Product2.Description;
      pi.price = pe.UnitPrice;
      results.add(pi);
    }

    allpe.add(results);

    return allpe;
  }

}