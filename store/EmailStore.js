import { defineStore } from "pinia";
import { useCommentStore } from "./CommentStore.js";
export const useEmailStore = defineStore("EmailStore", {
  state: () => {
    return {
      count: 0,
      list: [],
    };
  },
  getters: {
    listOfContacts: (state) => {
      return state.list;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    addContact(data) {
      const commentStore = useCommentStore();
      this.list.push(data);
      if (commentStore.isEmailSubscribed) {
        commentStore.subscribe("email");
      }
    },
  },
});
