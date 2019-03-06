pragma solidity ^0.5.1;

contract Owned {
 
    address public owner; // owner's address
   
    // transfer owner event
    event TransferOwnership(address oldaddr, address newaddr);

    // modifier only owner
    modifier onlyOwner() { if (msg.sender != owner) revert(); _; }

    // Constructor
    constructor() public {
        owner = msg.sender; // owner is account who create contract first
    }
    
    // transfer owner function
    function transferOwnership(address _new) onlyOwner public {
        address oldaddr = owner;
        owner = _new;
        emit TransferOwnership(oldaddr, owner);
    }
}

contract BalanceOfStone is Owned{
    mapping(address => userinfo) User;
    BosConfig  GameInfo = BosConfig(0x692a70D2e424a56D2C6C27aA97D1a86395877b3A);
    Distribution Energy = Distribution(0x692a70D2e424a56D2C6C27aA97D1a86395877b3A);
    struct userinfo{
    uint256 stoneBalance; // Balance of Stone
    uint256 team; // red , blue , white
    uint256 power; // user's productivity
    bool register; // user's resgstration state
    uint256 updateTime; // user's power updatetime
    uint256 StonePower; // Stone's power
    mapping(uint256 => uint256) ItemSlot;
    }
    
    uint256 StartTime;
    uint256 AcEnergy; // Collected Energy in BOS-25
    uint256 Revenue; // All Revenue ( 85% of  total revenue will be carried over and combined with next revenue.)
    uint256 Reward; // 10% of Revneue (it is stacked more daily)
    uint256 Weather; // It states the weather condition of bos-25.

  
    function SignUp() public{
        require(!User[msg.sender].register);
        StartTime = block.timestamp;
        User[msg.sender] = userinfo(0,0,1,true,StartTime,1);
    }   
//Users can change own's race   
    function ChangeRace(uint SelectRace) public payable{
        require(User[msg.sender].register);
        if(SelectRace == 1)
        {
            User[msg.sender].team = 1;
        }
        else if(SelectRace == 2)
        {
            User[msg.sender].team = 2;
        }
        else if(SelectRace == 3)
        {
            User[msg.sender].team = 3;
        }
        else
            revert();
        Revenue += msg.value;
}
    function BuyStoneItem(uint256 ItemId) public {
        require(ItemId == 0||ItemId == 1||ItemId == 2||ItemId == 3||ItemId == 4||ItemId == 5);
        require(User[msg.sender].stoneBalance >= GameInfo.getItemCost(ItemId));
        UpdateStone();
        User[msg.sender].stoneBalance -= GameInfo.getItemCost(ItemId);
        User[msg.sender].power += GameInfo.getItemPower(ItemId);
        User[msg.sender].ItemSlot[ItemId]++;
        TimeUpdate();
    }
    function BuyEthItem(uint256 ItemId) public payable{
        require(ItemId == 6||ItemId == 7||ItemId == 8);
        require(msg.sender.balance >= GameInfo.getItemCost(ItemId));
        require(msg.value >= GameInfo.getItemCost(ItemId));
        UpdateStone();
        User[msg.sender].power += GameInfo.getItemPower(ItemId);
        User[msg.sender].ItemSlot[ItemId]++;
        TimeUpdate();
        Revenue += msg.value;
    }      
  
    function SupplyEnergy(uint256 TransferStone) public {
        require(User[msg.sender].stoneBalance >= TransferStone);
        User[msg.sender].stoneBalance -= TransferStone;
        AcEnergy += TransferStone;
        Energy.SetSupEnergy(TransferStone);
        if(User[msg.sender].team == 1)
        Energy.SetRedEnergy(TransferStone);
        else if(User[msg.sender].team == 2)
        Energy.SetBlueEnergy(TransferStone);
        else if(User[msg.sender].team == 3)
        Energy.SetWhiteEnergy(TransferStone);
        else
        revert();
    }
  

    function QueryRace() view public returns(uint256){
        return User[msg.sender].team;
    }
    function QueryStone() view public returns(uint256){
        require(User[msg.sender].register);
        return User[msg.sender].stoneBalance + User[msg.sender].power * (block.timestamp-User[msg.sender].updateTime);
    }
    function Querypower() view public returns(uint256){
        require(User[msg.sender].register);
        return User[msg.sender].power;
    }
    function QueryItem(uint256 ItemId) view public returns(uint)
    {
        require(User[msg.sender].register);
        return User[msg.sender].ItemSlot[ItemId];
    }
   

// real balance + balance to be deposited
    function WalletStone() private{
         User[msg.sender].stoneBalance += User[msg.sender].power * (block.timestamp-User[msg.sender].updateTime);
    }
    function UpdateStone() private {
        require(User[msg.sender].register);
        WalletStone();  
    }
    function TimeUpdate() private {
        User[msg.sender].updateTime = block.timestamp;
    }
  /*function CheckTime() constant public returns(uint256){
         return block.timestamp-User[msg.sender].updateTime;
    }*/
//real balance
  /*function CheckStone() constant public returns(uint256){
       return User[msg.sender].stoneBalance;
    }*/

    function SetReward() public payable{
    Reward = Revenue/10;
    address payable distribution = 0x692a70D2e424a56D2C6C27aA97D1a86395877b3A;
    distribution.transfer(Reward);
    }
 /*function Daily() public {
        
    }*/

}
contract BosConfig{
    
    mapping(uint256 => Item) ItemInfo;
    
    struct Item { // available for purchase with stone and Ethereum
        string  Name; // Item's name
        uint256 Cost; // Item's cost
        uint256 Power; // Item's power
    }
    
    constructor() public{
        //Stoneitem information
        ItemInfo[0] = Item("Bronze spoon",5000,5);
        ItemInfo[1] = Item("Silver spoon",15000,15);
        ItemInfo[2] = Item("Gold spoon",25000,25);
        ItemInfo[3] = Item("Bronze trowel",35000,35);
        ItemInfo[4] = Item("Silver trowel",45000,45);
        ItemInfo[5] = Item("Gold trowel",60000,60);
        //Etheritem information
        ItemInfo[6] = Item("Bronze shovel",0.02 ether,100);
        ItemInfo[7] = Item("Silver shovel",0.05 ether,300);
        ItemInfo[8] = Item("Gold shovel",0.07 ether,450);
    }

    function getItemCost(uint256 ItemId) public view returns(uint256){
        return ItemInfo[ItemId].Cost;
    }
    function getItemPower(uint256 ItemId) public view returns(uint256){
        return ItemInfo[ItemId].Power;
    }

}
contract Distribution {
    
    mapping(uint256=>ContributeInfo) RedInfo; // RedTeam's Energy
    mapping(uint256=>ContributeInfo) BlueInfo; // BlueTeam's Energy
    mapping(uint256=>ContributeInfo) WhiteInfo; // WhiteTeam's Energy
    mapping(uint256=>RankInfo) Temp; //Swap()'s temp value
    mapping(uint256=>RankInfo) RankEnergy; // set to rank energy
    uint256 public SupEnergy;// User's Supplying Energy
    uint256 public Reward;
    uint256 public redReward;
    uint256 public blueReward;
    uint256 public whiteReward;
  
    uint256 public redEnergy; // collected redEnergy
    uint256 public blueEnergy;// collected blueEnergy
    uint256 public whiteEnergy;// collected whiteEnergy
    uint256 public redattendant=0;
    uint256 public blueattendant=0;
    uint256 public whiteattendant=0;
    struct ContributeInfo{
        address payable User;
        uint256 Energy;
    }
    struct RankInfo{
        uint256 team;
        uint256 Energy;
    }
    //Rank Team's Energy
    function quickSort(uint256 left, uint256 right) internal{
        SetRankEnergy();
        uint256 i = left;
        uint256 j = right;
        if(i==j) return;
        uint256 pivot = RankEnergy[left + (right - left) / 2].Energy;
        while (i <= j) {
            while (RankEnergy[i].Energy> pivot) i++;
            while (pivot > RankEnergy[j].Energy) j--;
            if (i <= j) {
               Swap(i,j);
                i++;
                j--;
            }
        }
        if (left < j)
            quickSort(left, j);
        if (i < right)
            quickSort(i, right);
    }
    function Rank() internal{
      quickSort(0,2);
    }
    function SetSupEnergy(uint256 Energy) public{
        SupEnergy += Energy;
    }
    function GetSupEnergy() view public returns (uint256){
        return SupEnergy;
    }
    function Swap(uint256 a , uint256 b) internal{
        Temp[0]=RankEnergy[a];
        RankEnergy[a]=RankEnergy[b];
        RankEnergy[b]=Temp[0];
    }
    function SetRedEnergy(uint256 Energy) public{
        RedInfo[redattendant].User = msg.sender;
        RedInfo[redattendant].Energy += Energy;
        redattendant++;
        redEnergy += Energy;
    }
     function SetBlueEnergy(uint256 Energy) public{
        BlueInfo[blueattendant].User = msg.sender;
        BlueInfo[blueattendant].Energy += Energy;
        blueattendant++;
        blueEnergy += Energy;
    }
     function SetWhiteEnergy(uint256 Energy) public{
        WhiteInfo[whiteattendant].User = msg.sender;
        WhiteInfo[whiteattendant].Energy += Energy;
        whiteattendant++;
        whiteEnergy += Energy;
    }
    
    function SetRankEnergy() internal{
        RankEnergy[0].team = 0;
        RankEnergy[0].Energy = redEnergy;//Red team = RankEnergy[0]
        RankEnergy[1].team = 1;
        RankEnergy[1].Energy = blueEnergy;//Blue team = RankEnergy[1]
        RankEnergy[2].team = 2;
        RankEnergy[2].Energy = whiteEnergy;//White team = RankEnergy[2]
    }
    function SetRewardRate() internal{
        if(RankEnergy[0].team == 0){
            redReward = Reward/2;
            blueReward = Reward/4;
            whiteReward = Reward/4;
        }
        if(RankEnergy[0].team == 1){
            blueReward = Reward/2;
            redReward = Reward/4;
            whiteReward = Reward/4;
        }
        if(RankEnergy[0].team == 2){
            whiteReward = Reward/2;
            blueReward = Reward/4;
            redReward = Reward/4;
        }
        
    }
    function TodayReward() internal{
        Reward = address(this).balance;
    }
    function TransferRewardToUser() public payable{ //confirm this function execute without "payable"
        
    for(uint256 i=0; i<redattendant;i++){
    RedInfo[i].User.transfer(redReward*(RedInfo[i].Energy/redEnergy));
    delete RedInfo[i];
    i=0;
    }
    
    for(uint256 j=0; j<blueattendant;j++){
    BlueInfo[j].User.transfer(blueReward*(RedInfo[j].Energy/blueEnergy));
    delete BlueInfo[j];   
    j=0;
    }
    
    for(uint256 k=0; k<redattendant;k++){
    WhiteInfo[k].User.transfer(whiteReward*(WhiteInfo[k].Energy/whiteEnergy));
    delete WhiteInfo[k];
    k=0;
    }
    
    } 
    
    function ResetInfo() internal{
        redattendant=0;
        blueattendant=0;
        whiteattendant=0;
    }
   
    function Rewards() public payable {
        TodayReward();
        Rank();
        SetRewardRate();
        TransferRewardToUser();
    }
}