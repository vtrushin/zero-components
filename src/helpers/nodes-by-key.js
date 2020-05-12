import walk from './walk';

const nodesByKey = (root, childrenField, keyGetter) => {
    const obj = {};

    walk(root, childrenField, (node, parent, i) => {
        obj[keyGetter(node, parent, i)] = {
            ...node,
            [childrenField]: node[childrenField].map(
                (childNode, childI) => keyGetter(childNode, node, childI)
            ),
            _parent: parent
        };
    });

    return obj;
};

export default nodesByKey;
