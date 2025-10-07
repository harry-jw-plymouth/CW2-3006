class Search{
    constructor(Start,End,Adults,Children,Rooms){
        this.Adults=Adults;
        this.Start=Start;
        this.End=End;
        this.Children=Children;
        this.Rooms=Rooms;
    }
     DisplaySearch() {
        console.log("ADULTS:"+this.Adults);
        console.log("CHILDREN:"+this.Children);
        console.log("START:"+this.Start);
        console.log("END:"+this.End);
        console.log("ROOMS:"+this.Rooms);
    }
}

function OnLoad(){
    console.log("Loading");
    document.getElementById("Adults").setAttribute('value',1);
    document.getElementById("Rooms").setAttribute('value',1);
    document.getElementById("Children").setAttribute('value',0);

    const CurrentDate = new Date();
    var Year = CurrentDate.getFullYear();
    var Month = String(CurrentDate.getMonth() + 1).padStart(2, '0'); 
    var Day = String(CurrentDate.getDate()).padStart(2, '0');
    if(Day.length==1){
        Day='0'+Day;
    }
    if(Month.length==1){
        Month='0'+Day;
    }

    const FormattedCurrentDate = Year+"-"+Month+"-"+Day; 
    document.getElementById('StartDate').value = FormattedCurrentDate;
    
    const TommorowDate=new Date();
    TommorowDate.setDate(CurrentDate.getDate()+1);


    var TYear = TommorowDate.getFullYear();
    var TMonth = String(TommorowDate.getMonth() + 1);
    var TDay = String(TommorowDate.getDate());
    if(TDay.length==1){
        TDay='0'+TDay;
    }
    if(TMonth.length==1){
        TMonth='0'+TDay;
    }


    console.log(FormattedCurrentDate);
    console.log(TYear+"-"+TMonth+"-"+TDay);
    document.getElementById('EndDate').value = TYear+"-"+TMonth+"-"+TDay;


}

function OnSubmitClicked(){
    console.log("Button clicked");
    var Start=document.getElementById("StartDate").value;
    var End=document.getElementById("EndDate").value;
    var Adults=document.getElementById("Adults").value;
    var Children=document.getElementById("Children").value;
    if(!Children){
        let Children=0
    }
    var Rooms=document.getElementById("Rooms").value;
    var search=new Search(Start,End,Adults,Children,Rooms);
    GetIfInputsValid(search);
    search.DisplaySearch();



}

function GetIfInputsValid(search){
    if(search.Adults==0||!search.Adults){
        console.log("NO INPUT FOUND FOR ADULTS");
    }
    if(!search.Children){
        console.log("NO INPUT FOUND FOR CHILDREN");
    }
    if(search.End<search.Start||search.End==search.Start){
        console.log("End date not after start date");
    }
    if(search.Rooms<1){
        console.log("Not enough rooms");
    }
    
    
    

    return true;
}