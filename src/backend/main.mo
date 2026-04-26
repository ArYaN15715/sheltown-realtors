import Types "types/leads";
import LeadsMixin "mixins/leads-api";
import List "mo:core/List";

actor {
  let contacts = List.empty<Types.Contact>();

  include LeadsMixin(contacts);
};
