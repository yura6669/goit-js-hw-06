class Storage {
    #items;
    constructor(items) {
        this.#items = items;
    }
    getItems() {
        return this.#items;
    }
    addItem(item) {
        this.#items.push(item);
    }
    removeItem(item) {
        this.#items = this.#items.filter((i) => i !== item);
    }
}

console.log("============ Task 2 ============");

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems());
storage.addItem("Droid");
console.log(storage.getItems());
storage.removeItem("Prolonger");
console.log(storage.getItems());

console.log("================================");