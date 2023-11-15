const isArray = vars => Array.prototype.isArray(vars)

const isObject = vars => typeof vars === 'object' && vars !== null && !isArray(vars)

const isFunction = obj => typeof obj === 'function' && typeof obj.nodeType !== 'number'

const isset = vars => typeof vars !== 'undefined' && vars !== null

const getRandomInt = (max = 100) => Math.floor(Math.random() * max)

const MessageBox = text => {
    let id = getRandomInt(100);
    document.querySelector('.errors-block-fix').innerHTML += `
        <div class="alert-block alert-${id}">
            <div>
                <span>${text}</span>
                    </br />
            </div>
            <span class="exp-ed"><i class="mdi mdi-close"></i></span>  
        </div>
    `
    document.querySelector('.errors-block-fix > div').style.display = 'flex'
    setTimeout (() => {
        document.querySelector(`.alert-${id}`).remove()
    }, 3000)
}

const $_GET = window
    .location
    .search
    .replace('?','')
    .split('&')
    .reduce(
        function(p,e){
            let a = e.split('=');
            p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
            return p;
        },
        {}
    );

export {
    isset,
    isArray,
    isObject,
    isFunction,
    $_GET
}
