export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5db6ed0694d914a3417eda7f',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-3yh9s4fx',
                  apiId: '01d87bc8-89ea-4e75-a1ed-63c982467bbf'
                },
                {
                  buildHookId: '5db6ed073100f31f165362a3',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-w56oan8c',
                  apiId: '88fd2005-4db8-4ebd-8945-668ec3797342'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Even-MW/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-w56oan8c.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
