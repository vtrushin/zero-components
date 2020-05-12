'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var Tree = function Tree(props) {
  var data = props.data,
      childrenField = props.childrenField,
      idGetter = props.idGetter;

  var renderTreeItem = function renderTreeItem(node) {
    return /*#__PURE__*/React.createElement("div", {
      key: node.id
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridAutoFlow: 'column',
        justifyContent: 'start',
        gridGap: 5
      }
    }, /*#__PURE__*/React.createElement("button", null, "\u2192"), /*#__PURE__*/React.createElement("span", null, node.name)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridGap: 10,
        marginLeft: 20,
        marginTop: 10
      }
    }, node[childrenField].map(renderTreeItem)));
  }; // const nodes = nodesByKey(data, childrenField, keyGetter)


  return /*#__PURE__*/React.createElement("div", null, renderTreeItem(data), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridGap: 10,
      marginTop: 10
    }
  }));
};

var Wrapper = function Wrapper() {
  var data = {
    id: 100,
    name: 'Root',
    expand: true,
    children: [{
      id: 200,
      name: 'Node 1',
      expand: true,
      children: [{
        id: 201,
        name: 'Node 1-1',
        expand: true,
        children: []
      }, {
        id: 202,
        name: 'Node 1-2',
        expand: true,
        children: []
      }]
    }, {
      id: 300,
      name: 'Node 2',
      expand: true,
      children: []
    }]
  };
  return /*#__PURE__*/React.createElement(Tree, {
    data: data,
    childrenField: "children",
    idGetter: function idGetter(node) {
      return node.id;
    } // expands={{
    //     get: node => node.expand,
    //     set:
    // }}
    // expandGetter={node => node.expand}
    // onExpand={(node, expanded) => {}}

  });
};

module.exports = Wrapper;
