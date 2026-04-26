import Types "../types/leads";
import List "mo:core/List";

module {
  public type Contact = Types.Contact;

  public func addContact(
    contacts : List.List<Contact>,
    nextId : Nat,
    name : Text,
    phone : Text,
    requirement : Text,
    timestamp : Int,
  ) : Contact {
    let contact : Contact = {
      id = nextId;
      name = name;
      phone = phone;
      requirement = requirement;
      timestamp = timestamp;
    };
    contacts.add(contact);
    contact;
  };

  public func listContacts(contacts : List.List<Contact>) : [Contact] {
    contacts.toArray();
  };
};
