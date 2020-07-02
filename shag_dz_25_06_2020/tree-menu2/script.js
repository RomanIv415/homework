;(function(){

    const menu = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Portfolio',
            path: '/portfolio',
            children: [
                {
                    title: 'Backend',
                    path: '/portfolio/backend'
                },
                {
                    title: 'Frontend',
                    path: '/portfolio/frontend',
                    children: [
                        {
                            title: 'React',
                            path: '/portfolio/frontend/react'
                        },
                        {
                            title: 'Vue',
                            path: '/portfolio/frontend/vue'
                        },
                        {
                            title: 'Angular',
                            path: '/portfolio/frontend/angular'
                        }
                    ]
                },
                {
                    title: 'Design',
                    path: '/portfolio/design',
                    children: [
                        {
                            title: '3D Design',
                            path: '/portfolio/design/3d',
                            children: [
                                {
                                    title: 'Interior',
                                    path: '/portfolio/design/3d/interior'
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            title: 'Services',
            path: '/services'
        },
        {
            title: 'Contacts',
            path: '/contacts'
        },
    ]

    const nav = document.getElementById('menu')

    function renderMenu(arr) {
        let ul = `<ul>`;

        arr.map(item => {
            let li = `<li class="${item.title}"><a href="${item.path}" class="nav-link">${item.title}</a>`;
            if(item.children) {
                li += renderMenu(item.children)
            }
            li += `</li>`;
            ul += li;
        })

        ul += `</ul>`;

        return ul;
    }

    nav.innerHTML = renderMenu(menu)

})();