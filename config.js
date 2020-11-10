var config = {
	admins: ["82897317803327488"], // people without the admin role that are allowed to use the bot, this is their discord ID
	serverID: "775104911607726121", // discord server ID
	host: "sql.pukawka.pl1", // MySQL IP or hostname
	user: "804736", // MySQL username
	password: "Djdaro1994.", // MySQL password
	database: "804736_report", // MySQL database
	reportsDB: "reports", // MySQL report location can't really change this 
	blockedDB: "blocked", // MySQL blocked location can't really change this
	channelName: "bot-reports", // Channel the bot will post reports in, create the channel before running the bot!
	commandStr: "!ms ", // !ms block 76561198023897791
	SteamAPIKey: "16C1EE0588319F15D3849E19E8E06EFB", // SteamAPI Key https://steamcommunity.com/dev/api
	adminRole: "Admin", // The role name of people that should be able to use the bot
	token: "Nzc1NjM3MTYxMDU1MjIzODI4.X6pOZQ.1Phwi30ZD9PzDcZSJJh51pMQsn4" // Bot Token
}
module.exports = config;
