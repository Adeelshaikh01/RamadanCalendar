document.write("<h1>Ramadan Calendar 2021</h1>");

var roza = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

var date = [0,"14 April","15 April","16 April","17 April","18 April","19 April","20 April","21 April","22 April","23 April"
            ,"24 April","25 April","26 April","27 April","28 April","29 April","30 April","01 May","02 May","03 May",
            "04 May","05 May","06 May","07 May","08 May","09 May","10 May","11 May","12 May","13 May"]

var day = [0,"Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
        ,"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
        ,"Monday","Tuesday","Wednesday","Thursday"]

var seharTime = [0,"4:52","4:51","4:50","4:49","4:48","4:47","4:46","4:45","4:44","4:43","4:41","4:40","4:39","4:39","4:38"
                ,"4:37","4:36","4:35","4:34","4:33","4:32","4:31","4:30","4:29","4:28","4:28","4:27","4:26","4:25","4:25"]

var iftarTime = [0,"6:54","6:54","6:55","6:55","6:56","6:56","6:57","6:57","6:58","6:58","6:58","6:59","6:59","7:00","7:01"
                ,"7:01","7:02","7:02","7:02","7:03","7:04","7:04","7:04","7:05","7:05","7:06","7:07","7:07","7:08","7:08"]

var userRoza = +prompt("Enter the roza you want to check sehar iftar time");

if(userRoza > 0 && userRoza <= 30){
    document.write("<h3>" + "Roza" + "===" + "Date"+ "===" + "Day" + "===" + "Sehar Time" + "===" + "Iftar Time" + "</h3>");
    document.write("<h1>" + roza[userRoza] + " " + date[userRoza] + " " + day[userRoza] + " " + seharTime[userRoza] + " " + iftarTime[userRoza] + "</h1>");
    if(day[userRoza] === "Friday"){
        document.write("Jumma Mubarak")
    }
}
else{
    document.write("Please enter the correct input");
}