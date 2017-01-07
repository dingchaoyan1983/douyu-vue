import Channel from './channel';
import SidebarTabs from './sidebar-tabs';
import SidebarTab from './sidebar-tab';
import Board from './board';

const columnBoards = [
    {
        header: {
            title: '热门游戏',
            href: '/directory/columnRoom/game'
        },
        items: [
            {"href":"https://www.douyu.com/directory/game/LOL","text":"英雄联盟"},
            {"href":"https://www.douyu.com/directory/game/How","text":"炉石传说"},
            {"href":"https://www.douyu.com/directory/game/DOTA2","text":"DOTA2"},
            {"href":"https://www.douyu.com/directory/game/CF","text":"穿越火线"},
            {"href":"https://www.douyu.com/directory/game/WOW","text":"魔兽世界"},
            {"href":"https://www.douyu.com/directory/game/Overwatch","text":"守望先锋"},
            {"href":"https://www.douyu.com/directory/game/SC","text":"星际争霸"},
            {"href":"https://www.douyu.com/directory/game/FTG","text":"格斗游戏"},
            {"href":"https://www.douyu.com/directory/game/TVgame","text":"主机游戏"},
            {"href":"https://www.douyu.com/directory/game/DNF","text":"DNF"},
            {"href":"https://www.douyu.com/directory/game/qipai","text":"棋牌娱乐"},
            {"href":"https://www.douyu.com/directory/game/CSGO","text":"CS:GO"},
            {"href":"https://www.douyu.com/directory/game/mszb","text":"魔兽争霸"},
            {"href":"https://www.douyu.com/directory/game/classic","text":"怀旧游戏"}
        ]
    },
    {
        header: {
            title: '移动游戏',
            href: 'https://www.douyu.com/directory/columnRoom/ydyx'
        },
        items: [
            {"href":"https://www.douyu.com/directory/game/wzry","text":"王者荣耀"},
            {"href":"https://www.douyu.com/directory/game/yys","text":"阴阳师"},
            {"href":"https://www.douyu.com/directory/game/qqdzz","text":"球球大作战"},
            {"href":"https://www.douyu.com/directory/game/xyzx","text":"新游中心"},
            {"href":"https://www.douyu.com/directory/game/hyrz","text":"火影忍者"},
            {"href":"https://www.douyu.com/directory/game/hszz","text":"皇室战争"},
            {"href":"https://www.douyu.com/directory/game/phone","text":"综合手游"},
            {"href":"https://www.douyu.com/directory/game/mhzx","text":"梦幻诛仙"}
        ]
    }
];

const discoveryBoards = [
    {
        header: {
            title: '我最喜欢'
        },
        items: [
            {"href":"https://www.douyu.com/directory/game/mszb?is_hot=1","text":"魔兽争霸"},
            {"href":"https://www.douyu.com/directory/game/xx?is_hot=1","text":"星秀"},
            {"href":"https://www.douyu.com/directory/game/gm?is_hot=1","text":"国漫"},
            {"href":"https://www.douyu.com/directory/game/LOL?is_hot=1","text":"英雄联盟"},
            {"href":"https://www.douyu.com/directory/game/yz?is_hot=1","text":"颜值"},
            {"href":"https://www.douyu.com/directory/game/outdoor?is_hot=1","text":"户外"},
            {"href":"https://www.douyu.com/directory/game/Overwatch?is_hot=1","text":"守望先锋"},
            {"href":"https://www.douyu.com/directory/game/smkj?is_hot=1","text":"数码科技"},
            {"href":"https://www.douyu.com/directory/game/hszz?is_hot=1","text":"皇室战争"}
        ]
    }
];

export default {
    render(h) {
        return <div id="left" class="left-menu">
                    <a class="left-btn">
                        <span></span>
                    </a>
                    <div class="left-big">
                        <div class="channel-cate">
                            <ul>
                                <Channel text="全部直播"  iconClassName="icon-live" to="all-lives"/>
                                <Channel text="全部分类" iconClassName="icon-game" to="all-categories"/>
                                <Channel text="排行榜" iconClassName="icon-rank" to="ranking-list"/>
                                <Channel text="我的关注" iconClassName="icon-focus" to="my-focus"/>
                                <Channel text="頁游中心" iconClassName="icon-collect" to="webgame-center"/>
                            </ul>
                        </div>
                        <SidebarTabs>
                            <SidebarTab label="栏目" className="icon-column">
                                {
                                    columnBoards.map(({header, items}) => <Board header={header} items={items}/>)
                                }
                            </SidebarTab>
                            <SidebarTab label="发现" className="icon-recom">
                                {
                                    discoveryBoards.map(({header, items}) => <Board header={header} items={items}/>)
                                }
                            </SidebarTab>
                        </SidebarTabs>
                    </div>
                </div>
    }
}