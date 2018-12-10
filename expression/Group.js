class Group {
    constructor(){
        this.container = [];
    }
    add(item) {
        if (this.has(item)){
            throw new Error('this item has already been there')
        }
        else {
            this.container.push(item)
        }
    }

    has(item) {
        for (let t of this.container){
            if (t === item){
                return true
            }
        }
        return false
    }
    delete(item) {
        if (this.has(item)){
            let deletedIndex = this.container.indexOf(item);
            this.container[deletedIndex] = null;
        }
        else {
            return Error.constructor('not exist')
        }
    }

    static from(iterable){
        let iteratedContent = new Group();
        for (t of iterable) {
            iteratedContent.add(t);
        }
        return iteratedContent;
    }
}

class GroupIterator{
    constructor(group){
        this.group = group;
        this.length = group.container.length;
    }
    next(){
        if (this.length === 0) return { done: true};
        let value = {
            value: this.group.container[this.length - 1]
        };
        this.length--;
        return {value, done: false}
    }
}

Group.prototype[Symbol.iterator] = function () {
    return new GroupIterator(this)
};
let test = new Group();
test.add('hello');
test.add(123);
test.add(456);
for (let t of test){
    console.log(t)
}