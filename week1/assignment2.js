// function called canVote that returns true or false if the age of a user is > 18

const eligibiltyVoteAge  = 18;

const eligibility = canVote(2);

function canVote(age){
    if(age>eligibiltyVoteAge){
        return console.log("eligible to vote");
    } 
    if(age<eligibiltyVoteAge&&age!=0){
        let timeNeedstoWait = eligibiltyVoteAge - age;
        return console.log("currently your are not eligible to vote Please come after :"+timeNeedstoWait+" years");
    }
    else{
        return console.log("not born yet");
    }
}


