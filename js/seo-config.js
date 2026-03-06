// SEO 配置 - 分类页面和搜索优化
const SEO_CONFIG = {
    // 网站基础信息
    site: {
        name: 'LibreTV',
        url: 'https://mzc688.xyz',
        logo: 'https://mzc688.xyz/image/retrotv_5520.png',
        description: 'LibreTV是一个免费的在线视频搜索平台，无广告、安全，提供来自多个视频源的电影、电视剧、综艺、动漫等内容搜索与观看服务，无需注册即可使用。LibreTV is a free online video search platform, ad-free and secure, providing movie, TV series, variety shows, anime and other content search and viewing services from multiple video sources, no registration required.',
        keywords: '在线视频,免费视频,视频搜索,电影,电视剧,综艺,动漫,LibreTV,免费观影,online video,free video,video search,movies,TV shows,variety,anime,free streaming'
    },

    // 分类页面配置 - 每个分类有独立的URL、标题、描述和关键词
    categories: {
        movie: {
            id: 'movie',
            name: '电影 Movies',
            path: '/category/movie',
            title: '免费电影在线观看 - 最新热门电影推荐 - LibreTV | Free Movies Online - Latest Hot Movie Recommendations',
            description: 'LibreTV电影频道提供免费高清电影在线观看，包含最新上映电影、经典电影、动作片、喜剧片、爱情片、科幻片等各类热门电影资源，无需注册即可免费观看。LibreTV Movie Channel provides free HD movies online, including latest released movies, classic movies, action films, comedies, romance films, sci-fi films and other popular movie resources, free viewing without registration.',
            keywords: '免费电影,在线电影,电影观看,最新电影,热门电影,高清电影,动作电影,喜剧电影,科幻电影,free movies,online movies,watch movies,latest movies,hot movies,HD movies,action movies,comedy movies,sci-fi movies',
            tags: ['热门 Hot', '最新 Latest', '经典 Classic', '豆瓣高分 Douban High Rating', '冷门佳片 Underrated', '华语 Chinese', '欧美 Western', '韩国 Korean', '日本 Japanese', '动作 Action', '喜剧 Comedy', '爱情 Romance', '科幻 Sci-Fi', '悬疑 Suspense', '恐怖 Horror', '治愈 Healing']
        },
        tv: {
            id: 'tv',
            name: '电视剧 TV Series',
            path: '/category/tv',
            title: '免费电视剧在线观看 - 热门剧集连载 - LibreTV | Free TV Series Online - Popular Episode Updates',
            description: 'LibreTV电视剧频道提供免费高清电视剧在线观看，包含美剧、韩剧、日剧、国产剧、港剧等各类热门电视剧资源，实时更新最新剧集，无需注册即可免费观看。LibreTV TV Series Channel provides free HD TV series online, including American dramas, Korean dramas, Japanese dramas, Chinese dramas, Hong Kong dramas and other popular TV series resources, real-time updates of latest episodes, free viewing without registration.',
            keywords: '免费电视剧,在线电视剧,电视剧观看,热门剧集,美剧,韩剧,日剧,国产剧,港剧,电视剧连载,free TV series,online TV shows,watch TV series,popular series,American dramas,Korean dramas,Japanese dramas,Chinese dramas,Hong Kong dramas,TV series updates',
            tags: ['热门 Hot', '美剧 American Drama', '英剧 British Drama', '韩剧 Korean Drama', '日剧 Japanese Drama', '国产剧 Chinese Drama', '港剧 HK Drama', '日本动画 Anime', '综艺 Variety', '纪录片 Documentary']
        },
        variety: {
            id: 'variety',
            name: '综艺 Variety Shows',
            path: '/category/variety',
            title: '免费综艺节目在线观看 - 热门综艺推荐 - LibreTV | Free Variety Shows Online - Popular Variety Recommendations',
            description: 'LibreTV综艺频道提供免费高清综艺节目在线观看，包含热门真人秀、选秀节目、脱口秀、访谈节目等各类综艺资源，无需注册即可免费观看。LibreTV Variety Channel provides free HD variety shows online, including popular reality shows, talent shows, talk shows, interview programs and other variety resources, free viewing without registration.',
            keywords: '免费综艺,在线综艺,综艺观看,热门综艺,真人秀,选秀节目,脱口秀,综艺节目,free variety shows,online variety,watch variety,popular variety,reality shows,talent shows,talk shows,variety programs',
            tags: ['热门综艺 Hot Variety', '真人秀 Reality Show', '选秀 Talent Show', '脱口秀 Talk Show', '访谈 Interview', '音乐 Music', '舞蹈 Dance', '美食 Food']
        },
        anime: {
            id: 'anime',
            name: '动漫 Anime',
            path: '/category/anime',
            title: '免费动漫在线观看 - 热门动画推荐 - LibreTV | Free Anime Online - Popular Animation Recommendations',
            description: 'LibreTV动漫频道提供免费高清动漫在线观看，包含日本动画、国产动画、热门新番、经典动画等各类动漫资源，无需注册即可免费观看。LibreTV Anime Channel provides free HD anime online, including Japanese animation, Chinese animation, popular new releases, classic anime and other anime resources, free viewing without registration.',
            keywords: '免费动漫,在线动漫,动漫观看,日本动画,国产动画,热门新番,经典动漫,动画片,free anime,online anime,watch anime,Japanese animation,Chinese animation,popular new releases,classic anime,animation',
            tags: ['热门动画 Hot Anime', '日本动画 Japanese Anime', '国产动画 Chinese Anime', '新番 New Release', '经典 Classic', '热血 Shonen', '恋爱 Romance', '科幻 Sci-Fi']
        }
    },

    // 特定标签页面的SEO配置
    tagPages: {
        // 电影标签
        'movie-热门': { title: '热门电影推荐 - 最新热门大片在线观看 - LibreTV | Hot Movie Recommendations - Latest Blockbusters Online', description: '观看当前最热门的电影大片，包含最新上映的院线电影和热门网络电影，高清免费在线观看。Watch the hottest movie blockbusters now, including latest theatrical releases and popular online movies, HD free online viewing.', keywords: '热门电影,最新电影,大片,院线电影,hot movies,latest movies,blockbusters,theatrical movies' },
        'movie-动作': { title: '动作电影在线观看 - 经典动作片推荐 - LibreTV | Action Movies Online - Classic Action Film Recommendations', description: '免费观看精彩动作电影，包含好莱坞大片、功夫片、枪战片等各类刺激动作电影资源。Watch exciting action movies for free, including Hollywood blockbusters, kung fu films, gunfight films and other thrilling action movie resources.', keywords: '动作电影,动作片,好莱坞大片,功夫片,枪战片,action movies,action films,Hollywood blockbusters,kung fu films,gunfight films' },
        'movie-喜剧': { title: '喜剧电影在线观看 - 搞笑电影推荐 - LibreTV | Comedy Movies Online - Funny Movie Recommendations', description: '免费观看爆笑喜剧电影，包含经典喜剧、浪漫喜剧、黑色幽默等各类搞笑电影资源。Watch hilarious comedy movies for free, including classic comedies, romantic comedies, dark humor and other funny movie resources.', keywords: '喜剧电影,搞笑电影,浪漫喜剧,幽默电影,comedy movies,funny movies,romantic comedies,humor movies' },
        'movie-科幻': { title: '科幻电影在线观看 - 科幻大片推荐 - LibreTV | Sci-Fi Movies Online - Sci-Fi Blockbuster Recommendations', description: '免费观看精彩科幻电影，包含太空冒险、时间旅行、人工智能等各类科幻电影资源。Watch exciting sci-fi movies for free, including space adventures, time travel, artificial intelligence and other sci-fi movie resources.', keywords: '科幻电影,科幻片,太空电影,未来世界,sci-fi movies,science fiction films,space movies,future world' },
        'movie-爱情': { title: '爱情电影在线观看 - 浪漫爱情片推荐 - LibreTV | Romance Movies Online - Romantic Love Film Recommendations', description: '免费观看浪漫爱情电影，包含经典爱情片、青春爱情、虐心恋情等各类爱情电影资源。Watch romantic love movies for free, including classic romance films, youth romance, heartbreaking love stories and other romance movie resources.', keywords: '爱情电影,爱情片,浪漫电影,青春爱情,romance movies,love films,romantic movies,youth romance' },
        'movie-恐怖': { title: '恐怖电影在线观看 - 惊悚恐怖片推荐 - LibreTV | Horror Movies Online - Thrilling Horror Film Recommendations', description: '免费观看恐怖惊悚电影，包含鬼片、僵尸片、心理惊悚等各类恐怖电影资源。Watch horror thriller movies for free, including ghost films, zombie films, psychological thrillers and other horror movie resources.', keywords: '恐怖电影,恐怖片,惊悚片,鬼片,horror movies,horror films,thrillers,ghost films' },
        
        // 电视剧标签
        'tv-热门': { title: '热门电视剧推荐 - 最新热播剧集 - LibreTV | Popular TV Series Recommendations - Latest Trending Episodes', description: '观看当前最热门的电视剧，包含最新热播剧集和经典电视剧，高清免费在线观看。Watch the hottest TV series now, including latest trending episodes and classic TV series, HD free online viewing.', keywords: '热门电视剧,热播剧集,最新电视剧,popular TV series,trending episodes,latest TV shows' },
        'tv-美剧': { title: '美剧在线观看 - 热门美剧推荐 - LibreTV | American Dramas Online - Popular American TV Shows', description: '免费观看热门美剧，包含最新美剧、经典美剧、高分美剧等各类美剧资源。Watch popular American dramas for free, including latest American TV shows, classic American dramas, high-rated American dramas and other American TV resources.', keywords: '美剧,美剧在线,热门美剧,高分美剧,American dramas,American TV shows online,popular American TV,high-rated American dramas' },
        'tv-韩剧': { title: '韩剧在线观看 - 热门韩剧推荐 - LibreTV | Korean Dramas Online - Popular Korean TV Shows', description: '免费观看热门韩剧，包含最新韩剧、浪漫韩剧、悬疑韩剧等各类韩剧资源。Watch popular Korean dramas for free, including latest Korean dramas, romantic Korean dramas, suspense Korean dramas and other Korean TV resources.', keywords: '韩剧,韩剧在线,热门韩剧,浪漫韩剧,Korean dramas,Korean TV shows online,popular Korean dramas,romantic Korean dramas' },
        'tv-日剧': { title: '日剧在线观看 - 热门日剧推荐 - LibreTV | Japanese Dramas Online - Popular Japanese TV Shows', description: '免费观看热门日剧，包含最新日剧、经典日剧、治愈日剧等各类日剧资源。Watch popular Japanese dramas for free, including latest Japanese dramas, classic Japanese dramas, healing Japanese dramas and other Japanese TV resources.', keywords: '日剧,日剧在线,热门日剧,日本电视剧,Japanese dramas,Japanese TV shows online,popular Japanese dramas,Japanese TV series' },
        'tv-国产剧': { title: '国产剧在线观看 - 热门国产电视剧 - LibreTV | Chinese Dramas Online - Popular Chinese TV Series', description: '免费观看热门国产剧，包含最新国产剧、古装国产剧、现代国产剧等各类国产剧资源。Watch popular Chinese dramas for free, including latest Chinese dramas, historical Chinese dramas, modern Chinese dramas and other Chinese TV resources.', keywords: '国产剧,国产电视剧,热门国产剧,古装剧,Chinese dramas,Chinese TV series,popular Chinese dramas,historical dramas' },
        'tv-日本动画': { title: '日本动画在线观看 - 热门动漫推荐 - LibreTV | Japanese Anime Online - Popular Anime Recommendations', description: '免费观看热门日本动画，包含最新番剧、经典动漫、热血动漫等各类日本动画资源。Watch popular Japanese anime for free, including latest anime releases, classic anime, shonen anime and other Japanese animation resources.', keywords: '日本动画,动漫,番剧,日本动漫,Japanese anime,anime,anime releases,Japanese animation' }
    },

    // 搜索页面SEO
    search: {
        title: '视频搜索结果 - {keyword} - LibreTV | Video Search Results - {keyword}',
        description: '在LibreTV搜索"{keyword}"的结果，免费在线观看高清视频，包含电影、电视剧、综艺、动漫等多种类型。Search results for "{keyword}" on LibreTV, free online HD video viewing, including movies, TV series, variety shows, anime and other types.',
        keywords: '{keyword},视频搜索,在线观看,{keyword},video search,online viewing'
    }
};

