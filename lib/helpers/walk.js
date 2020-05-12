const walk = (root, childrenField, callback) => {
    let stack = [{ item: root, parent: null, index: 0 }];

    let current;

    while (current = stack.pop()) {
        const children = current.item[childrenField] || [];

        for (let i = children.length - 1; i >= 0; i--) {
            stack.push({ item: children[i], parent: current.item, index: i });
        }

        if (callback) {
            callback(current.item, current.parent, current.index);
        }
    }
};

export default walk;
