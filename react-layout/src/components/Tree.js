import { useState } from "react";
import "../css/Tree.css";

const Tree = (tree) => {
    const[pruned, pruneTree] = useState(false);

    const doTreeJob =() => {
        pruneTree(true);
    };

    return (
        <section class="tree">
            <h3 class ={pruned?"pruned":""}>{tree.name}</h3>
            <img src={tree.image} alt={tree.name} />
            <button onClick={doTreeJob}>Prune Tree</button>
        </section>
    )
};

export default Tree;