// 动态更新页面SEO元数据
function updatePageSEO(config) {
    if (!config) return;

    // 更新标题
    if (config.title) {
        document.title = config.title;
    }

    // 更新meta描述
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && config.description) {
        metaDesc.setAttribute('content', config.description);
    }

    // 更新meta关键词
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && config.keywords) {
        metaKeywords.setAttribute('content', config.keywords);
    }

    // 更新Open Graph标签
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && config.title) {
        ogTitle.setAttribute('content', config.title);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && config.description) {
        ogDesc.setAttribute('content', config.description);
    }

    // 更新Twitter标签
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle && config.title) {
        twitterTitle.setAttribute('content', config.title);
    }

    const twitterDesc = document.querySelector('meta[property="twitter:description"]');
    if (twitterDesc && config.description) {
        twitterDesc.setAttribute('content', config.description);
    }

    // 更新Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical && config.canonical) {
        canonical.setAttribute('href', config.canonical);
    }

    // 更新JSON-LD结构化数据
    updateStructuredData(config);
}

// 更新JSON-LD结构化数据
function updateStructuredData(config) {
    const script = document.querySelector('script[type="application/ld+json"]');
    if (!script) return;

    try {
        const data = JSON.parse(script.textContent);
        
        if (config.title) {
            data.name = config.title.split(' - ')[0].split(' | ')[0];
        }
        if (config.description) {
            data.description = config.description;
        }
        if (config.canonical) {
            data.url = config.canonical;
        }

        script.textContent = JSON.stringify(data, null, 2);
    } catch (e) {
        console.error('更新结构化数据失败:', e);
    }
}

