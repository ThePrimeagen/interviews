#include <cstdio>
#include <vector>

using namespace std;

void clearIsland(vector<vector<char>> &grid, size_t i, size_t j) {
    if (i < 0 || i >= grid.size() ||
        j < 0 || j > grid[i].size() || grid[i][j] != '1') {
        return;
    }

    grid[i][j] = '0';

    clearIsland(grid, i + 1, j);
    clearIsland(grid, i - 1, j);
    clearIsland(grid, i, j + 1);
    clearIsland(grid, i, j - 1);
}

int numIslands(vector<vector<char>> &grid) {
    int islandCount = 0;
    for (size_t i = 0; i < grid.size(); ++i) {
        for (size_t j = 0; j < grid[i].size(); ++j) {
            char item = grid[i][j];
            if (item == '1') {
                clearIsland(grid, i, j);
                islandCount++;
            }
        }
    }
    return islandCount;
}

int main() {
    vector<vector<char>> grid = {
        {'1', '1', '1', '0', '0'},
        {'0', '0', '0', '1', '0'},
        {'0', '1', '0', '0', '0'},
        {'0', '0', '0', '0', '0'}
    };

    printf("THE NUMBER OF ISLANDS %d\n", numIslands(grid));
    return 0;
}

