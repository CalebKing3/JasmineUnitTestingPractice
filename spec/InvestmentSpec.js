describe("Investment", function(){
  var stock, investment;
  beforeEach(function(){
    stock = new Stock();
    investment = new Investment({
      stock : stock,
      shares : 100
      sharePrice : 20,
      cost : 2000
    });
  });

  it("should be of a stock", function(){
    expect(investment.stock).toBe(stock);
  });

  it("should have the invested shares quanity", function(){
      expect(investment.shares).toEqual(100);
  });

  it("should have the share paid price", function(){
    expect(investment.sharePrice).toEqual(20);
  });

  it("should have a cost", function(){
    expect(investment.cost).toEqual(2000);
  });
});
