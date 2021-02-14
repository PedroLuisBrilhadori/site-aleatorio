var links = ['https://heeeeeeeey.com/', 'https://pointerpointer.com/', 'http://randomcolour.com', 'https://cat-bounce.com/', 
'http://www.movenowthinklater.com/', 'http://endless.horse/', 'https://smashthewalls.com/', 'https://theuselessweb.com/', 
]


function Redirect() {
    let linkAleatorio 
    function randon() {
        linkAleatorio = links[Math.floor(Math.random() * links.length )]
    }
    randon();;
    console.log(linkAleatorio)
    window.location.href = linkAleatorio
}