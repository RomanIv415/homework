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
        let ul = document.createElement('ul')
        ul.classList.add('nav')
        arr.map(item => {
            let li = document.createElement('li')
            let a = document.createElement('a')
            a.textContent = item.title
            a.href = item.path
            li.classList.add('nav-item')
            a.classList.add('nav-link')
            li.appendChild(a)

            if(item.children) {
                li.appendChild(renderMenu(item.children))
            }

            ul.appendChild(li)
        })
        return ul
    }

    nav.appendChild(renderMenu(menu))

})();