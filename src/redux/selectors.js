export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter.filter;

export const selectError = state => state.contacts.error;

export const selectContactsIsLoading = state => state.contacts.isLoading;

export const selectCurrentUser = state => state.session.currentUser;

export const selectIsSignedIn = state => state.session.isSignedIn;

export const selectSessionError = state => state.session.error;

export const selectContactId = state => state.contacts.contactId;
