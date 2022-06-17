let question={
	Title:'What is JavaScript?',
	alternatives:['Game','Programing Language','an Extension','Operating System'],
	correctAnswer: 1

}
function showQuestion(q){
let titleDiv=document.getElementById('Title');
titleDiv.textContent=q.Title;
let alts=document.querySelectorAll('.alternatives');
alts.forEach(function(element,index){
	element.textContent=q.alternatives[index];
});
}
showQuestion(question);