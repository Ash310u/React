function customRender(reactElement, container) {
    // const domElemnet = document.createElement(reactElement.type)
    // domElemnet.innerHTML = reactElement.children
    // domElemnet.setAttribute('href', reactElement.props.href)
    // domElemnet.setAttribute('target', reactElement.props.target)

    // container.appendChild(domElemnet)

    const domElemnet = document.createElement(reactElement.type)
    domElemnet.innerHTML = reactElement.children
    Object.keys(reactElement.props).forEach((prop) => {
        domElemnet.setAttribute(prop, reactElement.props[prop])
    })
    
    container.appendChild(domElemnet)
}

const reactElement = {
    type:'a',
    props: {
        href:'https://google.com',
        target:'_blank'
    },
    children: 'google.com'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)