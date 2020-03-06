/*
		By:Air   QQ:250740270 2020.3.7
    脚本来自https://steamdb.info/freepackages/
*/
// 1. 打开页面 https://store.steampowered.com/account/licenses
// 2. 谷歌浏览器按 F12 单击 Console 标签打开控制台
// 3. 从免费 ID 文档中复制一段替换下面已有的 ID ，一小时内限制激活50个 我已经分好了
// 4. 替换 ID 后把 ctrl+a 全选所有代码 ctrl+c 复制
// 5. 回到谷歌浏览器的控制台粘贴》回车 等待激活
// 6. 一小时后再复制第二段游戏 ID 替换下方 重复 3-5 步骤


(function()
{
    // 如果当前页面不是 许可和产品序列号激活 页面则跳到页面
	if( !location.href.startsWith( 'https://store.steampowered.com/account/licenses' ) )
	{
		alert( 'Please run this on Steam\'s account licenses page.' );

		window.location = 'https://store.steampowered.com/account/licenses/';

		return;
	}
	// 把游戏ID覆盖到这里

	let freePackages = new Set( [
		427515, //  Half-Life 2
		427514, //  Half-Life: Source
		427518, //  Half-Life 2: Deathmatch
		427519, //  Half-Life 2: Episode Two
		21366, //  Rag Doll Kung Fu Demo
		20662, //  Darwinia Demo
		20663, //  DEFCON Demo
		20664, //  Multiwinia Demo
		20665, //  Arx Fatalis Demo
		20666, //  Dark Messiah of Might & Magic Singleplayer Demo
		20667, //  Shadowgrounds Demo
		20668, //  Gumboy Demo
		20669, //  RIP 3 - The Last Hero Demo
		20670, //  Vigil: Blood Bitterness Demo
		20671, //  ThreadSpace: Hyperbol Demo
		20672, //  King's Bounty: Armored Princess - Demo
		20673, //  Painkiller Demo
		20674, //  Painkiller Overdose Demo
		20675, //  Bejeweled 2 Deluxe Demo
		20676, //  Chuzzle Deluxe Demo
		20677, //  Insaniquarium! Deluxe Demo
		20678, //  Zuma Deluxe Demo
		20679, //  AstroPop Deluxe Demo
		20680, //  Bejeweled Deluxe Demo
		20681, //  Big Money Deluxe Demo
		20682, //  BookWorm Deluxe Demo
		20683, //  Dynomite! Deluxe Demo
		20684, //  Feeding Frenzy 2: Shipwreck Showdown Deluxe Demo
		20685, //  Hammer Heads Deluxe Demo
		20686, //  Heavy Weapon Deluxe Demo
		20687, //  Iggle Pop! Deluxe Demo
		20688, //  Pizza Frenzy Demo
		20689, //  Rocket Mania Deluxe Demo
		20690, //  Typer Shark! Deluxe Demo
		20691, //  Talismania Deluxe Demo
		20692, //  Bookworm Adventures Deluxe Demo
		20693, //  Peggle Deluxe Demo
		21367, //  Peggle Extreme
		20694, //  Venice Demo
		20695, //  Mystery P.I.: The Lottery Ticket Demo
		20696, //  Amazing Adventures: The Lost Tomb Demo
		20697, //  Mystery PI: The Vegas Heist Demo
		20698, //  Amazing Adventures Around the World Demo
		20699, //  Peggle Nights Demo
		20700, //  Bejeweled Twist Demo
		20701, //  Mystery PI: The New York Fortune Demo
		20702, //  The Wizards Pen Demo
		20703, //  Plants vs. Zombies Demo
		20704, //  Escape Rosecliff Island Demo
		20705, //  Mystery P.I.: Lost in Los Angeles Demo
		20706, //  Zuma's Revenge Demo
		20707, //  Bookworm™ Adventures Volume 2 Demo
		20708, //  Zuma's Revenge! - Adventure Demo
		20710, //  BloodRayne 2 Demo
		20711, //  Poker Superstars II Demo
		20712, //  RACE 07 Demo
		20713, //  RoboBlitz Demo
		20714, //  Star Trek: D·A·C - Demo
		20715, //  Silverfall Demo
		20716, //  Titan Quest Demo
		20717, //  Medieval II: Total War Demo
		20718, //  Heroes of Annihilated Empires Demo
		20719, //  Heroes of Annihilated Empires Multiplayer Demo
		231371, //  Zen of Sudoku
		20720, //  Zen of Sudoku Demo
		20721, //  Eets Demo
		20722, //  Shank Demo
		20723, //  FlatOut Demo
		20724, //  Making History: The Calm & The Storm Demo
		20725, //  The Longest Journey Demo
		21289, //  Bloodline Champions
		20726, //  Joint Task Force Demo
		20727, //  Lost Planet: Extreme Conditions Demo
		20728, //  Lost Planet: Extreme Conditions DX10 Demo
		21368, //  Lost Planet: Extreme Condition Trial
		21369, //  Lost Planet: Extreme Condition DirectX10 Trial
		20729, //  Just Cause Demo
		20730, //  Battlestations: Midway Multiplayer Demo
		20731, //  Hitman: Blood Money Demo
		20732, //  Tomb Raider: Legend Demo
		20733, //  Project: Snowblind Demo
		20734, //  Infernal Demo
		20735, //  Runaway, The Dream of the Turtle Demo
		20736, //  Loki Egyptian Demo
		20737, //  Sherlock Holmes: The Awakened Demo
		20738, //  Ricochet Lost Worlds Demo
		20739, //  Wik Demo
		20740, //  Simplz Zoo - Demo
		20741, //  Sid Meier's Railroads Demo
		20742, //  Bioshock Demo
		20743, //  NBA 2K9 Demo
		20744, //  Stubbs The Zombie Demo
		20745, //  Men of War - Demo
		20746, //  The Movies Demo
		20747, //  Tomb Raider: Anniversary Demo
		20748, //  Championship Manager 2008 Demo
		20749, //  Conflict: Denied Ops Demo
		20750, //  Tomb Raider: Underworld Demo
		20751, //  Battlestations: Pacific - Demo
	] );

    // -- 从列表中删除已经激活过的游戏
    // 枚举所有存在ID的元素
	[ ...document.querySelectorAll( 'a[href^="javascript:RemoveFreeLicense"]' ) ].forEach( ( element ) =>
	{
        // 正则提取 ID
		const match = element.href.match( /javascript:RemoveFreeLicense\( ([0-9]+), '/ );
		// 如果ID不为空 和列表中的ID进行差集
		if( match !== null )
		{
			freePackages.delete( +match[ 1 ] );
		}
	} );

    let loaded = 0;
    // 调用steam接口 显示对话窗口
	let modal = window.ShowBlockingWaitDialog(
		'Executing…',
		'Please wait until all requests finish. Ignore all the errors, let it finish.'
	);
// 闭包
	const fetched = ( res ) =>
	{
        // 关闭窗口？
		modal.Dismiss();
   
        // 如果 激活次数 大于 未激活 的游戏数量则关闭窗口并刷新页面
		if( ++loaded >= freePackages.length )
		{
			modal = window.ShowBlockingWaitDialog(
				'Reloading…',
				'Keep in mind only 50 packages can be activated per hour.'
			);
            // 刷新当前页面
			location.reload();
		}
		else
		{
            // 更新提示窗口信息
			modal = window.ShowBlockingWaitDialog(
				'Executing…',
				`Loaded <b>${loaded}</b>/${freePackages.length}.`
			);
		}
	};
// 返回 游戏列表 转成数组
	freePackages = [ ...freePackages ].slice( -50 );
// 迭代 游戏列表 
	for( const subid of freePackages )
	{
        // post 发送激活操作
        // 不管成功还是失败 调用闭包函数 fetched 改变提示窗口信息
		window.jQuery.post(
			'https://store.steampowered.com/checkout/addfreelicense/' + subid,
			{
				ajax: true,
				sessionid: window.g_sessionID,
			}
		).always( fetched );
	}
}());
