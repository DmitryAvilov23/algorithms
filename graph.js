const users = {
    0: {
        name: 'Dmitry',
        friends: [1, 3, 4]
    },
    1: {
        name: 'Veronika',
        friends: [0, 2, 7]
    },
    2: {
        name: 'Alex',
        friends: [1, 3]
    },
    3: {
        name: 'Viktor',
        friends: [0, 2, 4, 5]
    },
    4: {
        name: 'Max',
        friends: [0, 3, 5, 6]
    },
    5: {
        name: 'Ganobasud',
        friends: [3, 4]
    },
    6: {
        name: 'Maksud',
        friends: [4]
    },
    7: {
        name: 'Sandy',
        friends: [1]
    }
};

class UsersGraph {
    #isRecStarted = false;

    constructor(users) {
        this.users = users;
    }

    getMatrixByUsers() {
        const matrix = [];
        const nodes  = Object.keys(users);
        const edges  = this.#getEdgesFromUsers(users);

        // Creating basic matrix
        for (let i = 0, length = nodes.length; i < length; i++) {
            const row = [];

            for (let j = 0; j < length; j++) row.push(0);

            matrix.push(row);
        };

        // Creating edges between nodes 
        for (const [a, b] of edges) {
            matrix[a][b] = 1;
            matrix[b][a] = 1;
        };

        return matrix;
    }

    #getEdgesFromUsers() {
        const friends = Object.values(users).map((u) => {
            return u.friends;
        });
        const edges = [];
    
        for (let i = 0, friendsLength = friends.length; i < friendsLength; i++) {
            const userFriends = friends[i];
            const userEdges   = [];
    
            for (let j = 0, userFriendsLength = userFriends.length; j < userFriendsLength; j++) {
                userEdges.push([i, userFriends[j]]);
            };
    
            edges.push(...userEdges);
        };
    
        return edges;
    }

    getFriends(ctrlUserIndex, round) {
        if (round <= 0) {
            throw new Error('Enter correct friends round');
        };

        const matrix  = this.getMatrixByUsers(this.users);
        const friends = [];

        // Get first round friends
        for (let i = 0, length = matrix[ctrlUserIndex].length; i < length; i++) {
            if (matrix[ctrlUserIndex][i]) {
                friends.push(i);
            }
        };

        // Get friends by round
        if (round === 1) {
            return friends;
        } else {
            let friends2 = [];
    
            round--;

            for (const friend of friends) {
                friends2.push(...this.getFriends(friend, round));
            };
    
            friends2 = friends2.filter(f => f !== ctrlUserIndex && !friends.includes(f));
            friends2 = [...new Set(friends2)];
    
            return friends2;
        }; 
    }

    searchByWidth(ctrlUserIndex, callBack) {
        const checked  = [];
        const forCheck = [ctrlUserIndex];
        const matrix   = this.getMatrixByUsers();

        while (forCheck.length) {
            const node = forCheck.shift();
            checked.push(node);
            callBack(node);

            for (let i = 0, length = matrix[node].length; i < length; i++) {
                const friend = matrix[node][i];

                if (friend && !checked.includes(i) && !forCheck.includes(i)) {
                    forCheck.push(i);
                }
            };
        };
    }
}

const graph = new UsersGraph(users);
console.log('FIRST ROUND', graph.getFriends(0, 1));
console.log('SECOND ROUND', graph.getFriends(0, 2));

graph.searchByWidth(4, x => {
    console.log(x);
});