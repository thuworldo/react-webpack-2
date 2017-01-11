function errorLoading(err) {
 console.error('Dynamic page loading failed', err);
}


function loadRoute(cb) {
 return (module) => cb(null, module.default);
}



export default (
    [
        {
            path: '/',
            getComponent(location, cb) {
                System.import('./../components/Home').then(loadRoute(cb)).catch(errorLoading);
            }
        },
        {
            path: '/about',
            getComponent(location, cb) {
                System.import('./../components/About').then(loadRoute(cb)).catch(errorLoading);
            }
        },
        {
            path: '/contacts',
            getComponent(location, cb) {
                System.import('./../components/Contacts').then(loadRoute(cb)).catch(errorLoading);
            }
        }
    ]
);