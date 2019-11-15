/*
 * Given an undirected graph, return true if and only if it is bipartite.

Recall that a graph is bipartite if we can split it's set of nodes into two independent subsets A and B such that every edge in the graph has one node in A and another node in B.

The graph is given in the following form: graph[i] is a list of indexes j for which the edge between nodes i and j exists.  Each node is an integer between 0 and graph.length - 1.  There are no self edges or parallel edges: graph[i] does not contain i, and it doesn't contain any element twice.

Example 1:
Input: [[1,3], [0,2], [1,3], [0,2]]
Output: true
Explanation:
The graph looks like this:
0----1
|    |
|    |
3----2
We can divide the vertices into two groups: {0, 2} and {1, 3}.
Example 2:
Input: [[1,2,3], [0,2], [0,1,3], [0,2]]
Output: false
Explanation:
The graph looks like this:
0----1
| \  |
|  \ |
3----2
We cannot find a way to divide the set of nodes into two independent subsets.

Note:

graph will have length in range [1, 100].
graph[i] will contain integers in range [0, graph.length - 1].
graph[i] will not contain i or duplicate values.
The graph is undirected: if any element j is in graph[i], then i will be in graph[j].
 */
// remaining [1, 1, 1, 1] c [0, 0, 0, 0]
// 0:
// [[1,2,3], [0,2], [0,1,3], [0,2]]
function isBipartite(nodes) {
    var remaining = new Array(nodes.length).fill(1);
    var colored = new Array(nodes.length).fill(0);
    var bipartite = true;
    // -1: remaining [1, 1, 1, 1] c [0, 0, 0, 0]
    // 0:  remaining [1, 0, 0, 0] c [0, 1, 1, 1]
    for (var i = 0; i < nodes.length && bipartite; ++i) {
        // 0
        // r[i] === 1
        // c[i] === 0
        //
        if (remaining[i] === 0) {
            continue;
        }
        var adjacents = nodes[i];
        // 0: [1, 2, 3]
        for (var j = 0; j < adjacents.length; ++j) {
            var idx = adjacents[j];
            // r[1] = 0 c[1] = 1
            // r[2] = 0 c[2] = 1
            // r[3] = 0 c[3] = 1
            remaining[idx] = 0;
            colored[idx] = 1;
        }
    }
    for (var i = 0; i < nodes.length && bipartite; ++i) {
        if (colored[i] === 0) {
            continue;
        }
        var adjacents = nodes[i];
        // 0: [1, 2, 3]
        for (var j = 0; j < adjacents.length; ++j) {
            var idx = adjacents[j];
            if (colored[idx] === 1) {
                bipartite = false;
                break;
            }
        }
    }
    /*
// remaining [1, 0, 1, 0] c [0, 1, 0, 1]
// [[1,3], [0,2], [1,3], [0,2]]
    for (let i = 0; i < nodes.length && bipartite; ++i) {
        if (colored[i] === 0) {
            continue;
        }

        // [0, 2]
        // [0, 2]
        const adjacents = nodes[i];

        for (let j = 0; j < adjacents.length && bipartite; ++j) {
            bipartite = colored[adjacents[j]] === 0;
        }
    }
     */
    return bipartite;
}
// @ts-ignore
console.log("[[1,3], [0,2], [1,3], [0,2]]", isBipartite([[1, 3], [0, 2], [1, 3], [0, 2]]));
// @ts-ignore
console.log("[[1,2,3], [0,2], [0,1,3], [0,2]]", isBipartite([[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]]));
// @ts-ignore
console.log("[[5], [5], [5], [5], [5], [0, 1, 2, 3, 4]]", isBipartite([[5], [5], [5], [5], [5], [0, 1, 2, 3, 4]]));
//# sourceMappingURL=warmup.js.map