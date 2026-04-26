import Types "../types/leads";
import LeadsLib "../lib/leads";
import List "mo:core/List";
import Time "mo:core/Time";

mixin (contacts : List.List<Types.Contact>) {
  var nextId : Nat = 0;

  public func addContact(name : Text, phone : Text, requirement : Text) : async Bool {
    let _ = LeadsLib.addContact(contacts, nextId, name, phone, requirement, Time.now());
    nextId += 1;
    true;
  };

  public query func getContacts() : async [Types.Contact] {
    LeadsLib.listContacts(contacts);
  };
};
