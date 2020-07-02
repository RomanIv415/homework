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

    const nav = document.getElementById('mmenu')

    function renderMenu(arr) {
        let content = '';
        arr.map(item => {
            if (item.children){
                let li = `<li class="${item.title}"><a href="${item.path}" class="nav-link">${item.title}</a><ul>`;
                li += renderMenu(item.children);
                li += `</ul></li>`;
                content += li;
            }
            else{
                let li = `<li class="${item.title}"><a href="${item.path}" class="nav-link">${item.title}</a></li>`;
                content += li;
            }
        })

        return content;
    }

    nav.innerHTML = renderMenu(menu)

})();