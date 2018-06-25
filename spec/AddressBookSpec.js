describe("Address Book", function(){
    it("shoud be able to add contact", function(){
      var addressBook = new addressBook(),
        thisContact = new Contact();
        
        addressBook.addContact(thisContact); 
        expect(addressBook.getContact(0)).toBe(thisContact)         
    
    });
});
