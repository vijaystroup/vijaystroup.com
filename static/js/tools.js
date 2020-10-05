const bodyWidth = document.body.clientWidth
const bodyHeight = document.body.clientHeight
const headline = document.getElementById('headline')
const imageDir = '/static/images/tools'
const tools = ['python', 'cpp', 'javascript', 'c', 'sql', 'html', 'css', 'linux', 'cl', 'git', 'vscode']

function createNode(src) {
    const node = document.createElement('img')
    node.className = 'tool'
    node.src = `${imageDir}/${src}.png`


    node.style.left = `${Math.floor(Math.random() * headline.clientWidth)}px`
    node.style.top = `${Math.floor(Math.random() * headline.clientHeight)}px`

    headline.appendChild(node) 
}

tools.map(tool => {
    createNode(tool)
})