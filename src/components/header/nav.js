import NavItem from './nav-item';
import CategoryList from './category-list';
import ViewAllBtn from './view-all-btn';

const hot = {
     name: '热门分类',
     items: [
        {text: '英雄联盟', href: 'https://www.douyu.com/directory/game/LOL'},
        {text: '炉石传说', href: 'https://www.douyu.com/directory/game/How'},
        {text: 'DOTA2', href: 'https://www.douyu.com/directory/game/DOTA2'},
        {text: '主机游戏', href: 'https://www.douyu.com/directory/game/TVgame'},
        {text: '守望先锋', href: 'https://www.douyu.com/directory/game/Overwatch'},
        {text: '阴阳师', href: 'https://www.douyu.com/directory/game/yys'}
    ]
};

const recommendation = {
    name: '玩家推荐',
    items: [
        {text: '星际争霸', href: 'https://www.douyu.com/directory/game/SC'},
        {text: '格斗游戏', href: 'https://www.douyu.com/directory/game/FTG'},
        {text: '怀旧游戏', href: 'https://www.douyu.com/directory/game/classic'},
        {text: '我的世界', href: 'https://www.douyu.com/directory/game/MC'},
        {text: '王者荣耀', href: 'https://www.douyu.com/directory/game/wzry'},
        {text: '皇室战争', href: 'https://www.douyu.com/directory/game/hszz'},
        {text: '综合手游', href: 'https://www.douyu.com/directory/game/phone'},
        {text: 'DNF', href: 'https://www.douyu.com/directory/game/DNF'},
        {text: '户外', href: 'https://www.douyu.com/directory/game/outdoor'}
    ]
};

const onlineGame = {
    name: '网游推荐',
    items: [
        {text: '少年群侠传', href: 'http://wan.douyu.com/snqxz/'},
        {text: '蓝月传奇', href: 'http://wan.douyu.com/lycq/'},
        {text: '盗墓笔记', href: 'http://wan.douyu.com/dmbj/'},
        {text: '铁骑冲锋', href: 'http://wan.douyu.com/tq/'},
        {text: '武神赵子龙', href: 'http://wan.douyu.com/zzl/'},
        {text: '青云志', href: 'http://wan.douyu.com/qyz/'}
    ]
}

export default {
    render(h) {
       return  <ul class="head-nav fl">
                    <NavItem href="https://www.douyu.com/" name="首页"/>
                    <NavItem href="https://www.douyu.com/directory/all" name="直播"/>
                    <NavItem href="https://www.douyu.com/directory" name="分类">
                        <CategoryList name={hot.name} items={hot.items}/>
                        <CategoryList name={recommendation.name} items={recommendation.items}>
                            <ViewAllBtn href="http://wan.douyu.com/" />
                        </CategoryList>   
                    </NavItem>
                    <NavItem href="https://www.douyu.com/directory" name="游戏">
                        <CategoryList name={onlineGame.name} items={onlineGame.items}/>
                    </NavItem>
                    <NavItem href="https://www.douyu.com/directory/all" name="鱼吧"/>
               </ul>
    }
}