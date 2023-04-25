const chatWidget = document.querySelector('.chat-widget');
const chatWidgetInput = document.querySelector('#chat-widget__input');
const chatWidgetMessages = document.querySelector('.chat-widget__messages');

const message = [
    'Кто тут?',
    'Где ваша совесть?',
    'Добрый день! До свидания!',
    'Мы ничего не будем вам продавать',
    'К сожалению, все операторы сейчас заняты. Не пишите нам больше',
    'Вы не купили ни одного товара для того, чтобы так с нами разговаривать'
]

function time() { // время
    let now = new Date();
    let option = {
        hour: 'numeric',
        minute: 'numeric',
    }
    return now.toLocaleString("ru", option);
}

chatWidget.addEventListener('click', () => { 
    chatWidget.classList.add('chat-widget_active');
});

function bot() {
    return message[Math.floor(Math.random() * (message.length))];

}

window.addEventListener('keyup', (event) => {
    if (event.key == 'Enter' && chatWidgetInput.value.trim() !== '') {
        chatWidgetMessages.innerHTML += `<div class="message message_client">
        <div class="message__time">${time()}</div>
        <div class="message__text">${chatWidgetInput.value}</div>
    </div>`
        setTimeout(() => {
            chatWidgetMessages.innerHTML += `<div class="message">
            <div class="message__time">${time()}</div>
            <div class="message__text">${bot()}!</div>
        </div>`
        }, 1000);
        chatWidgetInput.value = '';
    };
})


