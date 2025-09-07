function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (!userInput) return;

    const chatBox = document.getElementById('chat-box');
    
    // Show user message
    const userMsg = document.createElement('div');
    userMsg.innerHTML = `<b>You:</b> ${userInput}`;
    chatBox.appendChild(userMsg);

    // Simple bot logic
    let botResponse = "Sorry, I don't understand.";

    if (userInput.toLowerCase().includes('hello')) {
        botResponse = "Hi there! How can I help you?";
    } else if (userInput.toLowerCase().includes('how are you')) {
        botResponse = "I'm just a bot, but I'm doing great! 😊";
    } else if (userInput.toLowerCase().includes('bye')) {
        botResponse = "Goodbye! Have a nice day!";
    }

    // Show bot response
    const botMsg = document.createElement('div');
    botMsg.innerHTML = `<b>Bot:</b> ${botResponse}`;
    chatBox.appendChild(botMsg);

    // Scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    document.getElementById('user-input').value = '';
}
