Tools
1) npm -> npm init -y 	(in root folder)
2) Prettier ->npm install -D prettier
	Create .prettierrc (in root folder) -> {} (inside the .prettierrc file)
	on package.json -> under "scripts" -> "format":"prettier --write \"src/**/*.{js,jsx}\" "
3) EsList -> npm install -D eslint@7.1.8.0 eslint-config-prettier@8.1.0
	Create .eslintrc.json (in root folder) -> 
{
    "extends": [
        "eslint:recommended",
        "prettier"
    ],
    "plugins": [],
    "parserOptions": {
        "ecmaVersion": 2021,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    }
}

	on package.json -> under "scripts: -> "lint":"eslint \"src/**/*.{js,jsx}\" "

4) Git -> git init
	create .gitignore(in root folder) ->

node_modules/
.cache/
dist/
.env
.DS_Store
coverage/
.vscode/


/build

5) Parcel -> npm install -D parcel@1.12.3
	on package.json -> under "scripts" -> "dev":"parcel src/index.html"
	npm install react@17.0.1 react-dom@17.0.1
	noe -> npm run dev (starting the local server)

6) Babel -> npm install -D @babel/core@7.12.16 @babel/preset-react@7.12.13
	create .babelrc (in root folder) ->

{
    "presets": [
        [
            "@babel/preset-react",
            {
                "runtime": "automatic"
            }
        ]
    ]
}
	