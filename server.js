const NodeStaticAuth = require('node-static-auth');
 
const config = {
    // set static server
    // you can pass opts you'd usually pass to `node-static`:
    // https://www.npmjs.com/package/node-static
    nodeStatic: {
        // use path relative to project root, i.e. `process.cwd()`
        root: 'dist', 
        // pass the native opts for node-static here
        options: {
            indexFile: 'index.html'
        }
    },
    // set web server options
    server: {
        port: 8080,
        // `ExperimentalWarning: The http2 module is an experimental API.`
        http2: false
    },
    // set basic auth credentials
    auth: {
        enabled: true, // set `false` to disable
        name: "wea",
        pass: "360",
        realm: "WEA 360"
    },
    // set logger file options
    logger: {
        use: false
    }
};
 
// start the server
const server = new NodeStaticAuth(config);