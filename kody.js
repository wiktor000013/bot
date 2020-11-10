const Discord = require('discord.js');

var request = require("request");
const client = new Discord.Client();
var config = require('./config.js');
var mysql      = require('mysql');
var reportDB = mysql.createConnection({
  host     : "sql.pukawka.pl",
  user     : "804736",
  password : "Djdaro1994.",
  database : "804736_kody"
});
var report = mysql.createConnection({
  host     : "sql.pukawka.pl",
  user     : "804736",
  password : "Djdaro1994.",
  database : "804736_uzyte"
});
var reportsDB = "Pawel-codes";
var channelName = "bot-reports";


var SBconnected = false;


var guild;
var admin;
var channelReport;
var admins = config.admins;
var blocked = [];



client.on('ready', () => {
	
	
	reportDB.connect(function(err) {
		if (err) {
			channelReport.send("Couldn't connect to the database :(");
			process.exit(1);
		}
		SBconnected = true;
	});
	
	console.log("Bot ready!");
	
});
client.on('message', (msg) => {
	if(msg.channel.id==775127877284921404)
	
	{
		if (msg.content.startsWith("!kuponreset"))
		{
			if(msg.author.id == 568073544337195009)
			{
				 report.query(`TRUNCATE TABLE uzyte`);
				 reportDB.query(`TRUNCATE TABLE discord_kody`);
				 reportDB.query(`TRUNCATE TABLE Pawel_Codes`);
					    channel = client.channels.cache.get('775738023240925223');
						
						channel.send('<@&775104911607726121> Kody zostały zresetowane przez admina');
			}
		}
	}
});
client.on('ready', () => {
	function reset(){
	var d = new Date();
			var s = d.getDate();
			var godzina = d.getHours();
			var minuty = d.getMinutes();
			
			if(godzina == 17 && minuty == 00)
			{
					
					   report.query(`TRUNCATE TABLE uzyte`);
					    channel = client.channels.cache.get('775738023240925223');
					
						channel.send('<@&775104911607726121> Kody zostały zresetowane');

			}
			}
			setInterval(reset,60000);
});
client.on('ready', () => {
	function reset24(){
	var ds = new Date();
			var ss = ds.getDate();
			var godzinas = ds.getHours();
			var minutys = ds.getMinutes();
			
			if(godzinas == 23 && minutys == 59)
			{
					
					   reportDB.query(`TRUNCATE TABLE discord_kody`);
					   

			}
			}
			setInterval(reset24,1000);
});


client.on('message', (msg) => {
	if(msg.channel.id==775738023240925223)
	{
		if (msg.content.startsWith("!kod"))		
		{
				var rnumb =	"discord_kody/" + Math.floor(Math.random() * 10000) + 1000;
				var w = msg.author.id;
				var sql = `SELECT * FROM uzyte WHERE id = ${w}`;
			
				var query = report.query(sql, function(err, result) {
				console.log("Total Records:- " + result.length);
				if(result.length == 1)
				{
		
				msg.author.send('Otrzymałeś już swój kupon ;)');
				}
				
				
				if(result.length != 1)
				{	
				 msg.author.send('-------------------------------------------\n Twój kod to ' + rnumb + "\n Aby go wykorzystać wpisz na czacie !dc " +rnumb + "\n Wykorzystaj go odrazu bo o 24 straci ważność ;) \n -------------------------------------------\n");
				dodaj(rnumb,w);
				}
				});
		}
	}
});

function dodaj(x,y) {
	if(SBconnected) {
		
			var d = new Date();
			var s = d.getDate();
			var godzina = d.getHours();
			
			var n = d.getDate() + 1;
		  	reportDB.query(`INSERT INTO discord_kody (Code, Value) VALUES ("${x}", "400") `);
		  	report.query(`INSERT INTO uzyte (id) VALUES ("${y}") `);
		
	}
}


client.login(config.token);