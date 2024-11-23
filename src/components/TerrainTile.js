// TerrainTile.js
export default class TerrainTile {
    constructor(x, y, terrain) {
        this.x = x; // Tile's X coordinate in the grid
        this.y = y; // Tile's Y coordinate in the grid
        this.terrain = terrain; // Terrain type (grass, shrub, tree, water)
        this.burnStatus = "unburned"; // Burn status: unburned, burning, burnt

        // Set terrain-specific attributes
        const attributes = this.getTerrainAttributes(terrain);
        this.flammability = attributes.flammability;
        this.fuel = attributes.fuel;
    }

    // Define terrain-specific attributes
    getTerrainAttributes(terrain) {
        const terrainData = {
            grass: { flammability: 0.9, fuel: 1 },
            shrub: { flammability: 0.7, fuel: 2 },
            tree: { flammability: 0.4, fuel: 3 },
            water: { flammability: 0, fuel: 0 },
        };
        return terrainData[terrain] || { flammability: 0, fuel: 0 }; // Default to no flammability for unknown terrains
    }

    // Optional: A method to display tile details (for debugging or visualization)
    toString() {
        return `{ x: ${this.x}, y: ${this.y}, terrain: '${this.terrain}', flammability: ${this.flammability}, fuel: ${this.fuel}, burnStatus: '${this.burnStatus}' }`;
    }
}
