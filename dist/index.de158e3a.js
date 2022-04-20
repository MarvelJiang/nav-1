const $siteList = $('.siteList');
const $lastLi = $siteList.find('li.last');
const mySite = localStorage.getItem('mySite');
const mySiteObject = JSON.parse(mySite);
console.log(mySiteObject);
const hashMap = mySiteObject || [
    {
        logo: 'https://xiedaimala.com/favicon.ico',
        url: 'https://xiedaimala.com/'
    },
    {
        logo: 'https://www.baidu.com/favicon.ico',
        url: 'https://www.baidu.com/'
    },
    {
        logo: 'https://github.com/favicon.ico',
        url: 'https://github.com/'
    },
    {
        logo: 'https://www.bilibili.com/favicon.ico',
        url: 'https://www.bilibili.com/'
    },
    {
        logo: 'https://www.douyin.com/favicon.ico',
        url: 'https://www.douyin.com/'
    },
    {
        logo: 'https://www.bootcdn.cn/favicon.ico',
        url: 'https://www.bootcdn.cn/'
    }, 
];
const simplifyUrl = (url)=>{
    return url.replace('https://', '').replace('http://', '').replace('www.', '').replace('.com', '').replace('.cn', '').replace('/\/.*/', '').replace('/', '');
};
const render = ()=>{
    $siteList.find('li:not(.last)').remove();
    hashMap.forEach((node, index)=>{
        const $li = $(`
           <li>
                
                    <div class="site">
                        <div class="logo">
                        <img src = "${node.logo}" >
                        </div>
                        <div class="introduce">
                            <span class="title">${simplifyUrl(node.url)}</span>
                        </div>
                        <div class="close">
                            <svg class="icon">
                                <use xlink: href="#icon-close"></use>
                            </svg>
                        </div>
                    </div>
                
            </li> 
        `).insertBefore($lastLi);
        $li.on('click', ()=>{
            window.open(node.url);
        });
        $li.on('click', '.close', (e)=>{
            e.stopPropagation();
            hashMap.splice(index, 1);
            render();
        });
    });
};
render();
$('.add-site').on('click', ()=>{
    let url = window.prompt('请输入你想要添加的网址');
    if (url.indexOf('http') !== 0) url = 'https://' + url;
    const urlLogo = url + '/favicon.ico';
    hashMap.push({
        logo: urlLogo,
        url: url
    });
    render();
});
window.onbeforeunload = ()=>{
    const string = JSON.stringify(hashMap);
    localStorage.setItem('mySite', string);
};

//# sourceMappingURL=index.de158e3a.js.map
