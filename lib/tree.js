import React from 'react';
import nodesByKey from './helpers/nodes-by-key'

const Tree = props => {
    const {
        data,
        childrenField,
        idGetter
    } = props

    const renderTreeItem = (node) => {
        return (
            <div key={node.id}>
                <div style={{ display: 'grid', gridAutoFlow: 'column', justifyContent: 'start', gridGap: 5 }}>
                    <button>→</button>
                    <span>
                        {node.name}
                    </span>
                </div>

                <div style={{ display: 'grid', gridGap: 10, marginLeft: 20, marginTop: 10 }}>
                    { node[childrenField].map(renderTreeItem) }
                </div>
            </div>
        )
    }

    // const nodes = nodesByKey(data, childrenField, keyGetter)

    return (
        <div>
            { renderTreeItem(data) }
            <div style={{ display: 'grid', gridGap: 10, marginTop: 10 }}>
                {/*{Object.entries(nodes).map(([id, node]) => {
                    return (
                        <li key={node.id} style={{ display: 'grid' }}>
                            <button></button>
                            <span>
                                {node.name}
                            </span>
                        </li>
                    )
                })}*/}
            </div>
        </div>
    )
}

const Wrapper = () => {
    const data = {
        id: 100,
        name: 'Root',
        expand: true,
        children: [
            {
                id: 200,
                name: 'Node 1',
                expand: true,
                children: [
                    {
                        id: 201,
                        name: 'Node 1-1',
                        expand: true,
                        children: []
                    },
                    {
                        id: 202,
                        name: 'Node 1-2',
                        expand: true,
                        children: []
                    }
                ]
            },
            {
                id: 300,
                name: 'Node 2',
                expand: true,
                children: []
            }
        ]
    }

    return (
        <Tree
            data={data}
            childrenField='children'
            idGetter={node => node.id}
            // expands={{
            //     get: node => node.expand,
            //     set:
            // }}
            // expandGetter={node => node.expand}
            // onExpand={(node, expanded) => {}}
        />
    );
}

export default Wrapper;
