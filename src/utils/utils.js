const req = [
    (val) => (val && val.length > 0) || 'Это обязательное поле',
];
const reqnum = [(val) => val >= 0 || 'Недопустимое значение'];
const reqtrue = [() => true || 'always true'];
const getMembers = (members) => {
    let children = [];
    return members
        .map(mem => {
        const m = { ...mem }; // use spread operator
        if (m.children && m.children.length) {
            children = [...children, ...m.children];
        }
        delete m.children; // this will not affect the original array object
        return m;
    })
        .concat(children.length ? getMembers(children) : children);
};
function deleteNodeFromTree(node, nodeId) {
    if (node.children != null) {
        for (let i = 0; i < node.children.length; i++) {
            let filtered = node.children.filter(f => f.id == nodeId);
            if (filtered && filtered.length > 0) {
                node.children = node.children.filter(f => f.id != nodeId);
                return;
            }
            deleteNodeFromTree(node.children[i], nodeId);
        }
    }
}
export { req, reqnum, reqtrue, getMembers, deleteNodeFromTree };
//# sourceMappingURL=utils.js.map