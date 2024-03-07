const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var url = urlParams.get('url')
if (!!url === false) url = prompt('GG URL')

url = url.split('?ctx=')[1]
url = url.split('&sum=')[0]
while (url.endsWith('%3D')) {
    url = url.slice(0, -3)
}
url = atob(url)
url = url.split('&ou=')[1]
url = url.split('&rs=')[0]
url = decodeURIComponent(url)

prompt('URL', url)

var prxy = `https://contentcleanremovals.replit.app/url?url=${url}`

document.body.innerHTML = `The page that you were on was: <a href="${prxy}">${url}</a>`
document.title = expected;
