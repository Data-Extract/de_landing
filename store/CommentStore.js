import { defineStore } from "pinia";
import { useEmailStore } from "./EmailStore";
import { useSmsStore } from "./SmsStore";
import { usePhoneStore } from "./PhoneStore";
export const useCommentStore = defineStore("CommentStore", {
  state: () => {
    return {
      email: {
        subscribedCount: 0,
        maxAllowed: 3,
        reachedMax: false,
        isSubscribed: false,
      },
      sms: {
        subscribedCount: 0,
        maxAllowed: 5,
        reachedMax: false,
        isSubscribed: false,
      },
      phone: {
        subscribedCount: 0,
        maxAllowed: 5,
        reachedMax: false,
        isSubscribed: false,
      },
    };
  },
  getters: {
    isEmailSubscribed: (state) => {
      return state.email.isSubscribed;
    },
    isSMSSubscribed: (state) => {
      return state.sms.isSubscribed;
    },
    isPhoneSubscribed: (state) => {
      return state.phone.isSubscribed;
    },
  },
  actions: {
    subscribe(method) {
      const emailStore = useEmailStore();
      const smsStore = useSmsStore();
      const phoneStore = usePhoneStore();

      if (this[method].reachedMax) {
        alert("Reached max subscription");
        return;
      }

      let contacts;
      if (method === "email") {
        contacts = emailStore.listOfContacts;
      } else if (method === "sms") {
        contacts = smsStore.listOfContacts;
      } else if (method === "phone") {
        contacts = phoneStore.listOfContacts;
      }
      if (contacts.length === 0) {
        alert(`Please add ${method} contacts`);
      } else {
        contacts.forEach((contact, index) => {
          if (
            contact.subscribed === false &&
            index <= this[method].maxAllowed - 1
          ) {
            contact.subscribed = true;
            this[method].subscribedCount++;
          }
        });
        this[method].isSubscribed =
          this[method].subscribedCount > 0 ? true : false;
        if (this[method].subscribedCount === this[method].maxAllowed) {
          this[method].reachedMax = true;
        }
      }
    },

    unsubscribe(method) {
      const emailStore = useEmailStore();
      const smsStore = useSmsStore();
      const phoneStore = usePhoneStore();

      let contacts;
      if (method === "email") {
        contacts = emailStore.listOfContacts;
      } else if (method === "sms") {
        contacts = smsStore.listOfContacts;
      } else if (method === "phone") {
        contacts = phoneStore.listOfContacts;
      }
      if (contacts.length === 0) {
        alert(`No ${method} contacts to unsubscribe`);
      } else {
        contacts.forEach((contact) => {
          if (contact.subscribed === true) {
            contact.subscribed = false;
            this[method].subscribedCount--;
          }
        });
        if (this[method].subscribedCount === 0) {
          this[method].isSubscribed = false;
          this[method].reachedMax = false;
        }
      }
    },
  },
});
