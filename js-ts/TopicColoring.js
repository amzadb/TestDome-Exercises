function newMessage(topicName) {
    // Change the background color of the topicName element to red if it exists
    // If the topicName element does not exist, log "Topic not found" to the console
    if (topicName) {
        const topic = document.querySelector(`[data-topic-name=${topicName}]`);
        if (topic) {
            topic.style.backgroundColor = 'red';
        } else {
            console.log('Topic not found');
        }        
    } 
}
  
// Example case
document.body.innerHTML = `<div>
    <p data-topic-name="discussion">General discussion</p>
    <p data-topic-name="bugs">Bugs</p>
    <p data-topic-name="animals">Animals</p>
  </div>`;
newMessage("discussion");
console.log(document.body.innerHTML);