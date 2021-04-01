
    export default [
      {
          path: "/",
          meta: {
            __relative: 'index.md',
            __pageId: '0096fab0'
          },
          component: function() {
            
            return import(/* webpackChunkName: "page--index-md" */ "/home/arc/Library/Software/Frontend/_projects/markdown-viewer/pages/index.md?saberPage=0096fab0")
            
          }
        },
{
          path: "/projects.html",
          meta: {
            __relative: 'projects.md',
            __pageId: '5920b7ee'
          },
          component: function() {
            
            return import(/* webpackChunkName: "page--projects-md" */ "/home/arc/Library/Software/Frontend/_projects/markdown-viewer/pages/projects.md?saberPage=5920b7ee")
            
          }
        },
      
      // An addtional route to catch all other requests, i.e. 404 page
      {
        path: '*',
        name: 404,
        component: function () {
          return import(/* webpackChunkName: "404-page" */ "/home/arc/Library/Software/Frontend/_projects/markdown-viewer/node_modules/saber/vue-app/404.vue")
        }
      }
    ]