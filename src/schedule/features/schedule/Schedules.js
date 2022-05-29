import React from "react";
import { useCallback, useState } from 'react';
import ReactFlow, { applyEdgeChanges, applyNodeChanges } from 'react-flow-renderer';
import Divider from '@material-ui/core/Divider';

import initialEdges from './edges.js';
import { getLengthForMilliseconds } from './ShowWidths';
import { ShowNode } from './ShowNode.js';
import { Actions } from './Actions';

const nodeTypes = {
    showNode: ShowNode,
};

const buildNodes = (schedule) => {
    let nodes = [];
    let x = 10;
    let schedduleStartTime = null;

    for (let i in schedule.shows) {
        const show = schedule.shows[i]

        let startTime = Date.parse(show.event_data.start_date_time)
        if (!schedduleStartTime) {
            schedduleStartTime = startTime
        }
        x = getLengthForMilliseconds(startTime - schedduleStartTime)
        nodes.push({
            id: show.event_data.event_id + i.toString(),
            type: 'showNode',
            data: show,
            position: { x: x, y: (i % 2 ? 118 : 25) }
        })
    }

    return nodes
}

function Schedules(props) {
    const [nodes, setNodes] = useState(buildNodes(props.schedule));
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    );

    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );

    return (
        <div style={{ height: 250, width: "100%" }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
            />
            <Divider/>
            <Actions schedule={props.schedule} />
        </div>
    );
}

export default Schedules;