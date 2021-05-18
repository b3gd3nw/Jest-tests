module.exports = {
    moduleFileExtensions: ["js", "jsx", "json"],
    transform: {
        // "^.+\\.vue$": "vue-jest",
        "^.+\\.(js|jsx)?$": "babel-jest"
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1"
    },
    testMatch: [
        "<rootDir>(tests/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))"
    ],
    testURL: "http://localhost/",
    transformIgnorePatterns: ["<rootDir>/node_modules/"],
    testTimeout: 15000,
    modulePaths: [
        "<rootDir>"
    ],
};