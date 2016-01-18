import Ember from "ember";

export default Ember.Component.extend({
    store: Ember.inject.service(),
    isSubmitted: Ember.computed.oneWay("event.isSubmitted"),

    saveButtonText: Ember.computed("event.isNew", "event.isSaving", function () {
        const isNew = this.get("event.isNew");
        const isSaving = this.get("event.isSaving");

        return isSaving ? "Saving..." : (isNew ? "Create Event" : "Save Changes");
    }),

    actions: {
        addUser() {
            const event = this.get("event");

            event.addUser();
        },

        save() {
            const event = this.get("event");

            event.updateModel()
                .then((event) => {
                    this.sendAction("modelUpdated", event);
                })
                .catch(() => {
                    //TODO: remove this, I need to catch promise rejection
                    // otherwise ember is throwing an error
                });
        }
    }
});