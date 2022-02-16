module.exports = {
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['node_modules'],
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.ts(x)'],
	setupFilesAfterEnv: ['<rootDir>/.jest/setupJest.ts'],
	modulePaths: ['src'],
	transform: {
		'^.+\\.(ts|tsx)?$': 'ts-jest',
		'^.+\\.(js|jsx)$': 'babel-jest'
	},
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/src/main/config/fileMock.ts',
		'\\.svg': '<rootDir>/src/main/config/svgMock.ts',
		'\\.(css|less|scss)$': 'identity-obj-proxy'
	}
}