// 根据当前状态获取SEO配置
function getCurrentSEOConfig(category, tag) {
    // 如果有标签，优先使用标签配置
    if (category && tag) {
        const tagKey = `${category}-${tag}`;
        if (SEO_CONFIG.tagPages[tagKey]) {
            const config = SEO_CONFIG.tagPages[tagKey];
            return {
                ...config,
                canonical: `${SEO_CONFIG.site.url}/category/${category}?tag=${encodeURIComponent(tag)}`
            };
        }
    }

    // 使用分类配置
    if (category && SEO_CONFIG.categories[category]) {
        const cat = SEO_CONFIG.categories[category];
        return {
            title: cat.title,
            description: cat.description,
            keywords: cat.keywords,
            canonical: `${SEO_CONFIG.site.url}${cat.path}`
        };
    }

    // 返回首页配置
    return {
        title: SEO_CONFIG.site.name + ' - 免费在线视频搜索与观看平台 | Free Online Video Search and Viewing Platform',
        description: SEO_CONFIG.site.description,
        keywords: SEO_CONFIG.site.keywords,
        canonical: SEO_CONFIG.site.url + '/'
    };
}

// 解析URL参数获取当前分类和标签
function parseURLParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        category: params.get('category') || params.get('type'),
        tag: params.get('tag'),
        search: params.get('s') || params.get('search')
    };
}

// 初始化SEO
function initSEO() {
    const params = parseURLParams();
    
    if (params.search) {
        // 搜索页面
        const searchConfig = {
            title: SEO_CONFIG.search.title.replace('{keyword}', params.search),
            description: SEO_CONFIG.search.description.replace('{keyword}', params.search),
            keywords: SEO_CONFIG.search.keywords.replace('{keyword}', params.search),
            canonical: `${SEO_CONFIG.site.url}/?s=${encodeURIComponent(params.search)}`
        };
        updatePageSEO(searchConfig);
    } else if (params.category) {
        // 分类页面
        const config = getCurrentSEOConfig(params.category, params.tag);
        updatePageSEO(config);
    }
    // 否则保持首页默认SEO
}

// 导出函数
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SEO_CONFIG, updatePageSEO, getCurrentSEOConfig, initSEO };
}
