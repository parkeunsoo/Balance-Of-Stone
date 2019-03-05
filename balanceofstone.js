
var state = 0;
var selection = 0;
var click=0;
var click1=0;
var click2=0;
var click3=0;
var click4=0;
var click5=0;
var inputvalue;
var contractAddress ='0xbf310f59748144afc49f655235ce25bfc857c209';
var contractAddress2 = '0x3c830f3eb5a2cca71c6f653a6b89d9158b149e77';
var contractAddress3 = '0xcfb64323f35f64f1e233c68c865321bc2d0d7db3';
var abi =[
	{
		"constant": true,
		"inputs": [],
		"name": "Querypower",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "QuerySignup",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "SelectRace",
				"type": "uint256"
			}
		],
		"name": "SignUp",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "OperationFee",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "QueryRace",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "ItemId",
				"type": "uint256"
			}
		],
		"name": "BuyStoneItem",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "WeatherUpdate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "QueryRedMembers",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "ItemId",
				"type": "uint256"
			}
		],
		"name": "BuyEthItem",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "TransferStone",
				"type": "uint256"
			}
		],
		"name": "SupplyEnergy",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "SetReward",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "ItemId",
				"type": "uint256"
			}
		],
		"name": "QueryItem",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "QueryStone",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "QueryWhiteMembers",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "QueryRevenue",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "QueryBlueMembers",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "QueryBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "SelectRace",
				"type": "uint256"
			}
		],
		"name": "ChangeRace",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_new",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "oldaddr",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "newaddr",
				"type": "address"
			}
		],
		"name": "TransferOwnership",
		"type": "event"
	}
];
var abi2=[
	{
		"constant": true,
		"inputs": [
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "queryaddressr",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "queryWhiteEnergy",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Energy",
				"type": "uint256"
			},
			{
				"name": "user",
				"type": "address"
			}
		],
		"name": "SetBlueEnergy",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "SetRewardRate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "Rank",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "TransferRewardToUser",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Energy",
				"type": "uint256"
			},
			{
				"name": "user",
				"type": "address"
			}
		],
		"name": "SetWhiteEnergy",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetSupEnergy",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Energy",
				"type": "uint256"
			}
		],
		"name": "SetSupEnergy",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "blueattendant",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "queryaddressb",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "whiteEnergy",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "blueEnergy",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "whiteReward",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "whiteattendant",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "queryBlueEnergy",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "querybalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "queryaddressw",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "querywhite",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "redReward",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "redattendant",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "queryred",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "TodayReward",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "Reward",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "queryblue",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "queryRedEnergy",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "Energy",
				"type": "uint256"
			},
			{
				"name": "user",
				"type": "address"
			}
		],
		"name": "SetRedEnergy",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "SupEnergy",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "redEnergy",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "blueReward",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	}
];
var abi3=[
		{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			}
		],
		"name": "transfer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "allrevenue",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "gamestart",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_supply",
				"type": "uint256"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_symbol",
				"type": "string"
			},
			{
				"name": "_decimals",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	}
];
var BalanceOfStoneContract;
var DistributionContract;
var crushblockContract;
var BalanceOfStone;
var Distribution;
var crushblock;
var am1;
var am2;
var am3;
var am4;
var am5;
var am6;
var am7;
var am8;
var am9;
var amount1;
var amount2;
var amount3;
var amount4;
var amount5;
var amount6;
var amount7;
var amount8;
var amount9;
var allpower;
window.addEventListener('load',function(){
if(typeof web3 !== 'undefined'){
window.web3 = new Web3(web3.currentProvider);
}else{
console.log('No web3? You should consider trying Metamask!')
window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
getTime();
state=0;
click=0;

});

function startApp(){
BalanceOfStoneContract = web3.eth.contract(abi);
DistributionContract = web3.eth.contract(abi2);
BalanceOfStone = BalanceOfStoneContract.at(contractAddress);
Distribution = DistributionContract.at(contractAddress2);
crushblockContract = web3.eth.contract(abi3);
crushblock = crushblockContract.at(contractAddress3);
}
function SignUp(){
alert("Do you want to sign up?");
BalanceOfStone.SignUp(teams,function(e,r){
	if(r!=null)
		{
		location.href="INgame.html";
	}
});
}

function redget(){
BalanceOfStone.QueryRedMembers(function(e,r){
    document.getElementById('redmem').innerHTML=r.toNumber();
});
window.setTimeout("redget();",5000);
}
function blueget(){
BalanceOfStone.QueryBlueMembers(function(e,r){
    document.getElementById('bluemem').innerHTML=r.toNumber();
});
window.setTimeout("blueget();",5000);
}
function whiteget(){
BalanceOfStone.QueryWhiteMembers(function(e,r){
    document.getElementById('whitemem').innerHTML=r.toNumber();
});
window.setTimeout("whiteget();",5000);
}

function selectteam(num){
click = num;
}
function changeteam(){
	if(typeof teams=="undefined"){
	alert("select team!");
}
	else{
BalanceOfStone.ChangeRace(teams,{
	to:contractAddress,
	from:web3.eth.accounts[0],
	value:web3.toWei("0.001", "ether")
},function(e,r){alert("if transaction confirmed, success to change team");});
}
}
function redteamimg(){

if(state==0){
  document.redimg.src="redname.png"
  state=1;
}
else{
  if(click!=1)
  document.redimg.src="redteam.png"
  state=0;
}
}
function blueteamimg(){
if(state==0){
  document.blueimg.src="bluename.png"
  state=1;
}
else {
  if(click!=2)
  document.blueimg.src="blueteam.png"
  state=0;
}
}

function whiteteamimg(){
if(state==0){
  document.whiteimg.src="whitename.png"
  state=1;
}
else {
  if(click!=3)
  document.whiteimg.src="whiteteam.png"
  state=0;
}
}

function mouseon(){
state=0;
}
function mouseout(){
state=1;
}
function select(num){
click = num;
teams = num;
if(click==1){
  document.blueimg.src="blueteam.png"
  document.whiteimg.src="whiteteam.png"
}
if(click==2){
  document.redimg.src="redteam.png"
  document.whiteimg.src="whiteteam.png"
}
if(click==3){
  document.redimg.src="redteam.png"
  document.blueimg.src="blueteam.png"
}
}

function changesize(){
var x = document.getElementById("Select")
if(selection==0){
x.style.fontSize="60px";
selection=1;
}
else if(selection==1){
x.style.fontSize="55px";
selection=0;
}
}
function border1(){
var energy = document.getElementById('EnergyBoard');
energy.style.border=  "dashed";
energy.style.borderWidth="5px";
energy.style.borderColor ="rgb(255,208,59)";
energy.style.borderBottomColor ="#1d1d1d";
}
function border2(){
var energy = document.getElementById('EnergyBoard');
energy.style.border=  "solid";
energy.style.borderWidth="5px";
energy.style.borderColor ="rgb(30,30,30)";
}
function redEnergy(){
  Distribution.queryRedEnergy(function(e,r){
    document.getElementById('redsup').innerHTML=addComma(r.toNumber());
		document.getElementById('redsup2').innerHTML=addComma(r.toNumber());
  });
	window.setTimeout("redEnergy();",5000);
}
function blueEnergy(){
  Distribution.queryBlueEnergy(function(e,r){
    document.getElementById('bluesup').innerHTML=addComma(r.toNumber());
		document.getElementById('bluesup2').innerHTML=addComma(r.toNumber());
  });
	window.setTimeout("blueEnergy();",5000);
}
function whiteEnergy(){
  Distribution.queryWhiteEnergy(function(e,r){
    document.getElementById('whitesup').innerHTML=addComma(r.toNumber());
		document.getElementById('whitesup2').innerHTML=addComma(r.toNumber());
  });
	window.setTimeout("whiteEnergy();",5000);
}
/*function allRevenue(){
  BalanceOfStone.QueryRevenue(function(e,r){
    document.getElementById('revenue').innerHTML=addComma(r.toNumber());
  });
	window.setTimeout("allRevenue();",5000);
}*/
function allRevenue(){
	crushblock.allrevenue(function(e,r){
		document.getElementById('revenue').innerHTML=addComma(r.toNumber());
	});
}

function addComma(num) {
  var regexp = /\B(?=(\d{3})+(?!\d))/g;
   return num.toString().replace(regexp, ',');
}


function popup(select){
	var layer = document.getElementById("itempop");
	var layer2 = document.getElementById("powerpop");
	var layer3 = document.getElementById("stonepop");
	var layer4 = document.getElementById("suppop");
	var layer5 = document.getElementById("changepop");
	if(select==0){
		if(click1==0)
		{
			layer.style.visibility="visible";
			layer2.style.visibility="hidden";
			layer3.style.visibility="hidden";
			layer4.style.visibility="hidden";
			layer5.style.visibility="hidden";
			click1=1;
			click2=0;
			click3=0;
			click4=0;
			click5=0;
		}
		else if(click1==1)
		{
			layer.style.visibility="hidden";
			click1=0;
		}
	}
	else if(select==1){
		if(click2==0)
		{
			layer.style.visibility="hidden";
			layer2.style.visibility="visible";
			layer3.style.visibility="hidden";
			layer4.style.visibility="hidden";
			layer5.style.visibility="hidden";
			click1=0;
			click2=1;
			click3=0;
			click4=0;
			click5=0;
		}
		else if(click2==1)
		{
			layer2.style.visibility="hidden";
			click2=0;
		}
	}
	else if(select==2){
		if(click3==0)
		{
			layer.style.visibility="hidden";
			layer2.style.visibility="hidden";
			layer3.style.visibility="visible";
			layer4.style.visibility="hidden";
			layer5.style.visibility="hidden";
			click1=0;
			click2=0;
			click3=1;
			click4=0;
			click5=0;
		}
		else if(click3==1)
		{
			layer3.style.visibility="hidden";
			click3=0;
		}
	}
	else if(select==3){
		if(click4==0)
		{
			layer.style.visibility="hidden";
			layer2.style.visibility="hidden";
			layer3.style.visibility="hidden";
			layer4.style.visibility="visible";
			layer5.style.visibility="hidden";
			click1=0;
			click2=0;
			click3=0;
			click4=1;
			click5=0;
		}
		else if(click4==1)
		{
			layer4.style.visibility="hidden";
			click4=0;
		}
	}
	else if(select==4){
		if(click5==0)
		{
			layer.style.visibility="hidden";
			layer2.style.visibility="hidden";
			layer3.style.visibility="hidden";
			layer4.style.visibility="hidden";
			layer5.style.visibility="visible";
			click1=0;
			click2=0;
			click3=0;
			click4=0;
			click5=1;
		}
		else if(click5==1)
		{
			layer5.style.visibility="hidden";
			click5=0;
		}
	}
}
function buystoneitem(select){
	BalanceOfStone.BuyStoneItem(select,function(e,r){
	alert("if transaction confirmed, success to buy item");
	});
}

function buyethitem(select){
	if(select==6)
	{
	BalanceOfStone.BuyEthItem(select,{
		to:contractAddress,
		from:web3.eth.accounts[0],
		value:web3.toWei("0.02", "ether")
	},function(e,r){alert("if transaction confirmed, success to buy item");});
	}
	else if(select==7)
	{
	BalanceOfStone.BuyEthItem(select,{
		to:contractAddress,
		from:web3.eth.accounts[0],
		value:web3.toWei("0.05", "ether")
	},function(e,r){alert("if transaction confirmed, success to buy item");});
	}
	else if(select==8)
	{
	BalanceOfStone.BuyEthItem(select,{
		to:contractAddress,
		from:web3.eth.accounts[0],
		value:web3.toWei("0.07", "ether")
	},function(e,r){alert("if transaction confirmed, success to buy item");});
	}
	}

function queryItem0(){
	BalanceOfStone.QueryItem(0,function(e,r){
		am1=document.getElementById('ambronzespoon').innerHTML=addComma(r.toNumber());
	});
	window.setTimeout("queryItem0();",5000);
}
function queryItem1(){
	BalanceOfStone.QueryItem(1,function(e,r){
		am2=document.getElementById('amsilverspoon').innerHTML=addComma(r.toNumber());
	});
	window.setTimeout("queryItem1();",5000);
}
function queryItem2(){
	BalanceOfStone.QueryItem(2,function(e,r){
		am3=document.getElementById('amgoldspoon').innerHTML=addComma(r.toNumber());
	});
	window.setTimeout("queryItem2();",5000);
}
function queryItem3(){
	BalanceOfStone.QueryItem(3,function(e,r){
		am4=document.getElementById('ambronzeax').innerHTML=addComma(r.toNumber());
	});
	window.setTimeout("queryItem3();",5000);
}
function queryItem4(){
	BalanceOfStone.QueryItem(4,function(e,r){
		am5=document.getElementById('amsilverax').innerHTML=addComma(r.toNumber());
	});
	window.setTimeout("queryItem4();",5000);
}
function queryItem5(){
	BalanceOfStone.QueryItem(5,function(e,r){
		am6=document.getElementById('amgoldax').innerHTML=addComma(r.toNumber());
	});
	window.setTimeout("queryItem5();",5000);
}
function queryItem6(){
	BalanceOfStone.QueryItem(6,function(e,r){
		am7=document.getElementById('ambronzeshovel').innerHTML=addComma(r.toNumber());
	});
	window.setTimeout("queryItem6();",5000);
}
function queryItem7(){
	BalanceOfStone.QueryItem(7,function(e,r){
		am8=document.getElementById('amsilvershovel').innerHTML=addComma(r.toNumber());
	});
	window.setTimeout("queryItem7();",5000);
}
function queryItem8(){
	BalanceOfStone.QueryItem(8,function(e,r){
		am9=document.getElementById('amgoldshovel').innerHTML=addComma(r.toNumber());
	});
	window.setTimeout("queryItem8();",5000);
}
	function queryPower(){
		amount1=am1*5;
		amount2=am2*15;
		amount3=am3*25;
		amount4=am4*35;
		amount5=am5*40;
		amount6=am6*60;
		amount7=am7*100;
		amount8=am8*300;
		amount9=am9*450;
		document.getElementById('ampower1').innerHTML=addComma(amount1);
		document.getElementById('ampower2').innerHTML=addComma(amount2);
		document.getElementById('ampower3').innerHTML=addComma(amount3);
		document.getElementById('ampower4').innerHTML=addComma(amount4);
		document.getElementById('ampower5').innerHTML=addComma(amount5);
		document.getElementById('ampower6').innerHTML=addComma(amount6);
		document.getElementById('ampower7').innerHTML=addComma(amount7);
		document.getElementById('ampower8').innerHTML=addComma(amount8);
		document.getElementById('ampower9').innerHTML=addComma(amount9);
		window.setTimeout("queryPower();",5000);
	}
	function queryallpower(){
		allpower=amount1+amount2+amount3+amount4+amount5+amount6+amount7+amount8+amount9
		document.getElementById('yourpower').innerHTML=addComma(allpower);
		window.setTimeout("queryallpower();",5000);
	}
	function querystone(){
		BalanceOfStone.QueryStone(function(e,r){
			document.getElementById('valuestone').innerHTML=addComma(r.toNumber());
		});
		window.setTimeout("querystone();",5000);
	}
	function supplyenergy(){
		inputvalue=document.getElementById('supplyvalue').value;
		if(!inputvalue){
			alert("input the value")
		}
		else{
		BalanceOfStone.SupplyEnergy(inputvalue,function(e,r){
		alert(+inputvalue+" Energy is supplied");
		document.getElementById('supplyvalue').value="";
		});
		}
	}
	function getTime() {
now = new Date();
dday = new Date(1994,04,09,09,59,00);
days = (dday - now) / 1000 / 60 / 60 / 24;
daysRound = Math.floor(days);
hours = (dday - now) / 1000 / 60 / 60 - (24 * daysRound);
hoursRound = Math.floor(hours);
minutes = (dday - now) / 1000 /60 - (24 * 60 * daysRound) - (60 * hoursRound);
minutesRound = Math.floor(minutes);
seconds = (dday - now) / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound);
secondsRound = Math.round(seconds);

document.getElementById("time1").innerHTML = hoursRound;
document.getElementById("time2").innerHTML = minutesRound;
document.getElementById("time3").innerHTML = secondsRound;
newtime = window.setTimeout("getTime();", 1000);

}
function distribution(){
BalanceOfStone.SetReward(function(e,r){
	alert("set reward");
});
}

function Startgame(){
	BalanceOfStone.QuerySignup(function(e,r){
		alert(r.toString());
		if(r.toString()==="true")
			location.href="INgame.html"
		else
			location.href="SelectTeam.html"
});
}
