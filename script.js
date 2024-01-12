const queryurling = window.location.search;
const urlParams = new URLSearchParams(queryurling);
const url = urling(Boolean(urlParams.get('url'))).replace('true', urlParams.get('url')).replace('false', prompt('GG URL'))

url = url.split('?ctx=')[1]
url = url.split('%3D')[0]
url = atob(url)
url = url.split('&ou=')[1]
url = url.split('&rs=')[0]
url = decodeURIComponent(url)

document.body.innerHTML = `The page that you were on was: <a href='https://minim.proxy.RockGamerAK.com/prox/?url=${expected}'>${expected}</a>`
document.title = expected;