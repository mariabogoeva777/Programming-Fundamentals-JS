function nextDay (year, month, day){
    let nextY = 0;
    let nextM = 0;
    let nextD = 0;
    
    if (month===1 || month===3 || month===5 || month===7 || month===8 || month ===10 || month===12){
        if (month===12){
            if(day===31){
                nextY=year+1;
                nextM=1;
                nextD=1;
            }else{
                nextY=year;
                nextM=month;
                nextD=day+1;
            };
        }else {
            if (day===31){
                nextY=year;
                nextM=month+1;
                nextD=1;
            }else {
                nextY=year;
                nextM=month;
                nextD=day+1;
            };
    
        };
        
        }else if (month===4 || month===6 || month===9 || month===11){
            if(day === 30){
                nextY=year;
                nextM=month+1;
                nextD=1;
            }else {
                nextY=year;
                nextM=month;
                nextD=day+1;
            }
    }else {
        if(day===28 && year%400===0){
            nextY=year;
            nextM=month;
            nextD=day+1;
        }else if (day===29){
            nextY=year;
            nextM=month+1;
            nextD=1;
        }else{
            nextY=year;
            nextM=month;
            nextD=day+1;
        }
    }
    if(year===1){
        nextY=1900+year;
    }
    
        console.log(`${nextY}-${nextM}-${nextD}`);
    }
nextDay(2016, 9, 30);